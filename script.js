// ===== Initialize Lucide Icons =====
lucide.createIcons();

const translations = {
  en: {
    languageName: 'English',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.portfolio': 'Portfolio',
    'nav.team': 'Team',
    'nav.contact': 'Contact Us',
    'hero.badge': 'Crafting Digital Excellence',
    'hero.titleLine1': 'We Build',
    'hero.titleLine2': 'Digital Future',
    'hero.subtitle': 'Transforming ideas into powerful digital solutions. We craft innovative software, stunning designs, and scalable infrastructure that drives growth.',
    'hero.ctaPrimary': 'Start a Project',
    'hero.ctaSecondary': 'View Our Work',
    'hero.stats.projects': 'Projects Completed',
    'hero.stats.satisfaction': 'Client Satisfaction %',
    'hero.stats.years': 'Year in Business',
    'hero.stats.team': 'Team Members',
    'about.label': 'About Us',
    'about.heading': "We're a team of",
    'about.headingAccent': 'passionate creators',
    'about.paragraph1': 'Founded in 2025, SYSTEM BUILDERS is a fresh, ambitious team of three passionate developers ready to bring your digital ideas to life. We may be new, but our enthusiasm and dedication to quality are second to none.',
    'about.paragraph2': 'Our mission is to empower small and medium businesses with affordable, high-quality web solutions. We believe in honest work, clear communication, and delivering projects that exceed expectations. Every project is an opportunity for us to learn, grow, and prove ourselves.',
    'about.missionTitle': 'Our Mission',
    'about.missionText': 'Deliver tech that transforms businesses',
    'about.visionTitle': 'Our Vision',
    'about.visionText': 'Grow into a trusted partner for businesses worldwide',
    'services.label': 'Our Services',
    'services.heading': 'What We',
    'services.headingAccent': 'Offer',
    'services.description': 'Comprehensive IT solutions designed to accelerate your business growth and digital transformation.',
    'services.cards.webTitle': 'Web Development',
    'services.cards.webText': 'Custom web applications built with modern frameworks. Scalable, performant, and beautifully crafted.',
    'services.cards.mobileTitle': 'Mobile Apps',
    'services.cards.mobileText': 'Native and cross-platform mobile applications that deliver exceptional user experiences on every device.',
    'services.cards.cloudTitle': 'Cloud Solutions',
    'services.cards.cloudText': 'Robust cloud infrastructure and migration services. Secure, scalable, and cost-effective solutions.',
    'services.cards.designTitle': 'UI/UX Design',
    'services.cards.designText': 'User-centered design that converts. Research-driven interfaces that delight users and drive results.',
    'services.cards.aiTitle': 'AI & Machine Learning',
    'services.cards.aiText': 'Intelligent solutions powered by AI. Automate processes, gain insights, and stay ahead of the curve.',
    'services.cards.securityTitle': 'Cybersecurity',
    'services.cards.securityText': 'Comprehensive security audits, penetration testing, and protection strategies for your digital assets.',
    'process.label': 'Our Process',
    'process.heading': 'How We',
    'process.headingAccent': 'Work',
    'process.description': 'A streamlined approach that ensures quality delivery, on time and within budget.',
    'stack.label': 'Tech Stack',
    'stack.heading': 'Technologies We',
    'stack.headingAccent': 'Master',
    'stack.description': 'We stay at the forefront of technology to deliver the best solutions for our clients.',
    'portfolio.label': 'Portfolio',
    'portfolio.heading': 'Featured',
    'portfolio.headingAccent': 'Projects',
    'portfolio.description': 'A showcase of our recent work across various industries and technologies.',
    'team.label': 'Our Team',
    'team.heading': 'Meet Our',
    'team.headingAccent': 'Team',
    'team.description': 'Three passionate developers ready to bring your vision to life.',
    'contact.label': 'Get In Touch',
    'contact.heading': "Let's Build",
    'contact.headingAccent': 'Something Amazing',
    'contact.description': 'Ready to turn your ideas into a powerful digital experience? Let\'s start a conversation and create something extraordinary together.',
    'contact.form.firstName': 'First Name',
    'contact.form.firstNamePlaceholder': 'John',
    'contact.form.lastName': 'Last Name',
    'contact.form.lastNamePlaceholder': 'Doe',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'john@company.com',
    'contact.form.service': 'Service Interested In',
    'contact.form.servicePlaceholder': 'Select a service',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us about your project...',
    'contact.form.submit': 'Send Message',
    'footer.description': 'Empowering businesses through innovative digital solutions.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Stay updated with our latest insights and news.',
    'footer.emailPlaceholder': 'Email address',
    'footer.languageButton': 'Language',
    'footer.copyright': '© 2026 SYSTEM BUILDERS. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookies'
  },
  zh: {
    languageName: '中文',
    'nav.about': '关于',
    'nav.services': '服务',
    'nav.process': '流程',
    'nav.portfolio': '作品集',
    'nav.team': '团队',
    'nav.contact': '联系我们',
    'hero.badge': '打造数字卓越',
    'hero.titleLine1': '我们构建',
    'hero.titleLine2': '数字未来',
    'hero.subtitle': '将创意转化为强大的数字解决方案。我们打造创新软件、惊艳设计和可扩展基础设施，推动增长。',
    'hero.ctaPrimary': '开始项目',
    'hero.ctaSecondary': '查看我们的作品',
    'hero.stats.projects': '已完成项目',
    'hero.stats.satisfaction': '客户满意度 %',
    'hero.stats.years': '经营年限',
    'hero.stats.team': '团队成员',
    'about.label': '关于我们',
    'about.heading': '我们是一支',
    'about.headingAccent': '充满热情的创作者团队',
    'about.paragraph1': '成立于 2025 年，SYSTEM BUILDERS 是一支由三名充满热情的开发者组成的新团队，随时准备把您的数字创意变为现实。我们虽然年轻，但对品质的热情与投入从不妥协。',
    'about.paragraph2': '我们的使命是为中小型企业提供经济实惠且高质量的网站解决方案。我们相信诚实的工作、清晰的沟通以及超出预期的交付成果。每一个项目都是我们学习、成长和证明自我的机会。',
    'about.missionTitle': '我们的使命',
    'about.missionText': '提供改变业务的技术',
    'about.visionTitle': '我们的愿景',
    'about.visionText': '成长为全球企业值得信赖的合作伙伴',
    'services.label': '我们的服务',
    'services.heading': '我们提供',
    'services.headingAccent': '什么',
    'services.description': '全面的 IT 解决方案，旨在加速您的业务增长和数字化转型。',
    'services.cards.webTitle': '网站开发',
    'services.cards.webText': '使用现代框架构建的定制网络应用。可扩展、性能优越且精美。',
    'services.cards.mobileTitle': '移动应用',
    'services.cards.mobileText': '原生和跨平台移动应用，在每台设备上都能提供卓越的用户体验。',
    'services.cards.cloudTitle': '云解决方案',
    'services.cards.cloudText': '强大的云基础设施与迁移服务。安全、可扩展且具有成本效益。',
    'services.cards.designTitle': 'UI/UX 设计',
    'services.cards.designText': '以用户为中心的设计，能够转化客户。以研究驱动的界面，让用户满意并带来成果。',
    'services.cards.aiTitle': '人工智能与机器学习',
    'services.cards.aiText': '由人工智能驱动的智能解决方案。自动化流程、获取洞察并保持领先。',
    'services.cards.securityTitle': '网络安全',
    'services.cards.securityText': '全面的安全审计、渗透测试和保护策略，守护您的数字资产。',
    'process.label': '我们的流程',
    'process.heading': '我们如何',
    'process.headingAccent': '工作',
    'process.description': '精简高效的流程，确保按时、按预算交付高质量成果。',
    'stack.label': '技术栈',
    'stack.heading': '我们精通的',
    'stack.headingAccent': '技术',
    'stack.description': '我们始终保持在技术前沿，为客户交付最佳解决方案。',
    'portfolio.label': '作品集',
    'portfolio.heading': '精选',
    'portfolio.headingAccent': '项目',
    'portfolio.description': '展示我们近期在各行业和技术领域的工作成果。',
    'team.label': '我们的团队',
    'team.heading': '认识我们的',
    'team.headingAccent': '团队',
    'team.description': '三位充满热情的开发者，随时为您的想法落地。',
    'contact.label': '联系我们',
    'contact.heading': '让我们一起',
    'contact.headingAccent': '创造非凡',
    'contact.description': '准备好把您的想法变成强大的数字体验了吗？让我们开始对话，一起创造非凡成果。',
    'contact.form.firstName': '名字',
    'contact.form.firstNamePlaceholder': '张',
    'contact.form.lastName': '姓氏',
    'contact.form.lastNamePlaceholder': '三',
    'contact.form.email': '电子邮件',
    'contact.form.emailPlaceholder': 'zhang@example.com',
    'contact.form.service': '感兴趣的服务',
    'contact.form.servicePlaceholder': '选择服务',
    'contact.form.message': '留言',
    'contact.form.messagePlaceholder': '告诉我们您的项目需求...',
    'contact.form.submit': '发送消息',
    'footer.description': '通过创新数字解决方案赋能企业。',
    'footer.services': '服务',
    'footer.company': '公司',
    'footer.newsletter': '新闻通讯',
    'footer.newsletterText': '随时了解我们的最新见解与新闻。',
    'footer.emailPlaceholder': '电子邮件地址',
    'footer.languageButton': '语言',
    'footer.copyright': '© 2026 SYSTEM BUILDERS。保留所有权利。',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'footer.cookies': 'Cookie 政策'
  },
  es: {
    languageName: 'Español',
    'nav.about': 'Nosotros',
    'nav.services': 'Servicios',
    'nav.process': 'Proceso',
    'nav.portfolio': 'Portafolio',
    'nav.team': 'Equipo',
    'nav.contact': 'Contáctanos',
    'hero.badge': 'Creando Excelencia Digital',
    'hero.titleLine1': 'Construimos',
    'hero.titleLine2': 'el Futuro Digital',
    'hero.subtitle': 'Transformamos ideas en soluciones digitales poderosas. Creamos software innovador, diseños impresionantes e infraestructura escalable que impulsa el crecimiento.',
    'hero.ctaPrimary': 'Iniciar un Proyecto',
    'hero.ctaSecondary': 'Ver Nuestro Trabajo',
    'hero.stats.projects': 'Proyectos Completados',
    'hero.stats.satisfaction': 'Satisfacción del Cliente %',
    'hero.stats.years': 'Años en el Negocio',
    'hero.stats.team': 'Miembros del Equipo',
    'about.label': 'Sobre Nosotros',
    'about.heading': 'Somos un equipo de',
    'about.headingAccent': 'creadores apasionados',
    'about.paragraph1': 'Fundada en 2025, SYSTEM BUILDERS es un equipo joven y ambicioso de tres desarrolladores apasionados listos para dar vida a tus ideas digitales. Aunque somos nuevos, nuestra pasión y dedicación a la calidad son incomparables.',
    'about.paragraph2': 'Nuestra misión es empoderar a las pequeñas y medianas empresas con soluciones web asequibles y de alta calidad. Creemos en el trabajo honesto, la comunicación clara y la entrega de proyectos que superan las expectativas.',
    'about.missionTitle': 'Nuestra Misión',
    'about.missionText': 'Entregar tecnología que transforma negocios',
    'about.visionTitle': 'Nuestra Visión',
    'about.visionText': 'Convertirnos en un aliado confiable para negocios de todo el mundo',
    'services.label': 'Nuestros Servicios',
    'services.heading': 'Lo Que',
    'services.headingAccent': 'Ofrecemos',
    'services.description': 'Soluciones de TI integrales diseñadas para acelerar el crecimiento y la transformación digital de tu empresa.',
    'services.cards.webTitle': 'Desarrollo Web',
    'services.cards.webText': 'Aplicaciones web personalizadas construidas con marcos modernos. Escalables, eficientes y bellamente elaboradas.',
    'services.cards.mobileTitle': 'Aplicaciones Móviles',
    'services.cards.mobileText': 'Aplicaciones móviles nativas y multiplataforma que ofrecen experiencias de usuario excepcionales en todos los dispositivos.',
    'services.cards.cloudTitle': 'Soluciones en la Nube',
    'services.cards.cloudText': 'Infraestructura y servicios de migración en la nube robustos. Soluciones seguras, escalables y rentables.',
    'services.cards.designTitle': 'Diseño UI/UX',
    'services.cards.designText': 'Diseño centrado en el usuario que convierte. Interfaces guiadas por investigación que deleitan a los usuarios y generan resultados.',
    'services.cards.aiTitle': 'IA y Aprendizaje Automático',
    'services.cards.aiText': 'Soluciones inteligentes impulsadas por IA. Automatiza procesos, obtiene información y mantente un paso adelante.',
    'services.cards.securityTitle': 'Ciberseguridad',
    'services.cards.securityText': 'Auditorías de seguridad integrales, pruebas de penetración y estrategias de protección para tus activos digitales.',
    'process.label': 'Nuestro Proceso',
    'process.heading': 'Cómo',
    'process.headingAccent': 'Trabajamos',
    'process.description': 'Un enfoque simplificado que garantiza una entrega de calidad, a tiempo y dentro del presupuesto.',
    'stack.label': 'Stack Tecnológico',
    'stack.heading': 'Tecnologías Que',
    'stack.headingAccent': 'Dominamos',
    'stack.description': 'Nos mantenemos a la vanguardia de la tecnología para ofrecer las mejores soluciones a nuestros clientes.',
    'portfolio.label': 'Portafolio',
    'portfolio.heading': 'Proyectos',
    'portfolio.headingAccent': 'Destacados',
    'portfolio.description': 'Una muestra de nuestro trabajo reciente en diversas industrias y tecnologías.',
    'team.label': 'Nuestro Equipo',
    'team.heading': 'Conoce a Nuestro',
    'team.headingAccent': 'Equipo',
    'team.description': 'Tres desarrolladores apasionados listos para dar vida a tu visión.',
    'contact.label': 'Ponte en Contacto',
    'contact.heading': 'Construyamos',
    'contact.headingAccent': 'Algo Asombroso',
    'contact.description': '¿Listo para convertir tus ideas en una experiencia digital poderosa? Comencemos una conversación y creemos algo extraordinario juntos.',
    'contact.form.firstName': 'Nombre',
    'contact.form.firstNamePlaceholder': 'Juan',
    'contact.form.lastName': 'Apellido',
    'contact.form.lastNamePlaceholder': 'Pérez',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.emailPlaceholder': 'juan@empresa.com',
    'contact.form.service': 'Servicio de Interés',
    'contact.form.servicePlaceholder': 'Selecciona un servicio',
    'contact.form.message': 'Mensaje',
    'contact.form.messagePlaceholder': 'Cuéntanos sobre tu proyecto...',
    'contact.form.submit': 'Enviar Mensaje',
    'footer.description': 'Empoderando a las empresas con soluciones digitales innovadoras.',
    'footer.services': 'Servicios',
    'footer.company': 'Empresa',
    'footer.newsletter': 'Boletín',
    'footer.newsletterText': 'Mantente al día con nuestras últimas ideas y noticias.',
    'footer.emailPlaceholder': 'Dirección de correo',
    'footer.languageButton': 'Idioma',
    'footer.copyright': '© 2026 SYSTEM BUILDERS. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.cookies': 'Cookies'
  },
  hi: {
    languageName: 'हिंदी',
    'nav.about': 'हमारे बारे में',
    'nav.services': 'सेवाएँ',
    'nav.process': 'प्रक्रिया',
    'nav.portfolio': 'पोर्टफोलियो',
    'nav.team': 'टीम',
    'nav.contact': 'संपर्क करें',
    'hero.badge': 'डिजिटल उत्कृष्टता का निर्माण',
    'hero.titleLine1': 'हम बनाते हैं',
    'hero.titleLine2': 'डिजिटल भविष्य',
    'hero.subtitle': 'विचारों को शक्तिशाली डिजिटल समाधान में बदलते हैं। हम नवीन सॉफ़्टवेयर, शानदार डिज़ाइन और बढ़ती जरूरतों के लिए स्केलेबल इंफ्रास्ट्रक्चर बनाते हैं।',
    'hero.ctaPrimary': 'एक परियोजना शुरू करें',
    'hero.ctaSecondary': 'हमारा काम देखें',
    'hero.stats.projects': 'पूर्ण परियोजनाएँ',
    'hero.stats.satisfaction': 'ग्राहक संतुष्टि %',
    'hero.stats.years': 'व्यवसाय में वर्ष',
    'hero.stats.team': 'टीम के सदस्य',
    'about.label': 'हमारे बारे में',
    'about.heading': 'हम एक टीम हैं',
    'about.headingAccent': 'उत्साही रचनाकारों की',
    'about.paragraph1': '2025 में स्थापित, SYSTEM BUILDERS तीन उत्साही डेवलपर्स की एक नई और ambitious टीम है, जो आपके डिजिटल विचारों को जीवन देने के लिए तैयार है। हम नए हैं, लेकिन गुणवत्ता के लिए हमारी उत्सुकता और समर्पण किसी से कम नहीं है।',
    'about.paragraph2': 'हमारा उद्देश्य छोटे और मध्यम व्यवसायों को किफायती, उच्च-गुणवत्ता वाली वेब समाधानों से सशक्त बनाना है। हम ईमानदार काम, स्पष्ट संवाद और उम्मीदों से भी बेहतर परियोजनाओं पर विश्वास करते हैं।',
    'about.missionTitle': 'हमारा मिशन',
    'about.missionText': 'ऐसी तकनीक देना जो व्यवसायों को बदल दे',
    'about.visionTitle': 'हमारा दृष्टिकोण',
    'about.visionText': 'विश्वभर के व्यवसायों के लिए एक भरोसेमंद भागीदार बनना',
    'services.label': 'हमारी सेवाएँ',
    'services.heading': 'हम क्या',
    'services.headingAccent': 'प्रदान करते हैं',
    'services.description': 'व्यापार के विकास और डिजिटल रूपांतरण को तेज़ करने के लिए डिज़ाइन की गई व्यापक आईटी समाधान।',
    'services.cards.webTitle': 'वेब विकास',
    'services.cards.webText': 'आधुनिक ढाँचों के साथ निर्मित कस्टम वेब एप्लिकेशन। स्केलेबल, प्रदर्शनकारी और सुंदरता से भरपूर।',
    'services.cards.mobileTitle': 'मोबाइल ऐप्स',
    'services.cards.mobileText': 'नेटिव और क्रॉस-प्लेटफॉर्म मोबाइल एप्लिकेशन जो हर डिवाइस पर असाधारण उपयोगकर्ता अनुभव प्रदान करते हैं।',
    'services.cards.cloudTitle': 'क्लाउड समाधानों',
    'services.cards.cloudText': 'मजबूत क्लाउड इंफ्रास्ट्रक्चर और माइग्रेशन सेवाएँ। सुरक्षित, स्केलेबल और लागत-प्रभावी समाधान।',
    'services.cards.designTitle': 'UI/UX डिज़ाइन',
    'services.cards.designText': 'उपयोगकर्ता-केंद्रित डिज़ाइन जो रूपांतरण लाता है। अनुसंधान-आधारित इंटरफेस जो उपयोगकर्ताओं को प्रसन्न करते हैं और परिणाम देते हैं।',
    'services.cards.aiTitle': 'एआई और मशीन लर्निंग',
    'services.cards.aiText': 'एआई से संचालित बुद्धिमान समाधान। प्रक्रियाओं को स्वचालित करें, अंतर्दृष्टि प्राप्त करें और आगे रहें।',
    'services.cards.securityTitle': 'साइबर सुरक्षा',
    'services.cards.securityText': 'आपकी डिजिटल संपत्तियों के लिए व्यापक सुरक्षा ऑडिट, प्रवेश परीक्षण और सुरक्षा रणनीतियाँ।',
    'process.label': 'हमारी प्रक्रिया',
    'process.heading': 'हम कैसे',
    'process.headingAccent': 'काम करते हैं',
    'process.description': 'एक सुव्यवस्थित दृष्टिकोण जो गुणवत्ता, समय पर और बजट के भीतर वितरण सुनिश्चित करता है।',
    'stack.label': 'टेक स्टैक',
    'stack.heading': 'हमारे द्वारा mastered',
    'stack.headingAccent': 'तकनीक',
    'stack.description': 'हम अपने ग्राहकों के लिए सर्वोत्तम समाधान प्रदान करने के लिए तकनीक के सबसे आगे बने रहते हैं।',
    'portfolio.label': 'पोर्टफोलियो',
    'portfolio.heading': 'विशेष रुप से',
    'portfolio.headingAccent': 'प्रोजेक्ट्स',
    'portfolio.description': 'विभिन्न उद्योगों और तकनीकों में हमारे हाल के काम का प्रदर्शन।',
    'team.label': 'हमारी टीम',
    'team.heading': 'हमारी टीम से मिलें',
    'team.headingAccent': 'टीम',
    'team.description': 'तीन उत्साही डेवलपर्स जो आपके विज़न को जीवन देना चाहते हैं।',
    'contact.label': 'संपर्क करें',
    'contact.heading': 'आइए बनाएं',
    'contact.headingAccent': 'कुछ अद्भुत',
    'contact.description': 'क्या आप अपनी विचारों को एक शक्तिशाली डिजिटल अनुभव में बदलने के लिए तैयार हैं? चलिए संवाद शुरू करें और साथ में कुछ असाधारण बनाएं।',
    'contact.form.firstName': 'पहला नाम',
    'contact.form.firstNamePlaceholder': 'अर्जुन',
    'contact.form.lastName': 'अंतिम नाम',
    'contact.form.lastNamePlaceholder': 'सिंह',
    'contact.form.email': 'ईमेल',
    'contact.form.emailPlaceholder': 'arjun@company.com',
    'contact.form.service': 'रुचि वाली सेवा',
    'contact.form.servicePlaceholder': 'एक सेवा चुनें',
    'contact.form.message': 'संदेश',
    'contact.form.messagePlaceholder': 'अपने प्रोजेक्ट के बारे में बताएं...',
    'contact.form.submit': 'संदेश भेजें',
    'footer.description': 'नवीन डिजिटल समाधानों के माध्यम से व्यवसायों को सशक्त बनाना।',
    'footer.services': 'सेवाएँ',
    'footer.company': 'कंपनी',
    'footer.newsletter': 'न्यूज़लेटर',
    'footer.newsletterText': 'हमारे नवीनतम विचारों और समाचारों से अपडेट रहें।',
    'footer.emailPlaceholder': 'ईमेल पता',
    'footer.languageButton': 'भाषा',
    'footer.copyright': '© 2026 SYSTEM BUILDERS। सर्वाधिकार सुरक्षित।',
    'footer.privacy': 'गोपनीयता नीति',
    'footer.terms': 'सेवा की शर्तें',
    'footer.cookies': 'कुकीज़'
  },
  fr: {
    languageName: 'Français',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.process': 'Processus',
    'nav.portfolio': 'Portfolio',
    'nav.team': 'Équipe',
    'nav.contact': 'Contactez-nous',
    'hero.badge': 'Créer l’excellence numérique',
    'hero.titleLine1': 'Nous construisons',
    'hero.titleLine2': 'un futur numérique',
    'hero.subtitle': 'Transformons les idées en solutions numériques puissantes. Nous créons des logiciels innovants, des designs stunning et une infrastructure évolutive qui stimule la croissance.',
    'hero.ctaPrimary': 'Démarrer un projet',
    'hero.ctaSecondary': 'Voir nos réalisations',
    'hero.stats.projects': 'Projets réalisés',
    'hero.stats.satisfaction': 'Satisfaction client %',
    'hero.stats.years': 'Années d’activité',
    'hero.stats.team': 'Membres de l’équipe',
    'about.label': 'À propos de nous',
    'about.heading': 'Nous sommes une équipe de',
    'about.headingAccent': 'créateurs passionnés',
    'about.paragraph1': 'Fondée en 2025, SYSTEM BUILDERS est une jeune équipe ambitieuse de trois développeurs passionnés prêts à donner vie à vos idées numériques. Nous sommes nouveaux, mais notre enthousiasme et notre dévouement à la qualité sont sans égal.',
    'about.paragraph2': 'Notre mission est d’aider les petites et moyennes entreprises avec des solutions web abordables et de haute qualité. Nous croyons en un travail honnête, une communication claire et la livraison de projets qui dépassent les attentes.',
    'about.missionTitle': 'Notre mission',
    'about.missionText': 'Offrir une technologie qui transforme les entreprises',
    'about.visionTitle': 'Notre vision',
    'about.visionText': 'Devenir un partenaire de confiance pour les entreprises du monde entier',
    'services.label': 'Nos services',
    'services.heading': 'Ce que nous',
    'services.headingAccent': 'proposons',
    'services.description': 'Des solutions informatiques complètes conçues pour accélérer la croissance et la transformation numérique de votre entreprise.',
    'services.cards.webTitle': 'Développement web',
    'services.cards.webText': 'Applications web personnalisées construites avec des frameworks modernes. Évolutives, performantes et magnifiquement conçues.',
    'services.cards.mobileTitle': 'Applications mobiles',
    'services.cards.mobileText': 'Applications mobiles natives et multiplateformes offrant une expérience utilisateur exceptionnelle sur tous les appareils.',
    'services.cards.cloudTitle': 'Solutions cloud',
    'services.cards.cloudText': 'Infrastructure cloud robuste et services de migration. Solutions sécurisées, évolutives et rentables.',
    'services.cards.designTitle': 'Design UI/UX',
    'services.cards.designText': 'Design centré sur l’utilisateur qui convertit. Interfaces guidées par la recherche qui ravissent les utilisateurs et produisent des résultats.',
    'services.cards.aiTitle': 'IA et apprentissage automatique',
    'services.cards.aiText': 'Solutions intelligentes alimentées par l’IA. Automatisez les processus, obtenez des insights et gardez une longueur d’avance.',
    'services.cards.securityTitle': 'Cybersécurité',
    'services.cards.securityText': 'Audits de sécurité complets, tests d’intrusion et stratégies de protection pour vos actifs numériques.',
    'process.label': 'Notre processus',
    'process.heading': 'Comment nous',
    'process.headingAccent': 'travaillons',
    'process.description': 'Une approche simplifiée qui garantit une livraison de qualité, à temps et dans le respect du budget.',
    'stack.label': 'Pile technologique',
    'stack.heading': 'Technologies que nous',
    'stack.headingAccent': 'maîtrisons',
    'stack.description': 'Nous restons à la pointe de la technologie pour offrir les meilleures solutions à nos clients.',
    'portfolio.label': 'Portfolio',
    'portfolio.heading': 'Projets',
    'portfolio.headingAccent': 'en vedette',
    'portfolio.description': 'Une présentation de nos travaux récents dans divers secteurs et technologies.',
    'team.label': 'Notre équipe',
    'team.heading': 'Rencontrez notre',
    'team.headingAccent': 'équipe',
    'team.description': 'Trois développeurs passionnés prêts à donner vie à votre vision.',
    'contact.label': 'Entrons en contact',
    'contact.heading': 'Construisons',
    'contact.headingAccent': 'quelque chose d’extraordinaire',
    'contact.description': 'Prêt à transformer vos idées en une expérience numérique puissante ? Commençons une conversation et créons quelque chose d’extraordinaire ensemble.',
    'contact.form.firstName': 'Prénom',
    'contact.form.firstNamePlaceholder': 'Jean',
    'contact.form.lastName': 'Nom',
    'contact.form.lastNamePlaceholder': 'Dupont',
    'contact.form.email': 'E-mail',
    'contact.form.emailPlaceholder': 'jean@entreprise.com',
    'contact.form.service': 'Service qui vous intéresse',
    'contact.form.servicePlaceholder': 'Sélectionnez un service',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Parlez-nous de votre projet...',
    'contact.form.submit': 'Envoyer le message',
    'footer.description': 'Donner aux entreprises les moyens de réussir grâce à des solutions numériques innovantes.',
    'footer.services': 'Services',
    'footer.company': 'Entreprise',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Restez informé de nos dernières idées et actualités.',
    'footer.emailPlaceholder': 'Adresse e-mail',
    'footer.languageButton': 'Langue',
    'footer.copyright': '© 2026 SYSTEM BUILDERS. Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d’utilisation',
    'footer.cookies': 'Cookies'
  },
  fil: {
    languageName: 'Filipino',
    'nav.about': 'Tungkol',
    'nav.services': 'Mga Serbisyo',
    'nav.process': 'Proseso',
    'nav.portfolio': 'Portfolio',
    'nav.team': 'Team',
    'nav.contact': 'Makipag-ugnayan',
    'hero.badge': 'Pagbuo ng Digital Excellence',
    'hero.titleLine1': 'Bumubuo Kami ng',
    'hero.titleLine2': 'Digital Future',
    'hero.subtitle': 'Ginagawang makapangyarihang digital na solusyon ang mga ideya. Gumagawa kami ng makabagong software, kahanga-hangang disenyo, at scalable na imprastruktura na nagtutulak ng paglago.',
    'hero.ctaPrimary': 'Simulan ang Proyekto',
    'hero.ctaSecondary': 'Tingnan ang Aming Gawa',
    'hero.stats.projects': 'Mga Nakumpletong Proyekto',
    'hero.stats.satisfaction': 'Kasiya-siyang Kliyente %',
    'hero.stats.years': 'Taon sa Negosyo',
    'hero.stats.team': 'Mga Miyembro ng Team',
    'about.label': 'Tungkol sa Amin',
    'about.heading': 'Kami ay isang team ng',
    'about.headingAccent': 'mga mahilig na creators',
    'about.paragraph1': 'Itinatag noong 2025, ang SYSTEM BUILDERS ay isang bagong at ambitious na team ng tatlong passionate developers na handang buhayin ang iyong mga digital na ideya. Bagama\'t bago kami, ang sigla at dedikasyon namin sa kalidad ay walang kapantay.',
    'about.paragraph2': 'Ang misyon namin ay bigyang kapangyarihan ang maliliit at katamtamang negosyo sa abot-kayang, mataas na kalidad na web solutions. Naniniwala kami sa tapat na trabaho, malinaw na komunikasyon, at paghatid ng mga proyekto na lumalampas sa inaasahan.',
    'about.missionTitle': 'Ang Misyon Namin',
    'about.missionText': 'Maghatid ng teknolohiya na nagbabago sa negosyo',
    'about.visionTitle': 'Ang Paningin Namin',
    'about.visionText': 'Maging isang pinagkakatiwalaang partner para sa mga negosyo sa buong mundo',
    'services.label': 'Ang aming Serbisyo',
    'services.heading': 'Ano ang',
    'services.headingAccent': 'Inaalok Namin',
    'services.description': 'Komprehensibong IT solutions na idinisenyo upang mapabilis ang paglago at digital transformation ng iyong negosyo.',
    'services.cards.webTitle': 'Web Development',
    'services.cards.webText': 'Mga custom na web application na binuo gamit ang modern frameworks. Scalable, mahusay, at maayos ang pagkakagawa.',
    'services.cards.mobileTitle': 'Mga Mobile Apps',
    'services.cards.mobileText': 'Mga native at cross-platform na mobile application na nag-aalok ng kahanga-hangang karanasan sa bawat device.',
    'services.cards.cloudTitle': 'Cloud Solutions',
    'services.cards.cloudText': 'Matibay na cloud infrastructure at migration services. Secure, scalable, at cost-effective na solusyon.',
    'services.cards.designTitle': 'UI/UX Design',
    'services.cards.designText': 'Disenyo na nakasentro sa user na nagko-convert. Mga interface na nakabase sa research na nagpapasaya sa user at nagbubunga ng resulta.',
    'services.cards.aiTitle': 'AI at Machine Learning',
    'services.cards.aiText': 'Mga matatalinong solusyon na pinapagana ng AI. I-automate ang proseso, kumuha ng insight, at manatiling ahead.',
    'services.cards.securityTitle': 'Cybersecurity',
    'services.cards.securityText': 'Komprehensibong security audit, penetration testing, at protection strategies para sa iyong digital assets.',
    'process.label': 'Ang Aming Proseso',
    'process.heading': 'Paano Kami',
    'process.headingAccent': 'Nagtatrabaho',
    'process.description': 'Isang streamlined na approach na tinitiyak ang de-kalidad na delivery, sa oras at sa loob ng badyet.',
    'stack.label': 'Tech Stack',
    'stack.heading': 'Mga Teknolohiyang',
    'stack.headingAccent': 'Master Namin',
    'stack.description': 'Nananatiling nasa unahan kami ng teknolohiya para maghatid ng pinakamahusay na solusyon sa aming mga kliyente.',
    'portfolio.label': 'Portfolio',
    'portfolio.heading': 'Mga',
    'portfolio.headingAccent': 'Proyekto',
    'portfolio.description': 'Isang showcase ng aming kamakailang trabaho sa iba\'t ibang industriya at teknolohiya.',
    'team.label': 'Ang Aming Team',
    'team.heading': 'Kilalanin ang Aming',
    'team.headingAccent': 'Team',
    'team.description': 'Tatlong passionate developer na handang buhayin ang iyong pangitain.',
    'contact.label': 'Makipag-ugnayan',
    'contact.heading': 'Tayo\'y Magtayo',
    'contact.headingAccent': 'ng Isang Kamangha-manghang Bagay',
    'contact.description': 'Handa nang gawing makapangyarihang digital experience ang iyong mga ideya? Simulan natin ang pag-uusap at lumikha ng isang kahanga-hangang bagay nang magkasama.',
    'contact.form.firstName': 'Unang Pangalan',
    'contact.form.firstNamePlaceholder': 'Juan',
    'contact.form.lastName': 'Apelyido',
    'contact.form.lastNamePlaceholder': 'Dela Cruz',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'juan@company.com',
    'contact.form.service': 'Serbisyong Kainteresado',
    'contact.form.servicePlaceholder': 'Piliin ang serbisyo',
    'contact.form.message': 'Mensahe',
    'contact.form.messagePlaceholder': 'Sabihin sa amin ang tungkol sa iyong proyekto...',
    'contact.form.submit': 'Ipadala ang Mensahe',
    'footer.description': 'Pagpapalakas sa mga negosyo sa pamamagitan ng makabagong digital na solusyon.',
    'footer.services': 'Mga Serbisyo',
    'footer.company': 'Kumpanya',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Manatiling updated sa aming pinakabagong insight at balita.',
    'footer.emailPlaceholder': 'Email address',
    'footer.languageButton': 'Wika',
    'footer.copyright': '© 2026 SYSTEM BUILDERS. Lahat ng karapatan ay nakalaan.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookies'
  }
};

