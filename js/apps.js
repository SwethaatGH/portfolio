// ═════════════════════════════════════════════════════════════════
// APPS — App Store (Projects), Maps (Hackathons), Finder + Preview
// (Research), notification banners and the grouped Tools window.
// Data lives in js/main.js (portfolioData, notificationsData).
// ═════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────
// TECH ICONS — name → file in assets/tech (or a full path).
// Anything not listed renders as a neutral monogram tile.
// ─────────────────────────────────────────────────
const TECH_DIR = 'assets/tech/';
const TECH_ICONS = {
    'Python':'python.svg', 'C':'c.svg', 'C++':'cplusplus.svg', 'Java':'java.svg', 'JavaScript':'javascript.svg',
    'TypeScript':'typescript.svg', 'Bash':'bash.svg', 'PHP':'php.svg', 'Solidity':'solidity.svg', 'HTML5':'html5.svg', 'CSS3':'css3.svg',
    'React':'react.svg', 'React Native':'react.svg', 'Next.js':'nextjs.svg', 'Bootstrap':'bootstrap.svg',
    'Node.js':'nodejs.svg', 'Express':'express.svg', 'Flask':'flask.svg', 'Django':'django.svg', 'FastAPI':'fastapi.svg', 'Fastify':'fastify.svg',
    'MySQL':'mysql.svg', 'PostgreSQL':'postgresql.svg', 'MongoDB':'mongodb.svg', 'Neo4j':'neo4j.svg', 'Redis':'redis.svg', 'SQLite':'sqlite.svg',
    'Pandas':'pandas.svg', 'NumPy':'numpy.svg', 'SciPy':'scipy.svg', 'Streamlit':'streamlit.svg',
    'PyTorch':'pytorch.svg', 'TensorFlow':'tensorflow.svg', 'Keras':'keras.svg', 'OpenCV':'opencv.svg', 'Hugging Face':'huggingface.svg',
    'Groq':'groq.svg', 'Llama 3.3':'llama.svg', 'Llama':'llama.svg', 'Gemini':'gemini.svg', 'Gemma':'gemma.svg', 'Whisper':'openai.svg', 'MCP':'mcp.svg', 'Twilio':'twilio.svg',
    'Docker':'docker.svg', 'Kubernetes':'kubernetes.svg', 'Helm':'helm.svg', 'KEDA':'keda.svg', 'Terraform':'terraform.svg', 'gVisor':'gvisor.png',
    'Google Cloud':'googlecloud.svg', 'AWS':'amazonwebservices.svg', 'GitHub Actions':'githubactions.svg', 'Prometheus':'prometheus.svg', 'Grafana':'grafana.svg',
    'Linux':'linux.svg', 'Git':'git.svg', 'ZeroMQ':'zeromq.svg', 'ESP32':'espressif.svg', 'JUnit':'junit.svg', 'Selenium':'selenium.svg',
    'LaTeX':'latex.svg', 'Ethereum':'ethereum.svg',
    // concept glyphs (assets/tech/g-*.svg) and extra brand marks
    'Tree-sitter':'g-treesitter.svg',
    'Multithreading':'g-multithreading.svg',
    'Networking':'g-networking.svg',
    'Game Engine':'g-gameengine.svg',
    'WebSockets':'g-websockets.svg',
    'BrainFlow':'g-brainflow.svg',
    'edge-tts':'g-tts.svg',
    'EEG':'g-eeg.svg',
    'Agentic Workflows':'g-agentic.svg',
    'RAG':'g-rag.svg',
    'Mongoose':'mongoose.svg',
    'Leaflet':'leaflet.svg',
    'Software Testing':'g-testing.svg',
    'CI/CD':'g-cicd.svg',
    'Requirements Engineering':'g-requirements.svg',
    'DETR':'meta.svg',
    'CNN':'g-cnn.svg',
    'MPIIGaze':'g-gaze.svg',
    'Computer Vision':'g-vision.svg',
    'OCR':'g-ocr.svg',
    'IoT':'g-iot.svg',
    'Embedded Systems':'g-embedded.svg',
    'Microprocessors':'g-cpu.svg',
    'Sensors':'g-sensors.svg',
    'Java Swing':'java.svg',
    'Java AWT':'java.svg',
    'SQL':'g-sql.svg',
    'Package Management':'g-package.svg',
    'U-Net':'g-unet.svg',
    'ResNet':'g-resnet.svg',
    'Geospatial ML':'g-geoml.svg',
    'AWS Lightsail':'amazonwebservices.svg',
    'ETL':'g-etl.svg',
    'Geospatial Data':'g-geodata.svg',
    'Algorithms':'g-algorithms.svg',
    'Teaching':'g-teaching.svg',
    'REST API':'g-restapi.svg',
    'AJAX':'g-ajax.svg',
    'Prototyping':'g-prototyping.svg',
    'UX Research':'g-uxresearch.svg',
    'Geospatial':'g-geoml.svg',
    'Machine Learning':'g-cnn.svg',
    'Express.js':'express.svg',
    'React.js':'react.svg',
    // apps already in assets/dock_tools
    'VS Code':'assets/dock_tools/vscode.png', 'IntelliJ':'assets/dock_tools/intellij.png', 'GitHub':'assets/dock_tools/github.jpeg',
    'MySQL Workbench':'assets/dock_tools/mysqlwb.webp', 'Postman':'assets/dock_tools/postman.jpeg', 'Overleaf':'assets/dock_tools/overleaf.jpg',
    'Microsoft 365':'assets/dock_tools/microsoft365.png', 'Notion':'assets/dock_tools/notion.png', 'Figma':'assets/dock_tools/figma.png',
    'AnyDesk':'assets/dock_tools/anydesk.png', 'Tableau':'assets/dock_tools/tableau.svg', 'Power BI':'assets/dock_tools/powerbi.jpeg',
};
function techSrc(name) {
    const f = TECH_ICONS[name];
    if (!f) return null;
    return f.includes('/') ? f : TECH_DIR + f;
}
function techIconHTML(name, cls = 'tech-ico') {
    const src = techSrc(name);
    if (src) return `<span class="${cls}"><img src="${src}" alt="" loading="lazy"></span>`;
    const mono = name.replace(/[^A-Za-z0-9+ ]/g, ' ').split(/\s+/).filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase() || name.slice(0, 2);
    return `<span class="${cls} tech-mono">${escHtml(mono)}</span>`;
}

