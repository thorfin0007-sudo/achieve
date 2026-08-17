const academyData = {
  exams: ["NDA", "CDS", "AFCAT", "SSC / Other Entries", "NAVY", "SSB Interviews"],
  goals: [
    { name: "NDA", icon: "ND", text: "Foundation for written exam readiness, officer mindset and first SSB exposure." },
    { name: "CDS", icon: "CD", text: "Interview, psychology and lecturette practice for graduate officer entries." },
    { name: "AFCAT", icon: "AF", text: "Air Force oriented guidance with communication, awareness and confidence drills." },
    { name: "SSC / Other Entries", icon: "OE", text: "Preparation pathway for technical, non-technical and special officer entries." },
    { name: "NAVY", icon: "NV", text: "Navy officer-entry mentoring with PI, story writing and group task readiness." }
  ],
  courses: [
    {
      id: "ssb-foundation",
      title: "21 Days SSB Foundation Course",
      duration: "21 Days",
      price: "₹14,999",
      summary: "Complete SSB preparation from screening to conference with mentor-led practice.",
      features: ["Psychology tests", "GTO orientation", "Personal interview practice", "Daily mentor feedback"],
      overview:
        "A structured 21-day course for aspirants who want a complete SSB preparation system. The program covers screening, psychology, interview, group tasks, communication and daily improvement loops.",
      audience: ["First-time SSB aspirants", "NDA, CDS, AFCAT and Navy candidates", "Repeaters who need structured correction"],
      curriculum: [
        ["Days 1-3", "Officer mindset, SSB process, screening and OIR fundamentals"],
        ["Days 4-8", "TAT, WAT, SRT and SDT practice with feedback"],
        ["Days 9-13", "Interview preparation, PIQ analysis and communication drills"],
        ["Days 14-18", "GTO tasks, group discussion, lecturette and command task approach"],
        ["Days 19-21", "Mock SSB, review, improvement plan and conference readiness"]
      ],
      learning: ["Think with clarity under pressure", "Write natural psychology responses", "Speak confidently in groups", "Present authentic officer-like qualities"],
      benefits: ["Practice sheets", "PIQ workbook", "Mock interview", "Mentor feedback", "Current affairs capsule", "Progress review"],
      faculty: "Col. Arvind Rao (Retd.)"
    },
    {
      id: "communication",
      title: "21 Days Communication Course",
      duration: "21 Days",
      price: "₹7,999",
      summary: "Speak with clarity in interviews, group discussion, lecturette and command situations.",
      features: ["English speaking drills", "GD practice", "Lecturette practice", "Confidence routines"],
      overview:
        "A focused communication course for aspirants who know what to say but struggle to express it with structure, calmness and impact.",
      audience: ["Aspirants weak in spoken English", "Students preparing for GD and lecturette", "Candidates needing interview confidence"],
      curriculum: [
        ["Week 1", "Voice clarity, sentence structure and daily speaking habits"],
        ["Week 2", "GD, lecturette, narration and opinion building"],
        ["Week 3", "Interview answers, confidence drills and final assessment"]
      ],
      learning: ["Organize thoughts quickly", "Speak naturally in English", "Handle interview follow-ups", "Lead group conversations with maturity"],
      benefits: ["Daily speaking tasks", "Recorded feedback", "Topic bank", "Lecturette tracker", "Mentor corrections"],
      faculty: "Maj. Nisha Menon (Retd.)"
    },
    {
      id: "refresher",
      title: "2 Days Refresher Course",
      duration: "2 Days",
      price: "₹2,499",
      summary: "Rapid revision for candidates close to their SSB reporting date.",
      features: ["Screening review", "Psychology revision", "Interview correction", "Final readiness checklist"],
      overview:
        "A compact high-intensity refresher for aspirants who have prepared before and need final polishing before reporting.",
      audience: ["Candidates with SSB call letters", "Repeaters needing final revision", "Aspirants short on time"],
      curriculum: [
        ["Day 1", "Screening, OIR, PPDT and psychology revision"],
        ["Day 2", "Interview, GTO orientation, final strategy and personal checklist"]
      ],
      learning: ["Avoid common last-week mistakes", "Refresh SSB structure", "Improve story and response quality", "Enter the board with calm confidence"],
      benefits: ["Two-day planner", "Readiness checklist", "Mentor review", "Practice pack"],
      faculty: "Cdr. Vikram Sethi (Retd.)"
    },
    {
      id: "interview",
      title: "Personal Interview",
      duration: "3x Interview Sessions",
      price: "₹4,999",
      summary: "One-to-one interview preparation with PIQ analysis and structured feedback.",
      features: ["3 mock interviews", "PIQ correction", "Body language feedback", "Answer framing"],
      overview:
        "A dedicated personal interview program that helps candidates present their life, achievements, responsibilities and motivation with honesty and structure.",
      audience: ["Candidates worried about PI", "Repeaters with interview gaps", "Students needing individual feedback"],
      curriculum: [
        ["Session 1", "PIQ analysis and baseline mock"],
        ["Session 2", "Detailed interview with follow-up questioning"],
        ["Session 3", "Final mock, correction plan and confidence review"]
      ],
      learning: ["Answer with authenticity", "Structure personal examples", "Handle pressure questions", "Improve posture and delivery"],
      benefits: ["PIQ workbook", "Interview recordings notes", "One-to-one feedback", "Improvement plan"],
      faculty: "Col. Arvind Rao (Retd.)"
    },
    {
      id: "recorded-ssb",
      title: "Pre-Recorded SSB Course",
      duration: "Self-paced",
      price: "₹5,999",
      summary: "Recorded classes, downloadable material and guided practice for flexible preparation.",
      features: ["Recorded classes", "Study material", "Practice assignments", "Topic-wise revision"],
      overview:
        "A self-paced course for aspirants who want structured SSB learning with the flexibility to study around school, college or work.",
      audience: ["Self-paced learners", "Working aspirants", "Students beginning SSB preparation"],
      curriculum: [
        ["Module 1", "SSB overview, screening and OIR"],
        ["Module 2", "Psychology tests and writing approach"],
        ["Module 3", "Interview and personality preparation"],
        ["Module 4", "GTO tasks, current affairs and final revision"]
      ],
      learning: ["Understand each SSB stage", "Practice at your own pace", "Use templates without sounding scripted", "Track topic completion"],
      benefits: ["Recorded classes", "Downloadable notes", "Practice library", "Access support"],
      faculty: "AchieveX Mentor Panel"
    }
  ],
  articles: [
    { category: "Defence News", date: "13 Aug 2026", title: "Modernization Priorities In Indian Defence", text: "Aspirant-friendly analysis for interview discussion and lecturette examples." },
    { category: "National Affairs", date: "12 Aug 2026", title: "Leadership Lessons From Public Service", text: "How to convert national developments into mature SSB opinions." },
    { category: "International Affairs", date: "11 Aug 2026", title: "India's Strategic Neighbourhood Watch", text: "A clear brief for GD, interview follow-ups and defence awareness." },
    { category: "Defence Updates", date: "10 Aug 2026", title: "Jointness, Technology And Future Warfare", text: "What aspirants should understand beyond headline reading." },
    { category: "SSB Current Affairs", date: "09 Aug 2026", title: "Weekly Lecturette Topic Bank", text: "Fresh topics with structured points for balanced speaking practice." }
  ],
  magazines: [
    { month: "August 2026", title: "Officer Awareness Digest", text: "Defence news, SSB topics, essays and interview cues." },
    { month: "July 2026", title: "Psychology Practice Special", text: "TAT, WAT and SRT sets with guided analysis." },
    { month: "June 2026", title: "NDA & CDS Interview Issue", text: "Officer-entry briefs, PIQ examples and current affairs." }
  ],
  resources: [
    ["TAT Story Set 01", "TAT", "Practice PDF", true],
    ["WAT Response Builder", "WAT", "Worksheet", true],
    ["SRT Daily Drill", "SRT", "Practice Set", true],
    ["SDT Self Description Guide", "SDT", "Workbook", true],
    ["OIR Verbal Reasoning", "OIR", "Quiz", false],
    ["PPDT Narration Framework", "PPDT", "Video", true],
    ["Interview PIQ Checklist", "Interview Preparation", "Checklist", false],
    ["Psychology Test Planner", "Psychology", "Planner", true],
    ["Defence Current Affairs Notes", "Current Affairs", "Monthly Notes", false]
  ].map(([title, category, type, locked]) => ({ title, category, type, locked })),
  tests: ["TAT Tests", "WAT Tests", "SRT Tests", "SDT Tests", "PPDT Tests", "OIR Tests", "Mock SSB Tests"],
  webinars: [
    { title: "Cracking The First 5 Minutes Of PI", speaker: "Col. Arvind Rao (Retd.)", date: "18 Aug 2026", time: "7:00 PM", topic: "Personal Interview", price: "Free" },
    { title: "Psychology Writing Without Coaching Language", speaker: "Maj. Nisha Menon (Retd.)", date: "24 Aug 2026", time: "6:30 PM", topic: "Psychology", price: "Paid" },
    { title: "NDA Aspirant Roadmap", speaker: "AchieveX Mentor Panel", date: "30 Jul 2026", time: "5:00 PM", topic: "NDA", price: "Free" }
  ],
  features: [
    ["Experienced Defence Mentors", "Training led by officers and domain experts who understand the board process."],
    ["Practical SSB Guidance", "Clear drills and feedback instead of generic motivation or memorized answers."],
    ["Personalized Feedback", "Candidate-specific correction plans for communication, psychology and PI."],
    ["Realistic Mock Interviews", "Pressure-aware interview practice with PIQ and background analysis."],
    ["Psychology Preparation", "Natural response building for TAT, WAT, SRT and SDT."],
    ["Proven Training Methodology", "Structured practice loops designed for consistency and measurable readiness."]
  ],
  timeline: [
    ["2006", "Early Career", "Entered uniformed service training with discipline and academic focus."],
    ["2008", "Training", "Learned command, endurance and team performance in demanding environments."],
    ["2012", "Military Service", "Served in operational and administrative leadership responsibilities."],
    ["2016", "Leadership", "Mentored young teams and refined practical assessment methods."],
    ["2020", "Experience", "Translated defence experience into aspirant-focused learning systems."],
    ["2024", "Academy", "Founded AchieveX to prepare aspirants with premium structure and ethics."]
  ],
  mentors: [
    { name: "Col. Arvind Rao", role: "Chief Mentor | Retd.", exp: "22 years experience", spec: "Interview, GTO, leadership", bio: "Known for precise PIQ analysis and calm, direct mentoring." },
    { name: "Maj. Nisha Menon", role: "Psychology Faculty | Retd.", exp: "14 years experience", spec: "TAT, WAT, SRT, SDT", bio: "Helps students write natural responses with mature self-awareness." },
    { name: "Cdr. Vikram Sethi", role: "Defence Awareness Mentor | Retd.", exp: "18 years experience", spec: "Navy entries, current affairs", bio: "Builds interview-ready defence awareness and service motivation." }
  ],
  testimonials: [
    { quote: "The feedback was direct and practical. I stopped trying to perform and started communicating honestly.", name: "Rohan S., Recommended Candidate" },
    { quote: "My psychology responses became more natural within two weeks. The mocks felt close to the actual board.", name: "Aditi P., AFCAT SSB" },
    { quote: "The PI sessions helped me understand my own story and present it with confidence.", name: "Karan M., CDS Entry" }
  ],
  faqs: [
    ["What is SSB?", "SSB is a multi-day officer selection process that assesses personality, psychology, communication, leadership and suitability for commissioned service."],
    ["Who can join?", "NDA, CDS, AFCAT, Navy and other officer-entry aspirants can join based on their target exam and SSB timeline."],
    ["Which exams do you prepare for?", "We prepare candidates for NDA, CDS, AFCAT, Navy entries, SSC entries and SSB interviews."],
    ["What is the course duration?", "Course duration ranges from 2-day refreshers to 21-day structured programs and self-paced recorded modules."],
    ["Is the course online or offline?", "The website is structured for both online and offline batches. Final mode can be connected to backend batch management later."],
    ["What study material is included?", "Practice sets, workbooks, current affairs notes, interview sheets and topic-wise resources are included depending on the course."],
    ["Do you provide personal interviews?", "Yes. Dedicated personal interview sessions include PIQ analysis, mock interviews and correction plans."],
    ["How does enrolment work?", "Review the course details, compare options, and contact the academy team through the contact section for counselling and batch guidance."],
    ["How can I contact a mentor?", "Use the contact section or call the academy directly to speak with a mentor and discuss course guidance."]
  ]
};

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

