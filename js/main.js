// ─────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────
const portfolioData = {
    // ── EXPERIENCE (rendered as processes in Activity Monitor — js/apps.js) ──
    // proc / org / dur are the short labels shown in the table; category: Research | Teaching | Industry
    professional: [
    { proc:"Research Assistant", org:"STAC Lab", dur:"Jan–Aug 2026", category:"Research",
      title:"Research Assistant", company:"STAC Lab, NC State Computer Science", date:"Jan 2026 – Aug 2026",
      description:"Built a multi-modal geospatial deep learning pipeline (SRF, U-Net, ResNet) fusing 35M+ Landsat/land-cover/OSM raster samples and 1B+ LiDAR points for high-resolution Land Surface Temperature prediction, cutting RMSE 28% over baseline.",
      tech:["PyTorch","U-Net","ResNet","Geospatial ML"] },
    { proc:"Research Assistant", org:"CAMCORE", dur:"Apr–Aug 2026", category:"Research",
      title:"Research Assistant", company:"CAMCORE", date:"Apr 2026 – Aug 2026",
      description:"Maintain a 5TB+ geospatial climate database across 6 sources, building agentic ETL pipelines for autonomous data detection, validation and ingestion. Deployed production AWS Lightsail infrastructure, expanding data access to 300+ researchers.",
      tech:["AWS Lightsail","ETL","Geospatial Data"] },
    { proc:"Teaching Assistant", org:"NC State", dur:"May–Aug 2026", category:"Teaching",
      title:"Teaching Assistant, CSC 505 (Algorithms)", company:"NC State University Graduate School", date:"May 2026 – Aug 2026",
      description:"Supported graduate-level Design and Analysis of Algorithms under Dr. Steffen Heber, developing grading rubrics and reference solutions, and grading homework, quizzes and exams with targeted feedback on complexity analysis and implementation.",
      tech:["Algorithms","Teaching"] },
    { proc:"Deep Learning Research Intern", org:"IIIT Bangalore", dur:"Dec 2024–Apr 2025", category:"Research",
      title:"Deep Learning Research Intern", company:"IIIT Bangalore", date:"Dec 2024 – Apr 2025",
      description:"Engineered a real-time eye-gaze capture system processing 7.2M+ frames across 200+ sessions, cutting post-processing time 50%. Built a DETR pipeline predicting gaze coordinates from heatmap video, improving accuracy 22% over an RNN baseline.",
      tech:["PyTorch","DETR","Computer Vision"] },
    { proc:"Software Development Intern", org:"IIM Calcutta", dur:"Jan–May 2024", category:"Industry",
      title:"Software Development Intern", company:"IIM Calcutta", date:"Jan 2024 – May 2024",
      description:"Built a Selenium + REST API pipeline extracting 500K+ real-time tourism records from heterogeneous, dynamically rendered sources, with a multi-stage pipeline for schema mapping, deduplication, validation and normalization.",
      tech:["Selenium","REST API","Python"] },
    { proc:"Software Development Intern", org:"Suguna Group", dur:"Jan–Apr 2024", category:"Industry",
      title:"Software Development Intern", company:"Suguna Group", date:"Jan 2024 – Apr 2024",
      description:"Engineered a company-wide IT asset provisioning system automating onboarding through return, with asynchronous AJAX modules for real-time asset tracking across 10K+ employees, 30+ departments and 30K+ assets.",
      tech:["PHP","MySQL","AJAX"] },
    { proc:"UI/UX Designer", org:"Pricol Limited", dur:"Jun–Jul 2023", category:"Industry",
      title:"UI/UX Designer", company:"Pricol Limited", date:"Jun 2023 – Jul 2023",
      description:"Designed end-to-end user flows, wireframes and interactive prototypes for an enterprise employee travel management application, collaborating across engineering teams to translate requirements into feasible designs.",
      tech:["Figma","Prototyping","UX Research"] }
],
    // ── PROJECTS (rendered by the App Store window — js/apps.js) ──
    // banner: path to an image of your choice (e.g. 'assets/banners/causalci.jpg'); '' shows a gradient placeholder
    // live:   deployed URL → shows the GET button.  tech: names must match a key in TECH_ICONS (js/apps.js)
    projects: [
    { id:"causalci", name:"CausalCI", subtitle:"AI-powered regression investigation", category:"Developer Tools",
      icon:"assets/project_icons/causalci.svg", banner:"assets/banners/causalci.jpg", bannerTile:"assets/banners/causalci-tile.jpg", featured:true, colors:["#1b2c57", "#070d1f"],
      live:"https://causalci-9i2j.onrender.com", github:"", date:"Nov 2026", madeAt:"HackPack Hackathon",
      metrics:[["65.8%", "culprit in top 3"], ["97.9%", "bisection accuracy"], ["184", "mined regressions"], ["9", "OSS repositories"]],
      description:"CausalCI is an automated regression root-cause platform that identifies the commit that broke a CI build. It ranks suspect commits with a logistic-regression model trained on 184 mined regressions across 9 open-source repositories: the culprit lands in the top 3 for 65.8% of them, against 49.5% for the best baseline (leave-one-repo-out, 95% CIs).\n\nIt then confirms the culprit with flaky-test-aware Bayesian bisection, which reached 97.9% accuracy versus 61% for git bisect in simulation, running the repo's own tests in gVisor-isolated sandboxes. Call-graph analysis covers TypeScript (via the type checker) and Python, Go and Java (via tree-sitter), and an MCP server exposes it all to AI coding agents.",
      tech:["TypeScript", "React", "Fastify", "Redis", "Docker", "gVisor", "Kubernetes", "Helm", "KEDA", "Terraform", "Google Cloud", "GitHub Actions", "Prometheus", "Grafana", "Gemma", "MCP", "Tree-sitter"] },
    { id:"elementalquest", name:"Elemental Quest", subtitle:"Multiplayer game", category:"Games",
      icon:"assets/project_icons/elementalquest.svg", banner:"assets/banners/elementalquest.jpg", bannerTile:"assets/banners/elementalquest-tile.jpg", featured:true, colors:["#3a1d7a", "#120a30"],
      live:"https://elemental-quest.onrender.com", github:"", date:"Aug 2026 \u2013 Present", madeAt:"NC State University",
      metrics:[["C++17", "engine core"], ["ZeroMQ", "networking"], ["Multi", "threaded jobs"]],
      description:"Designed and engineered a modular C++17 game engine and real-time multiplayer system, featuring core subsystems for physics, rendering, multithreaded job execution and runtime object management.\n\nIntegrated a ZeroMQ-based networking architecture supporting authoritative world simulation, asynchronous client communication and synchronized state propagation. Validated the engine's architecture through a cooperative multiplayer platformer featuring deterministic simulation, thread-safe concurrent update loops and strict separation of engine infrastructure from game logic.",
      tech:["C++", "ZeroMQ", "Multithreading", "Networking", "Game Engine"] },
    { id:"adaptiboard", name:"AdaptiBoard", subtitle:"Brain-controlled communication", category:"Accessibility",
      icon:"assets/project_icons/adaptiboard.svg", banner:"assets/banners/adaptiboard.jpg", bannerTile:"assets/banners/adaptiboard-tile.jpg", featured:true, colors:["#8b5cf6", "#3b1fa8"],
      live:"https://adaptiboard.onrender.com", github:"", date:"Nov 2026", madeAt:"BR41N.IO Hackathon \u00b7 Neurotech @ NC State",
      metrics:[["2nd", "BR41N.IO Hackathon"], ["EEG", "gaze selection"], ["0", "calibration needed"], ["Real-time", "WebSocket streaming"]],
      description:"AdaptiBoard enables individuals with speech and motor impairments to communicate through EEG-based gaze selection.\n\nBuilt with React, TypeScript, FastAPI and WebSockets, the system uses BrainFlow and NumPy/SciPy (FBCCA) for calibration-free SSVEP detection and translates visual attention into navigation commands. Integrated Groq (Llama 3.3), Whisper and edge-tts to enable context-aware response suggestions, personalized language prediction, grammar correction and natural speech synthesis, alongside gaze-activated emergency alerts for caregiver assistance.",
      tech:["React", "TypeScript", "FastAPI", "WebSockets", "BrainFlow", "NumPy", "SciPy", "Groq", "Llama 3.3", "Whisper", "edge-tts", "EEG"] },
    { id:"wolftrace", name:"WolfTrace", subtitle:"Campus incident intelligence", category:"Productivity",
      icon:"assets/project_icons/wolftrace.svg", banner:"assets/banners/wolftrace.jpg", bannerTile:"assets/banners/wolftrace-tile.jpg", colors:["#26283f", "#07070d"],
      live:"https://wolftraceui.vercel.app/", github:"", date:"Feb 2026", madeAt:"Hack_NCState 2026",
      metrics:[["2nd", "Hack_NCState 2026"], ["Agentic", "AI case pipeline"], ["RAG", "investigator chatbot"], ["Neo4j", "evidence graph"]],
      description:"Developed WolfTrace, a noir-styled campus incident intelligence and moderation platform built with a Next.js 15, TypeScript and React frontend backed by FastAPI.\n\nThe platform transforms raw, multi-format campus tips and multimedia into structured case files using an advanced agentic AI pipeline and a RAG implementation, leveraging a Neo4j graph database backend to drive interactive, force-directed evidence network graphs with custom relationship mapping.\n\nKey technical subsystems include a Kanban-style case overview wall, an anonymous priority-sorted tip triage inbox and a contextual RAG-based LLM chatbot utilizing Gemini and Groq to assist investigators in querying complex case histories and uncovering hidden connections in real time.",
      tech:["Next.js", "TypeScript", "React", "FastAPI", "Neo4j", "Gemini", "Groq", "Agentic Workflows", "RAG"] },
    { id:"bytebite", name:"ByteBite", subtitle:"Food delivery & sustainability", category:"Food & Drink",
      icon:"assets/project_icons/bytebite.svg", banner:"assets/banners/bytebite.jpg", bannerTile:"assets/banners/bytebite-tile.jpg", colors:["#ffae42", "#f0571f"],
      live:"", github:"", date:"Oct \u2013 Dec 2025", madeAt:"NC State University",
      metrics:[["120+", "unit & integration tests"], ["CI", "pipeline"], ["Leaflet", "live tracking"]],
      description:"ByteBite is a sustainable food delivery web application built using React, Node.js, Express.js, and MongoDB with Mongoose. It features a rigorous testing framework comprising over 120 unit and integration test cases with a CI pipeline.\n\nThe platform tackles food waste through a cancel-to-redistribute mechanism that converts canceled orders into instant discounted offers or direct shelter/NGO distributions, complemented by 3D dish previews, Leaflet-powered interactive maps for real-time delivery tracking, a personalized recommendation engine based on past orders and nutrition preferences and a centralized admin dashboard for managing surplus inventory and restaurant bulk-listing.",
      tech:["React", "Node.js", "Express", "MongoDB", "Mongoose", "Leaflet", "Software Testing", "CI/CD"] },
    { id:"stackshack", name:"StackShack", subtitle:"Campus dining application", category:"Food & Drink",
      icon:"assets/project_icons/stackshack.svg", banner:"assets/banners/stackshack.jpg", bannerTile:"assets/banners/stackshack-tile.jpg", colors:["#ff453a", "#b0122a"],
      live:"", github:"", date:"Oct \u2013 Dec 2025", madeAt:"NC State University",
      metrics:[["230+", "tests"], ["85.8%", "coverage"], ["CI", "automated pipeline"]],
      description:"StackShack is a modular, production-ready campus dining web application built using Flask and MySQL. It features a robust testing suite with over 230 unit and integration test cases achieving 85.8% test coverage backed by an automated CI pipeline.\n\nThe platform includes role-based unified user management for staff and administrators, custom burger building with dynamic pricing and real-time order tracking, secure payment processing for digital wallets and campus cards, an interactive inventory management dashboard, and personalized dietary preference profiling with automated ingredient suggestions and surprise-box generation.",
      tech:["Flask", "Python", "MySQL", "GitHub", "CI/CD", "Software Testing", "Requirements Engineering"] },
    { id:"adsight", name:"AdSight", subtitle:"Webcam gaze prediction for ads", category:"Machine Learning",
      icon:"assets/project_icons/adsight.svg", banner:"assets/banners/adsight.jpg", bannerTile:"assets/banners/adsight-tile.jpg", colors:["#2c7cf6", "#0c2f8a"],
      live:"", github:"", date:"Oct \u2013 Dec 2025", madeAt:"NC State University",
      metrics:[["MPIIGaze", "dataset"], ["CNN vs DETR", "benchmarked"], ["Heatmaps", "ad placement"]],
      description:"Built a pipeline to predict screen-coordinate gaze location from standard laptop webcam images, aimed at enabling low-cost, real-world attention tracking for dynamic ad placement.\n\nTrained on the MPIIGaze dataset (eye images with ground-truth screen coordinates) and benchmarked a CNN baseline against DETR, adapted from object detection to coordinate regression by replacing its bounding-box output heads with 2D gaze-coordinate predictions and using Hungarian matching to align predictions with ground truth during training.\n\nAccumulated predicted gaze coordinates over time into heatmaps to identify high-attention screen regions as candidate ad-placement locations, enabling dynamic rather than static layout-based placement.",
      tech:["Python", "PyTorch", "DETR", "CNN", "MPIIGaze", "Computer Vision"] },
    { id:"intellicts", name:"IntelliCTS", subtitle:"Automated cheque processing", category:"Finance",
      icon:"assets/project_icons/intellicts.svg", banner:"assets/banners/intellicts.jpg", bannerTile:"assets/banners/intellicts-tile.jpg", colors:["#0fb36b", "#0a5fb4"],
      live:"", github:"", date:"Mar 2023", madeAt:"Standard Chartered AI/ML Hackathon",
      metrics:[["Runner Up", "Standard Chartered hackathon"], ["OCR + ICR", "field extraction"], ["Batch", "bulk processing"]],
      description:"Built an automated cheque-processing system modeled on India's RBI-mandated Cheque Truncation System (CTS), using TensorFlow and OCR/ICR to digitize and validate cheque data at scale.\n\nExtracted and parsed structured fields, account number, IFSC code, amount and handwritten payee names, from scanned cheque images, and supported bulk batch processing to reduce manual data entry in the clearing workflow.",
      tech:["TensorFlow", "Python", "OCR"] },
    { id:"safesense", name:"SafeSense", subtitle:"Industrial IoT safety monitor", category:"Utilities",
      icon:"assets/project_icons/safesense.svg", banner:"assets/banners/safesense.jpg", bannerTile:"assets/banners/safesense-tile.jpg", colors:["#3a3a3c", "#0d0d0f"],
      live:"", github:"", date:"Feb \u2013 Mar 2024", madeAt:"PSG College of Technology",
      metrics:[["3", "sensor types"], ["Real-time", "thresholding"], ["Live", "web dashboard"]],
      description:"Developed an embedded IoT safety-monitoring system using an ESP32 microcontroller integrated with smoke, voltage, and temperature sensors to continuously track hazardous conditions on an industrial factory floor.\n\nBuilt the firmware to sample and threshold sensor data in real time, streaming readings to a web-based dashboard for live visualization, enabling early hazard detection and faster response before conditions escalate to unsafe levels.",
      tech:["ESP32", "C", "IoT", "Embedded Systems", "Microprocessors", "Sensors"] },
    { id:"travelog", name:"Travelog", subtitle:"Corporate travel management", category:"Travel",
      icon:"assets/project_icons/travelog.svg", banner:"assets/banners/travelog.jpg", bannerTile:"assets/banners/travelog-tile.jpg", colors:["#5ac8fa", "#0a6fd6"],
      live:"", github:"", date:"Oct \u2013 Nov 2023", madeAt:"PSG College of Technology",
      metrics:[["2", "user roles"], ["iOS + Android", "cross-platform"]],
      description:"Designed and built a full-stack mobile application for managing organizational business travel end-to-end, from trip request through approval to expense reconciliation.\n\nThe system supports distinct employee and administrator roles: employees submit and track trip and expense requests, while administrators manage approvals, budgets and logistics oversight across the organization. Built a relational schema to model multi-stage approval workflows and expense line items, with a React Native frontend delivering a consistent cross-platform experience on both iOS and Android.",
      tech:["React Native", "Node.js", "MySQL", "Figma"] },
    { id:"lyceum", name:"Lyceum", subtitle:"Campus audio platform", category:"Music",
      icon:"assets/project_icons/lyceum.svg", banner:"", bannerTile:"", colors:["#bf5af2", "#5b1aa8"],
      live:"", github:"", date:"Sep \u2013 Oct 2023", madeAt:"PSG College of Technology",
      metrics:[["RBAC", "access control"], ["Offline", "desktop-native"]],
      description:"Built a desktop application in Java Swing/AWT for centralized audio content management, backed by a SQL relational schema for content metadata, categorization, and role-based access control.\n\nStructured the data layer to support searchable, filterable content discovery across departments, and used JUnit for unit testing core data-access and access-control logic. A desktop-native architecture chosen for offline reliability and direct control over UI state management.",
      tech:["Java", "Java Swing", "Java AWT", "SQL", "JUnit", "Package Management"] }
],
    // ── RESEARCH (each opens its PDF in a Preview window) ──
    research: [
    { title:"To the Point: From Dynamic Heatmap Video to Gaze Points", file:"To the Point.pdf", pdf:"assets/research/to-the-point.pdf", thumb:"assets/research/thumbs/to-the-point.png", company:"ACM ETRA", date:"May 2025", status:"Published",
      description:"Posed gaze-point recovery from webcam eye-tracking heatmap videos as object detection; published the first annotated dynamic-heatmap dataset (2,463 frames) and compared Faster R-CNN, YOLOv8+LSTM and DETR. DETR performed best (mean IoU 0.39 vs. 0.17 baseline).",
      tech:["DETR","Faster R-CNN","YOLOv8","Eye Tracking"] },
    { title:"A Benchmark Dataset of Dynamic Attention Map Videos With Hotspot Annotations", file:"DAM Benchmark Dataset.pdf", pdf:"assets/research/dam-dataset.pdf", thumb:"assets/research/thumbs/dam-dataset.png", company:"OSF (dataset)", date:"Nov 2026", status:"Published",
      description:"Benchmark of 11 dynamic attention map videos (6,000 frames) with 5,277 COCO bounding boxes marking the latest-changing gaze hotspot, plus a 500-frame gaze ground-truth test set. DOI 10.17605/OSF.IO/HGRE6.",
      tech:["COCO","Eye Tracking","Video Saliency"] },
    { title:"Soil Heat Flux Dynamics Modeling Using Temporal Deep Learning", file:"Soil Heat Flux.pdf", pdf:"assets/research/soil-heat-flux.pdf", thumb:"assets/research/thumbs/soil-heat-flux.png", company:"Springer LNNS", date:"Apr 2025", status:"Published",
      description:"Stacked TCN + ANN ensemble forecasting soil heat flux (MAE 0.1559, R² 0.945, beating TCN, ANN and LSTM), feeding a Bayesian optimizer that keeps root-zone temperature within 18–25 °C (99.44% accuracy within ±3.45 °C).",
      tech:["TCN","ANN","Bayesian Optimization","Python"] },
    { title:"Profecta: A Smart Logistics System", file:"Profecta.pdf", pdf:"assets/research/profecta.pdf", thumb:"assets/research/thumbs/profecta.png", company:"Taylor & Francis CRC Press", date:"Jul 2024", status:"Published",
      description:"Multi-constraint route planner combining 6 order-splitting strategies with Nearest Neighbour, Bidirectional Search and Most-Urgent-Destination heuristics; cut daily penalty cost 78% vs. LVP and 33% vs. CVRP with Gurobi.",
      tech:["Route Optimization","Heuristics","Python"] },
    { title:"DecentraCheque: Decentralized Smart Cheque Validation", file:"DecentraCheque.pdf", pdf:"assets/research/decentracheque.pdf", thumb:"assets/research/thumbs/decentracheque.png", company:"Manuscript", date:"2025", status:"Yet to be published",
      description:"End-to-end cheque validation: Gemini OCR, Solidity smart-contract checks, and a Logistic Siamese Regression model (ResNet-18 + CBAM) for signature verification at 81% accuracy (vs. 65.1% next best) with outcomes recorded on Ethereum.",
      tech:["Siamese-ResNet","CBAM","Solidity","Ethereum"] },
    { title:"Modeling Ekman Spiral Using PINNs for Ocean Circulation", file:"Ekman Spiral PINNs.pdf", pdf:"assets/research/ekman-pinns.pdf", thumb:"assets/research/thumbs/ekman-pinns.png", company:"Work in progress", date:"2024", status:"Ongoing",
      description:"Ongoing research modeling wind-driven ocean currents with Physics-Informed Neural Networks in DeepXDE, with the Ekman equations built into the training loss. No results yet.",
      tech:["PINNs","DeepXDE"] }
],
    // ── HACKATHONS (Maps window — js/apps.js). Listed in this order, not by date. ──
    // icon:   glyph name (brain | magnifier | trophy) or an image path
    // banner: image shown at the top of the place card ('' = placeholder); bannerFit:'contain' for logos
    // lat/lng: null for remote events (no pin; they're listed under "Remote")
    hackathons: [
    { id:"brainio", name:"BR41N.IO Hackathon", award:"Second Place", rank:2, date:"Nov 2026",
      issuer:"Neurotech @ NC State", assoc:"North Carolina State University", track:"NeuroPawn track",
      project:"AdaptiBoard", projectId:"adaptiboard",
      about:"AdaptiBoard enables individuals with speech and motor impairments to communicate through EEG-based gaze selection.\n\nBuilt with React, TypeScript, FastAPI and WebSockets, the system uses BrainFlow and NumPy/SciPy (FBCCA) for calibration-free SSVEP detection and translates visual attention into navigation commands. Integrated Groq (Llama 3.3), Whisper and edge-tts to enable context-aware response suggestions, personalized language prediction, grammar correction and natural speech synthesis, alongside gaze-activated emergency alerts for caregiver assistance.",
      tech:["React","TypeScript","FastAPI","WebSockets","BrainFlow","NumPy","SciPy","Groq","Llama 3.3","Whisper","edge-tts","EEG"],
      icon:"brain", banner:"assets/hackathons/brainio-banner.jpg", place:"NC State University", city:"Raleigh, NC", lat:35.7847, lng:-78.6821 },
    { id:"hackncstate", name:"Hack_NCState 2026", award:"Second Place", rank:2, date:"Feb 2026",
      issuer:"Hack_NCState", assoc:"North Carolina State University",
      project:"WolfTrace — Campus Incident Intelligence", projectId:"wolftrace",
      event:"Hack_NCState is North Carolina State University's premier tech hackathon. This year, we are setting the scene with an Urban Noir theme. Think of it as a detective story, but instead of looking for clues, you are using technology to solve real-world problems.",
      about:"Developed WolfTrace, a noir-styled campus incident intelligence and moderation platform built with a Next.js 15, TypeScript and React frontend backed by FastAPI.\n\nThe platform transforms raw, multi-format campus tips and multimedia into structured case files using an advanced agentic AI pipeline and a RAG implementation, leveraging a Neo4j graph database backend to drive interactive, force-directed evidence network graphs with custom relationship mapping.\n\nKey technical subsystems include a Kanban-style case overview wall, an anonymous priority-sorted tip triage inbox and a contextual RAG-based LLM chatbot utilizing Gemini and Groq to assist investigators in querying complex case histories and uncovering hidden connections in real time.",
      tech:["Next.js","TypeScript","React","FastAPI","Neo4j","Gemini","Groq","Agentic Workflows","RAG"],
      icon:"magnifier", banner:"assets/hackathons/hackncstate-banner.jpg", place:"NC State University", city:"Raleigh, NC", lat:35.7847, lng:-78.6821 },
    { id:"scb", name:"Standard Chartered Bank AI/ML Hackathon", award:"Runner Up", rank:2, date:"Mar 2023",
      issuer:"Standard Chartered Bank", assoc:"PSG College of Technology",
      project:"IntelliCTS — Cheque Parsing System", projectId:"intellicts",
      about:"Built an automated cheque-processing system modeled on India's RBI-mandated Cheque Truncation System (CTS), using TensorFlow and OCR/ICR to digitize and validate cheque data at scale.\n\nExtracted and parsed structured fields, account number, IFSC code, amount and handwritten payee names, from scanned cheque images, and supported bulk batch processing to reduce manual data entry in the clearing workflow.",
      tech:["TensorFlow","Python","OCR"],
      icon:"assets/hackathons/scb-icon.png", banner:"assets/hackathons/scb.svg", bannerFit:"contain",
      place:"PSG College of Technology", city:"Coimbatore, India", lat:11.0247, lng:77.0028 },
    { id:"socgen", name:"Societe Generale AI/ML Hackathon", award:"Special Mention", rank:3, date:"Aug 2023",
      issuer:"Societe Generale", assoc:"PSG College of Technology", project:"",
      icon:"assets/hackathons/socgen-icon.png", banner:"assets/hackathons/socgen.svg", bannerFit:"contain",
      place:"PSG College of Technology", city:"Coimbatore, India", lat:11.0247, lng:77.0028 },
    { id:"nabard", name:"NABARD AgriSure Greenathon", award:"Finalist", rank:4, date:"Nov 2023",
      issuer:"NABARD", assoc:"PSG College of Technology",
      project:"GreenFPO — Satellite-Based Crop Advisory",
      icon:"assets/hackathons/nabard-icon.png", banner:"assets/hackathons/nabard.png", bannerFit:"contain",
      place:"Remote", city:"Online", lat:null, lng:null },
    { id:"ksp", name:"KSP Datathon", award:"Finalist", rank:4, date:"Nov 2023",
      issuer:"Karnataka State Police", assoc:"PSG College of Technology", project:"",
      icon:"assets/hackathons/ksp-icon.png", banner:"assets/hackathons/ksp.png", bannerFit:"contain",
      place:"Remote", city:"Online", lat:null, lng:null }
]
};