// ─────────────────────────────────────────────────
// TOOLS — every language, framework and tool, grouped
// ─────────────────────────────────────────────────
const toolsCatalog = [
    { group:'Languages',            items:['Python','C','C++','Java','JavaScript','TypeScript','Bash','PHP','Solidity','HTML5','CSS3'] },
    { group:'Frontend',             items:['React','React Native','Next.js','Bootstrap','Java Swing','Java AWT','Leaflet'] },
    { group:'Backend',              items:['Node.js','Express','Flask','Django','FastAPI','Fastify','REST API','WebSockets','AJAX','Mongoose'] },
    { group:'Data & Databases',     items:['SQL','MySQL','PostgreSQL','MongoDB','Neo4j','Redis','SQLite','ETL','Geospatial Data','Pandas','NumPy','SciPy','Streamlit','Tableau','Power BI'] },
    { group:'Machine Learning',     items:['PyTorch','TensorFlow','Keras','OpenCV','Hugging Face','CNN','ResNet','U-Net','DETR','Computer Vision','OCR','Geospatial ML'] },
    { group:'AI Models & APIs',     items:['Groq','Llama','Gemini','Gemma','Whisper','edge-tts','MCP','RAG','Agentic Workflows','Twilio'] },
    { group:'Cloud & DevOps',       items:['Docker','Kubernetes','Helm','KEDA','Terraform','gVisor','Google Cloud','AWS','AWS Lightsail','GitHub Actions','CI/CD','Prometheus','Grafana','Linux','Git','Package Management'] },
    { group:'Systems & Hardware',   items:['Multithreading','Networking','Game Engine','ZeroMQ','Tree-sitter','ESP32','Embedded Systems','Microprocessors','Sensors','IoT','EEG','BrainFlow'] },
    { group:'Testing & Process',    items:['Software Testing','JUnit','Selenium','Postman','Requirements Engineering','Algorithms'] },
    { group:'Apps & Productivity',  items:['Figma','Prototyping','UX Research','VS Code','IntelliJ','GitHub','MySQL Workbench','Overleaf','Notion','Microsoft 365','AnyDesk'] },
];
// Tools open in a full-screen "Apps" launcher (macOS Apps / Launchpad),
// keeping the category sections. Click the background or press Esc to close.
function openLaunchpad() {
    let ov = document.getElementById('launchpad');
    if (!ov) {
        ov = document.createElement('div');
        ov.id = 'launchpad'; ov.className = 'lp';
        ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-label', 'Tools');
        ov.innerHTML = `
            <div class="lp-top">
                <label class="lp-search">${AS_ICONS.search}<input type="search" placeholder="Search tools" aria-label="Search tools" autocomplete="off" spellcheck="false"></label>
                <nav class="lp-chips">${toolsCatalog.map((g, i) => `<button class="lp-chip" data-sec="${i}">${escHtml(g.group)}</button>`).join('')}</nav>
            </div>
            <div class="lp-scroll">${toolsCatalog.map((g, i) => `
                <section class="lp-section" id="lp-sec-${i}">
                    <h3 class="lp-section-title">${escHtml(g.group)}</h3>
                    <div class="lp-grid">${g.items.map(n => `
                        <div class="lp-app" data-name="${escHtml(n.toLowerCase())}">${techIconHTML(n, 'lp-icon')}<span class="lp-name">${escHtml(n)}</span></div>`).join('')}
                    </div>
                </section>`).join('')}
                <div class="lp-empty">No tools match your search.</div>
            </div>`;
        document.body.appendChild(ov);
        const input = ov.querySelector('.lp-search input');
        input.addEventListener('input', () => {
            const q = input.value.trim().toLowerCase();
            let any = false;
            ov.querySelectorAll('.lp-section').forEach(sec => {
                let n = 0;
                sec.querySelectorAll('.lp-app').forEach(a => { const hit = !q || a.dataset.name.includes(q); a.hidden = !hit; if (hit) n++; });
                sec.hidden = !n; if (n) any = true;
            });
            ov.querySelector('.lp-empty').style.display = any ? 'none' : 'block';
        });
        ov.querySelectorAll('.lp-chip').forEach(c => c.addEventListener('click', () => {
            ov.querySelector('#lp-sec-' + c.dataset.sec)?.scrollIntoView({ behavior:'smooth', block:'start' });
        }));
        ov.addEventListener('click', e => { if (!e.target.closest('.lp-app, .lp-top')) closeLaunchpad(); });
        document.addEventListener('keydown', e => { if (e.key === 'Escape' && ov.classList.contains('open')) closeLaunchpad(); });
    }
    if (ov.classList.contains('open')) { closeLaunchpad(); return; }
    ov.querySelector('.lp-search input').value = '';
    ov.querySelector('.lp-search input').dispatchEvent(new Event('input'));
    ov.querySelector('.lp-scroll').scrollTop = 0;
    ov.classList.add('open');
    document.body.classList.add('lp-open');
    setRoute('tools');
    if (!window.matchMedia('(max-width:768px)').matches) setTimeout(() => ov.querySelector('.lp-search input').focus(), 60);
}
function closeLaunchpad() {
    const ov = document.getElementById('launchpad');
    if (ov?.classList.contains('open')) clearRoute('tools');
    ov?.classList.remove('open');
    document.body.classList.remove('lp-open');
}

// ─────────────────────────────────────────────────
// APP WINDOWS — one reusable window per key
// ─────────────────────────────────────────────────
const appWindows = {};
// window key → Dock item that launches it (those windows minimize into their own Dock icon)
const DOCK_APP_FOR = { appstore:'projects', maps:'hackathons', activity:'experience' };
const SYS_ICONS = {
    appstore:'assets/app_icons/appstore.png', maps:'assets/app_icons/maps.png',
    preview:'assets/app_icons/preview.png', safari:'assets/app_icons/safari.png',
    activity:'assets/app_icons/activitymonitor.png', apps:'assets/app_icons/apps.png', finder:'assets/app_icons/finder.png',
    mail:'assets/app_icons/mail.png', terminal:'assets/app_icons/terminal.png', pdf:'assets/app_icons/pdf.png',
};
const imgIcon = (src, size) => `<img src="${src}" alt="" width="${size}" height="${size}" style="object-fit:contain;">`;

function createAppWindow({ key, title, cls, dockIcon, html, onShow, onHide }) {
    const win = document.createElement('div');
    win.className = `window app-window ${cls}`;
    win.style.display = 'none';
    win.innerHTML = `
        <div class="window-titlebar">
            <div class="window-controls">
                <div class="window-control close"></div>
                <div class="window-control minimize"></div>
                <div class="window-control maximize"></div>
            </div>
            <div class="window-title">${escHtml(title)}</div>
            <div class="window-titlebar-end"></div>
        </div>
        <div class="app-body">${html}</div>`;
    document.body.appendChild(win);
    initMinMaxForWindow(win);
    makeDraggable(win);
    makeResizable(win);
    win._dockIcon = dockIcon;
    win._onShow = onShow; win._onHide = onHide;

    const clearDock = () => { win._minDockItem?.remove(); win._minDockSep?.remove(); win._minDockItem = null; win._minDockSep = null; };
    win.querySelector('.window-control.close').addEventListener('click', e => {
        e.stopPropagation(); win.style.display = 'none'; clearDock(); win._onHide?.();
        clearRoute(currentRouteFor(key).split('/')[0]);
    });
    win.querySelector('.window-control.minimize').addEventListener('click', e => {
        e.stopPropagation();
        if (win.style.display === 'none') return;
        win.style.display = 'none'; win._onHide?.();
        if (win._minDockItem || DOCK_APP_FOR[key]) return;
        const dock = document.getElementById('dock');
        const item = document.createElement('div');
        item.className = 'dock-item minimized-dock-item';
        item.innerHTML = `<div class="dock-icon-wrap">${dockIcon}</div><div class="dock-tooltip">${escHtml(title)}</div><div class="dock-dot"></div>`;
        const sep = document.createElement('div'); sep.className = 'dock-separator minimized-sep';
        item.addEventListener('click', () => showAppWindow(key));
        const trash = dock.querySelector('[data-app="trash"]');
        dock.insertBefore(sep, trash); dock.insertBefore(item, trash);
        win._minDockItem = item; win._minDockSep = sep;
    });
    win._clearDock = clearDock;
    appWindows[key] = win;
    return win;
}
function showAppWindow(key) {
    const win = appWindows[key];
    if (!win) return null;
    win._clearDock?.();
    openWindowCentered(win);
    win._onShow?.();
    setRoute(currentRouteFor(key));
    return win;
}

// Desktop folder icons for projects / research / hackathons route here
function openAppFolder(key) {
    if (key === 'projects')   return openAppStore();
    if (key === 'hackathons') return openMaps();
    if (key === 'research')   return openResearchFinder();
    if (key === 'professional') return openActivityMonitor();
}

// ═════════════════════════════════════════════════
// APP STORE — Projects
// ═════════════════════════════════════════════════
const AS_ICONS = {
    discover:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"/></svg>`,
    all:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="2"/><rect x="13.5" y="3.5" width="7" height="7" rx="2"/><rect x="3.5" y="13.5" width="7" height="7" rx="2"/><rect x="13.5" y="13.5" width="7" height="7" rx="2"/></svg>`,
    featured:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3.5l1.6 4.4 4.4 1.6-4.4 1.6L10 15.5l-1.6-4.4L4 9.5l4.4-1.6zM18 13l.9 2.1 2.1.9-2.1.9L18 19l-.9-2.1-2.1-.9 2.1-.9z"/></svg>`,
    search:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>`,
    back:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>`,
};
let asState = { view:'discover', query:'', detail:null };

function openAppStore(projectId) {
    if (!appWindows.appstore) {
        const win = createAppWindow({
            key:'appstore', title:'App Store', cls:'appstore-window', dockIcon:imgIcon(SYS_ICONS.appstore, 40),
            html:`
            <div class="as">
                <aside class="as-side">
                    <div class="as-search">${AS_ICONS.search}<input type="search" placeholder="Search" aria-label="Search projects" autocomplete="off" spellcheck="false"></div>
                    <nav class="as-nav">
                        <button class="as-nav-item" data-view="discover">${AS_ICONS.discover}<span>Discover</span></button>
                        <button class="as-nav-item" data-view="all">${AS_ICONS.all}<span>All Projects</span></button>
                        <button class="as-nav-item" data-view="featured">${AS_ICONS.featured}<span>Featured</span></button>
                    </nav>
                    <div class="as-account"><img src="assets/profile_photo.jpg" alt=""><div><b>Swetha Manivasagam</b><span>Developer</span></div></div>
                </aside>
                <main class="as-main"><div class="as-scroll"></div></main>
            </div>`
        });
        win.querySelectorAll('.as-nav-item').forEach(b => b.addEventListener('click', () => {
            asState = { view:b.dataset.view, query:'', detail:null };
            win.querySelector('.as-search input').value = '';
            renderAppStore();
        }));
        const input = win.querySelector('.as-search input');
        input.addEventListener('input', () => { asState.query = input.value.trim(); asState.detail = null; renderAppStore(); });
    }
    asState.detail = projectId || null;
    renderAppStore();
    showAppWindow('appstore');
    addRecent('Projects', 'projects-icon', 'folder', 'projects');
}
function openProjectApp(id) { openAppStore(id); }

