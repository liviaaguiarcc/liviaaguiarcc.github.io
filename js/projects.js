const projectCards = Array.from(document.querySelectorAll(".project-card"));
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const dossier = document.querySelector("#project-dossier");
const dossierContent = document.querySelector("[data-dossier-content]");
const dossierClose = document.querySelector(".dossier-close");
let lastFocusedProject = null;

const projectDetails = {
  hanlevel: {
    title: "HanLevel",
    category: "NLP · Korean Language Technology · Educational Technology",
    summary: "A Korean reading-level analysis tool designed to help learners understand the difficulty of Korean texts using linguistic and text-based features.",
    tags: ["Python", "Streamlit", "NLP", "Korean", "Text Analysis"],
    sections: [
      ["Overview", "HanLevel analyzes Korean texts and presents reading-difficulty information for learners."],
      ["Problem", "Learners often encounter Korean texts without a clear indication of how difficult the material is for their current level."],
      ["Goal", "Build an accessible tool that converts linguistic and textual characteristics into useful information for Korean learners."],
      ["Approach", "[ADD EXACT HANLEVEL APPROACH DETAIL]"],
      ["Features", "[ADD VERIFIED HANLEVEL FEATURE DETAIL]"],
      ["Tech Stack", "Python · Streamlit · NLP/Text Processing"],
      ["Challenges", "[ADD VERIFIED HANLEVEL CHALLENGE DETAIL]"],
      ["What I Learned", "[ADD VERIFIED HANLEVEL LEARNING DETAIL]"]
    ],
    links: [["Live Demo", "HANLEVEL_DEMO_URL"], ["GitHub", "HANLEVEL_GITHUB_URL"], ["Devpost", "HANLEVEL_DEVPOST_URL"]]
  },
  nsmc: {
    title: "NSMC Korean Movie Reviews — Data Quality & Exploratory Analysis",
    category: "Data Analysis · NLP · Korean Text Data",
    summary: "Exploratory and data-quality analysis of 200,000 Korean movie reviews from the NSMC sentiment dataset.",
    tags: ["Python", "Pandas", "NumPy", "Excel", "SQL", "NLP", "EDA"],
    sections: [
      ["Overview", "This project examines Korean movie review text data with a focus on quality, exploratory analysis and language-aware features."],
      ["Dataset", "200,000 Korean movie reviews with columns id, document and label. Sentiment labels are approximately balanced 50/50."],
      ["Questions", "What quality issues exist? How are text lengths distributed? Which simple linguistic features can support later NLP analysis?"],
      ["Data Quality", "8 empty or whitespace-only texts; 5,449 duplicate rows; 1,590 distinct duplicated texts; 1,369 duplicated texts with consistent labels; 221 duplicated texts with conflicting labels."],
      ["Cleaning", "A stratified 10,000-review sample was created with 5,000 positive and 5,000 negative reviews. In the sample: 166 duplicate rows, 0 empty texts and only 3 texts changed by normalization."],
      ["Exploratory Analysis", "Text length minimum: 1; maximum: 142; mean: approximately 35.22; median: 27. Length distribution: 1-10: 1,051; 11-20: 2,638; 21-40: 3,496; 41-80: 1,874; 81+: 941."],
      ["Linguistic Features", "Created features: text length, eojeol count, laughter marker and crying marker. Laughter yes: 805; no: 9,195. Crying yes: 335; no: 9,665."],
      ["Manual Annotation", "Exploratory annotation of 50 texts: affective/emotional: 2; descriptive/analytical: 8; direct: 21; humor/irony: 4; indeterminate: 2; intensified: 13. This small sample should not be used for broad statistical conclusions."],
      ["Key Findings", "The data contains empty texts, duplicates and conflicting labels. Reviews are generally short. Simple expressive markers and eojeol counts can support later NLP analysis."],
      ["Limitations", "The manual annotation sample is small and exploratory. Future modeling should carefully handle duplicates and conflicting labels."],
      ["Next Steps", "Add visualizations, expand annotation guidelines and use cleaned data for baseline NLP experiments."]
    ],
    links: [["Repository", "NSMC_REPOSITORY_URL"]]
  },
  hanparal: {
    title: "HanParal",
    category: "Parallel Corpora · NLP · Translation Technology",
    summary: "An open-source project exploring parallel text alignment and multilingual corpus workflows, with a focus on Korean and translation-oriented language data.",
    tags: ["NLP", "Parallel Corpora", "Translation", "Korean", "Portuguese", "Python"],
    sections: [
      ["Overview", "HanParal explores workflows for parallel text alignment and multilingual corpus development."],
      ["Motivation", "Parallel corpora are important resources for translation technology, multilingual NLP and language model evaluation."],
      ["Problem", "[ADD VERIFIED HANPARAL DETAIL]"],
      ["Approach", "[ADD VERIFIED HANPARAL DETAIL]"],
      ["Corpus/Data Workflow", "[ADD VERIFIED HANPARAL DETAIL]"],
      ["Architecture", "[ADD VERIFIED HANPARAL DETAIL]"],
      ["Challenges", "[ADD VERIFIED HANPARAL DETAIL]"],
      ["What I Learned", "[ADD VERIFIED HANPARAL DETAIL]"],
      ["Future Development", "[ADD VERIFIED HANPARAL DETAIL]"]
    ],
    links: [["Repository", "HANPARAL_GITHUB_URL"]]
  }
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    projectCards.forEach((card) => {
      const categories = card.dataset.categories || "";
      card.classList.toggle("is-hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

const renderDossier = (project) => {
  dossierContent.innerHTML = `<header><p class="eyebrow">${project.category}</p><h1 id="dossier-title">${project.title}</h1><p class="lede">${project.summary}</p><ul class="tag-list compact">${project.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul></header><div class="dossier-grid">${project.sections.map(([title, content]) => `<section class="dossier-section"><h2>${title}</h2><p>${content}</p></section>`).join("")}</div><section class="dossier-section"><h2>Links</h2><div class="action-row">${project.links.map(([label, href]) => `<a class="button ghost" href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}</div></section>`;
};

projectCards.forEach((card) => {
  const openProject = () => {
    const project = projectDetails[card.dataset.project];
    if (!project || !dossier) return;
    lastFocusedProject = card;
    renderDossier(project);
    dossier.showModal();
    dossierClose.focus();
  };

  card.addEventListener("click", openProject);
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  });
});

const closeDossier = () => {
  dossier.close();
  lastFocusedProject?.focus?.();
};

dossierClose?.addEventListener("click", closeDossier);
dossier?.addEventListener("click", (event) => {
  if (event.target === dossier) closeDossier();
});
dossier?.addEventListener("close", () => {
  lastFocusedProject?.focus?.();
});
