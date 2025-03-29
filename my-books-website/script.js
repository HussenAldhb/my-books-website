// تفعيل ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// استخدام حدث "load" لضمان تحميل كل الموارد قبل بدء التحريك
window.addEventListener('load', function() {
  // 1. تأثير الظهور عند التمرير باستخدام GSAP
  const elements = document.querySelectorAll('.animated');
  
  elements.forEach(element => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top bottom", // تعديل نقطة البداية لتضمن تشغيل الأنيميشن عند دخول العنصر الشاشة
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });
});

// 2. تأثير التمرير فوق العناصر (الكتب)
const books = document.querySelectorAll('.book');
books.forEach(book => {
  book.addEventListener('mouseenter', () => {
    gsap.to(book, {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(52, 152, 219, 0.7)",
      duration: 0.3
    });
  });
  book.addEventListener('mouseleave', () => {
    gsap.to(book, {
      scale: 1,
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
      duration: 0.3
    });
  });
});

// 3. تأثير التمرير فوق الروابط
const links = document.querySelectorAll('.book a, .social-links a');
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    gsap.to(link, {
      scale: 1.1,
      boxShadow: "0 0 15px rgba(52, 152, 219, 0.7)",
      duration: 0.3
    });
  });
  link.addEventListener('mouseleave', () => {
    gsap.to(link, {
      scale: 1,
      boxShadow: "none",
      duration: 0.3
    });
  });
});

// 4. إضافة خلفية جسيمات متحركة باستخدام particles.js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
