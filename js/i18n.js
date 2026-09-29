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
      eyebrow: "Hi, I'm Lívia Aguiar.", title1: "Language", title2: "Data × AI", lede: "I build data and NLP projects around multilingual language technology, with a focus on Korean and Brazilian Portuguese.", expertise: "Multilingual NLP · Language Data · Corpus Linguistics · Data Analysis", projects: "Explore Projects", about: "About me →", map: ["Korean", "Brazilian Portuguese", "source", "Translation", "& Linguistics", "archive", "Language Data", "Corpus · Alignment", "model", "NLP", "AI · Evaluation", "method", "Data Analysis", "features · quality"], mapLabel: "Language-data identity map"
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
      formalNote: "Final semester / expected completion after the final course requirement in Dec 2026", gciDesc: "International program covering data science, AI, consumer intelligence, business applications, and hands-on project development.", ibmDesc: "Professional certificate program covering data analysis, spreadsheets, SQL, Python, data visualization and analytics tools.", uspDesc: "Advanced training course in Teaching Korean as a Foreign Language, offered through FFLCH's University Culture and Extension Service.", programariaDesc: "Practical data analysis program introducing Python fundamentals, data manipulation, exploratory analysis, and hands-on exercises with real-world datasets."
    },
    research: {
      eyebrow: "Research", title: "Research", lede: "Current and planned research across literary translation, multilingual language data and NLP.", flipA: "Flip thesis card to read abstract", flipB: "Flip thesis card back to summary", thesisLabel: "Undergraduate Thesis · 2026", thesisDesc: "A comparative study of how Korean culture-specific items in Han Kang’s <em>Human Acts</em> are translated into Brazilian Portuguese, English, and Spanish, examining how different translation strategies mediate culture, historical memory, trauma, and social relations.", languages: "Languages", languagesLine: "Korean · Brazilian Portuguese · English · Spanish", methods: "Literary Translation · Culture-Specific Items · Descriptive Translation Studies · Comparative Analysis · Corpus-Based Research", flipRead: "Flip to read abstract ↻", flipBack: "Flip back ↻", abstractHeading: "Abstract", abstract: "This study analyzes the treatment of Culture-Specific Items (CSIs) in Han Kang’s <em>Human Acts</em>, comparing the Korean source text, <em>소년이 온다</em>, with its translations into Portuguese, English, and Spanish. Grounded in Descriptive Translation Studies and in Franco Aixelá’s (2013) classification of translation strategies, this research is exploratory, qualitative, bibliographical, documentary, and case-study based. The corpus was organized through the identification, selection, and alignment of CSIs in a comparative spreadsheet, supported by AntConc and HanParal, a tool developed by the author for searching, aligning, annotating, and summarizing the data. The items analyzed were grouped into five categories: national and identity-related references; historical-political references and repression; spaces and places; funeral rites and mourning; and social relations and forms of address. The analysis shows that CSIs do not function merely as isolated lexical markers, but contribute to the construction of the historical memory of the Gwangju Uprising, the representation of state violence, the spatialization of trauma, the ritualization of mourning, and the social relations among the characters. The results indicate that the Portuguese translation tends more strongly toward the conservation of Korean cultural references, while the English translation occupies an intermediate position and the Spanish translation more frequently employs substitution strategies, such as universalization, naturalization, and deletion. The study concludes that the treatment of CSIs directly affects how each translation mediates the culture, memory, and historical experience represented in the novel.", keywords: "Keywords", keywordsLine: "Literary Translation · Culture-Specific Items · Korean Literature · Han Kang · Human Acts", access: "Research access: Available soon", nextLabel: "Next Research Direction", koptSubtitle: "Construction and Evaluation of a Korean–Brazilian Portuguese Parallel Corpus for NLP", koptStatus: "Planned Master’s Research", koptDesc: "A proposed parallel-corpus project focused on building and evaluating language resources for the under-resourced Korean–Brazilian Portuguese pair.", koptTags: "KR ↔ PT-BR · Parallel Corpora · Multilingual NLP · Machine Translation · Language Data", interests: "Research Interests", interestsLine: "Corpus Linguistics · Multilingual NLP · Computational Linguistics · Language Data · Data Analysis · Machine Learning"
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
Object.assign(UI["pt-BR"].home, { eyebrow: "Oi, eu sou Lívia Aguiar.", title1: "Linguagem", title2: "Dados × IA", lede: "Desenvolvo projetos de dados e PLN voltados à tecnologia linguística multilíngue, com foco em coreano e português brasileiro.", expertise: "PLN Multilíngue · Dados Linguísticos · Linguística de Corpus · Análise de Dados", projects: "Ver projetos", about: "Sobre mim →", map: ["Coreano", "Português brasileiro", "origem", "Tradução", "& Linguística", "arquivo", "Dados Linguísticos", "Corpus · Alinhamento", "modelo", "PLN", "IA · Avaliação", "método", "Análise de Dados", "atributos · qualidade"], mapLabel: "Mapa de identidade linguagem-dados" });
Object.assign(UI["pt-BR"].about, { eyebrow: "Sobre", title: "Sobre mim", statement: "Tenho interesse no que acontece quando a linguagem se torna dado.", paragraphs: ["Minha formação é em Tradução e Linguística, áreas em que desenvolvi um interesse sólido por como as línguas são estruturadas, representadas e conectadas. O coreano se tornou uma parte central desse percurso e continua a orientar as perguntas que exploro em meus projetos e pesquisas.", "Com o tempo, esse interesse se ampliou da língua em si para os dados por trás dela: corpora, conjuntos de dados, padrões, qualidade dos dados e sistemas usados para processá-los. Hoje, desenvolvo habilidades e projetos em Ciência de Dados, Engenharia de Dados e Processamento de Linguagem Natural, com interesse especial em contextos multilíngues e em línguas de poucos recursos.", "Meu trabalho atual aproxima coreano e português brasileiro por meio de dados linguísticos, construção de corpora, análise e PLN. Tenho interesse especial em criar datasets, pipelines e ferramentas que conectem conhecimento linguístico e métodos computacionais."], alias: "Em alguns projetos e repositórios, também posso aparecer como LAC Cavalcanti.", currentEyebrow: "Interesses atuais", currentTitle: "O que estou explorando", nextEyebrow: "Próximas direções", nextTitle: "O que quero explorar em seguida", methods: "Métodos & Tecnologias", languages: "Línguas & Direções multilíngues", currentTags: ["PLN Multilíngue", "Dados Linguísticos", "Construção de Corpus", "Análise de Dados", "PLN para Coreano", "PLN para Línguas de Poucos Recursos"], futureMethods: ["Aprendizado de Máquina", "Grandes Modelos de Linguagem", "Tradução Automática"], futureLangs: ["Japonês", "Tailandês", "Quéchua"] });
Object.assign(UI["pt-BR"].contact, { eyebrow: "Contato", title: "Vamos conversar.", lede: "Tenho interesse em conversar sobre dados, PLN, tecnologia linguística multilíngue, pesquisa e projetos colaborativos.", email: "Email" });
Object.assign(UI["pt-BR"].projects, { eyebrow: "Projetos", title: "Projetos", lede: "Trabalhos selecionados em dados, PLN, software e tecnologia linguística.", filterTitle: "Categorias de projetos", filterLabel: "Filtrar projetos", filters: ["Todos", "Dados & Analytics", "PLN & Tecnologia Linguística", "Software & Ferramentas", "Hackathons"], explore: "Ver projeto →", close: "Fechar dossiê do projeto", projectLinks: "Links do projeto", cards: { hanlevel: { kicker: "PLN & Tecnologia Linguística · Tecnologia Educacional · Hackathon", status: "Concluído · Set 2026", title: "HanLevel", summary: "Um analisador interpretável de legibilidade em coreano que estima se um texto é adequado para estudantes de nível iniciante, intermediário ou avançado — e explica quais fatores influenciam sua dificuldade.", tags: ["Python", "Streamlit", "PLN em Coreano", "Kiwi", "Legibilidade"] }, nsmc: { kicker: "Dados & Analytics · PLN em Coreano", status: "Em andamento · 2026", title: "NSMC Korean Movie Reviews", summary: "Uma análise exploratória e de qualidade de dados, ainda em desenvolvimento, de 200.000 avaliações de filmes em coreano, combinando inspeção do dataset, criação de atributos linguísticos e anotação manual exploratória.", tags: ["Python", "Pandas", "Excel", "PLN em Coreano", "EDA"] }, hanparal: { kicker: "Linguística de Corpus · PLN · Tecnologia da Tradução", status: "MVP concluído · Em expansão · 2026", title: "HanParal", summary: "Uma ferramenta multilíngue de corpus desenvolvida em Python para apoiar alinhamento, anotação, análise e visualização de dados linguísticos paralelos, criada inicialmente para pesquisas com coreano e português.", tags: ["Python", "Corpora Paralelos", "Linguística de Corpus", "Alinhamento", "Anotação"] } } });
Object.assign(UI["pt-BR"].education, { eyebrow: "Formação & Credenciais", title: "Formação", lede: "Minha formação acadêmica, programas relevantes e credenciais selecionadas em linguagem, dados e PLN.", tabs: ["Formação Acadêmica", "Programas & Cursos", "Certificações"], academic: "Percurso acadêmico", structured: "Formação estruturada", selected: "Credenciais selecionadas", labels: ["Graduação", "Pós-graduação Lato Sensu", "Curso Superior de Tecnologia"], formalTitles: ["Bacharelado em Tradução", "Pós-graduação Lato Sensu em Psicopedagogia", "Gestão de Turismo"], formalDates: ["ago. 2022 – dez. 2026", "jan. 2024 – out. 2024", "ago. 2019 – maio 2022"], statusInProgress: "Em andamento", completedWithin: "Certificados concluídos dentro do programa:", status: "Status: Em andamento", groups: ["IBM · Data Analytics", "Dados & Programação", "Linguística Computacional & Dados Linguísticos", "Proficiência Linguística"], advancedKorean: "Proficiência Avançada em Coreano", formalNote: "Último semestre; conclusão prevista após a finalização da última disciplina em dezembro de 2026.", programDates: ["set. 2026 – dez. 2026 · Em andamento", "2026 – presente · Em andamento", "2026", "mar. 2024 – nov. 2024", "set. 2026 – dez. 2026 · Em andamento"], gciDesc: "Programa internacional sobre ciência de dados, IA, inteligência do consumidor, aplicações de negócios e desenvolvimento prático de projeto.", ibmDesc: "Programa de certificado profissional que cobre análise de dados, planilhas, SQL, Python, visualização de dados e ferramentas analíticas.", uspDesc: "Curso de aperfeiçoamento em Ensino de Coreano como Língua Estrangeira, oferecido pelo Serviço de Cultura e Extensão Universitária da FFLCH.", programariaDesc: "Programa prático de análise de dados com introdução a fundamentos de Python, manipulação de dados, análise exploratória e exercícios com datasets reais.", certDates: ["IBM · set. 2026", "IBM · set. 2026", "IBM · set. 2026", "IBM · set. 2026", "Fundação Bradesco · set. 2026", "Alura · set. 2026", "Codédex · jul. 2026", "Korea University / 고려대학교 · jul. 2026", "Korea University / 고려대학교 · jul. 2026", "Korea University / 고려대학교 · jun. 2026", "Emitido em nov. 2023"] });
Object.assign(UI["pt-BR"].research, { eyebrow: "Pesquisa", title: "Pesquisa", lede: "Pesquisa atual e planejada em tradução literária, dados linguísticos multilíngues e PLN.", flipA: "Virar cartão do TCC para ler o resumo", flipB: "Voltar para a apresentação do TCC", thesisLabel: "TCC · 2026", thesisDesc: "Um estudo comparativo sobre como itens culturais-específicos coreanos em <em>Atos Humanos</em>, de Han Kang, são traduzidos para o português brasileiro, o inglês e o espanhol, examinando como diferentes estratégias tradutórias mediam cultura, memória histórica, trauma e relações sociais.", languages: "Línguas", languagesLine: "Coreano · Português brasileiro · Inglês · Espanhol", methods: "Tradução Literária · Itens Culturais-Específicos · Estudos Descritivos da Tradução · Análise Comparativa · Pesquisa Baseada em Corpus", flipRead: "Virar para ler o resumo ↻", flipBack: "Voltar ↻", abstractHeading: "Resumo", abstract: "Este estudo analisa o tratamento de Itens Culturais-Específicos (ICEs) em <em>Atos Humanos</em>, de Han Kang, comparando o texto-fonte em coreano, <em>소년이 온다</em>, com suas traduções para o português, o inglês e o espanhol. Fundamentada nos Estudos Descritivos da Tradução e na classificação de estratégias tradutórias de Franco Aixelá (2013), a pesquisa é exploratória, qualitativa, bibliográfica, documental e baseada em estudo de caso. O corpus foi organizado por meio da identificação, seleção e alinhamento dos ICEs em uma planilha comparativa, com apoio do AntConc e do HanParal, ferramenta desenvolvida pela autora para buscar, alinhar, anotar e sumarizar os dados. Os itens analisados foram agrupados em cinco categorias: referências nacionais e identitárias; referências histórico-políticas e repressão; espaços e lugares; ritos funerários e luto; e relações sociais e formas de tratamento. A análise mostra que os ICEs não funcionam apenas como marcadores lexicais isolados, mas contribuem para a construção da memória histórica do Levante de Gwangju, para a representação da violência de Estado, para a espacialização do trauma, para a ritualização do luto e para as relações sociais entre as personagens. Os resultados indicam que a tradução em português tende mais fortemente à conservação das referências culturais coreanas, enquanto a tradução em inglês ocupa uma posição intermediária e a tradução em espanhol emprega com mais frequência estratégias de substituição, como universalização, naturalização e apagamento. O estudo conclui que o tratamento dos ICEs afeta diretamente a forma como cada tradução media a cultura, a memória e a experiência histórica representadas no romance.", keywords: "Palavras-chave", keywordsLine: "Tradução Literária · Itens Culturais-Específicos · Literatura Coreana · Han Kang · Atos Humanos", access: "Acesso à pesquisa: disponível em breve", nextLabel: "Próxima Direção de Pesquisa", koptSubtitle: "Construção e Avaliação de um Corpus Paralelo Coreano–Português Brasileiro para PLN", koptStatus: "Pesquisa de mestrado planejada", koptDesc: "Projeto proposto de corpus paralelo focado em construir e avaliar recursos linguísticos para o par coreano–português brasileiro, ainda pouco atendido.", koptTags: "KR ↔ PT-BR · Corpora Paralelos · PLN Multilíngue · Tradução Automática · Dados Linguísticos", interests: "Interesses de Pesquisa", interestsLine: "Linguística de Corpus · PLN Multilíngue · Linguística Computacional · Dados Linguísticos · Análise de Dados · Aprendizado de Máquina" });

UI.ko = structuredClone(UI.en);
Object.assign(UI.ko, { skip: "본문으로 건너뛰기", navLabel: "주요 내비게이션", footerLabel: "푸터 링크", langLabel: "언어 선택", footerTagline: "언어 × 데이터 × AI", nav: [["홈", "시작 →"], ["소개", "나의 경로 →"], ["프로젝트", "→"], ["교육", "→"], ["연구", "→"], ["연락", "문의 →"]] });
Object.assign(UI.ko.home, { eyebrow: "안녕하세요, Lívia Aguiar입니다.", title1: "언어", title2: "데이터 × AI", lede: "한국어와 브라질 포르투갈어를 중심으로 다국어 언어 기술, 데이터, NLP 프로젝트를 만듭니다.", expertise: "다국어 NLP · 언어 데이터 · 코퍼스 언어학 · 데이터 분석", projects: "프로젝트 보기", about: "소개 보기 →", map: ["한국어", "브라질 포르투갈어", "출발점", "번역", "& 언어학", "아카이브", "언어 데이터", "코퍼스 · 정렬", "모델", "NLP", "AI · 평가", "방법", "데이터 분석", "특징 · 품질"], mapLabel: "언어-데이터 정체성 지도" });
Object.assign(UI.ko.about, { eyebrow: "소개", title: "소개", statement: "언어가 데이터가 될 때 일어나는 일에 관심이 있습니다.", paragraphs: ["저는 번역과 언어학을 배경으로 언어가 어떻게 구조화되고, 표상되며, 서로 연결되는지에 관심을 키워 왔습니다. 한국어는 그 과정의 중심이 되었고, 지금도 제 프로젝트와 연구 질문을 형성하고 있습니다.", "이 관심은 언어 자체에서 그 뒤의 데이터, 즉 코퍼스, 데이터셋, 패턴, 데이터 품질, 처리 시스템으로 확장되었습니다. 현재는 데이터 사이언스, 데이터 엔지니어링, 자연어 처리 분야의 역량과 프로젝트를 쌓고 있으며, 특히 다국어 및 저자원 언어 환경에 관심이 있습니다.", "제 현재 작업은 언어 데이터, 코퍼스 구축, 분석, NLP를 통해 한국어와 브라질 포르투갈어를 자주 연결합니다. 언어학적 지식과 계산적 방법을 연결하는 데이터셋, 파이프라인, 도구를 만드는 데 관심이 있습니다."], alias: "일부 프로젝트와 저장소에서는 LAC Cavalcanti라는 이름으로도 표시될 수 있습니다.", currentEyebrow: "현재 관심사", currentTitle: "탐구 중인 주제", nextEyebrow: "다음 방향", nextTitle: "앞으로 탐구하고 싶은 것", methods: "방법 & 기술", languages: "언어 & 다국어 방향", currentTags: ["다국어 NLP", "언어 데이터", "코퍼스 구축", "데이터 분석", "한국어 NLP", "저자원 NLP"], futureMethods: ["Machine Learning", "Large Language Models", "Machine Translation"], futureLangs: ["일본어", "태국어", "케추아어"] });
Object.assign(UI.ko.contact, { eyebrow: "연락", title: "함께 이야기해요.", lede: "데이터, NLP, 다국어 언어 기술, 연구, 협업 프로젝트에 관한 대화를 언제나 환영합니다.", email: "이메일" });
Object.assign(UI.ko.projects, { eyebrow: "프로젝트", title: "프로젝트", lede: "데이터, NLP, 소프트웨어, 언어 기술 분야의 주요 작업입니다.", filterTitle: "프로젝트 카테고리", filterLabel: "프로젝트 필터", filters: ["전체", "데이터 & 분석", "NLP & 언어 기술", "소프트웨어 & 도구", "해커톤"], explore: "프로젝트 보기 →", close: "프로젝트 문서 닫기", projectLinks: "프로젝트 링크" });
Object.assign(UI.ko.education, { eyebrow: "교육 & 자격", title: "교육", lede: "언어, 데이터, NLP와 관련된 학력, 프로그램, 주요 자격입니다.", tabs: ["정규 교육", "프로그램 & coursework", "자격증"], academic: "학력", structured: "구조화된 교육", selected: "주요 자격", labels: ["학사", "전문대학원 수료증", "전문학사/기술학위"], statusInProgress: "진행 중", completedWithin: "프로그램 내 완료한 수료증:", status: "상태: 진행 중", groups: ["IBM · Data Analytics", "데이터 & 프로그래밍", "전산언어학 & 언어 데이터", "언어 능력"], advancedKorean: "고급 한국어 능력", formalNote: "마지막 학기 / 최종 과목 요건 완료 후 Dec 2026 졸업 예정", gciDesc: "데이터 사이언스, AI, 소비자 인사이트, 비즈니스 응용, 실습 프로젝트 개발을 다루는 국제 프로그램입니다.", ibmDesc: "데이터 분석, 스프레드시트, SQL, Python, 데이터 시각화, 분석 도구를 다루는 전문 인증 프로그램입니다.", uspDesc: "FFLCH 대학 문화·확장 서비스를 통해 제공된 외국어로서의 한국어 교육 심화 과정입니다.", programariaDesc: "Python 기초, 데이터 조작, 탐색적 분석, 실제 데이터셋 기반 실습을 소개하는 실무형 데이터 분석 프로그램입니다." });
Object.assign(UI.ko.research, { eyebrow: "연구", title: "연구", lede: "문학 번역, 다국어 언어 데이터, NLP에 관한 현재 및 계획 연구입니다.", flipA: "초록을 읽으려면 논문 카드를 뒤집기", flipB: "요약으로 돌아가기", thesisLabel: "학부 졸업논문 · 2026", thesisDesc: "Han Kang의 <em>Human Acts</em>에 나타난 한국 문화특정 항목이 브라질 포르투갈어, 영어, 스페인어로 어떻게 번역되는지 비교하고, 번역 전략이 문화, 역사 기억, 트라우마, 사회적 관계를 어떻게 매개하는지 분석하는 연구입니다.", languages: "언어", languagesLine: "한국어 · 브라질 포르투갈어 · 영어 · 스페인어", methods: "문학 번역 · 문화특정 항목 · 기술 번역학 · 비교 분석 · 코퍼스 기반 연구", flipRead: "초록 읽기 ↻", flipBack: "돌아가기 ↻", abstractHeading: "초록", keywords: "키워드", access: "연구 접근: 곧 공개 예정", nextLabel: "다음 연구 방향", koptSubtitle: "NLP를 위한 한국어–브라질 포르투갈어 병렬 코퍼스 구축 및 평가", koptStatus: "석사 연구 계획", koptDesc: "저자원 언어쌍인 한국어–브라질 포르투갈어를 위한 언어 자원을 구축하고 평가하는 병렬 코퍼스 프로젝트 제안입니다.", interests: "연구 관심사", interestsLine: "코퍼스 언어학 · 다국어 NLP · 전산언어학 · 언어 데이터 · 데이터 분석 · Machine Learning" });

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
  ko: null,
  es: null
};

