import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import dynamic from 'next/dynamic'

import back from '../static/images/back.webp'
import '../static/stylus/pages/index.css';

const NoSSRPI = dynamic({
  loader: () => import('../components/ParallaxImage'),
  ssr: false
})
const NoSSRCards = dynamic({
  loader: () => import('../components/Cards'),
  ssr: false
})

const Index = (
  //{ posts }
  ) => (
  <> 
    <div className="text-main index-page black-back">
      <section id="intro">
          <Intro/>
      </section>
    </div>
   <div className="aboutme-div text-white">
   
        <div className="overlay"></div>
        <div className="overlay-image">
          <NoSSRPI image={ back }/>
        </div>
        <section id="about" className="up-layout">    
          <AboutMe className="up-layout" />
        </section>
    </div> 
    <div className="text-white text-center projects black-back">
      <section id="projects">
        <NoSSRCards/>
      </section>
    </div>
  </>
);


export default Index;
