/**
 * Project Tracker Portal Engine
 * UNICOM TIC INCUBATOR
 */

const PROJECTS = [
  {
    id: 'camera-module',
    name: 'Camera Module',
    release: 'Phase 1A MVP',
    week: 'Week 3',
    status: 'ON TRACK',
    statusClass: 'green',
    manDays: '44 Allocated',
    consumed: '46 Consumed',
    leads: 'Nilaxshan / Kirusthiya',
    description: 'Edge vision and camera stream gateway with installer lifecycle and RTSP/ONVIF reliability.',
    highlights: 'Connector startup readiness, RTSP/ONVIF reliability, installer launcher lifecycle, camera & zone setup.',
    weeklyUrl: 'Incubator Weekly update/Camara Module.html',
    scopeUrl: 'scope document/Camera_Module_Scope_Week_3.html'
  },
  {
    id: 'greyhound',
    name: 'Greyhound Customer Mobile App',
    release: 'Release 1.0 Mobile',
    week: 'Week 2',
    status: 'ON TRACK',
    statusClass: 'green',
    manDays: 'Mobile MVP',
    consumed: 'Active Sprint',
    leads: 'Mobile Dev Team',
    description: 'Customer mobile application for racetrack ticketing, turnstile barcode scanning, and live race day updates.',
    highlights: 'QR Scanner, Ticket Management, Live Polling, Mobile UX and account verification.',
    weeklyUrl: 'Incubator Weekly update/greyhound_weekly_project_visibility_card.html',
    scopeUrl: 'scope document/Greyhound_Customer_Mobile_App_Scope_Week_2.html'
  },
  {
    id: 'onexso-hrms',
    name: 'ONEXSO HRMS',
    release: 'Enterprise Release 1',
    week: 'Week 7',
    status: 'AT RISK',
    statusClass: 'amber',
    manDays: '150 Days',
    consumed: '59% Complete',
    leads: 'HRMS Platform Team',
    description: 'Comprehensive human resource management suite with employee directory, multi-tenant security, and leave tracking.',
    highlights: 'Authentication & Security, Leave & Attendance, Multi-tenant management, Shift scheduling.',
    weeklyUrl: 'Incubator Weekly update/weekly-project-visibility-card-onexso.pr.html',
    scopeUrl: 'scope document/ONEXSO_HRMS_Scope_Week_7.html'
  },
  {
    id: 'oneverz-epos',
    name: 'OneVerz EPOS',
    release: 'Release 2 EPOS',
    week: 'Week 2',
    status: 'ON TRACK',
    statusClass: 'green',
    manDays: '150 Days',
    consumed: '75% Complete',
    leads: 'EPOS Core Team',
    description: 'Retail & hospitality point of sale platform with inventory synchronization and online order fulfillment.',
    highlights: 'Online order fulfillment, Product catalog, Payment gateway integration, Responsive tablet layout.',
    weeklyUrl: 'Incubator Weekly update/One Verz Weekly Project Visibility Card 2 - Static.html',
    scopeUrl: 'scope document/OneVerz_EPOS_Scope_Week_2.html'
  },
  {
    id: 'ticketing-venue',
    name: 'Ticketing Venue Setup',
    release: 'Release 2 Venue Engine',
    week: 'Week 2',
    status: 'ON TRACK',
    statusClass: 'green',
    manDays: '20 Days',
    consumed: '78% Complete',
    leads: 'Venue & Ticketing Team',
    description: 'Venue mapping, interactive seat block selection, gate access allocation, and tiered pricing engine.',
    highlights: 'Venue Visual Mapper, Tier Configuration, Gate & Entrance Setup, Seat Block Locking.',
    weeklyUrl: 'Incubator Weekly update/ticketing_venue_setup_weekly_visibility_card.html',
    scopeUrl: 'scope document/Ticketing_Venue_Setup_Scope_Week_2.html'
  },
  {
    id: 'watercraft',
    name: 'Watercraft Storage Portal',
    release: 'Full Release',
    week: 'Week 2',
    status: 'COMPLETED',
    statusClass: 'blue',
    manDays: '120 Days',
    consumed: '100% Complete',
    leads: 'Watercraft Platform Team',
    description: 'Marina vessel docking and dry storage booking management portal with address lookup and single sign-on.',
    highlights: 'Addressify integration, SSO Login-based redirect, MyBookings management, Multiple rollover.',
    weeklyUrl: 'Incubator Weekly update/Watercraft_Visibility_Card_Final_Compact_BlackBackground.html',
    scopeUrl: 'scope document/Watercraft_Storage_Portal_Scope_Week_2.html'
  }
];

let activeProject = null;
let currentTab = 'weekly'; // 'weekly' or 'scope'

