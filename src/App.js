import './App.css';
import { useLayoutEffect, useState } from 'react';
import { ScrollMagicPluginIndicator} from "scrollmagic-plugins";
import * as ScrollMagic from "scrollmagic";
import { gsap } from 'gsap';
import OwlCarouselComponent from './Components/OwlCarouselComponent';
import Panel from './Components/Panel';
import MainSVG from './Components/MainSVG';
import Headings from './Components/Headings';
import Images from './Components/Images';
 

function App() {

  const [panels, setPanels] = useState([
    { id : 1, leftColor: '#4e27ce', rightColor: '#1d0363' },
    { id : 2, leftColor: '#4f25cb', rightColor: '#cdcbcf' },
    { id : 3, leftColor: '#17263c', rightColor: '#0e131c' },
    { id : 4, leftColor: '#0f113b', rightColor: '#151649' },
    { id : 5, leftColor: '#134ca2', rightColor: '#2ecdde' },
    { id : 6, leftColor: '#022b92', rightColor: 'rgb(198, 119, 46)' },
    { id : 7, leftColor: '#01824d', rightColor: '#01b76a'  }
  ])

  const [headings, setHeadings] = useState([
    { id: 1, heading: 'ABC 123' },
    { id: 2, heading: 'ABC 123' },
    { id: 3, heading: 'ABC 123' },
    { id: 4, heading: 'ABC 123' },
    { id: 5, heading: 'ABC 123' },
    { id: 6, heading: 'ABC 123' },
    { id: 7, heading: 'ABC 123' }
  ])

  const [headingsText, setHeadingsText] = useState([
    { id: 1, headingText: 'We are the best development company in the world' },
    { id: 2, headingText: 'We are the best development company in the world' },
    { id: 3, headingText: 'We are the best development company in the world' },
    { id: 4, headingText: 'We are the best development company in the world' },
    { id: 5, headingText: 'We are the best development company in the world' },
    { id: 6, headingText: 'We are the best development company in the world' },
    { id: 7, headingText: 'We are the best development company in the world' }
  ])

  const [titlesHeader, setTitlesHeader] = useState([
    { id: 1, titlesHeader: '' },
    { id: 2, titlesHeader: 'The Next Big' },
    { id: 3, titlesHeader: 'Redefining' },
    { id: 4, titlesHeader: 'Powered By Advance' },
    { id: 5, titlesHeader: 'Text Headline' },
    { id: 6, titlesHeader: 'Developing ERP Solution' },
    { id: 7, titlesHeader: 'Biggest Classifieds' }
  ])

  const [titles, setTitles] = useState([
    { id: 1, titles: '25M+ Downloads' },
    { id: 2, titles: 'Blockchain' },
    { id: 3, titles: 'UX Strategy' },
    { id: 4, titles: 'NASA' },
    { id: 5, titles: 'Text Headline' },
    { id: 6, titles: 'Text Headline' },
    { id: 7, titles: 'East Asia' }
  ])

  const [titlesFooter, setTitlesFotitlesFooter] = useState([
    { id: 1, titlesFooter: 'on appstore and google playstore' },
    { id: 2, titlesFooter: 'Revolution' },
    { id: 3, titlesFooter: 'and UI Design' },
    { id: 4, titlesFooter: 'Algorithms' },
    { id: 5, titlesFooter: 'Footer Headline' },
    { id: 6, titlesFooter: 'in furniture Industry' },
    { id: 7, titlesFooter: 'Countries' }
  ])

  useLayoutEffect(()=>{
    
    ScrollMagicPluginIndicator(ScrollMagic);
    gsap.defaults({overwrite: "false"});

    let controller = new ScrollMagic.Controller();

    let slidesRight = document.getElementsByClassName("right-box");
    for (let i = 0; i < slidesRight.length; i++) {
      new ScrollMagic.Scene({
          triggerElement: slidesRight[i],
          triggerHook: "onLeave"
        })
        .setClassToggle(`#box-${i+1}-right`, "show")
        // .addIndicators({name: `#box-${i+1}-right`})
        .setPin(slidesRight[i])
        .addTo(controller);
    };

    let slidesLeft = document.getElementsByClassName("left-box");
    for (let i = 0; i < slidesLeft.length; i++) {
      new ScrollMagic.Scene({
          triggerElement: slidesLeft[i],
          triggerHook: "onLeave"
        })
        .setClassToggle(`#box-${i+1}-left`, "show")
        // .addIndicators({name: `#box-${i+1}-left`})
        .setPin(slidesLeft[i])
        .addTo(controller);
    };
  })

  return (
    <div className="App">
      <OwlCarouselComponent/>
      <MainSVG/>
      { panels.map(panel => (<Panel panel={panel} key={panel.id}/>)) }
      <Headings
        headings={headings}
        headingsText={headingsText}
        titlesHeader={titlesHeader}
        titles={titles}
        titlesFooter={titlesFooter}
      />
      <Images />
    </div>
  );
}

export default App;
