import React, {useLayoutEffect, useState} from 'react';
import * as ScrollMagic from "scrollmagic";
import { gsap } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

function MainSVG() {

  const [dots, setDots] = useState([
    1000,
    860,
    720,
    610,
    470,
    330,
    0
  ])

  useLayoutEffect(()=>{

    ScrollMagicPluginGsap(ScrollMagic, gsap, gsap.timeline);
    gsap.defaults({overwrite: "false"});

    let controller = new ScrollMagic.Controller();

    let slidesLeft = document.getElementsByClassName("left-box");

    for (let i = 0; i < slidesLeft.length; i++) {
      new ScrollMagic.Scene({
          triggerElement: slidesLeft[i],
          triggerHook: 'onLeave'
        })
        .setClassToggle(".svg-bg", `svg-bg-${i+1}`)
        .addTo(controller);
    };

    for (let i = 0; i < slidesLeft.length; i++) {
      let scroll = new ScrollMagic.Scene({
          triggerElement: slidesLeft[i],
          triggerHook: 0,
          offset: 0
        })
        .setTween(gsap.timeline()
          .fromTo(".transrgwht", {
            duration: 1,
            strokeDashoffset: dots[i - 1]
          }, {
            strokeDashoffset: dots[i],
            ease: 'power3.inOut'
          })
        )
        .setClassToggle(`#d${i+1}-done`, "dot-fill")
        .addTo(controller);
    }

  })

  return (
    <>
      <div className="svg-bg">
      </div>
      <svg x="0px" y="0px" viewBox="0 0 414 414" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path opacity="0.4" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" d="m84.2,85c31.3,-31.5 74.7,-51 122.7,-51c95.5,0 173,77.5 173,173s-77.5,173 -173,173c-47.8,0 -91,-19.4 -122.3,-50.7" className="transrg"
            id="Transparent_Ring" />
          <path opacity="1" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeMiterlimit="10" d="m84.2,85c31.3,-31.5 74.7,-51 122.7,-51c95.5,0 173,77.5 173,173s-77.5,173 -173,173c-47.8,0 -91,-19.4 -122.3,-50.7" className="transrgwht" id="Opaque_Ring"
            strokeDasharray="1000" strokeDashoffset="1000" />
         <g className="dots-nav" id="Dots1">
            <g>
              <path id="d1-done" className="dot-unfill1" opacity="0" fill=" rgb(0, 0, 255)" d="m84.71401,77.4663c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29" className="dotsst dotsfill6" />
            </g>
            <g>
              <path id="d1" opacity="0.4" fill="#ffffff" d="m84.71401,77.4663c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29" className="dotsstro6" />
            </g>
          </g>
          <g className="dots-nav" id="Dots2">
            <g>
              <path id="d2-done" className="dot-unfill2" opacity="0" fill=" rgb(0, 0, 255)" d="m206.79999,29c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29" className="dotsst dotsfill1" />
            </g>
            <g>
              <path id="d2" opacity="0.4" fill="#ffffff" d="m206.79999,29c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29" className="dotsstro1" />
            </g>
          </g>
          <g className="dots-nav" id="Dots3">
            <g>
              <path id="d3-done" className="dot-unfill3" opacity="0" fill=" rgb(0, 0, 255)" d="m331.95348,84.82827c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29" className="dotsst dotsfill4" />
            </g>
            <g>
              <path id="d3" opacity="0.4" fill="#ffffff" d="m331.95348,84.82827c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29" className="dotsstro4" />
            </g>
          </g>
          <g className="dots-nav" id="Dots4">
            <g>
              <path id="d4-done" className="dot-unfill4" opacity="0" fill=" rgb(0, 0, 255)" d="m379.80628,189.73634c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29" className="dotsst dotsfill2" />
            </g>
            <g>
              <path id="d4" opacity="0.4" fill="#ffffff" d="m379.80628,189.73634c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29" className="dotsstro2" />
            </g>
          </g>
          <g className="dots-nav" id="Dost5">
            <g>
              <path id="d5-done" className="dot-unfill5" opacity="0" fill=" rgb(0, 0, 255)" d="m339.92894,314.27632c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29" className="dotsst dotsfill2" />
            </g>
            <g>
              <path id="d5" opacity="0.4" fill="#ffffff" d="m339.92894,314.27632c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29" className="dotsstro2" />
            </g>
          </g>
          <g className="dots-nav" id="Dots6">
            <g>
              <path id="d6-done" className="dot-unfill6" opacity="0" fill=" rgb(0, 0, 255)" d="m210.48098,372.55855c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29" className="dotsst dotsfill5" />
            </g>
            <g>
              <path id="d6" opacity="0.4" fill="#ffffff" d="m210.48098,372.55855c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29" className="dotsstro5" />
            </g>
          </g>
          <g className="dots-nav" id="Dots7">
            <g>
              <path id="d7-done" className="dot-unfill7" opacity="0" fill=" rgb(0, 0, 255)" d="m85.32751,324.09227c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29" className="dotsst dotsfill3" />
            </g>
            <g>
              <path id="d7" opacity="0.4" fill="#ffffff" d="m85.32751,324.09227c-3.3,0 -6,2.7 -6,6s2.7,6 6,6s6,-2.7 6,-6s-2.7,-6 -6,-6zm0,-29" className="dotsstro3" />
            </g>
          </g>
        </g>
      </svg>
    </>
  )
}

export default MainSVG
