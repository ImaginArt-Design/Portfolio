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
        heroSubtitle: "by <span class='signature-font'>Laabidi Abdelghani</span>",
        heroDescStart: "Transforming ideas into ",
        heroWords: ["Concepts", "Visuals", "Clean Designs", "Tangible Products."],
        heroBtn: "Explore Work",
        aboutTitle: "About Me",
        aboutText: "Hello! I am Laabidi Abdelghani, the creative mind behind ImaginArt. With over 8 years of experience, I am a passionate graphic designer who bridges the gap between digital imagination and physical reality. Having deep-dived into the world of printing and manufacturing, I now oversee projects from the first conceptual drawing all the way to the final tangible product. I personally handle manual printing and crafting on a daily basis, an immersive hands-on process that has profoundly sharpened my design sensibilities and creative vision.",
        coreDisciplines: "Core Disciplines",
        skill1: "Graphic & Logo Design",
        skill2: "Brand Guidelines (Charte Graphique)",
        skill3: "Signage Creation (Panneaux)",
        skill4: "3D Lettering & Neon",
        skill5: "Laser & CNC File Prep.",
        storyTitle: "Creative Vision",
        storyText: "<strong>ImaginArt</strong> represents a seamless fusion of boundless creativity and technical mastery. Our journey began with a simple belief: every brand possesses a unique story that deserves to be told through striking visuals. Today, ImaginArt stands as a testament to creating designs that not only capture attention but leave a lasting impression.",
        skillsTitle: "Software Expertise",
        aiMention: "Accelerated & enhanced by the power of Artificial Intelligence tools.",
        projectsTitle: "Selected Projects",
        projectsEmpty: "No projects added yet.",
        contactTitle: "Let's Collaborate",
        contactNamePlaceholder: "Name",
        contactEmailPlaceholder: "Email Address",
        contactMessagePlaceholder: "Project Details",
        contactBtn: "Send via WhatsApp",
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
        heroSubtitle: "par <span class='signature-font'>Laabidi Abdelghani</span>",
        heroDescStart: "Transformer les idées en ",
        heroWords: ["Concepts", "Beaux Visuels", "Designs Épurés", "Produits Finis."],
        heroBtn: "Voir le Travail",
        aboutTitle: "À Propos de Moi",
        aboutText: "Bonjour ! Je suis Laabidi Abdelghani, l'esprit créatif derrière ImaginArt. Avec plus de 8 ans d'expérience, je suis un graphiste passionné qui fait le pont entre l'imagination numérique et la réalité physique. Ayant découvert le domaine de l'impression, je gère désormais l'intégralité de mes projets : de la conception design initiale jusqu'à la finalisation produit. Je réalise quotidiennement des travaux d'impression et de création à la main, une approche artisanale qui m'a permis d'améliorer et d'aiguiser encore plus mon sens et mon niveau de design.",
        coreDisciplines: "Disciplines Principales",
        skill1: "Design Graphique & Création de Logos",
        skill2: "Charte Graphique",
        skill3: "Création de Panneaux Signalétiques",
        skill4: "Lettrage 3D & Néon",
        skill5: "Fichiers pour Machines Laser & CNC",
        storyTitle: "Vision Créative",
        storyText: "<strong>ImaginArt</strong> représente une fusion parfaite de créativité sans limites et de maîtrise technique. Notre aventure a commencé avec une conviction simple : chaque marque possède une histoire unique qui mérite d'être racontée à travers des visuels percutants. Aujourd'hui, ImaginArt s'efforce de créer des designs qui captivent l'attention et laissent une impression durable.",
        skillsTitle: "Logiciels Maîtrisés",
        aiMention: "Accéléré & amélioré par la puissance des outils d'Intelligence Artificielle.",
        projectsTitle: "Projets Sélectionnés",
        projectsEmpty: "Aucun projet ajouté pour le moment.",
        contactTitle: "Collaborons Ensemble",
        contactNamePlaceholder: "Nom",
        contactEmailPlaceholder: "Adresse E-mail",
        contactMessagePlaceholder: "Détails du Projet",
        contactBtn: "Envoyer via WhatsApp",
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
        heroSubtitle: "بواسطة <span class='signature-font'>لعبيدي عبد الغني</span>",
        heroDescStart: "تحويل الأفكار إلى ",
        heroWords: ["أفكار مبتكرة", "تصاميم جذابة", "إبداع رقمي", "أعمال ملموسة."],
        heroBtn: "استكشف أعمالي",
        aboutTitle: "نبذة عني",
        aboutText: "مرحباً! أنا لعبيدي عبد الغني، العقل الإبداعي وراء ImaginArt. مع أكثر من 8 سنوات من الخبرة، أنا مصمم جرافيك شغوف أسعى لسد الفجوة بين الخيال الرقمي والواقع الملموس. من خلال اكتشافي لمجال الطباعة والتنفيذ، أصبحت أتابع المشاريع من مرحلة التصميم الأولي وحتى الإنتاج النهائي. أقوم يومياً بتنفيذ الأعمال والطباعة بيدي، وهي تجربة عملية وحرفية ساهمت في صقل حسّي التصميمي ورؤيتي الإبداعية بشكل مستمر ورفع كفاءتي في الإخراج النهائي.",
        coreDisciplines: "التخصصات الأساسية",
        skill1: "التصميم الجرافيكي وتصميم الشعارات",
        skill2: "الهوية البصرية (Charte Graphique)",
        skill3: "تصميم اللوحات الإرشادية والإعلانية",
        skill4: "تصميم الحروف ثلاثية الأبعاد والنيون",
        skill5: "تجهيز ملفات ماكينات الليزر و CNC",
        storyTitle: "رؤية إبداعية",
        storyText: "تمثل <strong>ImaginArt</strong> مزيجًا سلسًا من الإبداع اللامحدود والإتقان التقني. بدأت رحلتنا بإيمان بسيط: كل علامة تجارية تمتلك قصة فريدة تستحق أن تُروى من خلال صور مذهلة. اليوم، تقف ImaginArt كدليل على خلق تصميمات لا تجذب الانتباه فحسب، بل تترك انطباعًا يدوم طويلاً.",
        skillsTitle: "خبرات البرامج",
        aiMention: "مدعوم ومُعزّز بقوة أدوات الذكاء الاصطناعي.",
        projectsTitle: "مشاريع مختارة",
        projectsEmpty: "لم يتم إضافة أي مشاريع حتى الآن.",
        contactTitle: "دعنا نتعاون",
        contactNamePlaceholder: "الاسم",
        contactEmailPlaceholder: "البريد الإلكتروني",
        contactMessagePlaceholder: "تفاصيل المشروع",
        contactBtn: "إرسال عبر واتساب",
        footerText: "© 2026 ImaginArt بواسطة لعبيدي عبد الغني. صُمم بإتقان."
    }
};

