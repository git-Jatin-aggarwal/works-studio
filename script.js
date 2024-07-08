const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var tl = gsap.timeline()

// tl.to("#yellow1",{
//     top:"-100%",
//     delay: 0.5,
//     duration: 0.5,
//     ease:"expo.out"
// })

gsap.to("#yellow1",{
    top:"-100%",
    delay: 0.5,
    duration: 0.5,
    ease:"expo.out"
})
gsap.from("#yellow2",{
    top:"100%",
    delay: 1.5,
    duration: 0.5,
    ease:"expo.out"
})
gsap.to("#new-loader",{
    top:"-100%",
    delay: 1.5,
    duration: 0.5,
    // ease:"expo.out"
})


// tl.from("#yellow2",{
//     top:"100%",
//     delay: 0.5,
//     duration: 0.5,
//     ease:"expo.out"
// },"anim")

// tl.to("#loader h1",{
//     duration: 0.5,
//     delay:0.5,
//     color:"black" 
// },"anim")
// gsap.to("#new-loader h1",{
//     top:"-100%",
//     duration: 5,
//     delay:0.5,
//     color:"black" 
// })

// tl.to("#loader",{
//     display:"none" 
// })