function createElement(tag, className, html) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (html) element.innerHTML = html;
  return element;
}

function fillSelects() {
  qsa("[data-exam-options]").forEach((select) => {
    select.innerHTML = `<option value="">Select target exam</option>${academyData.exams.map((exam) => `<option>${exam}</option>`).join("")}`;
  });
  qsa("[data-course-options]").forEach((select) => {
    select.innerHTML = `<option value="">Select preferred course</option>${academyData.courses.map((course) => `<option>${course.title}</option>`).join("")}`;
  });
}

function renderHome() {
  const goalRoot = qs("[data-goals]");
  if (goalRoot) {
    goalRoot.innerHTML = academyData.goals
      .map(
        (goal) => `
        <article class="card goal-card reveal">
          <span class="icon-chip">${goal.icon}</span>
          <h3>${goal.name}</h3>
          <p>${goal.text}</p>
          <a class="btn btn-secondary" href="#courses">Explore</a>
        </article>`
      )
      .join("");
  }

  const coursesRoot = qs("[data-courses]");
  if (coursesRoot) {
    coursesRoot.innerHTML = academyData.courses
      .map(
        (course) => `
        <article class="course-card reveal">
          <span class="badge">${course.duration}</span>
          <h3>${course.title}</h3>
          <p>${course.summary}</p>
          <ul class="course-list">${course.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
          <div class="price">${course.price}</div>
          <div class="hero-actions">
            <a class="btn btn-secondary" href="course.html?course=${course.id}">View Details</a>
            <a class="btn btn-primary" href="course.html?course=${course.id}">View Course</a>
          </div>
        </article>`
      )
      .join("");
  }

  const articleRoot = qs("[data-articles]");
  if (articleRoot) {
    articleRoot.innerHTML = academyData.articles
      .map(
        (article) => `
        <article class="article-card reveal">
          <span class="badge">${article.category}</span>
          <p>${article.date}</p>
          <h3>${article.title}</h3>
          <p>${article.text}</p>
          <a class="link-button" href="#current-affairs">Read More</a>
        </article>`
      )
      .join("");
  }

  const magazineRoot = qs("[data-magazines]");
  if (magazineRoot) {
    magazineRoot.innerHTML = academyData.magazines
      .map(
        (magazine) => `
        <article class="magazine-card reveal">
          <div class="magazine-cover"><span>ACHIEVEX</span><strong>${magazine.month.split(" ")[0]}</strong><small>${magazine.month.split(" ")[1]}</small></div>
          <h3>${magazine.title}</h3>
          <p>${magazine.text}</p>
          <div class="hero-actions">
            <a class="btn btn-secondary" href="#magazine">Read Online</a>
            <a class="btn btn-primary" href="#magazine">Access</a>
          </div>
        </article>`
      )
      .join("");
  }

  renderResources("All");
  renderSimpleCollections();
}

