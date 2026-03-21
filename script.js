// 1. Translations dictionary
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navStory: "Story",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        heroTitle: "ImaginArt",
        heroSubtitle: "by Laabidi Abdelghani",
        heroDesc: "Transforming ideas into visually stunning realities.",
        heroBtn: "Explore Work",
        aboutTitle: "About Me",
        aboutText: "Hello! I am Laabidi Abdelghani, the creative mind behind ImaginArt. With over 8 years of experience, I am a passionate graphic designer who bridges the gap between digital imagination and physical reality. Having deep-dived into the world of printing and manufacturing, I now oversee projects from the first conceptual drawing all the way to the final tangible product. I personally handle manual printing and crafting on a daily basis, an immersive hands-on process that has profoundly sharpened my design sensibilities and creative vision.",
        coreDisciplines: "Core Disciplines",
        skill1: "Graphic & Logo Design",
        skill2: "Brand Guidelines (Charte Graphique)",
        skill3: "Signage Creation (Panneaux)",
        skill4: "3D Lettering & Neon",
        skill5: "Laser & CNC File Prep.",
        storyTitle: "Brand Story",
        storyText: "<strong>ImaginArt</strong> represents a seamless fusion of boundless creativity and technical mastery. Our journey began with a simple belief: every brand possesses a unique story that deserves to be told through striking visuals. Today, ImaginArt stands as a testament to creating designs that not only capture attention but leave a lasting impression.",
        skillsTitle: "Software Expertise",
        aiMention: "Accelerated & enhanced by the power of Artificial Intelligence tools.",
        projectsTitle: "Selected Projects",
        projectsEmpty: "No projects added yet. Edit script.js to add your work!",
        contactTitle: "Let's Collaborate",
        contactNamePlaceholder: "Name",
        contactEmailPlaceholder: "Email Address",
        contactMessagePlaceholder: "Project Details",
        contactBtn: "Send Message",
        footerText: "© 2026 ImaginArt by Laabidi Abdelghani. Designed with perfection."
    },
    fr: {
        navHome: "Accueil",
        navAbout: "À Propos",
        navStory: "Histoire",
        navSkills: "Compétences",
        navProjects: "Projets",
        navContact: "Contact",
        heroTitle: "ImaginArt",
        heroSubtitle: "par Laabidi Abdelghani",
        heroDesc: "Transformer les idées en réalités visuellement époustouflantes.",
        heroBtn: "Voir le Travail",
        aboutTitle: "À Propos de Moi",
        aboutText: "Bonjour ! Je suis Laabidi Abdelghani, l'esprit créatif derrière ImaginArt. Avec plus de 8 ans d'expérience, je suis un graphiste passionné qui fait le pont entre l'imagination numérique et la réalité physique. Ayant découvert le domaine de l'impression, je gère désormais l'intégralité de mes projets : de la conception design initiale jusqu'à la finalisation produit. Je réalise quotidiennement des travaux d'impression et de création à la main, une approche artisanale qui m'a permis d'améliorer et d'aiguiser encore plus mon sens et mon niveau de design.",
        coreDisciplines: "Disciplines Principales",
        skill1: "Design Graphique & Création de Logos",
        skill2: "Charte Graphique",
        skill3: "Création de Panneaux Signalétiques",
        skill4: "Lettrage 3D & Néon",
        skill5: "Fichiers pour Machines Laser & CNC",
        storyTitle: "Histoire de la Marque",
        storyText: "<strong>ImaginArt</strong> représente une fusion parfaite de créativité sans limites et de maîtrise technique. Notre aventure a commencé avec une conviction simple : chaque marque possède une histoire unique qui mérite d'être racontée à travers des visuels percutants.",
        skillsTitle: "Logiciels Maîtrisés",
        aiMention: "Accéléré & amélioré par la puissance des outils d'Intelligence Artificielle.",
        projectsTitle: "Projets Sélectionnés",
        projectsEmpty: "Aucun projet ajouté pour le moment. Modifiez script.js pour ajouter votre travail !",
        contactTitle: "Collaborons Ensemble",
        contactNamePlaceholder: "Nom",
        contactEmailPlaceholder: "Adresse E-mail",
        contactMessagePlaceholder: "Détails du Projet",
        contactBtn: "Envoyer le Message",
        footerText: "© 2026 ImaginArt par Laabidi Abdelghani. Conçu avec perfection."
    },
    ar: {
        navHome: "الرئيسية",
        navAbout: "نبذة عني",
        navStory: "القصة",
        navSkills: "المهارات",
        navProjects: "المشاريع",
        navContact: "اتصل بي",
        heroTitle: "ImaginArt",
        heroSubtitle: "بواسطة العبيدي عبدالغني",
        heroDesc: "تحويل الأفكار إلى حقائق بصرية مذهلة.",
        heroBtn: "استكشف أعمالي",
        aboutTitle: "نبذة عني",
        aboutText: "مرحباً! أنا العبيدي عبدالغني، العقل الإبداعي وراء ImaginArt. مع أكثر من 8 سنوات من الخبرة، أنا مصمم جرافيك شغوف أسعى لسد الفجوة بين الخيال الرقمي والواقع الملموس. من خلال اكتشافي لمجال الطباعة والتنفيذ، أصبحت أتابع المشاريع من مرحلة التصميم الأولي وحتى الإنتاج النهائي. أقوم يومياً بتنفيذ الأعمال والطباعة بيدي، وهي تجربة عملية وحرفية ساهمت في صقل حسّي التصميمي ورؤيتي الإبداعية بشكل مستمر ورفع كفاءتي في الإخراج النهائي.",
        coreDisciplines: "التخصصات الأساسية",
        skill1: "التصميم الجرافيكي وتصميم الشعارات",
        skill2: "الهوية البصرية (Charte Graphique)",
        skill3: "تصميم اللوحات الإرشادية والإعلانية",
        skill4: "تصميم الحروف ثلاثية الأبعاد والنيون",
        skill5: "تجهيز ملفات ماكينات الليزر و CNC",
        storyTitle: "قصة العلامة التجارية",
        storyText: "تمثل <strong>ImaginArt</strong> مزيجًا سلسًا من الإبداع اللامحدود والإتقان التقني. بدأت رحلتنا بإيمان بسيط: كل علامة تجارية تمتلك قصة فريدة تستحق أن تُروى من خلال صور مذهلة.",
        skillsTitle: "خبرات البرامج",
        aiMention: "مدعوم ومُعزّز بقوة أدوات الذكاء الاصطناعي.",
        projectsTitle: "مشاريع مختارة",
        projectsEmpty: "لم يتم إضافة أي مشاريع حتى الآن. قم بتعديل script.js لإضافة أعمالك!",
        contactTitle: "دعنا نتعاون",
        contactNamePlaceholder: "الاسم",
        contactEmailPlaceholder: "البريد الإلكتروني",
        contactMessagePlaceholder: "تفاصيل المشروع",
        contactBtn: "إرسال رسالة",
        footerText: "© 2026 ImaginArt بواسطة العبيدي عبدالغني. صُمم بإتقان."
    }
};

