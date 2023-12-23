// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// });
gsap.from(".navpart1 h1",{
   y:-100,
   opacity:0,
   duration:1,
})
gsap.from(".navpart1 h4",{
    y:-100,
    opacity:0,
    stagger:0.2,
    duration:1,
    delay:0.5
 })
 gsap.from(".navpart2 .buynow",{
    y:-100,
    opacity:0,
    delay:1.6
 })
 gsap.from(".hed span",{
    y:-100,
    scale:3,
    opacity:0,
    delay:1.8
 })
 gsap.from(".logo",{
    y:100,
    opacity:0,
    delay:2
 })

 var card = document.querySelector(".card-1")

  card.innerHTML.transForm = "translate(120deg)"