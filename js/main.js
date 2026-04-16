// ─────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────
const portfolioData = {
    professional: [
        { title:"Deep Learning Research Intern", company:"IIIT Bangalore", date:"Dec 2024 – Apr 2025",
          description:"Architected full-stack gaze tracking application & data management pipeline processing real-time eye movement data from 200+ study participants for cognitive research applications. Designed PostgreSQL schema for spatio-temporal data.",
          tech:["Django","PostgreSQL","Python"] },
        { title:"Web Scraping Engineering Intern", company:"IIM Calcutta", date:"Jan 2024 – May 2024",
          description:"Designed web scraping system with REST API layer to collect 500K+ real-time tourism data points from fragmented sources.",
          tech:["Selenium","BeautifulSoup4","REST API","Python"] },
        { title:"Application Development Intern", company:"Suguna Groups", date:"Jan 2024 – Apr 2024",
          description:"Implemented AJAX-powered real-time asset management system automating IT provisioning workflow for 10K+ employees.",
          tech:["PHP","MySQL","AJAX"] },
        { title:"Data Science Intern", company:"Sree Annapoorna Hotels", date:"Nov 2023 – Dec 2023",
          description:"Analyzed 200K+ customer reviews from 30+ hotel branches using Power BI and Tableau dashboards.",
          tech:["Power BI","Tableau","Streamlit","SQLite"] },
        { title:"UI/UX Design Intern", company:"Pricol Limited", date:"Jun 2023 – Jul 2023",
          description:"Designed interactive UI mockups for employee travel management application, improving visual consistency & navigation flow.",
          tech:["Figma","User Research","Prototyping"] }
    ],
    projects: [
        { title:"ByteBite — Food Delivery & Sustainability Platform", company:"NC State University", date:"Oct – Dec 2025",
          description:"Full-stack food delivery and sustainability platform designed to reduce food waste while enhancing customer ordering experience. Features live notifications, instant claim functionality, smart customer matching, personalised recommendation engine and shelter redistribution functionality.",
          tech:["React","Node.js","PostgreSQL","WebSockets"] },
        { title:"StackShack — Full-Stack Web Application", company:"NC State University", date:"Oct – Dec 2025",
          description:"Built a production-style full-stack web application using standard software engineering practices — modular design, GitHub-based collaboration and automated CI pipeline with testing and build validation.",
          tech:["React","Node.js","GitHub Actions","CI/CD"] },
        { title:"AdSight — Gaze Prediction for Ad Placement", company:"NC State University", date:"Oct – Nov 2025",
          description:"Analyzed gaze data to infer customer attention patterns and optimize advertisement placement for improved marketing ROI using transformer-based gaze prediction models.",
          tech:["PyTorch","Transformers","Data Mining","Python"] },
        { title:"HeatShield — Real-Time Heatwave Alert System", company:"Personal", date:"Jun 2024",
          description:"Designed and implemented a real-time heatwave alert system that monitors regional temperature data and sends automated SMS notifications during extreme weather. Built using a containerised backend architecture with 89% accuracy ensemble ML.",
          tech:["Django","Docker","Ensemble ML","Twilio"] },
        { title:"Travelog — Corporate Travel Management App", company:"PSG College of Technology", date:"Mar – Apr 2024",
          description:"Built a full-stack mobile application to streamline official travel management within organisations, enabling employees to request, track and manage business trips and expenses.",
          tech:["React Native","Node.js","MySQL"] },
        { title:"SafeSense — Industrial IoT Safety Monitor", company:"PSG College of Technology", date:"Feb – Mar 2024",
          description:"Developed an embedded IoT-based safety monitoring system that tracks environmental parameters in industrial settings in real time, enabling early detection of hazardous conditions.",
          tech:["ESP32","I2C","Embedded C","IoT"] },
        { title:"PSG Podcasts — Campus Audio Platform", company:"PSG College of Technology", date:"Sep – Oct 2023",
          description:"Application helping clubs and associations centralise audio podcasts of guest lectures, alumni talks and awareness programs for the campus community.",
          tech:["Java Swing","AWT","MySQL","JUnit"] }
    ],
    research: [
        { title:"To The Point: From Dynamic Heatmap Video to Gaze Points", company:"Published", date:"2024–2025",
          description:"Created and annotated heatmap-based gaze dataset (1K+ video frame data points). Proposed deep learning framework that converts temporal heatmap videos into precise gaze point predictions, enabling scalable cognitive load analysis for UX research.",
          tech:["Eye Tracking","DETR","RNN","YOLO+LSTM"] },
        { title:"Soil Heat Flux Dynamics Modeling Using Temporal DL", company:"Published", date:"2024",
          description:"Applied stacking-based ensemble models (TCN, ANN, LSTM) on multi-season soil heat flux datasets (60K+ temporal records) to predict & optimize root-zone temperature for improving sustainable agriculture.",
          tech:["TCN","LSTM","ANN","TensorFlow"] },
        { title:"Profecta — A Smart Logistics System", company:"Published", date:"2024",
          description:"Developed AI-driven logistics optimizer for dynamic routing. Implemented map-based visualizations for route comparisons and real-time decision support.",
          tech:["AI"] },
        { title:"Adaptive Personalization of Social Media Feed", company:"Published", date:"2024",
          description:"Designed feed content recommendation model using fuzzy clustering, eigenvalue-based user profiling & neural networks for adaptive social media personalization.",
          tech:["Fuzzy Clustering","TF-IDF"] },
        { title:"Road Navigation & Caption Generation for the Visually Impaired", company:"Submitted", date:"2024",
          description:"Built real-time navigation system using EfficientNet, YOLOv5 object detection, LSTM-based captioning & audio synthesis to assist visually impaired users.",
          tech:["EfficientNet","YOLOv5","LSTM"] },
        { title:"DecentraCheque — Decentralized Smart Cheque Validation", company:"Submitted", date:"2024",
          description:"Engineered smart contracts-based cheque verification system using Siamese-ResNet model trained on 25K+ cheque images for fraud-resistant validation.",
          tech:["Blockchain","Siamese-ResNet","Smart Contracts","Python"] },
        { title:"Modeling Ekman Spiral Using PINNs for Ocean Circulation", company:"Submitted", date:"2024",
          description:"Modeled oceanic dynamics using Physics-Informed Neural Networks in DeepXDE, trained on simulated ocean current datasets to improve Ekman spiral predictions.",
          tech:["PINNs","DeepXDE"] }
    ],
    hackathons: [
        { title:"WolfTrace — Campus Incident Intelligence", company:"Hack NC State", date:"2025",
          description:"Built WolfTrace - a campus incident intelligence workspace to combat misinformation during emergencies. Multi-agent AI pipeline processes multimodal evidence with a RAG framework.",
          tech:["Next.js","React","FastAPI","Neo4j","Gemini","Groq","Vultr","ElevenLabs"] },
        { title:"GreenFPO — Satellite-Based Crop Advisory (Finalist among 200+ teams)", company:"NABARD AgriSure Greenathon", date:"2024",
          description:"Built an intelligent crop advisory platform that transforms raw satellite imagery into actionable insights for Farmer Producer Organisations (FPOs).",
          tech:["Geospatial Analysis"] },
        { title:"IntelliCTS — Cheque Parsing System (Top 3 Campus-wide)", company:"Standard Chartered Bank Hackathon", date:"2023",
          description:"Sophisticated Cheque Truncation System designed to streamline the clearing process through ML and OCR methodologies.",
          tech:["OCR","TensorFlow","OpenCV"] },
        { title:"Seal — Blockchain Land Record Management", company:"Smart India Hackathon", date:"2023",
          description:"Land registry designed to eliminate fraud and disputes in property ownership using smart contracts and an immutable ledger.",
          tech:["Solidity","Python","React","Node.js"] }
    ]
};

