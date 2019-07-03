jQuery(document).ready(function($){
// ***************************************************************Interface Scene******************************************************************************

                                            // scroll magic interface scene javascript //
//     var tweenAnimIn = new TimelineMax ()
// // this code animates the begining of the interface graphic
//     .from("#computerMain", 1, {y:-600, autoAlpha:0, ease:Power2.easeOut})
//     .from("#computerLinesBottom", 1, {y:-600, autoAlpha:0, ease:Power2.easeOut})
//     // .from("#computerScreen1", 1, {y:-300, autoAlpha:0, ease:Power2.easeOut})
//     // .from("#computerScreen2", 1, {y:-300, autoAlpha:0, ease:Power2.easeOut})
//     // .from("#computerScreen3", 1, {y:-300, autoAlpha:0, ease:Power2.easeOut})
//     // .from("#computerScreen4", 1, {y:-300, autoAlpha:0, ease:Power2.easeOut})
//     .from("#man", 1, {y:-600, autoAlpha:0, ease:Power1.easeOut})
    

var controller = new ScrollMagic.Controller();

var scrollOutAnim = new TimelineMax()
.add([
TweenMax.from("#computerScreen1",1,{y:20,x:15, autoAlpha:0, delay:1}),
// TweenMax.from(".interfaceFeature1",2,{y:0,x:0, autoAlpha:0, delay:1}),
TweenMax.from("#computerScreen2",2,{y:20,x:-55, autoAlpha:0, delay:3}),
// TweenMax.from(".interfaceFeature2",1,{y:0,x:0, autoAlpha:0, delay:3}),
TweenMax.from("#computerScreen3",3,{y:-20,x:-25, autoAlpha:0, delay:5}),
// TweenMax.from(".interfaceFeature3",1,{y:0,x:0, autoAlpha:0, delay:4}),
TweenMax.from("#computerScreen4",4,{y:0,x:25, autoAlpha:0, delay:7}),
// TweenMax.from(".interfaceFeature4",1,{y:0,x:0, autoAlpha:0, delay:5}),

])
                                                                    //  this code builds the interface scene from the library

var scrollScene =new ScrollMagic.Scene({
    triggerElement:'interfaceInformation',
    triggerHook:1,
    duration:"400%"})

    .setTween(scrollOutAnim)
    .setPin(".interface")
    .addTo(controller);

                                                                  // scripts for the right side interface features 
var scrollOutAnim = new TimelineMax()
.add([

TweenMax.from(".interfaceFeature1",1,{y:0,x:0, autoAlpha:0, delay:1,}),

TweenMax.from(".interfaceFeature2",1,{y:0,x:0, autoAlpha:0, delay:3}),

TweenMax.from(".interfaceFeature3",1,{y:0,x:0, autoAlpha:0, delay:5}),

TweenMax.from(".interfaceFeature4",1,{y:0,x:0, autoAlpha:0, delay:7}),

])



                                                        //  this code builds the scene for the interface features from the library

var scrollScene =new ScrollMagic.Scene({
    triggerElement:'interfaceInformation',
    triggerHook:1,
    duration:"400%",
   
})

    .setTween(scrollOutAnim)
    .setPin(".interfaceInformation")
    .addTo(controller);




// *************************************************************************Cloud scene**************************************************************************



var scrollOutAnim2 = new TimelineMax()
.add([
TweenMax.from("#Cloud",1,{autoAlpha:0}),
// TweenMax.from(".interfaceFeature1",2,{y:0,x:0, autoAlpha:0, delay:1}),
TweenMax.from("#cloudElement1",2,{y:20,x:-55, autoAlpha:0}),
// TweenMax.from(".interfaceFeature2",1,{y:0,x:0, autoAlpha:0, delay:3}),
TweenMax.from("#cloudElement2",3,{y:-20,x:-25, autoAlpha:0, delay:8}),
// TweenMax.from(".interfaceFeature3",1,{y:0,x:0, autoAlpha:0, delay:4}),
TweenMax.from("#cloudElement3",4,{y:0,x:25, autoAlpha:0, delay:10}),
// TweenMax.from(".interfaceFeature4",1,{y:0,x:0, autoAlpha:0, delay:5}),

])
var controller2 = new ScrollMagic.Controller();
                                                        //  this code builds the interface scene from the library

var scrollScene2 =new ScrollMagic.Scene({
    triggerElement:'cloudInformation',
    triggerHook:1,
    duration:800,
    reverse:true,
 })

    .setTween(scrollOutAnim2)
    .setPin(".cloud")
    .addTo(controller2);

                                                            // scripts for the right side interface features 
var scrollOutAnim= new TimelineMax()
.add([

TweenMax.from(".cloudFeature1",1,{y:0,x:0, autoAlpha:1, delay:1,}),

TweenMax.from(".cloudFeature2",1,{y:0,x:0, autoAlpha:1, delay:3}),

TweenMax.from(".cloudFeature3",1,{y:0,x:0, autoAlpha:1, delay:5}),

TweenMax.from(".cloudFeature4",1,{y:0,x:0, autoAlpha:1, delay:7}),

])



                                                //  this code builds the scene for the interface features from the library

var scrollScene2 =new ScrollMagic.Scene({
    triggerElement:'.cloudInformation',
    triggerHook:1,
    duration:"400",
   
})

    .setTween(scrollOutAnim)
    .setPin(".cloudInformation")
    .addTo(controller2);



});


















