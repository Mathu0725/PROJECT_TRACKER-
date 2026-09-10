/**
 * Project Tracker Portal Engine - Camera Module Focus
 * UNICOM TIC INCUBATOR
 */

// Active projects shown on the dashboard (Camera Module only as requested)
const DEFAULT_PROJECTS = [
  {
    id: 'camera-module',
    name: 'Camera Module',
    release: 'Phase 1A MVP',
    leads: 'Nilaxshan / Kirusthiya',
    description: 'Edge vision and camera stream gateway with installer launcher lifecycle, ONETIX user journey, and RTSP/ONVIF reliability.',
    highlights: 'Connector startup readiness, RTSP/ONVIF reliability, installer launcher lifecycle, camera & zone setup, ONETIX architecture & user journey.',
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 3,
        weekLabel: 'Week 3 (ONETIX Scope)',
        weekEnding: '4 Sep 2026',
        status: 'ON TRACK',
        statusClass: 'green',
        manDays: '44 Allocated',
        consumed: '46 Consumed',
        weeklyUrl: 'Incubator Weekly update/Camara Module.html',
        scopeUrl: 'scope document/Camera_Module_Scope_Onetix.html'
      }
    ]
  }
];

// Preserved archive of other projects (can be re-enabled anytime)
const ALL_PROJECTS_ARCHIVE = [
  {
    id: 'greyhound',
    name: 'Greyhound Customer Mobile App',
    release: 'Release 1.0 Mobile',
    leads: 'Mobile Dev Team',
    description: 'Customer mobile application for racetrack ticketing, turnstile barcode scanning, and live race day updates.',
    highlights: 'QR Scanner, Ticket Management, Live Polling, Mobile UX and account verification.',
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 2,
        weekLabel: 'Week 2 (Current)',
        weekEnding: '4 Sep 2026',
        status: 'ON TRACK',
        statusClass: 'green',
        manDays: 'Mobile MVP',
        consumed: 'Active Sprint',
        weeklyUrl: 'Incubator Weekly update/greyhound_weekly_project_visibility_card.html',
        scopeUrl: 'scope document/Greyhound_Customer_Mobile_App_Scope_Week_2.html'
      }
    ]
  },
  {
    id: 'onexso-hrms',
    name: 'ONEXSO HRMS',
    release: 'Enterprise Release 1',
    leads: 'HRMS Platform Team',
    description: 'Comprehensive human resource management suite with employee directory, multi-tenant security, and leave tracking.',
    highlights: 'Authentication & Security, Leave & Attendance, Multi-tenant management, Shift scheduling.',
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 7,
        weekLabel: 'Week 7 (Current)',
        weekEnding: '4 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '150 Days',
        consumed: '59% Complete',
        weeklyUrl: 'Incubator Weekly update/weekly-project-visibility-card-onexso.pr.html',
        scopeUrl: 'scope document/ONEXSO_HRMS_Scope_Week_7.html'
      }
    ]
  },
  {
    id: 'oneverz-epos',
    name: 'OneVerz EPOS',
    release: 'Release 2 EPOS',
    leads: 'EPOS Core Team',
    description: 'Retail & hospitality point of sale platform with inventory synchronization and online order fulfillment.',
    highlights: 'Online order fulfillment, Product catalog, Payment gateway integration, Responsive tablet layout.',
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 2,
        weekLabel: 'Week 2 (Current)',
        weekEnding: '4 Sep 2026',
        status: 'ON TRACK',
        statusClass: 'green',
        manDays: '150 Days',
        consumed: '75% Complete',
        weeklyUrl: 'Incubator Weekly update/One Verz Weekly Project Visibility Card 2 - Static.html',
        scopeUrl: 'scope document/OneVerz_EPOS_Scope_Week_2.html'
      }
    ]
  },
  {
    id: 'ticketing-venue',
    name: 'Ticketing Venue Setup',
    release: 'Release 2 Venue Engine',
    leads: 'Venue & Ticketing Team',
    description: 'Venue mapping, interactive seat block selection, gate access allocation, and tiered pricing engine.',
    highlights: 'Venue Visual Mapper, Tier Configuration, Gate & Entrance Setup, Seat Block Locking.',
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 2,
        weekLabel: 'Week 2 (Current)',
        weekEnding: '4 Sep 2026',
        status: 'ON TRACK',
        statusClass: 'green',
        manDays: '20 Days',
        consumed: '78% Complete',
        weeklyUrl: 'Incubator Weekly update/ticketing_venue_setup_weekly_visibility_card.html',
        scopeUrl: 'scope document/Ticketing_Venue_Setup_Scope_Week_2.html'
      }
    ]
  },
  {
    id: 'watercraft',
    name: 'Watercraft Storage Portal',
    release: 'Full Release',
    leads: 'Watercraft Platform Team',
    description: 'Marina vessel docking and dry storage booking management portal with address lookup and single sign-on.',
    highlights: 'Addressify integration, SSO Login-based redirect, MyBookings management, Multiple rollover.',
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 2,
        weekLabel: 'Week 2 (Current)',
        weekEnding: '4 Sep 2026',
        status: 'COMPLETED',
        statusClass: 'blue',
        manDays: '120 Days',
        consumed: '100% Complete',
        weeklyUrl: 'Incubator Weekly update/Watercraft_Visibility_Card_Final_Compact_BlackBackground.html',
        scopeUrl: 'scope document/Watercraft_Storage_Portal_Scope_Week_2.html'
      }
    ]
  }
];

// Load from LocalStorage (reset to camera-module focus)
let PROJECTS = JSON.parse(localStorage.getItem('portal_projects_camera_v1') || 'null') || DEFAULT_PROJECTS;

function saveProjects() {
  localStorage.setItem('portal_projects_camera_v1', JSON.stringify(PROJECTS));
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

    // Build week options + "+ Upload Next Week..."
    const weekOptions = p.weeks.map((w, idx) => `
      <option value="${idx}" ${idx === activeIndex ? 'selected' : ''}>${w.weekLabel} (${w.weekEnding})</option>
    `).join('') + `<option value="upload">+ Upload Next Week Document...</option>`;

    const card = document.createElement('article');
    card.className = 'project-card';
    card.style.maxWidth = '780px';
    card.style.margin = '0 auto';
    card.style.width = '100%';
    card.innerHTML = `
      <div class="project-card-header">
        <div class="project-title-wrap">
          <h3 style="font-size:20px;">📸 ${p.name}</h3>
          <div class="project-meta-sub">${p.release} • ${curWeek.weekEnding} • ONETIX Baseline</div>
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
            <div class="m-val" style="font-size:16px;">${curWeek.manDays}</div>
          </div>
          <div class="m-item">
            <div class="m-lbl">Consumed To Date</div>
            <div class="m-val" style="font-size:16px; color:#38bdf8;">${curWeek.consumed}</div>
          </div>
          <div class="m-item">
            <div class="m-lbl">Project Leads</div>
            <div class="m-val" style="font-size:13px;" title="${p.leads}">${p.leads}</div>
          </div>
        </div>
        <p class="project-desc" style="font-size:14px; margin-bottom:16px;">${p.description}</p>
        <div class="key-highlights" style="font-size:13px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); padding:12px; border-radius:8px; margin-bottom:18px;">
          <strong>🎯 Core Deliverables &amp; Scope:</strong> ${p.highlights}
        </div>
      </div>
      <div class="project-card-actions" style="padding:18px 20px;">
        <button class="btn btn-primary" style="padding:10px 18px; font-size:13px;" onclick="openViewer('${p.id}', 'weekly')">
          <svg style="width:15px;height:15px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> Weekly Report (Week 3)
        </button>
        <button class="btn btn-secondary" style="padding:10px 18px; font-size:13px;" onclick="openViewer('${p.id}', 'scope')">
          <svg style="width:15px;height:15px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> ONETIX Scope Document
        </button>
        <div class="quick-export-row" style="margin-top:8px;">
          <button class="btn btn-export-quick" onclick="quickExportJpg('${p.id}', 'weekly')">
            📸 Export Report JPG
          </button>
          <button class="btn btn-export-quick" onclick="quickExportJpg('${p.id}', 'scope')">
            📸 Export ONETIX Scope JPG
          </button>
          <button class="btn btn-export-quick" style="background:rgba(59,130,246,0.12);color:#60a5fa;border-color:rgba(59,130,246,0.35);" onclick="openUploadModal('${p.id}')" title="Upload new Scope Document or Weekly HTML">
            📤 Upload Week Document
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

function loadIframe() {
  const frame = document.getElementById('viewerFrame');
  const curWeek = activeProject.weeks[activeProject.selectedWeekIndex || 0] || activeProject.weeks[0];
  const targetUrl = (currentTab === 'weekly') ? curWeek.weeklyUrl : curWeek.scopeUrl;
  frame.src = targetUrl;
}

function closeViewer() {
  const modal = document.getElementById('viewerModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
  const frame = document.getElementById('viewerFrame');
  frame.src = 'about:blank';
  activeProject = null;
}

// Export JPG from inside the viewer modal
function triggerViewerExport() {
  const frame = document.getElementById('viewerFrame');
  if (!frame || !frame.contentWindow) return;

  const curWeek = activeProject.weeks[activeProject.selectedWeekIndex || 0] || activeProject.weeks[0];
  const filename = `${activeProject.name.replace(/\s+/g, '_')}_Week_${curWeek.weekNumber}_${currentTab === 'weekly' ? 'Report' : 'Scope'}.jpg`;
  frame.contentWindow.postMessage({
    type: 'TRIGGER_JPG_EXPORT',
    filename: filename
  }, '*');
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

// Quick Export from Dashboard Card
function quickExportJpg(projectId, type) {
  const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
  if (!project) return;

  const curWeek = project.weeks[project.selectedWeekIndex || 0] || project.weeks[0];
  const url = (type === 'weekly') ? curWeek.weeklyUrl : curWeek.scopeUrl;
  const filename = `${project.name.replace(/\s+/g, '_')}_Week_${curWeek.weekNumber}_${type === 'weekly' ? 'Report' : 'Scope'}.jpg`;

  const hiddenFrame = document.createElement('iframe');
  hiddenFrame.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1536px;height:1024px;border:none;visibility:hidden;';
  hiddenFrame.src = url;
  document.body.appendChild(hiddenFrame);

  showPortalToast(`Generating high-res JPG for ${project.name} (Week ${curWeek.weekNumber})...`, 'loading');

  hiddenFrame.onload = function() {
    setTimeout(() => {
      try {
        hiddenFrame.contentWindow.postMessage({
          type: 'TRIGGER_JPG_EXPORT',
          filename: filename
        }, '*');

        setTimeout(() => {
          if (hiddenFrame.parentNode) hiddenFrame.parentNode.removeChild(hiddenFrame);
          showPortalToast(`✓ Downloaded ${filename}`, 'success');
        }, 3000);
      } catch (err) {
        console.error('Quick export error:', err);
        showPortalToast('Failed to export. Please open the document directly.', 'error');
        if (hiddenFrame.parentNode) hiddenFrame.parentNode.removeChild(hiddenFrame);
      }
    }, 600);
  };
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
function openUploadModal(projectId = 'camera-module', defaultType = 'scope') {
  const pSelect = document.getElementById('uploadProject');
  if (pSelect) {
    pSelect.innerHTML = PROJECTS.map(p => `
      <option value="${p.id}" ${p.id === projectId ? 'selected' : ''}>${p.name}</option>
    `).join('');
  }
  const typeSelect = document.getElementById('uploadDocType');
  if (typeSelect) typeSelect.value = defaultType;

  const curProj = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
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
      closeAddWeekModal();
      closeUploadModal();
    }
  });
});