const trashItems = [
    { iconType:'folder', title:'portfolio_old', sub:'old version portfolio' },
    { iconType:'pdf',    title:'resume_old.pdf', sub:'old resume' },
];

// ─────────────────────────────────────────────────
// SPOTLIGHT ICONS — inline SVGs
// ─────────────────────────────────────────────────
function getSpotlightIconSVG(iconType) {
    const uid = Math.random().toString(36).slice(2,7);
    const icons = {
        folder:   `<svg viewBox="0 0 40 40" fill="none" width="26" height="26"><defs><linearGradient id="spf${uid}" x1="0" y1="0" x2="0" y2="40" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#60a5fa"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs><path d="M2 13c0-2 1.6-3.6 3.6-3.6h8.4l2.8 2.8H35c2 0 3.6 1.6 3.6 3.6v14.8c0 2-1.6 3.6-3.6 3.6H5.6C3.6 34.2 2 32.6 2 30.6V13z" fill="url(#spf${uid})"/></svg>`,
        pdf:      `<svg viewBox="0 0 40 40" fill="none" width="26" height="26"><path d="M10 2h14l8 8v25c0 1.4-1.1 2.5-2.5 2.5H10c-1.4 0-2.5-1.1-2.5-2.5V4.5C7.5 3.1 8.6 2 10 2z" fill="#f472b6"/><path d="M24 2v8h8L24 2z" fill="white" opacity="0.3"/><text x="20" y="29" font-family="sans-serif" font-size="8" font-weight="700" fill="white" text-anchor="middle">PDF</text></svg>`,
        terminal: `<svg viewBox="0 0 40 40" fill="none" width="26" height="26"><rect width="40" height="40" rx="9" fill="#1a1a2e"/><path fill="white" d="M8 14l9 7-9 7V21zm11 9h13v3H19v-3z"/></svg>`,
        contact:  `<svg viewBox="0 0 40 40" fill="none" width="26" height="26"><defs><linearGradient id="spct${uid}" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#3b82f6"/><stop offset="1" stop-color="#60a5fa"/></linearGradient></defs><rect x="3" y="9" width="34" height="22" rx="4" fill="url(#spct${uid})"/><path d="M3 14l17 11 17-11" stroke="white" stroke-width="2" fill="none"/></svg>`,
        location: `<svg viewBox="0 0 40 40" fill="none" width="26" height="26"><defs><linearGradient id="sploc${uid}" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#34d399"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs><path d="M20 3C13.4 3 8 8.4 8 15c0 8 12 22 12 22s12-14 12-22c0-6.6-5.4-12-12-12zm0 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="url(#sploc${uid})"/></svg>`,
        github:   `<svg viewBox="0 0 40 40" fill="none" width="26" height="26"><rect width="40" height="40" rx="9" fill="#24292e"/><path fill="white" d="M20 5C11.7 5 5 11.7 5 20c0 6.6 4.3 12.2 10.2 14.2.7.1 1-.3 1-.7v-2.8c-4.2.9-5-1.8-5-1.8-.7-1.7-1.7-2.2-1.7-2.2-1.3-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.3 1.2.1-.9.5-1.6.9-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5a14 14 0 0 1 3.7-.5c1.3 0 2.5.2 3.7.5 2.8-1.9 4.1-1.5 4.1-1.5.8 2 .3 3.6.1 4 .9 1 1.5 2.4 1.5 4 0 5.7-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.8 1 .7C30.7 32.2 35 26.6 35 20c0-8.3-6.7-15-15-15z"/></svg>`,
        linkedin: `<svg viewBox="0 0 40 40" fill="none" width="26" height="26"><rect width="40" height="40" rx="9" fill="#0077b5"/><path fill="white" d="M13 29h-4V16h4v13zm-2-14.8c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM30 29h-4v-6.5c0-1.5 0-3.5-2.1-3.5s-2.4 1.7-2.4 3.4V29h-4V16h3.8v1.8h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V29z"/></svg>`,
    };
    return icons[iconType] || icons['folder'];
}

