import fetch from "isomorphic-unfetch";
import Intro from '../components/Intro';
import dynamic from 'next/dynamic'
import styled from "styled-components";

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
  .container {
    position: relative;
    z-index: 2;
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
  @media (pointer: coarse) and (hover: none) {
    .about-me {
      background: url('../static/images/back.webp') black no-repeat center center scroll;
    }
    .about-me video {
      display: none;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 768px){
    .onlyforlg {
      display: none;
    }
  }
`;

const NoSSRVideo = dynamic({
  loader: () => import('../components/Video'),
  loading: () => <p>Loading ...</p>,
  ssr: false
})

const NoSSRAboutMe = dynamic({
  loader: () => import('../components/AboutMe'),
  ssr: false
})

const Index = (
  //{ posts }
  ) => (
  <>
    <div className="text-white">
      <section id="intro">
          <Intro/>
      </section>
    </div>
   {/*
   <AboutMeDiv className="text-white">
      <div className="overlay"></div>
        <NoSSRVideo />
        <section id="about" style={{zIndex: '3'}}>    
            <NoSSRAboutMe/>
        </section>
    </AboutMeDiv> 
  */}
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
