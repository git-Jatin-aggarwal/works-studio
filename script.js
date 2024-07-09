const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline()

// tl.to("#yellow1",{
//     top:"-100%",
//     delay: 0.5,
//     duration: 0.5,
//     ease:"expo.out"
// })

tl.to("#yellow1",{
    top:"-100%",
    delay: 0.5,
    duration: 0.5,
    ease:"expo.out"
})
tl.from("#yellow2",{
    top:"100%",
    delay: 1.5,
    duration: 0.5,
    ease:"expo.out"
},"anim")


tl.to("#new-loader h1",{
    delay:1.5,
    duration: 0.5,

    color:"black"
},"anim")

tl.to("#new-loader",{
    display:"none" 
})