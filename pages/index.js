import fetch from "isomorphic-unfetch";
import Intro from '../components/Intro';
import AboutMe from '../components/AboutMe';
import dynamic from 'next/dynamic'
import styled from "styled-components";

import back from '../static/images/back.webp'

const AboutMeDiv = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    z-index: 0;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  .overlay-image {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    z-index: 0;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
  }
`;
const CardsDiv = styled.div`
  background-color: black;
`;
const NoSSRVideo = dynamic({
  loader: () => import('../components/Video'),
  ssr: false
})
const NoSSRImages = dynamic(
  () => import('../components/CustomImage'),
  {
    ssr: false
  }
)  
const NoSSRPI = dynamic({
  loader: () => import('../components/ParallaxImage'),
  ssr: false
})
const NoSSRCards = dynamic({
  loader: () => import('../components/Cards'),
  ssr: false
})
// cover-section
const styling = {
  position: 'absolute',
  top: 0,
}
const sector = {
  backgroundColor: 'black',
}
const Index = (
  //{ posts }
  ) => (
  <>
    <div className="text-main" style={sector}>
      <section id="intro">
          <Intro/>
      </section>
    </div>
   <AboutMeDiv className="text-white">
   
        <div className="overlay"></div>
        <div className="overlay-image">
          {/*
            <NoSSRImages image={back}
          //styling={styling} 
            alt="" text="" />
          */}
          <NoSSRPI image={ back }/>
        </div>
        <section id="about" style={{
          zIndex: 2
        }}>    
          <AboutMe style={{zIndex: 2}} />
        </section>
    </AboutMeDiv> 
    <CardsDiv className="text-white text-center projects">
      <section id="projects">
        <NoSSRCards/>
      </section>
    </CardsDiv>
  </>
);

// Index.getInitialProps = async function() {
//   const fetchPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await fetchPosts.json();

//   return {
//     posts
//   };
// };

export default Index;
