function typeEffect(elementId, speed) {
    let element = document.getElementById(elementId);
    let text = element.innerHTML;
    element.innerHTML = "";
    
    let i = 0;
    let timer = setInterval(function() {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }
  
  typeEffect("info-text-h3", 50);

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  const scrollBtn = document.querySelector(".scroll-top");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });


  const navbar = document.querySelector('.navbar');
  const aboutSection = document.querySelector('#about');
  
  window.addEventListener('scroll', () => {
    if (window.matchMedia("(max-width: 360px)").matches) {
      // Pour les écrans de petite taille (max-width: 360px)
      if (window.scrollY > aboutSection.offsetTop - 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    } else if (window.matchMedia("(max-width: 768px)").matches) {
      // Pour les écrans de petite taille (max-width: 768px)
      if (window.scrollY > aboutSection.offsetTop - 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
      // Pour les écrans de taille moyenne (max-width: 1024px)
      if (window.scrollY > aboutSection.offsetTop - 150) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    } else {
      // Pour les écrans de grande taille (min-width: 1024px)
      if (window.scrollY > aboutSection.offsetTop - 200) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });
