import React from 'react';
import { Container, Row, Col } from 'react-grid-system'
import '../static/stylus/components/intro.css';

class Intro extends React.Component {
    render() {
      return (
        <Container className="intro">
          <Row className="main row-main" align="center">
            <Col className="lines">
              <h1 className="first-line">My Name's Renat</h1>
              <h1 className="second-line">I'm a FullStack Developer</h1>
              <p>Work Smart, Not Hard</p>
            </Col>
          </Row>
        </Container>
      )
    }
}
export default Intro;