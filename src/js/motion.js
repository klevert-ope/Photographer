import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ExpoScaleEase, RoughEase, SlowMo);

//header motion
gsap.from(".name", {opacity: 0, y: -10, duration: 4, ease: 'power2'});
gsap.from(".tag", {opacity: 0, x: -10, duration: 4.5, ease: 'power2'});
gsap.from(".nav", {opacity: 0, x: 10, duration: 4.5, ease: 'power2'});

//footer motion
gsap.from(".symbol", {opacity: 0, y: 10, duration: 3, ease: 'power2'});
gsap.from(".brandmotto", {opacity: 0, x: -10, duration: 3.5, ease: 'power2'});
gsap.from(".social", {opacity: 0, x: -10, duration: 4.8, ease: 'power2'});
gsap.from(".contact", {opacity: 0, x: -10, duration: 4.8, ease: 'power2'});

//showcase motion
gsap.from(".reveal", {opacity: 0, x: -80, duration: 5.8, ease: 'power2'});

// select elements to reveal
const elements = document.querySelectorAll('.revealscroll');

// set initial y position below viewport
gsap.set(elements, { y: 10});

// reveal elements when they come into view
elements.forEach(el => {
  gsap.to(el, {
    y: -10,
    duration: 1.5,
    ease: "elastic.out(1, 0.3)",
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
    },
  });
});




