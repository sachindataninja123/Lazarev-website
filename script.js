
function page2Anim() {
  const cursor = document.querySelector(".cursor");
  const page2 = document.querySelector(".page2");

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  const speed = 0.2; // smaller = smoother

  page2.addEventListener("mousemove", (e) => {
    const rect = page2.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  function animate() {
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
    requestAnimationFrame(animate);
  }

  animate();
}
page2Anim();

function videoAnim() {
  const sections = document.querySelectorAll(".sec-right");
  sections.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", () => {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].pause();
      elem.childNodes[3].load();
    });
  });
}

videoAnim();

function boxAnim() {
  gsap.from(".btm-part2 h5", {
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".btm-part2",
    scroller: "body",
    start: "top 80%",
    end: "top 10%",
    scrub: true,
  },
});
gsap.from(".btm-part3 h5", {
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".btm-part3",
    scroller: "body",
    start: "top 80%",
    end: "top 10%",
    scrub: true,
  },
});
gsap.from(".btm-part4 h5", {
  x: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".btm-part4",
    scroller: "body",
    start: "top 80%",
    end: "top 10%",
    scrub: true,
  },
});

}
boxAnim();

var tl= gsap.timeline();

tl.from(".page1",{
 opacity:0,
 duration:0.2,
 delay:0.2,
})
tl.from(".page1",{
  transform:"scaleX(0.7) scaleY(0.2) translateY(30%)",
  borderRadius:"150px",
  duration:2,
  ease:"expo.out",
})
tl.from("nav",{
  opacity:0,
  delay:-0.2,
})
tl.from(".page1 h3, .page3 h1, .page3 h3",{
  opacity:0,
  delay:0.5,
  stagger:0.3,
})