let currentLanguage = localStorage.getItem('preferred-language') || 'en';

function applyTranslations(lang) {
  const selected = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (selected[key]) {
      element.textContent = selected[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (selected[key]) {
      element.setAttribute('placeholder', selected[key]);
    }
  });

  const label = document.getElementById('language-button-label');
  if (label) {
    label.textContent = selected.languageName;
  }

  document.querySelectorAll('.lang-option').forEach((option) => {
    option.classList.toggle('bg-dark-800', option.dataset.lang === lang);
    option.classList.toggle('text-white', option.dataset.lang === lang);
    option.classList.toggle('text-dark-300', option.dataset.lang !== lang);
  });

  currentLanguage = lang;
  localStorage.setItem('preferred-language', lang);
}

function initLanguageSwitcher() {
  const toggleButton = document.getElementById('language-toggle');
  const languageMenu = document.getElementById('language-menu');

  if (!toggleButton || !languageMenu) return;

  toggleButton.addEventListener('click', () => {
    languageMenu.classList.toggle('hidden');
  });

  document.querySelectorAll('.lang-option').forEach((option) => {
    option.addEventListener('click', () => {
      applyTranslations(option.dataset.lang);
      languageMenu.classList.add('hidden');
    });
  });

  document.addEventListener('click', (event) => {
    if (!toggleButton.contains(event.target) && !languageMenu.contains(event.target)) {
      languageMenu.classList.add('hidden');
    }
  });
}

