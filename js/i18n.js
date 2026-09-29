const SUPPORTED_LANGS = ["en", "pt-BR", "ko", "es"];
const LANG_STORAGE_KEY = "portfolioLanguage";

const split = (text) => text.split(" · ");

const UI = {
  en: {
    meta: {
      home: ["Lívia Aguiar — Language × Data × AI", "Lívia Aguiar's portfolio at the intersection of language, data, AI, NLP and multilingual language technology."],
      about: ["About — Lívia Aguiar", "About Lívia Aguiar: language data, data science, NLP and multilingual language technology with a Korean and Brazilian Portuguese focus."],
      projects: ["Projects — Lívia Aguiar", "Selected projects by Lívia Aguiar across data, NLP, software and language technology."],
      education: ["Education — Lívia Aguiar", "Education and credentials across language, data and NLP."],
      research: ["Research — Lívia Aguiar", "Research on literary translation, Korean culture-specific items, multilingual NLP and Korean-Brazilian Portuguese language data."],
      contact: ["Contact — Lívia Aguiar", "Contact Lívia Aguiar for conversations around data, NLP, multilingual language technology and research."]
    },
    skip: "Skip to content",
    navLabel: "Main navigation",
    footerLabel: "Footer links",
    nav: [["Home", "Start →"], ["About", "My path →"], ["Projects", "→"], ["Education", "→"], ["Research", "→"], ["Contact", "Say hello →"]],
    langLabel: "Choose language",
    footerTagline: "Language × Data × AI",
    home: {
      eyebrow: "Hi, I'm Lívia Aguiar.", title1: "Language", title2: "Data × AI", lede: "I build data and NLP projects around multilingual language technology, with a focus on Korean and Brazilian Portuguese.", expertise: "Multilingual NLP · Language Data · Corpus Linguistics · Data Analysis", projects: "Explore Projects", about: "About me →", map: ["Korean", "Brazilian Portuguese", "source", "Translation", "& Linguistics", "archive", "Language Data", "Corpus · Alignment", "model", "NLP", "AI · Evaluation", "method", "Data Analysis", "features · quality", "Portuguese"], mapLabel: "Language-data identity map"
    },
    about: {
      eyebrow: "About", title: "About Me", statement: "I’m interested in what happens when language becomes data.",
      paragraphs: ["My background is in Translation and Linguistics, where I developed a strong interest in how languages are structured, represented and connected. Korean became a central part of that path and continues to shape the questions I explore in my projects and research.", "Over time, that interest expanded from language itself to the data behind it: corpora, datasets, patterns, data quality and the systems used to process them. Today, I am building skills and projects across Data Science, Data Engineering and Natural Language Processing, with a particular interest in multilingual and under-resourced language settings.", "My current work often brings Korean and Brazilian Portuguese together through language data, corpus building, analysis and NLP. I am especially interested in building datasets, pipelines and tools that connect linguistic knowledge with computational methods."],
      alias: "In some projects and repositories, I may also appear as LAC Cavalcanti.", currentEyebrow: "Current interests", currentTitle: "What I’m exploring", nextEyebrow: "Next directions", nextTitle: "What I want to explore next", methods: "Methods & Technologies", languages: "Languages & Multilingual Directions",
      currentTags: ["Multilingual NLP", "Language Data", "Corpus Building", "Data Analysis", "Korean NLP", "Low-resource NLP"], futureMethods: ["Machine Learning", "Large Language Models", "Machine Translation"], futureLangs: ["Japanese", "Thai", "Quechua"]
    },
    contact: { eyebrow: "Contact", title: "Let's connect.", lede: "I'm always interested in conversations around data, NLP, multilingual language technology, research and collaborative projects.", email: "Email" },
    projects: {
      eyebrow: "Projects", title: "Projects", lede: "Selected work across data, NLP, software and language technology.", filterTitle: "Project categories", filterLabel: "Filter projects", filters: ["All", "Data & Analytics", "NLP & Language Technology", "Software & Tools", "Hackathons"], explore: "Explore project →", close: "Close project dossier", projectLinks: "Project Links",
      cards: {
        hanlevel: { kicker: "NLP & Language Technology · Educational Technology · Hackathon", status: "Completed · Sep 2026", title: "HanLevel", summary: "An interpretable Korean readability profiler that estimates whether a Korean text is suitable for Beginner, Intermediate or Advanced learners — and explains what makes the text difficult.", tags: ["Python", "Streamlit", "Korean NLP", "Kiwi", "Readability"] },
        nsmc: { kicker: "Data & Analytics · Korean NLP", status: "In Progress · 2026", title: "NSMC Korean Movie Reviews", summary: "An ongoing exploratory and data-quality analysis of 200,000 Korean movie reviews, combining dataset inspection, linguistic feature engineering and exploratory manual annotation.", tags: ["Python", "Pandas", "Excel", "Korean NLP", "EDA"] },
        hanparal: { kicker: "Corpus Linguistics · NLP · Translation Technology", status: "MVP Complete · Expanding · 2026", title: "HanParal", summary: "A Python-based multilingual corpus tool developed to support alignment, annotation, analysis and visualization of parallel language data, originally designed around Korean–Portuguese research.", tags: ["Python", "Parallel Corpora", "Corpus Linguistics", "Alignment", "Annotation"] }
      }
    },
    education: {
      eyebrow: "Education & Credentials", title: "Education", lede: "My academic background, relevant programs and selected credentials across language, data and NLP.", tabs: ["Formal Education", "Programs & Coursework", "Certifications"], academic: "Academic record", structured: "Structured training", selected: "Selected credentials", labels: ["Undergraduate", "Postgraduate Certificate", "Technology Degree"], statusInProgress: "In Progress", completedWithin: "Completed certificates within the program:", status: "Status: In Progress", groups: ["IBM · Data Analytics", "Data & Programming", "Computational Linguistics & Language Data", "Language Proficiency"], advancedKorean: "Advanced Korean Proficiency",
      formalNote: "Final semester / expected completion after the final course requirement in Dec 2026", programTitles: ["Global Consumer Intelligence (GCI) World Program", "IBM Data Analyst Professional Certificate", "K-MOOC Coursework — Korea University / 고려대학교", "Advanced Training in Teaching Korean as a Foreign Language", "Data Analysis: My First Steps in Python!"], credentialTitles: ["Microsoft Excel 2016", "Data Engineering with AI Immersion", "The Legend of Python"], gciDesc: "International program covering data science, AI, consumer intelligence, business applications, and hands-on project development.", ibmDesc: "Professional certificate program covering data analysis, spreadsheets, SQL, Python, data visualization and analytics tools.", uspDesc: "Advanced training course in Teaching Korean as a Foreign Language, offered through FFLCH's University Culture and Extension Service.", programariaDesc: "Practical data analysis program introducing Python fundamentals, data manipulation, exploratory analysis, and hands-on exercises with real-world datasets."
    },
    research: {
      eyebrow: "Research", title: "Research", lede: "Current and planned research across literary translation, multilingual language data and NLP.", flipA: "Flip thesis card to read abstract", flipB: "Flip thesis card back to summary", thesisLabel: "Undergraduate Thesis · 2026", thesisTitle: "THE TRANSLATION OF KOREAN CULTURE-SPECIFIC ITEMS IN HAN KANG’S “HUMAN ACTS”", thesisSubtitle: "BETWEEN THE POLES OF CONSERVATION AND SUBSTITUTION", thesisDesc: "A comparative study of how Korean culture-specific items in Han Kang’s <em>Human Acts</em> are translated into Brazilian Portuguese, English, and Spanish, examining how different translation strategies mediate culture, historical memory, trauma, and social relations.", languages: "Languages", languagesLine: "Korean · Brazilian Portuguese · English · Spanish", methods: "Literary Translation · Culture-Specific Items · Descriptive Translation Studies · Comparative Analysis · Corpus-Based Research", flipRead: "Flip to read abstract ↻", flipBack: "Flip back ↻", abstractHeading: "Abstract", abstract: "This study analyzes the treatment of Culture-Specific Items (CSIs) in Han Kang’s <em>Human Acts</em>, comparing the Korean source text, <em>소년이 온다</em>, with its translations into Portuguese, English, and Spanish. Grounded in Descriptive Translation Studies and in Franco Aixelá’s (2013) classification of translation strategies, this research is exploratory, qualitative, bibliographical, documentary, and case-study based. The corpus was organized through the identification, selection, and alignment of CSIs in a comparative spreadsheet, supported by AntConc and HanParal, a tool developed by the author for searching, aligning, annotating, and summarizing the data. The items analyzed were grouped into five categories: national and identity-related references; historical-political references and repression; spaces and places; funeral rites and mourning; and social relations and forms of address. The analysis shows that CSIs do not function merely as isolated lexical markers, but contribute to the construction of the historical memory of the Gwangju Uprising, the representation of state violence, the spatialization of trauma, the ritualization of mourning, and the social relations among the characters. The results indicate that the Portuguese translation tends more strongly toward the conservation of Korean cultural references, while the English translation occupies an intermediate position and the Spanish translation more frequently employs substitution strategies, such as universalization, naturalization, and deletion. The study concludes that the treatment of CSIs directly affects how each translation mediates the culture, memory, and historical experience represented in the novel.", keywords: "Keywords", keywordsLine: "Literary Translation · Culture-Specific Items · Korean Literature · Han Kang · Human Acts", access: "Research access: Available soon", nextLabel: "Next Research Direction", koptSubtitle: "Construction and Evaluation of a Korean–Brazilian Portuguese Parallel Corpus for NLP", koptStatus: "Planned Master’s Research", koptDesc: "A proposed parallel-corpus project focused on building and evaluating language resources for the under-resourced Korean–Brazilian Portuguese pair.", koptTags: "KR ↔ PT-BR · Parallel Corpora · Multilingual NLP · Machine Translation · Language Data", interests: "Research Interests", interestsLine: "Corpus Linguistics · Multilingual NLP · Computational Linguistics · Language Data · Data Analysis · Machine Learning"
    }
  }
};

