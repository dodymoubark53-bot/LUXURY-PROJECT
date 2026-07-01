import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimations = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.gsap-reveal');
    sections.forEach((section) => {
      const children = section.children;
      gsap.fromTo(
        children,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    const parallaxEls = document.querySelectorAll('.gsap-parallax');
    parallaxEls.forEach((el) => {
      gsap.to(el, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    const counters = document.querySelectorAll('.gsap-count');
    counters.forEach((counter) => {
      const target = parseInt(counter.dataset.count) || 0;
      ScrollTrigger.create({
        trigger: counter,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(counter, {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            onUpdate: function () {
              counter.innerText = Math.round(counter.innerText);
            },
          });
        },
        once: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
};

export default useScrollAnimations;