applyTranslations(currentLanguage);
initLanguageSwitcher();

// Re-initialize Lucide icons after a delay to catch any dynamically loaded content
setTimeout(() => {
  lucide.createIcons();
  console.log('Lucide icons initialized');
}, 1000);

// ===== Lenis Smooth Scrolling =====
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Lenis + GSAP ScrollTrigger sync
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// ===== Custom Cursor =====
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX - 4 + 'px';
  cursor.style.top = mouseY - 4 + 'px';
});

function animateCursorFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  cursorFollower.style.left = followerX - 20 + 'px';
  cursorFollower.style.top = followerY - 20 + 'px';
  requestAnimationFrame(animateCursorFollower);
}
animateCursorFollower();

// Cursor hover effect
const hoverElements = document.querySelectorAll('a, button, .service-card, .portfolio-card, .team-card, .tech-dome-item');
hoverElements.forEach(el => {
  el.addEventListener('mouseenter', () => cursorFollower.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursorFollower.classList.remove('hover'));
});

// ===== Loading Screen =====
const loader = document.getElementById('loader');
const loaderBar = document.getElementById('loader-bar');
const loaderPercent = document.getElementById('loader-percent');

let progress = 0;
const loadInterval = setInterval(() => {
  progress += Math.random() * 15;
  if (progress > 100) progress = 100;
  loaderPercent.textContent = Math.floor(progress) + '%';
  if (progress >= 100) {
    clearInterval(loadInterval);
    setTimeout(() => {
      gsap.to(loader, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
        onComplete: () => {
          loader.style.display = 'none';
          initHeroAnimations();
        }
      });
    }, 400);
  }
}, 100);

