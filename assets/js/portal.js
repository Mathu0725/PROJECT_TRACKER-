/**
 * Project Tracker Portal Engine
 * EXECUTIVE PROJECT TRACKER - Complete Portfolio Visibility Hub
 * Compact Executive Card Design & Full-Screen Workstreams Breakdown
 */

const DEFAULT_PROJECTS = [
  {
    id: 'camera-module',
    icon: '📷',
    name: 'Camera Module (ONETIX)',
    company: 'UNICOM TIC INCUBATOR',
    release: 'Phase 1A MVP',
    targetReleaseDate: '15 Oct 2026',
    forecastExtension: '+43 Days Extension',
    originalPlanDates: '3 Jul 2026 – 2 Sep 2026',
    originalAllocation: 88,
    forecastTotal: 150,
    forecastOverrun: '+62 Man-Days (+70.5%)',
    overBudget: true,
    leads: 'Nilaxshan / Kirusthiya',
    description: 'Edge vision and camera stream gateway with installer launcher lifecycle, ONETIX retail loss prevention, and RTSP/ONVIF reliability.',
    highlights: 'Connector startup readiness, RTSP/ONVIF reliability, installer launcher lifecycle, camera & zone setup, ONETIX architecture & user journey.',
    resources: [
      {
        name: 'Nilaxshan',
        role: 'Project Manager / Developer',
        allocation: '75 Man-Days',
        responsibility: 'Backend, connector, installer lifecycle, runtime stability, and validation coordination.'
      },
      {
        name: 'Kirusthiya',
        role: 'Developer',
        allocation: '75 Man-Days',
        responsibility: 'Dashboard UI, setup workflow, training interface, integration testing, and product improvements.'
      }
    ],
    milestones: [
      { name: 'Connector Issue Handling', status: 'COMPLETED', position: 'Applied' },
      { name: 'Dashboard UI Update', status: 'COMPLETED', position: 'Updated' },
      { name: 'Installer Lifecycle', status: 'IN PROGRESS', position: 'Validation' },
      { name: 'Camera & Zone Setup', status: 'IN PROGRESS', position: 'Improving' },
      { name: 'Fully Local Validation', status: 'IN PROGRESS', position: 'Benchmark prep' }
    ],
    risk: {
      issue: 'Clean-Windows lifecycle not fully validated',
      severity: 'MEDIUM',
      mitigation: 'Run acceptance test on clean pilot machines'
    },
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 3,
        weekLabel: 'Week 3',
        weekEnding: '18 Sep 2026',
        status: 'ON TRACK',
        statusClass: 'green',
        consumed: 112,
        remaining: 38,
        consumedPercent: '127%',
        completedTasks: [
          'Local AI architecture reviewed',
          'Hardware requirements analysed',
          '1- and 4-camera configurations prepared',
          'Docker services checked',
          'CUDA GPU readiness verified'
        ],
        uncompletedTasks: [
          'Multi-camera benchmark planning (Carried over from Week 2)',
          'Hardware cost validation (Carried over from Week 2)',
          'Clean-Windows lifecycle test (Pending validation)'
        ],
        inProgressTasks: [
          'Multi-camera benchmark planning',
          'Live RTSP test preparation',
          'CPU / GPU performance review',
          'Hardware cost validation',
          'Local deployment validation'
        ],
        futureTasks: [
          '1- and 4-camera live benchmark',
          'Latency and dropped-frame checks',
          'Clean-Windows lifecycle test',
          'Live-camera E2E validation',
          'Final hardware recommendation'
        ],
        keyInsight: 'Local architecture and proposed hardware requirements reviewed. Live multi-camera benchmarking and clean-Windows validation remain priority.',
        weeklyUrl: 'Incubator Weekly update/Camera module 18.09.2026.html',
        scopeUrl: 'scope document/ONETIX_Scope_USP.html'
      },
      {
        weekNumber: 2,
        weekLabel: 'Week 2',
        weekEnding: '11 Sep 2026',
        status: 'ON TRACK',
        statusClass: 'green',
        consumed: 102,
        remaining: 48,
        consumedPercent: '116%',
        completedTasks: [
          'RTSP / ONVIF fallback improvements',
          'Connector flow bug fixes',
          'Installer and service stability fixes',
          'Launcher and dashboard fixes',
          'Local RTSP stream verified'
        ],
        uncompletedTasks: [
          'Camera & zone setup (Carried over from Week 1)',
          'Hardware capacity & cost research (Carried over from Week 1)'
        ],
        inProgressTasks: [
          'Fully local architecture review',
          'Hardware requirements analysis',
          'Multi-camera performance analysis',
          'Cost analysis & regression validation'
        ],
        futureTasks: [
          'Final hardware benchmark',
          'Multi-camera load validation',
          'Clean-Windows lifecycle test'
        ],
        keyInsight: 'Revised forecast remains on track. Fully local operation, hardware cost and live-camera validation are key priorities.',
        weeklyUrl: 'Incubator Weekly update/Camera Module 11.09.2026.html',
        scopeUrl: 'scope document/ONETIX_Scope_USP.html'
      },
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '4 Sep 2026',
        status: 'ON TRACK',
        statusClass: 'green',
        consumed: 92,
        remaining: 58,
        consumedPercent: '105%',
        completedTasks: [
          'Connector issue handling',
          'Removal cleanup behavior',
          'Backend workflow updates',
          'Dashboard UI update',
          'Store setup improvements'
        ],
        uncompletedTasks: [],
        inProgressTasks: [
          'Connector startup readiness',
          'RTSP / ONVIF reliability',
          'Installer launcher lifecycle',
          'Camera and zone setup'
        ],
        futureTasks: [
          'Fully local system validation',
          'Clean-Windows lifecycle test',
          'Live-camera E2E validation'
        ],
        keyInsight: 'Sprint kickoff completed on track under revised baseline.',
        weeklyUrl: 'Incubator Weekly update/Camera Module.html',
        scopeUrl: 'scope document/ONETIX_Scope_USP.html'
      }
    ]
  },
  {
    id: 'greyhound',
    icon: '📱',
    name: 'Greyhound Customer Mobile App',
    company: 'UNICOM TIC INCUBATOR',
    release: 'Phase 1',
    targetReleaseDate: '30 Oct 2026',
    originalAllocation: 35,
    forecastTotal: 42,
    forecastOverrun: '+7 Man-Days (+20%)',
    overBudget: true,
    leads: 'Gobithas Kalaimakan',
    description: 'Customer mobile application for racetrack ticketing, turnstile barcode scanning, and live race day updates.',
    highlights: 'QR Scanner, Ticket Management, Live Polling, Mobile UX and account verification.',
    resources: [
      {
        name: 'Gobithas Kalaimakan',
        role: 'Developer',
        allocation: '42 Man-Days',
        responsibility: 'Customer mobile app — Optimo WebAPI checklist, invite / ticket / attendees flows, Phase 1 delivery.'
      }
    ],
    milestones: [
      { name: 'Turnstile QR Scanner', status: 'COMPLETED', position: 'Delivered' },
      { name: 'Ticket Wallet', status: 'IN PROGRESS', position: 'Testing' },
      { name: 'Live Polling Service', status: 'IN PROGRESS', position: 'Integrating' },
      { name: 'Push Notification Pipeline', status: 'TARGET', position: 'Next Sprint' }
    ],
    risk: {
      issue: 'Turnstile camera focus speed under low ambient light',
      severity: 'HIGH',
      mitigation: 'Optimize barcode scanning library frame rate & torch assist'
    },
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 3,
        weekLabel: 'Week 3',
        weekEnding: '18 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '42 Allocated',
        consumed: '30 Consumed (71%)',
        completedTasks: [
          'Turnstile barcode scanner v2 benchmarked',
          'Offline ticket wallet caching implemented',
          'Ticket purchase flow verified'
        ],
        uncompletedTasks: [
          'Low-light scanner latency optimization (Carried over from Week 2)',
          'Turnstile gateway stress testing (Pending hardware)'
        ],
        inProgressTasks: [
          'Race day push notification integration',
          'Multi-device responsive UI testing',
          'Account balance sync'
        ],
        futureTasks: [
          'Live racetrack turnstile pilot',
          'Security penetration review',
          'Production App Store submission'
        ],
        keyInsight: 'Phase 1 end date extended to 25.09.2026 (+15 days). 30 of 42 man-days consumed (71%). WebAPI integration in progress.',
        weeklyUrl: 'Incubator Weekly update/Grayhound 18.09.2026.html',
        scopeUrl: 'scope document/Greyhound_CEO_Scope_USP_WeeklyTheme.html'
      },
      {
        weekNumber: 2,
        weekLabel: 'Week 2',
        weekEnding: '11 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '35 Allocated',
        consumed: '30 Consumed (86%)',
        completedTasks: [
          'Deep link / App links for entitlement invitations (Android + iOS)',
          'Backend API written for invitation workflow',
          'Stabilize invite -> ticket -> checklist journey'
        ],
        uncompletedTasks: [
          'Turnstile scanner latency optimization'
        ],
        inProgressTasks: [
          'Complete remaining Phase 1 checklist integrations',
          'QA / UAT through extended end date 18.09.2026'
        ],
        futureTasks: [
          'Go-Live readiness checks',
          'Monitor live invite and deep-link behavior'
        ],
        keyInsight: 'Project end date extended to 18 Sep 2026 (+8 days). 30 of 35 man-days consumed (86%). Scope change added invitation links and checklist API.',
        weeklyUrl: 'Incubator Weekly update/Greyhound 11.09.2026.html',
        scopeUrl: 'scope document/Greyhound_CEO_Scope_USP_WeeklyTheme.html'
      },
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '4 Sep 2026',
        status: 'ON TRACK',
        statusClass: 'green',
        manDays: '13 Allocated',
        consumed: '10 Consumed (77%)',
        completedTasks: [
          'API wiring updates completed',
          'QR scan to ticket-add flow completed',
          'Response mapping improvements',
          'Polling & UX improvements completed'
        ],
        uncompletedTasks: [],
        inProgressTasks: [
          'End-to-end validation and stabilization',
          'UI/UX observation for real-world usage'
        ],
        futureTasks: [
          'Production SSL / HTTPS validation',
          'Final QA and release readiness checks'
        ],
        keyInsight: 'Sprint on schedule with 10 of 13 man-days consumed (77%). 0 days delay, target end date 10.9.2026.',
        weeklyUrl: 'Incubator Weekly update/greyhound 04.09.2026.html',
        scopeUrl: 'scope document/Greyhound_CEO_Scope_USP_WeeklyTheme.html'
      }
    ]
  },
  {
    id: 'onexso-hrms',
    icon: '👥',
    name: 'ONEXSO HRMS',
    company: 'UNICOM TIC INCUBATOR',
    release: 'Enterprise Release 1',
    targetReleaseDate: '20 Nov 2026',
    originalAllocation: 150,
    forecastTotal: 150,
    overBudget: false,
    leads: 'Thivaharan / Dapiyshanth',
    description: 'Comprehensive human resource management suite with employee directory, multi-tenant security, and leave tracking.',
    highlights: 'Authentication & Security, Leave & Attendance, Multi-tenant management, Shift scheduling.',
    resources: [
      {
        name: 'Thivaharan',
        role: 'Project Manager',
        allocation: '75 Man-Days',
        responsibility: 'Planning, coordination, risks, reporting, and client liaison.'
      },
      {
        name: 'Dapiyshanth',
        role: 'Team Lead',
        allocation: '75 Man-Days',
        responsibility: 'Solution configuration, development, and architecture.'
      },
      {
        name: 'Kajaatharan',
        role: 'Developer',
        allocation: '75 Man-Days',
        responsibility: 'Testing, quality assurance, and defect management.'
      },
      {
        name: 'Pirakeerthan',
        role: 'Developer',
        allocation: '75 Man-Days',
        responsibility: 'Technical design, development, integration, and mentoring.'
      }
    ],
    milestones: [
      { name: 'Multi-tenant Tenant Isolation', status: 'COMPLETED', position: 'Verified' },
      { name: 'Employee Directory', status: 'COMPLETED', position: 'Live' },
      { name: 'Leave Approval Workflow', status: 'IN PROGRESS', position: 'Testing' },
      { name: 'Payroll Export', status: 'TARGET', position: 'Scheduled' }
    ],
    risk: {
      issue: 'Shift scheduling overnight rollover edge cases',
      severity: 'MEDIUM',
      mitigation: 'Implement UTC normalized attendance window calculation'
    },
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 3,
        weekLabel: 'Week 3',
        weekEnding: '18 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '150 Days',
        consumed: '108 Consumed (72%)',
        completedTasks: [
          'Multi-tenant database migrations completed',
          'Role-based access control rules enforced',
          'Employee profile bulk upload verified'
        ],
        uncompletedTasks: [
          'Shift scheduling overnight rollover calculation (Carried over from Week 2)'
        ],
        inProgressTasks: [
          'Biometric clock-in integration',
          'Annual leave balance formula audit',
          'Departmental hierarchy view'
        ],
        futureTasks: [
          'Payroll export adapter',
          'Executive compensation report',
          'Pilot client onboarding'
        ],
        keyInsight: 'Core directory and authentication completed; complex shift schedule overnight calculations need final verification.',
        weeklyUrl: 'Incubator Weekly update/hrm 18.09.2026.html',
        scopeUrl: 'scope document/OneXso_CEO_Scope_USP_WeeklyTheme (3).html'
      },
      {
        weekNumber: 2,
        weekLabel: 'Week 2',
        weekEnding: '11 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '150 Days',
        consumed: '98 Consumed (65%)',
        completedTasks: [
          'Tenant onboarding wizard completed',
          'Department structure database schema verified'
        ],
        uncompletedTasks: [
          'Shift scheduling overnight rollover calculation'
        ],
        inProgressTasks: [
          'Role based permissions',
          'Bulk employee upload'
        ],
        futureTasks: [
          'Biometric attendance sync'
        ],
        keyInsight: 'Multi-tenant isolation verified; attendance rules in active development.',
        weeklyUrl: 'Incubator Weekly update/weekly-visibility-card-onexso-11.09.2026.html',
        scopeUrl: 'scope document/OneXso_CEO_Scope_USP_WeeklyTheme (3).html'
      },
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '4 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '150 Days',
        consumed: '88 Consumed (59%)',
        completedTasks: [
          'Architecture blueprint approved',
          'Postgres database cluster initialized'
        ],
        uncompletedTasks: [],
        inProgressTasks: [
          'Multi-tenant routing',
          'User directory backend'
        ],
        futureTasks: [
          'Tenant onboarding wizard'
        ],
        keyInsight: 'Initial framework setup progressing steadily.',
        weeklyUrl: 'Incubator Weekly update/weekly-project-visibility-card-onexso.pr.html',
        scopeUrl: 'scope document/OneXso_CEO_Scope_USP_WeeklyTheme (3).html'
      }
    ]
  },
  {
    id: 'oneverz-epos',
    icon: '💳',
    name: 'OneVerz EPOS',
    company: 'UNICOM TIC INCUBATOR',
    release: 'Release 1',
    targetReleaseDate: '10 Nov 2026',
    originalAllocation: 129,
    forecastTotal: 140,
    forecastOverrun: '+11 Man-Days (+8.5%)',
    overBudget: true,
    leads: 'Mathusan / Yapes',
    description: 'Cloud-enabled point-of-sale terminal software with offline mode, kitchen display, and multi-store inventory.',
    highlights: 'Order workflow, Payment terminal link, Offline queue sync, Inventory auto-decrement.',
    resources: [
      {
        name: 'Mathusan',
        role: 'Coordinator / Developer',
        allocation: '127 Man-Days',
        responsibility: 'Development, task management, coordination, risks, reporting, and E-commerce.'
      },
      {
        name: 'Yapes',
        role: 'Project Leader / Developer',
        allocation: '113 Man-Days',
        responsibility: 'Development, Super Admin, and Second Brain.'
      },
      {
        name: 'Tharmithan',
        role: 'Developer',
        allocation: '125 Man-Days',
        responsibility: 'Flutter App development and integration.'
      },
      {
        name: 'Nivethika',
        role: 'Developer',
        allocation: '44 Man-Days',
        responsibility: 'Product setup, tax management, and category configuration.'
      }
    ],
    milestones: [
      { name: 'Offline Order Queue', status: 'COMPLETED', position: 'Delivered' },
      { name: 'Kitchen Display Sync', status: 'IN PROGRESS', position: 'Testing' },
      { name: 'Payment Terminal Link', status: 'IN PROGRESS', position: 'Optimization' },
      { name: 'Hardware Certification', status: 'TARGET', position: 'Sprint 5' }
    ],
    risk: {
      issue: 'Payment terminal reconnect timeout on weak WiFi',
      severity: 'HIGH',
      mitigation: 'Implement exponential backoff reconnect daemon'
    },
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 3,
        weekLabel: 'Week 3',
        weekEnding: '18 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '129 Allocated',
        consumed: '118 Consumed (91%)',
        completedTasks: [
          'Offline order sync queue resilience verified',
          'Split bill payment calculation updated',
          'Receipt thermal printing layout adjusted'
        ],
        uncompletedTasks: [
          'Payment terminal EFT bridge reconnect timeout (Carried over from Week 2)'
        ],
        inProgressTasks: [
          'Kitchen Display System (KDS) order timer',
          'Cloud sync conflict resolution',
          'Store inventory auto-deduction engine'
        ],
        futureTasks: [
          'End-to-end POS hardware pilot',
          'Merchant portal reporting',
          'Multi-till stress test'
        ],
        keyInsight: 'Core billing and offline sync functional; payment terminal reconnect timeout under flaky WiFi is the primary risk.',
        weeklyUrl: 'Incubator Weekly update/oneverz 18.09.2026.html',
        scopeUrl: 'scope document/Oneverz.html'
      },
      {
        weekNumber: 2,
        weekLabel: 'Week 2',
        weekEnding: '11 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '129 Allocated',
        consumed: '111 Consumed',
        completedTasks: [
          'Fast-key product grid completed',
          'Barcode scanner input handler verified'
        ],
        uncompletedTasks: [
          'Payment terminal EFT bridge reconnect timeout'
        ],
        inProgressTasks: [
          'Split bill calculations',
          'Offline order sync queue'
        ],
        futureTasks: [
          'Kitchen display integration'
        ],
        keyInsight: 'Fast-key checkout UI complete; hardware terminal pairing being optimized.',
        weeklyUrl: 'Incubator Weekly update/One Verz.html',
        scopeUrl: 'scope document/Oneverz.html'
      },
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '4 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '129 Allocated',
        consumed: '95 Consumed',
        completedTasks: [
          'POS UI layout created',
          'SQLite offline database initialized'
        ],
        uncompletedTasks: [],
        inProgressTasks: [
          'Fast-key menu management',
          'Receipt printer driver'
        ],
        futureTasks: [
          'Payment terminal integration'
        ],
        keyInsight: 'Sprint kicked off with local terminal architecture setup.',
        weeklyUrl: 'Incubator Weekly update/One Verz Weekly Project Visibility Card 2 - Static.html',
        scopeUrl: 'scope document/Oneverz.html'
      }
    ]
  },
  {
    id: 'ticketing-venue',
    icon: '🎟️',
    name: 'Ticketing Venue Setup',
    company: 'UNICOM TIC INCUBATOR',
    release: 'Phase 1',
    targetReleaseDate: '15 Nov 2026',
    originalAllocation: 200,
    forecastTotal: 200,
    overBudget: false,
    leads: 'Venue & Ticketing Team',
    description: 'Interactive visual seating plan builder, tiered pricing engine, and ticket allocation portal for stadiums and theatres.',
    highlights: 'Venue designer canvas, Reserved seating algorithm, Tiered pricing, Gate barcode generation.',
    resources: [
      {
        name: 'Venue Engineering',
        role: 'Full Stack Developers',
        allocation: '200 Man-Days',
        responsibility: 'SVG interactive seating designer, tiered seat pricing, and gate entry validation.'
      }
    ],
    milestones: [
      { name: 'Interactive SVG Canvas', status: 'COMPLETED', position: 'Live' },
      { name: 'Tiered Seat Pricing Engine', status: 'COMPLETED', position: 'Verified' },
      { name: 'Large Venue Virtualization', status: 'IN PROGRESS', position: 'Optimizing' },
      { name: 'Gate Entry Turnstile Sync', status: 'TARGET', position: 'Phase 2' }
    ],
    risk: {
      issue: '10,000+ seat visual plan rendering performance on mobile browsers',
      severity: 'MEDIUM',
      mitigation: 'Implement viewport canvas rendering virtualization'
    },
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 3,
        weekLabel: 'Week 3',
        weekEnding: '18 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '200 Forecast',
        consumed: '95 Consumed (48%)',
        completedTasks: [
          'SVG interactive seating chart canvas rendered',
          'Seat reservation lock timeout implemented',
          'Pricing tier color codes added'
        ],
        uncompletedTasks: [
          'Large venue (10,000+ seat) rendering performance optimization (Carried over from Week 2)'
        ],
        inProgressTasks: [
          'Row and aisle numbering auto-generator',
          'Wheelchair accessible seat designation',
          'Gate entry routing logic'
        ],
        futureTasks: [
          '50,000 seat arena stress test',
          'Box office cashier terminal view',
          'Live event turnstile sync'
        ],
        keyInsight: 'Visual seating builder in active development; rendering 10k+ SVG nodes requires canvas virtualization.',
        weeklyUrl: 'Incubator Weekly update/ticketing_venue_setup_18.0.2026.html',
        scopeUrl: 'scope document/Venue_Layout_Scope_USP.html'
      },
      {
        weekNumber: 2,
        weekLabel: 'Week 2',
        weekEnding: '11 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '200 Forecast',
        consumed: '75 Consumed (38%)',
        completedTasks: [
          'Venue grid snap-to-fit designer implemented',
          'Tier pricing database schema approved'
        ],
        uncompletedTasks: [
          'Large venue rendering performance optimization'
        ],
        inProgressTasks: [
          'Interactive seat selection canvas',
          'Seat lock timeout service'
        ],
        futureTasks: [
          'Gate allocation logic'
        ],
        keyInsight: 'Floorplan designer functional; large stadium plans require viewport virtualization.',
        weeklyUrl: 'Incubator Weekly update/ticketing_venue_setup_11.09.2026.html',
        scopeUrl: 'scope document/Venue_Layout_Scope_USP.html'
      },
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '4 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '200 Forecast',
        consumed: '55 Consumed (28%)',
        completedTasks: [
          'Canvas technical specification approved',
          'Geometry rendering library benchmarked'
        ],
        uncompletedTasks: [],
        inProgressTasks: [
          'SVG designer canvas',
          'Section and block layout model'
        ],
        futureTasks: [
          'Interactive seat selection'
        ],
        keyInsight: 'Technical foundation established for scalable vector seating maps.',
        weeklyUrl: 'Incubator Weekly update/ticketing_venue_setup_weekly_visibility_card_updated_v13.html',
        scopeUrl: 'scope document/Venue_Layout_Scope_USP.html'
      }
    ]
  },
  {
    id: 'watercraft',
    icon: '🚤',
    name: 'Watercraft Storage Portal',
    company: 'UNICOM TIC INCUBATOR',
    release: 'Full Release',
    targetReleaseDate: '04 Sep 2026',
    originalAllocation: 120,
    forecastTotal: 120,
    overBudget: false,
    leads: 'Saif / Abitha',
    description: 'Marina and boatyard dry-stack storage management, customer reservation app, and boat launch scheduling.',
    highlights: 'Dock slip assignment, Launch requests, Customer billing, Maintenance work orders.',
    resources: [
      {
        name: 'Saif',
        role: 'Team Lead',
        allocation: '35 Man-Days',
        responsibility: 'Leadership, architecture, development, integration, and testing.'
      },
      {
        name: 'Abitha',
        role: 'Coordinator',
        allocation: '22 Man-Days',
        responsibility: 'Coordination, documentation, tracking, development, and testing support.'
      },
      {
        name: 'Kunasika',
        role: 'Developer',
        allocation: '22 Man-Days',
        responsibility: 'Frontend, backend, and testing.'
      },
      {
        name: 'Lavanya',
        role: 'Developer',
        allocation: '22 Man-Days',
        responsibility: 'Frontend, backend, and testing.'
      },
      {
        name: 'Natheesan',
        role: 'Developer',
        allocation: '19 Man-Days',
        responsibility: 'Frontend, backend, and testing.'
      }
    ],
    milestones: [
      { name: 'Slip Allocation Module', status: 'COMPLETED', position: 'Live' },
      { name: 'Boat Launch Queue Engine', status: 'COMPLETED', position: 'Live' },
      { name: 'Customer Invoicing', status: 'COMPLETED', position: 'Live' },
      { name: 'Commercial Handover', status: 'COMPLETED', position: 'Signoff' }
    ],
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '4 Sep 2026',
        status: 'COMPLETED',
        statusClass: 'blue',
        manDays: '120 Days',
        consumed: '120 Consumed (100%)',
        completedTasks: [
          'Complete slip management modules delivered',
          'Launch queue engine active in production',
          'Customer invoicing and billing gateway verified'
        ],
        uncompletedTasks: [],
        inProgressTasks: [
          'Maintenance SLA monitoring',
          'Final client operational handover'
        ],
        futureTasks: [
          'Annual support warranty coverage',
          'Phase 2 mobile app roadmap'
        ],
        keyInsight: 'Product fully completed on schedule and approved for commercial operations.',
        weeklyUrl: 'Incubator Weekly update/Watercraft_Visibility_Card_Final_Compact_BlackBackground.html',
        scopeUrl: 'scope document/watercraft.html'
      }
    ]
  },
  {
    id: 'nsw-sports',
    icon: '🏆',
    name: 'NSW Sports',
    company: 'UNICOM TIC INCUBATOR',
    release: 'UI Migration — Complete',
    targetReleaseDate: '18 Sep 2026',
    originalAllocation: 40,
    forecastTotal: 40,
    overBudget: false,
    leads: 'Saif / Abitha',
    description: 'Sports event and school camp booking management portal, program scheduling, and voucher redemption.',
    highlights: 'School Camp Booking Wizard, Programs & Activities, Voucher Management. Scope & USP: Update Soon.',
    resources: [
      {
        name: 'Saif',
        role: 'Team Lead',
        allocation: '0 Man-Days',
        responsibility: 'Leadership, architecture, development, integration, and testing.'
      },
      {
        name: 'Abitha',
        role: 'Coordinator',
        allocation: '5 Man-Days',
        responsibility: 'Coordination, documentation, tracking, development, and testing support.'
      },
      {
        name: 'Kunasika',
        role: 'Developer',
        allocation: '5 Man-Days',
        responsibility: 'Frontend, backend, integration, and testing.'
      },
      {
        name: 'Lavanya',
        role: 'Developer',
        allocation: '5 Man-Days',
        responsibility: 'Frontend, backend, integration, and testing.'
      },
      {
        name: 'Natheesan',
        role: 'Developer',
        allocation: '5 Man-Days',
        responsibility: 'Frontend, backend, integration, and testing.'
      }
    ],
    milestones: [
      { name: 'Camp Booking Wizard', status: 'COMPLETED', position: 'Live' },
      { name: 'Voucher Redemption Flow', status: 'COMPLETED', position: 'Live' },
      { name: 'Mobile Layout Polish', status: 'COMPLETED', position: 'Verified' },
      { name: 'Production Cutover', status: 'COMPLETED', position: 'Done' }
    ],
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 2,
        weekLabel: 'Week 2',
        weekEnding: '18 Sep 2026',
        status: 'ON TRACK',
        statusClass: 'green',
        manDays: '40 Hours',
        consumed: '40 Consumed (100%)',
        completedTasks: [
          'Booking wizard UI overhaul completed',
          'Active Kids voucher redemption flow tested',
          'Mobile responsive layout certified'
        ],
        uncompletedTasks: [],
        inProgressTasks: [
          'Final user acceptance testing',
          'Admin reporting dashboard polish'
        ],
        futureTasks: [
          'Production rollout',
          'Marketing launch alignment'
        ],
        keyInsight: 'UI migration phase successfully completed ahead of schedule with 100% test coverage.',
        weeklyUrl: 'Incubator Weekly update/NSW_18.09.2026.html',
        scopeUrl: 'scope document/nsw_sports_scope_usp.html'
      },
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '11 Sep 2026',
        status: 'ON TRACK',
        statusClass: 'green',
        manDays: '40 Hours',
        consumed: '28 Consumed (70%)',
        completedTasks: [
          'Camp booking wizard redesign drafted',
          'Design tokens aligned with NSW guidelines'
        ],
        uncompletedTasks: [],
        inProgressTasks: [
          'Active Kids voucher validation engine',
          'Mobile layout responsiveness'
        ],
        futureTasks: [
          'Final UAT signoff'
        ],
        keyInsight: 'UI modernization proceeding smoothly with strong stakeholder feedback.',
        weeklyUrl: 'Incubator Weekly update/nsw-1st-week-update.html',
        scopeUrl: 'scope document/nsw_sports_scope_usp.html'
      }
    ]
  },
  {
    id: 'marketing-team',
    icon: '📢',
    name: 'Marketing Team',
    company: 'UNICOM TIC INCUBATOR',
    release: 'Creative & Digital Campaigns',
    targetReleaseDate: '30 Oct 2026',
    originalAllocation: 30,
    forecastTotal: 30,
    overBudget: false,
    leads: 'Marketing Team',
    description: 'Multichannel digital marketing, branding, video production, and social media campaigns for incubator ventures.',
    highlights: 'Promotional videos, Brand identity kits, Social media reels, Investor pitch deck assets.',
    resources: [
      {
        name: 'Marketing Team',
        role: 'Creative & Digital Media Lead',
        allocation: '30 Man-Days',
        responsibility: 'Video editing, motion graphics, campaign posters, social distribution, and AI marketing research.'
      }
    ],
    milestones: [
      { name: 'Venture Showcase Videos', status: 'IN PROGRESS', position: '18 Delivered' },
      { name: 'Conference Collateral', status: 'COMPLETED', position: '3 Posters Approved' },
      { name: 'Social Media Launch', status: 'IN PROGRESS', position: 'Active' },
      { name: 'Investor Pitch Decks', status: 'TARGET', position: 'October' }
    ],
    selectedWeekIndex: 0,
    weeks: [
      {
        weekNumber: 2,
        weekLabel: 'Week 2',
        weekEnding: '20 Sep 2026',
        status: 'ON TRACK',
        statusClass: 'green',
        manDays: '22 Videos • 3 Posters',
        consumed: '18 Delivered (82%)',
        completedTasks: [
          '18 campaign video shorts produced',
          '3 conference posters approved',
          'Social media engagement analytics setup'
        ],
        uncompletedTasks: [
          '4 product demo video voiceovers pending final script signoff'
        ],
        inProgressTasks: [
          'Investor showcase presentation reel',
          'Venture profile brochures',
          'LinkedIn campaign optimization'
        ],
        futureTasks: [
          'Q4 Venture demo day promotional kit',
          'Media outreach package'
        ],
        keyInsight: 'Content production on track; 18 video assets delivered with high engagement on social channels.',
        weeklyUrl: 'Incubator Weekly update/20.09.2026 report.html',
        scopeUrl: 'scope document/marketing_team_scope_usp.html'
      },
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '15 Sep 2026',
        status: 'ON TRACK',
        statusClass: 'green',
        manDays: '15 Videos • 2 Posters',
        consumed: '10 Delivered (67%)',
        completedTasks: [
          'Brand identity guidelines established',
          '10 social media reels drafted'
        ],
        uncompletedTasks: [],
        inProgressTasks: [
          'Venture video production',
          'Conference posters design'
        ],
        futureTasks: [
          'Demo day video reel'
        ],
        keyInsight: 'Creative campaigns initialized with positive feedback on initial assets.',
        weeklyUrl: 'Incubator Weekly update/marketing_team last week 15.09.2026.html',
        scopeUrl: 'scope document/marketing_team_scope_usp.html'
      }
    ]
  }
];

