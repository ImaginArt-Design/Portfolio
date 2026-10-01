// 1. Translations dictionary (FR & EN)
const translations = {
    en: {
        navHome: "Home",
        navAbout: "About",
        navSkills: "Expertise",
        navProjects: "Work",
        navContact: "Contact",
        heroTitle: "Imagin'Art",
        heroTag: "Graphic Designer &nbsp;·&nbsp; Workshop Designer &nbsp;·&nbsp; Illustrator Extensions Developer",
        heroRole: "Graphic Designer &bull; Workshop Designer &bull; Illustrator Extensions Developer",
        heroDescStart: "I design: ",
        heroWords: [
            "timeless brand identities & logos.",
            "print art direction & packaging.",
            "complete publishing & editorial systems.",
            "automation extensions for Illustrator."
        ],
        heroBtn: "Explore My Work",
        stat1: "Years of experience",
        stat2: "Projects completed",
        stat3: "Automation tools developed",
        aboutTitle: "About & Craft",
        aboutText: "Graphic designer by trade with over 8 years of practice, my background was forged in the reality of print shops and fabrication workshops.",
        aboutText2: "Working directly on production floors changed everything: operating digital presses (Xerox...), testing substrates, and printing hundreds of formats (stationery, business cards, posters, menus, packaging), I learned how a digital design truly behaves once translated into physical matter.",
        aboutText3: "From 3D signage (panels, acrylic, PVC) to laser cutting and engraving (CO2, fiber, custom stamps), I don't just create visuals: I engineer production-ready vector files and dielines optimized for CNC milling and laser machines down to the millimeter.",
        aboutText4: "This dual background in creative design and hands-on printing realities led me to develop my own workflow automation extensions for Adobe Illustrator (Imagin'Art Suite).",
        scopeTitle: "What I Design",
        skill1: "Custom brand identity & logos",
        skill2: "Print art direction & publishing",
        skill3: "Packaging & custom dielines",
        skill4: "Illuminated signs & 3D relief lettering",
        skill5: "Technical vector paths for laser & CNC",
        skill6: "Modern Arabic calligraphy (Kelk)",
        skill7: "Adobe Illustrator extensions & scripting",
        skill8: "Acrylic, PVC & technical parts",
        storyText: "<strong>Between a beautiful mockup on screen and a tangible finished piece, lies the precision of the vector path.</strong> At Imagin'Art, every project is conceived with deep respect for physical matter: ink behavior, material thickness, guillotine trim, or CNC router bit radius. This dual culture of design elegance and manufacturing rigor ensures projects that are visually striking, durable, and precise to the millimeter.",
        skillsTitle: "Software & Tools",
        aiMention: "Workflows accelerated by custom vector engineering tools.",
        projectsTitle: "Projects & Work",
        projectsPlaceholder: "Gallery in progress",
        projectsPlaceholderSub: "Flagship projects — print, fabrication, identities & tools — coming soon.",
        contactTitle: "Let's Talk About Your Project",
        contactNamePlaceholder: "Your Name",
        contactMessagePlaceholder: "Describe your project or production needs...",
        contactBtn: "Send via WhatsApp",
        footerText: "© 2026 Imagin'Art — All rights reserved. Developed by Laabidi Abdelghani."
    },
    fr: {
        navHome: "Accueil",
        navAbout: "À Propos",
        navSkills: "Expertise",
        navProjects: "Réalisations",
        navContact: "Contact",
        heroTitle: "Imagin'Art",
        heroTag: "Graphiste &nbsp;·&nbsp; Concepteur d'Atelier &nbsp;·&nbsp; Développeur d'Extensions Illustrator",
        heroRole: "Graphiste &bull; Concepteur d'Atelier &bull; Développeur d'Extensions Illustrator",
        heroDescStart: "Je conçois : ",
        heroWords: [
            "des identités visuelles durables.",
            "des systèmes de marque complets.",
            "des packagings prêts à l'impression.",
            "des extensions pour Adobe Illustrator."
        ],
        heroBtn: "Explorer mes réalisations",
        stat1: "Années d'expérience",
        stat2: "Projets réalisés",
        stat3: "Outils d'automatisation développés",
        aboutTitle: "À Propos & Savoir-Faire",
        aboutText: "Graphiste de formation avec plus de 8 ans d’expérience, mon parcours s’est enrichi ces dernières années au cœur même d'imprimeries et d'ateliers de fabrication.",
        aboutText2: "Ce passage sur le terrain a tout changé : en exploitant des presses numériques (Xerox...), en jaugeant les supports et en tirant des centaines d'éditions (papeterie, cartes de visite, affiches, menus, packaging), j’ai appris comment un fichier réagit concrètement une fois sorti de l'écran.",
        aboutText3: "De la signalétique 3D (panneaux, plexiglas, forex) à la découpe et gravure laser (CO2, fibre, fabrication de cachets), je ne conçois pas de simples visuels abstraits : je prépare et optimise des tracés techniques rigoureux, prêts pour la découpe et l'usinage au millimètre près.",
        aboutText4: "C'est cette double culture entre exigence graphique et contraintes de production qui m'a conduit à concevoir et développer mes propres extensions d'automatisation sur Adobe Illustrator (Imagin'Art Suite).",
        scopeTitle: "Ce que je conçois",
        skill1: "Identité visuelle & logotypes sur mesure",
        skill2: "Direction artistique print & édition",
        skill3: "Packaging & gabarits techniques de découpe",
        skill4: "Enseignes lumineuses & lettrages 3D",
        skill5: "Tracés techniques pour découpe laser & CNC",
        skill6: "Calligraphie arabe moderne (Kelk)",
        skill7: "Extensions & scripts pour Adobe Illustrator",
        skill8: "Plexiglas, forex & pièces techniques",
        storyText: "<strong>Entre une belle image à l'écran et un produit réel sorti d'atelier, il y a la rigueur du tracé.</strong> Chez Imagin'Art, chaque projet est pensé dès la première esquisse avec la conscience de la matière : le comportement de l'encre, l'épaisseur du matériau, le passage du massicot ou la fraise de la machine. Cette double culture du design et de la fabrication garantit des réalisations esthétiques, durables et fidèles au millimètre.",
        skillsTitle: "Logiciels & Outils",
        aiMention: "Flux de travail accéléré par mes propres outils d'ingénierie vectorielle.",
        projectsTitle: "Réalisations & Projets",
        projectsPlaceholder: "Galerie en cours de constitution",
        projectsPlaceholderSub: "Les réalisations phares — print, fabrication, identités & outils — arrivent bientôt.",
        contactTitle: "Discutons de votre projet",
        contactNamePlaceholder: "Votre Nom",
        contactMessagePlaceholder: "Décrivez votre projet, vos besoins en design ou en fabrication...",
        contactBtn: "Envoyer via WhatsApp",
        footerText: "© 2026 Imagin'Art — Tous droits réservés. Développé par Laabidi Abdelghani."
    }
};

