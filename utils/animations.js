import gsap from "gsap";

const tl1 = gsap.timeline();

const duration = 0.7;

export function fadeInLeft(ref) {
  tl1.fromTo(
    ref,
    { duration, opacity: 0, x: 50, ease: "power2" },
    { duration, opacity: 1, x: 0, ease: "power2" }
  );
}

export function fadeInLeftDelay(ref) {
  tl1.fromTo(
    ref,
    { duration, opacity: 0, x: 50, ease: "power2" },
    {
      duration,
      opacity: 1,
      x: 0,
      ease: "power2",
    }
  );
}
