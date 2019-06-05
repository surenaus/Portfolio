import React from 'react';
import { Container, Row, Col }  from 'react-grid-system'
import '../static/stylus/components/port.css';
import logo from '../static/logo.png'
import f from '../static/images/lg.webp'
import s from '../static/images/sm-redux.webp'
import t from '../static/images/vuex.webp'

class Cards extends React.Component {
    render() {
        return (
            <Container 
                className="cards-project-section"
                >
                <Row>
                    <Col lg={12} className="display-4 cards-title">
                        <h1>
                        Projects
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <figure className="snip1529">
                            <img src={f} alt="pr-sample13" />
                            <div className="date"><span className="day">7</span><span className="month">June</span></div>
                            <figcaption>
                                <h3>SovCombank</h3>
                                <p>Landing of banking service Halva.</p>
                            </figcaption>
                            <div className="hover"><i className="ion-android-open"></i></div>
                            <a href="https://drive.google.com/open?id=1XSXzwNx-u2DogeUr3fYHSmrZuDs0dmSh" rel="noopener noreferrer" target="_blank"></a>
                        </figure>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <figure className="snip1529">
                            <img src={s} alt="pr-sample13" />
                            <div className="date"><span className="day">11</span><span className="month">May</span></div>
                            <figcaption>
                                <h3>classic TodoApp React</h3>
                                <p>CRUD, Redux, server requests.</p>
                            </figcaption>
                            <div className="hover"><i className="ion-android-open"></i></div>
                            <a href="https://github.com/surenaus/react_todo_beeje"  rel="noopener noreferrer" target="_blank"></a>
                        </figure>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <figure className="snip1529">
                            <img src={t} alt="pr-sample13" />
                            <div className="date"><span className="day">10</span><span className="month">May</span></div>
                            <figcaption>
                                <h3>Classic TodoApp Vue</h3>
                                <p>Vuex, without server side, data is storing in local cache.</p>
                            </figcaption>
                            <div className="hover"><i className="ion-android-open"></i></div>
                            <a href="https://github.com/surenaus/vue-todo-app" rel="noopener noreferrer" target="_blank"></a>
                        </figure>
                    </Col>
                    <Col xl={4} lg={6} md={6} sm={12}>
                        <figure className="snip1529">
                            <img src={logo} alt="pr-sample13" className="no-image"/>
                            <div className="date"><span className="day">7</span><span className="month">June</span></div>
                            <figcaption>
                                <h3>PhotoTurntable API</h3>
                                <p>Thesis diploma Django project that allows to extract music from photo.</p>
                            </figcaption>
                            <div className="hover"><i className="ion-android-open"></i></div>
                            <a href="http://gititis.kpfu.ru/suren/PhotoTurntable" rel="noopener noreferrer" target="_blank"></a>
                        </figure>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Cards;