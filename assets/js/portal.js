/**
 * Project Tracker Portal Engine
 * UNICOM TIC INCUBATOR - Complete Portfolio Visibility Hub
 */

// Active projects shown on the dashboard (all 6 projects initialized to Week 1)
const DEFAULT_PROJECTS = [
  {
    id: 'camera-module',
    icon: '📸',
    name: 'Camera Module (ONETIX)',
    release: 'Phase 1A MVP',
    leads: 'Nilaxshan / Kirusthiya',
    description: 'Edge vision and camera stream gateway with installer launcher lifecycle, ONETIX retail loss prevention, and RTSP/ONVIF reliability.',
    highlights: 'Connector startup readiness, RTSP/ONVIF reliability, installer launcher lifecycle, camera & zone setup, ONETIX architecture & user journey.',
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '4 Sep 2026',
        status: 'ON TRACK',
        statusClass: 'green',
        manDays: '150 Forecast',
        consumed: '92 Consumed',
        weeklyUrl: 'Incubator Weekly update/WEEKLY PROJECT VISIBILITY CARD.html',
        scopeUrl: 'scope document/ONETIX_Scope_USP.html'
      }
    ]
  },
  {
    id: 'greyhound',
    icon: '📱',
    name: 'Greyhound Customer Mobile App',
    release: 'Phase 1',
    leads: 'Gobithas Kalaimakan',
    description: 'Customer mobile application for racetrack ticketing, turnstile barcode scanning, and live race day updates.',
    highlights: 'QR Scanner, Ticket Management, Live Polling, Mobile UX and account verification.',
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '4 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '35 Allocated',
        consumed: '25 Consumed (71%)',
        weeklyUrl: 'Incubator Weekly update/greyhound_weekly_project_visibility_card.html',
        scopeUrl: 'scope document/Greyhound_CEO_Scope_USP_WeeklyTheme.html'
      }
    ]
  },
  {
    id: 'onexso-hrms',
    icon: '👥',
    name: 'ONEXSO HRMS',
    release: 'Enterprise Release 1',
    leads: 'HRMS Platform Team',
    description: 'Comprehensive human resource management suite with employee directory, multi-tenant security, and leave tracking.',
    highlights: 'Authentication & Security, Leave & Attendance, Multi-tenant management, Shift scheduling.',
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '4 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '150 Days',
        consumed: '59% Complete',
        weeklyUrl: 'Incubator Weekly update/weekly-project-visibility-card-onexso.pr.html',
        scopeUrl: 'scope document/OneXso_CEO_Scope_USP_WeeklyTheme (3).html'
      }
    ]
  },
  {
    id: 'oneverz-epos',
    icon: '🛍️',
    name: 'OneVerz EPOS',
    release: 'Release 1',
    leads: 'Mathusan / Yapes',
    description: 'Retail & hospitality point of sale platform with inventory synchronization, online order fulfillment, and multi-channel checkout.',
    highlights: 'Check out flow, Online order fulfillment, Card payment integration, Flutter app, Product setup & tax management.',
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '4 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '129 Allocated',
        consumed: '111 Consumed',
        weeklyUrl: 'Incubator Weekly update/One Verz Weekly Project Visibility Card 2 - Static.html',
        scopeUrl: 'scope document/Oneverz.html'
      }
    ]
  },
  {
    id: 'ticketing-venue',
    icon: '🎫',
    name: 'Ticketing Venue Setup',
    release: 'Phase 1',
    leads: 'Venue & Ticketing Team',
    description: 'Venue mapping, interactive seat block selection, gate access allocation, and tiered pricing engine.',
    highlights: 'Venue Visual Mapper, Tier Configuration, Gate & Entrance Setup, Seat Block Locking.',
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '4 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '200 Forecast',
        consumed: '75 Consumed (71%)',
        weeklyUrl: 'Incubator Weekly update/ticketing_venue_setup_weekly_visibility_card.html',
        scopeUrl: 'scope document/Venue_Layout_Scope_USP.html'
      }
    ]
  },
  {
    id: 'watercraft',
    icon: '⛵',
    name: 'Watercraft Storage Portal',
    release: 'Full Release',
    leads: 'Watercraft Platform Team',
    description: 'Marina vessel docking and dry storage booking management portal with address lookup and single sign-on.',
    highlights: 'Addressify integration, SSO Login-based redirect, MyBookings management, Multiple rollover.',
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '4 Sep 2026',
        status: 'COMPLETED',
        statusClass: 'blue',
        manDays: '120 Days',
        consumed: '100% Complete',
        weeklyUrl: 'Incubator Weekly update/Watercraft_Visibility_Card_Final_Compact_BlackBackground.html',
        scopeUrl: 'scope document/watercraft.html'
      }
    ]
  }
];

