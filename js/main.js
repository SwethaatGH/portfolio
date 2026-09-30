// ─────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────
const portfolioData = {
    professional: [
    { title:"Teaching Assistant, CSC 505 (Algorithms)", company:"NC State University Graduate School", date:"May 2026 – Aug 2026",
      description:"Supported graduate-level Design and Analysis of Algorithms under Dr. Steffen Heber, developing grading rubrics and reference solutions, and grading homework, quizzes and exams with targeted feedback on complexity analysis and implementation.",
      tech:["Algorithms","Teaching"] },
    { title:"Research Assistant", company:"CAMCORE", date:"Apr 2026 – Aug 2026",
      description:"Maintain a 5TB+ geospatial climate database across 6 sources, building agentic ETL pipelines for autonomous data detection, validation and ingestion. Deployed production AWS Lightsail infrastructure, expanding data access to 300+ researchers.",
      tech:["AWS Lightsail","ETL","Geospatial Data"] },
    { title:"Research Assistant", company:"STAC Lab, NC State Computer Science", date:"Jan 2026 – Aug 2026",
      description:"Built a multi-modal geospatial deep learning pipeline (SRF, U-Net, ResNet) fusing 35M+ Landsat/land-cover/OSM raster samples and 1B+ LiDAR points for high-resolution Land Surface Temperature prediction, cutting RMSE 28% over baseline.",
      tech:["PyTorch","U-Net","ResNet","Geospatial ML"] },
    { title:"Deep Learning Research Intern", company:"IIIT Bangalore", date:"Dec 2024 – Apr 2025",
      description:"Engineered a real-time eye-gaze capture system processing 7.2M+ frames across 200+ sessions, cutting post-processing time 50%. Built a DETR pipeline predicting gaze coordinates from heatmap video, improving accuracy 22% over an RNN baseline.",
      tech:["PyTorch","DETR","Computer Vision"] },
    { title:"Software Development Intern", company:"IIM Calcutta", date:"Jan 2024 – May 2024",
      description:"Built a Selenium + REST API pipeline extracting 500K+ real-time tourism records from heterogeneous, dynamically rendered sources, with a multi-stage pipeline for schema mapping, deduplication, validation and normalization.",
      tech:["Selenium","REST API","Python"] },
    { title:"Software Development Intern", company:"Suguna Group", date:"Jan 2024 – Apr 2024",
      description:"Engineered a company-wide IT asset provisioning system automating onboarding through return, with asynchronous AJAX modules for real-time asset tracking across 10K+ employees, 30+ departments and 30K+ assets.",
      tech:["PHP","MySQL","AJAX"] },
    { title:"UI/UX Designer", company:"Pricol Limited", date:"Jun 2023 – Jul 2023",
      description:"Designed end-to-end user flows, wireframes and interactive prototypes for an enterprise employee travel management application, collaborating across engineering teams to translate requirements into feasible designs.",
      tech:["Figma","Prototyping","UX Research"] }
],
    projects: [
    { title:"Elemental Quest — Multiplayer Platformer & Networking Engine", company:"Personal", date:"Aug 2026 – Present",
      description:"Designed a modular C++17 game engine with core subsystems for physics, rendering, multithreaded job execution and runtime object management. Integrated a ZeroMQ-based networking layer for authoritative world simulation and synchronized state propagation, validated through a cooperative multiplayer platformer with deterministic simulation and thread-safe update loops.",
      tech:["C++17","ZeroMQ","Multithreading","Game Engine"] },
    { title:"ByteBite — Food Delivery & Sustainability Platform", company:"NC State University", date:"Oct – Dec 2025",
      description:"Full-stack sustainable food delivery platform (React, Node.js, Express, MongoDB/Mongoose) backed by 120+ unit/integration tests in a CI pipeline. Features a cancel-to-redistribute mechanism turning canceled orders into discounted offers or shelter/NGO donations, 3D dish previews, Leaflet-based live delivery tracking, a personalized recommendation engine, and an admin dashboard for surplus inventory.",
      tech:["React","Node.js","Express","MongoDB","CI/CD"] },
    { title:"StackShack — Full-Stack Campus Dining Application", company:"NC State University", date:"Oct – Dec 2025",
      description:"Modular, production-ready campus dining app (Flask, MySQL) with 230+ tests at 85.8% coverage via automated CI. Includes role-based staff/admin management, dynamic-pricing custom builds, real-time order tracking, secure digital wallet/campus card payments, and personalized dietary profiling with automated ingredient suggestions.",
      tech:["Flask","MySQL","CI/CD","Testing"] },
    { title:"AdSight — Webcam-Based Gaze Prediction for Ad Placement", company:"NC State University", date:"Oct – Dec 2025",
      description:"Gaze-estimation pipeline predicting screen-coordinate attention from standard webcam images, trained on MPIIGaze. Benchmarked a CNN baseline against DETR (adapted from object detection to coordinate regression via Hungarian matching), then accumulated predictions into heatmaps to surface high-attention regions for dynamic ad placement.",
      tech:["PyTorch","DETR","CNN","MPIIGaze"] },
    { title:"SafeSense — Industrial IoT Safety Monitor", company:"PSG College of Technology", date:"Feb – Mar 2024",
      description:"Embedded IoT safety system on an ESP32, integrating smoke, voltage and temperature sensors to track hazardous factory-floor conditions in real time, streaming readings to a live web dashboard for early hazard detection.",
      tech:["ESP32","Embedded C","IoT"] },
    { title:"Travelog — Corporate Travel Management App", company:"PSG College of Technology", date:"Oct – Nov 2023",
      description:"Full-stack mobile app for end-to-end organizational travel management, from trip request through approval to expense reconciliation, with distinct employee/admin roles and a relational schema modeling multi-stage approval workflows.",
      tech:["React Native","Node.js","MySQL"] },
    { title:"Lyceum — Campus Audio Platform", company:"PSG College of Technology", date:"Sep – Oct 2023",
      description:"Desktop app (Java Swing/AWT) for centralized club and association audio content management, backed by a SQL schema for metadata, categorization and role-based access control, with JUnit-tested data-access logic.",
      tech:["Java Swing","AWT","SQL","JUnit"] },
    { title:"FoliScan — Plant Leaf Disease Classifier", company:"PSG College of Technology", date:"Jun – Jul 2023",
      description:"CNN image classifier (Keras) for multi-class plant leaf disease detection, served via a stateless Flask REST API handling upload, preprocessing, inference and structured JSON response.",
      tech:["Keras","CNN","Flask"] },
    { title:"HeatShield — Real-Time Heatwave Alert System", company:"Personal", date:"Jun – Jul 2023",
      description:"Django backend polling regional temperature data with a SQL-logged alert history and Twilio-integrated SMS dispatch on threshold-based alerts, containerized with Docker for reproducible, independently scalable deployment.",
      tech:["Django","Docker","Twilio"] },
    { title:"UniSphere — Campus Booking & Navigation System", company:"PSG College of Technology", date:"Feb – Mar 2023",
      description:"Normalized SQLite schema and FastAPI backend (served via uvicorn) for a multi-role campus booking system, with conflict-free scheduling logic and hashlib-based credential hashing for custom authentication.",
      tech:["SQLite","FastAPI","uvicorn"] }
],
    research: [
    { title:"To The Point: From Dynamic Heatmap Videos to Gaze Points", company:"ACM", date:"May 2025",
      description:"Built and annotated a 1K+ frame heatmap gaze dataset and proposed a DETR-based framework converting temporal heatmap videos into precise gaze-point predictions, outperforming RNN and YOLO+LSTM baselines for scalable cognitive-load analysis.",
      tech:["Eye Tracking","DETR","RNN","YOLO+LSTM"] },
    { title:"Soil Heat Flux Dynamics Modeling Using Temporal DL", company:"Springer LLNS", date:"Apr 2025",
      description:"Developed a stacking ensemble of TCN, LSTM and ANN models on 60K+ multi-season temporal records to predict soil heat flux and optimize plant root-zone temperature for sustainable agriculture.",
      tech:["TCN","LSTM","ANN","TensorFlow"] },
    { title:"Profecta — A Smart Logistics System", company:"Taylor & Francis CRC Press", date:"Jul 2024",
      description:"Built a multi-constraint logistics route optimizer combining Nearest Neighbor, Bidirectional Search and urgency-based heuristics with 6 batch-splitting strategies, reducing penalty cost by up to 78%, plus UX-tested map visualizations for route comparison.",
      tech:["Route Optimization","Heuristics","Python"] },
    { title:"DecentraCheque — Decentralized Smart Cheque Validation", company:"Submitted", date:"2024",
      description:"Engineered a smart-contract-based cheque verification system with a Siamese-ResNet18 (CBAM attention) model trained on 25K+ images for fraud-resistant signature validation (98% precision).",
      tech:["Blockchain","Siamese-ResNet","Smart Contracts","Python"] },
    { title:"Modeling Ekman Spiral Using PINNs for Ocean Circulation", company:"Submitted", date:"2024",
      description:"Modeled oceanic dynamics using Physics-Informed Neural Networks in DeepXDE, trained on simulated ocean current datasets to improve Ekman spiral predictions.",
      tech:["PINNs","DeepXDE"] }
],
    hackathons: [
    { title:"WolfTrace — Campus Incident Intelligence", company:"Hack NC State", date:"2026",
      description:"Noir-styled campus incident intelligence and moderation platform (Next.js 15, TypeScript, React, FastAPI) that transforms raw multi-format tips and multimedia into structured case files via an agentic AI pipeline. Built a Neo4j-backed force-directed evidence graph, a Kanban case wall, a priority-sorted tip triage inbox, and a RAG chatbot (Gemini, Groq) for querying case histories in real time.",
      tech:["Next.js","TypeScript","FastAPI","Neo4j","RAG","Gemini","Groq"] },
    { title:"IntelliCTS — Cheque Parsing System (Top 3 Campus-wide)", company:"Standard Chartered Bank Hackathon", date:"2024",
      description:"Automated cheque-processing system modeled on India's RBI-mandated Cheque Truncation System, using TensorFlow and OCR/ICR to extract and validate structured fields (account number, IFSC, amount, handwritten payee names) from scanned cheques, supporting bulk batch processing.",
      tech:["TensorFlow","OCR","ICR","Python"] },
    { title:"GreenFPO — Satellite-Based Crop Advisory (Finalist among 200+ teams)", company:"NABARD AgriSure Greenathon", date:"2024",
      description:"Intelligent crop advisory platform transforming raw satellite imagery into actionable insights for Farmer Producer Organisations, combining geospatial analysis with ML-driven recommendations to support data-informed agricultural decisions.",
      tech:["Geospatial Analysis","Python","Machine Learning"] },
    { title:"Seal — Blockchain Land Record Management", company:"Smart India Hackathon", date:"2023",
      description:"Land registry platform designed to eliminate fraud and disputes in property ownership, using Solidity smart contracts and an immutable ledger to enforce tamper-proof, verifiable land-title records.",
      tech:["Solidity","Python","React","Node.js"] }
]
};

