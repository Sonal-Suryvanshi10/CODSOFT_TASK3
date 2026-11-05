import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const rootDirectory = path.dirname(fileURLToPath(import.meta.url));
const outputDirectory = path.join(rootDirectory, 'dist');
const build = spawnSync(process.execPath, [path.join(rootDirectory, 'build.mjs')], {
    cwd: rootDirectory,
    stdio: 'inherit'
});

if (build.error) {
    throw build.error;
}
if (build.status !== 0) {
    process.exit(build.status ?? 1);
}

const contentTypes = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.js': 'text/javascript; charset=utf-8',
    '.pdf': 'application/pdf',
    '.png': 'image/png'
};

const server = createServer(async (request, response) => {
    let pathname;
    try {
        pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    } catch {
        response.writeHead(400).end('Bad Request');
        return;
    }

    const relativePath = pathname === '/' ? 'index.html' : pathname.slice(1);
    const filePath = path.resolve(outputDirectory, relativePath);
    if (!filePath.startsWith(`${outputDirectory}${path.sep}`)) {
        response.writeHead(403).end('Forbidden');
        return;
    }

    try {
        const fileStat = await stat(filePath);
        if (!fileStat.isFile()) {
            response.writeHead(404).end('Not Found');
            return;
        }

        response.writeHead(200, {
            'Content-Length': fileStat.size,
            'Content-Type': contentTypes[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream',
            'X-Content-Type-Options': 'nosniff'
        });
        createReadStream(filePath).pipe(response);
    } catch (error) {
        if (error.code === 'ENOENT') {
            response.writeHead(404).end('Not Found');
            return;
        }
        console.error('Failed to serve website file:', error);
        response.writeHead(500).end('Internal Server Error');
    }
});

const port = Number(process.env.PORT || 4173);
server.listen(port, '127.0.0.1', () => {
    console.log(`Portfolio website available at http://127.0.0.1:${port}`);
});