UI["pt-BR"] = structuredClone(UI.en);
Object.assign(UI["pt-BR"], {
  skip: "Pular para o conteúdo", navLabel: "Navegação principal", footerLabel: "Links do rodapé", langLabel: "Escolher idioma", footerTagline: "Linguagem × Dados × IA",
  meta: {
    home: ["Lívia Aguiar — Linguagem × Dados × IA", "Portfólio de Lívia Aguiar na interseção entre linguagem, dados, IA, PLN e tecnologia linguística multilíngue."],
    about: ["Sobre — Lívia Aguiar", "Sobre Lívia Aguiar: dados linguísticos, ciência de dados, PLN e tecnologia linguística multilíngue com foco em coreano e português brasileiro."],
    projects: ["Projetos — Lívia Aguiar", "Projetos selecionados de Lívia Aguiar em dados, PLN, software e tecnologia linguística."],
    education: ["Formação — Lívia Aguiar", "Formação e credenciais em linguagem, dados e PLN."],
    research: ["Pesquisa — Lívia Aguiar", "Pesquisa em tradução literária, itens culturais-específicos coreanos, PLN multilíngue e dados linguísticos coreano-português brasileiro."],
    contact: ["Contato — Lívia Aguiar", "Entre em contato com Lívia Aguiar para conversas sobre dados, PLN, tecnologia linguística multilíngue e pesquisa."]
  },
  nav: [["Início", "Começar →"], ["Sobre", "Meu percurso →"], ["Projetos", "→"], ["Formação", "→"], ["Pesquisa", "→"], ["Contato", "Fale comigo →"]]
});
Object.assign(UI["pt-BR"].home, { eyebrow: "Oi, eu sou Lívia Aguiar.", title1: "Linguagem", title2: "Dados × IA", lede: "Desenvolvo projetos de dados e PLN voltados à tecnologia linguística multilíngue, com foco em coreano e português brasileiro.", expertise: "PLN Multilíngue · Dados Linguísticos · Linguística de Corpus · Análise de Dados", projects: "Ver projetos", about: "Sobre mim →", map: ["Coreano", "Português brasileiro", "origem", "Tradução", "& Linguística", "arquivo", "Dados Linguísticos", "Corpus · Alinhamento", "modelo", "PLN", "IA · Avaliação", "método", "Análise de Dados", "atributos · qualidade", "Português"], mapLabel: "Mapa de identidade linguagem-dados" });
Object.assign(UI["pt-BR"].about, { eyebrow: "Sobre", title: "Sobre mim", statement: "Tenho interesse no que acontece quando a linguagem se torna dado.", paragraphs: ["Minha formação é em Tradução e Linguística, áreas em que desenvolvi um interesse sólido por como as línguas são estruturadas, representadas e conectadas. O coreano se tornou uma parte central desse percurso e continua a orientar as perguntas que exploro em meus projetos e pesquisas.", "Com o tempo, esse interesse se ampliou da língua em si para os dados por trás dela: corpora, conjuntos de dados, padrões, qualidade dos dados e sistemas usados para processá-los. Hoje, desenvolvo habilidades e projetos em Ciência de Dados, Engenharia de Dados e Processamento de Linguagem Natural, com interesse especial em contextos multilíngues e em línguas de poucos recursos.", "Meu trabalho atual aproxima coreano e português brasileiro por meio de dados linguísticos, construção de corpora, análise e PLN. Tenho interesse especial em criar datasets, pipelines e ferramentas que conectem conhecimento linguístico e métodos computacionais."], alias: "Em alguns projetos e repositórios, também posso aparecer como LAC Cavalcanti.", currentEyebrow: "Interesses atuais", currentTitle: "O que estou explorando", nextEyebrow: "Próximas direções", nextTitle: "O que quero explorar em seguida", methods: "Métodos & Tecnologias", languages: "Línguas & Direções multilíngues", currentTags: ["PLN Multilíngue", "Dados Linguísticos", "Construção de Corpus", "Análise de Dados", "PLN para Coreano", "PLN para Línguas de Poucos Recursos"], futureMethods: ["Aprendizado de Máquina", "Grandes Modelos de Linguagem", "Tradução Automática"], futureLangs: ["Japonês", "Tailandês", "Quéchua"] });
Object.assign(UI["pt-BR"].contact, { eyebrow: "Contato", title: "Vamos conversar.", lede: "Tenho interesse em conversar sobre dados, PLN, tecnologia linguística multilíngue, pesquisa e projetos colaborativos.", email: "Email" });
Object.assign(UI["pt-BR"].projects, { eyebrow: "Projetos", title: "Projetos", lede: "Trabalhos selecionados em dados, PLN, software e tecnologia linguística.", filterTitle: "Categorias de projetos", filterLabel: "Filtrar projetos", filters: ["Todos", "Dados & Analytics", "PLN & Tecnologia Linguística", "Software & Ferramentas", "Hackathons"], explore: "Ver projeto →", close: "Fechar dossiê do projeto", projectLinks: "Links do projeto", cards: { hanlevel: { kicker: "PLN & Tecnologia Linguística · Tecnologia Educacional · Hackathon", status: "Concluído · Set 2026", title: "HanLevel", summary: "Um analisador interpretável de legibilidade em coreano que estima se um texto é adequado para estudantes de nível iniciante, intermediário ou avançado — e explica quais fatores influenciam sua dificuldade.", tags: ["Python", "Streamlit", "PLN em Coreano", "Kiwi", "Legibilidade"] }, nsmc: { kicker: "Dados & Analytics · PLN em Coreano", status: "Em andamento · 2026", title: "NSMC Korean Movie Reviews", summary: "Uma análise exploratória e de qualidade de dados, ainda em desenvolvimento, de 200.000 avaliações de filmes em coreano, combinando inspeção do dataset, criação de atributos linguísticos e anotação manual exploratória.", tags: ["Python", "Pandas", "Excel", "PLN em Coreano", "EDA"] }, hanparal: { kicker: "Linguística de Corpus · PLN · Tecnologia da Tradução", status: "MVP concluído · Em expansão · 2026", title: "HanParal", summary: "Uma ferramenta multilíngue de corpus desenvolvida em Python para apoiar alinhamento, anotação, análise e visualização de dados linguísticos paralelos, criada inicialmente para pesquisas com coreano e português.", tags: ["Python", "Corpora Paralelos", "Linguística de Corpus", "Alinhamento", "Anotação"] } } });
Object.assign(UI["pt-BR"].education, { eyebrow: "Formação & Credenciais", title: "Formação", lede: "Minha formação acadêmica, programas relevantes e credenciais selecionadas em linguagem, dados e PLN.", tabs: ["Formação Acadêmica", "Programas & Cursos", "Certificações"], academic: "Percurso acadêmico", structured: "Formação estruturada", selected: "Credenciais selecionadas", labels: ["Graduação", "Pós-graduação Lato Sensu", "Curso Superior de Tecnologia"], formalTitles: ["Bacharelado em Tradução", "Pós-graduação Lato Sensu em Psicopedagogia", "Gestão de Turismo"], formalDates: ["ago. 2022 – dez. 2026", "jan. 2024 – out. 2024", "ago. 2019 – maio 2022"], statusInProgress: "Em andamento", completedWithin: "Certificados concluídos dentro do programa:", status: "Status: Em andamento", groups: ["IBM · Data Analytics", "Dados & Programação", "Linguística Computacional & Dados Linguísticos", "Proficiência Linguística"], advancedKorean: "Proficiência Avançada em Coreano", formalNote: "Último semestre; conclusão prevista após a finalização da última disciplina em dezembro de 2026.", programDates: ["set. 2026 – dez. 2026 · Em andamento", "2026 – presente · Em andamento", "2026", "mar. 2024 – nov. 2024", "set. 2026 – dez. 2026 · Em andamento"], gciDesc: "Programa internacional sobre ciência de dados, IA, inteligência do consumidor, aplicações de negócios e desenvolvimento prático de projeto.", ibmDesc: "Programa de certificado profissional que cobre análise de dados, planilhas, SQL, Python, visualização de dados e ferramentas analíticas.", uspDesc: "Curso de aperfeiçoamento em Ensino de Coreano como Língua Estrangeira, oferecido pelo Serviço de Cultura e Extensão Universitária da FFLCH.", programariaDesc: "Programa prático de análise de dados com introdução a fundamentos de Python, manipulação de dados, análise exploratória e exercícios com datasets reais.", certDates: ["IBM · set. 2026", "IBM · set. 2026", "IBM · set. 2026", "IBM · set. 2026", "Fundação Bradesco · set. 2026", "Alura · set. 2026", "Codédex · jul. 2026", "Korea University / 고려대학교 · jul. 2026", "Korea University / 고려대학교 · jul. 2026", "Korea University / 고려대학교 · jun. 2026", "Emitido em nov. 2023"] });
Object.assign(UI["pt-BR"].research, { eyebrow: "Pesquisa", title: "Pesquisa", lede: "Pesquisa atual e planejada em tradução literária, dados linguísticos multilíngues e PLN.", flipA: "Virar cartão do TCC para ler o resumo", flipB: "Voltar para a apresentação do TCC", thesisLabel: "TCC · 2026", thesisTitle: "A TRADUÇÃO DE ITENS CULTURAIS-ESPECÍFICOS COREANOS EM “ATOS HUMANOS” DE HAN KANG", thesisSubtitle: "ENTRE OS POLOS DA CONSERVAÇÃO E DA SUBSTITUIÇÃO", thesisTitleLang: "pt-BR", thesisDesc: "Um estudo comparativo sobre como itens culturais-específicos coreanos em <em>Atos Humanos</em>, de Han Kang, são traduzidos para o português brasileiro, o inglês e o espanhol, examinando como diferentes estratégias tradutórias mediam cultura, memória histórica, trauma e relações sociais.", languages: "Línguas", languagesLine: "Coreano · Português brasileiro · Inglês · Espanhol", methods: "Tradução Literária · Itens Culturais-Específicos · Estudos Descritivos da Tradução · Análise Comparativa · Pesquisa Baseada em Corpus", flipRead: "Virar para ler o resumo ↻", flipBack: "Voltar ↻", abstractHeading: "Resumo", abstract: "Este estudo analisa o tratamento de Itens Culturais-Específicos (ICEs) em <em>Atos Humanos</em>, de Han Kang, comparando o texto-fonte em coreano, <em>소년이 온다</em>, com suas traduções para o português, o inglês e o espanhol. Fundamentada nos Estudos Descritivos da Tradução e na classificação de estratégias tradutórias de Franco Aixelá (2013), a pesquisa é exploratória, qualitativa, bibliográfica, documental e baseada em estudo de caso. O corpus foi organizado por meio da identificação, seleção e alinhamento dos ICEs em uma planilha comparativa, com apoio do AntConc e do HanParal, ferramenta desenvolvida pela autora para buscar, alinhar, anotar e sumarizar os dados. Os itens analisados foram agrupados em cinco categorias: referências nacionais e identitárias; referências histórico-políticas e repressão; espaços e lugares; ritos funerários e luto; e relações sociais e formas de tratamento. A análise mostra que os ICEs não funcionam apenas como marcadores lexicais isolados, mas contribuem para a construção da memória histórica do Levante de Gwangju, para a representação da violência de Estado, para a espacialização do trauma, para a ritualização do luto e para as relações sociais entre as personagens. Os resultados indicam que a tradução em português tende mais fortemente à conservação das referências culturais coreanas, enquanto a tradução em inglês ocupa uma posição intermediária e a tradução em espanhol emprega com mais frequência estratégias de substituição, como universalização, naturalização e apagamento. O estudo conclui que o tratamento dos ICEs afeta diretamente a forma como cada tradução media a cultura, a memória e a experiência histórica representadas no romance.", keywords: "Palavras-chave", keywordsLine: "Tradução Literária · Itens Culturais-Específicos · Literatura Coreana · Han Kang · Atos Humanos", access: "Acesso à pesquisa: disponível em breve", nextLabel: "Próxima Direção de Pesquisa", koptSubtitle: "Construção e Avaliação de um Corpus Paralelo Coreano–Português Brasileiro para PLN", koptStatus: "Pesquisa de mestrado planejada", koptDesc: "Projeto proposto de corpus paralelo focado em construir e avaliar recursos linguísticos para o par coreano–português brasileiro, ainda pouco atendido.", koptTags: "KR ↔ PT-BR · Corpora Paralelos · PLN Multilíngue · Tradução Automática · Dados Linguísticos", interests: "Interesses de Pesquisa", interestsLine: "Linguística de Corpus · PLN Multilíngue · Linguística Computacional · Dados Linguísticos · Análise de Dados · Aprendizado de Máquina" });