const trashItems = [
    { iconType:'folder', title:'portfolio_old', sub:'old version portfolio' },
    { iconType:'pdf',    title:'resume_old.pdf', sub:'old resume' },
];

// ─────────────────────────────────────────────────
// SHARED ICONS — same artwork as the desktop icons
// ─────────────────────────────────────────────────
const FOLDER_ICON = (size) => `<img src="assets/folder.webp" alt="" width="${size}" height="${size}" style="object-fit:contain;">`;
const PDF_ICON = (size) => `<svg viewBox="0 0 64 64" fill="none" width="${size}" height="${size}"><path d="M16 4h24l12 12v40c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4V8c0-2.2 1.8-4 4-4z" fill="white" stroke="#d1d5db" stroke-width="1.5"/><path d="M40 4v12h12L40 4z" fill="#f3f4f6" stroke="#d1d5db" stroke-width="1.5"/><rect x="20" y="28" width="24" height="2" rx="1" fill="#374151" opacity="0.8"/><rect x="20" y="34" width="20" height="2" rx="1" fill="#374151" opacity="0.6"/><rect x="20" y="40" width="22" height="2" rx="1" fill="#374151" opacity="0.6"/><rect x="20" y="46" width="16" height="2" rx="1" fill="#374151" opacity="0.4"/><text x="32" y="22" font-family="sans-serif" font-size="7" font-weight="700" fill="#111827" text-anchor="middle">PDF</text></svg>`;
const GMAIL_ICON = (size) => `<svg viewBox="52 42 88 66" width="${size}" height="${size}"><path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/><path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/><path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/><path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/><path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/></svg>`;

// ─────────────────────────────────────────────────
// SPOTLIGHT ICONS — inline SVGs
// ─────────────────────────────────────────────────
function getSpotlightIconSVG(iconType) {
    const uid = Math.random().toString(36).slice(2,7);
    const icons = {
        // Same artwork as the desktop/dock icons, so Spotlight results match what's on-screen
        folder:   FOLDER_ICON(30),
        pdf:      PDF_ICON(28),
        terminal: `<img src="assets/terminal.svg" alt="" width="28" height="28" style="object-fit:contain;border-radius:7px;">`,
        contact:  `<img src="assets/contact.webp" alt="" width="30" height="30" style="object-fit:contain;">`,
        location: `<svg viewBox="0 0 40 40" fill="none" width="26" height="26"><defs><linearGradient id="sploc${uid}" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#34d399"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs><path d="M20 3C13.4 3 8 8.4 8 15c0 8 12 22 12 22s12-14 12-22c0-6.6-5.4-12-12-12zm0 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="url(#sploc${uid})"/></svg>`,
        github:   `<svg viewBox="0 0 40 40" fill="none" width="26" height="26"><rect width="40" height="40" rx="9" fill="#24292e"/><path fill="white" d="M20 5C11.7 5 5 11.7 5 20c0 6.6 4.3 12.2 10.2 14.2.7.1 1-.3 1-.7v-2.8c-4.2.9-5-1.8-5-1.8-.7-1.7-1.7-2.2-1.7-2.2-1.3-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.3 1.2.1-.9.5-1.6.9-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5a14 14 0 0 1 3.7-.5c1.3 0 2.5.2 3.7.5 2.8-1.9 4.1-1.5 4.1-1.5.8 2 .3 3.6.1 4 .9 1 1.5 2.4 1.5 4 0 5.7-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.8 1 .7C30.7 32.2 35 26.6 35 20c0-8.3-6.7-15-15-15z"/></svg>`,
        linkedin: `<svg viewBox="0 0 40 40" fill="none" width="26" height="26"><rect width="40" height="40" rx="9" fill="#0077b5"/><path fill="white" d="M13 29h-4V16h4v13zm-2-14.8c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM30 29h-4v-6.5c0-1.5 0-3.5-2.1-3.5s-2.4 1.7-2.4 3.4V29h-4V16h3.8v1.8h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V29z"/></svg>`,
    };
    return icons[iconType] || icons['folder'];
}

const spotlightIndex = [
    { title:"Experience",  sub:"IIIT-B · IIM-C · Suguna · Sree Annapoorna · Pricol",    action:"Open",  type:"folder",   key:"professional", iconType:"folder"   },
    { title:"Projects",    sub:"Elemental Quest · ByteBite · StackShack · AdSight · SafeSense", action:"Open", type:"folder", key:"projects", iconType:"folder" },
{ title:"Hackathons",  sub:"WolfTrace · IntelliCTS · NABARD · Smart India",                  action:"Open", type:"folder", key:"hackathons", iconType:"folder" },
{ title:"Research",    sub:"Gaze Points · Soil ML · Logistics · DecentraCheque · PINNs",      action:"Open", type:"folder", key:"research", iconType:"folder" },
{ title:"Resume.pdf",  sub:"Download or preview my resume",                          action:"Open",  type:"resume",                       iconType:"pdf"      },
    { title:"Terminal",    sub:"whoami · skills · experience · projects…",               action:"Open",  type:"terminal",                     iconType:"terminal" },
    { title:"Contact",     sub:"Say Hello",                                              action:"Open",  type:"contact",                      iconType:"contact"  },
    { title:"Python",      sub:"Primary language · ML / AI / Backend / Research",       action:"Open",  type:"terminal",                     iconType:"terminal" },
    { title:"React",       sub:"ByteBite, WolfTrace, Travelog",                         action:"Open",  type:"terminal",                     iconType:"terminal" },
    { title:"Location",    sub:"India → Raleigh, NC",                                   action:"Open",  type:"info",                         iconType:"location" },
    { title:"GitHub",      sub:"github.com/SwethaatGH",                                 action:"Open",  type:"link", url:"https://github.com/SwethaatGH",                           iconType:"github"   },
    { title:"LinkedIn",    sub:"linkedin.com/in/swetha-manivasagam",                    action:"Open",  type:"link", url:"https://www.linkedin.com/in/swetha-manivasagam/",         iconType:"linkedin" },
];

