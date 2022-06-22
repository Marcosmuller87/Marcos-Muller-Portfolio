// Constantes de idiomas

const contLang = document.querySelector(".lang-container");
const linkLang = document.querySelectorAll(".lang-link");

// Elementos a modificar:

// Navbar
const navHome = document.querySelector(".nav-home");
const navExp = document.querySelector(".nav-exp");
const navAbout = document.querySelector(".nav-about");
const navSkills = document.querySelector(".nav-skills");
const navWork = document.querySelector(".nav-work");
const navContact = document.querySelector(".nav-contact");

// Intro
const introBtn = document.querySelector(".pdf");
const introTitle = document.querySelector(".section-text-intro");
const introSubtitle = document.querySelector(".section-subtitle-intro");

// Experiencia
const expTitle = document.querySelector(".section-title-experience");
const expSubtitle1 = document.querySelector(".experience-sub1");
const expSubtitle2 = document.querySelector(".experience-sub2");
const expText1 = document.querySelector(".experience-text1");
const expText2 = document.querySelector(".experience-text2");
const expBtn = document.querySelector(".experience-btn");

// Sobre Mi
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
const skillsOuts2 = document.querySelector(".outs-2");
const skillsOuts3 = document.querySelector(".outs-3");
const skillsHtml = document.querySelector(".html");
const skillsCss1 = document.querySelector(".css-1");
const skillsCss2 = document.querySelector(".css-2");
const skillsJs1 = document.querySelector(".js-1");
const skillsJs2 = document.querySelector(".js-2");
const skillsJs3 = document.querySelector(".js-3");
const skillsReact1 = document.querySelector(".react-1");
const skillsReact2 = document.querySelector(".react-2");
const skillsReact3 = document.querySelector(".react-3");
const skillsReact4 = document.querySelector(".react-4");
const skillsReact5 = document.querySelector(".react-5");

// Mi trabajo
const workTitle = document.querySelector(".section-title-work");
const workSubtitle = document.querySelector(".section-subtitle-work");
const workCardTitle1 = document.querySelector(".rental-title");
const workCardBody1 = document.querySelector(".rental-body");
const workCardBody2 = document.querySelector(".countries-body");
const workCardTitle3 = document.querySelector(".portfolio-title");
const workCardBody3 = document.querySelector(".portfolio-body");
const workCardTitle4 = document.querySelector(".marflix-title");
const workCardBody4 = document.querySelector(".marflix-body");

//Contacto
const contactTitle = document.querySelector(".section-title-form");
const contactLabel1 = document.querySelector(".label1");
const contactLabel2 = document.querySelector(".label2");
const contactBtn = document.querySelector(".btn-form");

// Funcion para renderizar el idioma por medio de classList remove y add

linkLang.forEach((lang) => {
  lang.addEventListener("click", () => {
    contLang.querySelector(".active").classList.remove("active");
    lang.classList.add("active");

    const attr = lang.getAttribute("language");

    // Modificacion del DOM utilizando los values de las variables en formato JSON

    // Navbar
    navHome.textContent = nav[attr].home;
    navExp.textContent = nav[attr].experience;
    navAbout.textContent = nav[attr].about;
    navSkills.textContent = nav[attr].skills;
    navWork.textContent = nav[attr].work;
    navContact.textContent = nav[attr].contact;

    // Intro
    introBtn.textContent = intro[attr].btn;
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
    skillsOuts3.textContent = skills[attr].outs3;
    skillsHtml.textContent = skills[attr].html;
    skillsCss1.textContent = skills[attr].css1;
    skillsCss2.textContent = skills[attr].css2;
    skillsJs1.textContent = skills[attr].js1;
    skillsJs2.textContent = skills[attr].js2;
    skillsJs3.textContent = skills[attr].js3;
    skillsReact1.textContent = skills[attr].react1;
    skillsReact2.textContent = skills[attr].react2;
    skillsReact3.textContent = skills[attr].react3;
    skillsReact4.textContent = skills[attr].react4;
    skillsReact5.textContent = skills[attr].react5;

    // Work
    workTitle.textContent = work[attr].title;
    workSubtitle.textContent = work[attr].subtitle;
    workCardTitle1.textContent = work[attr].cardtitle1;
    workCardBody1.textContent = work[attr].cardbody1;
    workCardBody2.textContent = work[attr].cardbody2;
    workCardTitle3.textContent = work[attr].cardtitle3;
    workCardBody3.textContent = work[attr].cardbody3;
    workCardTitle4.textContent = work[attr].cardtitle4;
    workCardBody4.textContent = work[attr].cardbody4;

    // Contact
    contactTitle.textContent = contact[attr].title;
    contactLabel1.textContent = contact[attr].label1;
    contactBtn.textContent = contact[attr].button;
  });
});

