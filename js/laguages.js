const contLang = document.querySelector(".lang-container");
const linkLang = document.querySelectorAll(".lang-link");
// Nav Consts
const navHome = document.querySelector(".nav-home");
const navExp = document.querySelector(".nav-exp");
const navAbout = document.querySelector(".nav-about");
const navSkills = document.querySelector(".nav-skills");
const navWork = document.querySelector(".nav-work");
// Intro
const introTitle = document.querySelector(".section-title-text");
const introSubtitle = document.querySelector(".section-subtitle-intro");
// Experience
const expTitle = document.querySelector(".section-title-experience");
const expSubtitle1 = document.querySelector(".experience-sub1");
const expSubtitle2 = document.querySelector(".experience-sub2");
const expText1 = document.querySelector(".experience-text1");
const expText2 = document.querySelector(".experience-text2");
const expBtn = document.querySelector(".experience-btn");
// About
const aboutTitle = document.querySelector(".section-title-about");
const aboutSubtitle = document.querySelector(".section-subtitle-about");
const aboutText1 = document.querySelector(".about-text1");
const aboutText2 = document.querySelector(".about-text2");
const aboutText3 = document.querySelector(".about-text3");
// Skills
const skillsTitle = document.querySelector(".section-title-skills");
const skillsSubtitle1 = document.querySelector(".time-subtitle1");
const skillsLang1 = document.querySelector(".lang-1");
const skillsLang2 = document.querySelector(".lang-2");
const skillsLang3 = document.querySelector(".lang-3");
const skillsSubtitle2 = document.querySelector(".time-subtitle2");
const skillsOuts1 = document.querySelector(".outs-1");
const skillsStrLink = document.querySelector(".str-linkedin");
const skillsOuts2 = document.querySelector(".outs-2");

linkLang.forEach((lang) => {
  lang.addEventListener("click", () => {
    contLang.querySelector(".active").classList.remove("active");
    lang.classList.add("active");

    const attr = lang.getAttribute("language");
    // Navbar
    navHome.textContent = nav[attr].home;
    navExp.textContent = nav[attr].experience;
    navAbout.textContent = nav[attr].about;
    navSkills.textContent = nav[attr].skills;
    navWork.textContent = nav[attr].work;
    // Intro
    introTitle.textContent = intro[attr].title;
    introSubtitle.textContent = intro[attr].subtitle;
    // Experience
    expTitle.textContent = experience[attr].title;
    expSubtitle1.textContent = experience[attr].subtitle1;
    expSubtitle2.textContent = experience[attr].subtitle2;
    expText1.textContent = experience[attr].text1;
    expText2.textContent = experience[attr].text2;
    expBtn.textContent = experience[attr].expbtn;
    // About
    aboutTitle.textContent = about[attr].title;
    aboutSubtitle.textContent = about[attr].subtitle;
    aboutText1.textContent = about[attr].text1;
    aboutText2.textContent = about[attr].text2;
    aboutText3.textContent = about[attr].text3;
    // Skills
    skillsTitle.textContent = skills[attr].title;
    skillsSubtitle1.textContent = skills[attr].subtitle1;
    skillsLang1.textContent = skills[attr].lang1;
    skillsLang2.textContent = skills[attr].lang2;
    skillsLang3.textContent = skills[attr].lang3;
    skillsSubtitle2.textContent = skills[attr].subtitle2;
    skillsOuts1.textContent = skills[attr].outs1;
    skillsOuts2.textContent = skills[attr].outs2;
    skillsStrLink.textContent = skills[attr].str1;
  });
});

// Navbar

var nav = {
  spanish: {
    home: "Inicio",
    experience: "Experiencia",
    about: "Sobre mi",
    skills: "Habilidades",
    work: "Mi trabajo",
  },
  english: {
    home: "Home",
    experience: "Experience",
    about: "About me",
    skills: "My Skills",
    work: "My Work",
  },
  portuguese: {
    home: "Começo",
    experience: "Experiência",
    about: "Sobre mim",
    skills: "Habilidades",
    work: "Meu trabalho",
  },
};

