🌐 Personal Portfolio Website

A modern, responsive personal portfolio website developed using HTML, CSS, and JavaScript to showcase my professional profile, technical skills, projects, education, certifications, and contact information.

✨ Features

* 🏠 Home Section – Introduction, professional profile, social media links, and profile image
* 👩‍💻 About Section – Educational background, experience, personal information, and achievements
* 🛠️ Skills Section – Technical skills with animated proficiency bars
* 💼 Projects Section – Project cards with images, descriptions, technologies, GitHub links, and live demos
* 📄 Resume Section – Education, internship experience, certifications, and downloadable CV
* 📩 Contact Section – Contact information and validated contact form
* 📱 Responsive Design – Optimized for desktop, tablet, and mobile devices
* 🎨 Modern UI – Dark theme with gradient effects, glassmorphism, hover effects, and animations
* ✨ AOS Animations – Smooth scroll-based animations throughout the website
* 📊 Animated Counters – Interactive statistics in the About section
* 📈 Animated Skill Bars – Skill progress animations when the section becomes visible
* 🍔 Mobile Navigation – Responsive hamburger menu for smaller screens
* 🔗 Social Integration – LinkedIn, GitHub, X, and email links
* 📬 Contact Form – Client-side validation with Formspree integration
* 📥 Resume Download – Downloadable PDF CV

🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* Font Awesome
* Google Fonts – Inter
* AOS (Animate On Scroll)
* Formspree

📂 Website Sections

🏠 Home

Introduces me as a Computer Science Engineer and Web Developer, with quick links to my projects, contact section, and social profiles.

👩‍💻 About

Provides information about my education, professional interests, contact details, and development journey.

🛠️ Skills

The website currently showcases:

* HTML5
* CSS3
* JavaScript
* React.js
* Node.js
* MySQL
* Git & GitHub
* Responsive Design

💼 Projects

1. WeatherCast

A responsive real-time weather application using a live weather API.

Technologies: HTML5, CSS3, JavaScript, API

2. Expense Tracker

A responsive expense management application for tracking income, expenses, categories, transactions, and balance.

Technologies: HTML5, CSS3, JavaScript, Local Storage

3. Music Player

A responsive music player featuring playback controls, search, shuffle, repeat, Firebase authentication, favorites, and playlists.

Technologies: JavaScript, Firebase, Cloud Firestore, API

📄 Resume

The portfolio includes a dedicated resume section containing:

* B.Tech Computer Science Engineering
* Java Internship
* Professional Certifications
* Downloadable PDF Resume

📱 Responsive Design

The website has been optimized for different screen sizes:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

CSS media queries and responsive layouts ensure a consistent user experience across devices.

🎯 Requirements Implemented

Requirement	Status
HTML, CSS & JavaScript	✅
Responsive Website	✅
Home Section	✅
About Section	✅
Skills Section	✅
Projects Section	✅
Resume Section	✅
Contact Section	✅
Project Cards	✅
Smooth Scrolling	✅
Hover Animations	✅
Interactive UI	✅
Mobile Navigation	✅
Resume Download	✅
Contact Form Validation	✅
Cross-Screen Optimization	✅

🚀 How to Run Locally

1. Clone the repository:

git clone https://github.com/Sonal-Suryvanshi10/your-repository-name.git

2. Open the project folder:

cd your-repository-name

3. Copy `.env.example` to `.env` and set the Formspree endpoint, contact email, and certificate URLs:

cp .env.example .env

4. Start the local website:

node serve.mjs

Open the printed local URL in your browser. The server rebuilds `dist` from `.env` each time it starts. Do not open `PERSONAL-PORTFOLIO-WEBSITE/index.html` directly or use Live Server on that source folder: browsers cannot read `.env`, so the form and certificate links will not be configured.

For Cloudflare Workers, the deployed site must also be built from `dist`.

To deploy from Cloudflare Workers Builds, set these five build environment variables in the Cloudflare dashboard (`FORMSPREE_ENDPOINT`, `CONTACT_EMAIL`, `CERT_JAVASCRIPT_URL`, `CERT_GENERATIVE_AI_URL`, and `CERT_ENGLISH_IT_URL`), use `node build.mjs` as the build command, and `npx wrangler deploy` as the deploy command. The included `wrangler.jsonc` points the Worker to the generated `dist` assets. For local deployment, `node build.mjs` reads the ignored `.env`, then run `npx wrangler deploy`.

Do not commit `.env` or `dist`.

The generated browser files necessarily contain the Formspree endpoint and certificate URLs so the contact form and certificate links work. This keeps them out of the GitHub source, but does not hide them from people inspecting the public website.

📁 Project Structure

Repository/
│
├── .env.example
├── build.mjs
├── PERSONAL-PORTFOLIO-WEBSITE/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── config.js
│   ├── ProfilePic.jpeg
│   ├── weatherCast.png
│   ├── ExpenceWeb.png
│   ├── musicWeb.png
│   └── Sonal_Resume.pdf
└── README.md

📬 Contact

Sonal Suryvanshi

* 📧 Email: Set through `CONTACT_EMAIL` in `.env`
* 💼 LinkedIn: Sonal Suryvanshi
* 🐙 GitHub: Sonal-Suryvanshi10
* 𝕏 X: @sonalcse132

❤️ Acknowledgement

Built with HTML, CSS, and JavaScript with a focus on responsive design, modern UI, accessibility, and user experience.

⸻

⭐ If you like this project, consider giving the repository a star!