// Variables en Formato Json:

// Navbar
var nav = {
  spanish: {
    home: "Inicio",
    experience: "Experiencia",
    about: "Sobre mi",
    skills: "Habilidades",
    work: "Mi trabajo",
    contact: "Contacto",
  },
  english: {
    home: "Home",
    experience: "Experience",
    about: "About me",
    skills: "My Skills",
    work: "My Work",
    contact: "Contact",
  },
  portuguese: {
    home: "Começo",
    experience: "Experiência",
    about: "Sobre mim",
    skills: "Habilidades",
    work: "Meu trabalho",
    contact: "Contato",
  },
};

// Intro
var intro = {
  spanish: {
    btn: "Descargar CV",
    title: "Hola, soy",
    subtitle: "Desarrollador Front-End",
  },
  english: {
    btn: "Download CV",
    title: "Hi, I'm",
    subtitle: "Front-End Developer",
  },
  portuguese: {
    btn: "Baixar CV",
    title: "Oi, eu sou",
    subtitle: "Desenvolvedor Front-End",
  },
};

//Experiencia
var experience = {
  spanish: {
    title: "Experiencia Laboral",
    subtitle1: "Diseño Web (desde 03/2020)",
    text1:
      "Diseños Front-End responsive utilizando las herramientas de desarrollo de HTML, CSS (Bootstrap, Sass), JavaScript y React. Actualmente cursando la carrera de Ingenieria de Software en la Universidade Cruzeiro do Sul y Full Stack Open 2021 (React y Node) patrocinado por la Universidad de Helsinki.",
    subtitle2: "Licenciado en Kinesiología y Fisiatría (desde 11/2011)",
    text2:
      "No tiene mucho que ver con el mundo IT pero conforma gran parte de mi experiencia laboral y considero que puede ser un aporte atípico sin embargo enriquecedor al equipo de trabajo.",
    expbtn: "Mi trabajo",
  },
  english: {
    title: "Work Experience",
    subtitle1: "Web Design (since 03/2020)",
    text1:
      "Responsive Front-End designs using HTML, CSS (Bootstrap, Sass), JavaScript and React. Currently studying Software Engineering at the Cruzeiro do Sul University and Full Stack Open 2021 (React and Node) sponsored by the University of Helsinki.",
    subtitle2: "Degree in Physical Therapy (since 11/2011)",
    text2:
      "It doesn't have much to do with the IT world but it forms a large part of my work experience and I consider that it can be an atypical contribution, however enriching to the work team.",
    expbtn: "My Work",
  },
  portuguese: {
    title: "Experiência de Trabalho",
    subtitle1: "Desenho Web (desde 03/2020)",
    text1:
      "Projetos de Front-End responsivos utilizando ferramentas de desenvolvimento HTML, CSS (Bootstrap, Sass), JavaScript e React. Atualmente estudando Engenharia de Software na Universidade Cruzeiro do Sul e Full Stack Open 2021 (React e Node) patrocinado pela Universidade de Helsinki.",
    subtitle2: "Licenciado em Fisioterapia (desde 11/2011)",
    text2:
      "Não tem muito a ver com o mundo da TI mas constitui uma grande parte da minha experiência de trabalho e considero que pode ser uma contribuição atípica, mas enriquecedora para a equipe de trabalho.",
    expbtn: "Meu trabalho",
  },
};

