//function scrollAnimation() {}
function scrollAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // ✅ Fix: Manually Refresh After Initialization
  setTimeout(() => {
    locoScroll.update();
    ScrollTrigger.refresh();
  }, 500);

  // ✅ Fix: Force Repaint to Prevent Scroll Lock
  document.body.style.display = "none";
  document.body.offsetHeight; // Force reflow
  document.body.style.display = "";

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function loadingAnimation() {
  let tl = gsap.timeline();
  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    delay: 0.5,
    duration: 0.6,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      let h5timer = document.querySelector("#line1-part1 h5");
      let grow = 0;
      let int = setInterval(function () {
        grow++;
        if (grow === 100) {
          clearInterval(int);
        }
        h5timer.innerHTML = grow;
      }, 35);
    },
  });
  tl.to(".line h2", {
    AnimationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 2,
  });
  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    opacity: 1,
    ease: Power4,
    duration: 0.5,
  });

  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1 h1, #hero2 h1,#hero3 h2,#hero4 h1", {
    y: 140,
    stagger: 0.2,
  });
  tl.from(
    "#hero1, #page2",
    {
      opacity: 0,
    },
    "-=1.2",
  );
}
function cursorAnimation() {
  document.addEventListener("mousemove", (ev) => {
    gsap.to("#crsr", {
      left: ev.x,
      top: ev.y,
    });
  });
  Shery.makeMagnet("#nav-part2 h4", {});
}
scrollAnimation();
loadingAnimation();
cursorAnimation();