const spotlightIndex = [
    { title:"Experience",  sub:"IIIT-B · IIM-C · Suguna · Sree Annapoorna · Pricol",    action:"Open",  type:"folder",   key:"professional", iconType:"folder"   },
    { title:"Projects",    sub:"ByteBite · WolfTrace · AdSight · HeatShield · SafeSense", action:"Open",  type:"folder",   key:"projects",     iconType:"folder"   },
    { title:"Research",    sub:"Gaze Points · Soil ML · Logistics · PINNs · Vision AI",  action:"Open",  type:"folder",   key:"research",     iconType:"folder"   },
    { title:"Hackathons",  sub:"NC State · ISRO · NABARD · SCB · Smart India",           action:"Open",  type:"folder",   key:"hackathons",   iconType:"folder"   },
    { title:"Resume.pdf",  sub:"Download or preview my CV",                              action:"View",  type:"resume",                       iconType:"pdf"      },
    { title:"Terminal",    sub:"whoami · skills · experience · projects…",               action:"Open",  type:"terminal",                     iconType:"terminal" },
    { title:"Contact",     sub:"Say Hello",                                              action:"Open",  type:"contact",                      iconType:"contact"  },
    { title:"Education",   sub:"M.S. CS NC State · GPA 4.0 · B.E. CSE · 8.83",         action:"Info",  type:"terminal",                     iconType:"terminal" },
    { title:"Python",      sub:"Primary language · ML / AI / Backend / Research",       action:"Skills",type:"terminal",                     iconType:"terminal" },
    { title:"React",       sub:"ByteBite, WolfTrace, Travelog",                         action:"Skills",type:"terminal",                     iconType:"terminal" },
    { title:"Location",    sub:"India → Raleigh, NC",                                   action:"Info",  type:"info",                         iconType:"location" },
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
M.S. Computer Science student at NC State University with a background in
machine learning, full-stack development and data-driven systems.

Currently building, researching and seeking Summer 2026 opportunities.`
    },

    skills: {
        desc: "Technical strengths",
        fn: () => `<span class="t-head">TECHNICAL STRENGTHS</span>

<span class="t-highlight">Languages</span>
  Python · Java · JavaScript · SQL · PHP · Bash

<span class="t-highlight">ML / AI</span>
  PyTorch · TensorFlow · Transformers · OpenCV
  Deep Learning · Ensemble Modeling · Computer Vision

<span class="t-highlight">Web / Product Engineering</span>
  React · Next.js · Django · Flask · Node.js
  FastAPI · REST APIs

<span class="t-highlight">Data / Systems</span>
  PostgreSQL · MySQL · SQLite · Neo4j
  Selenium · BeautifulSoup`
    },

    experience: {
        desc: "Internships and work",
        fn: () => `<span class="t-head">EXPERIENCE</span>

<span class="t-highlight">IIIT Bangalore</span> — Deep Learning Research Intern
  Dec 2024 – Apr 2025
  Built a full-stack gaze tracking application and data pipeline
  for cognitive research with 200+ study participants.

<span class="t-highlight">IIM Calcutta</span> — Web Scraping Engineering Intern
  Jan 2024 – May 2024
  Designed a scraping + REST pipeline collecting 500K+ tourism data points
  from fragmented sources.

<span class="t-highlight">Suguna Groups</span> — Application Development Intern
  Jan 2024 – Apr 2024
  Implemented a real-time asset management workflow system
  supporting IT provisioning for 10K+ employees.

<span class="t-highlight">Sree Annapoorna Hotels</span> — Data Science Intern
  Nov 2023 – Dec 2023
  Analyzed 200K+ customer reviews across 30+ branches using
  Power BI and Tableau.

<span class="t-highlight">Pricol Limited</span> — UI/UX Design Intern
  Jun 2023 – Jul 2023
  Designed interactive mockups for an employee travel management platform.`
    },

    projects: {
        desc: "Selected projects",
        fn: () => `<span class="t-head">SELECTED PROJECTS</span>

<span class="t-highlight">ByteBite</span> — Full-stack food delivery + sustainability platform
  Live notifications, smart matching, shelter redistribution
  React · Node.js · PostgreSQL · WebSockets

<span class="t-highlight">StackShack</span> — Production-style full-stack application
  Modular design, CI pipeline, collaborative engineering workflow
  React · Node.js · GitHub Actions

<span class="t-highlight">AdSight</span> — Gaze prediction for ad placement
  Modeled customer attention patterns for better ad positioning
  PyTorch · Transformers · Data Mining

<span class="t-highlight">HeatShield</span> — Real-time heatwave alert system
  Containerized backend + SMS notifications + ensemble ML
  Django · Docker · Twilio

<span class="t-highlight">SafeSense</span> — Industrial IoT safety monitor
  Real-time hazard monitoring with embedded sensors and dashboard
  ESP32 · Embedded C · IoT`
    },

    research: {
        desc: "Research papers and themes",
        fn: () => `<span class="t-head">RESEARCH</span>

<span class="t-highlight">Core themes</span>
  Gaze tracking · Temporal deep learning · Scientific ML
  Assistive vision · Adaptive recommendation · Applied AI systems

<span class="t-highlight">Published / Submitted Work</span>

  To The Point
  Dynamic heatmap video → gaze point prediction for cognitive analysis

  Soil Heat Flux Dynamics Modeling Using Temporal DL
  TCN + ANN + LSTM ensemble modeling on 60K+ temporal records

  Profecta
  AI-driven logistics optimization and route analysis

  Adaptive Personalization of Social Media Feed
  Recommendation modeling using clustering and user profiling

  Road Navigation & Caption Generation for the Visually Impaired
  Assistive vision with YOLOv5, EfficientNet, and LSTM captioning

  DecentraCheque
  Blockchain-backed cheque validation with Siamese-ResNet

  Modeling Ekman Spiral Using PINNs
  Physics-Informed Neural Networks for ocean circulation modeling`
    },

    education: {
        desc: "Academic background",
        fn: () => `<span class="t-head">EDUCATION</span>

<span class="t-highlight">North Carolina State University</span>
  M.S. Computer Science
  Aug 2025 – May 2027
  GPA: 4.0 / 4.0

<span class="t-highlight">PSG College of Technology</span>
  B.E. Computer Science & Engineering
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
    {text:'Update DecentraCheque lit survey',        done:false},
    {text:'WolfTrace TwelveLabs follow-up',          done:false},
    {text:'Finish exploring Swin Transformer',       done:false},
    {text:'Independent study progress meet',         done:false},
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
// FOLDERS — each opens independently
// ─────────────────────────────────────────────────
let folderWindowCounter = 0;

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
    win.querySelector('.window-control.close').onclick = () => { win.style.display='none'; };
    initMinMaxForWindow(win);
    makeDraggable(win);
    return win;
}