function renderResources(activeCategory) {
  const filterRoot = qs("[data-resource-filters]");
  const resourceRoot = qs("[data-resources]");
  if (!filterRoot || !resourceRoot) return;
  const categories = ["All", ...new Set(academyData.resources.map((resource) => resource.category))];
  filterRoot.innerHTML = categories
    .map((category) => `<button type="button" class="${category === activeCategory ? "active" : ""}" data-resource-filter="${category}">${category}</button>`)
    .join("");

  const search = (qs("[data-resource-search]")?.value || "").trim().toLowerCase();
  const filtered = academyData.resources.filter((resource) => {
    const categoryMatch = activeCategory === "All" || resource.category === activeCategory;
    const searchMatch = !search || `${resource.title} ${resource.category} ${resource.type}`.toLowerCase().includes(search);
    return categoryMatch && searchMatch;
  });

  resourceRoot.innerHTML = filtered
    .map(
      (resource) => `
      <article class="resource-card reveal visible">
        <span class="badge">${resource.category}</span>
        <h3>${resource.title}</h3>
        <p>${resource.type}${resource.locked ? " | Protected material" : " | Open preview"}</p>
        <a class="btn ${resource.locked ? "btn-secondary" : "btn-primary"}" href="${resource.locked ? "login.html" : "#materials"}">${resource.locked ? "Student Access" : "Access"}</a>
      </article>`
    )
    .join("");
}