UI.ko = structuredClone(UI.en);
Object.assign(UI.ko, { skip: "본문으로 건너뛰기", navLabel: "주요 내비게이션", footerLabel: "푸터 링크", langLabel: "언어 선택", footerTagline: "언어 × 데이터 × AI", meta: { home: ["Lívia Aguiar — 언어 × 데이터 × AI", "언어 데이터, NLP, 다국어 언어 기술을 중심으로 한 Lívia Aguiar의 포트폴리오."], about: ["소개 — Lívia Aguiar", "한국어와 브라질 포르투갈어를 중심으로 언어 데이터, 데이터 분석, NLP를 다루는 Lívia Aguiar 소개."], projects: ["프로젝트 — Lívia Aguiar", "데이터, NLP, 소프트웨어, 언어 기술 프로젝트 모음."], education: ["교육 — Lívia Aguiar", "언어, 데이터, NLP와 관련된 학력과 자격."], research: ["연구 — Lívia Aguiar", "문학 번역, 문화특수항목, 다국어 NLP, 한국어-브라질 포르투갈어 언어 데이터 연구."], contact: ["연락처 — Lívia Aguiar", "데이터, NLP, 다국어 언어 기술, 연구 협업 관련 문의."] }, nav: [["홈", "시작하기 →"], ["소개", "더 알아보기 →"], ["프로젝트", "→"], ["교육", "→"], ["연구", "→"], ["연락처", "연락하기 →"]] });
Object.assign(UI.ko.home, { eyebrow: "안녕하세요, Lívia Aguiar입니다.", title1: "언어", title2: "데이터 × AI", lede: "한국어와 브라질 포르투갈어를 중심으로 다국어 언어 기술, 데이터 분석, NLP 프로젝트를 개발합니다.", expertise: "다국어 NLP · 언어 데이터 · 코퍼스 언어학 · 데이터 분석", projects: "프로젝트 보기", about: "소개 보기 →", map: ["한국어", "브라질 포르투갈어", "기반", "번역", "& 언어학", "자료", "언어 데이터", "코퍼스 · 정렬", "모델", "NLP", "AI · 평가", "방법", "데이터 분석", "특징 · 품질"], mapLabel: "언어와 데이터의 연결 지도" });
Object.assign(UI.ko.about, { eyebrow: "소개", title: "소개", statement: "언어가 데이터가 될 때 무엇이 달라지는지에 관심이 있습니다.", paragraphs: ["저는 번역과 언어학을 바탕으로 언어가 어떻게 구조화되고 표상되며 서로 연결되는지 탐구해 왔습니다. 그 과정에서 한국어는 제 연구와 프로젝트의 중요한 축이 되었고, 지금도 제가 던지는 질문의 방향을 이끌고 있습니다.", "이후 관심은 언어 자체를 넘어 코퍼스, 데이터셋, 패턴, 데이터 품질, 언어 처리 시스템으로 확장되었습니다. 현재는 데이터 분석, 데이터 엔지니어링, 자연어 처리 분야의 역량을 쌓으며, 특히 다국어 환경과 저자원 언어의 언어 데이터에 주목하고 있습니다.", "최근 작업은 한국어와 브라질 포르투갈어를 언어 데이터, 코퍼스 구축, 분석, NLP의 관점에서 연결하는 데 초점을 둡니다. 언어학적 지식을 계산적 방법과 자연스럽게 이어 주는 데이터셋, 파이프라인, 도구를 만드는 데 관심이 있습니다."], alias: "일부 프로젝트와 저장소에서는 LAC Cavalcanti라는 이름으로도 표시될 수 있습니다.", currentEyebrow: "현재 관심사", currentTitle: "탐구 중인 주제", nextEyebrow: "다음 방향", nextTitle: "앞으로 탐구하고 싶은 것", methods: "방법 및 기술", languages: "언어 및 다국어 방향", currentTags: ["다국어 NLP", "언어 데이터", "코퍼스 구축", "데이터 분석", "한국어 NLP", "저자원 언어 NLP"], futureMethods: ["머신러닝", "대규모 언어 모델", "기계번역"], futureLangs: ["일본어", "태국어", "케추아어"] });
Object.assign(UI.ko.contact, { eyebrow: "연락처", title: "함께 이야기해요.", lede: "데이터, NLP, 다국어 언어 기술, 연구, 협업 프로젝트에 관한 대화를 환영합니다.", email: "이메일" });
Object.assign(UI.ko.projects, { eyebrow: "프로젝트", title: "프로젝트", lede: "데이터, NLP, 소프트웨어, 언어 기술 분야의 주요 작업입니다.", filterTitle: "프로젝트 분류", filterLabel: "프로젝트 필터", filters: ["전체", "데이터 및 분석", "NLP 및 언어 기술", "소프트웨어 및 도구", "해커톤"], explore: "프로젝트 보기 →", close: "프로젝트 상세 닫기", projectLinks: "프로젝트 링크", cards: { hanlevel: { kicker: "NLP 및 언어 기술 · 교육 기술 · 해커톤", status: "완료 · 2026년 9월", title: "HanLevel", summary: "한국어 텍스트의 읽기 난이도를 초급·중급·고급으로 추정하고, 난이도에 영향을 준 어휘·문법·문장 길이 요소를 설명하는 해석 가능한 가독성 분석 도구.", tags: ["Python", "Streamlit", "한국어 NLP", "Kiwi", "가독성"] }, nsmc: { kicker: "데이터 및 분석 · 한국어 NLP", status: "진행 중 · 2026", title: "NSMC Korean Movie Reviews", summary: "20만 건의 한국어 영화 리뷰를 대상으로 데이터 품질, 텍스트 특성, 언어적 특징을 탐색하는 진행 중인 데이터·NLP 프로젝트.", tags: ["Python", "Pandas", "Excel", "한국어 NLP", "EDA"] }, hanparal: { kicker: "코퍼스 언어학 · NLP · 번역 기술", status: "MVP 완료 · 확장 개발 중 · 2026", title: "HanParal", summary: "병렬 언어 데이터의 정렬, 주석, 분석, 시각화를 하나의 흐름에서 지원하기 위해 개발한 Python 기반 다국어 코퍼스 도구.", tags: ["Python", "병렬 코퍼스", "코퍼스 언어학", "정렬", "주석"] } } });
Object.assign(UI.ko.education, { eyebrow: "교육 및 자격", title: "교육", lede: "언어, 데이터, NLP와 관련된 학력, 교육 과정, 주요 자격입니다.", tabs: ["정규 교육", "프로그램 및 수강 과정", "자격"], academic: "학력", structured: "교육 과정", selected: "주요 자격", labels: ["학부 과정", "브라질 Lato Sensu 대학원 과정", "기술 학위 과정"], formalTitles: ["번역학 학사 과정", "Psychopedagogy Lato Sensu 과정", "Tourism Management 기술 학위"], formalDates: ["2022년 8월–2026년 12월", "2024년 1월–10월", "2019년 8월–2022년 5월"], statusInProgress: "진행 중", completedWithin: "프로그램 내 완료한 수료증:", status: "상태: 진행 중", groups: ["IBM · Data Analytics", "데이터 및 프로그래밍", "전산언어학 및 언어 데이터", "언어 능력"], advancedKorean: "고급 한국어 능력", formalNote: "마지막 학기이며, 2026년 12월 마지막 과목 이수 후 졸업 예정입니다.", programDates: ["2026년 9월–12월 · 진행 중", "2026년–현재 · 진행 중", "2026년", "2024년 3월–11월", "2026년 9월–12월 · 진행 중"], programTitles: ["Global Consumer Intelligence (GCI) World Program", "IBM Data Analyst Professional Certificate", "K-MOOC 수강 과정 — Korea University / 고려대학교", "외국어로서의 한국어 교육 심화 과정", "데이터 분석: Python 첫걸음"], credentialTitles: ["Microsoft Excel 2016", "AI 데이터 엔지니어링 몰입 과정", "The Legend of Python"], gciDesc: "데이터 과학, AI, 소비자 인텔리전스, 비즈니스 응용, 실습 프로젝트 개발을 다루는 국제 프로그램입니다.", ibmDesc: "데이터 분석, 스프레드시트, SQL, Python, 데이터 시각화, 분석 도구를 다루는 전문 인증 프로그램입니다.", uspDesc: "FFLCH 대학 문화·확장 서비스를 통해 제공된 외국어로서의 한국어 교육 심화 과정입니다.", programariaDesc: "Python 기초, 데이터 조작, 탐색적 분석, 실제 데이터셋 기반 실습을 소개하는 실무형 데이터 분석 프로그램입니다.", certDates: ["IBM · 2026년 9월", "IBM · 2026년 9월", "IBM · 2026년 9월", "IBM · 2026년 9월", "Fundação Bradesco · 2026년 9월", "Alura · 2026년 9월", "Codédex · 2026년 7월", "Korea University / 고려대학교 · 2026년 7월", "Korea University / 고려대학교 · 2026년 7월", "Korea University / 고려대학교 · 2026년 6월", "2023년 11월 발급"] });
Object.assign(UI.ko.research, { eyebrow: "연구", title: "연구", lede: "문학 번역, 다국어 언어 데이터, NLP를 중심으로 한 현재 및 향후 연구입니다.", flipA: "초록을 보려면 논문 카드를 뒤집기", flipB: "앞면으로 돌아가기", thesisLabel: "학부 졸업논문 · 2026", thesisDesc: "한강의 『소년이 온다』에 나타난 한국 문화특수항목이 브라질 포르투갈어, 영어, 스페인어로 어떻게 번역되는지 비교하고, 번역 전략이 문화, 역사적 기억, 트라우마, 사회적 관계를 어떻게 매개하는지 분석하는 연구입니다.", languages: "언어", languagesLine: "한국어 · 브라질 포르투갈어 · 영어 · 스페인어", methods: "문학 번역 · 문화특수항목 · 기술적 번역 연구 · 비교 분석 · 코퍼스 기반 연구", flipRead: "초록 읽기 ↻", flipBack: "돌아가기 ↻", abstractHeading: "초록", abstract: "본 연구는 한강의 『소년이 온다』에 나타난 문화특수항목(Culture-Specific Items, CSIs)의 번역 양상을 분석한다. 한국어 원문 『소년이 온다』와 포르투갈어, 영어, 스페인어 번역본을 비교하며, 기술적 번역 연구(Descriptive Translation Studies)와 Franco Aixelá(2013)의 번역 전략 분류를 이론적 기반으로 삼는다. 연구 방법은 탐색적·질적·문헌 기반·문서 기반의 사례 연구이며, 문화특수항목을 식별, 선별, 정렬하여 비교 분석용 스프레드시트로 구성하였다. 이 과정에는 AntConc와, 검색·정렬·주석·요약을 지원하기 위해 저자가 개발한 HanParal이 사용되었다. 분석 항목은 국가 및 정체성 관련 지시, 역사·정치적 지시와 억압, 공간과 장소, 장례 의례와 애도, 사회적 관계와 호칭의 다섯 범주로 나누었다. 분석 결과, 문화특수항목은 단순한 어휘 표지에 그치지 않고 광주항쟁의 역사적 기억, 국가 폭력의 재현, 트라우마의 공간화, 애도의 의례화, 인물 간 사회적 관계를 구성하는 데 기여한다. 포르투갈어 번역은 한국 문화 지시를 보존하는 경향이 상대적으로 강한 반면, 영어 번역은 중간적 위치를 보이고, 스페인어 번역은 보편화, 자연화, 삭제와 같은 대체 전략을 더 자주 사용한다. 본 연구는 문화특수항목의 처리 방식이 각 번역본이 소설 속 문화, 기억, 역사적 경험을 매개하는 방식에 직접적인 영향을 미친다고 결론짓는다.", keywords: "키워드", keywordsLine: "문학 번역 · 문화특수항목 · 한국문학 · Han Kang · Human Acts", access: "논문 원문: 곧 공개 예정", nextLabel: "다음 연구 방향", koptSubtitle: "NLP를 위한 한국어–브라질 포르투갈어 병렬 코퍼스 구축 및 평가", koptStatus: "석사 연구 계획", koptDesc: "저자원 언어쌍인 한국어–브라질 포르투갈어를 대상으로 언어 자원을 구축하고 평가하는 병렬 코퍼스 프로젝트입니다.", koptTags: "KR ↔ PT-BR · 병렬 코퍼스 · 다국어 NLP · 기계번역 · 언어 데이터", interests: "연구 관심사", interestsLine: "코퍼스 언어학 · 다국어 NLP · 전산언어학 · 언어 데이터 · 데이터 분석 · 머신러닝" });