// ===== Hero Animations =====
function initHeroAnimations() {
  const heroTl = gsap.timeline();

  heroTl
    .from('.hero-badge', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from('.hero-word', {
      y: '120%',
      duration: 1,
      ease: 'power3.out',
      stagger: 0.15
    }, '-=0.4')
    .from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-cta > *', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.1
    }, '-=0.4')
    .from('.hero-stats > *', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power3.out',
      stagger: 0.08
    }, '-=0.3');

  // Counter animation
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    gsap.to(el, {
      textContent: target,
      duration: 2,
      ease: 'power1.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      }
    });
  });
}

// ===== Floating Particles =====
function createParticles() {
  const container = document.getElementById('particles');
  const count = window.innerWidth < 768 ? 20 : 40;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
    particle.style.animationDelay = (Math.random() * 10) + 's';
    particle.style.width = (Math.random() * 3 + 1) + 'px';
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
}
createParticles();

// ===== Navbar Scroll Behavior =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// ===== Mobile Menu =====
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ===== GSAP ScrollTrigger Animations =====
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Reveal animations
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
revealElements.forEach(el => {
  gsap.fromTo(el,
    { opacity: 0, y: el.classList.contains('reveal-left') ? -60 : el.classList.contains('reveal-right') ? 60 : 60, x: el.classList.contains('reveal-left') ? -60 : el.classList.contains('reveal-right') ? 60 : 0 },
    {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      }
    }
  );
});