function renderSimpleCollections() {
  const testRoot = qs("[data-tests]");
  if (testRoot) {
    testRoot.innerHTML = academyData.tests
      .map(
        (test, index) => `
        <article class="test-card reveal">
          <span class="icon-chip">${String(index + 1).padStart(2, "0")}</span>
          <h3>${test}</h3>
          <p>Start practice, submit answers, view score and track recommended revision in the student dashboard.</p>
          <a class="btn btn-secondary" href="login.html">Start Test</a>
        </article>`
      )
      .join("");
  }

  const webinarRoot = qs("[data-webinars]");
  if (webinarRoot) {
    webinarRoot.innerHTML = academyData.webinars
      .map(
        (webinar) => `
        <article class="webinar-card reveal">
          <span class="badge">${webinar.price}</span>
          <h3>${webinar.title}</h3>
          <p><strong>Speaker:</strong> ${webinar.speaker}<br><strong>Date:</strong> ${webinar.date}<br><strong>Time:</strong> ${webinar.time}<br><strong>Topic:</strong> ${webinar.topic}</p>
          <a class="btn btn-primary" href="#webinars">View Session</a>
        </article>`
      )
      .join("");
  }

  const featureRoot = qs("[data-features]");
  if (featureRoot) {
    featureRoot.innerHTML = academyData.features
      .map(
        ([title, text], index) => `
        <article class="feature-card reveal">
          <span class="icon-chip">${String(index + 1).padStart(2, "0")}</span>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>`
      )
      .join("");
  }

  const timelineRoot = qs("[data-timeline]");
  if (timelineRoot) {
    timelineRoot.innerHTML = academyData.timeline
      .map(
        ([year, title, text]) => `
        <article class="timeline-item reveal">
          <strong>${year}</strong>
          <h3>${title}</h3>
          <p>${text}</p>
        </article>`
      )
      .join("");
  }

  renderMentors();
  renderTestimonials();
  renderFaqs();
}