// Notification banners (top-right). delay = ms after page load.
const notificationsData = [
    { app:"Safari", icon:"assets/app_icons/safari.png", title:"Elemental Quest", body:"All players joined — the match is starting.", delay:2600, action:{ type:"project", id:"elementalquest" } },
    { app:"Calendar", icon:"assets/app_icons/calendar.svg", title:"Upcoming Hackathon", body:"Hack_NCState 2027 · Feb 6–7, 2027 at NC State", delay:7000, action:{ type:"maps", id:"hackncstate" } },
];

const trashItems = [
    { iconType:'folder', title:'portfolio_old', sub:'old version portfolio' },
    { iconType:'pdf',    title:'resume_old.pdf', sub:'old resume' },
];

// ─────────────────────────────────────────────────
// SHARED ICONS — same artwork as the desktop icons
// ─────────────────────────────────────────────────
const FOLDER_ICON = (size) => `<img src="assets/folder.webp" alt="" width="${size}" height="${size}" style="object-fit:contain;">`;
const PDF_ICON = (size) => `<img src="assets/app_icons/pdf.png" alt="" width="${size}" height="${size}" style="object-fit:contain;">`;
const GMAIL_ICON = (size) => `<svg viewBox="52 42 88 66" width="${size}" height="${size}"><path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/><path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/><path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/><path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/><path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/></svg>`;

