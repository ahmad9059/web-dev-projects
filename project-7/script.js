let tl = gsap.timeline();

tl.from("#nav h3", {
  y: -40,
  opacity: 0,
  deplay: 0.4,
  duration: 0.8,
  stagger: 0.3,
});

tl.from("#footer h4", {
  y: 40,
  opacity: 0,
  deplay: 0.4,
  duration: 0.8,
  stagger: 0.3,
});
tl.from("#footer h5", {
  y: 40,
  opacity: 0,
  deplay: 0.4,
  duration: 0.8,
  stagger: 0.3,
});

tl.from("#main h1", {
  x: -500,
  opacity: 0,
  duration: 0.9,
  stagger: 0.4,
});

tl.from("img", {
  x: 100,
  rotate: 45,
  opacity: 0,
  duration: 0.9,
  stagger: 0.8,
});
