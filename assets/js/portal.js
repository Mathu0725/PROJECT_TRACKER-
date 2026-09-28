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
        role: 'Mobile Team Lead',
        allocation: '42 Man-Days',
        responsibility: 'React Native architecture, QR barcode scanning engine, and turnstile API link.'
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
        keyInsight: 'Ticket scanning speed improved; low-light validation and physical turnstile integration remain critical path items.',
        weeklyUrl: 'Incubator Weekly update/GrayHound 18.09.2026.html',
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
          'Barcode generation service live',
          'User profile screen completed'
        ],
        uncompletedTasks: [
          'Turnstile scanner latency optimization'
        ],
        inProgressTasks: [
          'Offline ticket caching',
          'Payment gateway callback verification'
        ],
        futureTasks: [
          'Push notification integration',
          'Live turnstile test'
        ],
        keyInsight: 'Scanner requires tuning for rapid queue clearance at turnstiles.',
        weeklyUrl: 'Incubator Weekly update/Greyhound_Weekly_Report_11_Sep_2026.html',
        scopeUrl: 'scope document/Greyhound_CEO_Scope_USP_WeeklyTheme.html'
      },
      {
        weekNumber: 1,
        weekLabel: 'Week 1',
        weekEnding: '4 Sep 2026',
        status: 'AT RISK',
        statusClass: 'amber',
        manDays: '35 Allocated',
        consumed: '25 Consumed (71%)',
        completedTasks: [
          'Sprint kickoff and navigation wireframe finalized',
          'API authentication service configured'
        ],
        uncompletedTasks: [],
        inProgressTasks: [
          'Barcode scanning module',
          'Ticket wallet screen'
        ],
        futureTasks: [
          'Offline caching',
          'Turnstile hardware test'
        ],
        keyInsight: 'Sprint initiated with primary focus on turnstile scanning reliability.',
        weeklyUrl: 'Incubator Weekly update/greyhound_weekly_project_visibility_card.html',
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
    leads: 'HRMS Platform Team',
    description: 'Comprehensive human resource management suite with employee directory, multi-tenant security, and leave tracking.',
    highlights: 'Authentication & Security, Leave & Attendance, Multi-tenant management, Shift scheduling.',
    resources: [
      {
        name: 'HRMS Core Team',
        role: 'Full Stack Engineering',
        allocation: '150 Man-Days',
        responsibility: 'Multi-tenant database, authentication, shift scheduling, and reporting.'
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
        name: 'Mathusan / Yapes',
        role: 'EPOS Core Engineers',
        allocation: '140 Man-Days',
        responsibility: 'Till UI, offline sync queue, payment terminal driver, and receipt printing.'
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
    leads: 'Watercraft Platform Team',
    description: 'Marina and boatyard dry-stack storage management, customer reservation app, and boat launch scheduling.',
    highlights: 'Dock slip assignment, Launch requests, Customer billing, Maintenance work orders.',
    resources: [
      {
        name: 'Platform Engineering',
        role: 'Full Stack Team',
        allocation: '120 Man-Days',
        responsibility: 'Dry-stack launch scheduling, customer portal, slip allocation, and invoicing.'
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
        name: 'Saif / Abitha',
        role: 'Frontend Engineering',
        allocation: '40 Man-Days',
        responsibility: 'Booking wizard UI redesign, voucher redemption integration, and responsive layout.'
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
        name: 'Creative Studio',
        role: 'Multimedia Production',
        allocation: '30 Man-Days',
        responsibility: 'Video editing, motion graphics, campaign posters, and social distribution.'
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
const STORAGE_KEY = 'portal_projects_exec_v8_compact';

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
    'portal_projects_v14_sep28_all_8'
  ].forEach(k => localStorage.removeItem(k));
} catch (e) {}

let PROJECTS = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');

if (!PROJECTS || !Array.isArray(PROJECTS) || PROJECTS.length < 8) {
  PROJECTS = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(PROJECTS));
} else {
  // Sync missing properties from DEFAULT_PROJECTS while keeping user updates
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
      if (!p.resources) p.resources = def.resources;
      if (!p.milestones) p.milestones = def.milestones;
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

  // Remaining / Variance (Man-Days) & Delay vs On Schedule
  const forecastTotalNum = parseManDays(p.forecastTotal, allocatedNum);
  let isDelay = false;
  let varianceText = '';
  let statusText = 'On Schedule';
  let statusClass = 'on-schedule';

  if (p.overBudget === true || (allocatedNum > 0 && burntNum > allocatedNum) || forecastTotalNum > allocatedNum) {
    isDelay = true;
    const diff = Math.max(forecastTotalNum - allocatedNum, burntNum > allocatedNum ? burntNum - allocatedNum : 0);
    varianceText = diff > 0 ? `+${diff} Man-Days Delay` : 'Delay';
    statusText = 'Delay';
    statusClass = 'delay';
  } else {
    const remaining = Math.max(0, (forecastTotalNum || allocatedNum) - burntNum);
    varianceText = `${remaining} Man-Days Remaining`;
    statusText = 'On Schedule';
    statusClass = 'on-schedule';
  }

  return {
    releaseDate,
    allocatedText,
    burntText,
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
        Week ${w.weekNumber || 1} (${w.weekEnding})${idx === 0 ? ' — Latest' : ''}
      </option>
    `).join('') + `<option value="upload">+ Upload Next Week...</option>`;

    // Backlog tasks count & indicator
    const backlogTasks = curWeek.uncompletedTasks || [];
    const hasBacklog = backlogTasks.length > 0;

    const card = document.createElement('article');
    card.className = 'exec-card compact-card';
    card.dataset.projectId = p.id;
    card.innerHTML = `
      <!-- Card Header -->
      <div class="card-header-compact">
        <div class="card-title-row">
          <div style="display:flex; align-items:center; gap:10px; min-width:0;">
            <div class="card-icon">${p.icon || '📁'}</div>
            <div class="card-name-group">
              <h3 class="card-title" title="${p.name}">${p.name}</h3>
              <div class="card-subtitle">
                <span class="pill-release">${p.release || 'Phase 1'}</span>
                <span class="card-lead">👤 ${p.leads || 'Team Lead'}</span>
              </div>
            </div>
          </div>
          <div class="card-status-badge ${curWeek.statusClass || 'green'}">
            <span class="status-dot"></span>
            <span>${curWeek.status || 'ON TRACK'}</span>
          </div>
        </div>
      </div>

      <!-- Controls & Explicit Target Release Date Bar (Requirement 3) -->
      <div class="card-controls-row">
        <div class="week-picker-group">
          <span class="week-picker-label">Week:</span>
          <select class="week-dropdown" onchange="changeProjectWeek('${p.id}', this.value)" title="Choose reporting week">
            ${weekOptions}
          </select>
        </div>
        <div class="card-release-date" title="Target Release Date">
          🎯 Release Date: <strong>${metrics.releaseDate}</strong>
        </div>
      </div>

      <!-- Crucial High-Level Effort Metrics (3-Box Grid - Requirements 1, 2, 3) -->
      <div class="card-metrics-grid">
        <div class="metric-box">
          <div class="metric-label">Allocated (Man-Days)</div>
          <div class="metric-value">${metrics.allocatedText}</div>
        </div>
        <div class="metric-box">
          <div class="metric-label">Burnt (Man-Days)</div>
          <div class="metric-value">${metrics.burntText}</div>
        </div>
        <div class="metric-box ${metrics.statusClass}">
          <div class="metric-label">Remaining / Variance (Man-Days)</div>
          <div class="metric-value ${metrics.statusClass}">
            ${metrics.varianceText}
          </div>
        </div>
      </div>

      <!-- Highlights / Key Insight & Backlog Alert (Requirement 2) -->
      <div class="card-highlights">
        ${curWeek.keyInsight ? `
          <div class="card-insight-pill">
            <span class="icon">💡</span>
            <span class="text"><strong>Key Insight:</strong> ${curWeek.keyInsight}</span>
          </div>
        ` : (p.description ? `
          <div class="card-description-preview" title="${p.description}">
            ${p.description}
          </div>
        ` : '')}

        ${hasBacklog ? `
          <div class="card-backlog-alert" onclick="openWorkstreamsModal('${p.id}')" title="Click to view full backlog details in popup">
            <div style="display:flex; align-items:center; gap:6px;">
              <span style="font-size:13px;">⚠️</span>
              <span class="alert-text"><strong>Backlog:</strong> ${backlogTasks.length} task(s) carried over</span>
            </div>
            <span class="exec-slipped-pill">${backlogTasks.length} (incomplete)</span>
          </div>
        ` : ''}
      </div>

      <!-- Action Buttons Row (Requirement 4: Full-Screen Workstreams Trigger) -->
      <div class="card-actions-row">
        <button class="btn-card-action btn-workstreams" onclick="openWorkstreamsModal('${p.id}')" title="Open wide full-screen popup of workstreams, milestones & tasks">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          <span>Workstreams (Popup ↗)</span>
        </button>
        <button class="btn-card-action btn-secondary" onclick="openViewer('${p.id}', 'weekly')" title="View Weekly Report document">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          <span>Weekly Report</span>
        </button>
        <button class="btn-card-action btn-secondary" onclick="openViewer('${p.id}', 'scope')" title="View Scope & USP specification">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          <span>Scope &amp; USP</span>
        </button>
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
  const body = document.getElementById('wsModalBody');
  if (!body || !activeWsProject) return;

  const p = activeWsProject;
  const curWeek = p.weeks[p.selectedWeekIndex || 0] || p.weeks[0];
  const metrics = getProjectMetrics(p, curWeek);

  // Completed Tasks
  const completedTasks = curWeek.completedTasks || [];
  const completedHtml = (completedTasks.length > 0)
    ? completedTasks.map(t => `
        <li class="ws-task-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span>${t}</span>
        </li>
      `).join('')
    : `<li class="ws-task-item" style="color:#94a3b8;">None recorded for this week</li>`;

  // Backlog Tasks (Shown in RED with (incomplete) badge)
  const backlogTasks = curWeek.uncompletedTasks || [];
  const hasBacklog = backlogTasks.length > 0;
  const backlogHtml = hasBacklog
    ? backlogTasks.map(t => `
        <li class="ws-task-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          <span>${t}</span>
        </li>
      `).join('')
    : `<li class="ws-task-item" style="color:#94a3b8;">No backlog tasks</li>`;

  // In-Progress Tasks
  const inProgressTasks = curWeek.inProgressTasks || [];
  const inProgressHtml = (inProgressTasks.length > 0)
    ? inProgressTasks.map(t => `
        <li class="ws-task-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>${t}</span>
        </li>
      `).join('')
    : `<li class="ws-task-item" style="color:#94a3b8;">Sprint review ongoing</li>`;

  // Future / Next Week Tasks
  const futureTasks = curWeek.futureTasks || [];
  const futureHtml = (futureTasks.length > 0)
    ? futureTasks.map(t => `
        <li class="ws-task-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span>${t}</span>
        </li>
      `).join('')
    : `<li class="ws-task-item" style="color:#94a3b8;">Next sprint planning scheduled</li>`;

  // Resources Chips
  const resourcesList = p.resources || [
    { name: p.leads || 'Project Lead', role: 'Team Lead', allocation: metrics.allocatedText, responsibility: p.description || '' }
  ];
  const resourcesHtml = resourcesList.map(r => `
    <div class="ws-resource-chip" title="${r.responsibility || ''}">
      <span style="font-size:16px;">👤</span>
      <div>
        <strong>${r.name}</strong>
        <span class="role-tag">${r.role}</span>
        <span class="days-tag">${r.allocation}</span>
      </div>
    </div>
  `).join('');

  // Milestones
  const milestonesList = p.milestones || [];
  const milestonesHtml = milestonesList.map(m => {
    const isDone = m.status === 'COMPLETED';
    return `
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:8px; padding:10px 14px; display:flex; align-items:center; justify-content:space-between; gap:10px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="font-size:14px; color:${isDone ? '#16a34a' : '#0284c7'};">${isDone ? '✓' : '🔄'}</span>
          <strong style="font-size:13px; color:#0f172a;">${m.name}</strong>
        </div>
        <span style="font-size:11px; font-weight:700; background:${isDone ? '#dcfce7' : '#e0f2fe'}; color:${isDone ? '#15803d' : '#0369a1'}; padding:3px 8px; border-radius:12px;">${m.position || m.status}</span>
      </div>
    `;
  }).join('');

  body.innerHTML = `
    <!-- Hero Overview Bar -->
    <div class="ws-modal-hero">
      <div class="ws-hero-top">
        <div class="ws-hero-left">
          <div class="ws-hero-icon">${p.icon || '📁'}</div>
          <div class="ws-hero-title">
            <h2>${p.name}</h2>
            <div class="ws-hero-meta">
              <span>${p.company || 'UNICOM TIC'}</span> &bull; 
              <span>${p.release}</span> &bull; 
              <span>Week ${curWeek.weekNumber || 1} (${curWeek.weekEnding})</span>
            </div>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
          <div style="font-size:13px; font-weight:700; color:#334155; background:#f1f5f9; padding:6px 12px; border-radius:8px;">
            🎯 Release Date: <strong>${metrics.releaseDate}</strong>
          </div>
          <span class="card-status-badge ${curWeek.statusClass || 'green'}" style="font-size:13px; padding:6px 14px;">
            <span class="status-dot"></span>
            ${curWeek.status || 'ON TRACK'}
          </span>
        </div>
      </div>

      <!-- Effort Metrics Grid -->
      <div class="ws-metrics-row">
        <div class="ws-metric-card">
          <div class="ws-m-lbl">Allocated (Man-Days)</div>
          <div class="ws-m-val">${metrics.allocatedText}</div>
        </div>
        <div class="ws-metric-card">
          <div class="ws-m-lbl">Burnt (Man-Days)</div>
          <div class="ws-m-val">${metrics.burntText}</div>
        </div>
        <div class="ws-metric-card ${metrics.isDelay ? 'highlight-delay' : 'highlight-schedule'}">
          <div class="ws-m-lbl">Remaining / Variance (Man-Days)</div>
          <div class="ws-m-val" style="color:${metrics.isDelay ? '#dc2626' : '#16a34a'};">
            ${metrics.varianceText}
          </div>
        </div>
        <div class="ws-metric-card ${metrics.isDelay ? 'highlight-delay' : 'highlight-schedule'}">
          <div class="ws-m-lbl">Timeline Status</div>
          <div class="ws-m-val" style="color:${metrics.isDelay ? '#dc2626' : '#16a34a'};">
            ${metrics.statusText}
          </div>
        </div>
      </div>
    </div>

    <!-- 4-Column Tasks & Workstreams Grid (Requirement 4) -->
    <div class="ws-tasks-grid">
      <!-- Column 1: Completed This Week -->
      <div class="ws-task-col completed">
        <div class="ws-task-col-header">
          <span>✅ Completed This Week</span>
          <span style="font-size:11px; background:#dcfce7; color:#15803d; padding:2px 6px; border-radius:10px;">${completedTasks.length}</span>
        </div>
        <ul class="ws-task-list">${completedHtml}</ul>
      </div>

      <!-- Column 2: Backlog (RED with (incomplete) badge) -->
      <div class="ws-task-col uncompleted">
        <div class="ws-task-col-header">
          <div style="display:flex; align-items:center; gap:6px;">
            <span>🔴 Backlog</span>
            <span class="badge-incomplete">${backlogTasks.length} (incomplete)</span>
          </div>
        </div>
        <ul class="ws-task-list">${backlogHtml}</ul>
      </div>

      <!-- Column 3: In Progress / Current Work -->
      <div class="ws-task-col in-progress">
        <div class="ws-task-col-header">
          <span>🔄 In Progress / Current Work</span>
          <span style="font-size:11px; background:#e0f2fe; color:#0369a1; padding:2px 6px; border-radius:10px;">${inProgressTasks.length}</span>
        </div>
        <ul class="ws-task-list">${inProgressHtml}</ul>
      </div>

      <!-- Column 4: Next Week Targets -->
      <div class="ws-task-col future">
        <div class="ws-task-col-header">
          <span>🔮 Next Week Targets</span>
          <span style="font-size:11px; background:#ede9fe; color:#6d28d9; padding:2px 6px; border-radius:10px;">${futureTasks.length}</span>
        </div>
        <ul class="ws-task-list">${futureHtml}</ul>
      </div>
    </div>

    <!-- Team Resources Allocation -->
    <div style="margin-bottom:20px;">
      <div class="ws-section-title">👥 Team Resources &amp; Allocation (Man-Days)</div>
      <div class="ws-resources-row">${resourcesHtml}</div>
    </div>

    <!-- High-Level Milestones -->
    ${milestonesList.length > 0 ? `
      <div style="margin-bottom:20px;">
        <div class="ws-section-title">🎯 Governance Milestones &amp; Deliverables</div>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:10px;">
          ${milestonesHtml}
        </div>
      </div>
    ` : ''}

    <!-- Key Insight Banner -->
    ${curWeek.keyInsight ? `
      <div style="background:#eff6ff; border:1.5px solid #bfdbfe; border-radius:10px; padding:14px 18px; margin-bottom:16px; display:flex; align-items:flex-start; gap:10px;">
        <span style="font-size:18px;">💡</span>
        <div>
          <strong style="color:#1e3a8a; font-size:13.5px;">Executive Key Insight:</strong>
          <p style="margin:3px 0 0 0; font-size:13px; color:#1e293b; line-height:1.5;">${curWeek.keyInsight}</p>
        </div>
      </div>
    ` : ''}

    <!-- Risk & Mitigation Banner (if defined) -->
    ${p.risk ? `
      <div style="background:#fffbeb; border:1.5px solid #fde68a; border-radius:10px; padding:14px 18px; display:flex; align-items:flex-start; gap:10px;">
        <span style="font-size:18px;">⚠️</span>
        <div style="flex:1;">
          <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
            <strong style="color:#92400e; font-size:13.5px;">Key Attention / Risk (${p.risk.severity} Severity):</strong>
            <span style="font-size:11px; font-weight:700; background:#fef3c7; color:#b45309; padding:2px 8px; border-radius:10px;">Escalation: ${p.escalation || 'None'}</span>
          </div>
          <p style="margin:3px 0 0 0; font-size:13px; color:#451a03; line-height:1.4;">
            <strong>Issue:</strong> ${p.risk.issue} &bull; <em>Mitigation: ${p.risk.mitigation}</em>
          </p>
        </div>
      </div>
    ` : ''}
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

// Event Listeners & Keyboard Dismiss
document.addEventListener('DOMContentLoaded', () => {
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
