// 1. Translations dictionary (FR & EN)
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navStory: "Philosophy",
        navSkills: "Expertise",
        navProjects: "Work",
        navContact: "Contact",
        heroTitle: "Imagin'Art",
        heroSubtitle: "by <span class='signature-font'>Laabidi Abdelghani</span>",
        heroDescStart: "Custom design for ",
        heroWords: ["brand identities.", "print projects.", "3D signs & panels.", "your daily production."],
        heroBtn: "Explore Work",
        stat1: "years of experience",
        stat2: "Graphic Design",
        stat3: "Print & Prepress",
        stat4: "Cutting & Fabrication",
        aboutTitle: "About Me",
        aboutText: "Hello! I am Laabidi Abdelghani, graphic designer and creative with over 8 years of experience in graphic design.",
        aboutText2: "My universe doesn't stop at the screen. For several years, I have also been working in the printing industry, which allowed me to better understand what happens between an idea and its realization. I design my projects with their final outcome in mind: paper, print, cutting, signage, acrylic, PVC, or other substrates.",
        aboutText3: "I particularly like transforming an idea into something concrete and crafted. In addition to graphic design, I create objects and small pieces in acrylic or PVC, and prepare necessary files for laser or CNC cutting for projects like 3D panels, sign wrapping, display stands, or decorative elements.",
        aboutText4: "I also develop my own tools and extensions for Illustrator to automate tasks and make daily work faster and more efficient.",
        coreDisciplines: "What I Do",
        skill1: "Visual identity & logo design",
        skill2: "Graphic design for print",
        skill3: "Layout & communication materials",
        skill4: "Preparation of files for laser & CNC cutting",
        skill5: "3D panels & sign wrapping design",
        skill6: "Creation of small objects, displays & PVC / acrylic items",
        skill7: "Packaging graphic design & cutting dielines",
        skill8: "Automation & tools for Adobe Illustrator",
        storyTitle: "Studio Philosophy",
        storyText: "<strong>Imagin'Art</strong> is built on a simple rule: great design doesn't stop at a beautiful screen mockup, it must print and fabricate flawlessly in the real world. By merging graphic judgment with hands-on workshop experience, every vector, bleed, and color separation is crafted for a precise physical result — no surprises.",
        skillsTitle: "Software & Tools",
        aiMention: "Workflows boosted by custom automation scripts.",
        projectsTitle: "Projects & Work",
        projectsEmpty: "No projects yet.",
        contactTitle: "Let's Talk About Your Project",
        contactNamePlaceholder: "Your Name",
        contactMessagePlaceholder: "Describe your project or production needs...",
        contactBtn: "Send via WhatsApp",
        footerText: "© 2026 Imagin'Art — All rights reserved. Developed by Laabidi Abdelghani."
    },
    fr: {
        navHome: "Accueil",
        navAbout: "À Propos",
        navStory: "Philosophie",
        navSkills: "Expertise",
        navProjects: "Réalisations",
        navContact: "Contact",
        heroTitle: "Imagin'Art",
        heroSubtitle: "par <span class='signature-font'>Laabidi Abdelghani</span>",
        heroDescStart: "Conception sur mesure pour ",
        heroWords: ["vos identités de marque.", "vos projets d'impression.", "vos enseignes & panneaux 3D.", "votre production quotidienne."],
        heroBtn: "Découvrir mes travaux",
        stat1: "ans d'expérience",
        stat2: "Design Graphique",
        stat3: "Print & Imprimerie",
        stat4: "Découpe & Fabrication",
        aboutTitle: "À Propos de Moi",
        aboutText: "Bonjour ! Je suis Laabidi Abdelghani, graphiste et créatif avec plus de 8 ans d'expérience dans le design graphique.",
        aboutText2: "Mon univers ne s'arrête pas à l'écran. Depuis quelques années, je travaille également dans l'imprimerie, ce qui m'a permis de mieux comprendre ce qui se passe entre une idée et sa réalisation. Je conçois donc mes projets en pensant aussi à leur rendu final : papier, impression, découpe, enseigne, plexiglas, PVC ou autres supports.",
        aboutText3: "J'aime particulièrement transformer une idée en quelque chose de concret et de fabriqué. En plus du design graphique, je réalise des créations et petites pièces en plexiglas ou PVC, et je prépare les fichiers nécessaires à la découpe laser ou CNC pour des projets comme les panneaux 3D, l'habillage d'enseignes, les présentoirs ou certains éléments de décoration.",
        aboutText4: "Je développe également mes propres petits outils et extensions pour Illustrator afin d'automatiser certaines tâches et de rendre le travail quotidien plus rapide et plus efficace.",
        coreDisciplines: "Ce que je fais",
        skill1: "Identité visuelle & création de logos",
        skill2: "Conception graphique pour l'impression",
        skill3: "Mise en page & supports de communication",
        skill4: "Préparation de fichiers pour découpe laser & CNC",
        skill5: "Conception de panneaux 3D & habillage d'enseignes",
        skill6: "Création de petits objets, présentoirs & éléments en PVC / plexiglas",
        skill7: "Conception graphique de packaging & gabarits de découpe",
        skill8: "Automatisation & outils pour Adobe Illustrator",
        storyTitle: "Philosophie d'Atelier",
        storyText: "<strong>Imagin'Art</strong> repose sur une règle simple : un design réussi ne s'arrête pas à une belle maquette sur écran, il doit être parfaitement imprimable et usinable dans le monde réel. En associant rigueur graphique et savoir-faire d'atelier, chaque tracé, fond perdu ou séparation de couleur est pensé pour un résultat physique impeccable, sans mauvaise surprise.",
        skillsTitle: "Logiciels & Outils",
        aiMention: "Flux de travail optimisé par des scripts d'automatisation personnalisés.",
        projectsTitle: "Réalisations & Projets",
        projectsEmpty: "Aucun projet ajouté pour le moment.",
        contactTitle: "Discutons de votre projet",
        contactNamePlaceholder: "Votre Nom",
        contactMessagePlaceholder: "Décrivez votre projet, vos besoins en design ou en fabrication...",
        contactBtn: "Envoyer via WhatsApp",
        footerText: "© 2026 Imagin'Art — Tous droits réservés. Développé par Laabidi Abdelghani."
    }
};