function renderMentors() {
  const mentorRoot = qs("[data-mentors]");
  if (!mentorRoot) return;
  mentorRoot.innerHTML = academyData.mentors
    .map(
      (mentor) => `
      <article class="mentor-card reveal">
        <div class="mentor-photo"><img src="assets/ssb-hero.png" alt="${mentor.name}" loading="lazy"></div>
        <h3>${mentor.name}</h3>
        <p><strong>${mentor.role}</strong><br>${mentor.exp}<br>${mentor.spec}</p>
        <p>${mentor.bio}</p>
        <a class="btn btn-secondary" href="#mentors">View Profile</a>
      </article>`
    )
    .join("");
}

function renderTestimonials() {
  qsa("[data-testimonials]").forEach((root) => {
    root.innerHTML = academyData.testimonials
      .map(
        (item) => `
        <article class="testimonial-card reveal">
          <blockquote>"${item.quote}"</blockquote>
          <cite>${item.name}</cite>
        </article>`
      )
      .join("");
  });
}

function renderFaqs() {
  qsa("[data-faqs]").forEach((root) => {
    root.innerHTML = academyData.faqs
      .map(
        ([question, answer]) => `
        <details class="reveal">
          <summary>${question}</summary>
          <p>${answer}</p>
        </details>`
      )
      .join("");
  });
}

