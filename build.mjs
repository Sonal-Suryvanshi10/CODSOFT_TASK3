import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDirectory = path.dirname(fileURLToPath(import.meta.url));
const sourceDirectory = path.join(rootDirectory, 'PERSONAL-PORTFOLIO-WEBSITE');
const outputDirectory = path.join(rootDirectory, 'dist');

function parseEnvFile(contents) {
    return Object.fromEntries(
        contents
            .split(/\r?\n/)
            .map(line => line.trim())
            .filter(line => line && !line.startsWith('#'))
            .map(line => {
                const separator = line.indexOf('=');
                if (separator < 1) {
                    throw new Error(`Invalid .env entry: ${line}`);
                }

                const key = line.slice(0, separator).trim();
                let value = line.slice(separator + 1).trim();
                if (
                    (value.startsWith('"') && value.endsWith('"')) ||
                    (value.startsWith("'") && value.endsWith("'"))
                ) {
                    value = value.slice(1, -1);
                }

                return [key, value];
            })
    );
}

async function loadEnvFile() {
    try {
        return parseEnvFile(await readFile(path.join(rootDirectory, '.env'), 'utf8'));
    } catch (error) {
        if (error.code === 'ENOENT') {
            return {};
        }
        throw error;
    }
}

function getRequiredUrl(name, env, hostname) {
    const value = process.env[name] || env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    let url;
    try {
        url = new URL(value);
    } catch {
        throw new Error(`${name} must be a valid HTTPS URL`);
    }

    if (url.protocol !== 'https:' || url.hostname !== hostname) {
        throw new Error(`${name} must use https://${hostname}`);
    }

    return url.toString();
}

const env = await loadEnvFile();
const contactEmail = process.env.CONTACT_EMAIL || env.CONTACT_EMAIL;
if (!contactEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) {
    throw new Error('CONTACT_EMAIL must be a valid email address');
}

const config = {
    formspreeEndpoint: getRequiredUrl('FORMSPREE_ENDPOINT', env, 'formspree.io'),
    contactEmail,
    certificates: {
        javascript: getRequiredUrl('CERT_JAVASCRIPT_URL', env, 'drive.google.com'),
        generativeAi: getRequiredUrl('CERT_GENERATIVE_AI_URL', env, 'drive.google.com'),
        englishIt: getRequiredUrl('CERT_ENGLISH_IT_URL', env, 'drive.google.com')
    }
};

await mkdir(outputDirectory, { recursive: true });
await cp(sourceDirectory, outputDirectory, { recursive: true, force: true });
await writeFile(
    path.join(outputDirectory, 'config.js'),
    `window.portfolioConfig = Object.freeze(${JSON.stringify(config)});\n`
);

console.log(`Built website into ${path.relative(rootDirectory, outputDirectory)}/`);