// 2. Logiciels
const softwares = [
    { name: "Illustrator", icon: "Ai" },
    { name: "Photoshop", icon: "Ps" },
    { name: "InDesign", icon: "Id" },
    { name: "CorelDraw", icon: "Cd" },
    { name: "Affinity Designer", icon: "Af" },
    { name: "CEP & Scripting", icon: "Js" }
];

// 3. Projects
const projects = [
    {
        title: "Imagin'Art Suite V4.0",
        category: "Extension Illustrator — Automatisation & Prépresse",
        image: "img/logo_2.0.svg",
        link: "../Imagin_Suite_UXP/website/index.html"
    }
];

// 4. Document Ready
document.addEventListener('DOMContentLoaded', () => {

    const htmlLang = document.documentElement;
    const langButtons = document.querySelectorAll('.lang-switcher button');
    const skillsGrid = document.getElementById('skills-grid');
    const projectsGrid = document.getElementById('projects-grid');
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    let currentLang = 'fr';

    function setLanguage(lang) {
        currentLang = lang;
        htmlLang.setAttribute('lang', lang);
        htmlLang.setAttribute('dir', 'ltr');

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key] !== undefined) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });

        langButtons.forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.lang-switcher button[data-lang="${lang}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        const emptyTextEl = document.querySelector('.empty-projects');
        if (emptyTextEl && translations[lang]) {
            emptyTextEl.innerText = translations[lang].projectsEmpty;
        }

        // Restart typewriter on lang change
        wordIndex = 0;
        charIndex = 0;
        isDeleting = false;
        if (typewriterEl) typewriterEl.textContent = '';
    }

    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.target.getAttribute('data-lang'));
        });
    });

    // Populate Skills Grid
    if (skillsGrid) {
        skillsGrid.innerHTML = '';
        softwares.forEach(skill => {
            const item = document.createElement('div');
            item.className = 'skill-item glass-card';
            item.innerHTML = `
                <div class="skill-icon">${skill.icon}</div>
                <div class="skill-name">${skill.name}</div>
            `;
            skillsGrid.appendChild(item);
        });
    }

    // Populate Projects Grid
    if (projectsGrid) {
        projectsGrid.innerHTML = '';
        if (projects.length === 0) {
            const emptyMsg = document.createElement('div');
            emptyMsg.className = 'empty-projects';
            emptyMsg.innerText = translations[currentLang].projectsEmpty;
            projectsGrid.appendChild(emptyMsg);
        } else {
            projects.forEach(project => {
                const item = document.createElement('div');
                item.className = 'project-card glass-card';
                item.style.padding = '24px';
                item.style.textAlign = 'center';
                item.style.cursor = project.link ? 'pointer' : 'default';
                item.innerHTML = `
                    <div style="background: rgba(10,10,10,0.6); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 28px 20px; margin-bottom: 16px; display: flex; align-items: center; justify-content: center; min-height: 180px;">
                        <img src="${project.image}" alt="${project.title}" style="max-height: 130px; max-width: 100%; object-fit: contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));">
                    </div>
                    <div class="project-info">
                        <h3 class="project-title" style="font-size: 1.2rem; margin-bottom: 6px; color: var(--beige); font-weight: 700;">${project.title}</h3>
                        <span class="project-category" style="font-size: 0.88rem; color: var(--brown); font-weight: 600;">${project.category}</span>
                        ${project.link ? `<div style="margin-top:14px;"><a href="${project.link}" style="font-size:0.82rem; color:var(--brown); border:1px solid var(--brown); padding:6px 16px; border-radius:20px; text-decoration:none; transition:all 0.2s;" onmouseover="this.style.background='var(--brown)';this.style.color='#1a1810'" onmouseout="this.style.background='';this.style.color='var(--brown)'">Voir la page →</a></div>` : ''}
                    </div>
                `;
                if (project.link) {
                    item.addEventListener('click', (e) => {
                        if (!e.target.closest('a')) {
                            window.location.href = project.link;
                        }
                    });
                }
                projectsGrid.appendChild(item);
            });
        }
    }

    // Typewriter effect
    const typewriterEl = document.getElementById('typewriter');
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeTimeout;

    function typeEffect() {
        const words = (translations[currentLang] && translations[currentLang].heroWords) || [];
        if (!words.length || !typewriterEl) return;
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
            typeSpeed = 2200;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex++;
            typeSpeed = 400;
        }

        clearTimeout(typeTimeout);
        typeTimeout = setTimeout(typeEffect, typeSpeed);
    }
    typeEffect();

    // Navbar scroll
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu
    if (hamburger && navLinks) {
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
    }

    // Scroll reveal
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

    // Form — WhatsApp
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            const phoneNumber = '212663280311';
            const whatsappMessage = `*Message de ${name} via Imagin'Art Portfolio :*\n\n${message}`;
            const encodedMessage = encodeURIComponent(whatsappMessage);
            window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');

            const btn = form.querySelector('.submit-btn');
            const originalText = btn.innerText;
            btn.innerText = '✓ Envoyé';
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

    // Back to top
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (backToTop) backToTop.classList.toggle('visible', window.scrollY > 500);
    });
    if (backToTop) {
        backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Mouse glow
    document.addEventListener('mousemove', e => {
        document.querySelectorAll('.glass-card').forEach(card => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });

    // Init
    setLanguage('fr');
});