// Sobre mi
var about = {
  spanish: {
    title: "Sobre mi",
    subtitle: "Desarrollador y Kinesiólogo",
    text1:
      "Soy del interior de la provincia de Entre Rios, Argentina, actualmente viviendo en Guarapari (ES, Brasil). Siempre me consideré una persona con curiosidad y motivación por aprender cosas nuevas. Si bien siempre sentí un gran interés por el mundo de la tecnología, nunca había considerado un cambio de profesión, ya que me dediqué aproximadamente 10 años a ejercer como kinesiólogo, sin embargo, llegó el año 2020. Fue un año de cambios para muchos, en mi caso debido a la pandemia mi tiempo libre aumentó y decidí ocupar ese tiempo estudiando algo que me guste (Programación!).",
    text2:
      "Gracias a Dios y al apoyo de mi novia, familia, amigos desarrolladores que siempre guiaron mis estudios, varios cursos online, tutoriales (y los desarrolladores que los producen) lo que empezó como un hobby se transformó en un cambio radical de vida. Actualmente estoy estudiando Ingeniería de Software en la Universidad Cruzeiro do Sul y Full-Stack Open 2021 patrocinado por la Universidad de Helsinki, liderando proyectos front-end y buscando nuevos desafíos.",
    text3:
      '"Si en verdad te aprecias, estudia. Bien haras en practicar lo aprendido." (Proverbios 19:8)',
  },
  english: {
    title: "About me",
    subtitle: "Developer and Physical Therapist",
    text1:
      "I am from the interior of the province of Entre Rios, Argentina, currently living in Guarapari (ES, Brazil). I always considered myself a curious person motivated for learn new things. Although I always had a great interest in the world of technology, I had never considered a career change, since that I dedicated approximately 10 years to practice as a physical therapist, however, the year 2020 arrived. It was a year of changes for many, in my case due to the pandemic my free time increased and i decided to occupy that time studying something that I like (Programming!).",
    text2:
      "Thanks to God and the support of my girlfriend, family, developer friends who always guided my studies, several online courses, tutorials (and the developers who produce them) what started as a hobby was transformed into a radical change of life. I am currently studying Software Engineering at Cruzeiro do Sul University and Full-Stack Open 2021 sponsored by the University of Helsinki, leading front-end projects and looking for new challenges.",
    text3:
      '"If you really appreciate yourself, study. You will do well to practice what you have learned" (Proverbs 19:8).',
  },
  portuguese: {
    title: "Sobre mim",
    subtitle: "Desenvolvedor e Fisioterapeuta",
    text1:
      "Sou natural do interior da província de Entre Rios, Argentina, e atualmente moro em Guarapari (ES - Brasil). Sempre me considerei uma pessoa com curiosidade e motivação para aprender coisas novas. Embora sempre tenha sentido um grande interesse pelo mundo da tecnologia, nunca havia pensado em mudar de profissão, já que dediquei aproximadamente 10 anos à prática como fisioterapeuta, porém, chegou o ano de 2020. Foi um ano de mudanças para muitos, no meu caso devido à pandemia o meu tempo livre aumentou e resolvi ocupar esse tempo estudando algo que gosto (Programação!).",
    text2:
      "Graças a Deus e ao apoio da minha namorada, família, amigos desenvolvedores que sempre guiaram os meus estudos, vários cursos online, tutoriais (e aos desenvolvedores que os produzem) o que começou como um passatempo foi transformado em uma mudança radical de vida. Atualmente estou cursando Engenharia de Software na Universidade Cruzeiro do Sul e Full-Stack Open 2021 patrocinado pela Universidade de Helsinque, conduzindo Projetos de front-end e em busca de novos desafios.",
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
      '"Carrera de Grado de Ingenieria en Software". (Actualmente cursando). UNICSUL(Universidade Cruzeiro do Sul, Polo Vila Velha).',
    outs2:
      '"Conviertete en Desarrollador Web Full-Stack". Itinerario de Aprendizaje. - Linkedin Learning',
    outs3:
      '"Full Stack Open 2021" (Actualmente cursando). - Universidad de Helsinki',
    html: '"Desarrollo web. HTML desde cero. Edición 2020". (Udemy)',
    css1: '"Desarrollo Web. CSS desde cero. Edicion 2020". (Udemy)',
    css2: '"Aprende Bootstrap - Para Principiantes". (Udemy)',
    js1: '"Desarrollo Web. JavaScript desde cero. Edicion 2020". (Udemy)',
    js2: '"JavaScript Moderno para React Js - ES6". (Udemy)',
    js3: '"Aprende JavaScript y Jquery de 0 a 100". (Udemy)',
    react1:
      '"React JS- Guia completa para el Desarrollo Web Frontend [2021]". (Udemy)',
    react2:
      '"React - La Guia Completa con React Hook Redux 2021 en 4hr". (Udemy)',
    react3: '"Curso Completo de ReactJs - Basico a Avanzado (2021)". (Udemy)',
    react4:
      '"React para principiantes: Consturye un juego mientras aprendes React". (Udemy)',
    react5: '"Aprende React + Firebase | 2021". (Udemy)',
  },
  english: {
    title: "My Skills",
    subtitle1: "Languages",
    lang1: "Spanish - Native Language",
    lang2: "English - Advanced-Intermediate Level",
    lang3: "Portuguese - Advanced-Intermediate Level",
    subtitle2: "Outstandings",
    outs1:
      '"Degree in Software Engineering." (Currently studying). UNICSUL (Universidade Cruzeiro do Sul, Polo Vila Velha).',
    outs2:
      '"Become a Full-Stack Web Developer". Learning Track. (LinkedIn Learning)',
    outs3: '"Full Stack Open 2021" (In course). - University of Helsinki',
    html: '"Web Development. HTML from Scratch. 2020 Edition". (Udemy)',
    css1: '"Web Development. CSS from Scratch. 2020 Edition". (Udemy)',
    css2: '"Learn Bootstrap - For Beginners". (Udemy)',
    js1: '"Web Development. JavaScript from scratch. 2020 Edition". (Udemy)',
    js2: '"Modern JavaScript for React Js - ES6". (Udemy)',
    js3: '"Learn JavaScript and Jquery from 0 to 100". (Udemy)',
    react1:
      '"React JS- Complete Guide for Frontend Web Development [2021]". (Udemy)',
    react2:
      '"React - The Complete Guide with React Hook Redux 2021 in 4hr". (Udemy)',
    react3:
      '"The Complete ReactJs Course - Basics to Advanced (2021)". (Udemy)',
    react4: '"React for beginners: Build a game while learning React". (Udemy)',
    react5: '"Learn React + Firebase | 2021". (Udemy)',
  },
  portuguese: {
    title: "Minhas Habilidades",
    subtitle1: "Línguas",
    lang1: "Espanhol - Língua Nativa",
    lang2: "Inglês - Nível Intermediário-Avançado",
    lang3: "Português - Nível Intermediário-Avançado",
    subtitle2: "Destacados",
    outs1:
      '"Graduação em Engenharia de Software.” (Atualmente cursando). UNICSUL (Universidade Cruzeiro do Sul, Polo Vila Velha).',
    outs2:
      '"Torne-se um Desenvolvedor Web Full-Stack". Itinerário de Aprendizagem. (Linkedin Learning)',
    outs3:
      '"Full Stack Open 2021" (Atualmente na cursada). - Universidade de Helsinki',
    html: '"Desenvolvimento Web. HTML do zero. Edição 2020". (Udemy)',
    css1: '"Desenvolvimento Web. CSS do zero. Edição 2020". (Udemy)',
    css2: '"Aprenda Bootstrap - Para Iniciantes". (Udemy)',
    js1: '"Desenvolvimento Web. JavaScript do zero. Edição 2020". (Udemy)',
    js2: '"JavaScript Moderno para React Js - ES6". (Udemy)',
    js3: '"Aprenda JavaScript e Jquery de 0 a 100". (Udemy)',
    react1:
      '"React JS - Guia Completo para Desenvolvimento Web Frontend [2021]". (Udemy)',
    react2: '"React - Guia completo do React Hook Redux 2021 em 4 hs". (Udemy)',
    react3:
      '"Curso do ReactJs Completo - Do Básico ao Avançado (2021)". (Udemy)',
    react4:
      '"React para iniciantes: construa um jogo enquanto aprende React". (Udemy)',
    react5: '"Aprenda React + Firebase | 2021". (Udemy)',
  },
};

