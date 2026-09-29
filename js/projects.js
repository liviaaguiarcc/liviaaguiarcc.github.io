const projectCards = Array.from(document.querySelectorAll(".project-card"));
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const dossier = document.querySelector("#project-dossier");
const dossierContent = document.querySelector("[data-dossier-content]");
const dossierClose = document.querySelector(".dossier-close");
let lastFocusedProject = null;
let activeProjectKey = null;

const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
const paragraphs = (items) => items.map((item) => `<p>${item}</p>`).join("");
const metrics = (items) => `<div class="case-metrics">${items.map(([value, label]) => `<article><strong>${value}</strong><span>${label}</span></article>`).join("")}</div>`;

const projectDetails = {
  hanlevel: {
    title: "HanLevel",
    category: "Korean NLP · Educational Technology · Readability",
    status: "Completed · Sep 2026",
    summary: "An interpretable Korean readability profiler designed to help learners and educators evaluate whether a Korean text is appropriate for a learner’s level and understand which linguistic features influence its difficulty.",
    tags: ["Python", "Streamlit", "Korean NLP", "Kiwi", "Readability"],
    sections: [
      { label: "01", title: "The Problem", content: paragraphs(["Choosing appropriate Korean reading material can be difficult for both independent learners and teachers. A text may appear short or familiar while still containing advanced vocabulary, dense grammatical structures or long sentences. HanLevel was built to answer two practical questions: Is this text appropriate for the learner’s level? And what exactly is making it easy or difficult?"]) },
      { label: "02", title: "How It Works", content: paragraphs(["Users paste Korean text directly into the application.", "HanLevel returns:"]) + list(["estimated difficulty: Beginner, Intermediate or Advanced", "HanLevel score from 0–100", "vocabulary difficulty", "grammar and morphological complexity", "sentence-length complexity", "dictionary coverage", "vocabulary-level distribution", "potentially challenging vocabulary", "detected structural markers", "average eojeol per sentence", "an explanation of the factors influencing the final result"]) },
      { label: "", title: "Scoring", content: metrics([["45%", "Vocabulary difficulty"], ["35%", "Grammar & morphology"], ["20%", "Sentence length"]]) + paragraphs(["Classification thresholds: <25 — Beginner; 25–<50 — Intermediate; ≥50 — Advanced", "<small>These thresholds are project-specific and provisional. They are not official TOPIK or CEFR boundaries.</small>"]) },
      { label: "03", title: "NLP Approach", content: paragraphs(["Vocabulary uses learner-level lexical information derived from the Korean Learners’ Dictionary (한국어기초사전).", "Vocabulary levels: 초급 → 0; 중급 → 50; 고급 → 100. Unknown/unclassified vocabulary is left unclassified rather than automatically treated as easy or difficult.", "Grammar uses Kiwi / kiwipiepy for Korean morphological analysis.", "Structural signals include:"]) + list(["connective endings", "adnominal endings", "nominalizing endings", "auxiliary verbs", "quotation particles", "prefinal endings", "morphological density"]) + paragraphs(["Sentence complexity uses average eojeol per sentence as an additional structural-complexity signal."]) },
      { label: "04", title: "Data & Deployment", content: metrics([["~969 MB", "Original KRDICT export across 11 JSON files"], ["~1.79 MB", "Deployed lexical index"]]) + paragraphs(["HanLevel uses a compact local lexical index derived from the Korean Learners’ Dictionary instead of a live API. This improves deployment stability, speed and reproducibility."]) },
      { label: "05", title: "Internal Calibration", content: metrics([["5", "Beginner texts"], ["5", "Intermediate texts"], ["5", "Advanced texts"], ["15 / 15", "Internal calibration agreement"]]) + paragraphs(["This is internal calibration agreement, not an external evaluation result. The calibration set is small and internally constructed."]) },
      { label: "06", title: "Tech Stack", content: list(["Python", "Streamlit", "Kiwi / kiwipiepy", "KRDICT-derived lexical index", "GitHub", "Streamlit Community Cloud"]) },
      { label: "07", title: "Limitations", content: list(["small internal calibration set", "provisional thresholds", "some vocabulary remains unclassified", "homonyms are not fully context-disambiguated", "grammar score uses structural indicators rather than full pedagogical grammar analysis", "very short texts provide less evidence", "sentence length represents only one aspect of syntactic complexity"]) },
      { label: "08", title: "Future Direction", content: paragraphs(["HanLevel v1.0 may explore:"]) + list(["level-aware text adaptation", "Korean text simplification", "learner-friendly explanations", "vocabulary support", "comprehension questions", "reading recommendations", "broader evaluation"]) }
    ],
    links: [["Live App", "https://hanlevel.streamlit.app/"], ["GitHub", "https://github.com/liviaaguiarcc/HanLevel"], ["Devpost", "https://devpost.com/software/hanlevel"], ["Video Demo", "https://youtu.be/wGAb7SvXj-o?si=O36g_ZAJPjPJTn9N"]]
  },
  nsmc: {
    title: "NSMC Korean Movie Reviews",
    subtitle: "Data Quality & Exploratory Analysis",
    category: "Data & Analytics · Korean NLP",
    status: "In Progress · 2026",
    summary: "An ongoing personal data and NLP project exploring the structure, quality and linguistic characteristics of the NSMC Korean sentiment dataset through data cleaning, exploratory analysis, feature engineering and small-scale manual annotation.",
    tags: ["Python", "Pandas", "Excel", "Korean NLP", "EDA"],
    sections: [
      { label: "01", title: "Dataset", content: paragraphs(["200,000 Korean movie reviews", "Columns: id · document · label", "Sentiment distribution: approximately 50 / 50 positive and negative"]) },
      { label: "02", title: "Data Quality", content: metrics([["8", "Empty / whitespace texts"], ["5,449", "Duplicate rows"], ["1,590", "Distinct duplicated texts"], ["221", "Conflicting labels"]]) + paragraphs(["1,369 duplicated texts have consistent labels."]) },
      { label: "03", title: "Text Exploration", content: paragraphs(["Text length: minimum 1; maximum 142; mean ≈ 35.22; median 27", "For the 10,000-review stratified sample: 5,000 positive and 5,000 negative", "Length distribution: 1–10: 1,051; 11–20: 2,638; 21–40: 3,496; 41–80: 1,874; 81+: 941"]) },
      { label: "04", title: "Sample & Normalization", content: paragraphs(["10,000-review stratified sample", "166 duplicate rows", "0 empty texts", "Normalization changed only 3 texts"]) },
      { label: "05", title: "Language-Aware Features", content: paragraphs(["Created features:"]) + list(["text length", "eojeol count", "laughter marker", "crying marker"]) + metrics([["805", "Laughter yes"], ["9,195", "Laughter no"], ["335", "Crying yes"], ["9,665", "Crying no"]]) },
      { label: "06", title: "Exploratory Manual Annotation", content: paragraphs(["50 texts manually annotated.", "Categories: Affective / emotional — 2; Descriptive / analytical — 8; Direct — 21; Humor / irony — 4; Indeterminate — 2; Intensified — 13", "The annotation sample is intentionally small and exploratory and should not be used for broad statistical inference."]) },
      { label: "", title: "Current Status", content: `<p><strong>In progress</strong></p>` + paragraphs(["Analysis and documentation are still being developed. Additional findings and project materials will be added as the project evolves."]) }
    ],
    links: []
  },
  hanparal: {
    title: "HanParal",
    category: "Corpus Linguistics · NLP · Translation Technology",
    status: "MVP Complete · Expanding · 2026",
    summary: "A multilingual corpus and concordance tool created to support corpus preparation, alignment, annotation, analysis and visualization within a single workflow, with an initial focus on Korean–Portuguese parallel data.",
    tags: ["Python", "Parallel Corpora", "Corpus Linguistics", "Alignment", "Annotation"],
    sections: [
      { label: "01", title: "Motivation", content: paragraphs(["HanParal was created to make multilingual corpus work easier within the author’s undergraduate research workflow.", "The goal was to bring tasks such as corpus organization, alignment, annotation, searching, cleaning, analysis and visualization into a more unified tool rather than relying entirely on disconnected manual workflows."]) },
      { label: "02", title: "Input & Workflow", content: paragraphs(["Supported input: TXT; CSV", "The intended workflow covers:"]) + list(["corpus input", "cleaning / preparation", "parallel-text alignment", "concordance/search", "annotation", "analysis", "summary", "visualization"]) },
      { label: "03", title: "Language Scope", content: paragraphs(["HanParal was developed primarily around Korean–Portuguese research but is intended to support other language pairs as well."]) },
      { label: "04", title: "Research Use", content: paragraphs(["HanParal was used as the main software tool supporting the author’s 2026 undergraduate thesis.", "It supported work involving searching, aligning, annotating and summarizing comparative corpus data."]) },
      { label: "05", title: "Tech Stack", content: list(["Python"]) },
      { label: "06", title: "Current Version", content: paragraphs(["MVP complete.", "The current version is primarily used by the author."]) },
      { label: "07", title: "Challenge", content: paragraphs(["One of the main technical challenges is expanding alignment toward a more automated workflow while making the software robust and understandable for users beyond its original author."]) },
      { label: "08", title: "Future Development", content: paragraphs(["Expansion is still in progress, particularly around:"]) + list(["improved automated alignment", "making the tool usable by other researchers/users", "dedicated user interface", "improved user experience", "broader usability", "downloadable/local executable version"]) },
      { label: "", title: "Current Status", content: `<p><strong>MVP complete · Expansion in progress</strong></p>` + paragraphs(["<span class=\"subtle-note\">Repository update coming soon.</span>"]) }
    ],
    links: []
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
  const ui = window.I18N?.ui?.projects;
  const localizedProject = ui?.details?.[activeProjectKey] || window.I18N?.projectLocale?.(activeProjectKey);
  const source = localizedProject || project;
  const cardCopy = activeProjectKey ? ui?.cards?.[activeProjectKey] : null;
  const metaItems = [cardCopy?.status || source.status, cardCopy?.context || source.context].filter(Boolean);
  const meta = metaItems.length > 1 ? `<div class="case-meta-group">${metaItems.map((item) => `<p class="case-meta">${item}</p>`).join("")}</div>` : `<p class="case-meta">${metaItems[0] || ""}</p>`;
  const links = source.links.length ? `<section class="case-section"><p class="case-label">${ui?.projectLinks || "Project Links"}</p><div class="action-row">${source.links.map(([label, href]) => `<a class="button ghost" href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}</div></section>` : "";
  dossierContent.innerHTML = `<article class="case-study"><header class="case-header"><p class="eyebrow">${cardCopy?.kicker || source.category}</p>${meta}<h1 id="dossier-title">${source.title}</h1>${source.subtitle ? `<p class="case-subtitle">${source.subtitle}</p>` : ""}<p class="lede">${cardCopy?.summary || source.summary}</p><ul class="tag-list compact">${(cardCopy?.tags || source.tags).map((tag) => `<li>${tag}</li>`).join("")}</ul></header>${source.sections.map((section) => `<section class="case-section"><p class="case-label">${section.label ? `${section.label} — ` : ""}${section.title}</p><h2>${section.title}</h2><div class="case-content">${section.content}</div></section>`).join("")}${links}</article>`;
};

projectCards.forEach((card) => {
  const openProject = () => {
    const project = projectDetails[card.dataset.project];
    if (!project || !dossier) return;
    activeProjectKey = card.dataset.project;
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

window.addEventListener("i18n:change", () => {
  if (activeProjectKey && dossier?.open) renderDossier(projectDetails[activeProjectKey]);
});

dossierClose?.addEventListener("click", closeDossier);
dossier?.addEventListener("click", (event) => {
  if (event.target === dossier) closeDossier();
});
dossier?.addEventListener("close", () => {
  lastFocusedProject?.focus?.();
});