UI.es = structuredClone(UI.en);
Object.assign(UI.es, { skip: "Saltar al contenido", navLabel: "Navegación principal", footerLabel: "Enlaces del pie de página", langLabel: "Elegir idioma", footerTagline: "Lenguaje × Datos × IA", nav: [["Inicio", "Comenzar →"], ["Sobre mí", "Mi trayectoria →"], ["Proyectos", "→"], ["Educación", "→"], ["Investigación", "→"], ["Contacto", "Saludar →"]] });
Object.assign(UI.es.home, { eyebrow: "Hola, soy Lívia Aguiar.", title1: "Lenguaje", title2: "Datos × IA", lede: "Desarrollo proyectos de datos y NLP sobre tecnología lingüística multilingüe, con foco en coreano y portugués brasileño.", expertise: "NLP Multilingüe · Datos Lingüísticos · Lingüística de Corpus · Análisis de Datos", projects: "Ver proyectos", about: "Sobre mí →", map: ["Coreano", "Portugués brasileño", "origen", "Traducción", "& Lingüística", "archivo", "Datos Lingüísticos", "Corpus · Alineación", "modelo", "NLP", "IA · Evaluación", "método", "Análisis de Datos", "rasgos · calidad"], mapLabel: "Mapa de identidad lenguaje-datos" });
Object.assign(UI.es.about, { eyebrow: "Sobre mí", title: "Sobre mí", statement: "Me interesa lo que ocurre cuando el lenguaje se convierte en datos.", paragraphs: ["Mi formación es en Traducción y Lingüística, donde desarrollé un fuerte interés por cómo las lenguas se estructuran, se representan y se conectan. El coreano se volvió una parte central de ese camino y sigue moldeando las preguntas que exploro en mis proyectos e investigaciones.", "Con el tiempo, ese interés se expandió del lenguaje en sí hacia los datos detrás de él: corpus, conjuntos de datos, patrones, calidad de datos y sistemas usados para procesarlos. Hoy desarrollo habilidades y proyectos en Ciencia de Datos, Ingeniería de Datos y Procesamiento del Lenguaje Natural, con especial interés en contextos multilingües y de lenguas con pocos recursos.", "Mi trabajo actual suele conectar el coreano y el portugués brasileño mediante datos lingüísticos, construcción de corpus, análisis y NLP. Me interesa especialmente crear datasets, pipelines y herramientas que conecten conocimiento lingüístico con métodos computacionales."], alias: "En algunos proyectos y repositorios también puedo aparecer como LAC Cavalcanti.", currentEyebrow: "Intereses actuales", currentTitle: "Lo que estoy explorando", nextEyebrow: "Próximas direcciones", nextTitle: "Lo que quiero explorar después", methods: "Métodos & Tecnologías", languages: "Lenguas & Direcciones multilingües", currentTags: ["NLP Multilingüe", "Datos Lingüísticos", "Construcción de Corpus", "Análisis de Datos", "NLP Coreano", "NLP de bajos recursos"], futureMethods: ["Machine Learning", "Large Language Models", "Traducción Automática"], futureLangs: ["Japonés", "Tailandés", "Quechua"] });
Object.assign(UI.es.contact, { eyebrow: "Contacto", title: "Conectemos.", lede: "Siempre me interesan las conversaciones sobre datos, NLP, tecnología lingüística multilingüe, investigación y proyectos colaborativos.", email: "Correo" });
Object.assign(UI.es.projects, { eyebrow: "Proyectos", title: "Proyectos", lede: "Trabajos seleccionados en datos, NLP, software y tecnología lingüística.", filterTitle: "Categorías de proyectos", filterLabel: "Filtrar proyectos", filters: ["Todos", "Datos & Analítica", "NLP & Tecnología Lingüística", "Software & Herramientas", "Hackathons"], explore: "Ver proyecto →", close: "Cerrar dossier del proyecto", projectLinks: "Enlaces del proyecto" });
Object.assign(UI.es.education, { eyebrow: "Educación & Credenciales", title: "Educación", lede: "Mi formación académica, programas relevantes y credenciales seleccionadas en lenguaje, datos y NLP.", tabs: ["Educación formal", "Programas & Cursos", "Certificaciones"], academic: "Registro académico", structured: "Formación estructurada", selected: "Credenciales seleccionadas", labels: ["Grado", "Certificado de Posgrado", "Tecnólogo"], statusInProgress: "En progreso", completedWithin: "Certificados completados dentro del programa:", status: "Estado: En progreso", groups: ["IBM · Data Analytics", "Datos & Programación", "Lingüística Computacional & Datos Lingüísticos", "Competencia lingüística"], advancedKorean: "Competencia avanzada en coreano", formalNote: "Último semestre / finalización prevista después del requisito final en Dec 2026", gciDesc: "Programa internacional sobre ciencia de datos, IA, inteligencia del consumidor, aplicaciones de negocio y desarrollo práctico de proyectos.", ibmDesc: "Programa de certificado profesional que cubre análisis de datos, hojas de cálculo, SQL, Python, visualización de datos y herramientas analíticas.", uspDesc: "Curso avanzado de Enseñanza del Coreano como Lengua Extranjera, ofrecido por el Servicio de Cultura y Extensión Universitaria de FFLCH.", programariaDesc: "Programa práctico de análisis de datos que introduce fundamentos de Python, manipulación de datos, análisis exploratorio y ejercicios con datasets reales." });
Object.assign(UI.es.research, { eyebrow: "Investigación", title: "Investigación", lede: "Investigación actual y planificada en traducción literaria, datos lingüísticos multilingües y NLP.", flipA: "Girar tarjeta de tesis para leer el resumen", flipB: "Volver al resumen de la tesis", thesisLabel: "Trabajo de grado · 2026", thesisDesc: "Estudio comparativo sobre cómo los elementos culturales específicos coreanos en <em>Human Acts</em>, de Han Kang, se traducen al portugués brasileño, inglés y español, examinando cómo distintas estrategias de traducción median cultura, memoria histórica, trauma y relaciones sociales.", languages: "Idiomas", languagesLine: "Coreano · Portugués brasileño · Inglés · Español", methods: "Traducción Literaria · Elementos Culturales Específicos · Estudios Descriptivos de Traducción · Análisis Comparativo · Investigación basada en Corpus", flipRead: "Girar para leer el resumen ↻", flipBack: "Volver ↻", abstractHeading: "Resumen", keywords: "Palabras clave", access: "Acceso a la investigación: disponible pronto", nextLabel: "Próxima Dirección de Investigación", koptSubtitle: "Construcción y Evaluación de un Corpus Paralelo Coreano–Portugués Brasileño para NLP", koptStatus: "Investigación de maestría planificada", koptDesc: "Proyecto propuesto de corpus paralelo centrado en crear y evaluar recursos lingüísticos para el par coreano–portugués brasileño, poco representado.", interests: "Intereses de Investigación", interestsLine: "Lingüística de Corpus · NLP Multilingüe · Lingüística Computacional · Datos Lingüísticos · Análisis de Datos · Machine Learning" });

