document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      mobileToggle.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });
  }

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // observer.unobserve(entry.target); // keep observing if we want it to hide/show repeatedly, but usually we unobserve
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Optional: Close all others
      faqItems.forEach(faq => faq.classList.remove('active'));
      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
  // Standard Carousel Logic
  const track = document.getElementById('serviceCarousel');
  const viewport = document.querySelector('.carousel-viewport');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  if (viewport && track) {
    const cards = Array.from(track.children);
    
    // Clone sets for infinite illusion
    cards.slice().reverse().forEach(card => track.prepend(card.cloneNode(true)));
    cards.forEach(card => track.appendChild(card.cloneNode(true)));

    // 350px card + 32px standard gap = 382px per shift
    const cardScrollWidth = 382;
    const setWidth = cards.length * cardScrollWidth;
    let autoScrollInterval;

    // Shift to actual middle set on init
    setTimeout(() => {
      viewport.scrollTo({ left: setWidth, behavior: 'auto' });
    }, 50);

    const checkAndJump = () => {
      // Temporarily disable snapping to allow an instant invisible teleport
      const originalSnap = viewport.style.scrollSnapType;
      viewport.style.scrollSnapType = 'none';
      
      // If we are dangerously close to the left boundary
      if (viewport.scrollLeft <= cardScrollWidth) {
        viewport.scrollTo({ left: viewport.scrollLeft + setWidth, behavior: 'auto' });
      }
      // If we are dangerously close to the right boundary
      else if (viewport.scrollLeft >= setWidth * 2 - viewport.clientWidth) {
        viewport.scrollTo({ left: viewport.scrollLeft - setWidth, behavior: 'auto' });
      }
      
      // Restore snapping
      // using setTimeout so it applies after the DOM repaint of the scroll
      setTimeout(() => {
          viewport.style.scrollSnapType = originalSnap || 'x mandatory';
      }, 10);
    };

    const startAutoScroll = () => {
      autoScrollInterval = setInterval(() => {
        checkAndJump();
        setTimeout(() => {
          viewport.scrollBy({ left: cardScrollWidth, behavior: 'smooth' });
        }, 50);
      }, 3500);
    };

    const stopAutoScroll = () => {
      clearInterval(autoScrollInterval);
    };

    startAutoScroll();

    viewport.addEventListener('mouseenter', stopAutoScroll);
    viewport.addEventListener('mouseleave', startAutoScroll);
    viewport.addEventListener('touchstart', stopAutoScroll, {passive: true});
    viewport.addEventListener('touchend', startAutoScroll);
    
    viewport.addEventListener('scroll', () => {
       // Manual swiping can also trigger a jump if they swipe extremely fast past the boundary
       if (viewport.scrollLeft <= 50 || viewport.scrollLeft >= track.scrollWidth - viewport.clientWidth - 50) {
           checkAndJump();
       }
    }, {passive: true});

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        stopAutoScroll();
        checkAndJump();
        setTimeout(() => {
          viewport.scrollBy({ left: -cardScrollWidth, behavior: 'smooth' });
          startAutoScroll();
        }, 30);
      });
      nextBtn.addEventListener('click', () => {
        stopAutoScroll();
        checkAndJump();
        setTimeout(() => {
          viewport.scrollBy({ left: cardScrollWidth, behavior: 'smooth' });
          startAutoScroll();
        }, 30);
      });
    }
  }


  // 3D Tilt Effect on Service Cards (Re-query after cloning)
  const cards = document.querySelectorAll('.card-3d');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10; 
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    });
    
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none'; 
    });
  });



  // INFINITE AUTO-SCROLL TRUSTINDEX REVIEWS CAROUSEL
  const tiViewport = document.querySelector('.ti-reviews-track');
  const tiPrevBtn = document.querySelector('.ti-carousel-btn.prev');
  const tiNextBtn = document.querySelector('.ti-carousel-btn.next');

  if (tiViewport) {
    const tiCards = Array.from(tiViewport.children);
    
    // Clone sets for infinite illusion
    tiCards.slice().reverse().forEach(card => tiViewport.prepend(card.cloneNode(true)));
    tiCards.forEach(card => tiViewport.appendChild(card.cloneNode(true)));

    let tiAutoScrollInterval;

    const getCardScrollWidth = () => {
        const gap = parseInt(window.getComputedStyle(tiViewport).gap) || 16;
        return tiViewport.children[0].offsetWidth + gap;
    };

    // Shift to actual middle set on init
    setTimeout(() => {
        const cardWidth = getCardScrollWidth();
        const setWidth = tiCards.length * cardWidth;
        tiViewport.scrollTo({ left: setWidth, behavior: 'auto' });
    }, 100);

    const checkAndJumpTI = () => {
      const cardWidth = getCardScrollWidth();
      const setWidth = tiCards.length * cardWidth;
      
      const originalSnap = tiViewport.style.scrollSnapType;
      tiViewport.style.scrollSnapType = 'none';
      
      if (tiViewport.scrollLeft <= cardWidth) {
        tiViewport.scrollTo({ left: tiViewport.scrollLeft + setWidth, behavior: 'auto' });
      }
      else if (tiViewport.scrollLeft >= setWidth * 2 - tiViewport.clientWidth) {
        tiViewport.scrollTo({ left: tiViewport.scrollLeft - setWidth, behavior: 'auto' });
      }
      
      setTimeout(() => {
          tiViewport.style.scrollSnapType = originalSnap || 'x mandatory';
      }, 10);
    };

    const startAutoScrollTI = () => {
      tiAutoScrollInterval = setInterval(() => {
        checkAndJumpTI();
        setTimeout(() => {
          tiViewport.scrollBy({ left: getCardScrollWidth(), behavior: 'smooth' });
        }, 50);
      }, 3500);
    };

    const stopAutoScrollTI = () => {
      clearInterval(tiAutoScrollInterval);
    };

    startAutoScrollTI();

    tiViewport.addEventListener('mouseenter', stopAutoScrollTI);
    tiViewport.addEventListener('mouseleave', startAutoScrollTI);
    tiViewport.addEventListener('touchstart', stopAutoScrollTI, {passive: true});
    tiViewport.addEventListener('touchend', startAutoScrollTI);
    
    tiViewport.addEventListener('scroll', () => {
       if (tiViewport.scrollLeft <= 50 || tiViewport.scrollLeft >= tiViewport.scrollWidth - tiViewport.clientWidth - 50) {
           checkAndJumpTI();
       }
    }, {passive: true});

    if (tiPrevBtn && tiNextBtn) {
      tiPrevBtn.addEventListener('click', () => {
        stopAutoScrollTI();
        checkAndJumpTI();
        setTimeout(() => {
          tiViewport.scrollBy({ left: -getCardScrollWidth(), behavior: 'smooth' });
          startAutoScrollTI();
        }, 30);
      });
      tiNextBtn.addEventListener('click', () => {
        stopAutoScrollTI();
        checkAndJumpTI();
        setTimeout(() => {
          tiViewport.scrollBy({ left: getCardScrollWidth(), behavior: 'smooth' });
          startAutoScrollTI();
        }, 30);
      });
    }
  }

  // Typewriter Effect
  const typewriterText = document.querySelector('.typewriter');
  if (typewriterText) {
    const dataPhrases = typewriterText.getAttribute('data-phrases');
    const phrases = dataPhrases ? JSON.parse(dataPhrases) : ["Expert Carpet Care.", "Pristine Perfection.", "Flawless Details.", "Eco-Friendly Cleans."];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 40 : 120;

      if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    }
    
    setTimeout(type, 1000);
  }
});