// Render Project Cards
function renderProjects(filterText = '', filterStatus = 'all') {
  const container = document.getElementById('projectsContainer');
  container.innerHTML = '';

  const filtered = PROJECTS.filter(p => {
    const matchesText = p.name.toLowerCase().includes(filterText.toLowerCase()) ||
                        p.description.toLowerCase().includes(filterText.toLowerCase()) ||
                        p.highlights.toLowerCase().includes(filterText.toLowerCase());
    const matchesStatus = (filterStatus === 'all') ||
                          (filterStatus === 'ontrack' && p.status === 'ON TRACK') ||
                          (filterStatus === 'atrisk' && p.status === 'AT RISK') ||
                          (filterStatus === 'completed' && p.status === 'COMPLETED');
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
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-card-header">
        <div class="project-title-wrap">
          <h3>${p.name}</h3>
          <div class="project-meta-sub">${p.release} • ${p.week}</div>
        </div>
        <span class="status-tag ${p.statusClass}">${p.status}</span>
      </div>
      <div class="project-card-body">
        <div class="metrics-row">
          <div class="m-item">
            <div class="m-lbl">Allocation</div>
            <div class="m-val">${p.manDays}</div>
          </div>
          <div class="m-item">
            <div class="m-lbl">Status/Progress</div>
            <div class="m-val">${p.consumed}</div>
          </div>
          <div class="m-item">
            <div class="m-lbl">Lead</div>
            <div class="m-val" style="font-size:11.5px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${p.leads}">${p.leads.split('/')[0]}</div>
          </div>
        </div>
        <p class="project-desc">${p.description}</p>
        <div class="key-highlights">
          <strong>Key Focus:</strong> ${p.highlights}
        </div>
      </div>
      <div class="project-card-actions">
        <button class="btn btn-primary" onclick="openViewer('${p.id}', 'weekly')">
          <svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> Weekly Report
        </button>
        <button class="btn btn-secondary" onclick="openViewer('${p.id}', 'scope')">
          <svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg> Scope Document
        </button>
        <div class="quick-export-row">
          <button class="btn btn-export-quick" onclick="quickExportJpg('${p.id}', 'weekly')">
            📸 Export Report JPG
          </button>
          <button class="btn btn-export-quick" onclick="quickExportJpg('${p.id}', 'scope')">
            📸 Export Scope JPG
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Open Viewer Modal
function openViewer(projectId, tab = 'weekly') {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  activeProject = project;
  currentTab = tab;

  document.getElementById('modalProjectTitle').innerText = project.name;
  updateModalTabs();
  loadIframe();

  const modal = document.getElementById('viewerModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
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
  const targetUrl = (currentTab === 'weekly') ? activeProject.weeklyUrl : activeProject.scopeUrl;
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

  const filename = `${activeProject.name.replace(/\s+/g, '_')}_${currentTab === 'weekly' ? 'Weekly_Report' : 'Scope_Document'}.jpg`;
  frame.contentWindow.postMessage({
    type: 'TRIGGER_JPG_EXPORT',
    filename: filename
  }, '*');
}

// Print from inside viewer modal
function triggerViewerPrint() {
  const frame = document.getElementById('viewerFrame');
  if (frame && frame.contentWindow) {
    frame.contentWindow.print();
  }
}

// Open in new standalone tab
function openInNewTab() {
  if (!activeProject) return;
  const targetUrl = (currentTab === 'weekly') ? activeProject.weeklyUrl : activeProject.scopeUrl;
  window.open(targetUrl, '_blank');
}

// Quick Export from Dashboard Card (via background iframe)
function quickExportJpg(projectId, type) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const url = (type === 'weekly') ? project.weeklyUrl : project.scopeUrl;
  const filename = `${project.name.replace(/\s+/g, '_')}_${type === 'weekly' ? 'Weekly_Report' : 'Scope_Document'}.jpg`;

  // Create temporary offscreen iframe
  const hiddenFrame = document.createElement('iframe');
  hiddenFrame.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1536px;height:1024px;border:none;visibility:hidden;';
  hiddenFrame.src = url;
  document.body.appendChild(hiddenFrame);

  // Show status banner
  showPortalToast(`Generating high-res JPG for ${project.name}...`, 'loading');

  hiddenFrame.onload = function() {
    setTimeout(() => {
      try {
        hiddenFrame.contentWindow.postMessage({
          type: 'TRIGGER_JPG_EXPORT',
          filename: filename
        }, '*');

        // Cleanup after delay
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

// Event Listeners for Filters & Search
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();

  const searchInput = document.getElementById('projectSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeFilterBtn = document.querySelector('.filter-btn.active');
      const status = activeFilterBtn ? activeFilterBtn.dataset.status : 'all';
      renderProjects(e.target.value, status);
    });
  }

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const searchVal = searchInput ? searchInput.value : '';
      renderProjects(searchVal, btn.dataset.status);
    });
  });

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeViewer();
  });
});