// ─────────────────────────────────────────────────
// TERMINAL COMMANDS
// ─────────────────────────────────────────────────
const terminalCommands = {
    help: {
        desc: "List commands",
        fn: () => `<span class="t-head">AVAILABLE COMMANDS</span>

  whoami         quick introduction
  skills         technical strengths
  experience     internships and industry work
  projects       selected builds
  research       papers and research themes
  education      academic background
  contact        contact options
  github         open GitHub
  linkedin       open LinkedIn
  scholar        open Google Scholar
  medium         open Medium
  clear          clear terminal
  hot-chocolate  ...`
    },

    whoami: {
    desc: "About Swetha",
    fn: () => `<span class="t-head">WHOAMI</span>

<span class="t-highlight">Swetha Manivasagam</span>
MS CS student with published deep learning research experience in
spatio-temporal modelling and building RESTful APIs, C++ systems,
data pipelines and cloud infrastructure for large-scale data through
production deployment.

Currently building, researching and seeking Summer 2026 opportunities.`
},

skills: {
    desc: "Technical strengths",
    fn: () => `<span class="t-head">TECHNICAL STRENGTHS</span>

<span class="t-highlight">Languages</span>
  Python · C · C++ · Java · JavaScript · SQL

<span class="t-highlight">AI & ML</span>
  PyTorch · TensorFlow · Keras · OpenCV · Transformers

<span class="t-highlight">Data & Databases</span>
  Pandas · NumPy · PostgreSQL · MongoDB · Neo4j
  Streamlit · Tableau · Power BI

<span class="t-highlight">Frontend</span>
  React.js · React Native · Next.js · HTML · CSS
  Bootstrap · Material Design Lite · Figma

<span class="t-highlight">Backend & DevOps</span>
  Django · Flask · FastAPI · Express.js · PHP
  RESTful APIs · JUnit · Linux · Git · Docker · Postman`
},
    experience: {
    desc: "Internships and work",
    fn: () => `<span class="t-head">EXPERIENCE</span>

<span class="t-highlight">CAMCORE</span> — Research Assistant
  Apr 2026 – Aug 2026
  5TB+ geospatial climate database, agentic ETL pipelines,
  AWS Lightsail infra serving 300+ researchers.

<span class="t-highlight">STAC Lab, NC State</span> — Research Assistant
  Jan 2026 – Aug 2026
  Multi-modal LST prediction pipeline (SRF/U-Net/ResNet),
  35M+ raster samples, 28% RMSE improvement.

<span class="t-highlight">IIIT Bangalore</span> — Deep Learning Research Intern
  Dec 2024 – Apr 2025
  Real-time gaze capture system (7.2M+ frames), DETR-based
  gaze prediction pipeline, 22% improvement over RNN baseline.

<span class="t-highlight">IIM Calcutta</span> — Software Development Intern
  Jan 2024 – May 2024
  Selenium + REST API pipeline collecting 500K+ tourism records.

<span class="t-highlight">Suguna Group</span> — Software Development Intern
  Jan 2024 – Apr 2024
  AJAX-driven IT asset provisioning system for 10K+ employees.

<span class="t-highlight">Pricol Limited</span> — UI/UX Designer
  Jun 2023 – Jul 2023
  UX flows and prototypes for an enterprise travel management app.`
},

projects: {
    desc: "Selected projects",
    fn: () => `<span class="t-head">SELECTED PROJECTS</span>

<span class="t-highlight">Elemental Quest</span> — C++17 multiplayer game engine
  Physics, rendering, multithreading, ZeroMQ networking
  C++17 · ZeroMQ

<span class="t-highlight">ByteBite</span> — Full-stack food delivery + sustainability
  Cancel-to-redistribute, live tracking, recommendation engine
  React · Node.js · Express · MongoDB

<span class="t-highlight">StackShack</span> — Campus dining application
  230+ tests, 85.8% coverage, CI pipeline
  Flask · MySQL

<span class="t-highlight">AdSight</span> — Webcam gaze prediction for ad placement
  MPIIGaze, CNN vs. DETR, Hungarian matching
  PyTorch · DETR

<span class="t-highlight">SafeSense</span> — Industrial IoT safety monitor
  ESP32 + multi-sensor real-time hazard tracking
  ESP32 · Embedded C`
},

research: {
    desc: "Research papers and themes",
    fn: () => `<span class="t-head">RESEARCH</span>

<span class="t-highlight">Published</span>

  To The Point — ACM, 2025
  Heatmap video → gaze point prediction (DETR)

  Soil Heat Flux Modeling — Springer LLNS, 2025
  TCN + LSTM + ANN ensemble, 60K+ records

  Profecta — Taylor & Francis CRC Press, 2024
  Logistics route optimizer, 78% penalty reduction

<span class="t-highlight">Submitted</span>

  DecentraCheque
  Siamese-ResNet18 cheque signature validation, 98% precision

  Modeling Ekman Spiral Using PINNs
  Physics-informed ocean circulation modeling`
},

    education: {
        desc: "Academic background",
        fn: () => `<span class="t-head">EDUCATION</span>

<span class="t-highlight">North Carolina State University</span>
  Masters in Computer Science
  Aug 2025 – May 2027
  GPA: 4.0 / 4.0

<span class="t-highlight">PSG College of Technology</span>
  Bachelor of Engineering in Computer Science & Engineering
  Oct 2021 – May 2025
  CGPA: 8.83 / 10.0`
    },

    contact: {
        desc: "Contact info",
        fn: () => `<span class="t-head">CONTACT</span>

GitHub    github.com/SwethaatGH
LinkedIn  linkedin.com/in/swetha-manivasagam
Scholar   scholar.google.com/citations?user=MTwTB64AAAAJ
Medium    medium.com/@swethawritescompsci

Type <span class="t-highlight">open contact</span> to send a message directly from the site.`
    },

    github:   { desc:"Open GitHub",         fn:()=>{ window.open('https://github.com/SwethaatGH','_blank'); return 'Opening GitHub…'; }},
    linkedin: { desc:"Open LinkedIn",       fn:()=>{ window.open('https://www.linkedin.com/in/swetha-manivasagam/','_blank'); return 'Opening LinkedIn…'; }},
    scholar:  { desc:"Open Google Scholar", fn:()=>{ window.open('https://scholar.google.com/citations?user=MTwTB64AAAAJ&hl=en','_blank'); return 'Opening Google Scholar…'; }},
    medium:   { desc:"Open Medium",         fn:()=>{ window.open('https://medium.com/@swethawritescompsci/','_blank'); return 'Opening Medium…'; }},
    clear:    { desc:"Clear terminal",      fn:()=>'CLEAR' },
    'hot-chocolate': {
        desc: "...because sometimes you just need a break",
        fn: () => `     )  )
    (  (
   _____)_____
  |           |
  |        |
  |___________|

Hot chocolate ready. Back to building.`
    }
};

function getWelcomeMessage() {
    return `<span class="t-head">SWETHA'S TERMINAL</span>
type <span class="t-highlight">help</span> to see available commands.`;
}

// ─────────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCursorGlow();
    initClock();
    initCalendar();
    initCountdown();
    initWeather();
    initReminders();
    initTechStack();
    initFolders();
    initTools();
    initTerminal();
    initContact();
    initResume();
    initTrash();
    initDock();
    initSpotlight();
    initMenubar();
    initDraggable();
    updateRecentsMenu();
});

// ─────────────────────────────────────────────────
// THEME
// ─────────────────────────────────────────────────
function initTheme() {
    const html = document.documentElement;
    const saved = localStorage.getItem('portfolio-theme') || 'light';
    html.setAttribute('data-theme', saved);
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);
}
function toggleTheme() {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
}

// ─────────────────────────────────────────────────
// CURSOR GLOW
// ─────────────────────────────────────────────────
function initCursorGlow() {
    const glow = document.getElementById('cursor-glow');
    if (!glow) return;
    let mx = window.innerWidth/2, my = window.innerHeight/2, cx = mx, cy = my;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    (function anim() { cx += (mx-cx)*0.09; cy += (my-cy)*0.09; glow.style.left=cx+'px'; glow.style.top=cy+'px'; requestAnimationFrame(anim); })();
}

