import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      name:"Weaam Nasser",
      role: "Front-End Developer",
      home: "Home",
      projects: "Projects",
      contact: "Contact",
      getInTouch: "Get in touch",
      
      // Footer
      footerDesc: "Building responsive, clean, and user-friendly web interfaces.",
      quickLinks: "Quick Links",
      connect: "Connect",
      allRights: "All rights reserved.",

      // Home Page
      availableForWork: "Available for work",
      heroBio: "Computer Science Student & Front-End Developer, building responsive, user-friendly web applications using React.js, Modern JavaScript, and CSS.",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
      aboutMe: "About Me",
      aboutTitle: "Computer Science Student & Front-End Developer",
      aboutText1: "I’m a Computer Science student at Ain Shams University with a strong focus on Web Development. I specialize in building responsive, modern user interfaces using React, JavaScript, Bootstrap, and Tailwind CSS.",
      aboutText2: "Beyond writing clean and scalable code, I am an active member in student activities—coordinating events and technical sessions, while collaborating on building real-world web applications and community projects.",
      asuFaculty: "Faculty of Computers & Information",
      oscRole: "Frontend Committee Member",
      reactStack: "Router & Modern Stack",
      pixelPerfect: "Pixel-Perfect & Responsive UI",
      techStack: "Tech Stack",
      techTitle: "Technologies & Tools I Use",
      techDesc: "Technologies I work with to build scalable and modern web interfaces.",

      // Contact Page
      getInTouchTitle: "Get In Touch",
      letsWorkTogether: "Let's Work Together",
      contactDesc: "Have a question, project proposal, or just want to say hi? Feel free to reach out to me anytime!",
      contactInfoTitle: "Contact Information",
      contactInfoDesc: "I’m always open to discussing new web development opportunities, creative ideas, or technical collaborations.",
      email: "Email",
      location: "Location",
      locationVal: "Cairo, Egypt (Ain Shams University)",
      connectWithMe: "Connect with me",
      sendMessageTitle: "Send a Message",
      yourName: "Your Name",
      yourEmail: "Your Email",
      subject: "Subject",
      message: "Message",
      sendMsgBtn: "Send Message",
      successAlert: "Thank you for reaching out! Your message has been sent.",

      // Projects Page
      myWork: "My Work",
      featuredProjects: "Featured Projects",
      projectsDesc: "A showcase of web applications and interactive front-end user interfaces I have built, emphasizing clean code, responsiveness, and functional UX.",
      githubCode: "GitHub Code",
      liveDemo: "Live Demo",
      featured: "Featured"
    }
  },
  ar: {
    translation: {
      // Navbar
      name:"وئام ناصر",
      
      role: "مطور واجهات أمامية",
      home: "الرئيسية",
      projects: "المشاريع",
      contact: "تواصل معي",
      getInTouch: "تواصل معي",

      // Footer
      footerDesc: "بناء واجهات ويب متجاوبة، نظيفة، وسهلة الاستخدام.",
      quickLinks: "روابط سريعة",
      connect: "التواصل",
      allRights: "جميع الحقوق محفوظة.",

      // Home Page
      availableForWork: "متاح للعمل",
      heroBio: "طالبة حاسبات ومعلومات ومطورة واجهات أمامية، أقوم بناء تطبيقات وتطوير واجهات مستخدم متجاوبة باستخدام React.js و JavaScript الحديثة و CSS.",
      contactMe: "اتصل بي",
      downloadCv: "تحميل السيرة الذاتية",
      aboutMe: "عني",
      aboutTitle: "طالبة حاسبات ومعلومات ومطورة واجهات أمامية",
      aboutText1: "أنا طالبة في كلية الحاسبات والمعلومات جامعة عين Shams ولدي شغف كبير بتطوير الويب. أتاخص في بناء واجهات مستخدم حديثة ومتجاوبة باستخدام React و JavaScript و Bootstrap و Tailwind CSS.",
      aboutText2: "إلى جانب كتابة كود نظيف وقابل للتطوير، أنا عضوة نشطة في الأنشطة الطلابية — أقوم بالتنسيق للفعاليات والجلسات التقنية، والمشاركة في بناء تطبيقات ويب واقعية ومشاريع مجتمعية.",
      asuFaculty: "كلية الحاسبات والمعلومات",
      oscRole: "عضوة لجنة الواجهات الأمامية",
      reactStack: "Router & Modern Stack",
      pixelPerfect: "واجهة متجاوبة ودقيقة",
      techStack: "التقنيات المستخدمة",
      techTitle: "التقنيات والأدوات التي أستخدمها",
      techDesc: "التقنيات التي أعمل بها لبناء واجهات ويب قابلة للتطوير وحديثة.",

      // Contact Page
      getInTouchTitle: "ابقى على تواصل",
      letsWorkTogether: "لنعمل معاً",
      contactDesc: "لديك سؤال، مقترح مشروع، أو تريد فقط إلقاء التحية؟ لا تتردد في التواصل معي في أي وقت!",
      contactInfoTitle: "معلومات التواصل",
      contactInfoDesc: "أنا دائماً منفتحة لمناقشة فرص تطوير الويب الجديدة، الأفكار الإبداعية، أو التعاون التقني.",
      email: "البريد الإلكتروني",
      location: "الموقع",
      locationVal: "القاهرة، مصر (جامعة عين شمس)",
      connectWithMe: "تواصل معي عبر",
      sendMessageTitle: "إرسال رسالة",
      yourName: "اسمك",
      yourEmail: "بريدك الإلكتروني",
      subject: "الموضوع",
      message: "الرسالة",
      sendMsgBtn: "إرسال الرسالة",
      successAlert: "شكراً لتواصلك معنا! تم إرسال رسالتك بنجاح.",

      // Projects Page
      myWork: "أعمالي",
      featuredProjects: "المشاريع المميزة",
      projectsDesc: "عرض لتطبيقات الويب وواجهات المستخدم الأمامية التفاعلية التي قمت بتطويرها، مع التركيز على الكود النظيف، التجاوب، وتجربة المستخدم.",
      githubCode: "كود الجيت هاب",
      liveDemo: "معاينة حية",
      featured: "مميز"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;