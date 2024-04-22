const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function circleMouseFollower(){
    document.querySelector("body").addEventListener("mouseleave",function(){
        document.querySelector("#minicricle").style.opacity=0;

    })
    document.querySelector("body").addEventListener("mouseenter", function() {
        document.querySelector("#minicricle").style.opacity = 1;
    });

    document.querySelector("body") .addEventListener("mousemove",function(dets){
        // console.log(dets.clientX,dets.clientY);
        document.querySelector("#minicricle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    })
}
function firstPageAnim(){
    var tl=gsap.timeline();
    tl.from("#nav",{
        y:'-10',
        opacity:0,
        ease:Expo.easeInOut,
        duration:1.5,
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:2,
        stagger:.2,
        delay:-1,
        stagger:0.2
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
}




document.querySelectorAll(".elem").forEach(function(elem){
    var rotate=0;
    var diff=0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
        });
      });

    elem.addEventListener("mousemove",function(dets){
        console.log(dets.clientX,dets.clientY);
        var diff=dets.clientY-elem.getBoundingClientRect().top;
        diffrot=dets.clientX-rotate;
        rotate=dets.clientX

        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power1,
            display:"block",
            top:diff,
            left:dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
            
        })

    })
})
// const cri=document.querySelector("#minicricle")
//  const cricle=document.querySelector("body")
//  cricle.addEventListener("mouseleave",function(e){
//     cri.style.opacity=0;
//  })

const clock=document.querySelector("#time")
setInterval(function(){
    let date=new Date();
    let hour=date.getHours()
    let minutes=date.getMinutes()
    let second=date.getSeconds()
    clock.innerHTML=`${hour}:${minutes}:${second}`;
},1000)
 
circleMouseFollower();
firstPageAnim(); 