function initFolders() {
    const map = {'professional-icon':'professional','projects-icon':'projects','research-icon':'research','hackathons-icon':'hackathons'};
    const titles = {professional:'Experience',projects:'Projects',research:'Research',hackathons:'Hackathons'};

    Object.entries(map).forEach(([id,key]) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('click', () => {
            const win = createFolderWindow();
            win.querySelector('.window-title').textContent = titles[key];
            const cardsEl = win.querySelector('.cards-container');
            portfolioData[key].forEach((item,i) => {
                const card = document.createElement('div');
                card.className = 'card'; card.style.animationDelay = `${i*0.06}s`;
                card.innerHTML = `<div class="card-title">${item.title}</div><div class="card-company">${item.company}</div><div class="card-date">${item.date}</div><div class="card-description">${item.description}</div><div class="card-tech">${item.tech.map(t=>`<span class="tech-tag">${t}</span>`).join('')}</div>`;
                cardsEl.appendChild(card);
            });
            win.querySelector('.window-control.minimize').addEventListener('click', e => {
                e.stopPropagation();
                if (win.style.display==='none') return;
                win.style.display = 'none';
                addMinimizedFolderDockItem(win, titles[key]);
            });
            openWindowCentered(win);
            addRecent(titles[key], id, 'folder', key);
        });
    });

    const orig = document.getElementById('folder-window');
    if (orig) orig.style.display = 'none';
}