// Cache version key - updated to immediately refresh layout on client browsers
const STORAGE_KEY = 'portal_projects_exec_v11_greyhound_pristine';

// Purge all legacy cache keys to prevent stale/broken data
try {
  [
    'portal_projects_camera_v1',
    'portal_projects_camera_v2',
    'portal_projects_scope_usp_v1',
    'portal_projects_sep1_week1_v1',
    'portal_projects_sep1_week1_v2',
    'portal_projects_v5_week1_exact',
    'portal_projects_v7_updated_cards',
    'portal_projects_v8_week2',
    'portal_projects_v9_week2',
    'portal_projects_v10_nsw_week2',
    'portal_projects_v11_nsw_scope_update',
    'portal_projects_v12_marketing_team',
    'portal_projects_v13_sep18_updates',
    'portal_projects_exec_v8_all_8',
    'portal_projects_v14_sep28_all_8',
    'portal_projects_exec_v8_compact',
    'portal_projects_exec_v9_team_positions',
    'portal_projects_exec_v10_stacked_teams'
  ].forEach(k => localStorage.removeItem(k));
} catch (e) {}

let PROJECTS = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');

if (!PROJECTS || !Array.isArray(PROJECTS) || PROJECTS.length < 8) {
  PROJECTS = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(PROJECTS));
} else {
  // Sync missing and updated properties from DEFAULT_PROJECTS while keeping user updates
  DEFAULT_PROJECTS.forEach(def => {
    const p = PROJECTS.find(item => item.id === def.id || (def.id === 'camera-module' && item.id === 'camera-module-onetix'));
    if (p) {
      p.id = def.id;
      p.release = def.release;
      p.leads = def.leads;
      p.targetReleaseDate = def.targetReleaseDate || p.targetReleaseDate;
      p.originalAllocation = def.originalAllocation || p.originalAllocation;
      p.forecastTotal = def.forecastTotal || p.forecastTotal;
      p.overBudget = (def.overBudget !== undefined) ? def.overBudget : p.overBudget;
      p.highlights = def.highlights;
      if (!p.icon) p.icon = def.icon;
      p.resources = JSON.parse(JSON.stringify(def.resources));
      p.milestones = JSON.parse(JSON.stringify(def.milestones));
      if (def.weeks.length > (p.weeks ? p.weeks.length : 0)) {
        p.weeks = JSON.parse(JSON.stringify(def.weeks));
        p.selectedWeekIndex = def.selectedWeekIndex || 0;
      }
    } else {
      PROJECTS.push(JSON.parse(JSON.stringify(def)));
    }
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(PROJECTS));
}

function saveProjects() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(PROJECTS));
}