UI["pt-BR"].projects.details = projectLocales["pt-BR"];

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
    nodes[0].querySelector("em").textContent = t.map[0]; nodes[1].querySelector("em").textContent = t.map[1]; nodes[2].querySelector("span").textContent = t.map[2]; nodes[2].querySelector("strong").textContent = t.map[3]; nodes[2].querySelector("em").textContent = t.map[4]; nodes[3].querySelector("span").textContent = t.map[5]; nodes[3].querySelector("strong").textContent = t.map[6]; nodes[3].querySelector("em").textContent = t.map[7]; nodes[4].querySelector("span").textContent = t.map[8]; nodes[4].querySelector("strong").textContent = t.map[9]; nodes[4].querySelector("em").textContent = t.map[10]; nodes[5].querySelector("span").textContent = t.map[11]; nodes[5].querySelector("strong").textContent = t.map[12]; nodes[5].querySelector("em").textContent = t.map[13];
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
  const programPs = document.querySelectorAll("#education-programs article p:last-child"); if (programPs[0]) programPs[0].textContent = t.gciDesc; if (programPs[1]) programPs[1].textContent = t.ibmDesc; if (programPs[2]) programPs[2].textContent = t.uspDesc; if (programPs[3]) programPs[3].textContent = t.programariaDesc;
  setText("#education-certifications .eyebrow", t.tabs[2]); setText("#education-certifications h2", t.selected); document.querySelectorAll(".credential-group > h3").forEach((h, i) => h.textContent = t.groups[i]); setText(".nested-certificates p", t.completedWithin); document.querySelectorAll(".nested-certificates li").forEach((li, i) => { const title = li.textContent.split(" — ")[0]; if (t.certDates?.[i]) li.textContent = `${title} — ${t.certDates[i]}`; }); const ibmStatus = document.querySelector("#ibm-data-analytics article > p"); if (ibmStatus) ibmStatus.textContent = t.status; document.querySelectorAll("#data-programming article p, #computational-linguistics article p").forEach((p, i) => { if (t.certDates?.[i + 4]) p.textContent = t.certDates[i + 4]; }); const topikIssued = document.querySelector("#language-proficiency article > p"); if (topikIssued && t.certDates?.[10]) topikIssued.textContent = t.certDates[10]; const adv = document.querySelector("#language-proficiency article div p:last-child"); if (adv) adv.textContent = t.advancedKorean;
};

const translateResearch = () => {
  const t = current().research;
  setText(".page-intro .eyebrow", t.eyebrow); setText(".page-intro h1", t.title); setText(".page-intro .lede", t.lede);
  const card = document.querySelector(".thesis-card"); if (card) card.setAttribute("aria-label", card.classList.contains("is-flipped") ? t.flipB : t.flipA);
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