const projectLocales = {
  en: null,
  "pt-BR": {
    hanlevel: {
      title: "HanLevel",
      category: "PLN & Tecnologia Linguística · Tecnologia Educacional · Hackathon",
      status: "Concluído · Set 2026",
      summary: "Um analisador interpretável de legibilidade em coreano criado para ajudar estudantes e docentes a avaliar se um texto em coreano é adequado ao nível do aprendiz e a entender quais características linguísticas influenciam sua dificuldade.",
      tags: ["Python", "Streamlit", "PLN em Coreano", "Kiwi", "Legibilidade"],
      sections: [
        { label: "01", title: "O problema", content: "<p>Escolher materiais de leitura adequados em coreano pode ser difícil tanto para estudantes independentes quanto para professores. Um texto pode parecer curto ou familiar e ainda assim conter vocabulário avançado, estruturas gramaticais densas ou frases longas. O HanLevel foi criado para responder a duas perguntas práticas: este texto é adequado ao nível do aprendiz? E o que exatamente o torna fácil ou difícil?</p>" },
        { label: "02", title: "Como funciona", content: "<p>O usuário cola um texto em coreano diretamente na aplicação.</p><p>O HanLevel retorna:</p><ul><li>dificuldade estimada: iniciante, intermediário ou avançado</li><li>pontuação HanLevel de 0 a 100</li><li>dificuldade lexical</li><li>complexidade gramatical e morfológica</li><li>complexidade por extensão de frase</li><li>cobertura do dicionário</li><li>distribuição por nível de vocabulário</li><li>vocabulário potencialmente desafiador</li><li>marcadores estruturais detectados</li><li>média de eojeol por frase</li><li>explicação dos fatores que influenciam o resultado final</li></ul>" },
        { label: "", title: "Pontuação", content: "<div class=\"case-metrics\"><article><strong>45%</strong><span>Dificuldade lexical</span></article><article><strong>35%</strong><span>Gramática & morfologia</span></article><article><strong>20%</strong><span>Extensão das frases</span></article></div><p>Limiares de classificação: &lt;25 — iniciante; 25–&lt;50 — intermediário; ≥50 — avançado.</p><p><small>Esses limiares são específicos e provisórios do projeto. Eles não correspondem a faixas oficiais do TOPIK ou do CEFR.</small></p>" },
        { label: "03", title: "Abordagem de PLN", content: "<p>O vocabulário usa informações lexicais por nível de aprendizagem derivadas do Korean Learners’ Dictionary (한국어기초사전).</p><p>Níveis lexicais: 초급 → 0; 중급 → 50; 고급 → 100. Vocabulário desconhecido ou não classificado permanece sem classificação, em vez de ser tratado automaticamente como fácil ou difícil.</p><p>A análise gramatical usa Kiwi / kiwipiepy para análise morfológica do coreano.</p><p>Os sinais estruturais incluem:</p><ul><li>terminações conectivas</li><li>terminações adnominais</li><li>terminações nominalizadoras</li><li>verbos auxiliares</li><li>partículas de citação</li><li>terminações pré-finais</li><li>densidade morfológica</li></ul><p>A complexidade frasal usa a média de eojeol por frase como sinal adicional de complexidade estrutural.</p>" },
        { label: "04", title: "Dados & implantação", content: "<div class=\"case-metrics\"><article><strong>~969 MB</strong><span>Exportação original do KRDICT em 11 arquivos JSON</span></article><article><strong>~1.79 MB</strong><span>Índice lexical implantado</span></article></div><p>O HanLevel usa um índice lexical local compacto derivado do Korean Learners’ Dictionary em vez de uma API em tempo real. Isso melhora a estabilidade da implantação, a velocidade e a reprodutibilidade.</p>" },
        { label: "05", title: "Calibração interna", content: "<div class=\"case-metrics\"><article><strong>5</strong><span>Textos iniciantes</span></article><article><strong>5</strong><span>Textos intermediários</span></article><article><strong>5</strong><span>Textos avançados</span></article><article><strong>15 / 15</strong><span>Acordo na calibração interna</span></article></div><p>Isso indica acordo na calibração interna, não um resultado de avaliação externa. O conjunto de calibração é pequeno e foi construído internamente.</p>" },
        { label: "06", title: "Tecnologias", content: "<ul><li>Python</li><li>Streamlit</li><li>Kiwi / kiwipiepy</li><li>índice lexical derivado do KRDICT</li><li>GitHub</li><li>Streamlit Community Cloud</li></ul>" },
        { label: "07", title: "Limitações", content: "<ul><li>conjunto pequeno de calibração interna</li><li>limiares provisórios</li><li>parte do vocabulário permanece sem classificação</li><li>homônimos não são totalmente desambiguados pelo contexto</li><li>a pontuação gramatical usa indicadores estruturais, não uma análise pedagógica completa da gramática</li><li>textos muito curtos oferecem menos evidências</li><li>a extensão da frase representa apenas um aspecto da complexidade sintática</li></ul>" },
        { label: "08", title: "Próximos passos", content: "<p>O HanLevel v1.0 pode explorar:</p><ul><li>adaptação de textos por nível</li><li>simplificação de textos em coreano</li><li>explicações voltadas ao aprendiz</li><li>apoio lexical</li><li>perguntas de compreensão</li><li>recomendações de leitura</li><li>avaliação mais ampla</li></ul>" }
      ],
      links: [["Aplicação", "https://hanlevel.streamlit.app/"], ["GitHub", "https://github.com/liviaaguiarcc/HanLevel"], ["Devpost", "https://devpost.com/software/hanlevel"], ["Vídeo demo", "https://youtu.be/wGAb7SvXj-o?si=O36g_ZAJPjPJTn9N"]]
    },
    nsmc: {
      title: "NSMC Korean Movie Reviews",
      subtitle: "Qualidade de Dados & Análise Exploratória",
      category: "Dados & Analytics · PLN em Coreano",
      status: "Em andamento · 2026",
      summary: "Um projeto pessoal de dados e PLN, ainda em andamento, que explora a estrutura, a qualidade e as características linguísticas do dataset coreano de sentimentos NSMC por meio de limpeza de dados, análise exploratória, criação de atributos e anotação manual em pequena escala.",
      tags: ["Python", "Pandas", "Excel", "PLN em Coreano", "EDA"],
      sections: [
        { label: "01", title: "Dataset", content: "<p>200.000 avaliações de filmes em coreano.</p><p>Colunas: id · document · label</p><p>Distribuição de sentimentos: aproximadamente 50 / 50 entre positivos e negativos.</p>" },
        { label: "02", title: "Qualidade dos dados", content: "<div class=\"case-metrics\"><article><strong>8</strong><span>Textos vazios / só espaços</span></article><article><strong>5.449</strong><span>Linhas duplicadas</span></article><article><strong>1.590</strong><span>Textos duplicados distintos</span></article><article><strong>221</strong><span>Rótulos conflitantes</span></article></div><p>1.369 textos duplicados têm rótulos consistentes.</p>" },
        { label: "03", title: "Exploração dos textos", content: "<p>Comprimento do texto: mínimo 1; máximo 142; média ≈ 35,22; mediana 27.</p><p>Na amostra estratificada de 10.000 avaliações: 5.000 positivas e 5.000 negativas.</p><p>Distribuição por comprimento: 1–10: 1.051; 11–20: 2.638; 21–40: 3.496; 41–80: 1.874; 81+: 941.</p>" },
        { label: "04", title: "Amostra & normalização", content: "<p>Amostra estratificada de 10.000 avaliações.</p><p>166 linhas duplicadas.</p><p>0 textos vazios.</p><p>A normalização alterou apenas 3 textos.</p>" },
        { label: "05", title: "Atributos linguísticos", content: "<p>Atributos criados:</p><ul><li>comprimento do texto</li><li>contagem de eojeol</li><li>marcador de risada</li><li>marcador de choro</li></ul><div class=\"case-metrics\"><article><strong>805</strong><span>Risada: sim</span></article><article><strong>9.195</strong><span>Risada: não</span></article><article><strong>335</strong><span>Choro: sim</span></article><article><strong>9.665</strong><span>Choro: não</span></article></div>" },
        { label: "06", title: "Anotação manual exploratória", content: "<p>50 textos foram anotados manualmente.</p><p>Categorias: afetivo / emocional — 2; descritivo / analítico — 8; direto — 21; humor / ironia — 4; indeterminado — 2; intensificado — 13.</p><p>A amostra anotada é intencionalmente pequena e exploratória e não deve ser usada para inferências estatísticas amplas.</p>" },
        { label: "", title: "Status atual", content: "<p><strong>Em andamento</strong></p><p>A análise e a documentação ainda estão em desenvolvimento. Novos achados e materiais do projeto serão adicionados conforme o projeto evoluir.</p>" }
      ],
      links: []
    },
    hanparal: {
      title: "HanParal",
      category: "Linguística de Corpus · PLN · Tecnologia da Tradução",
      status: "MVP concluído · Em expansão · 2026",
      summary: "Uma ferramenta multilíngue de corpus e concordância criada para apoiar preparação, alinhamento, anotação, análise e visualização de corpora em um único fluxo de trabalho, com foco inicial em dados paralelos coreano–português.",
      tags: ["Python", "Corpora Paralelos", "Linguística de Corpus", "Alinhamento", "Anotação"],
      sections: [
        { label: "01", title: "Motivação", content: "<p>O HanParal foi criado para facilitar o trabalho com corpora multilíngues dentro do fluxo de pesquisa de graduação da autora.</p><p>O objetivo foi reunir tarefas como organização de corpus, alinhamento, anotação, busca, limpeza, análise e visualização em uma ferramenta mais integrada, em vez de depender inteiramente de fluxos manuais desconectados.</p>" },
        { label: "02", title: "Entrada & fluxo de trabalho", content: "<p>Entrada compatível: TXT; CSV.</p><p>O fluxo previsto cobre:</p><ul><li>entrada do corpus</li><li>limpeza / preparação</li><li>alinhamento de textos paralelos</li><li>concordância / busca</li><li>anotação</li><li>análise</li><li>sumarização</li><li>visualização</li></ul>" },
        { label: "03", title: "Escopo linguístico", content: "<p>O HanParal foi desenvolvido principalmente a partir de pesquisas com coreano–português, mas pretende apoiar também outros pares de línguas.</p>" },
        { label: "04", title: "Uso na pesquisa", content: "<p>O HanParal foi usado como principal ferramenta de software de apoio ao TCC da autora em 2026.</p><p>A ferramenta apoiou atividades de busca, alinhamento, anotação e sumarização de dados comparativos de corpus.</p>" },
        { label: "05", title: "Tecnologias", content: "<ul><li>Python</li></ul>" },
        { label: "06", title: "Versão atual", content: "<p>MVP concluído.</p><p>A versão atual é usada principalmente pela autora.</p>" },
        { label: "07", title: "Desafio", content: "<p>Um dos principais desafios técnicos é expandir o alinhamento em direção a um fluxo mais automatizado, tornando o software robusto e compreensível para usuários além de sua autora original.</p>" },
        { label: "08", title: "Desenvolvimento futuro", content: "<p>A expansão ainda está em andamento, especialmente em torno de:</p><ul><li>melhorar o alinhamento automatizado</li><li>tornar a ferramenta utilizável por outros pesquisadores/usuários</li><li>criar uma interface dedicada</li><li>melhorar a experiência do usuário</li><li>ampliar a usabilidade</li><li>empacotar o HanParal como software local / executável para download</li></ul>" },
        { label: "", title: "Status atual", content: "<p><strong>MVP concluído · Expansão em andamento</strong></p><p><span class=\"subtle-note\">Atualização do repositório em breve.</span></p>" }
      ],
      links: []
    }
  },
  ko: {
    hanlevel: {
      title: "HanLevel",
      category: "NLP 및 언어 기술 · 교육 기술 · 해커톤",
      status: "완료 · 2026년 9월",
      summary: "학습자와 교육자가 한국어 텍스트의 수준 적합성을 판단하고 난이도에 영향을 주는 언어적 요인을 이해할 수 있도록 만든 해석 가능한 한국어 가독성 분석 도구입니다.",
      tags: ["Python", "Streamlit", "한국어 NLP", "Kiwi", "가독성"],
      sections: [
        { label: "01", title: "문제", content: "<p>한국어 읽기 자료를 수준에 맞게 고르는 일은 독학 학습자와 교사 모두에게 쉽지 않습니다. 짧고 익숙해 보이는 텍스트라도 고급 어휘, 복잡한 문법 구조, 긴 문장을 포함할 수 있습니다. HanLevel은 이 텍스트가 학습자 수준에 적절한지, 그리고 어떤 요소가 쉽거나 어렵게 만드는지를 설명하기 위해 만들어졌습니다.</p>" },
        { label: "02", title: "작동 방식", content: "<p>사용자는 한국어 텍스트를 애플리케이션에 직접 입력합니다.</p><p>HanLevel은 다음 정보를 제공합니다.</p><ul><li>예상 난이도: 초급, 중급, 고급</li><li>0–100점 HanLevel 점수</li><li>어휘 난이도</li><li>문법 및 형태소 복잡도</li><li>문장 길이 복잡도</li><li>사전 커버리지</li><li>어휘 수준 분포</li><li>어려울 수 있는 어휘</li><li>감지된 구조적 표지</li><li>문장당 평균 eojeol</li><li>최종 결과에 영향을 준 요인 설명</li></ul>" },
        { label: "", title: "점수 산정", content: "<div class=\"case-metrics\"><article><strong>45%</strong><span>어휘 난이도</span></article><article><strong>35%</strong><span>문법 및 형태소</span></article><article><strong>20%</strong><span>문장 길이</span></article></div><p>분류 기준: &lt;25 — 초급; 25–&lt;50 — 중급; ≥50 — 고급.</p><p><small>이 기준은 프로젝트 내부에서 설정한 임시 기준입니다. TOPIK이나 CEFR의 공식 경계가 아닙니다.</small></p>" },
        { label: "03", title: "NLP 접근 방식", content: "<p>어휘 분석은 Korean Learners’ Dictionary(한국어기초사전)에서 파생한 학습자 수준 정보를 사용합니다.</p><p>어휘 수준은 초급 → 0, 중급 → 50, 고급 → 100으로 매핑됩니다. 미분류 어휘는 자동으로 쉽거나 어렵다고 처리하지 않고 미분류 상태로 둡니다.</p><p>문법 분석에는 한국어 형태소 분석 도구인 Kiwi / kiwipiepy를 사용합니다.</p><p>구조적 신호에는 다음이 포함됩니다.</p><ul><li>연결 어미</li><li>관형사형 어미</li><li>명사화 어미</li><li>보조 용언</li><li>인용 조사</li><li>선어말 어미</li><li>형태소 밀도</li></ul><p>문장 복잡도는 문장당 평균 eojeol을 추가적인 구조 복잡도 신호로 사용합니다.</p>" },
        { label: "04", title: "데이터 및 배포", content: "<div class=\"case-metrics\"><article><strong>~969 MB</strong><span>11개 JSON 파일로 구성된 원본 KRDICT 내보내기</span></article><article><strong>~1.79 MB</strong><span>배포용 어휘 인덱스</span></article></div><p>HanLevel은 실시간 API 대신 Korean Learners’ Dictionary에서 파생한 경량 로컬 어휘 인덱스를 사용합니다. 이를 통해 배포 안정성, 속도, 재현성을 높였습니다.</p>" },
        { label: "05", title: "내부 보정", content: "<div class=\"case-metrics\"><article><strong>5</strong><span>초급 텍스트</span></article><article><strong>5</strong><span>중급 텍스트</span></article><article><strong>5</strong><span>고급 텍스트</span></article><article><strong>15 / 15</strong><span>내부 보정 일치</span></article></div><p>이는 내부 보정 일치 결과이며 외부 평가 결과가 아닙니다. 보정 세트는 작고 내부적으로 구성되었습니다.</p>" },
        { label: "06", title: "기술 스택", content: "<ul><li>Python</li><li>Streamlit</li><li>Kiwi / kiwipiepy</li><li>KRDICT 기반 어휘 인덱스</li><li>GitHub</li><li>Streamlit Community Cloud</li></ul>" },
        { label: "07", title: "한계", content: "<ul><li>내부 보정 세트가 작음</li><li>분류 기준이 임시적임</li><li>일부 어휘는 미분류로 남음</li><li>동음이의어를 문맥에 따라 완전히 구분하지 못함</li><li>문법 점수는 교육문법 전체 분석이 아니라 구조적 지표에 기반함</li><li>매우 짧은 텍스트는 판단 근거가 적음</li><li>문장 길이는 통사 복잡도의 한 측면만 반영함</li></ul>" },
        { label: "08", title: "향후 방향", content: "<p>HanLevel v1.0에서는 다음을 탐색할 수 있습니다.</p><ul><li>수준별 텍스트 조정</li><li>한국어 텍스트 단순화</li><li>학습자 친화적 설명</li><li>어휘 지원</li><li>독해 문항</li><li>읽기 자료 추천</li><li>더 넓은 평가</li></ul>" }
      ],
      links: [["Live App", "https://hanlevel.streamlit.app/"], ["GitHub", "https://github.com/liviaaguiarcc/HanLevel"], ["Devpost", "https://devpost.com/software/hanlevel"], ["Video Demo", "https://youtu.be/wGAb7SvXj-o?si=O36g_ZAJPjPJTn9N"]]
    },
    nsmc: {
      title: "NSMC Korean Movie Reviews",
      subtitle: "데이터 품질 및 탐색적 분석",
      category: "데이터 및 분석 · 한국어 NLP",
      status: "진행 중 · 2026",
      summary: "NSMC 한국어 감성 데이터셋의 구조, 품질, 언어적 특성을 데이터 정제, 탐색적 분석, 특징 생성, 소규모 수동 주석을 통해 살펴보는 개인 데이터·NLP 프로젝트입니다.",
      tags: ["Python", "Pandas", "Excel", "한국어 NLP", "EDA"],
      sections: [
        { label: "01", title: "데이터셋", content: "<p>한국어 영화 리뷰 200,000건.</p><p>열: id · document · label</p><p>감성 분포: 긍정과 부정이 약 50 / 50으로 균형을 이룹니다.</p>" },
        { label: "02", title: "데이터 품질", content: "<div class=\"case-metrics\"><article><strong>8</strong><span>빈 텍스트 / 공백 텍스트</span></article><article><strong>5,449</strong><span>중복 행</span></article><article><strong>1,590</strong><span>서로 다른 중복 텍스트</span></article><article><strong>221</strong><span>상충하는 라벨</span></article></div><p>1,369개의 중복 텍스트는 일관된 라벨을 가지고 있습니다.</p>" },
        { label: "03", title: "텍스트 탐색", content: "<p>텍스트 길이: 최솟값 1, 최댓값 142, 평균 ≈ 35.22, 중앙값 27.</p><p>10,000건의 층화 표본은 긍정 5,000건과 부정 5,000건으로 구성되었습니다.</p><p>길이 분포: 1–10: 1,051; 11–20: 2,638; 21–40: 3,496; 41–80: 1,874; 81+: 941.</p>" },
        { label: "04", title: "표본 및 정규화", content: "<p>10,000건의 층화 표본.</p><p>중복 행 166건.</p><p>빈 텍스트 0건.</p><p>정규화로 변경된 텍스트는 3건뿐입니다.</p>" },
        { label: "05", title: "언어 특성", content: "<p>생성한 특징:</p><ul><li>텍스트 길이</li><li>eojeol 수</li><li>웃음 표지</li><li>울음 표지</li></ul><div class=\"case-metrics\"><article><strong>805</strong><span>웃음: 있음</span></article><article><strong>9,195</strong><span>웃음: 없음</span></article><article><strong>335</strong><span>울음: 있음</span></article><article><strong>9,665</strong><span>울음: 없음</span></article></div>" },
        { label: "06", title: "탐색적 수동 주석", content: "<p>50개 텍스트를 수동으로 주석 처리했습니다.</p><p>범주: 정서적 / 감정적 — 2; 서술적 / 분석적 — 8; 직접적 — 21; 유머 / 아이러니 — 4; 불확정 — 2; 강화된 표현 — 13.</p><p>이 주석 표본은 의도적으로 작고 탐색적인 성격을 가지며, 넓은 통계적 추론에 사용해서는 안 됩니다.</p>" },
        { label: "", title: "현재 상태", content: "<p><strong>진행 중</strong></p><p>분석과 문서화가 아직 진행 중입니다. 프로젝트가 발전함에 따라 추가 결과와 자료가 보완될 예정입니다.</p>" }
      ],
      links: []
    },
    hanparal: {
      title: "HanParal",
      category: "코퍼스 언어학 · NLP · 번역 기술",
      status: "MVP 완료 · 확장 개발 중 · 2026",
      summary: "코퍼스 준비, 정렬, 주석, 분석, 시각화를 하나의 흐름에서 지원하기 위해 만든 다국어 코퍼스 및 콘코던스 도구입니다. 초기 초점은 한국어–포르투갈어 병렬 데이터에 있습니다.",
      tags: ["Python", "병렬 코퍼스", "코퍼스 언어학", "정렬", "주석"],
      sections: [
        { label: "01", title: "개발 동기", content: "<p>HanParal은 저자의 학부 연구 과정에서 다국어 코퍼스 작업을 더 수월하게 하기 위해 만들어졌습니다.</p><p>코퍼스 구성, 정렬, 주석, 검색, 정제, 분석, 시각화 같은 작업을 서로 분리된 수작업 흐름에만 의존하지 않고 하나의 도구 안에서 다루는 것이 목표였습니다.</p>" },
        { label: "02", title: "입력 및 작업 흐름", content: "<p>지원 입력: TXT; CSV.</p><p>의도한 작업 흐름은 다음을 포함합니다.</p><ul><li>코퍼스 입력</li><li>정제 / 준비</li><li>병렬 텍스트 정렬</li><li>콘코던스 / 검색</li><li>주석</li><li>분석</li><li>요약</li><li>시각화</li></ul>" },
        { label: "03", title: "지원 언어 범위", content: "<p>HanParal은 주로 한국어–포르투갈어 연구를 중심으로 개발되었지만, 다른 언어쌍도 지원하는 것을 목표로 합니다.</p>" },
        { label: "04", title: "연구 활용", content: "<p>HanParal은 저자의 2026년 학부 졸업논문을 지원하는 주요 소프트웨어 도구로 사용되었습니다.</p><p>비교 코퍼스 데이터를 검색, 정렬, 주석 처리, 요약하는 작업을 지원했습니다.</p>" },
        { label: "05", title: "기술 스택", content: "<ul><li>Python</li></ul>" },
        { label: "06", title: "현재 버전", content: "<p>MVP가 완료되었습니다.</p><p>현재 버전은 주로 저자가 사용하고 있습니다.</p>" },
        { label: "07", title: "과제", content: "<p>주요 기술적 과제 중 하나는 정렬 과정을 더 자동화된 흐름으로 확장하면서, 원저자 외의 사용자도 이해하고 안정적으로 사용할 수 있는 소프트웨어로 만드는 것입니다.</p>" },
        { label: "08", title: "향후 개발", content: "<p>확장 개발은 특히 다음 방향을 중심으로 진행 중입니다.</p><ul><li>자동 정렬 개선</li><li>다른 연구자와 사용자가 활용할 수 있는 형태로 개선</li><li>전용 사용자 인터페이스 개발</li><li>사용자 경험 개선</li><li>범용성 확대</li><li>다운로드 가능한 로컬 실행 파일 형태로 패키징</li></ul>" },
        { label: "", title: "현재 상태", content: "<p><strong>MVP 완료 · 확장 개발 중</strong></p><p><span class=\"subtle-note\">저장소 업데이트 예정.</span></p>" }
      ],
      links: []
    }
  },
  es: null
};