// Purge any old cache keys to guarantee fresh Week 1 display
try {
  [
    'portal_projects_camera_v1',
    'portal_projects_camera_v2',
    'portal_projects_scope_usp_v1',
    'portal_projects_sep1_week1_v1',
    'portal_projects_sep1_week1_v2',
    'portal_projects_v5_week1_exact'
  ].forEach(k => localStorage.removeItem(k));
} catch(e) {}

const STORAGE_KEY = 'portal_projects_v7_updated_cards';
let PROJECTS = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');

if (!PROJECTS || !Array.isArray(PROJECTS) || PROJECTS.length < 6) {
  PROJECTS = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(PROJECTS));
} else {
  // Always enforce Week 1 for the baseline week across all projects
  PROJECTS.forEach(p => {
    if (p.weeks && p.weeks.length > 0) {
      p.weeks[0].weekNumber = 1;
      p.weeks[0].weekLabel = 'Week 1';
      p.weeks[0].weekEnding = '4 Sep 2026';
    }
  });
  DEFAULT_PROJECTS.forEach(def => {
    const p = PROJECTS.find(item => item.id === def.id);
    if (p && p.weeks && p.weeks[0]) {
      p.release = def.release;
      p.leads = def.leads;
      p.weeks[0].weekNumber = 1;
      p.weeks[0].weekLabel = 'Week 1';
      p.weeks[0].status = def.weeks[0].status;
      p.weeks[0].statusClass = def.weeks[0].statusClass;
      p.weeks[0].scopeUrl = def.weeks[0].scopeUrl;
      p.weeks[0].weeklyUrl = def.weeks[0].weeklyUrl;
      p.weeks[0].manDays = def.weeks[0].manDays;
      p.weeks[0].consumed = def.weeks[0].consumed;
      if (!p.icon) p.icon = def.icon;
    }
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(PROJECTS));
}

function saveProjects() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(PROJECTS));
}

let activeProject = null;
let currentTab = 'weekly'; // 'weekly' or 'scope'

// Switch week for a specific project from the card dropdown
function changeProjectWeek(projectId, weekIndex) {
  if (weekIndex === 'upload') {
    openUploadModal(projectId);
    const searchVal = document.getElementById('projectSearch')?.value || '';
    const activeFilter = document.querySelector('.filter-btn.active')?.dataset.status || 'all';
    renderProjects(searchVal, activeFilter);
    return;
  }

  const p = PROJECTS.find(item => item.id === projectId);
  if (!p) return;
  p.selectedWeekIndex = parseInt(weekIndex, 10);
  saveProjects();

  const searchVal = document.getElementById('projectSearch')?.value || '';
  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.status || 'all';
  renderProjects(searchVal, activeFilter);

  showPortalToast(`Switched ${p.name} to ${p.weeks[p.selectedWeekIndex].weekLabel}`, 'info');
}