// 2. Data Arrays
const softwares = [
    { name: "Photoshop", icon: "Ps" },
    { name: "Illustrator", icon: "Ai" },
    { name: "InDesign", icon: "Id" },
    { name: "Affinity Designer", icon: "Af" },
    { name: "Inkscape", icon: "In" },
    { name: "Canva", icon: "Ca" },
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

    let currentLang = 'en';

    // Language change logic
    function setLanguage(lang) {
        currentLang = lang;
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



    // Form Handling mockup -> WhatsApp redirect
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;

            // REMPLACER PAR VOTRE NUMERO DE TELEPHONE (ex: 212600000000 avec l'indicatif mais sans le +)
            const phoneNumber = '212663280311';

            const whatsappMessage = `${name}:\n${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

            // Ouvrir WhatsApp dans un nouvel onglet
            window.open(whatsappUrl, '_blank');

            const btn = form.querySelector('.submit-btn');
            const originalText = btn.innerText;
            btn.innerText = '✓';
            btn.style.backgroundColor = 'var(--beige)';
            btn.style.color = 'var(--dark)';

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
                form.reset();
            }, 3000);
        });
    }

    // ScrollSpy & Back to Top logic
    const sections = document.querySelectorAll('main section');
    const navItems = document.querySelectorAll('.nav-links a');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        // Si on est tout en bas de la page, on force l'activation de la dernière section (Contact)
        if ((window.innerHeight + Math.round(scrollY)) >= document.body.offsetHeight - 20) {
            current = sections[sections.length - 1].getAttribute('id');
        }

        navItems.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === `#${current}`) {
                a.classList.add('active');
            }
        });

        // Back to top visibility
        if (scrollY > 500) {
            if (backToTop) backToTop.classList.add('visible');
        } else {
            if (backToTop) backToTop.classList.remove('visible');
        }
    });
    
    if(backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            // Custom smooth scroll for a premium feel (ease-in-out)
            const targetPosition = 0;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000; // 1000ms = 1 second for a slower, smoother scroll
            let start = null;

            window.requestAnimationFrame(step);

            function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                
                // Ease in out cubic function
                const easeInOutCubic = progress => {
                    progress /= duration / 2;
                    if (progress < 1) return distance / 2 * Math.pow(progress, 3) + startPosition;
                    progress -= 2;
                    return distance / 2 * (Math.pow(progress, 3) + 2) + startPosition;
                };

                window.scrollTo(0, easeInOutCubic(progress));
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                } else {
                    window.scrollTo(0, targetPosition);
                }
            }
        });
    }

    // --- PREMIUM UX FEATURES ---
    
    // Typewriter effect
    const typewriterEl = document.getElementById('typewriter');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeTimeout;

    function typeEffect() {
        const words = translations[currentLang].heroWords || [];
        if(!words.length || !typewriterEl) return;
        const currentWord = words[wordIndex % words.length];

        if (isDeleting) {
            typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 30 : 80;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex++;
            typeSpeed = 500;
        }

        clearTimeout(typeTimeout);
        typeTimeout = setTimeout(typeEffect, typeSpeed);
    }
    typeEffect();

    // Glass Card Glow Effect
    document.addEventListener('mousemove', e => {
        const cards = document.querySelectorAll('.glass-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Init language to English by default
    setLanguage('en');
});
