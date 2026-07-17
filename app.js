// Bản tiếng Việt là nội dung mặc định trong HTML.
// Đối tượng dưới đây chứa bản dịch tiếng Anh.
const translations = {
  en: {
    role: "BACKEND DEVELOPER",

    contact_title: "CONTACT",
    address: "Ha Noi",
    dob: "18/03/2000",

    skills_title: "TECHNICAL SKILLS",
    skill_cat_languages: "Languages",
    skill_languages: "JavaScript/TypeScript, Python",
    skill_cat_backend: "Backend",
    skill_backend: "Node.js, Express, Fastify, GraphQL (Apollo), REST, WebSocket",
    skill_cat_databases: "Databases",
    skill_databases: "MongoDB, MariaDB, Redis",
    skill_cat_queue: "Message Queue",
    skill_queue: "Kafka, RabbitMQ",
    skill_cat_ai_ml: "AI / ML Integration",
    skill_ai_ml:
      "RAG, LLM integration, prompt engineering, embeddings (Ollama), speech-to-text (Whisper), multi-LLM architecture",
    skill_cat_testing: "Testing",
    skill_testing: "Jest, unit & integration testing, API testing (Postman)",
    skill_cat_devops: "DevOps & Cloud",
    skill_devops: "Docker, Linux server deployment, AWS, GCP, Git",
    skill_cat_human_languages: "Human Languages",
    skill_human_languages: "English (Intermediate – reading/writing technical docs)",

    summary_title: "PROFESSIONAL SUMMARY",
    summary_text:
      "Backend Developer with 3+ years of professional experience designing and building scalable APIs, real-time systems, and data-intensive applications with Node.js and Python. Hands-on with blockchain integrations, AI-powered chatbots (RAG/LLM), performance optimization, and reliable API delivery. Strong foundation in database design, message queues, caching, system monitoring, and cloud deployment.",

    experience_title: "WORK EXPERIENCE",
    exp1_role: "Backend Developer — Silotech",
    exp1_time: "2023 – Present",
    exp1_1:
      "Designed and built REST APIs for core modules across multiple products, including user management, authentication, notifications, and order history.",
    exp1_2:
      "Designed and implemented database schemas (MongoDB, PostgreSQL) for user data, Telegram bot management, notifications, and order/transaction records.",
    exp1_3:
      "Handled asynchronous processing for token receive/transfer flows, using message queues (Kafka/RabbitMQ) to keep on-chain operations reliable and non-blocking.",
    exp1_4:
      "Optimized slow database queries to reduce response time and database load on high-traffic endpoints.",
    exp1_5:
      "Owned backend development for AI support chatbots (RAG architecture, data ingestion, embeddings, and LLM integration), automating answers to common product and technical questions.",
    exp1_6:
      "Wrote unit and integration tests to verify API behavior and reduce regressions before release.",
    exp1_7:
      "Deployed and maintained backend services on Linux servers (AWS/GCP) using Docker; collaborated through code reviews and Git-based workflows.",

    exp2_role: "Backend Developer — The Parallel",
    exp2_time: "2021 – 2023",
    exp2_fresher_title: "Fresher — 2022 – 2023",
    exp2_fresher_1:
      "Developed REST and GraphQL APIs for internal data-query tools, enabling other teams to retrieve and work with system data.",
    exp2_fresher_2:
      "Built an API monitoring and alerting system to track availability/performance (response time, uptime, throughput) and send real-time alerts via webhooks/messaging when issues were detected.",
    exp2_fresher_3:
      "Collaborated closely with frontend developers to design and refine API schemas for smooth integration.",
    exp2_fresher_4:
      "Debugged and optimized existing endpoints to improve reliability and query performance.",
    exp2_intern_title: "Intern — 2021 – 2022",
    exp2_intern_1:
      "Built backend fundamentals across Node.js, Express, Fastify, and GraphQL (Apollo Server), including authentication (JWT), caching (Redis), and WebSocket.",
    exp2_intern_2:
      "Worked with multiple databases (MongoDB, MariaDB) for data modeling and queries.",
    exp2_intern_3:
      "Learned Git-based development workflows, including branching, commits, pull requests, and resolving merge conflicts in a team environment.",
    exp2_intern_4:
      "Participated in code reviews and followed team conventions to deliver assigned tasks on internal backend features.",
    exp2_intern_5:
      "Delivered internal data/statistics reporting tasks, aggregating and querying system data for internal use.",

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
      "Built the backend for a <strong>Telegram DeFi trading bot</strong> on the <strong>TON blockchain</strong>, allowing users to execute trades directly in chat instead of using complex external tools.",
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
      "Achieved <strong>60–70% response accuracy</strong> against business requirements in the first release; released to production and actively maintained with ongoing prompt/data improvements.",
    prj3_tech:
      "<strong>Tech:</strong> Node.js, Ollama, REST API, RAG, multi-LLM integration.",

    prj4_name: "API Monitoring & Alerting System",
    prj4_meta: "The Parallel · under NDA",
    prj4_1:
      "Built a monitoring system to track <strong>availability and performance</strong>, measuring response times (DNS, TCP, first-byte), uptime, and throughput.",
    prj4_2:
      "Implemented <strong>automated alerting and root-cause analysis</strong>, sending real-time alerts via webhooks and messaging platforms to reduce mean time to resolution (MTTR).",
    prj4_3:
      "Developed <strong>traffic management</strong> to monitor traffic volume and detect spikes, preventing system overload.",
    prj4_tech:
      "<strong>Tech:</strong> Node.js, Express, Redis, webhooks, messaging integrations.",

    prj5_name: "Game Dialogue Translation Tool",
    prj5_meta: "Personal Project · 05/2026 – Present",
    prj5_1:
      "Built a desktop app that captures in-game audio and translates dialogue from <strong>English to Vietnamese</strong>, helping non-English-speaking players follow game stories without installing third-party translation patches.",
    prj5_2:
      "Integrated <strong>OpenAI Whisper</strong> for speech-to-text and <strong>Google Translate API</strong> for translation, with a planned multi-LLM integration layer for flexible provider switching.",
    prj5_3:
      "Designed subtitle history storage and multi-game support; delivered as a standalone installer for easy personal use.",
    prj5_4:
      "Achieved <strong>1–2s processing latency</strong> in the current version; actively improving toward real-time translation and a more practical in-game display experience.",
    prj5_5:
      "Released to early users and iterated based on user feedback.",
    prj5_tech:
      '<strong>Tech:</strong> Python, Whisper, Google Translate API | <strong>Repo:</strong> <a href="https://github.com/tranphuclan/game-audio-translator" target="_blank" rel="noopener">github.com/tranphuclan/game-audio-translator</a>',

    education_title: "EDUCATION",
    edu_major: "B.Sc. in Information Technology",
    edu_time: "2018 – 2022",
    edu_school: "Hanoi University of Business and Technology (HUBT)",
    edu_1:
      "Core coursework: object-oriented programming, algorithms, and data structures.",
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
