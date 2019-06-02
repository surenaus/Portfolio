import React from 'react';
// import CopyText from 'react-copy-text'
import { Container, Row, Col } from 'react-grid-system'
import Link from 'next/link' 
import dynamic from 'next/dynamic'
import LogoImage from '../static/logo.png'
import CV from '../static/social-media/cv.svg'
import Phone from '../static/social-media/phone.png'
import Github from '../static/social-media/github.svg'
import Linkedin from '../static/social-media/linkedin.svg'
import Google from '../static/social-media/google.svg'
import '../static/stylus/components/header.css';

const cvlink = 'https://drive.google.com/file/d/1KorwLar9mJ9OJFgzS_j-oGV_QbsoI_Go/view?usp=sharing';
const linkedln = "https://www.linkedin.com/in/renat-suleymanov-934260108/";
const gmail = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=suleimanov150796@gmail.com&su=job&body=Hello!&tf=1'
const github = 'https://github.com/surenaus';
const phone = '+79376135512';
const blank = null

const NoSSRImages = dynamic(
  () => import('./CustomImage'),
  {
    loading: () => import('./CustomText')
  }
)

const mus = {
}
class Header extends React.Component {

    constructor() {
        super();
        this.state = {
          textToCopy: '',
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onButtonClick (value) {    
        this.setState({ textToCopy: value });
    }
    
    render() {
        return (
          <header className="container shadow2">
            <NoSSRImages className="" text="SuRen" image={LogoImage} styling="logo-img" alt="Logo" /> 
            <span className="social controller" id="menuToggle">
              <input className="menu-btn" type="checkbox" id="menu-btn" />
              <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
              <div className="menu" id="menu">
                <button className="link">
                  <a href={cvlink} target="_blank" rel="noreferrer" style={mus}>
                    <NoSSRImages text="cv" image={CV} styling="icon" alt="CV pdf"/>
                  </a>
                </button>
                <button className="link">
                  <a href={linkedln} target="_blank" rel="noreferrer" style={mus}>
                    <NoSSRImages text="in" image={Linkedin} styling="icon" alt="Linkedin Profile"/>
                  </a>
                </button>
                <button className="link">
                  <a href={github} target="_blank" rel="noreferrer" style={mus}>
                    <NoSSRImages text="gh" image={Github} styling="icon" alt="Github Profile"/>
                  </a>
                </button>
                <button className="link" >
                  <a href={gmail} target="_blank" rel="noreferrer" style={mus}>
                    <NoSSRImages text="@" image={Google} styling="icon" alt="E-mail"/>
                  </a>
                </button>
                <button className="link">
                  <a target="_blank" rel="noreferrer" style={mus}>
                    <NoSSRImages text="Call" image={Phone} styling="icon" alt="Phone Number"/>
                  </a>
                </button>
              </div>
            </span>
            <span className="tip"> Contact me </span>
          </header>
        );
      }
}
export default Header;