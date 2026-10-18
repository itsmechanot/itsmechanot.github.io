/* =====================================================================
   SITE CONTENT: edit this file to update your portfolio.
   Anything marked "PLACEHOLDER" is waiting for your real info.
   ===================================================================== */
const SITE = {
  // ---- Identity ----
  name: "Christian Mandras Sapilan",
  firstName: "Christian",
  brand: { main: "Dev", accent: "Christian" },    // navbar logo text
  botName: "LOW_BOT",                            // name of the AI assistant
  domainTyped: "christiansapilan.dev",             // text typed in the intro loader

  // ---- Hero ----
  titleTop: "Full-Stack",
  titleBottom: "Developer",
  roles: ["Front-End & Back-End Developer", "Computer Science Student", "IT & Network Technician", "Solar & Satellite Installer"],
  heroBio:
    "I am <strong>Christian Mandras Sapilan</strong>, a developer who builds fast, clean and user-friendly digital experiences.",

  // ---- About ----
  aboutBio:
    "I am Christian Mandras Sapilan, a Computer Science student at Biliran Province State University (BiPSU) who works on both " +
    "front-end and back-end development. For the past 4 years I've also been a working student in IT at Xfiber Broadband, " +
    "with hands-on experience in networking, fiber, satellite internet, solar and CCTV installation. " +
    "I like building things that work in the real world, both in code and in the field.",
  photo: "assets/profile.jpg",   // leave "" to show initials
  cv: "",                    // e.g. "assets/Christian-Sapilan-CV.pdf" (leave "" to show "coming soon")
  yearsExperience: 4,

  // ---- Contact ----
  email: "itsmechanot@gmail.com",
  location: "Atipolo, Naval, Biliran",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Atipolo%2C+Naval%2C+Biliran%2C+Philippines", // opens Google Maps pinned there
  available: true,                   // false = shows "Busy" in the navbar
  availabilityNote: "Available on weeknights after school. Saturdays and Sundays are my IT work days.",

  // url "" = icon shows but does nothing until you add a link
  socials: [
    { name: "GitHub",    icon: "github",    url: "https://github.com/itsmechanot" },
    { name: "TikTok",    icon: "tiktok",    url: "https://www.tiktok.com/@.its_joseph" },
    { name: "Facebook",  icon: "facebook",  url: "https://www.facebook.com/share/1DYbNi8WGr/" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/heyy_.chan/" },
    { name: "Telegram",  icon: "send",      url: "https://t.me/TheMoonYou_Ka" },
  ],

  // ---- Code window in the hero ----
  code: {
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Python", "Flutter", "and many more"],
    passion: "Real-World Tech Solutions",
    status: "Building...",
  },

  // ---- Academic ----
  education: {
    degree: "Bachelor of Science in Computer Science",
    major: "Front-End & Back-End Development",
    school: "Biliran Province State University (BiPSU)",
    years: "2023 — Present",
  },

  // icon options: code, database, server, palette, phone, layers, globe, wifi, network
  // image: a photo from that school year, shown beside the card (put it in assets/academic/)
  timeline: [
    {
      year: "First Year", icon: "code",
      title: "The Foundations", subtitle: "Programming & Computing Fundamentals",
      subjects: [
        "Introduction to Computing", "Discrete Structures", "Fundamentals of Programming",
        "Intermediate Programming", "Database Management System",
      ],
      stack: ["HTML", "CSS", "JavaScript"],                                // PLACEHOLDER
      project: "PLACEHOLDER: describe a major project from this year.",
      image: "assets/academic/year-1.jpg",
    },
    {
      year: "Second Year", icon: "database",
      title: "The Systems", subtitle: "Data, Algorithms & Theory",
      subjects: [
        "Information Management", "Data Structures and Algorithms", "Object-Oriented Programming",
        "Design and Analysis of Algorithms", "Automata Theory and Formal Languages", "Computer System Servicing",
      ],
      stack: ["Flutter", "Dart", "PHP", "MySQL"],                          // PLACEHOLDER: confirm
      project: "My first Flutter project: a mobile application that my team built and presented.",
      image: "assets/academic/year-2.jpg",
    },
    {
      year: "Third Year", icon: "phone",
      title: "The Builder", subtitle: "Systems, Security & Software Engineering",
      subjects: [
        "Architecture and Organization with Assembly Language", "Information Assurance and Security",
        "Application Development and Emerging Technologies", "Programming Languages",
        "Graphics and Visual Computing", "Software Engineering", "Networks and Communication", "Operating Systems",
      ],
      stack: ["Flutter", "Dart", "Firebase"],                              // PLACEHOLDER
      project: "PLACEHOLDER: describe a major project from this year.",
      image: "assets/academic/year-3.jpg",
    },
    {
      year: "Fourth Year", icon: "layers", current: true,
      title: "The Final Stretch", subtitle: "Intelligent Systems & Human-Centered Design",
      subjects: [
        "Human-Computer Interaction", "Software Engineering 2", "Intelligent Systems",
        "Computer Programming", "Parallel and Distributed Computing",
      ],
      stack: [],          // add tools you use this year, e.g. ["Python", "Flutter"]
      project: "",        // e.g. your capstone/thesis
      image: "assets/academic/year-4.jpg",
    },
  ],

  // ---- Portfolio: Experience ----
  // logo: put the logo in assets/logos/ (e.g. "assets/logos/quadcore.png"); "" shows initials
  experience: [
    {
      role: "IT Staff (Working Student)",
      company: "Xfiber Broadband",
      period: "4 years · Weekends",
      logo: "assets/logos/xfiber.png",
      description: "Handle IT and network work for an internet service provider: fiber internet installation, network setup and troubleshooting.",
      tags: ["Networking", "Fiber Installation", "Troubleshooting"],
    },
    {
      role: "Sole Proprietor",
      company: "Quadcore Office Supplies and Equipment Trading",
      period: "Sep 2024 — Present",
      logo: "",            // REMINDER: add the Quadcore logo
      description: "Run my own trading business supplying office supplies and equipment.",  // PLACEHOLDER: add details
      tags: ["Business", "Procurement"],
    },
  ],

  // ---- Portfolio: Projects ----
  // status: "deployed" | "developing" | "completed"
  // images: put the pictures in assets/projects/ and list them in order. Two or more slide automatically:
  //   images: ["assets/projects/kacific-1.jpg", "assets/projects/kacific-2.jpg", "assets/projects/kacific-3.jpg"],
  //   images: [] shows a styled placeholder
  // To add a project, copy one { ... } block, paste it below and change the text.
  projects: [
    {
      title: "Free Wi-Fi for All: Kacific Satellite Sites", status: "completed", period: "2022 — 2023",
      description: "Installed Kacific satellite internet sites for the government's Free Wi-Fi for All program under former President Rodrigo Roa Duterte, connecting communities in Biliran, Samar, Southern Leyte and Abuyog.",
      tags: ["Kacific", "Satellite Internet", "Network Setup"], live: "", repo: "",
      images: [
        "assets/projects/kacific-1.jpg", // Kacific dishes on rooftop
        "assets/projects/kacific-2.jpg", // aligning the dish
        "assets/projects/kacific-3.jpg", // speed test
        "assets/projects/kacific-4.jpg", // equipment delivery
        "assets/projects/kacific-5.jpg", // solar power + network cabinet
        "assets/projects/kacific-6.jpg", // indoor cabling
        "assets/projects/kacific-7.jpg", // solar panel install
      ],
    },
    {
      title: "Starlink Installations", status: "completed", period: "20XX",
      description: "PLACEHOLDER: where you installed Starlink, for whom, and how many sites.",
      tags: ["Starlink", "Satellite Internet"], images: [], live: "", repo: "",
    },
    {
      title: "Solar Power Systems", status: "completed", period: "20XX",
      description: "Installed solar power systems in Biliran: mounting rooftop PV panel arrays, setting up hybrid inverters (Deye, Demuda) with lithium battery storage (SRNE, Retank), and wiring labeled DC/AC protection boxes with isolators, breakers and surge protection devices.",
      tags: ["Solar PV", "Deye", "SRNE", "Lithium Battery"], live: "", repo: "",
      images: [
        "assets/projects/solar-1.jpg", // rooftop panels overlooking the field
        "assets/projects/solar-2.jpg", // large rooftop array with crew
        "assets/projects/solar-3.jpg", // Demuda inverter + Retank battery system
        "assets/projects/solar-4.jpg", // system wiring, boxes open
        "assets/projects/solar-5.jpg", // AC/DC protection boxes + inverter
        "assets/projects/solar-6.jpg", // labeled DC isolator, breaker, SPD
        "assets/projects/solar-7.jpg", // Deye inverter + SRNE battery
        "assets/projects/solar-8.jpg", // me with the Deye install
      ],
    },
    {
      title: "CCTV Security Systems", status: "completed", period: "20XX",
      description: "PLACEHOLDER: CCTV projects (number of cameras, type of site).",
      tags: ["Hikvision", "CCTV"], images: [], live: "", repo: "",
    },
    {
      title: "PisoWifi Setups", status: "completed", period: "20XX",
      description: "Installed Xfiber PisoWifi coin-operated Wi-Fi machines across Biliran and Leyte. Assembled and wired each LPB PisoWifi kit (controller board and coin acceptor), mounted outdoor access points for wider coverage, and set up the LPB captive portal where customers insert coins to buy internet time.",
      tags: ["Xfiber PisoWifi", "LPB", "Access Point"], live: "", repo: "",
      images: [
        "assets/projects/pisowifi-1.jpg", // finished PisoWifi machine
        "assets/projects/pisowifi-2.jpg", // controller board + coin acceptor
        "assets/projects/pisowifi-3.jpg", // another unit's wiring
        "assets/projects/pisowifi-4.jpg", // outdoor access point
        "assets/projects/pisowifi-5.jpg", // customer portal: connected
        "assets/projects/pisowifi-6.jpg", // power setup
      ],
    },
    {
      title: "Web Project", status: "developing", period: "20XX",
      description: "PLACEHOLDER: a website or web app you built (what it does and who it's for).",
      tags: ["PHP", "MySQL", "JavaScript"], images: [], live: "", repo: "",
    },
    {
      title: "Mobile App", status: "developing", period: "20XX",
      description: "PLACEHOLDER: a Flutter app you built (what it does and who it's for).",
      tags: ["Flutter", "Dart", "Firebase"], images: [], live: "", repo: "",
    },
  ],

  // ---- Portfolio: Certificates ----
  // images: pictures in assets/certificates/, listed in order. Two or more slide automatically (like projects).
  // pdf:    optional original certificate file, shown as a "View PDF" link
  // url:    optional link to verify the certificate online
  // To add a certificate, copy one { ... } block, paste it below and change the text.
  certificates: [
    {
      title: "Deye Three Phase Inverter Training", issuer: "Deye Philippines × OnePoint Solar Marketing", year: "Oct 2026",
      description: "Two-day Deye Three Phase Training in Cebu City (October 16–17, 2026). Day 1 covered the technical discussion of Deye three-phase solar inverter systems; Day 2 continued the discussion and ended with a hands-on installation session.",
      images: [
        "assets/certificates/deye-training-1.jpg", // the certificate
        "assets/certificates/deye-training-2.jpg", // at the training venue
      ],
      pdf: "assets/certificates/deye-training-certificate.pdf", url: "",
    },
  ],

  // ---- Portfolio: Tech Stack ----
  // icon: a devicon.dev class name (e.g. "devicon-python-plain colored")
  // svg:  a built-in line icon instead (wifi, sun, cctv, satellite, network, cable, briefcase)
  techStack: [
    {
      category: "Front-End (Client-Side)",
      items: [
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      ],
    },
    {
      category: "Back-End (Server-Side)",
      items: [
        { name: "PHP", icon: "devicon-php-plain colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-original colored" },
        { name: "Firebase", icon: "devicon-firebase-plain colored" },
      ],
    },
    {
      category: "Mobile Development",
      items: [
        { name: "Flutter", icon: "devicon-flutter-plain colored" },
        { name: "Dart", icon: "devicon-dart-plain colored" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "Figma", icon: "devicon-figma-plain colored" },
        { name: "Canva", icon: "devicon-canva-original colored" },
      ],
    },
    {
      category: "IT & Field Installation",
      items: [
        { name: "Networking", svg: "network" },
        { name: "Fiber Internet", svg: "cable" },
        { name: "Starlink", svg: "satellite" },
        { name: "Kacific", svg: "satellite" },
        { name: "Solar (Deye, SRNE)", svg: "sun" },
        { name: "CCTV (Hikvision)", svg: "cctv" },
        { name: "PisoWifi", svg: "wifi" },
      ],
    },
  ],
};