function renderAppStore() {
    const win = appWindows.appstore; if (!win) return;
    const scroll = win.querySelector('.as-scroll');
    win.querySelectorAll('.as-nav-item').forEach(b => b.classList.toggle('active', !asState.query && b.dataset.view === asState.view));
    const all = portfolioData.projects;
    const FEATURED_ORDER = ['elementalquest', 'adaptiboard', 'causalci'];
    const featured = all.filter(p => p.featured).sort((a, b) => FEATURED_ORDER.indexOf(a.id) - FEATURED_ORDER.indexOf(b.id));
    let html = '';

    if (asState.detail) {
        const p = all.find(x => x.id === asState.detail);
        if (p) html = asDetailHTML(p);
    } else if (asState.query) {
        const q = asState.query.toLowerCase();
        const hits = all.filter(p => [p.name, p.subtitle, p.category, p.description, ...p.tech].join(' ').toLowerCase().includes(q));
        html = `<header class="as-head"><h1>Results for “${escHtml(asState.query)}”</h1></header>` +
            (hits.length ? `<div class="as-list">${hits.map(asRowHTML).join('')}</div>` : `<div class="as-empty">No projects match “${escHtml(asState.query)}”.</div>`);
    } else if (asState.view === 'discover') {
        const today = new Date().toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric' });
        html = `<header class="as-head"><div class="as-eyebrow">${today}</div><h1>Discover</h1></header>
            <div class="as-feature-grid">${featured.map(asTileHTML).join('')}</div>
            <div class="as-section-head"><h2>More Projects</h2><button class="as-link" data-goto-view="all">See All</button></div>
            <div class="as-small-grid">${all.filter(p => !p.featured).map(asRowHTML).join('')}</div>`;
    } else if (asState.view === 'all') {
        html = `<header class="as-head"><h1>All Projects</h1><div class="as-sub">${all.length} apps</div></header>
            <div class="as-list">${all.map(asRowHTML).join('')}</div>`;
    } else {
        html = `<header class="as-head"><div class="as-eyebrow">Editors’ Choice</div><h1>Featured</h1></header>
            <div class="as-feature-stack">${featured.map(asHeroHTML).join('')}</div>`;
    }
    scroll.innerHTML = html;
    scroll.scrollTop = 0;
    bindAppStore(scroll);
    if (win.style.display !== 'none') setRoute(currentRouteFor('appstore'));
}

function asBannerStyle(p, tile = false) {
    const img = tile ? (p.bannerTile || p.banner) : p.banner;
    return img
        ? `background-image:url('${img}');background-size:cover;background-position:center;`
        : `background:radial-gradient(120% 140% at 85% 10%, ${p.colors[0]} 0%, ${p.colors[1]} 70%);`;
}
function asGetBtn(p, cls = '') {
    return p.live
        ? `<button class="as-get ${cls}" data-live="${p.live}" aria-label="Open ${escHtml(p.name)}">GET</button>`
        : `<button class="as-get as-view ${cls}" data-open="${p.id}">VIEW</button>`;
}
function asTileHTML(p) {
    return `<article class="as-tile" data-open="${p.id}">
        <div class="as-tile-banner" style="${asBannerStyle(p, true)}">
            ${p.banner ? '' : `<img class="as-banner-art" src="${p.icon}" alt="">`}
            <div class="as-tile-copy"><span>${escHtml(p.category)}</span><b>${escHtml(p.subtitle)}</b></div>
        </div>
        <div class="as-tile-foot">
            <img class="as-icon" src="${p.icon}" alt="">
            <div class="as-meta"><b>${escHtml(p.name)}</b><span>${escHtml(p.subtitle)}</span></div>
            ${asGetBtn(p)}
        </div>
    </article>`;
}
function asHeroHTML(p) {
    return `<article class="as-hero" data-open="${p.id}" style="${asBannerStyle(p)}">
        ${p.banner ? '' : `<img class="as-banner-art" src="${p.icon}" alt="">`}
        <div class="as-hero-copy">
            <span class="as-eyebrow light">${escHtml(p.category)}</span>
            <h2>${escHtml(p.name)}</h2>
            <p>${escHtml(p.subtitle)}</p>
        </div>
        <div class="as-hero-foot">
            <img class="as-icon" src="${p.icon}" alt="">
            <div class="as-meta light"><b>${escHtml(p.name)}</b><span>${p.metrics.slice(0, 2).map(m => m.join(' ')).join(' · ')}</span></div>
            ${asGetBtn(p, 'light')}
        </div>
    </article>`;
}
function asRowHTML(p) {
    return `<div class="as-row" data-open="${p.id}">
        <img class="as-icon" src="${p.icon}" alt="">
        <div class="as-meta"><b>${escHtml(p.name)}</b><span>${escHtml(p.subtitle)}</span></div>
        ${asGetBtn(p)}
    </div>`;
}
function asDetailHTML(p) {
    const paras = p.description.split('\n\n').map(t => `<p>${escHtml(t)}</p>`).join('');
    const info = [
        ['Category', p.category],
        ['Date', p.date],
        ['Made At', p.madeAt],
        ['Built With', `${p.tech.length} technologies`],
    ];
    return `<div class="as-detail">
        <button class="as-back" data-back>${AS_ICONS.back}<span>Back</span></button>
        <div class="as-banner" style="${asBannerStyle(p)}">${p.banner ? '' : `<img class="as-banner-art big" src="${p.icon}" alt="">`}</div>
        <div class="as-detail-head">
            <img class="as-icon xl" src="${p.icon}" alt="">
            <div class="as-detail-title">
                <h1>${escHtml(p.name)}</h1>
                <div class="as-sub">${escHtml(p.subtitle)}</div>
                <div class="as-detail-actions">
                    ${p.live ? `<button class="as-get big" data-live="${p.live}">GET</button>${p.live.includes('onrender.com') ? '<span class="as-note">Hosted on Render · first load can take ~30s</span>' : ''}`
                             : `<span class="as-note">Not publicly deployed</span>`}
                    ${p.github ? `<a class="as-link" href="${p.github}" target="_blank" rel="noopener">Source code ↗</a>` : ''}
                    <button class="as-share" data-share="projects/${p.id}" aria-label="Copy link to ${escHtml(p.name)}" title="Copy link">${SHARE_ICON}</button>
                </div>
            </div>
        </div>
        <div class="as-info">${info.map(([k, v]) => `<div><span>${k}</span><b>${escHtml(v)}</b></div>`).join('')}</div>
        ${p.metrics?.length ? `<div class="as-metrics">${p.metrics.map(([v, l]) => `<div class="as-metric"><b>${escHtml(v)}</b><span>${escHtml(l)}</span></div>`).join('')}</div>` : ''}
        <section class="as-block"><h2>Description</h2>${paras}</section>
        <section class="as-block"><h2>Built With</h2>
            <div class="as-tech">${p.tech.map(t => `<div class="as-tech-item">${techIconHTML(t)}<span>${escHtml(t)}</span></div>`).join('')}</div>
        </section>
    </div>`;
}
function bindAppStore(scroll) {
    scroll.querySelectorAll('[data-open]').forEach(el => el.addEventListener('click', e => {
        if (e.target.closest('[data-live]')) return;
        e.stopPropagation();
        asState.detail = el.dataset.open; renderAppStore();
    }));
    scroll.querySelectorAll('[data-live]').forEach(btn => btn.addEventListener('click', e => {
        e.stopPropagation();
        window.open(btn.dataset.live, '_blank', 'noopener');
        btn.textContent = 'OPEN';
    }));
    scroll.querySelector('[data-back]')?.addEventListener('click', () => { asState.detail = null; renderAppStore(); });
    scroll.querySelector('[data-share]')?.addEventListener('click', e => { e.stopPropagation(); copyShareLink(e.currentTarget.dataset.share, e.currentTarget); });
    scroll.querySelector('[data-goto-view]')?.addEventListener('click', e => { asState.view = e.currentTarget.dataset.gotoView; renderAppStore(); });
}

// ═════════════════════════════════════════════════
// MAPS — Hackathons on a globe
// ═════════════════════════════════════════════════
const GLOBE_SRC = 'https://cdn.jsdelivr.net/npm/globe.gl@2.41.6/dist/globe.gl.min.js';
const MAP_TEXTURES = { satellite:'assets/maps/earth-blue-marble.jpg', night:'assets/maps/earth-night.jpg' };
// One pin colour for every hackathon (Apple Maps red); each event gets its own icon
const PIN_COLOR = '#ff3b30';
const PIN_GLYPH = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3h10v2h3v3a4 4 0 0 1-4 4h-.3A5 5 0 0 1 13 14.9V17h3v3H8v-3h3v-2.1A5 5 0 0 1 8.3 12H8a4 4 0 0 1-4-4V5h3zm0 4H6v1a2 2 0 0 0 1 1.7zm10 0v2.7A2 2 0 0 0 18 8V7z"/></svg>`;
const HACK_GLYPHS = {
    trophy: PIN_GLYPH,
    brain:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 3.5a7 7 0 0 0-6.9 5.8L4.8 12.6c-.2.4 0 .8.4.9l1.6.5V17a2 2 0 0 0 2 2H11v2.5h7v-4.2a7 7 0 0 0-4.5-13.8z"/><path d="M8.8 10.5h1.6l1.1-2.2 1.6 4.4 1.1-2.2h1.6"/></svg>`,
    magnifier:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5 5"/><path d="M8 9.2a3 3 0 0 1 2.6-1.7" stroke-width="1.6"/></svg>`,
    globe:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z"/></svg>`,
};
// Round icon used in the sidebar, callouts and card: glyph on red, or the company logo on white
function hackIconHTML(h, cls = 'mp-hicon') {
    const ic = h.icon || 'trophy';
    if (ic.includes('/')) return `<span class="${cls} logo"><img src="${ic}" alt="" loading="lazy"></span>`;
    return `<span class="${cls}">${HACK_GLYPHS[ic] || PIN_GLYPH}</span>`;
}
const isRemote = h => h.lat == null || h.lng == null;
let globe = null, globeIdleTimer = null, mapsStyle = null, pendingFocus = null, activeLoc = null;