UI["pt-BR"].projects.details = projectLocales["pt-BR"];
UI.ko.projects.details = projectLocales.ko;

const validLang = (lang) => SUPPORTED_LANGS.includes(lang) ? lang : "en";
const getQueryLang = () => new URLSearchParams(window.location.search).get("lang");
const initialQueryLang = getQueryLang();
let currentLang = validLang(initialQueryLang || localStorage.getItem(LANG_STORAGE_KEY) || "en");
if (SUPPORTED_LANGS.includes(initialQueryLang)) localStorage.setItem(LANG_STORAGE_KEY, currentLang);

const current = () => UI[currentLang] || UI.en;
const page = () => document.body.dataset.page;
const setText = (selector, value) => { const el = document.querySelector(selector); if (el && value !== undefined) el.textContent = value; };
const setHTML = (selector, value) => { const el = document.querySelector(selector); if (el && value !== undefined) el.innerHTML = value; };

const updateMeta = () => {
  const data = current().meta?.[page()];
  if (!data) return;
  document.title = data[0];
  document.querySelector('meta[name="description"]')?.setAttribute("content", data[1]);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", data[0]);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", data[1]);
};

const buildSwitcher = () => {
  if (document.querySelector(".language-switcher")) return;
  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.setAttribute("role", "group");
  document.body.insertBefore(switcher, document.querySelector(".editorial-nav"));
};