// Service cards stagger
gsap.fromTo('.service-card',
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#services .grid',
      start: 'top 80%',
      once: true,
    }
  }
);

// Process steps stagger
gsap.fromTo('.process-step',
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.process-step',
      start: 'top 80%',
      once: true,
    }
  }
);

// Process line animation
gsap.fromTo('#process-line', {
  scaleX: 0,
  transformOrigin: 'left center',
}, {
  scaleX: 1,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '#process',
    start: 'top 75%',
    end: 'bottom 25%',
    scrub: true,
  }
});

// Tech dome fade in (removed old tech-card animation)
gsap.fromTo('#tech-dome',
  { opacity: 0, scale: 0.8 },
  {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#technologies',
      start: 'top 70%',
      once: true,
    }
  }
);

// Portfolio cards
gsap.fromTo('.portfolio-card',
  { opacity: 0, y: 60 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#portfolio .grid',
      start: 'top 80%',
      once: true,
    }
  }
);

// Team cards
gsap.fromTo('.team-card',
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#team .grid',
      start: 'top 80%',
      once: true,
    }
  }
);

// Testimonial cards
gsap.fromTo('.testimonial-card',
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#testimonials .grid',
      start: 'top 80%',
      once: true,
    }
  }
);

// Hero parallax on glow elements
gsap.to('.hero-glow', {
  y: -100,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
  }
});

