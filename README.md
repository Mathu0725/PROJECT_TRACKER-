# UNICOM TIC INCUBATOR — Multi-Project Tracker & Visibility Portal

An executive-level multi-project visibility dashboard and weekly reporting suite supporting 6 active incubator projects, scope specifications, high-resolution 1-click JPG report generation, and continuous deployment via Vercel.

---

## Live Portfolio Projects

| # | Project Name | Release Stage | Baseline Week | Weekly Report | Scope Document |
|---|--------------|---------------|---------------|---------------|----------------|
| 1 | **Camera Module** | Phase 1A MVP | Week 3 | [View Report](Incubator%20Weekly%20update/Camara%20Module.html) | [View Scope](scope%20document/Camera_Module_Scope_Week_3.html) |
| 2 | **Greyhound Customer Mobile App** | Release 1.0 Mobile | Week 2 | [View Report](Incubator%20Weekly%20update/greyhound_weekly_project_visibility_card.html) | [View Scope](scope%20document/Greyhound_Customer_Mobile_App_Scope_Week_2.html) |
| 3 | **ONEXSO HRMS** | Enterprise Release 1 | Week 7 | [View Report](Incubator%20Weekly%20update/weekly-project-visibility-card-onexso.pr.html) | [View Scope](scope%20document/ONEXSO_HRMS_Scope_Week_7.html) |
| 4 | **OneVerz EPOS** | Release 2 EPOS | Week 2 | [View Report](Incubator%20Weekly%20update/One%20Verz%20Weekly%20Project%20Visibility%20Card%202%20-%20Static.html) | [View Scope](scope%20document/OneVerz_EPOS_Scope_Week_2.html) |
| 5 | **Ticketing Venue Setup** | Release 2 Venue Engine | Week 2 | [View Report](Incubator%20Weekly%20update/ticketing_venue_setup_weekly_visibility_card.html) | [View Scope](scope%20document/Ticketing_Venue_Setup_Scope_Week_2.html) |
| 6 | **Watercraft Storage Portal** | Full Release | Week 2 | [View Report](Incubator%20Weekly%20update/Watercraft_Visibility_Card_Final_Compact_BlackBackground.html) | [View Scope](scope%20document/Watercraft_Storage_Portal_Scope_Week_2.html) |

---

## Key Features

1. **Central Command Portal (`index.html`)**:
   - Filter by status: *On Track*, *At Risk*, or *Completed*.
   - Live search across all project titles, leads, and deliverables.
   - Built-in fullscreen modal viewer to toggle seamlessly between **Weekly Visibility Cards** and **Scope Documents**.

2. **Ultra High-Resolution JPG Export Engine**:
   - Powered by `html2canvas` running at **Retina 2x scale** for print-ready, crisp graphics.
   - **Floating Action Bar** automatically injected into every report and scope document for 1-click JPG export or printing.
   - **Direct 1-Click Export** buttons directly on dashboard cards—export without even opening the report!
   - Toolbars and UI controls are automatically excluded from the final exported image.

3. **Continuous Deployment with Git & Vercel**:
   - Zero-configuration static hosting configured via `vercel.json`.
   - Automated git push script (`deploy-to-vercel.ps1`).

---

## How to Deploy to Vercel

### Step 1: Connect to GitHub / GitLab / Bitbucket
In your terminal, run:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/incubator-project-tracker.git
git branch -M main
git push -u origin main
```

### Step 2: Import into Vercel
1. Go to [vercel.com/new](https://vercel.com/new).
2. Select your repository (`incubator-project-tracker`).
3. Framework Preset: **Other** (Root directory: `./`).
4. Click **Deploy**.

> **Every time you push a git commit, Vercel will automatically build and publish your live link!**

### Step 3: Fast Update Script
Whenever you edit reports or add weekly updates, run:
```powershell
.\deploy-to-vercel.ps1
```
Or directly deploy using the Vercel CLI:
```powershell
npx vercel --prod
```

---

## How to Add a New Weekly Report (Week N+1)

1. Open `Incubator Weekly update/WEEKLY PROJECT VISIBILITY CARD.html` (or copy the current project's HTML file).
2. Update the week ending date, progress metrics, and highlights.
3. Save the new HTML file into `Incubator Weekly update/`.
4. In `assets/js/portal.js`, update the `weeklyUrl` or add a new entry to `PROJECTS`.
5. Push to Git—Vercel will update live instantly!
