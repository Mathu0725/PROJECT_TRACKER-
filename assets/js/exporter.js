/**
 * Universal High-Resolution JPG Exporter
 * Project Tracker & Visibility System
 */
(function() {
  // Ensure html2canvas is loaded
  function loadHtml2Canvas(callback) {
    if (window.html2canvas) {
      callback();
      return;
    }
    const script = document.createElement('script');
    script.src = window.location.pathname.includes('/Incubator') || window.location.pathname.includes('/scope')
      ? '../assets/js/html2canvas.min.js'
      : 'assets/js/html2canvas.min.js';
    script.onerror = function() {
      const cdnScript = document.createElement('script');
      cdnScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
      cdnScript.onload = callback;
      document.head.appendChild(cdnScript);
    };
    script.onload = callback;
    document.head.appendChild(script);
  }

  // Toast notification helper
  function showToast(message, type = 'info', duration = 3500) {
    let toast = document.getElementById('exporter-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'exporter-toast';
      toast.setAttribute('data-html2canvas-ignore', 'true');
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        padding: 12px 20px;
        border-radius: 10px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        font-size: 13.5px;
        font-weight: 600;
        z-index: 9999999;
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
      toast.innerHTML = `<svg style="animation:spin 1s linear infinite;width:18px;height:18px;min-width:18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10" stroke-dasharray="32" stroke-linecap="round"/></svg> <span>${message}</span>`;
      if (!document.getElementById('exporter-spin-style')) {
        const style = document.createElement('style');
        style.id = 'exporter-spin-style';
        style.textContent = '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
        document.head.appendChild(style);
      }
    } else if (type === 'success') {
      toast.style.background = '#064e3b';
      toast.style.color = '#34d399';
      toast.style.border = '1px solid #059669';
      toast.innerHTML = `<span style="font-size:16px;">✓</span> <span>${message}</span>`;
    } else {
      toast.style.background = '#1e293b';
      toast.style.color = '#f8fafc';
      toast.style.border = '1px solid #334155';
      toast.innerHTML = `<span>${message}</span>`;
    }

    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });

    if (type !== 'loading') {
      setTimeout(() => {
        toast.style.transform = 'translateY(100px)';
        toast.style.opacity = '0';
      }, duration);
    }
  }

  // Detect appropriate target element
  function findCaptureTarget() {
    const card = document.getElementById('card');
    if (card) return { element: card, type: 'fixed-card' };

    const reportCard = document.querySelector('.report-card');
    if (reportCard) return { element: reportCard, type: 'report-card' };

    const wrapper = document.querySelector('.wrapper');
    if (wrapper) return { element: wrapper, type: 'watercraft-wrapper' };

    const reportWrapper = document.querySelector('.report-wrapper');
    if (reportWrapper) return { element: reportWrapper, type: 'report-wrapper' };

    const scopeCard = document.querySelector('.scope-card');
    if (scopeCard) return { element: scopeCard, type: 'scope-card' };

    const splitScreen = document.querySelector('.split-screen');
    if (splitScreen) return { element: splitScreen, type: 'split-screen' };

    return { element: document.querySelector('main') || document.body, type: 'default' };
  }

  // Generate safe sanitized filename
  function getExportFilename() {
    let raw = document.title || 'Project_Report';
    let clean = raw
      .replace(/—|-/g, ' ')
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '_');
    if (!clean) clean = 'Project_Report';
    return `${clean}.jpg`;
  }

  // Main Export Function
  window.exportCurrentPageToJpg = function(customFilename) {
    showToast('Rendering high-resolution JPG (Retina 2x)...', 'loading');

    loadHtml2Canvas(function() {
      const { element, type } = findCaptureTarget();
      const filename = customFilename || getExportFilename();

      let options = {
        scale: 2, // 2x crispness
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        onclone: function(clonedDoc) {
          // Adjust cloned DOM elements so they render without viewport bounds or transforms
          const clonedCard = clonedDoc.getElementById('card');
          const clonedViewport = clonedDoc.getElementById('viewport');
          if (clonedViewport) {
            clonedViewport.style.width = '1536px';
            clonedViewport.style.height = '1024px';
            clonedViewport.style.overflow = 'visible';
            clonedViewport.style.position = 'static';
          }
          if (clonedCard) {
            clonedCard.style.position = 'static';
            clonedCard.style.transform = 'none';
            clonedCard.style.margin = '0 auto';
            clonedCard.style.width = '1536px';
            clonedCard.style.height = '1024px';
            clonedCard.style.boxShadow = 'none';
          }

          const clonedWatercraft = clonedDoc.querySelector('.wrapper');
          if (clonedWatercraft) {
            clonedWatercraft.style.zoom = '1';
            clonedWatercraft.style.margin = '0 auto';
            clonedWatercraft.style.boxShadow = 'none';
          }

          const clonedReport = clonedDoc.querySelector('.report-card');
          if (clonedReport) {
            clonedReport.style.margin = '0 auto';
            clonedReport.style.boxShadow = 'none';
          }

          const clonedSplit = clonedDoc.querySelector('.split-screen');
          if (clonedSplit) {
            clonedSplit.style.width = '1920px';
            clonedSplit.style.height = '1080px';
            clonedSplit.style.overflow = 'visible';
            const panels = clonedSplit.querySelectorAll('.panel');
            panels.forEach(p => {
              p.style.width = '960px';
              p.style.height = '1080px';
            });
          }

          // Remove toolbar in clone
          const tb = clonedDoc.getElementById('floating-export-toolbar');
          if (tb) tb.remove();
          const tst = clonedDoc.getElementById('exporter-toast');
          if (tst) tst.remove();
        }
      };

      if (type === 'fixed-card') {
        options.width = 1536;
        options.height = 1024;
        options.windowWidth = 1536;
        options.windowHeight = 1024;
      } else if (type === 'watercraft-wrapper') {
        options.width = 1536;
        options.windowWidth = 1536;
      } else if (type === 'report-card') {
        options.width = 1300;
        options.windowWidth = 1360;
      } else if (type === 'split-screen') {
        options.width = 1920;
        options.height = 1080;
        options.windowWidth = 1920;
        options.windowHeight = 1080;
      }

      window.html2canvas(element, options).then(canvas => {
        const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        showToast(`Downloaded: ${filename}`, 'success', 4000);

        // Notify parent window if inside iframe
        if (window.parent && window.parent !== window) {
          window.parent.postMessage({ type: 'JPG_EXPORT_COMPLETE', filename: filename }, '*');
        }
      }).catch(err => {
        console.error('JPG Export error:', err);
        showToast('Export failed. Please check browser permissions.', 'error');
      });
    });
  };

  // Listen for export requests from parent window
  window.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'TRIGGER_JPG_EXPORT') {
      window.exportCurrentPageToJpg(event.data.filename);
    }
  });

  // Inject Floating Toolbar for quick user export & navigation
  function injectFloatingToolbar() {
    if (document.getElementById('floating-export-toolbar')) return;

    const isInsideIframe = (window.self !== window.top);

    const toolbar = document.createElement('div');
    toolbar.id = 'floating-export-toolbar';
    toolbar.setAttribute('data-html2canvas-ignore', 'true');
    toolbar.style.cssText = `
      position: fixed;
      top: 14px;
      right: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
      background: rgba(15, 23, 42, 0.88);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      padding: 6px 12px;
      border-radius: 30px;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `;

    // 1. Export JPG button
    const btnJpg = document.createElement('button');
    btnJpg.innerHTML = `<svg style="width:15px;height:15px;margin-right:5px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg> Export as JPG`;
    btnJpg.style.cssText = `
      display: inline-flex;
      align-items: center;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      color: #ffffff;
      border: none;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.35);
      transition: all 0.2s ease;
    `;
    btnJpg.onmouseenter = () => { btnJpg.style.transform = 'translateY(-1px)'; btnJpg.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.5)'; };
    btnJpg.onmouseleave = () => { btnJpg.style.transform = 'none'; btnJpg.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.35)'; };
    btnJpg.onclick = () => window.exportCurrentPageToJpg();
    toolbar.appendChild(btnJpg);

    // 2. Print button
    const btnPrint = document.createElement('button');
    btnPrint.innerHTML = `<svg style="width:14px;height:14px;margin-right:5px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg> Print`;
    btnPrint.style.cssText = `
      display: inline-flex;
      align-items: center;
      background: rgba(255, 255, 255, 0.12);
      color: #f1f5f9;
      border: 1px solid rgba(255, 255, 255, 0.18);
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    `;
    btnPrint.onmouseenter = () => { btnPrint.style.background = 'rgba(255, 255, 255, 0.22)'; };
    btnPrint.onmouseleave = () => { btnPrint.style.background = 'rgba(255, 255, 255, 0.12)'; };
    btnPrint.onclick = () => window.print();
    toolbar.appendChild(btnPrint);

    // 3. Portal Button (if not already inside an iframe)
    if (!isInsideIframe) {
      const btnHome = document.createElement('a');
      btnHome.href = window.location.pathname.includes('/Incubator') || window.location.pathname.includes('/scope')
        ? '../index.html'
        : 'index.html';
      btnHome.innerHTML = `<svg style="width:14px;height:14px;margin-right:5px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> Hub`;
      btnHome.style.cssText = `
        display: inline-flex;
        align-items: center;
        background: rgba(255, 255, 255, 0.08);
        color: #94a3b8;
        border: 1px solid rgba(255, 255, 255, 0.12);
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.2s ease;
      `;
      btnHome.onmouseenter = () => { btnHome.style.color = '#ffffff'; btnHome.style.background = 'rgba(255, 255, 255, 0.16)'; };
      btnHome.onmouseleave = () => { btnHome.style.color = '#94a3b8'; btnHome.style.background = 'rgba(255, 255, 255, 0.08)'; };
      toolbar.appendChild(btnHome);
    }

    const printStyle = document.createElement('style');
    printStyle.textContent = '@media print { #floating-export-toolbar, #exporter-toast { display: none !important; } }';
    document.head.appendChild(printStyle);

    document.body.appendChild(toolbar);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFloatingToolbar);
  } else {
    injectFloatingToolbar();
  }
})();
