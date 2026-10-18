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
      stack: ["Flutter", "Dart", "TensorFlow Lite", "Hive"],
      project: "CocoScan: my first Flutter app, a coconut leaf disease scanner using on-device AI to detect yellowing, caterpillar damage and flaccidity.",
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
      period: "Sep 2023 — Present",   // DTI registration date: 06 September 2023
      logo: "assets/logos/quadcore.png",
      description: "Run my own trading business supplying office supplies and equipment.",  // PLACEHOLDER: add details
      tags: ["Business", "Procurement", "DTI Registered"],
      certificate: "assets/documents/dti-business-name-certificate.pdf", // shown only as a "View Certification" link
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
      title: "Barangay CCTV: Poblacion, Culaba, Biliran", status: "completed", period: "Sep 14, 2026",
      description: "Installed 4 Hikvision Turbo HD 2MP color cameras for the barangay of Poblacion, Culaba, Biliran. Mounted the cameras on utility and streetlight poles, ran the cabling with HD video baluns and weatherproof junction boxes, and connected the new feeds to the barangay's monitoring station for 24/7 street coverage.",
      tags: ["Hikvision", "CCTV", "Turbo HD", "4 Cameras"], live: "", repo: "",
      images: [
        "assets/projects/cctv-culaba-1.jpg", // 4 Hikvision cameras + materials
        "assets/projects/cctv-culaba-2.jpg", // mounting on the utility pole
        "assets/projects/cctv-culaba-3.jpg", // mounting on the streetlight pole
        "assets/projects/cctv-culaba-4.jpg", // live feeds on the monitoring screen
      ],
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
      title: "CocoScan: Coconut Leaf Disease Scanner", status: "completed", period: "2025",
      description: "My first Flutter app, built with my team in 2nd year. Farmers scan a coconut leaf with the camera or upload a photo; one on-device AI model first checks that the image is a leaf, then a second model classifies it as Healthy, Yellowing, Caterpillar damage or Flaccidity with a confidence score and recommended actions. Scans are saved to a local history that works offline.",
      tags: ["Flutter", "TensorFlow Lite", "Hive"], live: "", repo: "",
      images: [
        "assets/projects/cocoscan-1.png",   // app logo
        "assets/academic/year-2.jpg",       // team presentation
      ],
    },
    {
      title: "RideAxis: Terminal Van Ride-Sharing Platform", status: "deployed", period: "2025",
      description: "Solo project, designed, built and deployed by me. \"Tired of going to the terminal just to check rides?\" RideAxis lets passengers see available van rides online with real-time seat availability on a visual van seat layout, driver profiles with 1–5 star ratings, and a terminal locator. Drivers manage their trips (scheduled → waiting → departed → completed) with GPS tracking shown on a live route map, while terminal admins approve drivers, assign schedules and monitor a statistics dashboard. Deployed on Render with PostgreSQL, Gunicorn and WhiteNoise. The free host sleeps when idle, so the live demo can take about a minute to wake up.",
      tags: ["Solo Project", "Django", "PostgreSQL", "Render"],
      live: "https://rideaxis-1.onrender.com/", repo: "https://github.com/itsmechanot/rideaxis",
      images: [
        "assets/projects/rideaxis-1.jpg", // promotional poster
        "assets/projects/rideaxis-2.jpg", // live login page
        "assets/projects/rideaxis-3.jpg", // live home page
      ],
    },
    {
      title: "Serenity Tours: Biliran Tourism Website", status: "completed", period: "2024",
      description: "A Django tourism website promoting Biliran: \"Unveil the Beauty of Biliran | Book Your Island Experience\". It features destinations across the province (Tinago Falls, Talahid Beach in Almeria, Napo Falls and Acaban Cave in Culaba), tour services from custom guided and private group tours to adventure trips, Half-day / Full-day / 2 Days 1 Night pricing, customer feedback and a contact section, built with Bootstrap, AOS scroll animations and a Swiper carousel, plus a Django-managed records table with add, update and delete.",
      tags: ["Django", "Bootstrap", "Tourism"], live: "", repo: "",
      images: [
        "assets/projects/serenity-tours-1.jpg", // home page hero
      ],
    },
    {
      title: "Pahatod: Ride-Hailing Web App", status: "completed", period: "2024 — 2025",
      description: "A Django ride-hailing system with separate passenger and driver accounts. Passengers request rides on a Leaflet + OpenStreetMap map, where typed pickup and drop-off addresses are geocoded with Nominatim and pinned as markers, then track, cancel or review their bookings. Drivers register with their license, vehicle type and plate number, see their live location on a map dashboard, accept pending requests and mark trips completed.",
      tags: ["Django", "Python", "Leaflet", "SQLite"], live: "", repo: "",
      images: [
        "assets/projects/pahatod-cover.svg", // illustrated cover
        "assets/projects/pahatod-2.jpg",     // Request a Ride form + Leaflet map
        "assets/projects/pahatod-3.jpg",     // driver's Accept Rides list
      ],
    },
    {
      title: "Quad-Drag-Do: Completing the Square Math Game", status: "completed", period: "2026",
      description: "Client project: I was the lead developer of this game-based learning app for a 4th-year research study by Math Major students of BiPSU School of Teacher Education (STED), \"Development and Validation of Quad-Drag-Do\". Students solve auto-generated quadratic equations by completing the square, dragging terms through each step across difficulty levels with a 5-life system, plus lessons and learning materials. Teachers manage classrooms, admissions and activities (quizzes, homework, exams), and an admin approves teacher accounts.",
      tags: ["Client Project", "Lead Developer", "Flutter", "Firebase"], live: "", repo: "",
      images: [
        "assets/projects/quaddragdo-1.jpg", // app icon on the game background
      ],
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
    {
      title: "Basic Solar PV Design and Installation Training", issuer: "RenewaVolt", year: "Aug 2026",
      description: "Hands-on solar PV training at Hotel Estrella, Tacloban City. Topics: PV panels and balance of system, solar PV system types, reading datasheets, electrical formulas, series and parallel connections, installation tools, ocular inspection, bill-based and load-based system sizing, matching PV modules to inverters, common installation errors, and system commissioning.",
      images: [
        "assets/certificates/renewavolt-training-1.jpg", // participant ID and string/array notes
        // add the certificate here when you find it, e.g. "assets/certificates/renewavolt-training-2.jpg"
      ],
      pdf: "", url: "",
    },
    {
      title: "Introduction to AI Literacy and Responsible Use", issuer: "CHED ACHIEVE × Mapúa University (with Arizona State University)", year: "Sep 2026",
      description: "Micro-credential course on the foundations of artificial intelligence and how to use AI tools responsibly, offered under the Commission on Higher Education's ACHIEVE program. Certificate ID: A5W3YYBQJYODQ.",
      images: [
        "assets/certificates/ai-literacy-1.png", // the certificate
      ],
      pdf: "", url: "",
    },
    {
      title: "Networking Basics", issuer: "Cisco Networking Academy", year: "May 2026",
      description: "Completed Cisco's Networking Basics course, covering how networks and the internet work: network types and components, IP addressing, wired and wireless connections, and basic network communication. Cert ID: 9d7f15ef-c3e7-465e-9882-6194a2b65f6c.",
      images: [
        "assets/certificates/cisco-networking-basics-1.jpg", // rendered from the PDF
      ],
      pdf: "assets/certificates/cisco-networking-basics.pdf", url: "",
    },
    {
      title: "Integrated OS: Be More Digi-TALINO", issuer: "Integrated Office Solutions, Inc.", year: "Sep 2025",
      description: "Certificate of Participation for a webinar held via Zoom on September 5, 2025, focused on strengthening digital literacy: exploring productivity apps, mastering digital communication, conducting smart research, and ensuring data safety and security.",
      images: [
        "assets/certificates/digi-talino-1.jpg", // rendered from the PDF
      ],
      pdf: "assets/certificates/digi-talino.pdf", url: "",
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
        { name: "Django", icon: "devicon-django-plain" },
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
