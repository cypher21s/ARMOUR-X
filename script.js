// function loco(){
//     gsap.registerPlugin(ScrollTrigger);

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,

//   // for tablet smooth
//   tablet: { smooth: true },

//   // for mobile
//   smartphone: { smooth: true }
// });
// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   }

//   // follwoing line is not required to work pinning on touch screen

//   /* pinType: document.querySelector("#main").style.transform
//     ? "transform"
//     : "fixed"*/
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// ScrollTrigger.refresh();

// }
// loco();
// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)
function animateto(){
    var tl=gsap.timeline({scrollTrigger:{
    trigger:".page5",
    start:"0% 95%", 
    end:"50% 50%",
    scrub:true,
    // markers:true,
}}) 
tl.to(".gun img",{
    top:"110%",
    left:"6%"
})}
animateto();
function heading(){
    var t2 = gsap.timeline({scrollTrigger:{
    trigger:"#page4",
    start:"40% 50%",
    end:"80% 50%",
    scrub:true,
    // markers:true,
}})
t2.to(".gun h1",{
    rotateY : "40deg",
    opacity: "0",
})}
heading();
function animate2(){    
var t3 = gsap.timeline({scrollTrigger:{
        trigger:".page3",
        start:"0% 50%",
        end: "120% 50%",
        scrub:true,
        // markers: true,
    }})
    t3.from(".page3 #p1",{
        top:"120%",
        left:"-50%",
        opacity:"1",
    })}
animate2()
function animate3(){
var t4 = gsap.timeline({scrollTrigger:{
    trigger:".page7",
    start:"0% 50%",
    end: "50% 50%",
    scrub :true,
    // markers: true,
}})
    t4.to(".right1 img",{
        top:"630%",
        right:"2%"
    })
}
animate3()