// intro

var intro = {
  spanish: {
    title: "Hola, soy",
    subtitle: "Desarrollador Front-End",
  },
  english: {
    title: "Hi, I'm",
    subtitle: "Front-End Developer",
  },
  portuguese: {
    title: "Oi, eu sou",
    subtitle: "Desenvolvedor Front-End",
  },
};

//Experience

var experience = {
  spanish: {
    title: "Experiencia Laboral",
    subtitle1: "Diseño Web (desde 03/2020)",
    text1:
      "Diseños Front-End responsive utilizando las herramientas de desarrollo de HTML, CSS (Bootstrap, Sass), Javascript y React. Poca experiencia en el área de Back-End, actualmente realizando curso universitario de post-grado en Python.",
    subtitle2: "Licenciado en Kinesiología y Fisiatría (desde 11/2011)",
    text2:
      "No tiene mucho que ver con el mundo IT pero conforma gran parte de mi experiencia laboral y considero que puede ser un aporte atípico sin embargo enriquecedor al equipo de trabajo.",
    expbtn: "Mi trabajo",
  },
  english: {
    title: "Work Experience",
    subtitle1: "Web Design (since 03/2020)",
    text1:
      "Responsive Front-End designs using HTML, CSS (Bootstrap, Sass), Javascript and React development tools. Little experience in the Back-End area, currently taking a postgraduate university course in Python.",
    subtitle2: "Degree in Physical Therapy (since 11/2011)",
    text2:
      "It doesn't have much to do with the IT world but it forms a large part of my work experience and I consider that it can be an atypical contribution, however enriching to the work team.",
    expbtn: "My Work",
  },
  portuguese: {
    title: "Experiência de Trabalho",
    subtitle1: "Desenho Web (desde 03/2020)",
    text1:
      "Projetos de Front-End responsivos utilizando ferramentas de desenvolvimento HTML, CSS (Bootstrap, Sass), Javascript e React. Pouca experiência na área de Back-End, atualmente cursando pós-graduação em Python.",
    subtitle2: "Licenciado em Fisioterapia (desde 11/2011)",
    text2:
      "Não tem muito a ver com o mundo da TI mas constitui uma grande parte da minha experiência de trabalho e considero que pode ser uma contribuição atípica, mas enriquecedora para a equipe de trabalho.",
    expbtn: "Meu trabalho",
  },
};

// About