function hackGroups() {
    const groups = {};
    portfolioData.hackathons.filter(h => !isRemote(h)).forEach(h => {
        const k = `${h.lat},${h.lng}`;
        (groups[k] ||= { lat:h.lat, lng:h.lng, place:h.place, city:h.city, items:[] }).items.push(h);
    });
    return Object.values(groups);
}
function remoteGroup() {
    return { remote:true, place:'Remote', city:'Online', items:portfolioData.hackathons.filter(isRemote) };
}

let mapsRouteId = null;
function openMaps(hackId) {
    mapsRouteId = hackId || null;
    if (!appWindows.maps) {
        createAppWindow({
            key:'maps', title:'Maps — Hackathons', cls:'maps-window', dockIcon:imgIcon(SYS_ICONS.maps, 40),
            html:`
            <div class="mp">
                <aside class="mp-side">
                    <div class="as-search mp-search">${AS_ICONS.search}<input type="search" placeholder="Search Hackathons" aria-label="Search hackathons" autocomplete="off" spellcheck="false"></div>
                    <div class="mp-panel"></div>
                </aside>
                <div class="mp-map">
                    <div class="mp-globe"></div>
                    <div class="mp-loading"><div class="mp-spinner"></div>Loading globe…</div>
                    <div class="mp-seg" role="tablist">
                        <button data-style="satellite">Satellite</button><button data-style="night">Night</button>
                    </div>
                    <button class="mp-remote" aria-label="Show remote hackathons">${HACK_GLYPHS.globe}<span>Remote</span><b>${portfolioData.hackathons.filter(isRemote).length}</b></button>
                    <div class="mp-hint">Drag or scroll to spin</div>
                </div>
            </div>`,
            onShow:() => { globe?.resumeAnimation?.(); },
            onHide:() => { globe?.pauseAnimation?.(); },
        });
        const win = appWindows.maps;
        const input = win.querySelector('.mp-search input');
        input.addEventListener('input', () => renderMapsList(input.value.trim()));
        win.querySelectorAll('.mp-seg button').forEach(b => b.addEventListener('click', () => setMapStyle(b.dataset.style)));
        win.querySelector('.mp-remote').addEventListener('click', () => { closeCallouts(); renderMapsList('', remoteGroup()); });
        win.querySelector('.mp-globe').addEventListener('pointerdown', () => closeCallouts());
        renderMapsList('');
        showAppWindow('maps');
        initGlobe();
    } else {
        showAppWindow('maps');
    }
    if (hackId) openHackCard(hackId);
    addRecent('Hackathons', 'hackathons-icon', 'folder', 'hackathons');
}

function loadScriptOnce(src) {
    return new Promise((res, rej) => {
        if (document.querySelector(`script[src="${src}"]`)) { window.Globe ? res() : document.querySelector(`script[src="${src}"]`).addEventListener('load', res); return; }
        const s = document.createElement('script'); s.src = src; s.async = true; s.onload = res; s.onerror = rej;
        document.head.appendChild(s);
    });
}

function initGlobe() {
    const win = appWindows.maps;
    const mapEl = win.querySelector('.mp-map'), host = win.querySelector('.mp-globe'), loading = win.querySelector('.mp-loading');
    loadScriptOnce(GLOBE_SRC).then(() => {
        globe = Globe()(host)
            .backgroundImageUrl('assets/maps/night-sky.png')
            .bumpImageUrl('assets/maps/earth-topology.png')
            .showAtmosphere(true).atmosphereColor('#8ec5ff').atmosphereAltitude(0.17)
            .htmlElementsData(hackGroups())
            .htmlLat('lat').htmlLng('lng').htmlAltitude(0.012)
            .htmlElement(makePin);
        if (typeof globe.htmlTransitionDuration === 'function') globe.htmlTransitionDuration(0);
        if (typeof globe.htmlElementVisibilityModifier === 'function') {
            globe.htmlElementVisibilityModifier((el, visible) => { el.classList.toggle('mp-pin-hidden', !visible); });
        }
        setMapStyle('satellite');

        const ctr = globe.controls();
        ctr.enableZoom = false;   // spin only, no zoom
        ctr.enablePan = false;
        ctr.autoRotate = true; ctr.autoRotateSpeed = 0.35;
        ctr.rotateSpeed = 0.6;
        globe.pointOfView({ lat:22, lng:20, altitude:2.35 });

        const pauseSpin = () => {
            ctr.autoRotate = false;
            clearTimeout(globeIdleTimer);
            globeIdleTimer = setTimeout(() => { ctr.autoRotate = true; }, 9000);
        };
        host.addEventListener('pointerdown', pauseSpin);
        // Scroll spins the globe instead of zooming
        mapEl.addEventListener('wheel', e => {
            e.preventDefault(); pauseSpin();
            const p = globe.pointOfView();
            const d = (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY);
            globe.pointOfView({ lat:p.lat, lng:p.lng + d * 0.12, altitude:p.altitude });
        }, { passive:false });

        const fit = () => { if (!globe) return; globe.width(host.clientWidth).height(host.clientHeight); };
        new ResizeObserver(fit).observe(host);
        fit();
        globe._pauseSpin = pauseSpin;
        loading.classList.add('done');
        if (pendingFocus) { focusGlobe(...pendingFocus); pendingFocus = null; }
    }).catch(err => {
        console.error('Globe failed to load:', err);
        loading.innerHTML = 'Couldn’t load the globe. Check your connection — the list on the left still works.';
    });
}
function setMapStyle(style) {
    mapsStyle = style;
    appWindows.maps?.querySelectorAll('.mp-seg button').forEach(b => b.classList.toggle('active', b.dataset.style === style));
    globe?.globeImageUrl(MAP_TEXTURES[style]);
}
// Pins at the same spot become one pin with a count; clicking it opens an
// Apple Maps-style callout on the map listing each event, so none are hidden.
function makePin(g) {
    const el = document.createElement('div');
    el.className = 'mp-pin';
    el.dataset.loc = `${g.lat},${g.lng}`;
    if (el.dataset.loc === activeLoc) el.classList.add('active');
    el.style.setProperty('--pin', PIN_COLOR);
    const multi = g.items.length > 1;
    const head = multi ? `<span class="mp-pin-num">${g.items.length}</span>` : (HACK_GLYPHS[g.items[0].icon] || PIN_GLYPH);
    el.innerHTML = `<div class="mp-pin-inner">
        ${multi ? `<div class="mp-callout" role="menu">
            <div class="mp-callout-head">${escHtml(g.place)}<span>${g.items.length} hackathons</span></div>
            ${g.items.map(h => `<button class="mp-callout-item" role="menuitem" data-hack="${h.id}">${hackIconHTML(h)}<span><b>${escHtml(h.name)}</b><small>${escHtml(h.award)} · ${escHtml(h.date)}</small></span></button>`).join('')}
        </div>` : ''}
        <div class="mp-pin-head${multi ? ' multi' : ''}">${head}</div>
        <div class="mp-pin-label">${escHtml(multi ? g.city.split(',')[0] : g.items[0].name)}</div></div>`;
    el.addEventListener('pointerdown', e => e.stopPropagation());
    el.addEventListener('wheel', e => e.stopPropagation(), { passive:true });
    el.querySelectorAll('.mp-callout-item').forEach(b => b.addEventListener('click', e => {
        e.stopPropagation(); openHackCard(b.dataset.hack);
    }));
    el.querySelector('.mp-pin-head').addEventListener('click', e => {
        e.stopPropagation();
        if (!multi) { closeCallouts(); openHackCard(g.items[0].id); return; }
        const open = !el.classList.contains('callout-open');
        closeCallouts();
        el.classList.toggle('callout-open', open);
        if (open) renderMapsList('', g);
    });
    return el;
}
function closeCallouts(except) {
    document.querySelectorAll('.mp-pin.callout-open').forEach(p => { if (p !== except) p.classList.remove('callout-open'); });
}
function focusGlobe(lat, lng) {
    markActivePin(lat, lng);
    if (lat == null) return;
    if (!globe) { pendingFocus = [lat, lng]; return; }
    globe._pauseSpin?.();
    globe.pointOfView({ lat, lng, altitude:globe.pointOfView().altitude }, 1100);
}