function addMinimizedFolderDockItem(win, title) {
    const dock = document.getElementById('dock');
    if (!dock) return;
    const uid = Date.now();
    const item = document.createElement('div');
    item.className = 'dock-item minimized-dock-item';
    item.title = title;
    item.innerHTML = `
        <div class="dock-icon-wrap" style="background:linear-gradient(145deg,#1e3a8a,#2563eb)">
            <svg viewBox="0 0 32 32" fill="none" width="26" height="26">
                <defs><linearGradient id="mfi${uid}" x1="0" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#60a5fa"/><stop offset="1" stop-color="#2563eb"/></linearGradient></defs>
                <path d="M2 10c0-1.65 1.35-3 3-3h6l2 2h14c1.65 0 3 1.35 3 3v12c0 1.65-1.35 3-3 3H5c-1.65 0-3-1.35-3-3V10z" fill="url(#mfi${uid})"/>
            </svg>
        </div>
        <div class="dock-tooltip">${title}</div>
        <div class="dock-dot" style="background:rgba(96,165,250,0.9)"></div>`;
    const sep = document.createElement('div');
    sep.className = 'dock-separator minimized-sep';
    item.addEventListener('click', () => { openWindowCentered(win); item.remove(); sep.remove(); });
    const trashItem = dock.querySelector('[data-app="trash"]');
    if (trashItem) { dock.insertBefore(sep, trashItem); dock.insertBefore(item, trashItem); }
    else { dock.appendChild(sep); dock.appendChild(item); }
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
            <div class="contact-form-icon">
                <svg viewBox="0 0 48 48" fill="none" width="42" height="42">
                    <defs><linearGradient id="cfhg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stop-color="#3b82f6"/><stop offset="1" stop-color="#60a5fa"/></linearGradient></defs>
                    <rect x="4" y="12" width="40" height="26" rx="5" fill="url(#cfhg)" opacity="0.95"/>
                    <path d="M4 17l20 13 20-13" stroke="white" stroke-width="2.2" stroke-linecap="round" fill="none"/>
                </svg>
            </div>
            <div>
                <div class="contact-form-title">Say Hello!</div>
                <div class="contact-form-sub">I'd love to hear from you</div>
            </div>
        </div>
        <form id="web3form" novalidate>
            <input type="hidden" name="access_key" value="7e3089cc-f380-4306-a256-6149125b9b31">
            <input type="hidden" name="subject" value="Portfolio Contact — New Message">
            <input type="checkbox" name="botcheck" style="display:none">
            <div class="cf-field">
                <label class="cf-label" for="cf-name">Your Name</label>
                <input class="cf-input" type="text" id="cf-name" name="name" placeholder="Jane Doe" required autocomplete="name">
            </div>
            <div class="cf-field">
                <label class="cf-label" for="cf-email">Email Address</label>
                <input class="cf-input" type="email" id="cf-email" name="email" placeholder="jane@example.com" required autocomplete="email">
            </div>
            <div class="cf-field">
                <label class="cf-label" for="cf-message">Message</label>
                <textarea class="cf-input cf-textarea" id="cf-message" name="message" placeholder="Hi Swetha, I'd love to connect about…" required rows="5"></textarea>
            </div>
            <button type="submit" class="cf-submit" id="cf-submit-btn">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2L1 8.5l5 1.5M14 2l-5 12-3-6.5"/></svg>
                Send Message
            </button>
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
        submitBtn.innerHTML=`<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="6"/><path d="M8 4v4l2 2"/></svg> Sending…`;
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
    if(icon) icon.onclick=()=>{openWindowCentered(win);addRecent('Resume.pdf','resume-icon','resume','');};
    if(cb)   cb.onclick=()=>{if(win)win.style.display='none';};

    const minBtn=document.getElementById('pdf-minimize');
    if(minBtn) minBtn.addEventListener('click',e=>{
        e.stopPropagation();
        if(!win||win.style.display==='none') return;
        win.style.display='none';
        addMinimizedPDFDockItem(win);
    });
    initMinMaxForWindow(win);
}

