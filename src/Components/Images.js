import React, {useLayoutEffect} from 'react';
import * as ScrollMagic from "scrollmagic";
import * as images from '../Assets/images';
import { gsap } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

function Images() {

    useLayoutEffect(()=>{
    
        ScrollMagicPluginGsap(ScrollMagic, gsap, gsap.timeline);
        gsap.defaults({overwrite: "false"});

        let controller = new ScrollMagic.Controller();
        let slidesLeft = document.getElementsByClassName("left-box");

        let slide1Pic1On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[0],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set("#slide1-pic1-desktop", {
              opacity: 0,
            })
            .fromTo("#slide1-pic1-desktop", {
              duration: 0.5,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, {
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide1Pic1Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[0],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set("#slide1-pic1-desktop", {
              opacity: 1,
            })
      
            .to("#slide1-pic1-desktop", {
              duration: 0.5,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
        let slide1Pic2On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[0],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set("#slide1-pic2-desktop", {
              opacity: 0,
            })
            .fromTo("#slide1-pic2-desktop", {
              duration: 0.5,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, {
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide1Pic2Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[0],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set("#slide1-pic2-desktop", {
              opacity: 1,
            })
      
            .to("#slide1-pic2-desktop", {
              duration: 0.5,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
        let slide2Pic1On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[1],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set("#slide2-pic1-desktop", {
              opacity: 0,
            })
            .fromTo("#slide2-pic1-desktop", {
              duration: 0.5,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, {
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide2Pic1Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[1],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set("#slide2-pic1-desktop", {
              opacity: 1,
            })
      
            .to("#slide2-pic1-desktop", {
              duration: 0.5,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
        let slide2Pic2On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[1],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set("#slide2-pic2-desktop", {
              opacity: 0,
            })
            .fromTo("#slide2-pic2-desktop", {
              duration: 0.5,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, {
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide2Pic2Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[1],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set("#slide2-pic2-desktop", {
              opacity: 1,
            })
      
            .to("#slide2-pic2-desktop", {
              duration: 0.5,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
        let slide3Pic1On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[2],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set("#slide3-pic1-desktop", {
              opacity: 0,
            })
            .fromTo("#slide3-pic1-desktop", {
              duration: 0.5,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, {
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide3Pic1Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[2],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set("#slide3-pic1-desktop", {
              opacity: 1,
            })
      
            .to("#slide3-pic1-desktop", {
              duration: 0.5,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
        let slide3Pic2On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[2],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set("#slide3-pic2-desktop", {
              opacity: 0,
            })
            .fromTo("#slide3-pic2-desktop", {
              duration: 0.5,
              x: -100,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, {
              x: 0,
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide3Pic2Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[2],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set("#slide3-pic2-desktop", {
              opacity: 1,
            })
      
            .to("#slide3-pic2-desktop", {
              duration: 0.5,
              x: -100,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
        let slide3Pic3On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[2],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set("#slide3-pic3-desktop", {
              opacity: 0,
            })
            .fromTo("#slide3-pic3-desktop", {
              duration: 0.5,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, {
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide3Pic3Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[2],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set("#slide3-pic3-desktop", {
              opacity: 1,
            })
      
            .to("#slide3-pic3-desktop", {
              duration: 0.5,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
        let slide3Pic4On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[2],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set("#slide3-pic4-desktop", {
              opacity: 0,
            })
            .fromTo("#slide3-pic4-desktop", {
              duration: 0.5,
              x: 100,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, {
              x: 0,
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide3Pic4Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[2],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set("#slide3-pic4-desktop", {
              opacity: 1,
            })
      
            .to("#slide3-pic4-desktop", {
              duration: 0.5,
              x: 100,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
        let slide3Pic5On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[2],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set("#slide3-pic5-desktop", {
              opacity: 0,
            })
            .fromTo("#slide3-pic5-desktop", {
              duration: 0.5,
              x: 100,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, {
              x: 0,
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide3Pic5Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[2],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set("#slide3-pic5-desktop", {
              opacity: 1,
            })
      
            .to("#slide3-pic5-desktop", {
              duration: 0.5,
              x: 100,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
        let slide4Pic1On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[3],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set("#slide4-pic1-desktop", {
              opacity: 0,
            })
            .fromTo("#slide4-pic1-desktop", {
              duration: 0.5,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, {
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide4Pic1Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[3],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set("#slide4-pic1-desktop", {
              opacity: 1,
            })
      
            .to("#slide4-pic1-desktop", {
              duration: 0.5,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
        let slide4Pic2On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[3],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set("#slide4-pic2-desktop", {
              opacity: 0,
            })
            .fromTo("#slide4-pic2-desktop", {
              duration: 0.5,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, {
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide4Pic2Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[3],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set("#slide4-pic2-desktop", {
              opacity: 1,
            })
      
            .to("#slide4-pic2-desktop", {
              duration: 0.5,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
      
        let slide5Pic13On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[4],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set(["#slide5-pic1-desktop", "#slide5-pic3-desktop"], {
              opacity: 0,
            })
            .fromTo(["#slide5-pic1-desktop", "#slide5-pic3-desktop"], {
              duration: 0.5,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, {
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide5Pic13Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[4],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set(["#slide5-pic1-desktop", "#slide5-pic3-desktop"], {
              opacity: 1,
            })
      
            .to(["#slide5-pic1-desktop", "#slide5-pic3-desktop"], {
              duration: 0.5,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
      
        let slide5Pic25On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[4],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set(["#slide5-pic2-desktop", "#slide5-pic5-desktop"], {
              opacity: 0,
            })
            .fromTo(["#slide5-pic2-desktop", "#slide5-pic5-desktop"], {
              duration: 0.5,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, {
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide5Pic25Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[4],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set(["#slide5-pic2-desktop", "#slide5-pic5-desktop"], {
              opacity: 1,
            })
      
            .to(["#slide5-pic2-desktop", "#slide5-pic5-desktop"], {
              duration: 0.5,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
        let slide5Pic4On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[4],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set("#slide5-pic4-desktop", {
              opacity: 0,
            })
            .fromTo("#slide5-pic4-desktop", {
              duration: 0.5,
              x: 100,
              opacity: 0,
              ease: 'none'
            }, {
              x: 0,
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide5Pic4Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[4],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set("#slide5-pic4-desktop", {
              opacity: 1,
            })
      
            .to("#slide5-pic4-desktop", {
              duration: 0.5,
              x: 100,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
        let slide6Pic1On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[5],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set("#slide6-pic1-desktop", {
              opacity: 0,
            })
            .fromTo("#slide6-pic1-desktop", {
              duration: 0.5,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, {
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide6Pic1Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[5],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set("#slide6-pic1-desktop", {
              opacity: 1,
            })
      
            .to("#slide6-pic1-desktop", {
              duration: 0.5,
              y: -200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
        let slide6Pic2On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[5],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set("#slide6-pic2-desktop", {
              opacity: 0,
            })
            .fromTo("#slide6-pic2-desktop", {
              duration: 0.5,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, {
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide6Pic2Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[5],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set("#slide6-pic2-desktop", {
              opacity: 1,
            })
      
            .to("#slide6-pic2-desktop", {
              duration: 0.5,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
        let slide7Pic12On = new ScrollMagic.Scene({
            triggerElement: slidesLeft[6],
            triggerHook: 0,
            offset: 0
          })
          .setTween(gsap.timeline()
            .set(["#slide7-pic1-desktop", "#slide7-pic2-desktop"], {
              opacity: 0,
            })
            .fromTo(["#slide7-pic1-desktop", "#slide7-pic2-desktop"], {
              duration: 0.5,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, {
              y: 0,
              opacity: 1,
              ease: 'none'
            }, 1)
          )
          .addTo(controller);
      
        let slide7Pic125Off = new ScrollMagic.Scene({
            triggerElement: slidesLeft[6],
            triggerHook: 0,
            offset: 600
          })
          .setTween(gsap.timeline()
            .set(["#slide7-pic1-desktop", "#slide7-pic2-desktop"], {
              opacity: 1,
            })
      
            .to(["#slide7-pic1-desktop", "#slide7-pic2-desktop"], {
              duration: 0.5,
              y: 200,
              opacity: 0,
              ease: 'none'
            }, "+1")
          )
          .addTo(controller);
      
      });

    return (
        <div className="img-area">
        <div className="slide-imgs">
            <img src={images.slide1Pic1} id="slide1-pic1-desktop"/>
            <img src={images.slide1Pic2} id="slide1-pic2-desktop"/>
        </div>
        <div className="slide-imgs">
            <img src={images.slide2Pic1} id="slide2-pic1-desktop"/>
            <img src={images.slide2Pic2} id="slide2-pic2-desktop"/>
        </div>
        <div className="slide-imgs">
            <img src={images.slide3Pic1} id="slide3-pic1-desktop"/>
            <img src={images.slide3Pic2} id="slide3-pic2-desktop"/>
            <img src={images.slide3Pic3} id="slide3-pic3-desktop"/>
            <img src={images.slide3Pic4} id="slide3-pic4-desktop"/>
            <img src={images.slide3Pic5} id="slide3-pic5-desktop"/>
        </div>
        <div className="slide-imgs">
            <img src={images.slide4Pic1} id="slide4-pic1-desktop"/>
            <img src={images.slide4Pic2} id="slide4-pic2-desktop"/>
        </div>
        <div className="slide-imgs">
            <img src={images.slide5Pic1} id="slide5-pic1-desktop"/>
            <img src={images.slide5Pic2} id="slide5-pic2-desktop"/>
            <img src={images.slide5Pic3} id="slide5-pic3-desktop"/>
            <img src={images.slide5Pic4} id="slide5-pic4-desktop"/>
            <img src={images.slide5Pic5} id="slide5-pic5-desktop"/>
        </div>
        <div className="slide-imgs">
            <img src={images.slide6Pic1} id="slide6-pic1-desktop"/>
            <img src={images.slide6Pic2} id="slide6-pic2-desktop"/>
        </div>
        <div className="slide-imgs">
            <img src={images.slide7Pic1} id="slide7-pic1-desktop"/>
            <img src={images.slide7Pic2} id="slide7-pic2-desktop"/>
        </div>
        </div>
    )
}

export default Images
