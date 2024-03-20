// console.log("test")
// gsap.registerPlugin(ScrollTrigger);
// console.log("test2")
// gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'100vw', height:'100%', top:0, left:'50%', x:'-50%'})
// gsap.set('.scrollDist', {width:'100%', height:'200%'})
// gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
//     .fromTo('.sky', {y:0},{y:-200}, 0)
//     .fromTo('.cloud1', {y:100},{y:-800}, 0)
//     .fromTo('.cloud2', {y:-150},{y:-500}, 0)
//     .fromTo('.cloud3', {y:-50},{y:-650}, 0)
//     .fromTo('.mountBg', {y:-10},{y:-100}, 0)
//     .fromTo('.mountMg', {y:-30},{y:-250}, 0)
//     .fromTo('.mountFg', {y:-50},{y:-600}, 0)

// $('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
// $('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
// $('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); }) 
// console.log("test3")

console.log("test");

gsap.registerPlugin(ScrollTrigger);
console.log("test2");

gsap.set('.main', {
  position: 'fixed',
  background: '#fff',
  width: '100%',
  maxWidth: '100vw',
  height: '100%',
  top: 0,
  left: '50%',
  x: '-50%'
});

gsap.set('.scrollDist', {
  width: '100%',
  height: '200%'
});

gsap.timeline({
    scrollTrigger: {
      trigger: '.scrollDist',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1
    }
  })
  .fromTo('.sky', {
    y: 0
  }, {
    y: -200
  }, 0)
  .fromTo('.cloud1', {
    y: 100
  }, {
    y: -800
  }, 0)
  .fromTo('.cloud2', {
    y: -150
  }, {
    y: -500
  }, 0)
  .fromTo('.cloud3', {
    y: -50
  }, {
    y: -650
  }, 0)
  .fromTo('.mountBg', {
    y: -10
  }, {
    y: -100
  }, 0)
  .fromTo('.mountMg', {
    y: -30
  }, {
    y: -250
  }, 0)
  .fromTo('.mountFg', {
    y: -50
  }, {
    y: -600
  }, 0);

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

console.log("test3");