function markActivePin(lat, lng) {
    activeLoc = lat == null ? null : `${lat},${lng}`;
    document.querySelectorAll('.mp-pin').forEach(p => p.classList.toggle('active', p.dataset.loc === activeLoc));
}

function renderMapsList(query, group) {
    const win = appWindows.maps;
    const panel = win.querySelector('.mp-panel');
    let items = group ? group.items : portfolioData.hackathons;
    if (query) {
        const q = query.toLowerCase();
        items = items.filter(h => [h.name, h.award, h.project, h.city, h.place, h.issuer, h.date, h.track].join(' ').toLowerCase().includes(q));
    }
    const all = portfolioData.hackathons;
    const podium = all.filter(h => h.rank <= 2).length;
    panel.innerHTML = `
        ${group ? `<button class="mp-back">${AS_ICONS.back}<span>All Hackathons</span></button>` : ''}
        <div class="mp-list-head">
            <h2>${group ? escHtml(group.place) : 'Hackathons'}</h2>
            <span>${group ? `${escHtml(group.city)} · ${group.items.length} hackathons` : `${all.length} hackathons · ${podium} podium finishes`}</span>
        </div>
        <div class="mp-list">${items.map(h => `
            <button class="mp-item" data-hack="${h.id}">
                ${hackIconHTML(h)}
                <span class="mp-item-text"><b>${escHtml(h.name)}</b><span>${escHtml(h.award)} · ${escHtml(h.date)}</span><span class="mp-item-loc">${isRemote(h) ? 'Remote' : escHtml(h.city)}</span></span>
            </button>`).join('') || '<div class="as-empty">No matches.</div>'}
        </div>`;
    panel.querySelector('.mp-back')?.addEventListener('click', () => { closeCallouts(); renderMapsList(''); });
    panel.querySelectorAll('[data-hack]').forEach(b => b.addEventListener('click', () => openHackCard(b.dataset.hack)));
    panel.scrollTop = 0;
    win.querySelector('.mp-remote')?.classList.toggle('active', !!group?.remote);
    if (group && !group.remote) focusGlobe(group.lat, group.lng); else markActivePin();
    if (win.style.display !== 'none') { if (!group) mapsRouteId = null; setRoute('hackathons'); }
}

function openHackCard(id) {
    const h = portfolioData.hackathons.find(x => x.id === id);
    if (!h || !appWindows.maps) return;
    const win = appWindows.maps;
    const panel = win.querySelector('.mp-panel');
    const proj = h.projectId && portfolioData.projects.find(p => p.id === h.projectId);
    const remote = isRemote(h);
    const rows = [
        ['Project', h.project], ['Track', h.track], ['Date', h.date], ['Issued by', h.issuer],
        ['Associated with', h.assoc], ['Location', remote ? 'Remote (online)' : `${h.place} · ${h.city}`],
    ].filter(([, v]) => v);
    const banner = h.banner
        ? `<div class="mp-photo${h.bannerFit === 'contain' ? ' logo' : ''}" style="background-image:url('${h.banner}')"></div>`
        : `<div class="mp-photo" style="--pin:${PIN_COLOR}"><div class="mp-photo-art">${HACK_GLYPHS[h.icon] || PIN_GLYPH}</div></div>`;
    panel.innerHTML = `
        <button class="mp-back">${AS_ICONS.back}<span>All Hackathons</span></button>
        <div class="mp-card">
            ${banner}
            <div class="mp-card-title">${hackIconHTML(h, 'mp-hicon big')}<div><h2 class="mp-title">${escHtml(h.name)}</h2>
            <div class="mp-subtitle">Hackathon · ${remote ? 'Remote' : escHtml(h.city)}</div></div></div>
            <div class="mp-actions">
                <div class="mp-award">${PIN_GLYPH}<span>${escHtml(h.award)}</span></div>
                ${proj ? `<button class="mp-btn primary" data-project="${proj.id}">View Project</button>` : ''}
                ${h.link ? `<a class="mp-btn${proj ? '' : ' primary'}" href="${h.link}" target="_blank" rel="noopener">${escHtml(h.linkLabel || 'Open')}</a>` : ''}
                <button class="mp-btn mp-share" data-share="hackathons/${h.id}" aria-label="Copy link to ${escHtml(h.name)}" title="Copy link">${SHARE_ICON}</button>
            </div>
            <div class="mp-section">
                ${rows.map(([k, v]) => `<div class="mp-row"><span>${k}</span><b>${escHtml(v)}</b></div>`).join('')}
            </div>
            ${h.event ? `<div class="mp-section"><h3>About the Event</h3><p>${escHtml(h.event)}</p></div>` : ''}
            ${h.about ? `<div class="mp-section"><h3>${h.event ? 'About the Project' : 'About'}</h3>${h.about.split(/\n\n+/).map(t => `<p>${escHtml(t)}</p>`).join('')}</div>` : ''}
            ${h.tech?.length ? `<div class="mp-section"><h3>Built With</h3><div class="mp-tech">${h.tech.map(t => `<span class="mp-chip">${techIconHTML(t)}${escHtml(t)}</span>`).join('')}</div></div>` : ''}
        </div>`;
    panel.querySelector('.mp-back').addEventListener('click', () => { closeCallouts(); renderMapsList(''); });
    panel.querySelector('[data-project]')?.addEventListener('click', e => openProjectApp(e.currentTarget.dataset.project));
    panel.querySelector('[data-share]')?.addEventListener('click', e => copyShareLink(e.currentTarget.dataset.share, e.currentTarget));
    mapsRouteId = id;
    setRoute('hackathons/' + id);
    panel.scrollTop = 0;
    win.querySelector('.mp-remote')?.classList.toggle('active', remote);
    if (remote) { closeCallouts(); markActivePin(); }
    else focusGlobe(h.lat, h.lng);
}

