import React from 'react';
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

const logoStyle = {
    width: '50px',
    height: '50px',
    margin: '10px'
}
const avatarStyle = {
    width: "10%",
    height: "10%"
}

class AboutMe extends React.Component {
    render() {
        return (
            <div className="container text-white">
                <h1 className="display-4 text-center" style={{margin: '7% 0'}}>
                    About me
                </h1>
                <div className="row">
                    <div className="col-md-12 col-lg-8">
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
                        <div className="col">
                            <img style={logoStyle} title="html5" alt="html5" src={html}/>
                            <img style={logoStyle} title="css3" alt="css3" src={css}/>
                            <img style={logoStyle} title="node.js" alt="node.js" src={js}/>
                            <img style={logoStyle} title="jQuery" alt="jQuery" src={jquery}/>
                            <img style={logoStyle} title="bootstrap4" alt="bootstrap4" src={bootstrap}/>
                            <img style={logoStyle} title="Vue.js" alt="Vue.js" src={vue}/>
                            <img style={logoStyle} title="React.js" alt="React.js" src={react}/>
                            <img style={logoStyle} title="django, RestFramework" alt="django, rest" src={python}/>
                            <img style={logoStyle} title="typescript" alt="typescript" src={ts}/>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="col">
                            <img src={avatar} style={avatarStyle} alt="author" />
                        </div>
                        <div className="col">
                            <p className="text-center"><small className="about-avatar-text">Renat Suleymanov</small></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AboutMe;