const renderSwitcher = () => {
  const labels = { en: "EN", "pt-BR": "PT", ko: "한국어", es: "ES" };
  const switcher = document.querySelector(".language-switcher");
  if (!switcher) return;
  switcher.setAttribute("aria-label", current().langLabel);
  switcher.innerHTML = SUPPORTED_LANGS.map((lang) => `<button type="button" data-lang="${lang}" aria-label="${labels[lang]}" aria-pressed="${lang === currentLang}">${labels[lang]}</button>`).join("");
  switcher.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
};

const localizeUrl = (href) => {
  const url = new URL(href, window.location.href);
  if (url.origin !== window.location.origin) return href;
  url.searchParams.set("lang", currentLang);
  return `${url.pathname.split("/").pop() || "index.html"}${url.search}${url.hash}`;
};

const updateInternalLinks = () => {
  document.querySelectorAll('a[href]:not([href^="http"]):not([href^="mailto:"]):not([href^="#"])').forEach((link) => {
    link.href = localizeUrl(link.getAttribute("href"));
  });
};

const translateShell = () => {
  const t = current();
  document.documentElement.lang = currentLang;
  document.querySelector(".skip-link").textContent = t.skip;
  document.querySelector(".editorial-nav")?.setAttribute("aria-label", t.navLabel);
  document.querySelectorAll(".editorial-nav a").forEach((link, index) => {
    link.querySelector("strong").textContent = t.nav[index][0];
    link.querySelector("em").textContent = t.nav[index][1];
  });
  document.querySelector(".site-footer nav")?.setAttribute("aria-label", t.footerLabel);
  setText(".site-footer div p", t.footerTagline);
};