let activeProject = null;
let currentTab = 'weekly'; // 'weekly' or 'scope'

// Gracefully parse numeric values from numbers or strings like '42 Allocated' without NaN
function parseManDays(val, fallback = 0) {
  if (typeof val === 'number' && !isNaN(val)) return val;
  if (!val) return fallback;
  const match = String(val).match(/\d+/);
  return match ? parseInt(match[0], 10) : fallback;
}

// Compute high-level metrics for compact cards & modal (Requirements 2 & 3)
function getProjectMetrics(p, curWeek) {
  const releaseDate = p.targetReleaseDate || curWeek.targetReleaseDate || '15 Oct 2026';
  
  // Allocated (Man-Days)
  const allocatedNum = parseManDays(p.originalAllocation || p.forecastTotal || curWeek.manDays, 88);
  const allocatedText = `${allocatedNum} Man-Days`;

  // Burnt (Man-Days)
  const burntNum = parseManDays(curWeek.consumed, 0);
  let burntText = '';
  if (typeof curWeek.consumed === 'string' && (curWeek.consumed.includes('%') || curWeek.consumed.includes('Video') || curWeek.consumed.includes('Logo') || curWeek.consumed.includes('Delivered'))) {
    burntText = curWeek.consumed;
  } else {
    burntText = `${burntNum} Man-Days`;
  }

  // Forecast Total
  const forecastTotalNum = parseManDays(p.forecastTotal, allocatedNum);
  let isDelay = false;
  let varianceText = '';
  let statusText = 'On Schedule';
  let statusClass = 'on-schedule';

  if (p.overBudget === true || (allocatedNum > 0 && burntNum > allocatedNum) || forecastTotalNum > allocatedNum) {
    isDelay = true;
    const diff = Math.max(forecastTotalNum - allocatedNum, burntNum > allocatedNum ? burntNum - allocatedNum : 0);
    varianceText = `+${diff} Man-Days (Delay)`;
    statusText = 'Delay';
    statusClass = 'delay';
  } else {
    const remaining = Math.max(0, (forecastTotalNum || allocatedNum) - burntNum);
    varianceText = `${remaining} Man-Days (On Schedule)`;
    statusText = 'On Schedule';
    statusClass = 'on-schedule';
  }

  return {
    releaseDate,
    allocatedNum,
    allocatedText,
    burntNum,
    burntText,
    forecastTotalNum,
    varianceText,
    statusText,
    statusClass,
    isDelay
  };
}

