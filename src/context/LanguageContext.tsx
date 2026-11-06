import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "mn";

export interface ExperienceTranslation {
  position: string;
  company: string;
  period: string;
  periodBadge: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectTranslation {
  id: number;
  title: string;
  category: string;
  technologies: string;
  description: string;
  link?: string;
  image: string;
}

export interface Translations {
  nav: {
    about: string;
    focus: string;
    contact: string;
    resume: string;
  };
  landing: {
    greeting: string;
    nameInitial: string;
    nameRest: string;
    role1: string;
    role2: string;
  };
  about: {
    title: string;
    description: string;
  };
  whatIDo: {
    titlePrefix: string;
    titleHat: string;
    titleI: string;
    titleDo: string;
    developTitle: string;
    developDesc: string;
    developDetails: string;
    skillsetTitle: string;
    automationTitle: string;
    automationDesc: string;
    automationDetails: string;
  };
  career: {
    titleLine1: string;
    titleAmp: string;
    titleLine2: string;
    experiences: ExperienceTranslation[];
  };
  focus: {
    titleMain: string;
    titleSpan: string;
    subtitle: string;
    projectTitle: string;
    projectDesc: string;
    engineLabel: string;
    archLabel: string;
    viewGithub: string;
    pillars: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
    roadmapTitle: string;
    roadmapSubtitle: string;
    roadmapItems: Array<{
      number: string;
      title: string;
      description: string;
      tag: string;
    }>;
  };
  techStack: {
    title: string;
  };
  cta: {
    playWithMe: string;
    hireMe: string;
  };
  contact: {
    emailLabel: string;
    locationLabel: string;
    locationVal: string;
    socialLabel: string;
    footerTitle1: string;
    footerTitle2: string;
  };
  loader: {
    role1: string;
    role2: string;
    role3: string;
    loading: string;
    welcome: string;
  };
  myWorks: {
    back: string;
    titleAll: string;
    titleWorks: string;
    subtitle: string;
    projects: ProjectTranslation[];
  };
  play: {
    back: string;
    you: string;
    white: string;
    black: string;
    moves: string;
    newGame: string;
    flipBoard: string;
    gameOver: string;
    checkmate: string;
    draw: string;
    battulgaWins: string;
    youWon: string;
    drawMsg: string;
    result: string;
    whiteWins: string;
    blackWins: string;
    totalMoves: string;
    playAgain: string;
    reviewBoard: string;
    chatTitle: string;
    chatSubtitle: string;
    chatPlaceholder: string;
    send: string;
    chatGreeting: string;
  };
}

export const translationsData: Record<Language, Translations> = {
  en: {
    nav: {
      about: "ABOUT",
      focus: "FOCUS",
      contact: "CONTACT",
      resume: "RESUME",
    },
    landing: {
      greeting: "Hello! I'm",
      nameInitial: "G.",
      nameRest: "Battulga",
      role1: "Front-End Dev",
      role2: "Modern Web Dev",
    },
    about: {
      title: "ABOUT ME",
      description:
        "I’ve been passionate about coding since I was young, turning that early curiosity into my craft as a Front-End Developer. I specialize in building minimalist, modern web applications that blend clean aesthetics with smooth, intuitive user experiences. Driven by a deep passion for automation and efficient development workflows, I work extensively with React, TypeScript, JavaScript, and Node.js. For me, every project is an opportunity to craft something fast, elegant, and purposeful.",
    },
    whatIDo: {
      titlePrefix: "W",
      titleHat: "HAT",
      titleI: "I",
      titleDo: " DO",
      developTitle: "FRONT-END DEV",
      developDesc: "Modern, minimalist & responsive web applications",
      developDetails:
        "Specializing in crafting clean, high-performance web applications using React, TypeScript, and modern JavaScript. Focused on modular component architecture, intuitive UX, and pixel-perfect design.",
      skillsetTitle: "Skillset & tools",
      automationTitle: "AUTOMATION & UI",
      automationDesc: "Streamlined workflows & elegant digital design",
      automationDetails:
        "Passionate about automating repetitive development workflows and building minimalist interfaces. Combining thoughtful design aesthetics with efficient, scalable code.",
    },
    career: {
      titleLine1: "My career ",
      titleAmp: "&",
      titleLine2: " experience",
      experiences: [
        {
          position: "Front-End & SaaS Development",
          company: "Erxes Inc.",
          period: "2025 - Present",
          periodBadge: "NOW",
          location: "Mongolia",
          description:
            "In 2025, my deep passion for coding ignited. I joined Erxes Inc. to study software engineering under seasoned professional engineers. Since then, I fell completely in love with modern web development, successfully delivering multiple web applications powered by AI integrations, Erxes SaaS APIs, and GraphQL query/mutation architectures.",
          responsibilities: [
            "Engineering modern, responsive web applications using React, TypeScript, and modern front-end tooling",
            "Integrating Erxes SaaS ecosystem APIs with robust GraphQL queries and mutations",
            "Implementing intelligent AI workflows and automations directly into client-facing web interfaces",
            "Collaborating and learning under professional mentors to write clean, scalable, production-grade code",
          ],
          technologies: [
            "React",
            "TypeScript",
            "Erxes SaaS API",
            "GraphQL",
            "AI Integration",
            "Node.js",
          ],
        },
        {
          position: "High-Performance Systems & Software",
          company: "Systems Exploration & Benchmarking",
          period: "2023 - 2024",
          periodBadge: "2023",
          location: "Mongolia",
          description:
            "Acquired my first dedicated high-performance PC, shifting my curiosity from what computing machines are to what they can truly achieve. I began pushing performance limits, exploring complex software environments, and diving into workflow automation to expand my technical horizons.",
          responsibilities: [
            "Configuring, benchmarking, and optimizing high-performance computing hardware and system environments",
            "Transitioning from physical hardware maintenance to deep software experimentation and developer workflows",
            "Testing computational limits through performance tuning, scripting, and system-level automation",
            "Exploring modern developer toolchains, CLI utilities, and advanced software architectures",
          ],
          technologies: [
            "High-Performance Systems",
            "System Optimization",
            "Automation",
            "CLI Tools",
            "Git",
          ],
        },
        {
          position: "Hardware Tinkering & Game Modding",
          company: "PC Modding & Open-Source Exploration",
          period: "2021 - 2023",
          periodBadge: "2021",
          location: "Mongolia",
          description:
            "Worked with an old beat-up office desktop that served as my personal laboratory. I constantly took it apart and reassembled it, fascinated by physical computer architecture. During this time, I joined GitHub and mod-making communities for games, writing modifications and experimenting with code logic.",
          responsibilities: [
            "Disassembling, inspecting, and reassembling desktop hardware to understand component mechanics",
            "Exploring GitHub repositories and game modding platforms to study how code modifies software behavior",
            "Writing custom game scripts and modifications, learning core programming logic through hands-on practice",
            "Building foundational troubleshooting skills across hardware diagnostics and operating systems",
          ],
          technologies: [
            "PC Architecture",
            "Hardware Assembly",
            "GitHub",
            "Game Modding",
            "Scripting",
            "Debugging",
          ],
        },
        {
          position: "Electronics & Technical Curiosity",
          company: "Early Roots & Discovery",
          period: "Early Roots",
          periodBadge: "EARLY",
          location: "Mongolia",
          description:
            "Fascinated by electronics from a young age. I loved opening up electronic gadgets to inspect circuit boards, observe how physical components connect, and understand the inner workings of tech devices. That hands-on curiosity laid the foundation for my lifelong passion for technology.",
          responsibilities: [
            "Opening up and examining electronic devices to explore circuit boards, chips, and wiring",
            "Cultivating an early curiosity about how electronic components communicate and function",
            "Developing a hands-on maker mindset centered on reverse engineering and problem solving",
            "Laying the groundwork of technical curiosity that paved the way for my computing journey",
          ],
          technologies: [
            "Electronics",
            "Hardware Exploration",
            "Curiosity",
            "Circuit Analysis",
            "Maker Mindset",
          ],
        },
      ],
    },
    focus: {
      titleMain: "Current ",
      titleSpan: "Focus",
      subtitle:
        "Iterating on interactive 3D WebGL interactions, clean minimalist design, and modern front-end engineering.",
      projectTitle: "Interactive 3D Portfolio",
      projectDesc:
        "My primary focus is engineering and refining this interactive web portfolio. Rather than presenting static pages, I am pushing modern front-end boundaries—combining real-time Three.js 3D character interactions, custom-rigged MacBook Pro hardware with volumetric lighting, and silky GSAP timeline choreographies into one unified, minimalist experience.",
      engineLabel: "ENGINE",
      archLabel: "ARCHITECTURE",
      viewGithub: "View GitHub",
      pillars: [
        {
          num: "01",
          title: "3D WebGL Interactions",
          desc: "Custom MacBook Pro rigging with glowing Apple logo, volumetric screen light, and interactive head rotation.",
        },
        {
          num: "02",
          title: "GSAP Scroll Choreography",
          desc: "Camera perspective transitions, responsive scroll-triggered scrubbing, and fluid layout transforms.",
        },
        {
          num: "03",
          title: "Minimalist UI Architecture",
          desc: "Handcrafted typography, dark luxury violet aesthetics, and high-performance React + TypeScript architecture.",
        },
        {
          num: "04",
          title: "SaaS & AI Integration Ready",
          desc: "Engineered to integrate Erxes SaaS API query/mutations and AI-assisted automation pipelines.",
        },
      ],
      roadmapTitle: "Active Development Roadmap",
      roadmapSubtitle:
        "Key technical milestones currently in progress across this platform.",
      roadmapItems: [
        {
          number: "01",
          title: "3D & Visual Fidelity",
          description:
            "Perfecting custom MacBook Pro typing animations, procedural screen light beams, and real-time head tracking.",
          tag: "Three.js / WebGL",
        },
        {
          number: "02",
          title: "SaaS & API Integration",
          description:
            "Connecting dynamic data layers and query mutations using Erxes SaaS APIs and intelligent AI workflows.",
          tag: "GraphQL / Erxes API",
        },
        {
          number: "03",
          title: "Performance & Mobile UX",
          description:
            "Streamlining bundle payloads, 60fps WebGL execution, and fluid gesture handling across all mobile viewports.",
          tag: "Vite / Performance",
        },
      ],
    },
    techStack: {
      title: "Tech Stack",
    },
    cta: {
      playWithMe: "Play With Me →",
      hireMe: "Hire Me →",
    },
    contact: {
      emailLabel: "Email",
      locationLabel: "Location",
      locationVal: "Mongolia",
      socialLabel: "Social",
      footerTitle1: "Designed and Developed ",
      footerTitle2: "by ",
    },
    loader: {
      role1: "Front-End Developer",
      role2: "Modern Web Developer",
      role3: "Minimalist Design",
      loading: "Loading",
      welcome: "Welcome",
    },
    myWorks: {
      back: "← Back to Home",
      titleAll: "All ",
      titleWorks: "Works",
      subtitle: "A collection of all my projects and creations",
      projects: [
        {
          id: 1,
          title: "Drishti",
          category: "AI / LLM",
          technologies: "Python, PyTorch, Transformers, FastAPI, React, MongoDB",
          image: "/images/Drishti.png",
          description:
            "Bangladesh's first intelligent advanced AI chatbot powered by a custom Large Language Model. Features natural language understanding, contextual conversations, and multilingual support including Bengali.",
          link: "https://huggingface.co/red1-for-hek/drishti-ilm-x1",
        },
        {
          id: 2,
          title: "VoteChain",
          category: "Blockchain",
          technologies: "Solidity, Web3.js, React, Ethereum, IPFS, MetaMask, Node.js",
          image: "/images/VoteChain.png",
          description:
            "A decentralized election system built on blockchain technology ensuring transparent, tamper-proof, and verifiable voting. Features smart contracts for vote integrity and real-time result tracking.",
          link: "https://github.com/red1-for-hek/smart-election-by-blockchain",
        },
        {
          id: 4,
          title: "Flood Spaces 2.0",
          category: "AI / ML",
          technologies: "Python, TensorFlow, Pandas, React, FastAPI, GIS",
          image: "/images/FloodSpaces.png",
          description:
            "Predicts flood risks across Bangladesh up to one month in advance and sends early alerts to help people prepare.",
          link: "https://github.com/red1-for-hek/Flood-Spaces-2.0",
        },
        {
          id: 5,
          title: "Phoenix 3.0",
          category: "AI Assistant",
          technologies: "Python, Speech Recognition, PyAutoGUI, OpenAI API, Tkinter",
          image: "/images/Phoenix3.0.png",
          description:
            "A JARVIS-inspired personal AI desktop assistant. Controls system functions, manages tasks, answers queries, automates workflows, and provides voice-activated computing experience.",
          link: "https://github.com/red1-for-hek/phoenix3.0",
        },
        {
          id: 6,
          title: "RedxChess",
          category: "AI / Game Engine",
          technologies: "Python, C++, Neural Networks, Bitboards, UCI Protocol",
          image: "/images/RedxChess.png",
          description:
            "A high-performance chess engine rated 3640 ELO. Features advanced search algorithms, neural network evaluation, and optimized bitboard representation for lightning-fast move generation.",
          link: "/play",
        },
        {
          id: 7,
          title: "Prodesk",
          category: "E-commerce",
          technologies: "React, Node.js, MongoDB, Express, Stripe",
          image: "/images/Prodesk.png",
          description:
            "A complete e-commerce platform with secure checkout and smooth product browsing.",
          link: "https://github.com/red1-for-hek/prodesk",
        },
        {
          id: 8,
          title: "HekTools",
          category: "Security / Android",
          technologies: "Kotlin, Android SDK, Firebase, Python, Encryption",
          image: "/images/hektools.png",
          description:
            "An advanced Android monitoring and security research tool. Features remote device management, activity logging, and encrypted data transmission for security testing purposes.",
          link: "",
        },
      ],
    },
    play: {
      back: "← Back to Home",
      you: "You",
      white: "White",
      black: "Black",
      moves: "Moves",
      newGame: "New Game",
      flipBoard: "Flip Board",
      gameOver: "Game Over",
      checkmate: "🏆 CHECKMATE",
      draw: "🤝 DRAW",
      battulgaWins: "Battulga wins this match!",
      youWon: "Congratulations! You won the game! 🎉",
      drawMsg: "The game ended in a draw.",
      result: "Result",
      whiteWins: "White Wins",
      blackWins: "Black Wins",
      totalMoves: "Total Moves",
      playAgain: "Play Again",
      reviewBoard: "Review Board",
      chatTitle: "Battulga's AI Persona",
      chatSubtitle: "Ask about my background, tech stack, or chess!",
      chatPlaceholder: "Ask me anything...",
      send: "Send",
      chatGreeting:
        "Hello there! I am Battulga 👋 Ask me anything you want to know!",
    },
  },
  mn: {
    nav: {
      about: "ТУХАЙ",
      focus: "ЧИГЛЭЛ",
      contact: "ХОЛБОО",
      resume: "НАМТАР",
    },
    landing: {
      greeting: "Сайн байна уу! Би",
      nameInitial: "Г.",
      nameRest: "Баттулга",
      role1: "Фронт-Энд Хөгжүүлэгч",
      role2: "Орчин Үеийн Вэб Хөгжүүлэлт",
    },
    about: {
      title: "МИНИЙ ТУХАЙ",
      description:
        "Би бага наснаасаа код бичих дур сонирхолдоо хөтлөгдөн, тэрхүү сониуч зангаа Фронт-Энд хөгжүүлэгчийн ур чадвар болгон хөгжүүлж ирсэн. Би цэвэр минималист өнгө төрх, хэрэглэхэд хялбар, ойлгомжтой шийдлийг хослуулсан орчин үеийн вэб аппликейшн бүтээх чиглэлээр мэргэшиж байна. Автоматжуулалт болон бүтээмжит хөгжүүлэлтийн урсгалд дурлан, React, TypeScript, JavaScript, Node.js технологиудыг түлхүү ашигладаг. Миний хувьд төсөл бүр бол хурдан, дэгжин, өндөр үнэ цэнтэй бүтээл урлах боломж юм.",
    },
    whatIDo: {
      titlePrefix: "М",
      titleHat: "ИНИЙ",
      titleI: "ЧИ",
      titleDo: " ГЛЭЛ",
      developTitle: "ФРОНТ-ЭНД ХӨГЖҮҮЛЭЛТ",
      developDesc: "Орчин үеийн, минималист & бүх төхөөрөмжид зохицсон вэбүүд",
      developDetails:
        "React, TypeScript болон орчин үеийн JavaScript ашиглан хурдтай, өндөр чанартай вэб аппликейшн бүтээхэд мэргэшсэн. Модульчлагдсан архитектур, ойлгомжтой интерфэйс, пиксел бүрийн нарийвчлалд анхаардаг.",
      skillsetTitle: "Технологи ба хэрэгслүүд",
      automationTitle: "АВТОМАТЖУУЛАЛТ БА UI",
      automationDesc: "Хялбаршуулсан ажлын урсгал & дэгжин дижитал дизайн",
      automationDetails:
        "Давтагддаг хөгжүүлэлтийн ажлуудыг автоматжуулах, минималист интерфэйс бүтээх эрмэлзэлтэй. Нарийн мэдрэмжтэй дизайн болон өргөтгөх боломжтой кодыг төгс хослуулдаг.",
    },
    career: {
      titleLine1: "Миний замнал ",
      titleAmp: "ба",
      titleLine2: " туршлага",
      experiences: [
        {
          position: "Фронт-Энд & SaaS Хөгжүүлэлт",
          company: "Erxes Inc.",
          period: "2025 - Одоог хүртэл",
          periodBadge: "ОДОО",
          location: "Монгол Улс",
          description:
            "2025 онд код бичих миний хүсэл тэмүүлэл эрчимтэй бадарсан. Би Erxes Inc.-д туршлагатай ахлах инженерүүдийн удирдлага дор программ хангамжийн инженерчлэл суралцахаар нэгдсэн. Тэр цагаас хойш орчин үеийн вэб хөгжүүлэлтэд бүрэн татагдаж, AI интеграц, Erxes SaaS API болон GraphQL query/mutation архитектурт суурилсан олон вэб аппликейшнуудыг амжилттай хөгжүүлж байна.",
          responsibilities: [
            "React, TypeScript болон орчин үеийн фронт-энд хэрэгслүүдийг ашиглан чанартай, уян хатан вэб аппликейшн бүтээх",
            "Erxes SaaS экосистемийн API-г GraphQL query, mutation-тай найдвартай холбож хөгжүүлэх",
            "Ухаалаг AI автоматжуулалтын шийдлүүдийг хэрэглэгчийн интерфейст амжилттай нэвтрүүлэх",
            "Туршлагатай менторуудаас суралцаж, цэвэр, өргөтгөх боломжтой үйлдвэрлэлийн түвшний код бичих",
          ],
          technologies: [
            "React",
            "TypeScript",
            "Erxes SaaS API",
            "GraphQL",
            "AI Интеграц",
            "Node.js",
          ],
        },
        {
          position: "Өндөр хүчин чадалтай систем & Программ хангамж",
          company: "Системийн судалгаа & Бенчмаркинг",
          period: "2023 - 2024",
          periodBadge: "2023",
          location: "Монгол Улс",
          description:
            "Анхны өндөр хүчин чадалтай компьютерээ авснаар миний сонирхол компьютерын техник хангамжийн бодит боломжууд руу чиглэсэн. Системийн хурд хүчин чадлыг тултал ашиглах, нарийн программ хангамжийн орчинг судлах, автоматжуулалтын хэрэгслүүдийг туршиж техникийн цар хүрээгээ тэлсэн.",
          responsibilities: [
            "Өндөр хүчин чадалтай тооцоолох техник хангамж, системийн орчныг тохируулах, оношлох, оновчлох",
            "Техник хангамжийн засвар үйлчилгээнээс программ хангамж, хөгжүүлэгчийн ажлын урсгалд шилжих",
            "Скрипт бичих, системийн автоматжуулалт болон тооцооллын хязгаарыг тест хийж шалгах",
            "Орчин үеийн хөгжүүлэгчийн багаж хэрэгсэл, CLI хэрэгслүүд, дэвшилтэт бүтцийг судлах",
          ],
          technologies: [
            "Өндөр хүчин чадалтай систем",
            "Системийн оновчлол",
            "Автоматжуулалт",
            "CLI Хэрэгсэл",
            "Git",
          ],
        },
        {
          position: "Техник угсралт & Тоглоомын мод хийх",
          company: "Компьютер сайжруулалт & Нээлттэй эх",
          period: "2021 - 2023",
          periodBadge: "2021",
          location: "Монгол Улс",
          description:
            "Хуучин оффисын компьютерыг өөрийн туршилтын лаборатори болгон ашигласан. Түүнийг олон дахин задалж угсран, компьютерын физик бүтцийг шимтэн судалсан. Энэ хугацаанд GitHub болон тоглоомын мод хөгжүүлэгчдийн нийгэмлэгт нэгдэж, анхны кодын логик, өөрчлөлтүүдээ туршиж эхэлсэн.",
          responsibilities: [
            "Компьютерын эд ангиудын бүтцийг ойлгохын тулд техник хангамжийг задалж, судлан, угсрах",
            "GitHub сангууд болон тоглоомын мод платформуудыг судлан код хэрхэн ажилладгийг бодитоор турших",
            "Тоглоомын скрипт, өөрчлөлтүүдийг өөрөө бичиж програмчлалын үндсэн логикт гардан суралцах",
            "Техник хангамжийн оношилгоо, үйлдлийн системийн алдааг засварлах суурь ур чадварыг эзэмших",
          ],
          technologies: [
            "Компьютерын бүтэц",
            "Техник угсралт",
            "GitHub",
            "Тоглоомын мод",
            "Скрипт бичих",
            "Дебаг",
          ],
        },
        {
          position: "Электроник & Техникийн сониуч зан",
          company: "Эхлэлийн үе & Нээлтүүд",
          period: "Эхлэлийн үе",
          periodBadge: "ЭХЛЭЛ",
          location: "Монгол Улс",
          description:
            "Бага наснаасаа л электрон хэрэгслүүдийг сонирхож эхэлсэн. Электрон төхөөрөмжүүдийг задалж, микро схемүүд хэрхэн холбогдож, яаж ажилладгийг сонирхон судалдаг байв. Энэхүү сониуч зан минь миний технологийн салбар дахь насан туршийн хүсэл тэмүүллийн бат бөх суурь болсон.",
          responsibilities: [
            "Электрон төхөөрөмжүүдийг задалж, хэлхээний самбар, чип, утаснуудын холболтыг судлах",
            "Электрон эд ангиуд хоорондоо хэрхэн харилцаж ажилладаг тухай бага насны сониуч зангаа хөгжүүлэх",
            "Техникийг задалж шалтгааныг олох, асуудал шийдвэрлэх бүтээлч сэтгэлгээг төлөвшүүлэх",
            "Компьютер, технологийн ертөнцөд хөл тавих суурь техникийн суурийг тавих",
          ],
          technologies: [
            "Электроник",
            "Техник судлал",
            "Сониуч сэтгэлгээ",
            "Схемийн шинжилгээ",
            "Бүтээгчийн сэтгэлгээ",
          ],
        },
      ],
    },
    focus: {
      titleMain: "Одоогийн ",
      titleSpan: "Чиглэл",
      subtitle:
        "Интерактив 3D WebGL технологи, цэвэр минималист дизайн, орчин үеийн фронт-энд инженерчлэл дээр төвлөрөн ажиллаж байна.",
      projectTitle: "Интерактив 3D Портфолио",
      projectDesc:
        "Миний гол зорилго бол энэхүү интерактив 3D портфолиог тасралтгүй сайжруулах явдал юм. Зүгээр л нэг хөдөлгөөнгүй хуудас харуулахын оронд, би орчин үеийн фронт-эндийн хил хязгаарыг тэлж — бодит цагийн Three.js 3D дүр, гэрэлтдэг MacBook Pro загвар, жигд GSAP хөдөлгөөнт шилжилтүүдийг нэгтгэсэн цэвэр минималист туршлагыг бүтээж байна.",
      engineLabel: "ХӨДӨЛГҮҮР",
      archLabel: "АРХИТЕКТУР",
      viewGithub: "GitHub дээр үзэх",
      pillars: [
        {
          num: "01",
          title: "3D WebGL Интерактив шийдэл",
          desc: "Гэрэлтдэг Apple логотой MacBook Pro загвар, дэлгэцийн гэрлийн эффект, бодит цагийн толгойн хөдөлгөөн.",
        },
        {
          num: "02",
          title: "GSAP Скролл хөдөлгөөн",
          desc: "Камерын өнцгийн шилжилт, скроллоор удирдах хөдөлгөөн, төхөөрөмж бүрт зохицсон шилжилтүүд.",
        },
        {
          num: "03",
          title: "Минималист UI Архитектур",
          desc: "Нарийн сонгосон фонт, тансаг бараан нил ягаан өнгөний хослол, өндөр хурдтай React + TypeScript бүтэц.",
        },
        {
          num: "04",
          title: "SaaS ба AI Интеграц",
          desc: "Erxes SaaS API query/mutation болон AI автоматжуулалтын системүүдийг холбоход бэлэн бүтэц.",
        },
      ],
      roadmapTitle: "Хөгжүүлэлтийн замын зураглал",
      roadmapSubtitle:
        "Энэхүү платформ дээр хийгдэж буй үндсэн техникийн зорилтууд.",
      roadmapItems: [
        {
          number: "01",
          title: "3D ба Дүрслэлийн нарийвчлал",
          description:
            "MacBook Pro дээр бичих хөдөлгөөн, дэлгэцийн туяа, бодит цагийн толгойн хөдөлгөөнийг төгөлдөржүүлэх.",
          tag: "Three.js / WebGL",
        },
        {
          number: "02",
          title: "SaaS ба API Интеграц",
          description:
            "Erxes SaaS API болон ухаалаг AI автоматжуулалтыг холбох өгөгдлийн бүтцийг нэвтрүүлэх.",
          tag: "GraphQL / Erxes API",
        },
        {
          number: "03",
          title: "Хурд ба Мобайл UX",
          description:
            "Кодын хэмжээг багасгах, 60fps WebGL хурд, бүх гар утсан дээрх жигд мэдрэгчтэй ажиллагааг хангах.",
          tag: "Vite / Performance",
        },
      ],
    },
    techStack: {
      title: "Технологийн сан",
    },
    cta: {
      playWithMe: "Шатар тоглох →",
      hireMe: "Хамтран ажиллах →",
    },
    contact: {
      emailLabel: "Имэйл",
      locationLabel: "Байршил",
      locationVal: "Монгол Улс",
      socialLabel: "Сошиал суваг",
      footerTitle1: "Дизайн ба хөгжүүлэлтийг хийсэн ",
      footerTitle2: "G.Battulga",
    },
    loader: {
      role1: "Фронт-Энд Хөгжүүлэгч",
      role2: "Орчин Үеийн Вэб Хөгжүүлэлт",
      role3: "Минималист Дизайн",
      loading: "Ачааллаж байна",
      welcome: "Тавтай морилно уу",
    },
    myWorks: {
      back: "← Нүүр хуудас руу буцах",
      titleAll: "Бүх ",
      titleWorks: "Бүтээлүүд",
      subtitle: "Миний хийсэн төсөл, бүтээлүүдийн цогц цуглуулга",
      projects: [
        {
          id: 1,
          title: "Drishti",
          category: "AI / LLM",
          technologies: "Python, PyTorch, Transformers, FastAPI, React, MongoDB",
          image: "/images/Drishti.png",
          description:
            "Тусгай Large Language Model-ээр ажилладаг ухаалаг дэвшилтэт AI чатбот. Байгалийн хэлний ойлголт, контекст хадгалалт, олон хэлний дэмжлэгтэй.",
          link: "https://huggingface.co/red1-for-hek/drishti-ilm-x1",
        },
        {
          id: 2,
          title: "VoteChain",
          category: "Блокчэйн",
          technologies: "Solidity, Web3.js, React, Ethereum, IPFS, MetaMask, Node.js",
          image: "/images/VoteChain.png",
          description:
            "Ил тод, өөрчлөх боломжгүй, шалгаж болохуйц санал хураалтыг хангах блокчэйн технологи дээр суурилсан төвлөрсөн бус сонгуулийн систем.",
          link: "https://github.com/red1-for-hek/smart-election-by-blockchain",
        },
        {
          id: 4,
          title: "Flood Spaces 2.0",
          category: "AI / ML",
          technologies: "Python, TensorFlow, Pandas, React, FastAPI, GIS",
          image: "/images/FloodSpaces.png",
          description:
            "Үерийн эрсдэлийг 1 сарын өмнөөс урьдчилан таамаглаж, хүмүүст бэлтгэлтэй байхад туслах сэрэмжлүүлэг илгээдэг хиймэл оюунт систем.",
          link: "https://github.com/red1-for-hek/Flood-Spaces-2.0",
        },
        {
          id: 5,
          title: "Phoenix 3.0",
          category: "AI Туслах",
          technologies: "Python, Speech Recognition, PyAutoGUI, OpenAI API, Tkinter",
          image: "/images/Phoenix3.0.png",
          description:
            "JARVIS-ээс сэдэвлэсэн хувийн AI туслах. Системийн функцуудыг удирдаж, ажлуудыг зохицуулж, дуут удирдлагатай тооцоолох туршлагыг олгодог.",
          link: "https://github.com/red1-for-hek/phoenix3.0",
        },
        {
          id: 6,
          title: "RedxChess",
          category: "AI / Тоглоомын хөдөлгүүр",
          technologies: "Python, C++, Neural Networks, Bitboards, UCI Protocol",
          image: "/images/RedxChess.png",
          description:
            "3640 ELO чансаатай өндөр хүчин чадалтай шатрын хөдөлгүүр. Нарийн хайлтын алгоритм, нейрон сүлжээний үнэлгээ, хурдан нүүдэл боловсруулалттай.",
          link: "/play",
        },
        {
          id: 7,
          title: "Prodesk",
          category: "И-худалдаа",
          technologies: "React, Node.js, MongoDB, Express, Stripe",
          image: "/images/Prodesk.png",
          description:
            "Бүтээгдэхүүн хайх, найдвартай төлбөр тооцооны системтэй бүрэн цахим худалдааны платформ.",
          link: "https://github.com/red1-for-hek/prodesk",
        },
        {
          id: 8,
          title: "HekTools",
          category: "Аюулгүй байдал / Android",
          technologies: "Kotlin, Android SDK, Firebase, Python, Encryption",
          image: "/images/hektools.png",
          description:
            "Дэвшилтэт Android хяналт ба аюулгүй байдлын судалгааны хэрэгсэл. Алсын төхөөрөмжийн удирдлага, шифрлэгдсэн өгөгдөл дамжуулалттай.",
          link: "",
        },
      ],
    },
    play: {
      back: "← Нүүр хуудас руу буцах",
      you: "Та",
      white: "Цагаан",
      black: "Хар",
      moves: "Нүүдлүүд",
      newGame: "Шинэ тоглолт",
      flipBoard: "Хөлөг эргүүлэх",
      gameOver: "Тоглоом дууслаа",
      checkmate: "🏆 МАД БОЛЛОО",
      draw: "🤝 ТЭНЦЛЭЭ",
      battulgaWins: "Баттулга энэ тоглолтод яллаа!",
      youWon: "Баяр хүргэе! Та хожлоо! 🎉",
      drawMsg: "Тоглолт тэнцээгээр өндөрлөлөө.",
      result: "Үр дүн",
      whiteWins: "Цагаан хожлоо",
      blackWins: "Хар хожлоо",
      totalMoves: "Нийт нүүдэл",
      playAgain: "Дахин тоглох",
      reviewBoard: "Хөлөг харах",
      chatTitle: "Баттулгын AI төлөөлөгч",
      chatSubtitle: "Миний туршлага, технологийн сан, шатрын тухай асуугаарай!",
      chatPlaceholder: "Баттулгаас хүссэн зүйлээ асуугаарай...",
      send: "Илгээх",
      chatGreeting:
        "Сайн байна уу! Намайг Баттулга гэдэг 👋 Сонирхсон зүйлээ асуугаарай!",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem("portfolio_lang") as Language;
      if (saved === "en" || saved === "mn") return saved;
    } catch {
      // Ignore localStorage errors
    }
    return "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("portfolio_lang", lang);
    } catch {
      // Ignore localStorage errors
    }
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "mn" : "en");
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translationsData[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