gsap.to('.hero-glow-2', {
  y: 80,
  ease: 'none',
  scrollTrigger: {
    trigger: '#hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
  }
});

// ===== Smooth Scroll Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      lenis.scrollTo(target, { offset: -80, duration: 1.2 });
    }
  });
});

// ===== Back to Top Button =====
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 600) {
    backToTop.style.opacity = '1';
    backToTop.style.transform = 'translateY(0)';
  } else {
    backToTop.style.opacity = '0';
    backToTop.style.transform = 'translateY(16px)';
  }
});

backToTop.addEventListener('click', () => {
  lenis.scrollTo(0, { duration: 1.5 });
});

// ===== Contact Form =====
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('✨ Message sent successfully! We\'ll get back to you soon.');
  contactForm.reset();
});

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ===== Magnetic Hover Effect on Buttons =====
document.querySelectorAll('a[href="#contact"], a[href="#portfolio"]').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, {
      x: x * 0.2,
      y: y * 0.2,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  });
});

// ===== Text Scramble Effect on Hover =====
const logoEl = document.querySelector('nav a[href="#hero"]');
if (logoEl) {
  const originalText = logoEl.innerHTML;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  logoEl.addEventListener('mouseenter', () => {
    let iterations = 0;
    const interval = setInterval(() => {
      logoEl.innerHTML = logoEl.innerHTML.split('').map((char, index) => {
        if (char === '<' || char === '>' || char === '/' || char === 's' || char === 'p' || char === 'a' || char === 'n') {
          return char;
        }
        if (index < iterations) {
          return originalText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      }).join('');

      iterations += 1 / 3;
      if (iterations >= originalText.length) {
        clearInterval(interval);
        logoEl.innerHTML = originalText;
      }
    }, 30);
  });
}

// ===== Section highlighting in nav =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    if (window.pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-white');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('text-white');
    }
  });
});


// ===== 3D TILT CARD EFFECT WITH MOUSE TRACKING =====
/* 
 * 🎯 Mouse Tracking - Cards follow your mouse movement
 * 🔄 3D Rotation - Tilts up to 12° in X and Y axis
 * ✨ Orchid Glare - Radial gradient follows mouse with orchid color
 * 📏 Perspective - 1000px depth for realistic 3D
 * 🔍 Slight Zoom - Scales to 1.02 on hover
 * 🌊 Smooth Transition - Cubic bezier easing (0.3s)
 * 
 * Works on:
 * - Service cards only
 */
