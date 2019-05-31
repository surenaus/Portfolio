import React from 'react';
import { Container, Row, Col }  from 'react-grid-system'
import '../static/stylus/components/port.css';
import girl from '../static/images/tsc.webp'
import logo from '../static/logo.png'
import f from '../static/images/lg.webp'
import s from '../static/images/sm-redux.webp'
import t from '../static/images/vuex.webp'

class Cards extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>
                        Source Code Projects
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <figure className="snip1529">
                            <img src={f} height="200px" width="100%" alt="pr-sample13" />
                            <div className="date"><span className="day">7</span><span className="month">June</span></div>
                            <figcaption>
                                <h3>PhotoTurntable API</h3>
                                <p>Thesis diploma Django project that allows to extract music from photo.</p>
                            </figcaption>
                            <div className="hover"><i className="ion-android-open"></i></div>
                            <a href="http://gititis.kpfu.ru/suren/PhotoTurntable" rel="noopener noreferrer" target="_blank"></a>
                        </figure>
                    </Col>
                    <Col lg={3}>
                        <figure className="snip1529">
                            <img src={s} alt="pr-sample13" />
                            <div className="date"><span className="day">11</span><span className="month">May</span></div>
                            <figcaption>
                                <h3>classNameic TodoApp React</h3>
                                <p>CRUD, Redux, server requests.</p>
                            </figcaption>
                            <div className="hover"><i className="ion-android-open"></i></div>
                            <a href="https://github.com/surenaus/react_todo_beeje"  rel="noopener noreferrer" target="_blank"></a>
                        </figure>
                    </Col>
                    <Col lg={3}>
                        <figure className="snip1529">
                            <img src={t} alt="pr-sample13" />
                            <div className="date"><span className="day">10</span><span className="month">May</span></div>
                            <figcaption>
                                <h3>Ckassic TodoApp Vue</h3>
                                <p>Vuex, without server side, data is storing in local cache.</p>
                            </figcaption>
                            <div className="hover"><i className="ion-android-open"></i></div>
                            <a href="https://github.com/surenaus/vue-todo-app" rel="noopener noreferrer" target="_blank"></a>
                        </figure>
                    </Col>
                    <Col lg={3}>
                        <figure className="snip1529">
                            <img src={logo} height="200px" width="100%" alt="pr-sample13" />
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