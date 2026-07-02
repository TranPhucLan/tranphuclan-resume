// Bản tiếng Việt là nội dung mặc định trong HTML.
// Đối tượng dưới đây chứa bản dịch tiếng Anh.
const translations = {
  en: {
    role: "BACKEND DEVELOPER",

    contact_title: "CONTACT",
    address: "Ha Noi",
    dob: "18/03/2000",

    skills_title: "SKILLS",
    skill_cat_languages: "Languages",
    skill_languages: "JavaScript/TypeScript, Python",
    skill_cat_backend: "Backend",
    skill_backend: "Node.js, Express, GraphQL (Apollo), REST",
    skill_cat_databases: "Databases",
    skill_databases: "MongoDB, PostgreSQL, Redis",
    skill_cat_queue: "Message Queue",
    skill_queue: "Kafka, RabbitMQ",
    skill_cat_ai_ml: "AI / ML Integration",
    skill_ai_ml:
      "RAG, LLM integration, prompt engineering, embeddings (Ollama), speech-to-text (Whisper), multi-LLM architecture",
    skill_cat_devops: "DevOps & Cloud",
    skill_devops: "Docker, CI/CD, AWS, GCP, Git",
    skill_cat_concepts: "Concepts",
    skill_concepts:
      "RESTful & GraphQL API design, caching strategies, API monitoring, Microservices, network protocols (REST, SOAP, TCP/IP, HTTP/HTTPS)",

    lang_title: "LANGUAGES",
    lang_vi: "Vietnamese",
    lang_vi_level: "Native",
    lang_en: "English",
    lang_en_level: "Basic",

    summary_title: "SUMMARY",
    summary_text:
      "Backend Developer with 4+ years of experience designing and building scalable APIs, real-time systems, and data-intensive applications with Node.js and Python. Experienced in blockchain integrations, AI-powered chatbots, and performance optimization. Strong foundation in database design, message queues, system monitoring, and cloud deployment.",

    experience_title: "WORK EXPERIENCE",
    exp1_role: "Backend Developer — Silotech",
    exp1_time: "2022 – Present",
    exp1_1: "Promoted from Fresher to Junior Backend Developer.",
    exp1_3:
      "Developed and launched multiple production Telegram chatbot systems for blockchain products, using Kafka/RabbitMQ for asynchronous message processing.",
    exp1_4:
      "Designed and implemented database schemas for blockchain products using MongoDB and PostgreSQL, ensuring data integrity and scalability.",
    exp1_5:
      "Built and maintained AI-powered support chatbots for blockchain products, covering architecture design, data processing, and LLM integration.",
    exp1_6:
      "Deployed and maintained backend services using Docker, CI/CD pipelines, and cloud infrastructure (AWS/GCP).",

    exp2_role: "Backend Developer — The Parallel",
    exp2_time: "2021 – 2022",
    exp2_1:
      "Promoted from Backend Intern to Fresher Backend Developer within the first year — recognized for strong technical fundamentals and consistent delivery.",
    exp2_2:
      "Developed RESTful and GraphQL APIs with Node.js, Express, Apollo, and MongoDB; owned assigned features end to end from design to deployment.",
    exp2_3:
      "Collaborated with frontend developers on API schema design, built reusable modules, and optimized endpoints to improve system reliability and performance.",

    projects_title: "PROJECTS",

    prj1_name: "Blockchain Transaction Fee Optimization Service (TRON)",
    prj1_meta: "Silotech · under NDA",
    prj1_1:
      "Designed and built backend services on the <strong>TRON blockchain</strong> to reduce on-chain transaction fees by <strong>~66%</strong> through automated <strong>Energy & Bandwidth</strong> resource management.",
    prj1_2:
      "Developed REST APIs for resource purchasing, allocation, and usage tracking, enabling users to buy and consume TRON resources without manual on-chain operations.",
    prj1_3:
      "Integrated <strong>TronWeb</strong> to interact with smart contracts, submit transactions, and monitor on-chain status for purchase and consumption flows.",
    prj1_4:
      "Designed <strong>MongoDB</strong> schemas for orders, resource balances, and transaction history; used <strong>Redis</strong> caching to reduce database load and improve API response time.",
    prj1_5:
      "Implemented a passive-income module that lets users rent out unused Energy/Bandwidth resources securely through the platform.",
    prj1_tech:
      "<strong>Tech:</strong> Node.js, Express, TronWeb, MongoDB, Redis.",

    prj2_name: "DeFi Trading Bot (Telegram · TON)",
    prj2_meta: "Silotech · under NDA",
    prj2_1:
      "Built the backend for a <strong>Telegram DeFi trading bot</strong> on the TON blockchain, allowing users to execute trades directly in chat instead of using complex external tools.",
    prj2_2:
      "Designed bot command flows and trade orchestration logic to convert multi-step DeFi operations into <strong>one-click trading</strong> actions.",
    prj2_3:
      "Integrated <strong>Telegram Bot API</strong> for user interaction and <strong>TON SDK</strong> for on-chain swap/transaction execution and status tracking.",
    prj2_4:
      "Handled wallet connection, order validation, and transaction result feedback within the bot workflow.",
    prj2_5:
      "Supported multiple trading scenarios across TON-based DeFi products while keeping the user experience simple and fast.",
    prj2_tech: "<strong>Tech:</strong> Node.js, Telegram Bot API, TON SDK.",

    prj3_name: "AI Support Chatbot for TRON Blockchain",
    prj3_meta: "Silotech · under NDA",
    prj3_1:
      "Designed and built a production AI chatbot on the <strong>TRON blockchain</strong> to answer product usage, transaction/fee (Energy & Bandwidth), and technical support questions.",
    prj3_2:
      "Implemented a <strong>RAG-based architecture</strong> with a knowledge base built from internal docs, FAQs, and product documentation; applied prompt engineering to improve response quality.",
    prj3_3:
      "Processed and embedded training data using <strong>Ollama</strong>, with a <strong>multi-LLM integration layer</strong> that supports swapping LLM providers without changing core logic.",
    prj3_4:
      "Achieved <strong>60–70% response accuracy</strong> against business requirements; released to production and actively maintained.",
    prj3_tech:
      "<strong>Tech:</strong> Node.js, Ollama, REST API, RAG, multi-LLM integration.",

    prj4_name: "API Monitoring & Alerting System",
    prj4_meta: "The Parallel · under NDA",
    prj4_1:
      "Built a monitoring system to track <strong>availability and performance</strong>, measuring response times (DNS, TCP, first-byte), uptime, and throughput.",
    prj4_2:
      "Implemented <strong>automated alerting and root-cause analysis</strong>, sending real-time alerts via webhooks and messaging platforms to reduce MTTR.",
    prj4_3:
      "Developed <strong>traffic management</strong> to monitor traffic volume and detect spikes, preventing system overload.",
    prj4_tech:
      "<strong>Tech:</strong> Node.js, Express, Redis, webhooks, messaging integrations.",

    prj5_name: "game-audio-translator",
    prj5_meta: "Personal Project · 05/2026 – Present",
    prj5_1:
      "Built a desktop app that captures in-game audio and translates dialogue from <strong>English to Vietnamese</strong>, helping non-English-speaking players follow game stories without installing third-party translation patches.",
    prj5_2:
      "Integrated <strong>OpenAI Whisper</strong> for speech-to-text and <strong>AI models</strong> for translation, with a planned multi-LLM integration layer for flexible provider switching.",
    prj5_3:
      "Designed subtitle history storage and multi-game support; delivered as a standalone installer. Achieved <strong>1–2s processing latency</strong> and used by <strong>~10 early users</strong> for feedback and iteration.",
    prj5_tech:
      '<strong>Tech:</strong> Python, Whisper, AI Model | <strong>Repo:</strong> <a href="https://github.com/tranphuclan/game-audio-translator" target="_blank" rel="noopener">github.com/tranphuclan/game-audio-translator</a>',

    education_title: "EDUCATION",
    edu_major: "B.Sc. in Information Technology",
    edu_time: "2018 – 2022",
    edu_school: "Hanoi University of Business and Technology (HUBT)",
    edu_1:
      "Focused on core concepts: object-oriented programming, algorithms, and data structures.",
    edu_2: "Completed individual and team programming projects.",
    edu_3: "Participated in coding clubs and competitions.",
  },
};