// ─────────────────────────────────────────────────
// SPOTLIGHT ICONS — inline SVGs
// ─────────────────────────────────────────────────
function getSpotlightIconSVG(iconType) {
    if (iconType && iconType.startsWith('img:')) return `<img src="${iconType.slice(4)}" alt="" width="28" height="28" style="object-fit:contain;">`;
    const uid = Math.random().toString(36).slice(2,7);
    const icons = {
        // Same artwork as the desktop/dock icons, so Spotlight results match what's on-screen
        folder:   FOLDER_ICON(30),
        pdf:      PDF_ICON(28),
        terminal: `<img src="assets/app_icons/terminal.png" alt="" width="30" height="30" style="object-fit:contain;">`,
        contact:  `<img src="assets/contact.webp" alt="" width="30" height="30" style="object-fit:contain;">`,
        location: `<svg viewBox="0 0 40 40" fill="none" width="26" height="26"><defs><linearGradient id="sploc${uid}" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#34d399"/><stop offset="1" stop-color="#22d3ee"/></linearGradient></defs><path d="M20 3C13.4 3 8 8.4 8 15c0 8 12 22 12 22s12-14 12-22c0-6.6-5.4-12-12-12zm0 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" fill="url(#sploc${uid})"/></svg>`,
        github:   `<svg viewBox="0 0 40 40" fill="none" width="26" height="26"><rect width="40" height="40" rx="9" fill="#24292e"/><path fill="white" d="M20 5C11.7 5 5 11.7 5 20c0 6.6 4.3 12.2 10.2 14.2.7.1 1-.3 1-.7v-2.8c-4.2.9-5-1.8-5-1.8-.7-1.7-1.7-2.2-1.7-2.2-1.3-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.3 1.2.1-.9.5-1.6.9-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5a14 14 0 0 1 3.7-.5c1.3 0 2.5.2 3.7.5 2.8-1.9 4.1-1.5 4.1-1.5.8 2 .3 3.6.1 4 .9 1 1.5 2.4 1.5 4 0 5.7-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.8 1 .7C30.7 32.2 35 26.6 35 20c0-8.3-6.7-15-15-15z"/></svg>`,
        linkedin: `<svg viewBox="0 0 40 40" fill="none" width="26" height="26"><rect width="40" height="40" rx="9" fill="#0077b5"/><path fill="white" d="M13 29h-4V16h4v13zm-2-14.8c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM30 29h-4v-6.5c0-1.5 0-3.5-2.1-3.5s-2.4 1.7-2.4 3.4V29h-4V16h3.8v1.8h.1c.5-1 1.8-2.1 3.7-2.1 4 0 4.7 2.6 4.7 6V29z"/></svg>`,
    };
    return icons[iconType] || icons['folder'];
}

