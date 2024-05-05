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
  height: '120vh' // Adjust this to 200vh to represent two full viewport heights
});

gsap.timeline({
  scrollTrigger: {
    trigger: '.scrollDist',
    start: 'top top',
    end: '120vh bottom', // Change '150% bottom' to '200vh bottom' to stop scrolling after the `.scrollDist` has been scrolled
    scrub: 1
  }
})
.to('.main', {
  y: '+=0', // This animation does nothing but it's necessary to trigger the ScrollTrigger when `.main` is scrolled
  ease: 'none',
  marginTop: '-20px'
});