const langToggle = document.getElementById("lang-toggle");
const langFlag = langToggle.querySelector(".flag");
const pdfDownload = document.getElementById("pdf-download");
const dock = document.getElementById("dock");
const dockHandle = document.getElementById("dock-handle");
const dockPanel = dock.querySelector(".dock-panel");
const resumeEl = document.querySelector(".resume");

// Lưu lại nội dung tiếng Việt gốc để có thể chuyển ngược lại.
const viDefaults = {};
document.querySelectorAll("[data-i18n]").forEach((el) => {
  viDefaults[el.getAttribute("data-i18n")] = el.innerHTML;
});

function getLangFromUrl() {
  const lang = new URLSearchParams(window.location.search).get("lang");
  return lang === "en" || lang === "vi" ? lang : null;
}

function syncLangToUrl(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState(null, "", url);
}

function getInitialLanguage() {
  return getLangFromUrl() ?? (localStorage.getItem("resume-lang") === "en" ? "en" : "vi");
}

function applyLanguage(lang) {
  const isEn = lang === "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = isEn ? translations.en[key] ?? viDefaults[key] : viDefaults[key];
  });

  document.documentElement.lang = isEn ? "en" : "vi";
  langFlag.textContent = isEn ? "🇬🇧" : "🇻🇳";
  langToggle.setAttribute("aria-pressed", String(isEn));
  const langTitle = isEn ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh";
  langToggle.setAttribute("aria-label", langTitle);
  langToggle.setAttribute("title", langTitle);

  const pdfTitle = isEn ? "Download CV (PDF)" : "Tải CV (PDF)";
  pdfDownload.setAttribute("aria-label", pdfTitle);
  pdfDownload.setAttribute("title", pdfTitle);
  localStorage.setItem("resume-lang", lang);
  syncLangToUrl(lang);
}