const spotlightIndex = [
    { title:"Experience",  sub:"Activity Monitor · STAC Lab · CAMCORE · NC State · IIIT-B · IIM-C", action:"Open", type:"folder", key:"professional", iconType:"img:assets/app_icons/activitymonitor.png" },
    { title:"Projects",    sub:"CausalCI · Elemental Quest · AdaptiBoard · WolfTrace · IntelliCTS · ByteBite", action:"Open", type:"folder", key:"projects", iconType:"img:assets/app_icons/appstore.png" },
    { title:"Hackathons",  sub:"BR41N.IO · Hack_NCState · Standard Chartered · Societe Generale · NABARD · KSP",    action:"Open", type:"folder", key:"hackathons", iconType:"img:assets/app_icons/maps.png" },
{ title:"Research",    sub:"Gaze Points · DAM Dataset · Soil ML · Logistics · DecentraCheque · PINNs",      action:"Open", type:"folder", key:"research", iconType:"folder" },
{ title:"Resume",      sub:"Download or preview my resume",                          action:"Open",  type:"resume",                       iconType:"pdf"      },
    { title:"Terminal",    sub:"whoami · skills · education · experience…",               action:"Open",  type:"terminal",                     iconType:"terminal" },
    { title:"Contact",     sub:"Say Hello",                                              action:"Open",  type:"contact",                      iconType:"contact"  },
    { title:"Tools",       sub:"Languages · frameworks · cloud · ML — every tool I use",  action:"Open",  type:"tools",                        iconType:"img:assets/app_icons/apps.png" },
    { title:"Location",    sub:"India → Raleigh, NC",                                   action:"Open",  type:"info",                         iconType:"location" },
    { title:"GitHub",      sub:"github.com/SwethaatGH",                                 action:"Open",  type:"link", url:"https://github.com/SwethaatGH",                           iconType:"github"   },
    { title:"LinkedIn",    sub:"linkedin.com/in/swetha-manivasagam",                    action:"Open",  type:"link", url:"https://www.linkedin.com/in/swetha-manivasagam/",         iconType:"linkedin" },
];