// 2. Logiciels
const softwares = [
    { name: "Illustrator", icon: "img/softwares/illustrator.svg", alt: "Adobe Illustrator" },
    { name: "Photoshop", icon: "img/softwares/photoshop.svg", alt: "Adobe Photoshop" },
    { name: "InDesign", icon: "img/softwares/indesign.svg", alt: "Adobe InDesign" },
    { name: "CorelDraw", icon: "img/softwares/coreldraw.svg", alt: "CorelDRAW" },
    { name: "Affinity Designer", icon: "img/softwares/affinity.svg", alt: "Affinity Designer" },
    { name: "Inkscape", icon: "img/softwares/inkscape.svg", alt: "Inkscape" },
    { name: "Kelk", icon: "img/softwares/kelk.svg", alt: "Kelk Calligraphie", subtitle: { fr: "Calligraphie", en: "Calligraphy" } },
    { name: "Dev & Scripting", icon: "img/softwares/javascript.svg", alt: "Dev & Scripting", subtitle: { fr: "JS / CEP / JSX", en: "JS / CEP / JSX" } }
];

// 3. Projects
const projects = [
    {
        title: "Imagin'Art Suite V4.0",
        category: "Extension Illustrator — Automatisation & Prépresse",
        image: "img/logo_2.0.svg",
        link: "https://imaginart-design.github.io/ImaginArt-Suite/"
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

        // Re-render skills on lang change
        renderSkills(lang);

        // Restart slide-up on lang change
        slideIndex = 0;
        startSlideUp(lang);

        // Re-render projects on lang change
        renderProjects(lang);
    }

    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            setLanguage(e.target.getAttribute('data-lang'));
        });
    });

    // Populate Skills Grid
    function renderSkills(lang) {
        if (!skillsGrid) return;
        skillsGrid.innerHTML = '';
        softwares.forEach(skill => {
            const item = document.createElement('div');
            item.className = 'skill-item glass-card';
            const subHtml = skill.subtitle ? `<span class="skill-sub">${skill.subtitle[lang] || skill.subtitle.fr}</span>` : '';
            item.innerHTML = `
                <div class="skill-icon">
                    <img src="${skill.icon}" alt="${skill.alt || skill.name}" class="software-logo" loading="lazy">
                </div>
                <div class="skill-name">
                    <span>${skill.name}</span>
                    ${subHtml}
                </div>
            `;
            skillsGrid.appendChild(item);
        });
    }

    // Populate Projects Grid
    function renderProjects(lang) {
        if (!projectsGrid) return;
        projectsGrid.innerHTML = '';
        if (projects.length === 0) {
            renderProjectsPlaceholder(lang);
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
                        ${project.link ? `<div style="margin-top:14px;"><a href="${project.link}" target="_blank" rel="noopener" style="font-size:0.82rem; color:var(--brown); border:1px solid var(--brown); padding:6px 16px; border-radius:20px; text-decoration:none; display:inline-block; transition:all 0.2s;" onmouseover="this.style.background='var(--brown)';this.style.color='#1a1810'" onmouseout="this.style.background='';this.style.color='var(--brown)'">Voir la page &rarr;</a></div>` : ''}
                    </div>
                `;
                if (project.link) {
                    item.addEventListener('click', () => { window.open(project.link, '_blank'); });
                }
                projectsGrid.appendChild(item);
            });
        }
    }

    function renderProjectsPlaceholder(lang) {
        const t = translations[lang] || translations.fr;
        const ph = document.createElement('div');
        ph.className = 'projects-placeholder';
        ph.innerHTML = `
            <div class="projects-placeholder-inner">
                <svg class="placeholder-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="14" width="24" height="18" rx="3" stroke="currentColor" stroke-width="1.5"/>
                    <rect x="36" y="14" width="24" height="18" rx="3" stroke="currentColor" stroke-width="1.5"/>
                    <rect x="4" y="38" width="24" height="12" rx="3" stroke="currentColor" stroke-width="1.5"/>
                    <rect x="36" y="38" width="24" height="12" rx="3" stroke="currentColor" stroke-width="1.5"/>
                    <line x1="14" y1="20" x2="18" y2="20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <line x1="46" y1="20" x2="50" y2="20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <line x1="14" y1="24" x2="22" y2="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <line x1="46" y1="24" x2="54" y2="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <h3 class="placeholder-title">${t.projectsPlaceholder}</h3>
                <p class="placeholder-sub">${t.projectsPlaceholderSub}</p>
            </div>
        `;
        projectsGrid.appendChild(ph);
    }

    // ═══ Slide-Up Words (CSS + JS orchestration) ═══
    const slideWordEl = document.getElementById('slideWord');
    let slideIndex = 0;
    let slideTimeout = null;

    function startSlideUp(lang) {
        if (slideTimeout) clearTimeout(slideTimeout);
        if (!slideWordEl) return;

        const words = (translations[lang] && translations[lang].heroWords) || [];
        if (!words.length) return;

        function showNextWord() {
            const word = words[slideIndex % words.length];
            slideWordEl.classList.remove('slide-enter', 'slide-exit');

            // Force reflow to restart animation
            void slideWordEl.offsetWidth;

            slideWordEl.textContent = word;
            slideWordEl.classList.add('slide-enter');

            // After display time, trigger exit
            slideTimeout = setTimeout(() => {
                slideWordEl.classList.remove('slide-enter');
                slideWordEl.classList.add('slide-exit');

                // After exit animation, load next word
                slideTimeout = setTimeout(() => {
                    slideIndex++;
                    showNextWord();
                }, 400);
            }, 2800);
        }

        showNextWord();
    }

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
            btn.innerText = 'Envoyé';
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
