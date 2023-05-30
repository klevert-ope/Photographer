import { gsap } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(
  ScrollTrigger,
  ScrollToPlugin,
  ExpoScaleEase,
  RoughEase,
  SlowMo
);

//header motion
gsap.fromTo(
  ".name",
  { opacity: 0, y: -10 },
  { opacity: 1, y: 0, duration: 2, ease: "circ.in" }
);
gsap.fromTo(
  ".tag",
  { opacity: 0, x: -10 },
  { opacity: 1, x: 0, duration: 2, ease: "circ.in" }
);
gsap.fromTo(
  ".nav",
  { opacity: 0, x: 10 },
  { opacity: 1, x: 0, duration: 2, ease: "circ.in" }
);

//showcase motion
gsap.fromTo(
  ".reveal",
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 3, ease: "circ.in" }
);

gsap.fromTo(".scroll-down", { opacity: 0 }, { opacity: 1, ease: "circ.in" });

// select elements to reveal
const elements = document.querySelectorAll(".revealscroll");

// reveal elements when they come into view
elements.forEach((el) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 50 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "circ.in",
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
      },
    }
  );
});