// ─────────────────────────────────────────────────
// TERMINAL COMMANDS
// ─────────────────────────────────────────────────
const termOpen = (label, fn) => { setTimeout(fn, 250); return `Opening <span class="t-highlight">${label}</span>…`; };
const terminalCommands = {
    help: {
        desc: "List commands",
        fn: () => `<span class="t-head">Available commands</span>

  whoami         quick introduction
  skills         every language, framework and tool
  education      academic background
  experience     open Activity Monitor (experience)
  projects       open the App Store (projects)
  hackathons     open Maps (hackathons)
  research       open the Research folder
  open contact   send me a message
  github         open GitHub
  linkedin       open LinkedIn
  scholar        open Google Scholar
  medium         open Medium
  clear          clear the terminal`
    },

    whoami: {
    desc: "About Swetha",
    fn: () => `<span class="t-highlight">Swetha Manivasagam</span>
MCS student with published deep learning research experience in
spatio-temporal modelling and building RESTful APIs, C++ systems,
data pipelines and cloud infrastructure for large-scale data through
production deployment.

Currently seeking SDE/ MLE New Grad 2027 opportunities.`
},

    skills: {
        desc: "Every language, framework and tool",
        fn: () => toolsCatalog.map(g => `<span class="t-highlight">${escHtml(g.group)}</span>\n  ${g.items.map(escHtml).join(' · ')}`).join('\n\n')
    },

    education: {
        desc: "Academic background",
        fn: () => `<span class="t-highlight">North Carolina State University</span>
  Masters in Computer Science
  Aug 2025 – May 2027
  GPA: 4.0 / 4.0

<span class="t-highlight">PSG College of Technology</span>
  Bachelor of Engineering in Computer Science & Engineering
  Oct 2021 – May 2025
  CGPA: 8.83 / 10.0`
    },

    experience: { desc:"Open Activity Monitor",  fn:() => termOpen('Activity Monitor', openActivityMonitor) },
    projects:   { desc:"Open the App Store",     fn:() => termOpen('App Store', () => openAppStore()) },
    hackathons: { desc:"Open Maps",              fn:() => termOpen('Maps', () => openMaps()) },
    research:   { desc:"Open the Research folder", fn:() => termOpen('Research', () => openResearchFinder()) },

    github:   { desc:"Open GitHub",         fn:()=>{ window.open('https://github.com/SwethaatGH','_blank'); return 'Opening GitHub…'; }},
    linkedin: { desc:"Open LinkedIn",       fn:()=>{ window.open('https://www.linkedin.com/in/swetha-manivasagam/','_blank'); return 'Opening LinkedIn…'; }},
    scholar:  { desc:"Open Google Scholar", fn:()=>{ window.open('https://scholar.google.com/citations?user=MTwTB64AAAAJ&hl=en','_blank'); return 'Opening Google Scholar…'; }},
    medium:   { desc:"Open Medium",         fn:()=>{ window.open('https://medium.com/@swethawritescompsci/','_blank'); return 'Opening Medium…'; }},
    clear:    { desc:"Clear terminal",      fn:()=>'CLEAR' },
};