// 2. Data Arrays
const softwares = [
    { name: "Photoshop", icon: "Ps" },
    { name: "Illustrator", icon: "Ai" },
    { name: "InDesign", icon: "Id" },
    { name: "Kelk", icon: "Kl" }
];

// ADD YOUR CUSTOM PROJECTS HERE
// Provide the path to your image (e.g., 'images/my-design.png')
const projects = [
    // EXAMPLE HOW TO ADD WORK:
    // { title: "Poster Design", category: "Print Identity", image: "images/poster.jpg" },
    // { title: "Logo Concept", category: "Branding", image: "images/logo.png" }
];

// 3. Document Ready Handle
document.addEventListener('DOMContentLoaded', () => {
    
    // Selectors
    const htmlLang = document.documentElement;
    const langButtons = document.querySelectorAll('.lang-switcher button');
    const skillsGrid = document.getElementById('skills-grid');
    const projectsGrid = document.getElementById('projects-grid');
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Language change logic
    function setLanguage(lang) {
        htmlLang.setAttribute('lang', lang);
        htmlLang.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        // Update texts
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Update active button
        langButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.lang-switcher button[data-lang="${lang}"]`).classList.add('active');
        
        // Translate dynamic "Empty projects" text if needed
        const emptyTextEl = document.querySelector('.empty-projects');
        if (emptyTextEl) {
            emptyTextEl.innerText = translations[lang].projectsEmpty;
        }
    }

    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    // Populate Skills Grid
    softwares.forEach(skill => {
        const item = document.createElement('div');
        item.className = 'skill-item glass-card';
        item.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
        `;
        skillsGrid.appendChild(item);
    });

    // Populate Projects Grid or Show Empty Message
    if (projects.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.className = 'empty-projects';
        emptyMsg.innerText = translations['en'].projectsEmpty;
        projectsGrid.appendChild(emptyMsg);
    } else {
        projects.forEach(project => {
            const item = document.createElement('div');
            item.className = 'project-card';
            item.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-category">${project.category}</span>
                </div>
            `;
            projectsGrid.appendChild(item);
        });
    }

    // Navbar Scroll & Mobile Menu
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Scroll Anim (Intersection Observer)
    const revealElements = document.querySelectorAll('.glass-card, .section-title');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        revealObserver.observe(el);
    });

    const progressBars = document.querySelectorAll('.progress');
    const progressObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => progressObserver.observe(bar));

    // Form Handling mockup
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.submit-btn');
            const originalText = btn.innerText;
            btn.innerText = '✓';
            btn.style.backgroundColor = 'var(--beige)';
            btn.style.color = 'var(--dark)';
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = 'var(--brown)';
                form.reset();
            }, 3000);
        });
    }
    
    // Init language to English by default
    setLanguage('en');
});