function initTiltCards() {
  // Only apply to service cards
  const cards = document.querySelectorAll('.service-card');
  
  cards.forEach(card => {
    // Create glare overlay
    const glare = document.createElement('div');
    glare.className = 'tilt-glare';
    card.appendChild(glare);
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate percentages
      const px = x / rect.width;
      const py = y / rect.height;
      
      // Calculate rotation (max 12 degrees)
      const rotateY = (px - 0.5) * 24; // -12 to +12
      const rotateX = (0.5 - py) * 24; // -12 to +12
      
      // Apply 3D transform
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Update glare position
      glare.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(218, 112, 214, 0.3), transparent 50%)`;
      glare.style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      glare.style.opacity = '0';
    });
  });
}

// ===== 3D TECH CLOUD GALLERY V2 =====
function initTechDome() {
  const container = document.getElementById('tech-sphere-v2');
  if (!container) {
    console.error('❌ Tech sphere container NOT FOUND');
    return;
  }

  console.log('🎯 Starting tech sphere initialization...');

  // Tech stack data with colored icon classes and proper colors
  const techs = [
    { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: '#339933' },
    { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#FFFFFF' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
    { name: 'npm', icon: 'fab fa-npm', color: '#CB3837' },
    { name: 'Laravel', icon: 'fab fa-laravel', color: '#FF2D20' }
  ];

  // Clear container completely
  container.innerHTML = '';
  container.style.perspective = '1200px';
  container.style.perspectiveOrigin = '50% 50%';

  // Create cloud container
  const cloud = document.createElement('div');
  cloud.id = 'tech-cloud-v2';
  cloud.style.position = 'absolute';
  cloud.style.top = '50%';
  cloud.style.left = '50%';
  cloud.style.width = '100%';
  cloud.style.height = '100%';
  cloud.style.transformStyle = 'preserve-3d';
  cloud.style.transform = 'translateX(-50%) translateY(-50%)';
  container.appendChild(cloud);

  const RADIUS = 350;
  const total = techs.length;

  console.log(`📦 Creating ${total} tech items with radius ${RADIUS}px`);

  // Create logos with proper 3D sphere distribution
  techs.forEach((tech, index) => {
    const item = document.createElement('div');
    item.className = 'tech-item-v2';
    
    // Golden angle spiral for even distribution
    const phi = Math.acos(1 - (2 * (index + 0.5)) / total);
    const theta = Math.PI * (1 + Math.sqrt(5)) * index;
    
    // Convert spherical to Cartesian coordinates
    const x = RADIUS * Math.sin(phi) * Math.cos(theta);
    const y = RADIUS * Math.sin(phi) * Math.sin(theta);
    const z = RADIUS * Math.cos(phi);
    
    console.log(`   ${index + 1}. ${tech.name}: x=${x.toFixed(0)}, y=${y.toFixed(0)}, z=${z.toFixed(0)}`);
    
    // Style the item
    item.style.position = 'absolute';
    item.style.left = '50%';
    item.style.top = '50%';
    item.style.width = '100px';
    item.style.height = '100px';
    item.style.marginLeft = '-50px';
    item.style.marginTop = '-50px';
    item.style.display = 'flex';
    item.style.flexDirection = 'column';
    item.style.alignItems = 'center';
    item.style.justifyContent = 'center';
    item.style.transformStyle = 'preserve-3d';
    item.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
    item.style.transition = 'all 0.3s ease';
    
    item.innerHTML = `
      <div style="font-size: 3.5rem; filter: drop-shadow(0 4px 20px rgba(218, 112, 214, 0.4)); transition: all 0.3s ease;">
        <i class="${tech.icon}" style="color: ${tech.color};"></i>
      </div>
      <div style="font-size: 0.75rem; font-weight: 600; color: #DA70D6; opacity: 0; transition: opacity 0.3s; margin-top: 0.5rem; background: rgba(10, 10, 10, 0.95); padding: 0.25rem 0.75rem; border-radius: 0.5rem; white-space: nowrap;">${tech.name}</div>
    `;
    
    // Hover effect
    item.addEventListener('mouseenter', () => {
      item.querySelector('div:last-child').style.opacity = '1';
      item.querySelector('i').style.filter = 'drop-shadow(0 0 30px rgba(218, 112, 214, 1))';
      item.querySelector('i').style.transform = 'scale(1.2)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.querySelector('div:last-child').style.opacity = '0';
      item.querySelector('i').style.filter = 'drop-shadow(0 4px 20px rgba(218, 112, 214, 0.4))';
      item.querySelector('i').style.transform = 'scale(1)';
    });
    
    cloud.appendChild(item);
  });

  console.log('✅ Tech sphere initialized successfully!');
  console.log(`� Container: ${container.offsetWidth}x${container.offsetHeight}px`);
  console.log(`☁️ Cloud items: ${cloud.children.length}`);

  // Auto-rotate animation
  let rotationY = 0;
  let rotationX = -15;
  let autoRotate = true;
  let animationId;

  function animate() {
    if (autoRotate) {
      rotationY += 0.25;
    }
    
    cloud.style.transform = `translateX(-50%) translateY(-50%) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    animationId = requestAnimationFrame(animate);
  }
  animate();

  console.log('🔄 Animation started');

  // Mouse interaction
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    autoRotate = false;
    previousMousePosition = { x: e.clientX, y: e.clientY };
    container.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;
      
      rotationY += deltaX * 0.5;
      rotationX -= deltaY * 0.3;
      
      rotationX = Math.max(-50, Math.min(20, rotationX));
      
      previousMousePosition = { x: e.clientX, y: e.clientY };
    }
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      container.style.cursor = 'grab';
      setTimeout(() => { autoRotate = true; }, 2000);
    }
  });
}

// ===== TECH STACK SCROLL-BASED SCALE ANIMATION =====
function initTechStackScaleAnimation() {
  const techSection = document.getElementById('technologies');
  const techContainer = document.getElementById('tech-dome');
  
  if (!techSection || !techContainer) return;
  
  function handleScroll() {
    const rect = techSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    let visibilityRatio = 0;
    
    if (rect.top <= windowHeight && rect.bottom >= 0) {
      const sectionHeight = rect.height;
      const sectionCenter = rect.top + sectionHeight / 2;
      const windowCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(sectionCenter - windowCenter);
      const maxDistance = windowHeight / 2 + sectionHeight / 2;
      
      visibilityRatio = 1 - (distanceFromCenter / maxDistance);
      visibilityRatio = Math.max(0, Math.min(1, visibilityRatio));
      visibilityRatio = visibilityRatio * visibilityRatio * (3 - 2 * visibilityRatio);
    }
    
    const minScale = 0.5;
    const maxScale = 1;
    const finalScale = minScale + (maxScale - minScale) * visibilityRatio;
    
    techContainer.style.transform = `scale(${finalScale})`;
    techContainer.style.opacity = `${0.3 + (visibilityRatio * 0.7)}`;
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initTiltCards();
  initTechDome();
  initTechStackScaleAnimation();
});