function addMinimizedPDFDockItem(win) {
    const dock=document.getElementById('dock');
    if(!dock) return;
    const uid=Date.now();
    const item=document.createElement('div');
    item.className='dock-item minimized-dock-item';
    item.title='Resume.pdf';
    item.innerHTML=`
        <div class="dock-icon-wrap" style="background:linear-gradient(145deg,#be185d,#f472b6)">
            <svg viewBox="0 0 32 32" fill="none" width="26" height="26">
                <path d="M8 2h12l6 6v20c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z" fill="rgba(255,255,255,0.9)"/>
                <path d="M20 2v6h6L20 2z" fill="rgba(255,255,255,0.4)"/>
                <text x="16" y="24" font-family="sans-serif" font-size="6" font-weight="700" fill="#be185d" text-anchor="middle">PDF</text>
            </svg>
        </div>
        <div class="dock-tooltip">Resume.pdf</div>
        <div class="dock-dot" style="background:rgba(244,114,182,0.9)"></div>`;
    const sep=document.createElement('div');sep.className='dock-separator minimized-sep';
    item.addEventListener('click',()=>{openWindowCentered(win);item.remove();sep.remove();});
    const trashItem=dock.querySelector('[data-app="trash"]');
    if(trashItem){dock.insertBefore(sep,trashItem);dock.insertBefore(item,trashItem);}
    else{dock.appendChild(sep);dock.appendChild(item);}
}