// Dock nép vào mép phải.
// - Khi còn khoảng trống bên cạnh (không đè lên CV): luôn mở, ghim cố định.
// - Khi dock đè lên nội dung CV: thu vào thành tay cầm, bấm mới hiện.
function setDockOpen(open) {
  dock.classList.toggle("open", open);
  dockHandle.setAttribute("aria-expanded", String(open));
  dockHandle.setAttribute("aria-label", open ? "Thu gọn công cụ" : "Mở công cụ");
}

// Bảng nút (khi mở) có đè lên khối .resume không?
function dockOverlapsResume() {
  if (!resumeEl) return false;
  const r = resumeEl.getBoundingClientRect();
  const h = dockHandle.getBoundingClientRect();
  const gap = 6; // khoảng cách panel ↔ tay cầm (~0.4rem)
  const panelW = dockPanel.offsetWidth;
  const panelH = dockPanel.offsetHeight;
  const pRight = h.left - gap;
  const pLeft = pRight - panelW;
  const cy = h.top + h.height / 2;
  const pTop = cy - panelH / 2;
  const pBottom = cy + panelH / 2;
  return pLeft < r.right && pRight > r.left && pTop < r.bottom && pBottom > r.top;
}

let dockPinnedOpen = false;
let prevOverlap = null;

function updateDockState() {
  const overlap = dockOverlapsResume();
  if (overlap === prevOverlap) return;
  prevOverlap = overlap;
  dockPinnedOpen = !overlap;
  setDockOpen(!overlap);
}

let dockRaf = null;
function scheduleDockUpdate() {
  if (dockRaf) return;
  dockRaf = requestAnimationFrame(() => {
    dockRaf = null;
    updateDockState();
  });
}

dockHandle.addEventListener("click", (e) => {
  e.stopPropagation();
  setDockOpen(!dock.classList.contains("open"));
});

document.addEventListener("click", (e) => {
  if (!dockPinnedOpen && dock.classList.contains("open") && !dock.contains(e.target)) {
    setDockOpen(false);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !dockPinnedOpen) setDockOpen(false);
});

window.addEventListener("scroll", scheduleDockUpdate, { passive: true });
window.addEventListener("resize", scheduleDockUpdate);
window.addEventListener("load", updateDockState);
updateDockState();

langToggle.addEventListener("click", () => {
  const current = localStorage.getItem("resume-lang") === "en" ? "en" : "vi";
  applyLanguage(current === "en" ? "vi" : "en");
});

// Tạo PDF trực tiếp từ trang: dùng hộp thoại in của trình duyệt
// (đã có sẵn CSS @media print) nên bản PDF luôn khớp ngôn ngữ đang xem.
pdfDownload.addEventListener("click", () => {
  const lang = localStorage.getItem("resume-lang") === "en" ? "en" : "vi";
  // Tên file gợi ý khi chọn "Save as PDF" chính là document.title.
  const prevTitle = document.title;
  document.title = `Tran-Phuc-Lan-CV-${lang}`;
  window.addEventListener(
    "afterprint",
    () => {
      document.title = prevTitle;
    },
    { once: true }
  );
  window.print();
});

applyLanguage(getInitialLanguage());