// ===== GOOGLE-STYLE REVIEWS SYSTEM =====
(function () {
  const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID_HERE';
  const STORAGE_KEY = 'sb_google_reviews';
  const LIKES_STORAGE_KEY = 'sb_review_likes';

  const seedReviews = [
    {
      id: 'seed1',
      name: 'David Mitchell',
      picture: 'http://static.photos/people/200x200/10',
      rating: 5,
      text: "SYSTEM BUILDERS is a young team with fresh ideas. They delivered our website on time and were very responsive to feedback.",
      date: '2026-03-14',
      likes: 4
    },
    {
      id: 'seed2',
      name: 'Lisa Rodriguez',
      picture: 'http://static.photos/people/200x200/20',
      rating: 5,
      text: "Great communication and attention to detail. Highly recommend for small businesses!",
      date: '2026-02-02',
      likes: 2
    },
    {
      id: 'seed3',
      name: 'James Park',
      picture: 'http://static.photos/people/200x200/30',
      rating: 5,
      text: "Affordable, professional, and eager to help. Their enthusiasm is contagious!",
      date: '2026-01-19',
      likes: 6
    }
  ];

  let currentUser = null;
  let selectedRating = 5;

  function getReviews() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [...seedReviews];
    try {
      return JSON.parse(stored);
    } catch {
      return [...seedReviews];
    }
  }

  function saveReviews(reviews) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    // ---- BACKEND HOOK ----
    // To make reviews visible to ALL visitors (not just this browser),
    // replace this function to POST to Firebase/Supabase/your API instead.
  }

  function getLikedReviewIds() {
    const stored = localStorage.getItem(LIKES_STORAGE_KEY);
    if (!stored) return [];
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }

  function saveLikedReviewIds(ids) {
    localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(ids));
  }

  function getUserLikeKey(user) {
    return user?.email ? `review-like:${user.email}` : null;
  }

  function starsHTML(rating, size = 'review-stars') {
    let html = `<div class="${size}">`;
    for (let i = 1; i <= 5; i++) {
      html += `<i data-lucide="star" class="star-icon ${i <= rating ? 'filled' : ''}"></i>`;
    }
    html += `</div>`;
    return html;
  }

  function timeAgo(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days <= 0) return 'Today';
    if (days === 1) return '1 day ago';
    if (days < 30) return `${days} days ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months > 1 ? 's' : ''} ago`;
    const years = Math.floor(months / 12);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }

  function renderReviews() {
    const reviews = getReviews();
    const grid = document.getElementById('reviews-grid');
    if (!grid) return;

    grid.innerHTML = reviews
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((r) => `
        <div class="review-card">
          <div class="review-card-header">
            <img class="review-avatar" src="${r.picture}" alt="${r.name}" />
            <div>
              <div class="review-name-row">
                <span class="font-semibold text-white">${r.name}</span>
              </div>
              <span class="review-verified-badge">
                <i data-lucide="badge-check" style="width:12px;height:12px;"></i> Verified Google Account
              </span>
            </div>
          </div>
          ${starsHTML(r.rating)}
          <p class="review-text">${r.text}</p>
          <div class="review-footer">
            <span class="review-date">${timeAgo(r.date)}</span>
            <div class="review-actions">
              <button class="review-action-btn" onclick="window.reportReview('${r.id}')">
                <i data-lucide="flag"></i> Report
              </button>
            </div>
          </div>
        </div>
      `)
      .join('');

    // Average rating
    const avg = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 5;
    document.getElementById('review-average').textContent = avg.toFixed(1);
    document.getElementById('review-average-stars').innerHTML = `<div class="flex gap-0.5">${starsHTML(Math.round(avg), '').replace('<div class="">', '').replace('</div>','')}</div>`;
    document.getElementById('review-count').textContent = `${reviews.length} review${reviews.length !== 1 ? 's' : ''}`;

    if (window.lucide) lucide.createIcons();
  }

  window.likeReview = function (id) {
    if (!currentUser) {
      showToast('Please sign in with Google to like a review.');
      return;
    }

    const reviews = getReviews();
    const review = reviews.find((r) => r.id === id);
    if (!review) return;

    const likeKey = getUserLikeKey(currentUser);
    const likedReviewIds = getLikedReviewIds();
    const userLikedIds = likedReviewIds.filter((item) => item.startsWith(`${likeKey}:`));
    const alreadyLiked = userLikedIds.includes(`${likeKey}:${id}`);

    if (alreadyLiked) {
      showToast('You have already liked this review with this Google account.');
      return;
    }

    review.likes = (review.likes || 0) + 1;
    saveReviews(reviews);
    saveLikedReviewIds([...likedReviewIds, `${likeKey}:${id}`]);
    renderReviews();
  };

  window.reportReview = function (id) {
    if (confirm('Report this review as inappropriate?')) {
      showToast('Review reported. Our team will look into it.');
    }
  };

  function renderStarInput() {
    const container = document.getElementById('review-star-input');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('i');
      star.setAttribute('data-lucide', 'star');
      star.className = `star-icon ${i <= selectedRating ? 'filled' : ''}`;
      star.addEventListener('click', () => {
        selectedRating = i;
        renderStarInput();
      });
      container.appendChild(star);
    }
    if (window.lucide) lucide.createIcons();
  }

  function decodeJwt(token) {
    const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(decodeURIComponent(escape(atob(base64))));
  }

  function handleGoogleSignIn(response) {
    const payload = decodeJwt(response.credential);
    currentUser = {
      name: payload.name,
      picture: payload.picture,
      email: payload.email
    };

    document.getElementById('review-signed-out').classList.add('hidden');
    document.getElementById('review-signed-in').classList.remove('hidden');
    document.getElementById('review-user-avatar').src = currentUser.picture;
    document.getElementById('review-user-name').textContent = currentUser.name;

    selectedRating = 5;
    renderStarInput();
  }

  function initGoogleSignIn() {
    if (!window.google || !google.accounts) {
      // Retry shortly if the GSI script hasn't loaded yet
      setTimeout(initGoogleSignIn, 300);
      return;
    }
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleSignIn
    });
    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'filled_black', size: 'large', shape: 'pill', text: 'signin_with' }
    );
  }

  function initReviewSystem() {
    renderReviews();
    initGoogleSignIn();

    document.getElementById('review-signout-btn')?.addEventListener('click', () => {
      currentUser = null;
      document.getElementById('review-signed-in').classList.add('hidden');
      document.getElementById('review-signed-out').classList.remove('hidden');
      if (window.google?.accounts) google.accounts.id.disableAutoSelect();
    });

    document.getElementById('review-submit-btn')?.addEventListener('click', () => {
      const textEl = document.getElementById('review-text-input');
      const text = textEl.value.trim();
      if (!currentUser) return;
      if (!text) {
        showToast('Please write a review before posting.');
        return;
      }

      const reviews = getReviews();
      reviews.push({
        id: 'r_' + Date.now(),
        name: currentUser.name,
        picture: currentUser.picture,
        rating: selectedRating,
        text,
        date: new Date().toISOString(),
        likes: 0
      });
      saveReviews(reviews);
      renderReviews();

      textEl.value = '';
      selectedRating = 5;
      renderStarInput();
      showToast('✨ Your review has been posted!');
    });
  }

  document.addEventListener('DOMContentLoaded', initReviewSystem);
})();