var about = {
  spanish: {
    title: "Sobre mi",
    subtitle: "Desarrollador y Kinesiólogo",
    text1:
      "Tengo 33 años y soy de Entre Rios, Argentina. Siempre me consideré una persona con curiosidad y motivación por aprender cosas nuevas. Si bien siempre sentí un gran interés por el mundo de la tecnología, nunca había considerado un cambio de profesión, ya que me dediqué aproximadamente 10 años a ejercer como kinesiólogo, sin embargo, llegó el año 2020. Fue un año de cambios para muchos, en mi caso perdí parte de mi trabajo, por lo cual mi tiempo libre aumentó y decidí ocupar ese tiempo estudiando algo que me guste (Programación!).",
    text2:
      "Gracias a Dios, al apoyo de mi novia, família y de amigos que se dedican a programar (con clases privadas icluidas) y a numerosos cursos y tutoriales online (y a los programadores que los producen), lo que comenzó como un hobby se transformó en un cambio de vida radical. Actualmente me encuentro estudiando un curso universitario de postgrado de Python, realizando proyectos por mi cuenta y en busqueda de nuevos desafios.",
    text3:
      '"Si en verdad te aprecias, estudia. Bien haras en practicar lo aprendido." (Proverbios 19:8)',
  },
  english: {
    title: "About me",
    subtitle: "Developer and Physical Therapist",
    text1:
      "I'm 33 years old and i'm from Entre Rios, Argentina. I always considered myself a person with curiosity and motivation to learn new things. Although I always felt a great interest in the tech world, I had never considered a carrer change, since I dedicated approximately 10 years to practice as a physical therapist, however, the year 2020 arrived. It was a year of changes for many, in my case I lost part of my job, so my free time increased and I decided to occupy that time studying something that I like (Programming!).",
    text2:
      "Thanks God, the support of my girlfriend, family and friends who dedicate themselves to programming (with private classes included) and to numerous online courses and tutorials (and the programmers who produce them), what began as a hobby became a radical life change. I am currently studying a Python postgraduate university course, doing projects on my own and looking for new challenges.",
    text3:
      '"If you really appreciate yourself, study. You will do well to practice what you have learned" (Proverbs 19:8).',
  },
  portuguese: {
    title: "Sobre mim",
    subtitle: "Desenvolvedor e Fisioterapeuta",
    text1:
      "Tenho 33 anos e sou de Entre Rios, Argentina. Sempre me considerei uma pessoa com curiosidade e motivação para aprender coisas novas. Embora sempre tenha sentido um grande interesse pelo mundo da tecnologia, nunca havia pensado em uma mudança de profissão, já que dediquei aproximadamente 10 anos à prática como fisioterapeuta, porém, o ano de 2020 chegou. Foi um ano de mudanças para muitos, no meu caso perdi parte do meu emprego, então o meu tempo livre aumentou e resolvi ocupar esse tempo estudando algo que gosto (Programação!).",
    text2:
      "Graças a Deus, o apoio da minha namorada, família e amigos que se dedicam à programação (com aulas particulares incluídas) e aos inúmeros cursos e tutoriais online (e dos programadores que os produzem), o que começou como um hobby tornou-se uma mudança radical de vida. Atualmente, estou estudando um curso de pós-graduação em Python, fazendo projetos por conta própria e em busca de novos desafios.",
    text3:
      ' "Se você realmente se aprecia, estude. Você fará bem em praticar o que aprendeu" (Provérbios 19:8).',
  },
};

// Skills

var skills = {
  spanish: {
    title: "Mis Habilidades",
    subtitle1: "Idiomas",
    lang1: "Español - Idioma Nativo",
    lang2: "Inglés - Nivel Intermedio-Avanzado",
    lang3: "Portugues - Nivel Intermedio-Avanzado",
    subtitle2: "Destacados",
    outs1:
      '"Conviertete en Desarrollador Web Full-Stack". Itinerario de Aprendizaje. - Linkedin Learning',
    outs2:
      '"Programación en Python" (Actualmente cursando). - Universidad Nacional de San Martin (UNSAM)',
  },
  english: {
    title: "My Skills",
    subtitle1: "Languages",
    lang1: "Spanish - Native Language",
    lang2: "English - Advanced-Intermediate Level",
    lang3: "Portuguese - Advanced-Intermediate Level",
    subtitle2: "Outstandings",
    outs1:
      '"Become a Full-Stack Web Developer". Learning Track. - Linkedin Learning',
    str1: "Linkedin Learning",
    outs2:
      '"Python Programming" (In course). - Universidad Nacional de San Martin (UNSAM)',
  },
  portuguese: {
    title: "Minhas Habilidades",
    subtitle1: "Línguas",
    lang1: "Espanhol - Língua Nativa",
    lang2: "Inglês - Nível Intermediário-Avançado",
    lang3: "Português - Nível Intermediário-Avançado",
    subtitle2: "Destacados",
    outs1:
      '"Conviertete en Desarrollador Web Full-Stack". Itinerario de Aprendizaje. - Linkedin Learning',
    outs2:
      '"Programación en Python" (Actualmente cursando). - Universidad Nacional de San Martin (UNSAM)',
  },
};