// ═════════════════════════════════════════════════
// RESEARCH — Finder window (sidebar + grid) + Preview viewer
// ═════════════════════════════════════════════════
const FD_SIDE_ICONS = {
    recents:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>`,
    applications:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4.5 6 19.5M12 4.5l6 15M8.4 14h7.2"/><path d="M4 19.5h4M16 19.5h4"/></svg>`,
    desktop:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><rect x="3" y="4.5" width="18" height="12" rx="2"/><path d="M9 20h6M12 16.5V20"/></svg>`,
    home:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><path d="M4 11 12 4.5 20 11"/><path d="M6 9.5V19.5h4.5v-5h3v5H18V9.5"/></svg>`,
    research:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3.5 7.5a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/></svg>`,
    trash:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 6.5h15M9.5 6.5V4.5h5v2M6.5 6.5l1 13h9l1-13M10 10v6.5M14 10v6.5"/></svg>`,
    fwd:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>`,
};
const FD_PLACES = [
    { group:'Favorites', items:[
        { id:'recents', label:'Recents' }, { id:'applications', label:'Applications' }, { id:'desktop', label:'Desktop' },
        { id:'home', label:'swetha' }, { id:'research', label:'Research' } ] },
    { group:'Locations', items:[ { id:'trash', label:'Trash' } ] },
];
const fdState = { place:'research', back:[], fwd:[] };

// Each Finder location → list of { name, sub, icon(html), thumb?, open() }
function fdItems(place) {
    const pdf = 'assets/app_icons/pdf.png';
    const everything = [
        { name:'Resume',     sub:'PDF Document', icon:imgIcon(pdf, 64), open:() => document.getElementById('resume-icon')?.click() },
        { name:'Research',   icon:FOLDER_ICON(64), open:() => fdGo('research') },
        { name:'Projects',   icon:imgIcon(SYS_ICONS.appstore, 64), open:() => openAppStore() },
        { name:'Hackathons', icon:imgIcon(SYS_ICONS.maps, 64), open:() => openMaps() },
        { name:'Experience', icon:imgIcon(SYS_ICONS.activity, 64), open:() => openActivityMonitor() },
        { name:'Contact',    icon:imgIcon(SYS_ICONS.mail, 64), open:() => openContact() },
    ];
    const desktop = everything.slice(0, 2);
    switch (place) {
    case 'research':
        return portfolioData.research.map((p, i) => ({ name:p.file, thumb:p.thumb, status:p.status, sub:`${p.company} · ${p.date}`, title:p.title, open:() => openPaper(i) }));
    case 'desktop': return desktop;
    case 'applications': return [
        { name:'Activity Monitor', icon:imgIcon(SYS_ICONS.activity, 64), open:() => openActivityMonitor() },
        { name:'App Store', icon:imgIcon(SYS_ICONS.appstore, 64), open:() => openAppStore() },
        { name:'Apps',      sub:'Tools', icon:imgIcon(SYS_ICONS.apps, 64), open:() => openLaunchpad() },
        { name:'Mail',      sub:'Contact', icon:imgIcon(SYS_ICONS.mail, 64), open:() => openContact() },
        { name:'Maps',      icon:imgIcon(SYS_ICONS.maps, 64), open:() => openMaps() },
        { name:'Preview',   sub:'Resume', icon:imgIcon(SYS_ICONS.preview, 64), open:() => document.getElementById('resume-icon')?.click() },
        { name:'Terminal',  icon:imgIcon(SYS_ICONS.terminal, 64), open:() => openTerminalWindow() },
    ];
    case 'home': return [
        { name:'Applications', icon:imgIcon('assets/app_icons/ApplicationsFolderIcon.png', 64), open:() => fdGo('applications') },
        { name:'Desktop',      icon:imgIcon('assets/app_icons/DesktopFolderIcon.png', 64), open:() => fdGo('desktop') },
        { name:'Research',     icon:FOLDER_ICON(64), open:() => fdGo('research') },
        { name:'Resume',       sub:'PDF Document', icon:imgIcon(pdf, 64), open:() => document.getElementById('resume-icon')?.click() },
    ];
    case 'recents': {
        const map = { 'professional-icon':'Experience', 'projects-icon':'Projects', 'research-icon':'Research', 'hackathons-icon':'Hackathons', 'contact-icon':'Contact', 'resume-icon':'Resume' };
        return (typeof recentItems !== 'undefined' ? recentItems : [])
            .map(r => everything.find(d => d.name === (map[r.iconId] || r.label)))
            .filter(Boolean);
    }
    case 'trash':
        return (typeof trashItems !== 'undefined' ? trashItems : []).map(t => ({
            name:t.title, sub:t.sub, icon:t.iconType === 'pdf' ? imgIcon(pdf, 64) : FOLDER_ICON(64),
            open:() => showMacAlert(appWindows.research, { icon:'assets/app_icons/trash-full.png', title:`“${t.title}” is in the Trash.`, text:'To use this item, drag it out of the Trash first.', buttons:[{ label:'OK', primary:true }] }),
        }));
    }
    return [];
}
function fdLabel(place) { return FD_PLACES.flatMap(g => g.items).find(p => p.id === place)?.label || ''; }

function openResearchFinder(place = 'research') {
    if (!appWindows.research) {
        const win = createAppWindow({
            key:'research', title:'Research', cls:'finder-window', dockIcon:imgIcon(SYS_ICONS.finder, 40),
            html:`
            <div class="fd">
                <aside class="fd-side">${FD_PLACES.map(g => `
                    <div class="fd-side-group"><h4>${g.group}</h4>${g.items.map(it => `
                        <button class="fd-side-item" data-place="${it.id}">${FD_SIDE_ICONS[it.id]}<span>${it.label}</span></button>`).join('')}
                    </div>`).join('')}
                </aside>
                <main class="fd-main">
                    <div class="fd-toolbar">
                        <div class="fd-nav"><button class="fd-nav-btn" data-nav="back" aria-label="Back">${AS_ICONS.back}</button><button class="fd-nav-btn" data-nav="fwd" aria-label="Forward">${FD_SIDE_ICONS.fwd}</button></div>
                        <div class="fd-title"></div>
                    </div>
                    <div class="fd-grid"></div>
                    <div class="fd-bar"><span class="fd-count"></span><span class="fd-hint"></span></div>
                </main>
            </div>`
        });
        // Hide the regular centred title — Finder shows the folder name in its toolbar instead
        win.classList.add('fd-has-toolbar');
        win.querySelectorAll('.fd-side-item').forEach(b => b.addEventListener('click', () => fdGo(b.dataset.place)));
        win.querySelector('[data-nav="back"]').addEventListener('click', () => {
            if (!fdState.back.length) return; fdState.fwd.push(fdState.place); fdState.place = fdState.back.pop(); renderFinder();
        });
        win.querySelector('[data-nav="fwd"]').addEventListener('click', () => {
            if (!fdState.fwd.length) return; fdState.back.push(fdState.place); fdState.place = fdState.fwd.pop(); renderFinder();
        });
    }
    fdState.place = place; fdState.back = []; fdState.fwd = [];
    renderFinder();
    showAppWindow('research');
    if (place === 'research') addRecent('Research', 'research-icon', 'folder', 'research');
}
function fdGo(place) {
    if (place === fdState.place) return;
    fdState.back.push(fdState.place); fdState.fwd = []; fdState.place = place;
    renderFinder();
}
function renderFinder() {
    const win = appWindows.research; if (!win) return;
    const items = fdItems(fdState.place);
    const label = fdLabel(fdState.place);
    win.querySelector('.window-title').textContent = label;
    win.querySelector('.fd-title').textContent = label;
    win.querySelectorAll('.fd-side-item').forEach(b => b.classList.toggle('active', b.dataset.place === fdState.place));
    win.querySelector('[data-nav="back"]').disabled = !fdState.back.length;
    win.querySelector('[data-nav="fwd"]').disabled = !fdState.fwd.length;
    win.querySelector('.fd-count').textContent = `${items.length} item${items.length === 1 ? '' : 's'}`;
    win.querySelector('.fd-hint').textContent = fdState.place === 'research' ? 'Click a paper to open it in Preview' : '';
    const grid = win.querySelector('.fd-grid');
    grid.innerHTML = items.length ? items.map((it, i) => `
        <button class="fd-file" data-i="${i}" title="${escHtml(it.title || it.name)}">
            ${it.thumb ? `<span class="fd-thumb"><img src="${it.thumb}" alt="" loading="lazy"></span>` : `<span class="fd-icon">${it.icon}</span>`}
            <span class="fd-name">${escHtml(it.name)}</span>
            ${it.sub ? `<span class="fd-meta">${it.status ? `<i class="fd-dot ${it.status === 'Published' ? 'pub' : it.status === 'Ongoing' ? 'wip' : 'rev'}"></i>` : ''}${escHtml(it.sub)}</span>` : ''}
        </button>`).join('')
        : `<div class="fd-empty">${fdState.place === 'recents' ? 'No recent items yet — open something from the desktop.' : 'This folder is empty.'}</div>`;
    grid.querySelectorAll('.fd-file').forEach(b => b.addEventListener('click', () => items[+b.dataset.i].open()));
    grid.scrollTop = 0;
}

function openPaper(i) {
    const p = portfolioData.research[i];
    if (!p) return;
    // Phone browsers can't render a PDF inside an iframe — open it directly
    if (window.matchMedia('(max-width:768px)').matches) { window.open(p.pdf, '_blank'); return; }
    const key = 'paper-' + i;
    if (!appWindows[key]) {
        createAppWindow({
            key, title:`${p.file} — Preview`, cls:'preview-window', dockIcon:imgIcon(SYS_ICONS.preview, 40),
            html:`<iframe class="pdf-iframe" src="${p.pdf}#toolbar=0&navpanes=0&view=FitH" title="${escHtml(p.title)}"></iframe>`
        });
    }
    showAppWindow(key);
}

// ═════════════════════════════════════════════════
// NOTIFICATIONS — macOS-style banners, top right
// ═════════════════════════════════════════════════
function initNotifications() {
    const stack = document.createElement('div');
    stack.className = 'notif-stack';
    stack.setAttribute('aria-live', 'polite');
    document.body.appendChild(stack);
    let seen = false;
    try { seen = sessionStorage.getItem('portfolio-notified') === '1'; sessionStorage.setItem('portfolio-notified', '1'); } catch (e) {}
    if (seen) return;
    (typeof notificationsData !== 'undefined' ? notificationsData : []).forEach(n => setTimeout(() => showNotification(n), n.delay || 0));
}
function showNotification(n) {
    const stack = document.querySelector('.notif-stack'); if (!stack) return;
    const el = document.createElement('div');
    el.className = 'notif';
    el.setAttribute('role', 'status');
    el.innerHTML = `
        <button class="notif-close" aria-label="Dismiss">×</button>
        <img class="notif-icon" src="${n.icon}" alt="${escHtml(n.app)}">
        <div class="notif-body">
            <div class="notif-head"><b>${escHtml(n.title)}</b><span>now</span></div>
            <div class="notif-text">${escHtml(n.body)}</div>
        </div>`;
    let timer;
    const dismiss = () => { clearTimeout(timer); el.classList.add('out'); setTimeout(() => el.remove(), 380); };
    const arm = () => { timer = setTimeout(dismiss, 9000); };
    el.addEventListener('mouseenter', () => clearTimeout(timer));
    el.addEventListener('mouseleave', arm);
    el.querySelector('.notif-close').addEventListener('click', e => { e.stopPropagation(); dismiss(); });
    el.addEventListener('click', () => {
        dismiss();
        const a = n.action || {};
        if (a.type === 'project') openProjectApp(a.id);
        else if (a.type === 'maps') openMaps(a.id);
        else if (a.type === 'link' && a.url) window.open(a.url, '_blank', 'noopener');
    });
    stack.prepend(el);
    arm();
}

// ─────────────────────────────────────────────────
// SPOTLIGHT — index every project, paper and hackathon
// ─────────────────────────────────────────────────
function extendSpotlight() {
    portfolioData.projects.forEach(p => spotlightIndex.push({ title:p.name, sub:`${p.subtitle} · ${p.tech.slice(0, 4).join(', ')}`, action:'Open', type:'app', id:p.id, iconType:'img:' + p.icon }));
    portfolioData.research.forEach((p, i) => spotlightIndex.push({ title:p.file, sub:p.title, action:'Open', type:'paper', idx:i, iconType:'img:' + SYS_ICONS.preview }));
    portfolioData.hackathons.forEach(h => spotlightIndex.push({ title:h.name, sub:[h.award, h.project, h.date].filter(Boolean).join(' · '), action:'Show', type:'hack', id:h.id, iconType:'img:' + SYS_ICONS.maps }));
}

// ═════════════════════════════════════════════════
// MAC ALERT — macOS-style alert sheet inside a window (or the page)
// ═════════════════════════════════════════════════
function showMacAlert(win, { icon, title, text, buttons = [{ label:'OK', primary:true }] }) {
    const host = win || document.body;
    host.querySelector(':scope > .mac-alert-wrap')?.remove();
    const wrap = document.createElement('div');
    wrap.className = 'mac-alert-wrap' + (win ? '' : ' fixed');
    const id = 'mac-alert-' + Math.random().toString(36).slice(2, 7);
    wrap.innerHTML = `
        <div class="mac-alert" role="alertdialog" aria-modal="true" aria-labelledby="${id}">
            ${icon ? `<img class="mac-alert-icon" src="${icon}" alt="">` : ''}
            <div class="mac-alert-title" id="${id}">${escHtml(title)}</div>
            ${text ? `<div class="mac-alert-text">${escHtml(text)}</div>` : ''}
            <div class="mac-alert-btns${buttons.length > 1 ? ' two' : ''}">${buttons.map((b, i) =>
                `<button class="mac-alert-btn${b.primary ? ' primary' : ''}" data-i="${i}">${escHtml(b.label)}</button>`).join('')}</div>
        </div>`;
    host.appendChild(wrap);
    const close = () => { document.removeEventListener('keydown', onKey, true); wrap.classList.add('out'); setTimeout(() => wrap.remove(), 180); };
    const run = i => { close(); buttons[i]?.action?.(); };
    function onKey(e) {
        if (e.key === 'Escape') { e.stopPropagation(); close(); }
        if (e.key === 'Enter') { e.preventDefault(); run(Math.max(0, buttons.findIndex(b => b.primary))); }
    }
    document.addEventListener('keydown', onKey, true);
    wrap.querySelectorAll('.mac-alert-btn').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); run(+b.dataset.i); }));
    wrap.addEventListener('mousedown', e => e.stopPropagation());
    setTimeout(() => (wrap.querySelector('.mac-alert-btn.primary') || wrap.querySelector('.mac-alert-btn'))?.focus(), 30);
    return close;
}

// ═════════════════════════════════════════════════
// ACTIVITY MONITOR — Experience as "Professional Processes"
// ═════════════════════════════════════════════════
const AM_GLYPHS = {
    stop:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M8.3 3.5h7.4l4.8 4.8v7.4l-4.8 4.8H8.3l-4.8-4.8V8.3z"/><path d="m9.5 9.5 5 5m0-5-5 5"/></svg>`,
    info:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5"/><circle cx="12" cy="7.8" r=".6" fill="currentColor"/></svg>`,
    close:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="m7 7 10 10M17 7 7 17"/></svg>`,
};
const AM_OPEN = {
    open:true, pid:1, proc:'Open to Opportunities', org:'Your team?', dur:'Now → May 2027', category:'Job Search',
    description:'Actively looking for new grad 2027 roles in software engineering or applied ML. Graduating with an MS in Computer Science from NC State University in May 2027, and happy to talk about full-time roles that span models, pipelines and the systems around them.',
    tech:['Software Engineering','Applied ML','New Grad 2027'],
};
const AM_MON = { Jan:0, Feb:1, Mar:2, Apr:3, May:4, Jun:5, Jul:6, Aug:7, Sep:8, Oct:9, Nov:10, Dec:11 };
function amRange(date) {
    const [a, b] = date.split(/[–-]/).map(x => x.trim());
    const p = x => { const [m, y] = x.split(/\s+/); return +y * 12 + AM_MON[m.slice(0, 3)]; };
    const now = new Date(), cur = now.getFullYear() * 12 + now.getMonth();
    return [p(a), /present/i.test(b || '') ? cur : p(b)];
}
const amState = { tab:'All', query:'', sort:'pid', dir:1, sel:null };
function amProcs() {
    return portfolioData.professional.map((e, i) => ({ ...e, pid:4012 + i * 271, range:amRange(e.date) }));
}

function openActivityMonitor() {
    if (!appWindows.activity) {
        const tabs = ['All', 'Research', 'Teaching', 'Industry'];
        const win = createAppWindow({
            key:'activity', title:'Activity Monitor', cls:'am-window', dockIcon:imgIcon(SYS_ICONS.activity, 40),
            html:`
            <div class="am">
                <div class="am-toolbar">
                    <div class="am-heading"><b>Activity Monitor</b><span>Professional Processes</span></div>
                    <div class="am-tools">
                        <button class="am-tool" data-act="stop" title="Quit process" aria-label="Quit process">${AM_GLYPHS.stop}</button>
                        <button class="am-tool" data-act="info" title="Inspect process" aria-label="Inspect process">${AM_GLYPHS.info}</button>
                    </div>
                    <div class="am-tabs" role="tablist">${tabs.map(t => `<button class="am-tab" role="tab" data-tab="${t}">${t}</button>`).join('')}</div>
                    <label class="am-search">${AS_ICONS.search}<input type="search" placeholder="Search" aria-label="Search processes" autocomplete="off" spellcheck="false"></label>
                </div>
                <div class="am-table-wrap">
                    <table class="am-table">
                        <thead><tr>
                            <th data-sort="proc">Process Name</th><th data-sort="org">Organization</th><th data-sort="dur">Duration</th>
                            <th data-sort="category">Category</th><th data-sort="pid" class="num">PID</th>
                        </tr></thead>
                        <tbody></tbody>
                    </table>
                </div>
                <div class="am-bottom"></div>
                <aside class="am-inspector" hidden></aside>
            </div>`
        });
        win.querySelectorAll('.am-tab').forEach(b => b.addEventListener('click', () => { amState.tab = b.dataset.tab; renderActivity(); }));
        win.querySelector('.am-search input').addEventListener('input', e => { amState.query = e.target.value.trim().toLowerCase(); renderActivity(); });
        win.querySelectorAll('th[data-sort]').forEach(th => th.addEventListener('click', () => {
            const k = th.dataset.sort;
            amState.dir = amState.sort === k ? -amState.dir : 1; amState.sort = k; renderActivity();
        }));
        win.querySelector('[data-act="info"]').addEventListener('click', () => { if (amState.sel != null) amInspect(amState.sel); });
        win.querySelector('[data-act="stop"]').addEventListener('click', () => { if (amState.sel != null) amQuit(amState.sel); });
        renderActivityBottom();
    }
    renderActivity();
    showAppWindow('activity');
    addRecent('Experience', 'professional-icon', 'folder', 'professional');
}

function amFind(pid) { return pid === 1 ? AM_OPEN : amProcs().find(p => p.pid === pid); }

function renderActivity() {
    const win = appWindows.activity; if (!win) return;
    win.querySelectorAll('.am-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === amState.tab));
    win.querySelectorAll('th[data-sort]').forEach(th => {
        th.classList.toggle('sorted', th.dataset.sort === amState.sort);
        th.dataset.dir = th.dataset.sort === amState.sort ? (amState.dir > 0 ? 'asc' : 'desc') : '';
    });
    const q = amState.query;
    let rows = amProcs().filter(p => (amState.tab === 'All' || p.category === amState.tab) &&
        (!q || [p.proc, p.org, p.title, p.company, p.category, p.description, ...p.tech].join(' ').toLowerCase().includes(q)));
    const key = amState.sort, dir = amState.dir;
    rows.sort((a, b) => key === 'pid' ? (a.pid - b.pid) * dir
        : key === 'dur' ? (b.range[0] - a.range[0]) * dir
        : String(a[key]).localeCompare(String(b[key])) * dir);
    const showOpen = amState.tab === 'All' && (!q || 'open to opportunities job search new grad hiring'.includes(q) || AM_OPEN.description.toLowerCase().includes(q));
    if (showOpen) rows = [AM_OPEN, ...rows];
    const tbody = win.querySelector('.am-table tbody');
    tbody.innerHTML = rows.length ? rows.map(p => `
        <tr data-pid="${p.pid}" class="${p.open ? 'am-open' : ''}${amState.sel === p.pid ? ' sel' : ''}" tabindex="0">
            <td class="am-proc">${p.open ? '<i class="am-light"></i>' : ''}<span class="am-pname"><b>${escHtml(p.proc)}</b><small>${escHtml(p.org)} · ${escHtml(p.dur)}</small></span></td>
            <td>${escHtml(p.org)}</td><td>${escHtml(p.dur)}</td>
            <td>${escHtml(p.category)}</td>
            <td class="num">${p.pid}</td>
        </tr>`).join('')
        : `<tr class="am-none"><td colspan="5">No processes match “${escHtml(amState.query)}”.</td></tr>`;
    tbody.querySelectorAll('tr[data-pid]').forEach(tr => {
        const pick = () => { amState.sel = +tr.dataset.pid; tbody.querySelectorAll('tr.sel').forEach(r => r.classList.remove('sel')); tr.classList.add('sel'); amToolState(); amInspect(amState.sel); };
        tr.addEventListener('click', pick);
        tr.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } });
    });
    amToolState();
}
function amToolState() {
    const win = appWindows.activity; if (!win) return;
    win.querySelectorAll('.am-tool').forEach(b => b.disabled = amState.sel == null);
}

function amInspect(pid) {
    const win = appWindows.activity; const p = amFind(pid); if (!win || !p) return;
    const panel = win.querySelector('.am-inspector');
    const status = p.open ? '<span class="am-run"><i class="am-light"></i>Running</span>' : 'Exited · completed normally';
    const rows = p.open
        ? [['Status', status], ['Role', 'New grad · SWE / Applied ML'], ['Available', 'From May 2027'], ['Parent process', 'MS Computer Science, NC State']]
        : [['Status', status], ['Organization', escHtml(p.company)], ['Duration', escHtml(p.date)], ['Category', escHtml(p.category)], ['PID', p.pid]];
    panel.innerHTML = `
        <div class="am-insp-head">
            <div><b>${escHtml(p.open ? p.proc : p.title)}</b><span>${escHtml(p.open ? 'Swetha Manivasagam' : p.org)}</span></div>
            <button class="am-insp-close" aria-label="Close inspector">${AM_GLYPHS.close}</button>
        </div>
        <div class="am-insp-body">
            <div class="am-insp-rows">${rows.map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('')}</div>
            <h4>${p.open ? 'About' : 'What I did'}</h4>
            <p>${escHtml(p.description)}</p>
            <h4>${p.open ? 'Looking for' : 'Stack'}</h4>
            <div class="am-stack">${p.tech.map(t => `<span class="mp-chip">${p.open ? '' : techIconHTML(t)}${escHtml(t)}</span>`).join('')}</div>
        </div>
        <div class="am-insp-foot">
            ${p.open ? `<button class="mp-btn" data-go="resume">Resume</button><button class="mp-btn primary" data-go="contact">Get in Touch</button>`
                     : `<button class="mp-btn" data-go="quit">Quit</button><button class="mp-btn primary" data-go="close">Done</button>`}
        </div>`;
    panel.hidden = false;
    panel.querySelector('.am-insp-close').addEventListener('click', () => { panel.hidden = true; });
    panel.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () => {
        const go = b.dataset.go;
        if (go === 'close') panel.hidden = true;
        else if (go === 'quit') amQuit(pid);
        else if (go === 'contact') openContact();
        else if (go === 'resume') document.getElementById('resume-icon')?.click();
    }));
}

function amQuit(pid) {
    const win = appWindows.activity; const p = amFind(pid); if (!win || !p) return;
    if (p.open) {
        showMacAlert(win, {
            icon:SYS_ICONS.activity, title:'“Open to Opportunities” can’t be quit.',
            text:'This process keeps running until it lands a new grad role. Graduating May 2027.',
            buttons:[{ label:'Get in Touch', action:openContact }, { label:'OK', primary:true }],
        });
    } else {
        const end = p.date.split(/[–-]/).pop().trim();
        showMacAlert(win, {
            icon:SYS_ICONS.activity, title:`“${p.proc}” has already exited.`,
            text:`This role at ${p.org} ended in ${end} and finished with exit code 0.`,
            buttons:[{ label:'OK', primary:true }],
        });
    }
}

// Bottom pane: uptime (first role → today) and availability
function renderActivityBottom() {
    const win = appWindows.activity; if (!win) return;
    const start = Math.min(...amProcs().map(p => p.range[0]));
    const now = new Date(), end = now.getFullYear() * 12 + now.getMonth();
    const uptime = ((end - start + 1) / 12).toFixed(1);
    win.querySelector('.am-bottom').innerHTML = `
        <div class="am-stat"><span>Uptime</span><b>${uptime} yrs</b></div>
        <div class="am-stat"><span>Status</span><b class="am-run"><i class="am-light"></i>Open to work</b></div>`;
}


// ═════════════════════════════════════════════════
// DOCK — running-app dots
// ═════════════════════════════════════════════════
function updateDockDots() {
    const open = el => !!el && el.style.display !== 'none' && document.body.contains(el);
    const state = {
        projects:open(appWindows.appstore), hackathons:open(appWindows.maps), experience:open(appWindows.activity),
        mail:open(document.getElementById('contact-window')), terminal:open(document.getElementById('terminal-window')), tools:document.getElementById('launchpad')?.classList.contains('open'),
    };
    Object.entries(state).forEach(([app, on]) => {
        const item = document.querySelector(`.dock-item[data-app="${app}"]`); if (!item) return;
        let dot = item.querySelector('.dock-dot');
        if (on && !dot) { dot = document.createElement('div'); dot.className = 'dock-dot'; item.appendChild(dot); }
        if (!on && dot) dot.remove();
    });
}
setInterval(updateDockDots, 400);

// ═════════════════════════════════════════════════
// SHAREABLE LINKS — #projects/causalci, #hackathons/scb, #experience, #research/<paper>, #resume, #contact, #tools
// The URL follows whatever is open; Back/Forward reopen the previous view; opening a link restores it.
// ═════════════════════════════════════════════════
let routeLock = false;
const paperSlug = p => p.pdf.split('/').pop().replace(/\.pdf$/, '');
function setRoute(route) {
    if (routeLock) return;
    const base = location.href.split('#')[0];
    const want = route ? base + '#' + route : base;
    if ((location.hash || '') === (route ? '#' + route : '')) return;
    history.pushState(null, '', want);
}
function clearRoute(prefix) {
    if (routeLock) return;
    const cur = location.hash.slice(1);
    if (cur && cur.split('/')[0] === prefix) history.replaceState(null, '', location.href.split('#')[0]);
}
function currentRouteFor(key) {
    if (key === 'appstore') return asState.detail ? 'projects/' + asState.detail : 'projects';
    if (key === 'maps') return mapsRouteId ? 'hackathons/' + mapsRouteId : 'hackathons';
    if (key === 'activity') return 'experience';
    if (key === 'research') return 'research';
    if (key.startsWith('paper-')) { const p = portfolioData.research[+key.slice(6)]; return p ? 'research/' + paperSlug(p) : 'research'; }
    return '';
}
function handleRoute() {
    const [section, id] = decodeURIComponent(location.hash.slice(1)).split('/');
    routeLock = true;
    try {
        if (!section) {
            Object.values(appWindows).forEach(w => { if (w.style.display !== 'none') { w.style.display = 'none'; w._onHide?.(); } });
            ['contact-window', 'pdf-window', 'terminal-window'].forEach(i => { const w = document.getElementById(i); if (w) w.style.display = 'none'; });
            closeLaunchpad();
        }
        else if (section === 'projects') openAppStore(portfolioData.projects.some(p => p.id === id) ? id : undefined);
        else if (section === 'hackathons') { openMaps(); if (id && portfolioData.hackathons.some(h => h.id === id)) openHackCard(id); else if (appWindows.maps) renderMapsList(''); }
        else if (section === 'experience') openActivityMonitor();
        else if (section === 'research') {
            const i = id ? portfolioData.research.findIndex(p => paperSlug(p) === id) : -1;
            if (i >= 0) openPaper(i); else openResearchFinder();
        }
        else if (section === 'resume') document.getElementById('resume-icon')?.click();
        else if (section === 'contact') openContact();
        else if (section === 'tools') openLaunchpad();
        else if (section === 'terminal') openTerminalWindow();
    } finally { routeLock = false; }
}
window.addEventListener('popstate', handleRoute);

// Copy a link to the current view, with a small macOS-style confirmation
function copyShareLink(route, anchor) {
    const url = location.href.split('#')[0] + '#' + route;
    const done = () => {
        const t = document.createElement('div'); t.className = 'share-toast'; t.textContent = 'Link copied';
        (anchor?.closest('.window') || document.body).appendChild(t);
        setTimeout(() => t.classList.add('out'), 1400); setTimeout(() => t.remove(), 1800);
    };
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(url).then(done, () => prompt('Copy this link:', url));
    else prompt('Copy this link:', url);
}
const SHARE_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3.5M7.5 8 12 3.5 16.5 8"/><path d="M8 11H6.5A2.5 2.5 0 0 0 4 13.5v5A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5v-5a2.5 2.5 0 0 0-2.5-2.5H16"/></svg>`;