// Mi Trabajo
var work = {
  spanish: {
    title: "Mi trabajo",
    subtitle: "Un vistazo a mis proyectos",
    cardtitle1: "Webpage de Alquiler",
    cardbody1:
      "Desarrollada con CSS (Bootstrap) y React Js, Pagina simple de caracter informativo, sobre un departamento de alquiler.",
    cardbody2:
      "Aplicación responsive desarrollada con Bootstrap y React Js, consumiendo datos de APIs REST Countries y OpenWeather.",
    cardtitle3: "Pagina Web Personal",
    cardbody3: "Proyecto multilenguaje desarrollado con JavaScript y Css.",
    cardtitle4: "MarFlix-Peliculas",
    cardbody4:
      "Sitio Web de cine desarrollado con React y Css Modules consumiendo datos de API 'The Movie Database'.",
  },
  english: {
    title: "My Work",
    subtitle: "A glimpse at my projects",
    cardtitle1: "Rental Webpage",
    cardbody1:
      "Developed with CSS (Bootstrap) and React Js, Simple page of informative character, about a rental apartment.",
    cardbody2:
      "Responsive App developed with Bootstrap and React Js, consuming data from APIs REST Countries and OpenWeather.",
    cardtitle3: "Personal WebPage",
    cardbody3: "Multilanguage project developed with JavaScript and Css.",
    cardtitle4: "MarFlix-Movies",
    cardbody4:
      "Cinema website developed with React and Css Modules consuming data from API 'The Movie Database'.",
  },
  portuguese: {
    title: "O Meu Trabalho",
    subtitle: "Uma olhada nos meus projetos",
    cardtitle1: "Pagina Web de Alugel",
    cardbody1:
      "Desenvolvido com CSS (Bootstrap) e React Js, página simples de caráter informativo, sobre um departamento de alugel.",
    cardbody2:
      "Aplicativo responsivo desenvolvido com Bootstrap e React Js, consumindo dados de APIs REST Countries e OpenWeather.",
    cardtitle3: "Pagina Web Pessoal",
    cardbody3: "Projeto multilíngue desenvolvido em JavaScript e Css.",
    cardtitle4: "MarFlix-Filmes",
    cardbody4:
      "Site de cinema desenvolvido com React e Css Modules que consomem dados da API 'The Movie Database'.",
  },
};
// Contacto
var contact = {
  spanish: {
    title: "Contacto",
    label1: "Nombre",
    label2: "Mensaje",
    button: "Enviar",
  },
  english: {
    title: "Contact",
    label1: "Name",
    label2: "Message",
    button: "Send",
  },
  portuguese: {
    title: "Contato",
    label1: "Nome",
    label2: "Mensagem",
    button: "Enviar",
  },
};
