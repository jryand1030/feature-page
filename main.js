jQuery(document).ready(function($){
// ***************************************************************Interface Scene******************************************************************************

                                            // scroll magic interface scene javascript //
    

var controller = new ScrollMagic.Controller();

var scrollOutAnim = new TimelineMax()
.add([

// comuter interface scroll animations
TweenMax.from("#computerScreen1",1,{y:20,x:15, autoAlpha:0, delay:1}),
TweenMax.to("#computerScreen1",5,{y:20,x:15, autoAlpha:0, delay:15}),

TweenMax.from("#computerScreen2",2,{y:20,x:-55, autoAlpha:0, delay:5}),
TweenMax.to("#computerScreen2",5,{y:20,x:-55, autoAlpha:0, delay:15}),

TweenMax.from("#computerScreen3",3,{y:-20,x:-25, autoAlpha:0, delay:7}),
TweenMax.to("#computerScreen3",5,{y:-20,x:-25, autoAlpha:0, delay:15}),

TweenMax.from("#computerScreen4",4,{y:0,x:25, autoAlpha:0, delay:10}),
TweenMax.to("#computerScreen4",5,{y:0,x:25, autoAlpha:0, delay:15}),

TweenMax.to("#computerMain",5,{y:0,x:0, autoAlpha:0, delay:15}),
TweenMax.to("#man",5,{y:0,x:0, autoAlpha:0, delay:15}),
TweenMax.to("#computerLinesBottom",5,{y:0,x:0, autoAlpha:0, delay:15}),


// cloud animations graphic


TweenMax.from("#Cloud",10,{autoAlpha:0, delay:25}),
TweenMax.to('#Cloud',10,{autoAlpha:0, delay:60}),

TweenMax.from("#cloudElement1",10,{autoAlpha:0, delay:30}),
TweenMax.to('#cloudElement1',10,{autoAlpha:0, delay:60}),

TweenMax.from("#cloudElement2",10,{autoAlpha:0, delay:35}),
TweenMax.to('#cloudElement2',10,{autoAlpha:0, delay:60}),

TweenMax.from("#cloudElement3",10,{autoAlpha:0, delay:40}),
TweenMax.to('#cloudElement3',10,{autoAlpha:0, delay:60}),

TweenMax.from("#cloudElement4",10,{autoAlpha:0, delay:45}),
TweenMax.to('#cloudElement4',10,{autoAlpha:0, delay:60}),

TweenMax.from("#cloudElement5",10,{autoAlpha:0, delay:50}),
TweenMax.to('#cloudElement5',10,{autoAlpha:0, delay:60}),
]);
                                                                    //  this code builds the interface scene from the library

var scrollScene =new ScrollMagic.Scene({
    triggerElement:'interfaceInformation',
    triggerHook:1,
    duration:"1000%"})

    .setTween(scrollOutAnim)
    .setPin(".interface")
    .addTo(controller);

                                                                  // scripts for the right side interface features 
var scrollOutAnim = new TimelineMax()
.add([
TweenMax.to("#interface",1,{autoAlpha:0,delay:1,}),

TweenMax.from(".interfaceFeature1",1,{y:0,x:0, autoAlpha:0, delay:1,}),
TweenMax.to(".interfaceFeature1",1,{y:0,x:0, autoAlpha:0, delay:15,}),

TweenMax.from(".interfaceFeature2",1,{y:0,x:0, autoAlpha:0, delay:4}),
TweenMax.to(".interfaceFeature2",1,{y:0,x:0, autoAlpha:0, delay:15}),

TweenMax.from(".interfaceFeature3",1,{y:0,x:0, autoAlpha:0, delay:6}),
TweenMax.to(".interfaceFeature3",1,{y:0,x:0, autoAlpha:0, delay:15}),

TweenMax.from(".interfaceFeature4",1,{y:0,x:0, autoAlpha:0, delay:8}),
TweenMax.to(".interfaceFeature4",1,{y:0,x:0, autoAlpha:0, delay:15}),


// The features (right side) for cloud information animation graphics


TweenMax.from(".cloudFeature1",1,{y:0,x:0, autoAlpha:0, delay:30,}),
TweenMax.to(".cloudFeature1",1,{y:0,x:0, autoAlpha:0, delay:60,}),

TweenMax.from(".cloudFeature2",1,{y:0,x:0, autoAlpha:0, delay:35}),
TweenMax.to(".cloudFeature2",1,{y:0,x:0, autoAlpha:0, delay:60}),

TweenMax.from(".cloudFeature3",1,{y:0,x:0, autoAlpha:0, delay:40}),
TweenMax.to(".cloudFeature3",1,{y:0,x:0, autoAlpha:0, delay:60}),

TweenMax.from(".cloudFeature4",1,{y:0,x:0, autoAlpha:0, delay:45}),
TweenMax.to(".cloudFeature4",1,{y:0,x:0, autoAlpha:0, delay:60})

])



                                                        //  this code builds the scene for the interface features from the library

var scrollScene =new ScrollMagic.Scene({
    triggerElement:'interfaceInformation',
    triggerHook:1,
    duration:"1000%",
   
})

    .setTween(scrollOutAnim)
    .setPin(".interfaceInformation")
    .addTo(controller);


})

// *************************************************************************Cloud scene**************************************************************************



// var scrollOutAnim2 = new TimelineMax()
// .add([
// TweenMax.from("#Cloud",1,{autoAlpha:0}),
// TweenMax.to('#Cloud',1,{autoAlpha:1, delay:30}),
// // TweenMax.from(".interfaceFeature1",2,{y:0,x:0, autoAlpha:0, delay:1}),
// TweenMax.from("#cloudElement1",2,{y:20,x:-55, autoAlpha:0, delay:15}),
// // TweenMax.from(".interfaceFeature2",1,{y:0,x:0, autoAlpha:0, delay:3}),
// TweenMax.from("#cloudElement2",3,{y:-20,x:-25, autoAlpha:0, delay:8}),
// // TweenMax.from(".interfaceFeature3",1,{y:0,x:0, autoAlpha:0, delay:4}),
// TweenMax.from("#cloudElement3",4,{y:0,x:25, autoAlpha:0, delay:15}),
// // TweenMax.from(".interfaceFeature4",1,{y:0,x:0, autoAlpha:0, delay:5}),

// ])

//                                                         //  this code builds the interface scene from the library

// var scrollScene2 =new ScrollMagic.Scene({
//     triggerElement:'cloudInformation',
//     triggerHook:0,
//     duration:800,
//     reverse:true,
//  })

//     .setTween(scrollOutAnim2)
//     .setPin(".cloud")
//     .addTo(controller);

//                                                             // scripts for the right side interface features 
// var scrollOutAnim= new TimelineMax()
// .add([

// TweenMax.from(".cloudFeature1",1,{y:0,x:0, autoAlpha:1, delay:10,}),

// TweenMax.from(".cloudFeature2",1,{y:0,x:0, autoAlpha:1, delay:3}),

// TweenMax.from(".cloudFeature3",1,{y:0,x:0, autoAlpha:1, delay:5}),

// TweenMax.from(".cloudFeature4",1,{y:0,x:0, autoAlpha:1, delay:7}),

// ])



//                                                 //  this code builds the scene for the interface features from the library

// var scrollScene2 =new ScrollMagic.Scene({
//     triggerElement:'cloudInformation',
//     triggerHook:1,
//     duration:"400",
   
// })

//     .setTween(scrollOutAnim)
//     .setPin(".cloudInformation")
//     .addTo(controller);



// });


















