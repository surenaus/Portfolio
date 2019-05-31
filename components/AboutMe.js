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
            <Container style={{zIndex: 2, minHeight: '100vh'}}>
                <Row style={{
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '60vh',
                    textAlign: 'center'
                }}>
                    <Col md={12} lg={12} sm={12} style={{
                        margin: 0, padding: 0
                    }}>
                        <h1 className="display-4 text-center">
                            About me
                        </h1>
                    </Col>
                    <Col md={12} lg={8} style={{ margin: 0, padding: 0 }}>
                        <p>
                            I had been working as an Back-End Developer about 1 year
                            and also as an Front-End Developer same time.
                            I choosed Both of them.
                        </p>
                        <p>
                            I am highly-motivated, result oriented, self-driven, hard-working, 
                            fast learner and smart eager to be a part of the team, 
                            learn new technologies, 
                            become a valuable employee of the company and bring it success.
                        </p>
                        <p>
                            Well-organized with an ability to prioritize tasks and capability to work, 
                            develop and grow in the company. 
                            Experienced in communicating with the team and clients. 
                            Attentive and accurate to details.
                        </p>   
                        <p>
                            Below is a list of my current technical skills:
                        </p>
                        <Col>
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
                    <Col md={12} lg={4}>
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