// ─────────────────────────────────────────────────
// CLOCK
// ─────────────────────────────────────────────────
function initClock() { updateClock(); setInterval(updateClock, 1000); }
function updateClock() {
    const now = new Date();
    const el = document.getElementById('menubar-time');
    if (el) el.textContent = now.toLocaleString('en-US',{weekday:'short',month:'short',day:'numeric',hour:'numeric',minute:'2-digit'});
    const h = now.getHours(), m = now.getMinutes().toString().padStart(2,'0'), ampm = h>=12?'PM':'AM';
    const te=document.getElementById('clock-time'); if(te) te.textContent=`${h%12||12}:${m}`;
    const ae=document.getElementById('clock-ampm'); if(ae) ae.textContent=ampm;
}

// ─────────────────────────────────────────────────
// CALENDAR
// ─────────────────────────────────────────────────
function initCalendar() {
    const now=new Date();
    const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const m=document.getElementById('calendar-month'); if(m) m.textContent=MONTHS[now.getMonth()];
    const d=document.getElementById('calendar-date');  if(d) d.textContent=now.getDate();
    const w=document.getElementById('calendar-day');   if(w) w.textContent=DAYS[now.getDay()];
}

// ─────────────────────────────────────────────────
// COUNTDOWN
// ─────────────────────────────────────────────────
function initCountdown() {
    const grad=new Date('2027-05-01'), start=new Date('2025-08-01');
    function upd() {
        const now=new Date(),rem=grad-now,total=grad-start;
        const days=Math.max(0,Math.ceil(rem/86400000));
        const ne=document.getElementById('countdown-days'); if(ne) ne.textContent=days.toLocaleString();
        const be=document.getElementById('countdown-bar');
        if(be){const pct=Math.max(0,Math.min(100,((total-rem)/total)*100)); be.style.width=pct+'%';}
    }
    upd(); setInterval(upd,60000);
}

