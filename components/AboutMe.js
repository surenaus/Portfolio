import React from 'react';
import { Container, Row, Col } from 'react-grid-system'
import dynamic from 'next/dynamic'

import avatar from '../static/images/profile.webp'
import html from '../static/logos/html.svg';
import css from '../static/logos/css.svg';
import js from '../static/logos/js.svg';
import react from '../static/logos/react.svg';
import vue from '../static/logos/vue.svg';
import bootstrap from '../static/logos/bootstrap.svg';
import jquery from '../static/logos/jquery.svg';
import python from '../static/logos/python.svg';
import ts from '../static/logos/ts.svg';

import '../static/stylus/components/aboutMe.css';

const NoSSRImages = dynamic(
    () => import('./CustomImage'),
    {
      loading: () => import('./CustomText')
    }
)
  
class AboutMe extends React.Component {
    render() {
        return (
            <Container className="aboutMe-container">
                <Row>
                    <Col md={12} lg={12} sm={12} className="my-auto display-4-parent">
                        <h1 className="display-4 text-center">
                            About me
                        </h1>
                    </Col>
                </Row>
                <Row className="aboutMe-text-row">
                    <Col md={8} lg={8}  className="my-auto">
                        <p>
                            I have been working as a Back-End Developer
                            and also as a Front-End Developer in the same time.
                            I find both of them inspiring and interesting.
                        </p>
                        <p>
                            I am a highly-motivated, result oriented, self-driven, hard-working, 
                            fast learner. I'm eager to be a part of the team, 
                            lto earn new technologies, 
                            to become a valuable employee of your company and bring it success.
                        </p>
                        <p>
                            Well-organized with an ability to prioritize tasks and capability to work, 
                            develop and grow in the company. 
                            Experienced in communicating with the team and clients. 
                            Attentive and accurate to details.
                        </p>   
                        <p>
                            Current technical skills:
                        </p>
                        <Col className="icons-technologies">
                            <NoSSRImages image={html} styling="logoStyle" alt="html5" text=""/>
                            <NoSSRImages image={css} styling='logoStyle' alt="css3" text=""/>
                            <NoSSRImages image={js} styling='logoStyle' alt="node.js" text=""/>
                            <NoSSRImages image={jquery} styling='logoStyle' alt="jQuery" text=""/>
                            <NoSSRImages image={bootstrap} styling='logoStyle' alt="bootstrap4" text=""/>
                            <NoSSRImages image={vue} styling='logoStyle' alt="Vue.js" text=""/>
                            <NoSSRImages image={react} styling='logoStyle' alt="React.js" text=""/>
                            <NoSSRImages image={python} styling='logoStyle' alt="django, RestFramework" text=""/>
                            <NoSSRImages image={ts} styling='logoStyle' alt="typescript" text=""/>
                        </Col>
                    </Col>
                    <Col md={4} lg={4} >
                        <Col>
                            <NoSSRImages image={avatar} styling='avatarStyle' alt="author" text="author photo"/>
                        </Col>
                        <Col>
                            <p className="text-center"><small className="about-avatar-text">Renat Suleymanov</small></p>
                        </Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default AboutMe;