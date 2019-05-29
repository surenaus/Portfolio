import React from 'react';
// import CopyText from 'react-copy-text'
import Link from 'next/link' 
import dynamic from 'next/dynamic'
import LogoImage from '../static/logo.png'
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
          <header class="header">
            <a href="" class="logo">
              <NoSSRImages text="SuRen" image={LogoImage} styling="logo-img" alt="Logo"/>
            </a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu" style={{ textAlign: 'center' }}>
              <li>
                <Link href={cvlink}>
                  <a className="link" target="_blank" rel="noreferrer" style={{ fontWeight: 'bold'}}>
                      CV
                  </a>
                </Link>
              </li>
              <li>
                <Link href={linkedln}>
                  <a className="link" target="_blank" rel="noreferrer">
                    <NoSSRImages text="in" image={Linkedin} styling="icon" alt="Linkedin Profile"/>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={github}>
                  <a className="link" target="_blank" rel="noreferrer">
                    <NoSSRImages text="gh" image={Github} styling="icon" alt="Github Profile"/>
                  </a>
                </Link>
              </li>
              <li>
                <Link href={gmail}>  
                  <a className="link" target="_blank" rel="noreferrer">
                    <NoSSRImages text="@" image={Google} styling="icon" alt="E-mail"/>
                  </a>
                </Link>
              </li>
              <li>
                <a className="link" target="_blank" rel="noreferrer">
                  <NoSSRImages text="Call" image={Phone} styling="icon" alt="Phone Number"/>
                </a>
              </li>
            </ul>
          </header>
        );
      }
}
export default Header;