const translateHome = () => {
  const t = current().home;
  setText(".home-copy .eyebrow", t.eyebrow); setText("#home-title span:first-child", t.title1); setText("#home-title span:last-child", t.title2); setText(".home-copy .lede", t.lede); setText(".expertise-line", t.expertise); setText(".action-row .button", t.projects); setText(".action-row .editorial-link", t.about);
  document.querySelector(".identity-map")?.setAttribute("aria-label", t.mapLabel);
  const nodes = document.querySelectorAll(".map-node");
  if (nodes.length) {
    nodes[0].querySelector("em").textContent = t.map[0]; nodes[1].querySelector("em").textContent = t.map[1]; if (t.map[14]) nodes[1].querySelector("strong").textContent = t.map[14]; nodes[2].querySelector("span").textContent = t.map[2]; nodes[2].querySelector("strong").textContent = t.map[3]; nodes[2].querySelector("em").textContent = t.map[4]; nodes[3].querySelector("span").textContent = t.map[5]; nodes[3].querySelector("strong").textContent = t.map[6]; nodes[3].querySelector("em").textContent = t.map[7]; nodes[4].querySelector("span").textContent = t.map[8]; nodes[4].querySelector("strong").textContent = t.map[9]; nodes[4].querySelector("em").textContent = t.map[10]; nodes[5].querySelector("span").textContent = t.map[11]; nodes[5].querySelector("strong").textContent = t.map[12]; nodes[5].querySelector("em").textContent = t.map[13];
  }
};

const translateAbout = () => {
  const t = current().about;
  setText(".about-intro .eyebrow", t.eyebrow); setText(".about-intro h1", t.title); setText(".about-statement", t.statement);
  document.querySelectorAll(".about-narrative p:not(.alias-note)").forEach((p, i) => p.textContent = t.paragraphs[i]); setText(".alias-note", t.alias);
  setText(".current-interests .eyebrow", t.currentEyebrow); setText("#interests-title", t.currentTitle); setText(".next-interests .eyebrow", t.nextEyebrow); setText("#next-title", t.nextTitle); setText(".future-group:first-of-type h3", t.methods); setText(".future-group:last-of-type h3", t.languages);
  document.querySelectorAll(".current-interests .tag-list li").forEach((li, i) => li.textContent = t.currentTags[i]); document.querySelectorAll(".future-group:first-of-type li").forEach((li, i) => li.textContent = t.futureMethods[i]); document.querySelectorAll(".future-group:last-of-type li").forEach((li, i) => li.textContent = t.futureLangs[i]);
};

const translateContact = () => {
  const t = current().contact;
  setText(".contact-copy .eyebrow", t.eyebrow); setText(".contact-copy h1", t.title); setText(".contact-copy .lede", t.lede); setText(".contact-method:first-child span", t.email);
};

const translateProjectsPage = () => {
  const t = current().projects;
  setText(".page-intro .eyebrow", t.eyebrow); setText(".page-intro h1", t.title); setText(".page-intro .lede", t.lede); setText("#project-filter-title", t.filterTitle); document.querySelector(".filter-bar")?.setAttribute("aria-label", t.filterLabel);
  document.querySelectorAll(".filter-button").forEach((button, i) => button.textContent = t.filters[i]);
  ["hanlevel", "nsmc", "hanparal"].forEach((key) => {
    const card = document.querySelector(`[data-project="${key}"]`); const data = t.cards[key]; if (!card || !data) return;
    card.querySelector(".card-kicker").textContent = data.kicker; card.querySelector(".project-status").textContent = data.status; card.querySelector("h2").textContent = data.title; card.querySelector("p:not(.card-kicker):not(.project-status)").textContent = data.summary; card.querySelectorAll("li").forEach((li, i) => li.textContent = data.tags[i]); card.querySelector("button").textContent = t.explore;
  });
  document.querySelector(".dossier-close")?.setAttribute("aria-label", t.close);
};

const translateEducation = () => {
  const t = current().education;
  setText(".education-top .eyebrow", t.eyebrow); setText(".education-top h1", t.title); setText(".education-top .lede", t.lede); document.querySelectorAll(".archive-tab").forEach((tab, i) => tab.textContent = t.tabs[i]);
  setText("#education-formal .eyebrow", t.tabs[0]); setText("#education-formal h2", t.academic); document.querySelectorAll(".academic-record small").forEach((s, i) => s.textContent = t.labels[i]); document.querySelectorAll(".academic-record h3").forEach((h, i) => { if (t.formalTitles?.[i]) h.textContent = t.formalTitles[i]; }); document.querySelector(".academic-record article:first-child div p:nth-of-type(2)").textContent = t.formalNote; document.querySelectorAll(".academic-record time").forEach((time, i) => { if (t.formalDates?.[i]) time.textContent = t.formalDates[i]; });
  setText("#education-programs .eyebrow", t.tabs[1]); setText("#education-programs h2", t.structured); document.querySelectorAll("#education-programs small").forEach((s, i) => { if (t.programDates?.[i]) s.textContent = t.programDates[i]; else s.textContent = s.textContent.replace("In Progress", t.statusInProgress); });
  document.querySelectorAll("#education-programs h3").forEach((h, i) => { if (t.programTitles?.[i]) h.textContent = t.programTitles[i]; });
  const programPs = document.querySelectorAll("#education-programs article p:last-child"); if (programPs[0]) programPs[0].textContent = t.gciDesc; if (programPs[1]) programPs[1].textContent = t.ibmDesc; if (programPs[2]) programPs[2].textContent = t.uspDesc; if (programPs[3]) programPs[3].textContent = t.programariaDesc;
  setText("#education-certifications .eyebrow", t.tabs[2]); setText("#education-certifications h2", t.selected); document.querySelectorAll(".credential-group > h3").forEach((h, i) => h.textContent = t.groups[i]); document.querySelectorAll("#data-programming h4").forEach((h, i) => { if (t.credentialTitles?.[i]) h.textContent = t.credentialTitles[i]; }); setText(".nested-certificates p", t.completedWithin); document.querySelectorAll(".nested-certificates li").forEach((li, i) => { const title = li.textContent.split(" — ")[0]; if (t.certDates?.[i]) li.textContent = `${title} — ${t.certDates[i]}`; }); const ibmStatus = document.querySelector("#ibm-data-analytics article > p"); if (ibmStatus) ibmStatus.textContent = t.status; document.querySelectorAll("#data-programming article p, #computational-linguistics article p").forEach((p, i) => { if (t.certDates?.[i + 4]) p.textContent = t.certDates[i + 4]; }); const topikIssued = document.querySelector("#language-proficiency article > p"); if (topikIssued && t.certDates?.[10]) topikIssued.textContent = t.certDates[10]; const adv = document.querySelector("#language-proficiency article div p:last-child"); if (adv) adv.textContent = t.advancedKorean;
};

const translateResearch = () => {
  const t = current().research;
  setText(".page-intro .eyebrow", t.eyebrow); setText(".page-intro h1", t.title); setText(".page-intro .lede", t.lede);
  const card = document.querySelector(".thesis-card"); if (card) card.setAttribute("aria-label", card.classList.contains("is-flipped") ? t.flipB : t.flipA);
  if (t.thesisTitle) { setText(".thesis-title", t.thesisTitle); const title = document.querySelector(".thesis-title"); t.thesisTitleLang ? title?.setAttribute("lang", t.thesisTitleLang) : title?.removeAttribute("lang"); }
  if (t.thesisSubtitle) { setText(".thesis-subtitle", t.thesisSubtitle); const subtitle = document.querySelector(".thesis-subtitle"); t.thesisTitleLang ? subtitle?.setAttribute("lang", t.thesisTitleLang) : subtitle?.removeAttribute("lang"); }
  setText(".thesis-front .status-label", t.thesisLabel); setHTML(".thesis-description", t.thesisDesc); const frontLine = document.querySelector(".thesis-front .research-line"); if (frontLine) frontLine.innerHTML = `<strong>${t.languages}</strong>${t.languagesLine}`;
  setText(".thesis-front .research-tags", t.methods); setText(".thesis-front .flip-cue", t.flipRead); setText(".thesis-back-heading", t.abstractHeading); setHTML(".abstract-text", t.abstract); const kw = document.querySelector(".thesis-back .research-line"); if (kw) kw.innerHTML = `<strong>${t.keywords}</strong>${t.keywordsLine}`; setText(".research-access", t.access); setText(".thesis-back .flip-cue", t.flipBack);
  setText(".research-next .status-label", t.nextLabel); setText(".research-subtitle", t.koptSubtitle); setText(".research-status", t.koptStatus); setText(".research-next > p:nth-of-type(4)", t.koptDesc); setText(".research-tags.quiet", t.koptTags); setText("#research-interests-title", t.interests); setText(".research-interests p", t.interestsLine);
};

const applyTranslations = () => {
  buildSwitcher(); renderSwitcher(); translateShell(); updateMeta();
  const handlers = { home: translateHome, about: translateAbout, projects: translateProjectsPage, education: translateEducation, research: translateResearch, contact: translateContact };
  handlers[page()]?.(); updateInternalLinks();
  window.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang: currentLang } }));
};

const setLanguage = (lang) => {
  currentLang = validLang(lang); localStorage.setItem(LANG_STORAGE_KEY, currentLang);
  const url = new URL(window.location.href); url.searchParams.set("lang", currentLang); history.replaceState(null, "", url);
  applyTranslations();
};

window.I18N = { get lang() { return currentLang; }, get ui() { return current(); }, projectLocale: (key) => current().projects?.details?.[key] || projectLocales[currentLang]?.[key] || null, setLanguage, applyTranslations };
document.addEventListener("DOMContentLoaded", applyTranslations);