function getWelcomeMessage() {
    const d=new Date(Date.now()-36e5*3), pad=n=>String(n).padStart(2,'0');
    const stamp=d.toLocaleDateString('en-US',{weekday:'short'})+' '+d.toLocaleDateString('en-US',{month:'short'})+' '+String(d.getDate()).padStart(2,' ')+' '+pad(d.getHours())+':'+pad(d.getMinutes())+':'+pad(d.getSeconds());
    return `Last login: ${stamp} on ttys000
Type <span class="t-highlight">help</span> to see available commands.`;
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
    extendSpotlight();
    initNotifications();
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
        document.getElementById(id)?.addEventListener('click', () => openAppFolder(key));
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
function initTools() {
    // Tools live in the full-screen Apps launcher (js/apps.js → openLaunchpad)
    document.getElementById('tools-window')?.remove();
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
        if (cmd) { entry.innerHTML=`<div class="terminal-entry-cmd"><span class="t-prompt">swetha</span><span class="t-at">@</span><span class="t-machine">portfolio</span><span class="t-sep"> ~ % </span><span class="t-cmd-text">${escHtml(cmd)}</span></div><div class="terminal-entry-out">${out}</div>`; }
        else { entry.innerHTML=`<div class="terminal-entry-out">${out}</div>`; }
        hist.appendChild(entry); hist.scrollTop=hist.scrollHeight;
    }

    function runCmd(raw) {
        const cmd=raw.trim().toLowerCase();
        if (!cmd) return;
        termHistory.unshift(raw.trim()); histIdx=-1; inputBuf='';
        if (cmd==='clear') { hist.innerHTML=''; addOutput('',getWelcomeMessage()); return; }
        const openMatch=cmd.match(/^open\s+(\w+)$/);
        if (openMatch) {
            const t=openMatch[1];
            const targets={experience:'experience',professional:'experience',projects:'projects',research:'research',hackathons:'hackathons'};
            if(targets[t]){addOutput(raw.trim(),terminalCommands[targets[t]].fn());return;}
            if(t==='contact'){addOutput(raw.trim(),termOpen('Mail', openContact));return;}
            if(t==='tools'){addOutput(raw.trim(),termOpen('Apps', openLaunchpad));return;}
        }
        const def=terminalCommands[cmd];
        if (def) { const r=def.fn(); if(r==='CLEAR'){hist.innerHTML='';addOutput('',getWelcomeMessage());return;} addOutput(raw.trim(),r); }
        else { addOutput(raw.trim(),`zsh: command not found: ${escHtml(cmd)}\nType <span class="t-highlight">help</span> for commands.`); }
    }

    const allCmds=[...Object.keys(terminalCommands),'open contact','open tools'];
    const extraDesc={'open contact':'Send a message','open tools':'Open the Apps launcher'};
    let acItems=[], acSel=-1;
    function showAc(val){if(!val){hideAc();return;}const m=allCmds.filter(c=>c.startsWith(val.toLowerCase())&&c!==val.toLowerCase());if(!m.length){hideAc();return;}acItems=m.slice(0,6);acSel=-1;ac.innerHTML=acItems.map((x,i)=>`<div class="autocomplete-item" data-i="${i}"><span>${escHtml(x)}</span><span class="autocomplete-hint">${terminalCommands[x]?.desc||extraDesc[x]||''}</span></div>`).join('');ac.classList.add('open');ac.querySelectorAll('.autocomplete-item').forEach(el=>{el.addEventListener('mousedown',e=>{e.preventDefault();input.value=acItems[+el.dataset.i];hideAc();input.focus();});});}
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
    const field=(id,label,input)=>`<div class="cf-field" data-field="${id}">${input}<div class="cf-err" id="cf-err-${id}" aria-live="polite"></div></div>`;
    return `
    <div class="contact-form-inner">
        <div class="contact-form-header">
            <div class="contact-form-icon"><img src="assets/app_icons/mail.png" alt="" width="46" height="46"></div>
            <div>
                <div class="contact-form-title">Say Hello!</div>
                <div class="contact-form-sub">I'd love to hear from you</div>
            </div>
        </div>
        <form id="web3form" novalidate>
            <input type="hidden" name="access_key" value="7e3089cc-f380-4306-a256-6149125b9b31">
            <input type="hidden" name="subject" value="Portfolio Contact — New Message">
            <input type="checkbox" name="botcheck" style="display:none" tabindex="-1" autocomplete="off">
            ${field('name','Your Name',`<input class="cf-input" type="text" id="cf-name" name="name" placeholder="Your Name" aria-label="Your Name" aria-describedby="cf-err-name" required maxlength="80" autocomplete="name">`)}
            ${field('email','Email Address',`<input class="cf-input" type="email" id="cf-email" name="email" placeholder="Email Address" aria-label="Email Address" aria-describedby="cf-err-email" required maxlength="254" autocomplete="email">`)}
            ${field('message','Message',`<textarea class="cf-input cf-textarea" id="cf-message" name="message" placeholder="Message" aria-label="Message" aria-describedby="cf-err-message" required rows="5" maxlength="5000"></textarea>`)}
            <div class="cf-actions">
                <button type="submit" class="cf-submit" id="cf-submit-btn">Send</button>
            </div>
        </form>
    </div>`;
}