// Switch week for a specific project from the card dropdown
function changeProjectWeek(projectId, weekIndex) {
  if (weekIndex === 'upload') {
    openUploadModal(projectId);
    return;
  }

  const p = PROJECTS.find(item => item.id === projectId);
  if (!p) return;
  p.selectedWeekIndex = parseInt(weekIndex, 10);
  saveProjects();

  const searchVal = document.getElementById('projectSearch')?.value || '';
  const activeFilter = document.querySelector('.filter-btn.active')?.dataset.status || 'all';
  renderProjects(searchVal, activeFilter);

  const curW = p.weeks[p.selectedWeekIndex] || p.weeks[0];
  showPortalToast(`Switched ${p.name} to Week ${curW.weekNumber || 1} (${curW.weekEnding})`, 'info');
}

// Render Project Cards (Compact Executive Layout - Requirements 1, 2, 3)
function renderProjects(filterText = '', filterStatus = 'all') {
  const container = document.getElementById('projectsContainer');
  if (!container) return;
  container.innerHTML = '';

  const ontrackCount = PROJECTS.filter(p => (p.weeks[p.selectedWeekIndex || 0] || p.weeks[0]).status === 'ON TRACK').length;
  const atriskCount = PROJECTS.filter(p => (p.weeks[p.selectedWeekIndex || 0] || p.weeks[0]).status === 'AT RISK').length;
  const completedCount = PROJECTS.filter(p => (p.weeks[p.selectedWeekIndex || 0] || p.weeks[0]).status === 'COMPLETED').length;

  const ontrackBtn = document.querySelector('.filter-btn[data-status="ontrack"]');
  const atriskBtn = document.querySelector('.filter-btn[data-status="atrisk"]');
  const completedBtn = document.querySelector('.filter-btn[data-status="completed"]');
  const allBtn = document.querySelector('.filter-btn[data-status="all"]');

  if (allBtn) allBtn.innerText = `All Projects (${PROJECTS.length})`;
  if (ontrackBtn) ontrackBtn.innerText = `On Track (${ontrackCount})`;
  if (atriskBtn) atriskBtn.innerText = `At Risk (${atriskCount})`;
  if (completedBtn) completedBtn.innerText = `Completed (${completedCount})`;

  const totalProjectsStat = document.getElementById('totalProjectsStat');
  const onTrackStat = document.getElementById('onTrackStat');
  const totalDocsStat = document.getElementById('totalDocsStat');
  if (totalProjectsStat) totalProjectsStat.innerText = PROJECTS.length;
  if (onTrackStat) onTrackStat.innerText = ontrackCount;
  if (totalDocsStat) totalDocsStat.innerText = `${PROJECTS.length} Documents`;

  const filtered = PROJECTS.filter(p => {
    const curWeek = p.weeks[p.selectedWeekIndex || 0] || p.weeks[0];
    const matchesText = p.name.toLowerCase().includes(filterText.toLowerCase()) ||
                        (p.description && p.description.toLowerCase().includes(filterText.toLowerCase())) ||
                        (p.highlights && p.highlights.toLowerCase().includes(filterText.toLowerCase()));
    const matchesStatus = (filterStatus === 'all') ||
                          (filterStatus === 'ontrack' && curWeek.status === 'ON TRACK') ||
                          (filterStatus === 'atrisk' && curWeek.status === 'AT RISK') ||
                          (filterStatus === 'completed' && curWeek.status === 'COMPLETED');
    return matchesText && matchesStatus;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:#64748b; background:#fff; border-radius:14px; border:1px dashed #cbd5e1;">
        <svg style="width:48px;height:48px;margin:0 auto 12px;opacity:0.6;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <p style="font-size:16px; font-weight:700; color:#0f172a;">No matching projects found</p>
        <p style="font-size:13px; margin-top:4px;">Try adjusting your search query or filter status.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(p => {
    const activeIndex = p.selectedWeekIndex || 0;
    const curWeek = p.weeks[activeIndex] || p.weeks[0];
    const metrics = getProjectMetrics(p, curWeek);

    // Week selector options
    const weekOptions = p.weeks.map((w, idx) => `
      <option value="${idx}" ${idx === activeIndex ? 'selected' : ''}>
        Week ${w.weekNumber || 1} (${w.weekEnding})${idx === 0 ? ' — Latest Week' : ''}
      </option>
    `).join('') + `<option value="upload">+ Upload Next Week...</option>`;

    // Team members formatted (stacked line by line)
    const teamMembersListHtml = (p.resources && p.resources.length > 0)
      ? p.resources.map((r, i) => `
          <div class="team-member-row">
            <strong>${r.name}</strong> (${r.role} &bull; ${r.allocation})${i < p.resources.length - 1 ? ',' : ''}
          </div>
        `).join('')
      : `<div class="team-member-row"><strong>${p.leads || 'Team Lead'}</strong> (${metrics.allocatedText})</div>`;

    // Backlog tasks summary & indicator
    const backlogTasks = curWeek.uncompletedTasks || [];
    const hasBacklog = backlogTasks.length > 0;
    const backlogJoined = backlogTasks.map(t => t.replace(/\s*\(Carried over.*\)/i, '').replace(/\s*\(Pending.*\)/i, '')).join(' &bull; ');

    const card = document.createElement('article');
    card.className = 'exec-card compact-card';
    card.dataset.projectId = p.id;
    card.innerHTML = `
      <!-- Top Header matching Image 1 -->
      <div class="card-header-v2">
        <div class="card-header-top">
          <div class="card-icon-box">${p.icon || '📷'}</div>
          <div class="card-header-info">
            <div class="card-title-line">
              <h3 class="card-project-name">${p.name}</h3>
              <span class="company-pill">${p.company || 'UNICOM TIC INCUBATOR'}</span>
            </div>
            <div class="card-sub-line">
              <span>${p.release}</span> &bull; 
              <span><strong>${metrics.burntNum} Man-Days</strong> Consumed</span> &bull; 
              <span>${p.originalPlanDates || '3 Jul 2026 – 2 Sep 2026'}</span>
            </div>
          </div>
        </div>

        <!-- Centered Status Badge (Image 1) -->
        <div class="card-status-center">
          <span class="badge-status-pill ${curWeek.statusClass || 'green'}">
            <span class="dot"></span> ${curWeek.status || 'ON TRACK'}
          </span>
        </div>

        <!-- Release Date & Extension Box (Image 1) -->
        <div class="card-release-box">
          <span class="release-text">🎯 Release Date: <strong>${metrics.releaseDate}</strong></span>
          ${p.forecastExtension ? `<span class="extension-pill">${p.forecastExtension}</span>` : ''}
        </div>
      </div>

      <!-- Week Selector Row & Effort Line (Image 1) -->
      <div class="card-week-section">
        <div class="week-select-row">
          <span class="week-label">
            <svg style="width:13px;height:13px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            WEEK:
          </span>
          <select class="week-dropdown-v2" onchange="changeProjectWeek('${p.id}', this.value)" title="Choose reporting week">
            ${weekOptions}
          </select>
        </div>
        <div class="effort-metrics-line">
          <span class="effort-main"><strong>${metrics.burntNum}</strong>/${metrics.forecastTotalNum} MAN-DAYS</span>
          <span class="effort-sep">|</span>
          <span class="effort-variance ${metrics.isDelay ? 'text-danger' : 'text-success'}">
            <strong>${metrics.varianceText}</strong>
          </span>
          <span class="effort-sep">|</span>
          <span class="effort-release">RELEASE: <strong>${metrics.releaseDate}</strong></span>
        </div>
      </div>

      <!-- Team Line (Image 1: Stacked line by line) -->
      <div class="card-team-box">
        <div class="team-header-tag">
          <span class="team-icon">👥</span>
          <span class="team-label">TEAM:</span>
        </div>
        <div class="team-members-list">
          ${teamMembersListHtml}
        </div>
      </div>

      <!-- Key Insight Box (Image 1) -->
      ${curWeek.keyInsight ? `
        <div class="card-insight-box">
          <span class="insight-icon">💡</span>
          <div class="insight-content">
            <strong>Key Insight:</strong> ${curWeek.keyInsight}
          </div>
        </div>
      ` : ''}

      <!-- Backlog Box (Image 1: Red border & 3 (INCOMPLETE) solid badge) -->
      ${hasBacklog ? `
        <div class="card-backlog-box" onclick="openWorkstreamsModal('${p.id}')" title="Click to view full workstreams popup">
          <div class="backlog-left">
            <span class="backlog-alert-icon">⚠️</span>
            <span class="backlog-text"><strong>Backlog:</strong> ${backlogJoined}</span>
          </div>
          <span class="badge-incomplete-solid">${backlogTasks.length} (INCOMPLETE)</span>
        </div>
      ` : ''}

      <!-- View Full Workstreams Trigger (Image 1: Dashed border) -->
      <div class="workstreams-trigger-row">
        <button class="btn-workstreams-trigger" onclick="openWorkstreamsModal('${p.id}')">
          <svg style="width:13px;height:13px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          <span>View Full Workstreams &amp; Milestones (Popup ↗)</span>
        </button>
      </div>

      <!-- Action Buttons Bar (Image 1) -->
      <div class="card-footer-buttons">
        <div class="footer-left-buttons">
          <button class="btn-action-primary" onclick="openProjectDetail('${p.id}')">
            <svg style="width:13px;height:13px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            <span>Open Project</span>
          </button>
          <button class="btn-action-secondary" onclick="openViewer('${p.id}', 'weekly')">
            <svg style="width:13px;height:13px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
            <span>Weekly Report (W${curWeek.weekNumber || 1})</span>
          </button>
          <button class="btn-action-secondary" onclick="openViewer('${p.id}', 'scope')">
            <svg style="width:13px;height:13px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            <span>Scope &amp; USP</span>
          </button>
        </div>
        <div class="footer-right-buttons">
          <button class="btn-export-quick" onclick="quickExportJpg('${p.id}', 'weekly')" title="Export Week Report as high-resolution JPG">
            <svg style="width:13px;height:13px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span>Export JPG</span>
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// ==========================================================================
// FULL-SCREEN / WIDE POPUP MODAL FOR WORKSTREAMS (Requirement 4)
// ==========================================================================
let activeWsProject = null;

function openWorkstreamsModal(projectId) {
  activeWsProject = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
  if (!activeWsProject) return;

  const modal = document.getElementById('workstreamsModal');
  const titleEl = document.getElementById('wsModalTitle');
  const breadcrumbEl = document.getElementById('wsModalProjectBreadcrumb');
  const weekSelect = document.getElementById('wsModalWeekSelect');

  if (breadcrumbEl) breadcrumbEl.innerText = activeWsProject.name;
  if (titleEl) titleEl.innerText = `${activeWsProject.name} — Workstreams & Governance Breakdown`;

  if (weekSelect) {
    weekSelect.innerHTML = activeWsProject.weeks.map((w, idx) => `
      <option value="${idx}" ${idx === (activeWsProject.selectedWeekIndex || 0) ? 'selected' : ''}>
        Week ${w.weekNumber || 1} (${w.weekEnding})
      </option>
    `).join('');
  }

  renderWorkstreamsModalContent();

  if (modal) modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
window.openWorkstreamsModal = openWorkstreamsModal;

function closeWorkstreamsModal() {
  const modal = document.getElementById('workstreamsModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = 'auto';
  activeWsProject = null;
}
window.closeWorkstreamsModal = closeWorkstreamsModal;

function changeWorkstreamsWeek(weekIndex) {
  if (!activeWsProject) return;
  activeWsProject.selectedWeekIndex = parseInt(weekIndex, 10);
  saveProjects();
  renderWorkstreamsModalContent();
  renderProjects();
}
window.changeWorkstreamsWeek = changeWorkstreamsWeek;

function renderWorkstreamsModalContent() {
  const modalContent = document.querySelector('#workstreamsModal .modal-content');
  if (!modalContent || !activeWsProject) return;

  const p = activeWsProject;
  const curWeek = p.weeks[p.selectedWeekIndex || 0] || p.weeks[0];
  const metrics = getProjectMetrics(p, curWeek);

  const weekOptions = p.weeks.map((w, idx) => `
    <option value="${idx}" ${idx === (p.selectedWeekIndex || 0) ? 'selected' : ''}>
      Week ${w.weekNumber || 1} (${w.weekEnding})
    </option>
  `).join('');

  // Tasks lists
  const completedTasks = curWeek.completedTasks || [];
  const backlogTasks = curWeek.uncompletedTasks || [];
  const inProgressTasks = curWeek.inProgressTasks || [];
  const futureTasks = curWeek.futureTasks || [];
  const hasBacklog = backlogTasks.length > 0;

  // Team members with position (role) & allocation
  const teamMembersWithPosition = (p.resources && p.resources.length > 0)
    ? p.resources.map(r => `${r.name} (${r.role ? r.role + ' • ' : ''}${r.allocation})`).join(', ')
    : `${p.leads || 'Team Lead'} (${metrics.allocatedText})`;

  // Milestones list
  const milestonesList = p.milestones || [
    { name: 'Core Architecture', status: 'COMPLETED', position: 'Delivered' },
    { name: 'Sprint Feature Workstream', status: 'IN PROGRESS', position: 'Active' },
    { name: 'Validation & Testing', status: 'TARGET', position: 'Pending' }
  ];

  modalContent.innerHTML = `
    <!-- Top Bar (Image 2) -->
    <div class="ws-modal-top-bar">
      <div class="ws-modal-top-left">
        <button class="btn-back-pill" onclick="closeWorkstreamsModal()" title="Close popup (Esc)">
          <svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
          <span>← Back</span>
        </button>
        <div class="ws-modal-title-group">
          <div class="ws-modal-breadcrumb">
            <strong>${p.name}</strong> / <span>Workstreams &amp; Milestones Breakdown</span>
          </div>
          <h2 class="ws-modal-heading">${p.name} — Workstreams &amp; Governance Breakdown</h2>
        </div>
      </div>
      <div class="ws-modal-top-right">
        <div style="display:flex; align-items:center; gap:6px;">
          <span style="font-size:11px; font-weight:800; color:#0891b2; text-transform:uppercase;">📅 WEEK:</span>
          <select id="wsModalWeekSelect" class="week-dropdown-v2" style="font-size:12px; padding:4px 8px;" onchange="changeWorkstreamsWeek(this.value)">
            ${weekOptions}
          </select>
        </div>
        <button class="btn-export-blue" onclick="exportWorkstreamsJpg()">
          <svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <span>Export JPG</span>
        </button>
        <button class="close-btn" onclick="closeWorkstreamsModal()" style="font-size:18px; color:#64748b; background:transparent; border:none; cursor:pointer; padding:4px 8px;">✕</button>
      </div>
    </div>

    <!-- Modal Body (Image 2) -->
    <div id="wsModalBody" style="padding: 20px; overflow-y: auto; background: #f8fafc; flex: 1;">
      <div class="ws-modal-container">
        
        <!-- Summary Card (Image 2) -->
        <div class="ws-summary-card">
          <div>
            <span class="badge-status-pill ${curWeek.statusClass || 'green'}">
              <span class="dot"></span> ${curWeek.status || 'ON TRACK'}
            </span>
          </div>
          <div>
            Target Release: <strong>${metrics.releaseDate}</strong>
            ${p.forecastExtension ? `<span class="extension-pill" style="margin-left:6px;">${p.forecastExtension}</span>` : ''}
          </div>
          <div>
            Effort: <strong>${metrics.burntNum} / ${metrics.forecastTotalNum} Man-Days</strong>
          </div>
          <div>
            Variance: <strong style="color:${metrics.isDelay ? '#dc2626' : '#16a34a'};">${metrics.varianceText}</strong>
          </div>
          <div class="ws-team-col">
            <span style="font-weight:700; color:#1e293b; display:inline-flex; align-items:center; gap:4px; margin-top:1px;">👥 Team:</span>
            <div class="ws-team-list">
              ${(p.resources && p.resources.length > 0)
                ? p.resources.map((r, i) => `
                    <div class="ws-team-row">
                      <strong>${r.name}</strong> (${r.role ? r.role + ' &bull; ' : ''}${r.allocation})${i < p.resources.length - 1 ? ',' : ''}
                    </div>
                  `).join('')
                : `<div class="ws-team-row"><strong>${p.leads || 'Team Lead'}</strong> (${metrics.allocatedText})</div>`}
            </div>
          </div>
        </div>

        <!-- Executive Key Insight (Week X) Box (Image 2) -->
        ${curWeek.keyInsight ? `
          <div class="ws-insight-banner">
            <span style="font-size:16px; flex-shrink:0;">💡</span>
            <div>
              <strong style="color:#166534; font-size:13px;">Executive Key Insight (Week ${curWeek.weekNumber || 1}):</strong>
              <p style="margin:2px 0 0 0; color:#14532d; font-size:12.5px;">${curWeek.keyInsight}</p>
            </div>
          </div>
        ` : ''}

        <!-- Critical CEO Tracking Banner (Image 2) -->
        ${hasBacklog ? `
          <div class="ws-ceo-tracking-banner">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:16px;">⚠️</span>
              <span>Critical CEO Tracking: ${backlogTasks.length} backlog task(s) from past week were NOT completed and have rolled over!</span>
            </div>
            <span class="badge-incomplete-solid">${backlogTasks.length} (INCOMPLETE)</span>
          </div>
        ` : ''}

        <!-- 4-Columns Grid (Image 2) -->
        <div class="ws-grid-4cols">
          <!-- Col 1: Completed -->
          <div class="ws-col-card col-completed">
            <div class="ws-col-header">
              <span>✓ COMPLETED (${completedTasks.length})</span>
              <span class="ws-count-badge">${completedTasks.length}</span>
            </div>
            <ul class="ws-items-list">
              ${completedTasks.length > 0 ? completedTasks.map(t => `
                <li class="ws-item-row">
                  <span class="icon-check">✓</span>
                  <span>${t}</span>
                </li>
              `).join('') : '<li class="ws-item-row" style="color:#94a3b8;">No tasks completed</li>'}
            </ul>
          </div>

          <!-- Col 2: Backlog (Red Column matching Image 2) -->
          <div class="ws-col-card col-backlog">
            <div class="ws-col-header">
              <span>🚫 BACKLOG</span>
              <span class="badge-incomplete-solid">${backlogTasks.length} (INCOMPLETE)</span>
            </div>
            <div style="display:flex; flex-direction:column; gap:8px;">
              ${backlogTasks.length > 0 ? backlogTasks.map(t => `
                <div class="backlog-inner-item">
                  <span class="icon-cross">🚫</span>
                  <span>${t}</span>
                </div>
              `).join('') : '<div style="color:#94a3b8; font-size:12px; padding:6px;">No backlog items</div>'}
            </div>
          </div>

          <!-- Col 3: In Progress -->
          <div class="ws-col-card col-inprogress">
            <div class="ws-col-header">
              <span>&gt; IN PROGRESS (${inProgressTasks.length})</span>
              <span class="ws-count-badge">${inProgressTasks.length}</span>
            </div>
            <ul class="ws-items-list">
              ${inProgressTasks.length > 0 ? inProgressTasks.map(t => `
                <li class="ws-item-row">
                  <span class="icon-arrow">&gt;</span>
                  <span>${t}</span>
                </li>
              `).join('') : '<li class="ws-item-row" style="color:#94a3b8;">Review ongoing</li>'}
            </ul>
          </div>

          <!-- Col 4: Future Next -->
          <div class="ws-col-card col-future">
            <div class="ws-col-header">
              <span>o FUTURE NEXT (${futureTasks.length})</span>
              <span class="ws-count-badge">${futureTasks.length}</span>
            </div>
            <ul class="ws-items-list">
              ${futureTasks.length > 0 ? futureTasks.map(t => `
                <li class="ws-item-row">
                  <span class="icon-circle">o</span>
                  <span>${t}</span>
                </li>
              `).join('') : '<li class="ws-item-row" style="color:#94a3b8;">Next sprint planning</li>'}
            </ul>
          </div>
        </div>

        <!-- Baseline Milestones & Governance (Image 2) -->
        <div class="ws-milestones-card">
          <div class="ws-milestones-title">
            <span>🏆 BASELINE MILESTONES &amp; GOVERNANCE</span>
          </div>
          <div class="ws-milestones-row">
            <strong style="font-size:12px; color:#475569;">MILESTONES:</strong>
            ${milestonesList.map(m => `
              <span class="milestone-badge ${m.status === 'COMPLETED' ? 'done' : 'progress'}">
                ${m.status === 'COMPLETED' ? '✓' : '⌛'} ${m.name}: <strong>${m.position || m.status}</strong>
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Key Attention / Risk (Image 2) -->
        ${p.risk ? `
          <div class="ws-risk-banner">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:16px;">⚠️</span>
              <span><strong>Key Attention:</strong> ${p.risk.issue} &bull; <em>${p.risk.mitigation}</em></span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="risk-level-tag">${p.risk.severity}</span>
              <span class="risk-escalation-tag">✓ Escalation: ${p.escalation || 'No critical escalation identified.'}</span>
            </div>
          </div>
        ` : ''}

      </div>
    </div>
  `;
}

// Export Workstreams Modal view as JPG
function exportWorkstreamsJpg() {
  const target = document.getElementById('wsModalBody');
  if (!target || typeof html2canvas !== 'function') {
    showPortalToast('Exporter not ready.', 'warning');
    return;
  }
  showPortalToast('Rendering Workstreams JPG...', 'loading');
  html2canvas(target, {
    scale: 2,
    useCORS: true,
    backgroundColor: '#f8fafc'
  }).then(canvas => {
    const link = document.createElement('a');
    const safeName = (activeWsProject?.name || 'Project').replace(/[^a-zA-Z0-9]/g, '_');
    link.download = `${safeName}_Workstreams_Breakdown.jpg`;
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    link.click();
    showPortalToast('✓ Workstreams JPG exported successfully!', 'success');
  }).catch(err => {
    console.error('Workstreams export error:', err);
    showPortalToast('Export failed.', 'error');
  });
}
window.exportWorkstreamsJpg = exportWorkstreamsJpg;

// ==========================================================================
// VIEWER MODAL & EMBEDDED IFRAME ENGINE (Scope Docs & Weekly Cards)
// ==========================================================================
function openViewer(projectId, tab = 'weekly') {
  const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
  if (!project) return;

  activeProject = project;
  currentTab = tab;

  const titleEl = document.getElementById('modalProjectTitle');
  const breadcrumbEl = document.getElementById('modalProjectBreadcrumb');
  if (titleEl) titleEl.innerText = project.name;
  if (breadcrumbEl) breadcrumbEl.innerText = project.name;

  const weekSelect = document.getElementById('modalWeekSelect');
  if (weekSelect) {
    weekSelect.innerHTML = project.weeks.map((w, idx) => `
      <option value="${idx}" ${idx === (project.selectedWeekIndex || 0) ? 'selected' : ''}>
        ${w.weekLabel || ('Week ' + (w.weekNumber || 1))} (${w.weekEnding})
      </option>
    `).join('') + `<option value="upload">+ Upload Next Week...</option>`;
  }

  updateModalTabs();
  loadIframe();

  const modal = document.getElementById('viewerModal');
  if (modal) modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function changeModalWeek(weekIndex) {
  if (weekIndex === 'upload') {
    openUploadModal(activeProject ? activeProject.id : '');
    return;
  }
  if (!activeProject) return;
  activeProject.selectedWeekIndex = parseInt(weekIndex, 10);
  saveProjects();
  loadIframe();
  renderProjects();
}

function switchTab(tab) {
  currentTab = tab;
  updateModalTabs();
  loadIframe();
}

function updateModalTabs() {
  const weeklyTab = document.getElementById('tabWeekly');
  const scopeTab = document.getElementById('tabScope');
  if (currentTab === 'weekly') {
    if (weeklyTab) weeklyTab.classList.add('active');
    if (scopeTab) scopeTab.classList.remove('active');
  } else {
    if (weeklyTab) weeklyTab.classList.remove('active');
    if (scopeTab) scopeTab.classList.add('active');
  }
}

function ensureExporterInFrame(frame) {
  try {
    const doc = frame.contentDocument || frame.contentWindow.document;
    if (!doc || doc.getElementById('exporter-script')) return;

    if (!doc.querySelector('script[src*="html2canvas"]')) {
      const h2c = doc.createElement('script');
      h2c.src = '../assets/js/html2canvas.min.js';
      doc.body.appendChild(h2c);
    }

    const exp = doc.createElement('script');
    exp.id = 'exporter-script';
    exp.src = '../assets/js/exporter.js';
    doc.body.appendChild(exp);
  } catch (e) {}
}

function loadIframe() {
  const frame = document.getElementById('viewerFrame');
  if (!frame || !activeProject) return;

  const curWeek = activeProject.weeks[activeProject.selectedWeekIndex || 0] || activeProject.weeks[0];
  const targetUrl = (currentTab === 'weekly') ? curWeek.weeklyUrl : curWeek.scopeUrl;

  frame.src = targetUrl;
  frame.onload = () => {
    ensureExporterInFrame(frame);
  };
}

function closeViewer() {
  const modal = document.getElementById('viewerModal');
  if (modal) modal.classList.remove('active');
  const frame = document.getElementById('viewerFrame');
  if (frame) frame.src = 'about:blank';
  document.body.style.overflow = 'auto';
  activeProject = null;
}

// 1-Click High-Res JPG Exporter
function captureDocumentToJpg(frame, projectName, docType, onComplete) {
  try {
    const doc = frame.contentDocument || frame.contentWindow.document;
    if (!doc) {
      if (onComplete) onComplete(false, 'Cannot access iframe document');
      return;
    }

    const weeklyCard = doc.querySelector('.card') || doc.querySelector('.visibility-card') || doc.querySelector('.report-container');
    const scopeCard = doc.querySelector('.scope-card') || doc.querySelector('.scope-container');
    const targetElement = (docType === 'scope') 
      ? (scopeCard || doc.querySelector('.card') || doc.body)
      : (weeklyCard || doc.body);

    const safeProjectName = projectName.replace(/[^a-zA-Z0-9]/g, '_');
    const filename = `${safeProjectName}_${docType.toUpperCase()}_Export.jpg`;

    const runCapture = () => {
      const h2c = frame.contentWindow.html2canvas || window.html2canvas;
      if (typeof h2c !== 'function') {
        if (onComplete) onComplete(false, 'html2canvas engine not loaded');
        return;
      }

      h2c(targetElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#0a0d14',
        logging: false
      }).then(canvas => {
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/jpeg', 0.95);
        link.click();
        if (onComplete) onComplete(true, filename);
      }).catch(err => {
        if (onComplete) onComplete(false, err.message);
      });
    };

    if (frame.contentWindow.html2canvas || window.html2canvas) {
      runCapture();
    } else {
      const script = doc.createElement('script');
      script.src = '../assets/js/html2canvas.min.js';
      script.onload = runCapture;
      script.onerror = () => {
        if (onComplete) onComplete(false, 'Failed to load html2canvas library');
      };
      doc.head.appendChild(script);
    }
  } catch (err) {
    if (onComplete) onComplete(false, err.message);
  }
}

function triggerViewerExport() {
  const frame = document.getElementById('viewerFrame');
  if (!frame || !activeProject) return;
  showPortalToast('Rendering high-resolution 2x JPG...', 'loading');
  captureDocumentToJpg(frame, activeProject.name, currentTab, (success, msg) => {
    if (success) showPortalToast(`✓ Successfully saved ${msg}!`, 'success');
    else showPortalToast(`Export failed: ${msg}`, 'error');
  });
}

function triggerViewerPrint() {
  const frame = document.getElementById('viewerFrame');
  if (frame && frame.contentWindow) frame.contentWindow.print();
}

function openInNewTab() {
  if (!activeProject) return;
  const curWeek = activeProject.weeks[activeProject.selectedWeekIndex || 0] || activeProject.weeks[0];
  const url = (currentTab === 'weekly') ? curWeek.weeklyUrl : curWeek.scopeUrl;
  window.open(url, '_blank');
}

// Dedicated In-Page Project View
function openProjectDetail(projectId) {
  const p = PROJECTS.find(item => item.id === projectId) || PROJECTS[0];
  if (!p) return;

  activeProject = p;
  currentTab = 'weekly';

  const container = document.getElementById('projectsContainer');
  const controls = document.querySelector('.control-bar');
  const stats = document.querySelector('.stats-grid');
  const detail = document.getElementById('projectDetailSection');

  if (container) container.style.display = 'none';
  if (controls) controls.style.display = 'none';
  if (stats) stats.style.display = 'none';
  if (detail) detail.style.display = 'block';

  document.getElementById('detailTitle').innerText = p.name;
  document.getElementById('detailBreadcrumbProject').innerText = p.name;

  const weekSelect = document.getElementById('detailWeekSelect');
  if (weekSelect) {
    weekSelect.innerHTML = p.weeks.map((w, idx) => `
      <option value="${idx}" ${idx === (p.selectedWeekIndex || 0) ? 'selected' : ''}>
        ${w.weekLabel || ('Week ' + (w.weekNumber || 1))} (${w.weekEnding})
      </option>
    `).join('') + `<option value="upload">+ Upload Next Week...</option>`;
  }

  updateDetailTabs();
  loadDetailFrame();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeProjectDetail() {
  const container = document.getElementById('projectsContainer');
  const controls = document.querySelector('.control-bar');
  const stats = document.querySelector('.stats-grid');
  const detail = document.getElementById('projectDetailSection');

  if (container) container.style.display = 'grid';
  if (controls) controls.style.display = 'flex';
  if (stats) stats.style.display = 'grid';
  if (detail) detail.style.display = 'none';

  const frame = document.getElementById('detailFrame');
  if (frame) frame.src = 'about:blank';
  activeProject = null;
}

function changeDetailWeek(weekIndex) {
  if (weekIndex === 'upload') {
    openUploadModal(activeProject ? activeProject.id : '');
    return;
  }
  if (!activeProject) return;
  activeProject.selectedWeekIndex = parseInt(weekIndex, 10);
  saveProjects();
  loadDetailFrame();
  renderProjects();
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
    if (weeklyTab) weeklyTab.classList.remove('active');
    if (scopeTab) scopeTab.classList.add('active');
  }
}

function loadDetailFrame() {
  const frame = document.getElementById('detailFrame');
  if (!frame || !activeProject) return;
  const curWeek = activeProject.weeks[activeProject.selectedWeekIndex || 0] || activeProject.weeks[0];
  const targetUrl = (currentTab === 'weekly') ? curWeek.weeklyUrl : curWeek.scopeUrl;
  frame.src = targetUrl;
}

function triggerDetailExport() {
  const frame = document.getElementById('detailFrame');
  if (!frame || !activeProject) return;
  showPortalToast('Rendering high-resolution 2x JPG...', 'loading');
  captureDocumentToJpg(frame, activeProject.name, currentTab, (success, msg) => {
    if (success) showPortalToast(`✓ Successfully saved ${msg}!`, 'success');
    else showPortalToast(`Export failed: ${msg}`, 'error');
  });
}

function openDetailInNewTab() {
  if (!activeProject) return;
  const curWeek = activeProject.weeks[activeProject.selectedWeekIndex || 0] || activeProject.weeks[0];
  const url = (currentTab === 'weekly') ? curWeek.weeklyUrl : curWeek.scopeUrl;
  window.open(url, '_blank');
}

// 1-Click Quick Export from Dashboard
function quickExportJpg(projectId, docType) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;
  const curWeek = project.weeks[project.selectedWeekIndex || 0] || project.weeks[0];
  const url = (docType === 'scope') ? curWeek.scopeUrl : curWeek.weeklyUrl;

  showPortalToast(`Preparing high-resolution JPG for ${project.name}...`, 'loading');

  const tempFrame = document.createElement('iframe');
  tempFrame.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1200px;height:1400px;visibility:hidden;';
  tempFrame.src = url;
  document.body.appendChild(tempFrame);

  tempFrame.onload = () => {
    setTimeout(() => {
      captureDocumentToJpg(tempFrame, project.name, docType, (success, msg) => {
        document.body.removeChild(tempFrame);
        if (success) showPortalToast(`✓ Successfully exported ${msg}!`, 'success');
        else showPortalToast(`Export error: ${msg}`, 'error');
      });
    }, 600);
  };
}

// Modals: Add Week & Upload Document
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

  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const baselineWeek = project.weeks[0];
  const statusClass = (weekStatus === 'ON TRACK') ? 'green' : (weekStatus === 'AT RISK' ? 'amber' : 'red');

  const newWeekObj = {
    weekNumber: weekNum,
    weekLabel: `Week ${weekNum}`,
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
  showPortalToast(`✓ Created Week ${weekNum} report for ${project.name}!`, 'success');
}

function openUploadModal(projectId = '', defaultType = 'scope') {
  const effectiveProjectId = projectId || (PROJECTS[0] ? PROJECTS[0].id : 'camera-module');
  const pSelect = document.getElementById('uploadProject');
  if (pSelect) {
    pSelect.innerHTML = PROJECTS.map(p => `
      <option value="${p.id}" ${p.id === effectiveProjectId ? 'selected' : ''}>${p.name}</option>
    `).join('');
  }

  const typeSelect = document.getElementById('uploadType');
  if (typeSelect) typeSelect.value = defaultType;

  const curProj = PROJECTS.find(p => p.id === effectiveProjectId) || PROJECTS[0];
  const nextWeekNum = (curProj && curProj.weeks && curProj.weeks[0]) ? (curProj.weeks[0].weekNumber + 1) : 4;
  const weekNumInput = document.getElementById('uploadWeekNumber');
  if (weekNumInput) weekNumInput.value = nextWeekNum;

  const fileInput = document.getElementById('uploadFile');
  if (fileInput) fileInput.value = '';

  const modal = document.getElementById('uploadModal');
  if (modal) modal.classList.add('active');
}

function closeUploadModal() {
  const modal = document.getElementById('uploadModal');
  if (modal) modal.classList.remove('active');
}

function handleDocumentUpload(e) {
  e.preventDefault();
  const projectId = document.getElementById('uploadProject').value;
  const docType = document.getElementById('uploadType').value;
  const weekNum = parseInt(document.getElementById('uploadWeekNumber').value, 10);
  const weekDate = document.getElementById('uploadWeekDate').value;
  const fileInput = document.getElementById('uploadFile');

  if (!fileInput.files || fileInput.files.length === 0) {
    showPortalToast('Please select an HTML file to upload.', 'error');
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  showPortalToast(`Uploading ${file.name}...`, 'loading');

  reader.onload = async (event) => {
    const fileContent = event.target.result;
    let savedUrl = '';

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: docType,
          fileName: file.name,
          content: fileContent
        })
      });
      const result = await response.json();
      if (result.success && result.url) {
        savedUrl = result.url;
      } else {
        throw new Error(result.error || 'Server upload failed');
      }
    } catch (apiErr) {
      console.warn('Backend API unavailable, using Blob URL:', apiErr);
      const blob = new Blob([fileContent], { type: 'text/html' });
      savedUrl = URL.createObjectURL(blob);
    }

    const project = PROJECTS.find(p => p.id === projectId);
    if (!project) return;

    let targetWeek = project.weeks.find(w => w.weekNumber === weekNum);
    if (!targetWeek) {
      targetWeek = {
        weekNumber: weekNum,
        weekLabel: `Week ${weekNum}`,
        weekEnding: weekDate,
        status: 'ON TRACK',
        statusClass: 'green',
        manDays: project.weeks[0]?.manDays || '150 Forecast',
        consumed: 'In Progress',
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

// User Authentication & Logout
function logoutUser() {
  if (confirm('Are you sure you want to sign out from the portal?')) {
    sessionStorage.removeItem('auth_user');
    localStorage.removeItem('auth_user');
    window.location.replace('login.html');
  }
}
window.logoutUser = logoutUser;

// Event Listeners & Keyboard Dismiss
document.addEventListener('DOMContentLoaded', () => {
  // Display logged in user
  try {
    const rawUser = sessionStorage.getItem('auth_user') || localStorage.getItem('auth_user');
    if (rawUser) {
      const u = JSON.parse(rawUser);
      const nameEl = document.getElementById('headerUserName');
      if (nameEl) nameEl.innerText = u.username || 'admin';
    }
  } catch (e) {}

  renderProjects();

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const searchVal = document.getElementById('projectSearch')?.value || '';
      renderProjects(searchVal, btn.dataset.status);
    });
  });

  const searchInput = document.getElementById('projectSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeFilter = document.querySelector('.filter-btn.active')?.dataset.status || 'all';
      renderProjects(e.target.value, activeFilter);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeWorkstreamsModal();
      closeViewer();
      closeProjectDetail();
      closeAddWeekModal();
      closeUploadModal();
    }
  });

  const wsModal = document.getElementById('workstreamsModal');
  if (wsModal) {
    wsModal.addEventListener('click', (e) => {
      if (e.target === wsModal) closeWorkstreamsModal();
    });
  }

  const vModal = document.getElementById('viewerModal');
  if (vModal) {
    vModal.addEventListener('click', (e) => {
      if (e.target === vModal) closeViewer();
    });
  }

  window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'CLOSE_VIEWER') {
      closeViewer();
      closeProjectDetail();
      closeWorkstreamsModal();
    }
  });
});