// Render Project Cards
function renderProjects(filterText = '', filterStatus = 'all') {
  const container = document.getElementById('projectsContainer');
  container.innerHTML = '';

  const filtered = PROJECTS.filter(p => {
    const curWeek = p.weeks[p.selectedWeekIndex || 0] || p.weeks[0];
    const matchesText = p.name.toLowerCase().includes(filterText.toLowerCase()) ||
                        p.description.toLowerCase().includes(filterText.toLowerCase()) ||
                        p.highlights.toLowerCase().includes(filterText.toLowerCase());
    const matchesStatus = (filterStatus === 'all') ||
                          (filterStatus === 'ontrack' && curWeek.status === 'ON TRACK') ||
                          (filterStatus === 'atrisk' && curWeek.status === 'AT RISK') ||
                          (filterStatus === 'completed' && curWeek.status === 'COMPLETED');
    return matchesText && matchesStatus;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:#64748b;">
        <svg style="width:48px;height:48px;margin:0 auto 12px;opacity:0.6;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <p style="font-size:16px; font-weight:700;">No matching projects found</p>
        <p style="font-size:13px; margin-top:4px;">Try refining your search term or filter status.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(p => {
    const activeIndex = p.selectedWeekIndex || 0;
    const curWeek = p.weeks[activeIndex] || p.weeks[0];

    // Build week options
    const weekOptions = p.weeks.map((w, idx) => `
      <option value="${idx}" ${idx === activeIndex ? 'selected' : ''}>Week ${w.weekNumber || 1} (${w.weekEnding})</option>
    `).join('');

    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-card-header">
        <div class="project-title-wrap">
          <h3 style="font-size:18px;">${p.icon || '📁'} ${p.name}</h3>
          <div class="project-meta-sub">${p.release} • ${curWeek.weekEnding} • Week ${curWeek.weekNumber || 1}</div>
        </div>
        <span class="status-tag ${curWeek.statusClass}" style="font-size:12px; padding:6px 14px;">${curWeek.status}</span>
      </div>
      <div class="project-card-body">
        
        <!-- WEEK SWITCHER DROPDOWN -->
        <div class="week-picker-bar" style="margin-bottom:18px;">
          <span class="week-picker-label">
            <svg style="width:14px;height:14px;color:#38bdf8;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Active Reporting Week:
          </span>
          <select class="week-select" onchange="changeProjectWeek('${p.id}', this.value)" title="Choose reporting week">
            ${weekOptions}
          </select>
        </div>

        <div class="metrics-row" style="margin-bottom:18px; padding:12px;">
          <div class="m-item">
            <div class="m-lbl">Total Allocation</div>
            <div class="m-val" style="font-size:15px;">${curWeek.manDays}</div>
          </div>
          <div class="m-item">
            <div class="m-lbl">Consumed To Date</div>
            <div class="m-val" style="font-size:15px; color:#38bdf8;">${curWeek.consumed}</div>
          </div>
          <div class="m-item">
            <div class="m-lbl">Project Leads</div>
            <div class="m-val" style="font-size:12.5px;" title="${p.leads}">${p.leads}</div>
          </div>
        </div>
        <p class="project-desc" style="font-size:13.5px; margin-bottom:14px;">${p.description}</p>
        <div class="key-highlights" style="font-size:12.5px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px; border-radius:8px; margin-bottom:16px;">
          <strong>🎯 Core Deliverables &amp; Scope:</strong> ${p.highlights}
        </div>
      </div>
      <div class="project-card-actions" style="padding:16px 18px;">
        <button class="btn btn-primary" style="padding:9px 16px; font-size:12.5px; background:linear-gradient(135deg, #2563eb, #1d4ed8);" onclick="openProjectDetail('${p.id}')" title="Open dedicated project view with Back button">
          <svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg> 📂 Open Project View
        </button>
        <button class="btn btn-secondary" style="padding:9px 13px; font-size:12.5px;" onclick="openViewer('${p.id}', 'weekly')">
          <svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> Weekly Report (Week ${curWeek.weekNumber || 1})
        </button>
        <button class="btn btn-secondary" style="padding:9px 13px; font-size:12.5px;" onclick="openViewer('${p.id}', 'scope')">
          <svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> Scope &amp; USP Document
        </button>
        <div class="quick-export-row" style="margin-top:8px;">
          <button class="btn btn-export-quick" onclick="quickExportJpg('${p.id}', 'weekly')" title="Export Week ${curWeek.weekNumber || 1} Report as high-resolution JPG">
            📸 Export Week ${curWeek.weekNumber || 1} Report JPG
          </button>
          <button class="btn btn-export-quick" onclick="quickExportJpg('${p.id}', 'scope')" title="Export Scope & USP Document as high-resolution JPG">
            📸 Export Scope &amp; USP JPG
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Open Viewer Modal
function openViewer(projectId, tab = 'weekly') {
  const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
  if (!project) return;

  activeProject = project;
  currentTab = tab;

  document.getElementById('modalProjectTitle').innerText = project.name;
  const breadcrumbEl = document.getElementById('modalProjectBreadcrumb');
  if (breadcrumbEl) breadcrumbEl.innerText = project.name;
  
  // Populate modal week switcher
  const weekSelect = document.getElementById('modalWeekSelect');
  if (weekSelect) {
    weekSelect.innerHTML = project.weeks.map((w, idx) => `
      <option value="${idx}" ${idx === (project.selectedWeekIndex || 0) ? 'selected' : ''}>
        ${w.weekLabel} (${w.weekEnding})
      </option>
    `).join('') + `<option value="upload">+ Upload Next Week...</option>`;
  }

  updateModalTabs();
  loadIframe();

  const modal = document.getElementById('viewerModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function changeModalWeek(weekIndex) {
  if (!activeProject) return;
  if (weekIndex === 'upload') {
    openUploadModal(activeProject.id);
    return;
  }
  activeProject.selectedWeekIndex = parseInt(weekIndex, 10);
  saveProjects();
  loadIframe();

  const searchVal = document.getElementById('projectSearch')?.value || '';
  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.status || 'all';
  renderProjects(searchVal, activeFilter);
}

function switchTab(tab) {
  if (currentTab === tab) return;
  currentTab = tab;
  updateModalTabs();
  loadIframe();
}

function updateModalTabs() {
  const weeklyTab = document.getElementById('tabWeekly');
  const scopeTab = document.getElementById('tabScope');
  if (currentTab === 'weekly') {
    weeklyTab.classList.add('active');
    scopeTab.classList.remove('active');
  } else {
    scopeTab.classList.add('active');
    weeklyTab.classList.remove('active');
  }
}

function ensureExporterInFrame(frame) {
  try {
    if (frame && frame.contentWindow) {
      frame.contentWindow.html2canvas = window.html2canvas;
    }
  } catch (e) {}
}

function loadIframe() {
  const frame = document.getElementById('viewerFrame');
  const curWeek = activeProject.weeks[activeProject.selectedWeekIndex || 0] || activeProject.weeks[0];
  const targetUrl = (currentTab === 'weekly') ? curWeek.weeklyUrl : curWeek.scopeUrl;
  frame.src = targetUrl;
  frame.onload = () => ensureExporterInFrame(frame);
}

function closeViewer() {
  const modal = document.getElementById('viewerModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
  const frame = document.getElementById('viewerFrame');
  frame.src = 'about:blank';
  activeProject = null;
}

// High-Resolution 1-Click JPG Export Engine
async function captureDocumentToJpg(doc, win, filename) {
  if (!doc) throw new Error('No document to capture');

  // Wait a short moment for fonts & layout calculations
  await new Promise(res => setTimeout(res, 350));

  // Ensure all images are completely loaded
  const imgs = Array.from(doc.images || []);
  await Promise.all(imgs.map(img => {
    if (img.complete && img.naturalWidth > 0) return Promise.resolve();
    return new Promise(res => {
      img.onload = img.onerror = res;
      setTimeout(res, 1500);
    });
  }));

  // Detect appropriate target element
  const card = doc.getElementById('card');
  const page = doc.querySelector('.page');
  const splitScreen = doc.querySelector('.split-screen');
  const reportWrapper = doc.querySelector('.report-wrapper');
  const reportCard = doc.querySelector('.report-card') || doc.querySelector('#reportCard');
  const wrapper = doc.querySelector('.wrapper');
  const scopeCard = doc.querySelector('.scope-card');

  let target = card || page || splitScreen || reportWrapper || reportCard || wrapper || scopeCard || doc.querySelector('main') || doc.body;

  let targetType = 'default';
  if (card || page) {
    targetType = 'fixed-card';
  } else if (splitScreen) {
    targetType = 'split-screen';
  } else if (wrapper) {
    targetType = 'watercraft-wrapper';
  } else if (reportCard || reportWrapper) {
    targetType = 'report-card';
  }

  const options = {
    scale: 2, // 2x Retina resolution
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    logging: false,
    onclone: function(clonedDoc) {
      // 1. Unscale and standardize card & viewport
      const clonedViewport = clonedDoc.getElementById('viewport');
      if (clonedViewport) {
        clonedViewport.style.width = '1536px';
        clonedViewport.style.height = '1024px';
        clonedViewport.style.overflow = 'visible';
        clonedViewport.style.position = 'static';
      }

      const clonedCard = clonedDoc.getElementById('card');
      if (clonedCard) {
        clonedCard.style.position = 'static';
        clonedCard.style.transform = 'none';
        clonedCard.style.margin = '0 auto';
        clonedCard.style.width = '1536px';
        clonedCard.style.height = '1024px';
        clonedCard.style.boxShadow = 'none';
      }

      const clonedPage = clonedDoc.querySelector('.page');
      if (clonedPage) {
        clonedPage.style.position = 'static';
        clonedPage.style.transform = 'none';
        clonedPage.style.margin = '0 auto';
        clonedPage.style.width = '1536px';
        clonedPage.style.height = '1024px';
        clonedPage.style.boxShadow = 'none';
      }

      const clonedWatercraft = clonedDoc.querySelector('.wrapper');
      if (clonedWatercraft) {
        clonedWatercraft.style.zoom = '1';
        clonedWatercraft.style.margin = '0 auto';
        clonedWatercraft.style.boxShadow = 'none';
      }

      const clonedReport = clonedDoc.querySelector('.report-card') || clonedDoc.querySelector('#reportCard') || clonedDoc.querySelector('.report-wrapper');
      if (clonedReport) {
        clonedReport.style.margin = '0 auto';
        clonedReport.style.boxShadow = 'none';
      }

      const clonedSplit = clonedDoc.querySelector('.split-screen');
      if (clonedSplit) {
        clonedSplit.style.display = 'flex';
        clonedSplit.style.flexDirection = 'row';
        clonedSplit.style.width = '3072px';
        clonedSplit.style.height = '1088px';
        clonedSplit.style.overflow = 'visible';
        clonedSplit.style.background = '#ffffff';
        const panels = clonedSplit.querySelectorAll('.panel');
        panels.forEach(p => {
          p.style.width = '1536px';
          p.style.height = '1088px';
          p.style.flex = '0 0 1536px';
          p.style.overflow = 'visible';
        });
        const imgWraps = clonedSplit.querySelectorAll('.image-wrap');
        imgWraps.forEach(w => {
          w.style.width = '1536px';
          w.style.height = '1024px';
          w.style.flex = '0 0 1024px';
          w.style.padding = '0';
          w.style.margin = '0';
          w.style.overflow = 'visible';
        });
        const imgs = clonedSplit.querySelectorAll('.image-wrap img');
        imgs.forEach(im => {
          im.style.width = '1536px';
          im.style.height = '1024px';
          im.style.objectFit = 'fill';
          im.style.display = 'block';
        });
      }

      // Remove any toolbars, hints, or toasts from cloned snapshot
      const tb = clonedDoc.getElementById('floating-export-toolbar');
      if (tb) tb.remove();
      const tst = clonedDoc.getElementById('exporter-toast');
      if (tst) tst.remove();
      const hnt = clonedDoc.querySelector('.hint');
      if (hnt) hnt.remove();
    }
  };

  if (targetType === 'fixed-card') {
    options.width = 1536;
    options.height = 1024;
    options.windowWidth = 1536;
    options.windowHeight = 1024;
  } else if (targetType === 'watercraft-wrapper') {
    options.width = 1536;
    options.windowWidth = 1536;
  } else if (targetType === 'report-card') {
    options.width = 1360;
    options.windowWidth = 1360;
  } else if (targetType === 'split-screen') {
    options.width = 3072;
    options.height = 1088;
    options.windowWidth = 3072;
    options.windowHeight = 1088;
    options.scale = 1;
  }

  // Use global html2canvas
  const h2c = (win && win.html2canvas) || window.html2canvas;
  if (!h2c) throw new Error('html2canvas library is not loaded');

  const canvas = await h2c(target, options);
  const dataUrl = canvas.toDataURL('image/jpeg', 0.95);

  const cleanFilename = filename.endsWith('.jpg') ? filename : `${filename}.jpg`;
  const link = document.createElement('a');
  link.download = cleanFilename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    if (link.parentNode) link.parentNode.removeChild(link);
  }, 500);

  return cleanFilename;
}

// Export JPG from inside the viewer modal
async function triggerViewerExport() {
  const frame = document.getElementById('viewerFrame');
  if (!frame || !frame.contentWindow || !activeProject) return;

  const curWeek = activeProject.weeks[activeProject.selectedWeekIndex || 0] || activeProject.weeks[0];
  const cleanName = activeProject.name.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `${cleanName}_Week_${curWeek.weekNumber || 1}_${currentTab === 'weekly' ? 'Report' : 'Scope'}.jpg`;

  showPortalToast(`Generating high-res JPG for ${activeProject.name}...`, 'loading');

  try {
    const doc = frame.contentDocument || frame.contentWindow.document;
    const win = frame.contentWindow;
    win.html2canvas = window.html2canvas;

    await captureDocumentToJpg(doc, win, filename);
    showPortalToast(`✓ Downloaded ${filename}`, 'success');
  } catch (err) {
    console.error('Viewer export error:', err);
    showPortalToast('Failed to export JPG. Please try again.', 'error');
  }
}

function triggerViewerPrint() {
  const frame = document.getElementById('viewerFrame');
  if (frame && frame.contentWindow) {
    frame.contentWindow.print();
  }
}

function openInNewTab() {
  if (!activeProject) return;
  const curWeek = activeProject.weeks[activeProject.selectedWeekIndex || 0] || activeProject.weeks[0];
  const targetUrl = (currentTab === 'weekly') ? curWeek.weeklyUrl : curWeek.scopeUrl;
  window.open(targetUrl, '_blank');
}

// Dedicated In-Page Project Detail View (Direct Drill-Down with Back navigation)
function openProjectDetail(projectId, tab = 'weekly') {
  const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
  if (!project) return;

  activeProject = project;
  currentTab = tab;

  // Update Breadcrumbs & Title
  const breadcrumbEl = document.getElementById('detailBreadcrumbProject');
  if (breadcrumbEl) breadcrumbEl.innerText = project.name;
  const titleEl = document.getElementById('detailTitle');
  if (titleEl) titleEl.innerText = `${project.name} (${project.release})`;

  // Populate Week Dropdown
  const weekSelect = document.getElementById('detailWeekSelect');
  if (weekSelect) {
    weekSelect.innerHTML = project.weeks.map((w, idx) => `
      <option value="${idx}" ${idx === (project.selectedWeekIndex || 0) ? 'selected' : ''}>
        ${w.weekLabel} (${w.weekEnding})
      </option>
    `).join('');
  }

  updateDetailTabs();
  loadDetailFrame();

  // Hide main cards, search, and stats; show dedicated detail section
  const projectsGrid = document.getElementById('projectsContainer');
  const controlBar = document.querySelector('.control-bar');
  const statsGrid = document.querySelector('.stats-grid');
  const detailSection = document.getElementById('projectDetailSection');

  if (projectsGrid) projectsGrid.style.display = 'none';
  if (controlBar) controlBar.style.display = 'none';
  if (statsGrid) statsGrid.style.display = 'none';
  if (detailSection) detailSection.style.display = 'flex';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeProjectDetail() {
  const projectsGrid = document.getElementById('projectsContainer');
  const controlBar = document.querySelector('.control-bar');
  const statsGrid = document.querySelector('.stats-grid');
  const detailSection = document.getElementById('projectDetailSection');
  const detailFrame = document.getElementById('detailFrame');

  if (detailFrame) detailFrame.src = 'about:blank';
  if (detailSection) detailSection.style.display = 'none';
  if (projectsGrid) projectsGrid.style.display = 'grid';
  if (controlBar) controlBar.style.display = 'flex';
  if (statsGrid) statsGrid.style.display = 'grid';

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function changeDetailWeek(weekIndex) {
  if (!activeProject) return;
  if (weekIndex === 'upload') {
    openUploadModal(activeProject.id);
    return;
  }
  activeProject.selectedWeekIndex = parseInt(weekIndex, 10);
  saveProjects();
  loadDetailFrame();
}

function switchDetailTab(tab) {
  currentTab = tab;
  updateDetailTabs();
  loadDetailFrame();
}

function updateDetailTabs() {
  const weeklyTab = document.getElementById('detailTabWeekly');
  const scopeTab = document.getElementById('detailTabScope');
  if (currentTab === 'weekly') {
    if (weeklyTab) weeklyTab.classList.add('active');
    if (scopeTab) scopeTab.classList.remove('active');
  } else {
    if (scopeTab) scopeTab.classList.add('active');
    if (weeklyTab) weeklyTab.classList.remove('active');
  }
}

function loadDetailFrame() {
  const frame = document.getElementById('detailFrame');
  if (!frame || !activeProject) return;
  const curWeek = activeProject.weeks[activeProject.selectedWeekIndex || 0] || activeProject.weeks[0];
  const targetUrl = (currentTab === 'weekly') ? curWeek.weeklyUrl : curWeek.scopeUrl;
  frame.src = targetUrl;
  frame.onload = () => ensureExporterInFrame(frame);
}

async function triggerDetailExport() {
  const frame = document.getElementById('detailFrame');
  if (!frame || !frame.contentWindow || !activeProject) return;

  const curWeek = activeProject.weeks[activeProject.selectedWeekIndex || 0] || activeProject.weeks[0];
  const cleanName = activeProject.name.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `${cleanName}_Week_${curWeek.weekNumber || 1}_${currentTab === 'weekly' ? 'Report' : 'Scope'}.jpg`;

  showPortalToast(`Generating high-res JPG for ${activeProject.name}...`, 'loading');

  try {
    const doc = frame.contentDocument || frame.contentWindow.document;
    const win = frame.contentWindow;
    win.html2canvas = window.html2canvas;

    await captureDocumentToJpg(doc, win, filename);
    showPortalToast(`✓ Downloaded ${filename}`, 'success');
  } catch (err) {
    console.error('Detail export error:', err);
    showPortalToast('Failed to export JPG. Please try again.', 'error');
  }
}

function openDetailInNewTab() {
  if (!activeProject) return;
  const curWeek = activeProject.weeks[activeProject.selectedWeekIndex || 0] || activeProject.weeks[0];
  const targetUrl = (currentTab === 'weekly') ? curWeek.weeklyUrl : curWeek.scopeUrl;
  window.open(targetUrl, '_blank');
}

// Quick Export from Dashboard Card
async function quickExportJpg(projectId, type) {
  const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
  if (!project) return;

  const curWeek = project.weeks[project.selectedWeekIndex || 0] || project.weeks[0];
  const url = (type === 'weekly') ? curWeek.weeklyUrl : curWeek.scopeUrl;
  const cleanName = project.name.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `${cleanName}_Week_${curWeek.weekNumber || 1}_${type === 'weekly' ? 'Report' : 'Scope'}.jpg`;

  showPortalToast(`Generating high-res JPG for ${project.name}...`, 'loading');

  const hiddenFrame = document.createElement('iframe');
  hiddenFrame.style.cssText = 'position:fixed;top:0;left:0;width:1536px;height:1024px;border:none;opacity:0.01;pointer-events:none;z-index:-99999;';
  hiddenFrame.src = url;
  document.body.appendChild(hiddenFrame);

  try {
    await new Promise((resolve, reject) => {
      hiddenFrame.onload = resolve;
      hiddenFrame.onerror = reject;
      setTimeout(() => reject(new Error('Timed out loading document')), 12000);
    });

    const doc = hiddenFrame.contentDocument || hiddenFrame.contentWindow.document;
    const win = hiddenFrame.contentWindow;
    win.html2canvas = window.html2canvas;

    await captureDocumentToJpg(doc, win, filename);
    showPortalToast(`✓ Downloaded ${filename}`, 'success');
  } catch (err) {
    console.error('Quick export error:', err);
    showPortalToast('Failed to export JPG. Please open the document directly.', 'error');
  } finally {
    if (hiddenFrame.parentNode) hiddenFrame.parentNode.removeChild(hiddenFrame);
  }
}

// Open "Add New Week" Modal
function openAddWeekModal() {
  const projectSelect = document.getElementById('newWeekProject');
  if (projectSelect) {
    projectSelect.innerHTML = PROJECTS.map(p => `<option value="${p.id}">${p.name}</option>`).join('');
  }
  const modal = document.getElementById('addWeekModal');
  if (modal) modal.classList.add('active');
}

function closeAddWeekModal() {
  const modal = document.getElementById('addWeekModal');
  if (modal) modal.classList.remove('active');
}

function submitNewWeek(e) {
  e.preventDefault();
  const projectId = document.getElementById('newWeekProject').value;
  const weekNum = parseInt(document.getElementById('newWeekNumber').value, 10);
  const weekDate = document.getElementById('newWeekDate').value;
  const weekStatus = document.getElementById('newWeekStatus').value;

  const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
  if (!project) return;

  const baselineWeek = project.weeks[0];
  const statusClass = (weekStatus === 'ON TRACK') ? 'green' : (weekStatus === 'AT RISK' ? 'amber' : 'red');

  const newWeekObj = {
    weekNumber: weekNum,
    weekLabel: `Week ${weekNum} (New)`,
    weekEnding: weekDate,
    status: weekStatus,
    statusClass: statusClass,
    manDays: baselineWeek.manDays,
    consumed: 'In Progress',
    weeklyUrl: baselineWeek.weeklyUrl,
    scopeUrl: baselineWeek.scopeUrl
  };

  project.weeks.unshift(newWeekObj);
  project.selectedWeekIndex = 0;
  saveProjects();

  closeAddWeekModal();
  renderProjects();
  showPortalToast(`✓ Created Week ${weekNum} for ${project.name}!`, 'success');

  openViewer(projectId, 'weekly');
}

// Open Document Upload Modal
function openUploadModal(projectId = '', defaultType = 'scope') {
  const effectiveProjectId = projectId || (PROJECTS[0] ? PROJECTS[0].id : 'camera-module');
  const pSelect = document.getElementById('uploadProject');
  if (pSelect) {
    pSelect.innerHTML = PROJECTS.map(p => `
      <option value="${p.id}" ${p.id === effectiveProjectId ? 'selected' : ''}>${p.name}</option>
    `).join('');
  }
  const typeSelect = document.getElementById('uploadDocType');
  if (typeSelect) typeSelect.value = defaultType;

  const curProj = PROJECTS.find(p => p.id === effectiveProjectId) || PROJECTS[0];
  const nextWeekNum = (curProj && curProj.weeks && curProj.weeks[0]) ? (curProj.weeks[0].weekNumber + 1) : 4;
  const weekNumInput = document.getElementById('uploadWeekNumber');
  if (weekNumInput) weekNumInput.value = nextWeekNum;

  const modal = document.getElementById('uploadModal');
  if (modal) modal.classList.add('active');
}

function closeUploadModal() {
  const modal = document.getElementById('uploadModal');
  if (modal) modal.classList.remove('active');
  const form = document.getElementById('uploadForm');
  if (form) form.reset();
}

async function handleDocumentUpload(e) {
  e.preventDefault();
  const projectId = document.getElementById('uploadProject').value;
  const docType = document.getElementById('uploadDocType').value;
  const weekNum = parseInt(document.getElementById('uploadWeekNumber').value, 10);
  const weekDate = document.getElementById('uploadWeekDate').value;
  const fileInput = document.getElementById('uploadFileInput');

  if (!fileInput.files || fileInput.files.length === 0) {
    showPortalToast('Please choose an HTML file to upload.', 'error');
    return;
  }

  const file = fileInput.files[0];
  const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
  if (!project) return;

  showPortalToast(`Uploading & linking ${file.name}...`, 'loading');

  const reader = new FileReader();
  reader.onload = async function(evt) {
    const content = evt.target.result;
    let savedUrl = '';

    try {
      const resp = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: docType,
          fileName: file.name,
          content: content
        })
      });
      if (resp.ok) {
        const result = await resp.json();
        savedUrl = result.url;
      }
    } catch (apiErr) {
      console.warn('Backend upload API unavailable, using local blob/store:', apiErr);
    }

    if (!savedUrl) {
      const blob = new Blob([content], { type: 'text/html' });
      savedUrl = URL.createObjectURL(blob);
    }

    let targetWeek = project.weeks.find(w => w.weekNumber === weekNum);
    if (!targetWeek) {
      targetWeek = {
        weekNumber: weekNum,
        weekLabel: `Week ${weekNum} (Uploaded)`,
        weekEnding: weekDate,
        status: 'ON TRACK',
        statusClass: 'green',
        manDays: project.weeks[0]?.manDays || 'N/A',
        consumed: 'Active',
        weeklyUrl: (docType === 'weekly') ? savedUrl : project.weeks[0]?.weeklyUrl,
        scopeUrl: (docType === 'scope') ? savedUrl : project.weeks[0]?.scopeUrl
      };
      project.weeks.unshift(targetWeek);
      project.selectedWeekIndex = 0;
    } else {
      if (docType === 'scope') targetWeek.scopeUrl = savedUrl;
      else targetWeek.weeklyUrl = savedUrl;
      targetWeek.weekEnding = weekDate;
    }

    saveProjects();
    closeUploadModal();
    renderProjects();

    showPortalToast(`✓ Attached ${docType === 'scope' ? 'Scope Document' : 'Weekly Report'} for ${project.name} (Week ${weekNum})!`, 'success');
    openViewer(projectId, docType);
  };

  reader.readAsText(file);
}

// Portal Toast notification
function showPortalToast(message, type = 'info') {
  let toast = document.getElementById('portal-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portal-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      padding: 12px 20px;
      border-radius: 10px;
      font-size: 13.5px;
      font-weight: 600;
      z-index: 999999;
      display: flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      transform: translateY(100px);
      opacity: 0;
    `;
    document.body.appendChild(toast);
  }

  if (type === 'loading') {
    toast.style.background = '#0f172a';
    toast.style.color = '#38bdf8';
    toast.style.border = '1px solid #0284c7';
    toast.innerHTML = `<svg style="animation:spin 1s linear infinite;width:18px;height:18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-linecap="round"/></svg> ${message}`;
  } else if (type === 'success') {
    toast.style.background = '#064e3b';
    toast.style.color = '#34d399';
    toast.style.border = '1px solid #059669';
    toast.innerHTML = message;
  } else {
    toast.style.background = '#1e293b';
    toast.style.color = '#f8fafc';
    toast.style.border = '1px solid #334155';
    toast.innerHTML = message;
  }

  requestAnimationFrame(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  });

  if (type !== 'loading') {
    setTimeout(() => {
      toast.style.transform = 'translateY(100px)';
      toast.style.opacity = '0';
    }, 3500);
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();

  const searchInput = document.getElementById('projectSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderProjects(e.target.value, 'all');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeViewer();
      closeProjectDetail();
      closeAddWeekModal();
      closeUploadModal();
    }
  });

  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CLOSE_VIEWER') {
      closeViewer();
      closeProjectDetail();
    }
  });
});