// ─────────────────────────────────────────────────
// WEATHER
// ─────────────────────────────────────────────────
function initWeather() {
    const LAT=35.7796, LON=-78.6382;
    const tempEl=document.getElementById('weather-temp');
    const descEl=document.getElementById('weather-desc');
    const detEl=document.getElementById('weather-details');
    if (!tempEl) return;
    const WMO={0:'Clear sky',1:'Mainly clear',2:'Partly cloudy',3:'Overcast',45:'Foggy',48:'Icy fog',51:'Light drizzle',53:'Drizzle',55:'Heavy drizzle',61:'Light rain',63:'Rain',65:'Heavy rain',71:'Light snow',73:'Snow',75:'Heavy snow',80:'Rain showers',81:'Showers',82:'Violent showers',95:'Thunderstorm',99:'Thunderstorm + hail'};
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph`)
        .then(r=>r.json()).then(data=>{
            const cw=data.current_weather;
            const temp=Math.round(cw.temperature), wind=Math.round(cw.windspeed);
            const desc=WMO[cw.weathercode]||'Unknown', emoji=getWeatherEmoji(cw.weathercode,cw.is_day);
            if(tempEl) tempEl.textContent=`${temp}°F`;
            if(descEl) descEl.textContent=`${emoji} ${desc}`;
            if(detEl)  detEl.textContent=`Wind ${wind} mph`;
        }).catch(()=>{
            if(tempEl) tempEl.textContent='72°F';
            if(descEl) descEl.textContent='☀️ Sunny';
            if(detEl)  detEl.textContent='Raleigh, NC';
        });
}
function getWeatherEmoji(code,isDay) {
    if(code===0) return isDay?'☀️':'🌙';
    if(code<=2)  return isDay?'⛅':'🌙';
    if(code===3) return '☁️';
    if(code<=48) return '🌫️';
    if(code<=65) return '🌧️';
    if(code<=75) return '❄️';
    if(code<=82) return '🌦️';
    return '⛈️';
}

// ─────────────────────────────────────────────────
// REMINDERS
// ─────────────────────────────────────────────────
const reminders=[
    {text:'Deploy AdSight',                          done:false},
    {text:'Balsamiq lo-fi prototype',                done:false},
    {text:'Write Medium draft for LiDAR findings',   done:false},
    {text:'Update DecentraCheque lit survey',        done:true},
    {text:'WolfTrace TwelveLabs follow-up',          done:false},
    {text:'Explore Swin Transformer', done:false},
    {text:'Independent study progress meet',         done:true},
];
function initReminders() {
    const list=document.getElementById('reminder-list'); if(!list) return;
    const content=list.closest('.widget-content')||list.parentElement;
    if(content){content.classList.add('reminders-content');content.style.maxHeight='192px';content.style.overflowY='auto';}
    renderReminders();
}
function renderReminders() {
    const list=document.getElementById('reminder-list'); if(!list) return;
    list.innerHTML='';
    reminders.forEach((r,i)=>{
        const el=document.createElement('div');
        el.className='reminder-item'+(r.done?' completed':'');
        el.innerHTML=`<div class="reminder-checkbox"></div><span class="reminder-text">${r.text}</span>`;
        el.onclick=()=>{reminders[i].done=!reminders[i].done;renderReminders();};
        list.appendChild(el);
    });
}

// ─────────────────────────────────────────────────
// TECH STACK — click an icon to open its official site
// ─────────────────────────────────────────────────
function initTechStack() {
    document.querySelectorAll('.tech-icon-item[data-url]').forEach(el => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => window.open(el.dataset.url, '_blank', 'noopener'));
    });
}

// ─────────────────────────────────────────────────
// FOLDERS — one window per folder key, reused on reopen
// ─────────────────────────────────────────────────
let folderWindowCounter = 0;
const openFolderWindows = {}; // key -> { win, title }

function createFolderWindow() {
    const win = document.createElement('div');
    win.className = 'window folder-window';
    win.style.cssText = 'display:none; position:fixed; width:78%; max-width:960px; height:72%; border-radius:14px; overflow:hidden;';
    win.id = `folder-window-dyn-${++folderWindowCounter}`;
    win.innerHTML = `
        <div class="window-titlebar">
            <div class="window-controls">
                <div class="window-control close"></div>
                <div class="window-control minimize"></div>
                <div class="window-control maximize"></div>
            </div>
            <div class="window-title">Folder</div>
            <div class="window-titlebar-end"></div>
        </div>
        <div class="window-content"><div class="cards-container"></div></div>`;
    document.body.appendChild(win);
    initMinMaxForWindow(win);
    makeDraggable(win);
    makeResizable(win);
    return win;
}

function initFolders() {
    const map = {'professional-icon':'professional','projects-icon':'projects','research-icon':'research','hackathons-icon':'hackathons'};
    const titles = {professional:'Experience',projects:'Projects',research:'Research',hackathons:'Hackathons'};

    Object.entries(map).forEach(([id,key]) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('click', () => {
            const existing = openFolderWindows[key];
            if (existing && document.body.contains(existing.win)) {
                restoreFolderWindow(key);
                addRecent(titles[key], id, 'folder', key);
                return;
            }

            const win = createFolderWindow();
            win.querySelector('.window-title').textContent = titles[key];
            const cardsEl = win.querySelector('.cards-container');
            const noMeta = key === 'projects';
            portfolioData[key].forEach((item,i) => {
                const card = document.createElement('div');
                card.className = 'card' + (noMeta ? ' card-no-meta' : ''); card.style.animationDelay = `${i*0.06}s`;
                const meta = noMeta ? '' : `<div class="card-company">${item.company}</div><div class="card-date">${item.date}</div>`;
                card.innerHTML = `<div class="card-title">${item.title}</div>${meta}<div class="card-description">${item.description}</div><div class="card-tech">${item.tech.map(t=>`<span class="tech-tag">${t}</span>`).join('')}</div>`;
                cardsEl.appendChild(card);
            });

            win.querySelector('.window-control.close').addEventListener('click', e => {
                e.stopPropagation();
                closeFolderWindow(key);
            });
            win.querySelector('.window-control.minimize').addEventListener('click', e => {
                e.stopPropagation();
                if (win.style.display==='none') return;
                win.style.display = 'none';
                addMinimizedFolderDockItem(win, titles[key], key);
            });

            openFolderWindows[key] = { win, title: titles[key] };
            openWindowCentered(win);
            addRecent(titles[key], id, 'folder', key);
        });
    });

    const orig = document.getElementById('folder-window');
    if (orig) orig.style.display = 'none';

}

function restoreFolderWindow(key) {
    const entry = openFolderWindows[key];
    if (!entry) return;
    const { win } = entry;
    if (win._minDockItem) { win._minDockItem.remove(); win._minDockSep?.remove(); win._minDockItem=null; win._minDockSep=null; }
    openWindowCentered(win);
}

function closeFolderWindow(key) {
    const entry = openFolderWindows[key];
    if (!entry) return;
    const { win } = entry;
    win.style.display = 'none';
    if (win._minDockItem) { win._minDockItem.remove(); win._minDockSep?.remove(); win._minDockItem=null; win._minDockSep=null; }
    delete openFolderWindows[key];
}

function addMinimizedFolderDockItem(win, title, key) {
    const dock = document.getElementById('dock');
    if (!dock) return;
    const item = document.createElement('div');
    item.className = 'dock-item minimized-dock-item';
    item.title = title;
    item.innerHTML = `
        <div class="dock-icon-wrap">${FOLDER_ICON(40)}</div>
        <div class="dock-tooltip">${title}</div>
        <div class="dock-dot" style="background:rgba(96,165,250,0.9)"></div>`;
    const sep = document.createElement('div');
    sep.className = 'dock-separator minimized-sep';
    item.addEventListener('click', () => { restoreFolderWindow(key); });
    const trashItem = dock.querySelector('[data-app="trash"]');
    if (trashItem) { dock.insertBefore(sep, trashItem); dock.insertBefore(item, trashItem); }
    else { dock.appendChild(sep); dock.appendChild(item); }
    win._minDockItem = item;
    win._minDockSep = sep;
}

// ─────────────────────────────────────────────────
// TOOLS WINDOW
// ─────────────────────────────────────────────────
const toolsData=[
    {name:'VS Code',img:'assets/dock_tools/vscode.png'},{name:'IntelliJ',img:'assets/dock_tools/intellij.png'},
    {name:'PyTorch',img:'assets/dock_tools/pytorch.jpg'},{name:'Pandas',img:'assets/dock_tools/pandas.svg'},
    {name:'NumPy',img:'assets/dock_tools/numpy.svg'},{name:'Tableau',img:'assets/dock_tools/tableau.svg'},
    {name:'Power BI',img:'assets/dock_tools/powerbi.jpeg'},{name:'GitHub',img:'assets/dock_tools/github.jpeg'},
    {name:'MySQL WB',img:'assets/dock_tools/mysqlwb.webp'},{name:'Postman',img:'assets/dock_tools/postman.jpeg'},
    {name:'Overleaf',img:'assets/dock_tools/overleaf.jpg'},{name:'Microsoft 365',img:'assets/dock_tools/microsoft365.png'},
    {name:'Notion',img:'assets/dock_tools/notion.png'},{name:'Figma',img:'assets/dock_tools/figma.png'},
    {name:'AnyDesk',img:'assets/dock_tools/anydesk.png'},
];
function initTools() {
    const win=document.getElementById('tools-window');
    const cont=document.getElementById('tools-content');
    const closeB=document.getElementById('tools-close');
    const icon=document.getElementById('tools-icon');
    if (!cont) return;
    cont.innerHTML=`<div class="tools-grid">${toolsData.map(t=>`<div class="tool-item"><div class="tool-icon-wrap"><img src="${t.img}" alt="${t.name}" class="tool-img"></div><div class="tool-name">${t.name}</div></div>`).join('')}</div>`;
    if (icon) icon.addEventListener('click', () => openWindowCentered(win));
    if (closeB) closeB.onclick = () => { if(win) win.style.display='none'; };

    const minBtn = document.getElementById('tools-minimize');
    if (minBtn) minBtn.addEventListener('click', e => {
        e.stopPropagation();
        if (!win||win.style.display==='none') return;
        win.style.display='none';
        const toolsDockItem = document.getElementById('tools-icon');
        if (toolsDockItem) {
            let dot=toolsDockItem.querySelector('.dock-dot');
            if (!dot) { dot=document.createElement('div'); dot.className='dock-dot'; toolsDockItem.appendChild(dot); }
            dot.style.background='rgba(255,255,255,0.9)';
        }
        function restoreFn() { openWindowCentered(win); }
        document.getElementById('tools-icon')?.addEventListener('click', restoreFn, {once:true});
    });
    initMinMaxForWindow(win);
}

// ─────────────────────────────────────────────────
// TERMINAL
// ─────────────────────────────────────────────────
let termHistory=[], histIdx=-1, inputBuf='';
function initTerminal() {
    const win=document.getElementById('terminal-window');
    const hist=document.getElementById('terminal-history');
    const input=document.getElementById('terminal-input');
    const ac=document.getElementById('terminal-autocomplete');
    const closeBtn=document.getElementById('terminal-close');
    if (!win||!hist||!input) return;
    let welcomed=false;

    function openTerminal() {
        openWindowCentered(win);
        setTimeout(()=>input.focus(),80);
        if (!welcomed) { addOutput('',getWelcomeMessage()); welcomed=true; }
    }

    function addOutput(cmd,out) {
        const entry=document.createElement('div'); entry.className='terminal-entry';
        if (cmd) { entry.innerHTML=`<div class="terminal-entry-cmd"><span class="t-prompt">swetha</span><span class="t-at">@</span><span class="t-machine">portfolio</span><span class="t-sep"> % </span><span class="t-cmd-text">${escHtml(cmd)}</span></div><div class="terminal-entry-out">${out}</div>`; }
        else { entry.innerHTML=`<div class="terminal-entry-out">${out}</div>`; }
        hist.appendChild(entry); hist.scrollTop=hist.scrollHeight;
    }

    function runCmd(raw) {
        const cmd=raw.trim().toLowerCase();
        if (!cmd) return;
        termHistory.unshift(raw.trim()); histIdx=-1; inputBuf='';
        if (cmd==='clear') { hist.innerHTML=''; addOutput('',getWelcomeMessage()); return; }
        const openMatch=raw.trim().toLowerCase().match(/^open\s+(\w+)$/);
        if (openMatch) {
            const t=openMatch[1];
            if(['professional','experience'].includes(t)){addOutput(raw.trim(),'<span class="t-highlight">Opening Experience…</span>');setTimeout(()=>document.getElementById('professional-icon')?.click(),200);return;}
            if(t==='projects'){addOutput(raw.trim(),'<span class="t-highlight">Opening Projects…</span>');setTimeout(()=>document.getElementById('projects-icon')?.click(),200);return;}
            if(t==='research'){addOutput(raw.trim(),'<span class="t-highlight">Opening Research…</span>');setTimeout(()=>document.getElementById('research-icon')?.click(),200);return;}
            if(t==='hackathons'){addOutput(raw.trim(),'<span class="t-highlight">Opening Hackathons…</span>');setTimeout(()=>document.getElementById('hackathons-icon')?.click(),200);return;}
            if(t==='contact'){addOutput(raw.trim(),'<span class="t-highlight">Opening Contact…</span>');setTimeout(openContact,200);return;}
        }
        const def=terminalCommands[cmd];
        if (def) { const r=def.fn(); if(r==='CLEAR'){hist.innerHTML='';addOutput('',getWelcomeMessage());return;} addOutput(raw.trim(),r); }
        else { addOutput(raw.trim(),`<span style="color:#888">command not found: ${escHtml(cmd)}</span>\ntype <span class="t-highlight">help</span> for commands.`); }
    }

    const allCmds=[...Object.keys(terminalCommands),'open professional','open projects','open research','open hackathons','open contact'];
    let acItems=[], acSel=-1;
    function showAc(val){if(!val){hideAc();return;}const m=allCmds.filter(c=>c.startsWith(val.toLowerCase())&&c!==val.toLowerCase());if(!m.length){hideAc();return;}acItems=m.slice(0,6);acSel=-1;ac.innerHTML=acItems.map((x,i)=>`<div class="autocomplete-item" data-i="${i}"><span>${escHtml(x)}</span><span class="autocomplete-hint">${terminalCommands[x]?.desc||''}</span></div>`).join('');ac.classList.add('open');ac.querySelectorAll('.autocomplete-item').forEach(el=>{el.addEventListener('mousedown',e=>{e.preventDefault();input.value=acItems[+el.dataset.i];hideAc();input.focus();});});}
    function hideAc(){ac.classList.remove('open');acItems=[];acSel=-1;}
    function updateAcSel(){ac.querySelectorAll('.autocomplete-item').forEach((el,i)=>el.classList.toggle('selected',i===acSel));if(acSel>=0)input.value=acItems[acSel];}

    input.addEventListener('input',()=>showAc(input.value));
    input.addEventListener('keydown',e=>{
        if(e.key==='Enter'){hideAc();runCmd(input.value);input.value='';}
        else if(e.key==='ArrowUp'){e.preventDefault();if(ac.classList.contains('open')){acSel=Math.max(0,acSel-1);updateAcSel();}else{if(histIdx<termHistory.length-1){if(histIdx===-1)inputBuf=input.value;histIdx++;input.value=termHistory[histIdx];}}}
        else if(e.key==='ArrowDown'){e.preventDefault();if(ac.classList.contains('open')){acSel=Math.min(acItems.length-1,acSel+1);updateAcSel();}else{if(histIdx>0){histIdx--;input.value=termHistory[histIdx];}else if(histIdx===0){histIdx=-1;input.value=inputBuf;}}}
        else if(e.key==='Tab'){e.preventDefault();if(ac.classList.contains('open')&&acItems.length){input.value=acItems[acSel>=0?acSel:0];hideAc();}}
        else if(e.key==='Escape'){hideAc();}
    });
    if(closeBtn) closeBtn.onclick=()=>{win.style.display='none';hideAc();};

    const minBtn=document.getElementById('terminal-minimize');
    if(minBtn) minBtn.addEventListener('click',e=>{
        e.stopPropagation();
        win.style.display='none'; hideAc();
        const termDockItem=document.querySelector('.dock-item[data-app="terminal"]');
        if(termDockItem){
            let dot=termDockItem.querySelector('.dock-dot');
            if(!dot){dot=document.createElement('div');dot.className='dock-dot';termDockItem.appendChild(dot);}
            dot.style.background='rgba(255,255,255,0.9)';
        }
    });

    win._open=openTerminal;
    initMinMaxForWindow(win);
}
function openTerminalWindow(){const w=document.getElementById('terminal-window');if(w?._open)w._open();else openWindowCentered(w);}

// ─────────────────────────────────────────────────
// CONTACT — Web3Forms
// ─────────────────────────────────────────────────
function initContact() {
    const win=document.getElementById('contact-window');
    const closeB=document.getElementById('contact-close');
    const icon=document.getElementById('contact-icon');

    const contentEl=document.getElementById('contact-form-content');
    if(contentEl){
        contentEl.innerHTML=buildContactForm();
        setupContactForm();
    }

    if(icon) icon.addEventListener('click',()=>{openContact();addRecent('Contact','contact-icon','contact','');});
    if(closeB) closeB.onclick=()=>{if(win)win.style.display='none';};

    const minBtn=document.getElementById('contact-minimize');
    if(minBtn) minBtn.addEventListener('click',e=>{
        e.stopPropagation();
        if(!win||win.style.display==='none') return;
        win.style.display='none';
        addMinimizedGenericDockItem(win,'Contact','contact');
    });
    initMinMaxForWindow(win);
}

function buildContactForm() {
    return `
    <div class="contact-form-inner">
        <div class="contact-form-header">
            <div class="contact-form-icon">${GMAIL_ICON(42)}</div>
            <div>
                <div class="contact-form-title">Say Hello!</div>
                <div class="contact-form-sub">I'd love to hear from you</div>
            </div>
        </div>
        <form id="web3form" novalidate>
            <input type="hidden" name="access_key" value="7e3089cc-f380-4306-a256-6149125b9b31">
            <input type="hidden" name="subject" value="Portfolio Contact — New Message">
            <input type="checkbox" name="botcheck" style="display:none">
            <input class="cf-input" type="text" id="cf-name" name="name" placeholder="Your Name" aria-label="Your Name" required autocomplete="name">
            <input class="cf-input" type="email" id="cf-email" name="email" placeholder="Email Address" aria-label="Email Address" required autocomplete="email">
            <textarea class="cf-input cf-textarea" id="cf-message" name="message" placeholder="Message" aria-label="Message" required rows="5"></textarea>
            <div class="cf-actions">
                <button type="submit" class="cf-submit" id="cf-submit-btn">Send</button>
            </div>
            <div class="cf-status" id="cf-status"></div>
        </form>
    </div>`;
}

function setupContactForm() {
    const form=document.getElementById('web3form');
    if (!form) return;
    const submitBtn=form.querySelector('#cf-submit-btn');
    const statusEl=document.getElementById('cf-status');
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData=new FormData(form);
        const originalHTML=submitBtn.innerHTML;
        submitBtn.textContent='Sending…';
        submitBtn.disabled=true;
        if(statusEl){statusEl.textContent='';statusEl.className='cf-status';}
        try {
            const response=await fetch('https://api.web3forms.com/submit',{method:'POST',body:formData});
            const data=await response.json();
            if(response.ok){
                if(statusEl){statusEl.textContent='✓ Message sent! I\'ll get back to you soon.';statusEl.className='cf-status cf-success';}
                form.reset();
            } else {
                if(statusEl){statusEl.textContent='✗ '+(data.message||'Something went wrong. Please try again.');statusEl.className='cf-status cf-error';}
            }
        } catch(error) {
            if(statusEl){statusEl.textContent='✗ Network error. Please try again.';statusEl.className='cf-status cf-error';}
        } finally {
            submitBtn.innerHTML=originalHTML;
            submitBtn.disabled=false;
        }
    });
}
function openContact(){openWindowCentered(document.getElementById('contact-window'));}

// ─────────────────────────────────────────────────
// RESUME
// ─────────────────────────────────────────────────
function initResume() {
    const icon=document.getElementById('resume-icon');
    const win=document.getElementById('pdf-window');
    const cb=document.getElementById('pdf-close');
    // Phone browsers can't render a PDF inside an iframe, so open it directly there
    const isPhone=()=>window.matchMedia('(max-width:768px)').matches;
    if(icon) icon.onclick=()=>{if(isPhone())window.open('assets/resume.pdf','_blank');else restoreResumeWindow();addRecent('Resume.pdf','resume-icon','resume','');};
    if(cb)   cb.onclick=()=>{if(!win)return;win.style.display='none';removeResumeDockItem(win);};

    const minBtn=document.getElementById('pdf-minimize');
    if(minBtn) minBtn.addEventListener('click',e=>{
        e.stopPropagation();
        if(!win||win.style.display==='none') return;
        win.style.display='none';
        addMinimizedPDFDockItem(win);
    });
    initMinMaxForWindow(win);
}

function restoreResumeWindow() {
    const win=document.getElementById('pdf-window');
    if(!win) return;
    removeResumeDockItem(win);
    openWindowCentered(win);
}

function removeResumeDockItem(win) {
    win._minDockItem?.remove(); win._minDockSep?.remove();
    win._minDockItem=null; win._minDockSep=null;
}

function addMinimizedPDFDockItem(win) {
    const dock=document.getElementById('dock');
    if(!dock||win._minDockItem) return;
    const item=document.createElement('div');
    item.className='dock-item minimized-dock-item';
    item.title='Resume.pdf';
    item.innerHTML=`
        <div class="dock-icon-wrap">${PDF_ICON(36)}</div>
        <div class="dock-tooltip">Resume.pdf</div>
        <div class="dock-dot"></div>`;
    const sep=document.createElement('div');sep.className='dock-separator minimized-sep';
    item.addEventListener('click',restoreResumeWindow);
    win._minDockItem=item; win._minDockSep=sep;
    const trashItem=dock.querySelector('[data-app="trash"]');
    if(trashItem){dock.insertBefore(sep,trashItem);dock.insertBefore(item,trashItem);}
    else{dock.appendChild(sep);dock.appendChild(item);}
}

// ─────────────────────────────────────────────────
// TRASH
// ─────────────────────────────────────────────────
function trashIconSVG() {
    // Trashed items always show the same folder icon used on the desktop, regardless of what they were
    return `<img src="assets/folder.webp" alt="" width="40" height="40" style="object-fit:contain;">`;
}
function initTrash() {
    const win=document.getElementById('trash-window');
    const cont=document.getElementById('trash-content');
    const closeB=document.getElementById('trash-close');
    if(!cont) return;
    cont.innerHTML=`<div class="trash-flat-list">${trashItems.map(item=>`<div class="trash-item"><div class="trash-item-icon-img">${trashIconSVG(item.iconType)}</div><div class="trash-item-info"><div class="trash-item-title">${item.title}</div><div class="trash-item-sub">${item.sub}</div></div></div>`).join('')}</div>`;
    if(closeB) closeB.onclick=()=>{if(win)win.style.display='none';};
    initMinMaxForWindow(win);
}

// ─────────────────────────────────────────────────
// DOCK
// ─────────────────────────────────────────────────
function initDock() {
    const links={github:'https://github.com/SwethaatGH',linkedin:'https://www.linkedin.com/in/swetha-manivasagam/',scholar:'https://scholar.google.com/citations?user=MTwTB64AAAAJ&hl=en',medium:'https://medium.com/@swethawritescompsci/'};
    document.querySelectorAll('.dock-item').forEach(item=>{
        const app=item.dataset.app; if(!app) return;
        item.addEventListener('click',()=>{
            if(app==='terminal') openTerminalWindow();
            else if(app==='trash') openWindowCentered(document.getElementById('trash-window'));
            else if(app==='tools') openWindowCentered(document.getElementById('tools-window'));
            else if(links[app]) window.open(links[app],'_blank');
        });
    });
    const dock=document.getElementById('dock');
    const items=dock?.querySelectorAll('.dock-item');
    if(!dock||!items) return;
    const RANGE=90,MAX_LIFT=15,MAX_SCALE=1.5;
    dock.addEventListener('mousemove',e=>{
        items.forEach(item=>{
            const r=item.getBoundingClientRect(),cx=r.left+r.width/2,dist=Math.abs(e.clientX-cx);
            if(dist<RANGE){const t=1-dist/RANGE;item.style.transform=`translateY(-${MAX_LIFT*t}px) scale(${1+(MAX_SCALE-1)*t})`;}
            else item.style.transform='';
        });
    });
    dock.addEventListener('mouseleave',()=>items.forEach(i=>i.style.transform=''));
}

// ─────────────────────────────────────────────────
// SPOTLIGHT
// ─────────────────────────────────────────────────
function initSpotlight() {
    const overlay=document.getElementById('spotlight-overlay');
    const input=document.getElementById('spotlight-input');
    const results=document.getElementById('spotlight-results');
    const mbWrap=document.getElementById('menubar-spotlight-wrap');
    if(!overlay||!input) return;
    function open(){overlay.classList.add('open');setTimeout(()=>input.focus(),50);renderResults('');}
    function close(){overlay.classList.remove('open');input.value='';if(results)results.innerHTML='';}
    document.addEventListener('keydown',e=>{if((e.metaKey||e.ctrlKey)&&e.code==='Space'){e.preventDefault();overlay.classList.contains('open')?close():open();}if(e.key==='Escape'&&overlay.classList.contains('open'))close();});
    overlay.addEventListener('click',e=>{if(e.target===overlay)close();});
    if(mbWrap) mbWrap.addEventListener('click',open);
    input.addEventListener('input',()=>renderResults(input.value));
    let selIdx=-1;
    input.addEventListener('keydown',e=>{
        const items=results?.querySelectorAll('.spotlight-result');
        if(!items) return;
        if(e.key==='ArrowDown'){e.preventDefault();selIdx=Math.min(items.length-1,selIdx+1);}
        else if(e.key==='ArrowUp'){e.preventDefault();selIdx=Math.max(-1,selIdx-1);}
        else if(e.key==='Enter'){e.preventDefault();const t=selIdx>=0?items[selIdx]:items[0];t?.click();return;}
        items.forEach((el,i)=>el.classList.toggle('active',i===selIdx));
        if(selIdx>=0) items[selIdx]?.scrollIntoView({block:'nearest'});
    });
    function renderResults(q) {
        selIdx=-1;
        const query=q.toLowerCase().trim();
        const matches=query?spotlightIndex.filter(r=>r.title.toLowerCase().includes(query)||r.sub.toLowerCase().includes(query)):spotlightIndex.slice(0,8);
        if(!matches.length){results.innerHTML=`<div class="spotlight-empty">No results for "${escHtml(q)}"</div>`;return;}
        results.innerHTML=`<div class="spotlight-section-label">${query?'Results':'Quick Access'}</div>`+
            matches.map((r,i)=>`<div class="spotlight-result" data-i="${i}">
                <div class="sr-icon">${getSpotlightIconSVG(r.iconType)}</div>
                <div class="sr-text"><div class="sr-title">${escHtml(r.title)}</div></div>
                <div class="sr-action">${r.action}</div>
            </div>`).join('');
        results.querySelectorAll('.spotlight-result').forEach((el,i)=>{
            el.addEventListener('click',()=>{const r=matches[i];close();setTimeout(()=>handleSpotlightAction(r),150);});
        });
    }
}
function handleSpotlightAction(r) {
    if(r.type==='folder'&&r.key) document.getElementById(r.key+'-icon')?.click();
    else if(r.type==='terminal') openTerminalWindow();
    else if(r.type==='contact')  openContact();
    else if(r.type==='resume')   document.getElementById('resume-icon')?.click();
    else if(r.type==='link'&&r.url) window.open(r.url,'_blank');
}

// ─────────────────────────────────────────────────
// MENUBAR DROPDOWNS
// ─────────────────────────────────────────────────
function initMenubar() {
    document.querySelectorAll('.menubar-item.has-dropdown').forEach(item=>{
        item.addEventListener('click',e=>{
            e.stopPropagation();
            const isOpen=item.classList.contains('open');
            document.querySelectorAll('.menubar-item.has-dropdown').forEach(i=>i.classList.remove('open'));
            if(!isOpen) item.classList.add('open');
        });
    });
    document.addEventListener('click',()=>{document.querySelectorAll('.menubar-item.has-dropdown').forEach(i=>i.classList.remove('open'));});
    const recentsItem=document.getElementById('recents-menu-item');
    if(recentsItem){
        recentsItem.addEventListener('mouseenter',()=>recentsItem.classList.add('submenu-open'));
        recentsItem.addEventListener('mouseleave',()=>recentsItem.classList.remove('submenu-open'));
    }
    document.querySelectorAll('[data-goto]').forEach(el=>{
        el.addEventListener('click',e=>{
            e.stopPropagation();
            document.querySelectorAll('.menubar-item.has-dropdown').forEach(i=>i.classList.remove('open'));
            setTimeout(()=>document.getElementById(el.dataset.goto)?.click(),100);
        });
    });
    document.querySelectorAll('[data-action]').forEach(el=>{
        el.addEventListener('click',e=>{
            e.stopPropagation();
            document.querySelectorAll('.menubar-item.has-dropdown').forEach(i=>i.classList.remove('open'));
            const action=el.dataset.action;
            setTimeout(()=>{
                if(action==='spotlight') document.getElementById('spotlight-overlay')?.classList.add('open');
                else if(action==='contact') openContact();
                else if(action==='terminal') openTerminalWindow();
            },100);
        });
    });
}

// ─────────────────────────────────────────────────
// WINDOW HELPERS
// ─────────────────────────────────────────────────
let zTop=1000;

function openWindowCentered(win) {
    if(!win) return;
    win.style.display='block';
    win.style.zIndex=++zTop;
    requestAnimationFrame(()=>{
        const vw=window.innerWidth, vh=window.innerHeight;
        const rect=win.getBoundingClientRect();
        const winW=rect.width||600, winH=rect.height||400;
        if(win.style.transform&&win.style.transform!=='none'&&win.style.transform.includes('translate')) {
            win.style.transform='none';
            win.style.left=Math.max(0,(vw-winW)/2)+'px';
            win.style.top=Math.max(28,(vh-winH)/2)+'px';
        } else if(!win.style.left||win.style.left==='0px'||win.style.left==='') {
            win.style.transform='none';
            win.style.left=Math.max(0,(vw-winW)/2)+'px';
            win.style.top=Math.max(28,(vh-winH)/2)+'px';
        }
        win.style.animation='none';
        void win.offsetHeight;
        win.style.animation='window-open 0.35s cubic-bezier(0.16,1,0.3,1)';
    });
}
function openWindow(win){openWindowCentered(win);}

// ─────────────────────────────────────────────────
// MIN / MAX
// ─────────────────────────────────────────────────
function initMinMaxForWindow(win) {
    const maxBtn=win.querySelector('.window-control.maximize');
    if(!maxBtn) return;
    win._maximized=false; win._savedRect=null;
    maxBtn.addEventListener('click',e=>{
        e.stopPropagation();
        toggleMaximize(win);
    });
}
function toggleMaximize(win, forceState) {
    const maxBtn=win.querySelector('.window-control.maximize');
    const target = forceState !== undefined ? forceState : !win._maximized;
    if(target && !win._maximized){
        win._savedRect={left:win.style.left,top:win.style.top,width:win.style.width,height:win.style.height,maxWidth:win.style.maxWidth,maxHeight:win.style.maxHeight,transform:win.style.transform,borderRadius:win.style.borderRadius};
        win.style.transform='none';
        win.style.left='0px'; win.style.top='28px';
        win.style.maxWidth='none'; win.style.maxHeight='none';
        win.style.width='100vw'; win.style.height='calc(100vh - 28px)';
        win.style.borderRadius='0';
        win._maximized=true; maxBtn?.classList.add('maximized');
    } else if(!target && win._maximized){
        const savedRect=win._savedRect;
        if(savedRect){
            win.style.left=savedRect.left;win.style.top=savedRect.top;
            win.style.width=savedRect.width;win.style.height=savedRect.height;
            win.style.maxWidth=savedRect.maxWidth||'';win.style.maxHeight=savedRect.maxHeight||'';
            win.style.transform=savedRect.transform;win.style.borderRadius=savedRect.borderRadius||'';
        }
        win._maximized=false; maxBtn?.classList.remove('maximized');
    }
}
function initMinMax(prefix){const win=document.getElementById(`${prefix}-window`);if(win)initMinMaxForWindow(win);}

// ─────────────────────────────────────────────────
// GENERIC MINIMIZED DOCK ITEM
// ─────────────────────────────────────────────────
function addMinimizedGenericDockItem(win,title,type) {
    const dock=document.getElementById('dock');
    if(!dock) return;
    const iconSVGs={
        contact:GMAIL_ICON(34),
    };
    const item=document.createElement('div');
    item.className='dock-item minimized-dock-item';
    item.title=title;
    item.innerHTML=`<div class="dock-icon-wrap">${iconSVGs[type]||''}</div><div class="dock-tooltip">${title}</div><div class="dock-dot"></div>`;
    const sep=document.createElement('div');sep.className='dock-separator minimized-sep';
    item.addEventListener('click',()=>{openWindowCentered(win);item.remove();sep.remove();});
    const trashItem=dock.querySelector('[data-app="trash"]');
    if(trashItem){dock.insertBefore(sep,trashItem);dock.insertBefore(item,trashItem);}
    else{dock.appendChild(sep);dock.appendChild(item);}
}

// ─────────────────────────────────────────────────
// RECENTS
// ─────────────────────────────────────────────────
const recentItems=[];
const MAX_RECENTS=6;
function addRecent(label,iconId,type,key){
    const exists=recentItems.findIndex(r=>r.label===label);
    if(exists!==-1) recentItems.splice(exists,1);
    recentItems.unshift({label,iconId,type,key});
    if(recentItems.length>MAX_RECENTS) recentItems.length=MAX_RECENTS;
    updateRecentsMenu();
}
function updateRecentsMenu(){
    const list=document.getElementById('recents-submenu');
    if(!list) return;
    if(!recentItems.length){list.innerHTML=`<div class="dropdown-item recents-empty">No recent items</div>`;return;}
    list.innerHTML=recentItems.map((r,i)=>`<div class="dropdown-item" data-recent="${i}">${r.label}</div>`).join('');
    list.querySelectorAll('[data-recent]').forEach(el=>{
        el.addEventListener('click',e=>{
            e.stopPropagation();
            document.querySelectorAll('.menubar-item.has-dropdown').forEach(i=>i.classList.remove('open'));
            const r=recentItems[+el.dataset.recent];
            if(!r) return;
            setTimeout(()=>{
                if(r.iconId) document.getElementById(r.iconId)?.click();
                else if(r.type==='contact')  openContact();
                else if(r.type==='terminal') openTerminalWindow();
            },100);
        });
    });
}

// ─────────────────────────────────────────────────
// DRAGGABLE
// ─────────────────────────────────────────────────
const MENUBAR_H = 28; // titlebar must never be dragged/resized above this — the menubar sits above it and would swallow clicks
function makeDraggable(win){
    const bar=win.querySelector('.window-titlebar'); if(!bar) return;
    let sx,sy,ix,iy;
    bar.addEventListener('mousedown',e=>{
        if(e.target.classList.contains('window-control')) return;
        if(win._maximized) return;
        const rect=win.getBoundingClientRect();
        win.style.left=rect.left+'px'; win.style.top=rect.top+'px'; win.style.transform='none';
        sx=e.clientX; sy=e.clientY; ix=rect.left; iy=rect.top;
        win.style.zIndex=++zTop;
        const onMove=e=>{
            win.style.left=(ix+e.clientX-sx)+'px';
            win.style.top=Math.max(MENUBAR_H, iy+e.clientY-sy)+'px';
        };
        const onUp=()=>{document.removeEventListener('mousemove',onMove);document.removeEventListener('mouseup',onUp);};
        document.addEventListener('mousemove',onMove);
        document.addEventListener('mouseup',onUp);
    });
    win.addEventListener('mousedown',()=>{win.style.zIndex=++zTop;});
}
function initDraggable(){document.querySelectorAll('.window').forEach(win=>{makeDraggable(win);makeResizable(win);});}

// ─────────────────────────────────────────────────
// RESIZABLE — drag any edge/corner, like macOS windows
// ─────────────────────────────────────────────────
function makeResizable(win){
    if (win._resizable) return;
    win._resizable = true;
    const MIN_W=320, MIN_H=220;
    const dirs=['n','s','e','w','ne','nw','se','sw'];
    dirs.forEach(dir=>{
        const handle=document.createElement('div');
        handle.className=`resize-handle resize-${dir}`;
        win.appendChild(handle);
        handle.addEventListener('mousedown',e=>{
            e.preventDefault(); e.stopPropagation();
            if(win._maximized) toggleMaximize(win,false);
            const rect=win.getBoundingClientRect();
            win.style.transform='none';
            win.style.left=rect.left+'px'; win.style.top=rect.top+'px';
            win.style.width=rect.width+'px'; win.style.height=rect.height+'px';
            win.style.maxWidth='none'; win.style.maxHeight='none';
            win.style.zIndex=++zTop;
            const startX=e.clientX, startY=e.clientY;
            const startLeft=rect.left, startTop=rect.top, startW=rect.width, startH=rect.height;
            function onMove(e){
                const dx=e.clientX-startX, dy=e.clientY-startY;
                let newW=startW, newH=startH, newLeft=startLeft, newTop=startTop;
                if(dir.includes('e')) newW=Math.max(MIN_W, startW+dx);
                if(dir.includes('s')) newH=Math.max(MIN_H, startH+dy);
                if(dir.includes('w')){ newW=Math.max(MIN_W, startW-dx); newLeft=startLeft+(startW-newW); }
                if(dir.includes('n')){ newH=Math.max(MIN_H, startH-dy); newTop=Math.max(MENUBAR_H, startTop+(startH-newH)); }
                win.style.width=newW+'px'; win.style.height=newH+'px';
                win.style.left=newLeft+'px'; win.style.top=Math.max(MENUBAR_H,newTop)+'px';
            }
            function onUp(){document.removeEventListener('mousemove',onMove);document.removeEventListener('mouseup',onUp);}
            document.addEventListener('mousemove',onMove);
            document.addEventListener('mouseup',onUp);
        });
    });
}

// ─────────────────────────────────────────────────
// UTILS
// ─────────────────────────────────────────────────
function escHtml(s=''){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

console.log('%c✦ Swetha Manivasagam — Portfolio','background:linear-gradient(135deg,#0a84ff,#60a5fa,#64d2ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:15px;font-weight:800;');
console.log('%c⌘+Space to open Spotlight','color:#0a84ff;font-size:11px');
