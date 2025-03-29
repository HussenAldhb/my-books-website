// تفعيل ScrollTrigger الخاص بـ GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animated");

  // تأثير ظهور بسيط (fade-in) مع حركة طفيفة عمودية (20px)
  animatedElements.forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // تبسيط تأثير الـ hover على الكتب
  const books = document.querySelectorAll(".book");
  books.forEach((book) => {
    book.addEventListener("mouseenter", () => {
      gsap.to(book, {
        scale: 1.02,
        boxShadow: "0 0 10px rgba(52, 152, 219, 0.5)",
        duration: 0.2,
      });
    });
    book.addEventListener("mouseleave", () => {
      gsap.to(book, { scale: 1, boxShadow: "none", duration: 0.2 });
    });
  });
});

// تفعيل Particles.js لخلفية الجسيمات المتحركة
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5
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
      "speed": 3
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  },
  "retina_detect": true
});