// Returns an error message for a field, or '' when it is valid
function validateContactField(id, raw) {
    const v=(raw||'').trim();
    if (id==='name') {
        if (!v) return 'Please enter your name.';
        if (v.length<2) return 'Your name looks too short.';
        if (!/^[\p{L}][\p{L}\p{M} .,'’-]*$/u.test(v)) return 'Use letters only — no numbers or symbols.';
    }
    if (id==='email') {
        if (!v) return 'Please enter your email address.';
        if (!/^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[A-Za-z]{2,}$/.test(v)) return 'Enter a valid email address, like name@example.com.';
    }
    if (id==='message') {
        if (!v) return 'Please write a message.';
        if (v.length<10) return 'Your message is a little short — add a few more words.';
    }
    return '';
}

function setupContactForm() {
    const form=document.getElementById('web3form');
    if (!form) return;
    const win=document.getElementById('contact-window');
    const submitBtn=form.querySelector('#cf-submit-btn');
    const ids=['name','email','message'];
    const inputOf=id=>form.querySelector('#cf-'+id);
    const show=(id,msg)=>{
        const el=inputOf(id), err=form.querySelector('#cf-err-'+id);
        el.classList.toggle('cf-invalid',!!msg); el.setAttribute('aria-invalid',msg?'true':'false');
        err.innerHTML=msg?`<svg viewBox="0 0 16 16" width="12" height="12"><circle cx="8" cy="8" r="7.5" fill="#ff3b30"/><path d="M8 4.2v4.6" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/><circle cx="8" cy="11.4" r="1" fill="#fff"/></svg>${escHtml(msg)}`:'';
    };
    // Validate on blur, and clear errors as soon as the field becomes valid
    ids.forEach(id=>{
        const el=inputOf(id);
        el.addEventListener('blur',()=>{ if(el.value.trim()) show(id,validateContactField(id,el.value)); });
        el.addEventListener('input',()=>{ if(el.classList.contains('cf-invalid')) show(id,validateContactField(id,el.value)); });
    });
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let first=null;
        ids.forEach(id=>{ const msg=validateContactField(id,inputOf(id).value); show(id,msg); if(msg&&!first) first=id; });
        if (first) {
            inputOf(first).focus();
            submitBtn.classList.remove('cf-shake'); void submitBtn.offsetWidth; submitBtn.classList.add('cf-shake');
            return;
        }
        const name=inputOf('name').value.trim(), email=inputOf('email').value.trim();
        const formData=new FormData(form);
        ids.forEach(id=>formData.set(id,inputOf(id).value.trim()));
        submitBtn.textContent='Sending…';
        submitBtn.disabled=true;
        try {
            const response=await fetch('https://api.web3forms.com/submit',{method:'POST',body:formData,headers:{Accept:'application/json'}});
            const data=await response.json().catch(()=>({}));
            if(response.ok && data.success!==false){
                form.reset(); ids.forEach(id=>show(id,''));
                showMacAlert(win,{icon:'assets/app_icons/mail.png',title:'Message Sent',text:`Thanks, ${name.split(/\s+/)[0]}! Your message is on its way. I’ll reply to ${email} soon.`,buttons:[{label:'OK',primary:true}]});
            } else {
                showMacAlert(win,{icon:'assets/app_icons/mail.png',title:'Message Not Sent',text:data.message||'Something went wrong on the server. Please try again in a moment.',buttons:[{label:'OK',primary:true}]});
            }
        } catch(error) {
            showMacAlert(win,{icon:'assets/app_icons/mail.png',title:'You appear to be offline',text:'Your message couldn’t be sent. Check your internet connection and try again.',buttons:[{label:'OK',primary:true}]});
        } finally {
            submitBtn.textContent='Send';
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
    if(icon) icon.onclick=()=>{if(isPhone())window.open('assets/resume.pdf','_blank');else restoreResumeWindow();addRecent('Resume','resume-icon','resume','');};
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
    item.title='Resume';
    item.innerHTML=`
        <div class="dock-icon-wrap">${PDF_ICON(36)}</div>
        <div class="dock-tooltip">Resume</div>
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
function initTrash() {
    // Trash opens in the Finder window (js/apps.js → openResearchFinder('trash'))
    document.getElementById('trash-window')?.remove();
}

// ─────────────────────────────────────────────────
// DOCK
// ─────────────────────────────────────────────────
function initDock() {
    const links={github:'https://github.com/SwethaatGH',linkedin:'https://www.linkedin.com/in/swetha-manivasagam/',scholar:'https://scholar.google.com/citations?user=MTwTB64AAAAJ&hl=en',medium:'https://medium.com/@swethawritescompsci/'};
    document.querySelectorAll('.dock-item').forEach(item=>{
        const app=item.dataset.app; if(!app) return;
        item.addEventListener('click',()=>{
            if(app!=='tools') closeLaunchpad();
            if(app==='terminal') openTerminalWindow();
            else if(app==='trash') openResearchFinder('trash');
            else if(app==='tools') openLaunchpad();
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
    else if(r.type==='tools')    openLaunchpad();
    else if(r.type==='contact')  openContact();
    else if(r.type==='resume')   document.getElementById('resume-icon')?.click();
    else if(r.type==='link'&&r.url) window.open(r.url,'_blank');
    else if(r.type==='app')   openProjectApp(r.id);
    else if(r.type==='paper') openPaper(r.idx);
    else if(r.type==='hack')  openMaps(r.id);
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

// Centre vertically in the space between the menu bar (28px) and the dock (~96px)
function centerTop(vh,winH){ return Math.round(28+Math.max(6,(vh-28-96-winH)/2)); }
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
            win.style.top=centerTop(vh,winH)+'px';
        } else if(!win.style.left||win.style.left==='0px'||win.style.left==='') {
            win.style.transform='none';
            win.style.left=Math.max(0,(vw-winW)/2)+'px';
            win.style.top=centerTop(vh,winH)+'px';
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