// ─────────────────────────────────────────────────
// TRASH
// ─────────────────────────────────────────────────
function trashIconSVG(type) {
    if(type==='folder') return `<svg viewBox="0 0 48 48" fill="none" width="40" height="40"><defs><linearGradient id="trf1" x1="0" y1="0" x2="0" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#9ca3af"/><stop offset="1" stop-color="#6b7280"/></linearGradient></defs><path d="M3 15c0-2.5 2-4.5 4.5-4.5h9l3 3h21c2.5 0 4.5 2 4.5 4.5v18c0 2.5-2 4.5-4.5 4.5h-33C5 40.5 3 38.5 3 36V15z" fill="url(#trf1)"/></svg>`;
    if(type==='pdf')    return `<svg viewBox="0 0 48 48" fill="none" width="40" height="40"><path d="M12 3h18l9 9v30c0 1.66-1.34 3-3 3H12c-1.66 0-3-1.34-3-3V6c0-1.66 1.34-3 3-3z" fill="#9ca3af"/><path d="M30 3v9h9L30 3z" fill="white" opacity="0.3"/><text x="24" y="34" font-family="sans-serif" font-size="7" font-weight="700" fill="white" text-anchor="middle" opacity="0.9">PDF</text></svg>`;
    return '';
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
                <div class="sr-text"><div class="sr-title">${escHtml(r.title)}</div><div class="sr-sub">${escHtml(r.sub)}</div></div>
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
    let isMaximized=false, savedRect=null;
    maxBtn.addEventListener('click',e=>{
        e.stopPropagation();
        if(!isMaximized){
            savedRect={left:win.style.left,top:win.style.top,width:win.style.width,height:win.style.height,transform:win.style.transform,borderRadius:win.style.borderRadius};
            win.style.transform='none';
            win.style.left='0px'; win.style.top='28px';
            win.style.width='100vw'; win.style.height='calc(100vh - 28px)';
            win.style.borderRadius='0';
            isMaximized=true; maxBtn.classList.add('maximized');
        } else {
            if(savedRect){win.style.left=savedRect.left;win.style.top=savedRect.top;win.style.width=savedRect.width;win.style.height=savedRect.height;win.style.transform=savedRect.transform;win.style.borderRadius=savedRect.borderRadius||'';}
            isMaximized=false; maxBtn.classList.remove('maximized');
        }
    });
}
function initMinMax(prefix){const win=document.getElementById(`${prefix}-window`);if(win)initMinMaxForWindow(win);}

// ─────────────────────────────────────────────────
// GENERIC MINIMIZED DOCK ITEM
// ─────────────────────────────────────────────────
function addMinimizedGenericDockItem(win,title,type) {
    const dock=document.getElementById('dock');
    if(!dock) return;
    const uid=Date.now();
    const iconSVGs={
        contact:`<svg viewBox="0 0 32 32" fill="none" width="26" height="26"><defs><linearGradient id="mcdg${uid}" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#3b82f6"/><stop offset="1" stop-color="#60a5fa"/></linearGradient></defs><rect x="2" y="7" width="28" height="18" rx="4" fill="url(#mcdg${uid})"/><path d="M2 11l14 9 14-9" stroke="white" stroke-width="1.5" fill="none"/></svg>`,
    };
    const item=document.createElement('div');
    item.className='dock-item minimized-dock-item';
    item.title=title;
    item.innerHTML=`<div class="dock-icon-wrap" style="background:rgba(30,30,60,0.85)">${iconSVGs[type]||''}</div><div class="dock-tooltip">${title}</div><div class="dock-dot"></div>`;
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
function makeDraggable(win){
    const bar=win.querySelector('.window-titlebar'); if(!bar) return;
    let sx,sy,ix,iy;
    bar.addEventListener('mousedown',e=>{
        if(e.target.classList.contains('window-control')) return;
        const rect=win.getBoundingClientRect();
        win.style.left=rect.left+'px'; win.style.top=rect.top+'px'; win.style.transform='none';
        sx=e.clientX; sy=e.clientY; ix=rect.left; iy=rect.top;
        win.style.zIndex=++zTop;
        const onMove=e=>{win.style.left=(ix+e.clientX-sx)+'px';win.style.top=(iy+e.clientY-sy)+'px';};
        const onUp=()=>{document.removeEventListener('mousemove',onMove);document.removeEventListener('mouseup',onUp);};
        document.addEventListener('mousemove',onMove);
        document.addEventListener('mouseup',onUp);
    });
    win.addEventListener('mousedown',()=>{win.style.zIndex=++zTop;});
}
function initDraggable(){document.querySelectorAll('.window').forEach(win=>makeDraggable(win));}

// ─────────────────────────────────────────────────
// UTILS
// ─────────────────────────────────────────────────
function escHtml(s=''){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

console.log('%c✦ Swetha Manivasagam — Portfolio','background:linear-gradient(135deg,#f472b6,#a855f7,#60a5fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:15px;font-weight:800;');
console.log('%c⌘+Space to open Spotlight','color:#a855f7;font-size:11px');