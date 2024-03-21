gsap.registerPlugin(ScrollTrigger);

gsap.set('.main', {
  position: 'fixed',
  background: '#fff',
  width: '100%',
  maxWidth: '100vw',
  height: '100%',
  top: 0,
  left: '50%',
  x: '-50%',
  marginTop: '-20px'
});

gsap.set('.scrollDist', {
  width: '100%',
  height: '200vh' // Adjust this to 200vh to represent two full viewport heights
});

gsap.timeline({
  scrollTrigger: {
    trigger: '.scrollDist',
    start: 'top top',
    end: '200vh bottom', // Change '150% bottom' to '200vh bottom' to stop scrolling after the `.scrollDist` has been scrolled
    scrub: 1
  }
})
.to('.main', {
  y: '+=0', // This animation does nothing but it's necessary to trigger the ScrollTrigger when `.main` is scrolled
  ease: 'none',
  marginTop: '-20px'
});

document.getElementById('arrowBtn').addEventListener('mouseenter', function(e) {
  gsap.to('.arrow', {
    y: 10,
    duration: 0.8,
    ease: 'back.inOut(3)',
    overwrite: 'auto'
  });
});

document.getElementById('arrowBtn').addEventListener('mouseleave', function(e) {
  gsap.to('.arrow', {
    y: 0,
    duration: 0.5,
    ease: 'power3.out',
    overwrite: 'auto'
  });
});

document.getElementById('arrowBtn').addEventListener('click', function(e) {
  gsap.to(window, {
    scrollTo: innerHeight,
    duration: 1.5,
    ease: 'power1.inOut'
  });
});
