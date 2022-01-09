import React, {useLayoutEffect} from 'react';
import * as ScrollMagic from "scrollmagic";
import { gsap } from 'gsap';
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';

function Headings({
  headings,
  headingsText,
  titlesHeader,
  titles,
  titlesFooter
}) {

  useLayoutEffect(()=>{

    ScrollMagicPluginGsap(ScrollMagic, gsap, gsap.timeline);

    gsap.defaults({overwrite: "false"});

    let controller = new ScrollMagic.Controller();

    let slidesLeft = document.getElementsByClassName("left-box");
    for (let i = 0; i < slidesLeft.length; i++) {
      let text = new ScrollMagic.Scene({
          triggerElement: slidesLeft[i],
          triggerHook: 0,
          offset: 0
        })
        .setTween(gsap.timeline()
          .set(`.inactive${i+1}`, {
            opacity: 0,
            transformStyle: "preserve-3d",
            transformOrigin: "50% 50% -50px",
            transformPerspective: 1000
          })
          .fromTo(`.inactive${i+1}`, {
            duration: 0.5,
            rotateX: (90),
            opacity: 0,
            ease: 'none'
          }, {
            rotateX: (0),
            opacity: 1,
            ease: 'none'
          }, 1)
          .to(`.inactive${i}`, {
            duration: 0.5,
            rotateX: (-90),
            opacity: 0,
            ease: 'none'
          }, "+1")
        )
        .addTo(controller);
    }
  })

  return (
    <>
    <div className="headings">
      { headings.map( headings => (<h1 className={`inactive${headings.id} inactive`} key={headings.id}>{headings.heading}</h1>) ) }
    </div>
    <div className="headings-text">
      { headingsText.map( headingsText => (<h1 className={`inactive${headingsText.id} inactive`} key={headingsText.id}>{headingsText.headingText}</h1>) ) }
    </div>
    <div className="titles-header">
      { titlesHeader.map( titlesHeader => (<h1 className={`inactive${titlesHeader.id} inactive`} key={titlesHeader.id}>{titlesHeader.titlesHeader}</h1>) ) }
    </div>
    <div className="titles">
      { titles.map( titles => (<h1 className={`inactive${titles.id} inactive`} key={titles.id}>{titles.titles}</h1>) ) }
    </div>
    <div className="titles-footer">
      { titlesFooter.map( titlesFooter => (<h1 className={`inactive${titlesFooter.id} inactive`} key={titlesFooter.id}>{titlesFooter.titlesFooter}</h1>) ) }
    </div>
    </>
  )
}

export default Headings