function renderCourseDetail() {
  const detailRoot = qs("[data-course-detail]");
  if (!detailRoot) return;
  const requestedId = new URLSearchParams(location.search).get("course") || "ssb-foundation";
  const course = academyData.courses.find((item) => item.id === requestedId) || academyData.courses[0];
  document.title = `${course.title} | AchieveX Defence Academy`;
  qs("[data-course-title]").textContent = course.title;
  qs("[data-course-summary]").textContent = course.summary;
  qs("[data-course-duration]").textContent = course.duration;
  qs("[data-course-price]").textContent = course.price;
  qs("[data-course-overview]").textContent = course.overview;
  qs("[data-course-price-side]").textContent = course.price;
  qs("[data-course-side-copy]").textContent = `${course.duration} | Includes mentor support, study material and structured practice.`;
  qs("[data-course-audience]").innerHTML = course.audience.map((item) => `<li>${item}</li>`).join("");
  qs("[data-course-curriculum]").innerHTML = course.curriculum
    .map(([phase, text]) => `<article><strong>${phase}</strong><p>${text}</p></article>`)
    .join("");
  qs("[data-course-learning]").innerHTML = course.learning.map((item) => `<article class="feature-card"><h3>${item}</h3></article>`).join("");
  qs("[data-course-benefits]").innerHTML = course.benefits.map((item) => `<article class="feature-card"><h3>${item}</h3></article>`).join("");
  qs("[data-course-faculty]").innerHTML = `<img src="assets/ssb-hero.png" alt="${course.faculty}" loading="lazy"><div><h3>${course.faculty}</h3><p>Course mentor with defence selection and candidate-feedback experience.</p></div>`;
  renderTestimonials();
  renderFaqs();
}

function setupNavigation() {
  const toggle = qs("[data-menu-toggle]");
  const nav = qs("[data-nav]");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.setAttribute("aria-label", nav.classList.contains("open") ? "Close navigation" : "Open navigation");
  });
  qsa("a", nav).forEach((link) => link.addEventListener("click", () => nav.classList.remove("open")));
}

function setupContactAndLogin() {
  // Brochure-only experience: no form submission flow remains.
}

function setupResourceFilters() {
  let activeCategory = "All";
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-resource-filter]");
    if (!button) return;
    activeCategory = button.dataset.resourceFilter;
    renderResources(activeCategory);
  });
  qs("[data-resource-search]")?.addEventListener("input", () => renderResources(activeCategory));
}

function setupRevealAndCounters() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        if (entry.target.classList.contains("stat")) animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );
  qsa(".reveal, .stat").forEach((node) => observer.observe(node));
}

function animateCounter(stat) {
  const target = qs("[data-count]", stat);
  if (!target) return;
  const end = Number(target.dataset.count);
  const suffix = end >= 100 ? "+" : "+";
  const start = performance.now();
  const duration = 1200;
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.floor(end * (1 - Math.pow(1 - progress, 3)));
    target.textContent = `${value}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

document.addEventListener("DOMContentLoaded", () => {
  fillSelects();
  renderHome();
  renderCourseDetail();
  setupNavigation();
  setupContactAndLogin();
  setupResourceFilters();
  setupRevealAndCounters();
});
