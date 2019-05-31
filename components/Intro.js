import React from 'react';
import { Container, Row, Col } from 'react-grid-system'
import '../static/stylus/components/intro.css';

class Intro extends React.Component {
    render() {
      return (
        <Container className="intro">
          <Row className="main"
            style={{
              display: 'flex',
              alignItems: 'center',
              minHeight: '100vh',
              textAlign: 'center'
            }}>
            <Col>
              <h1>My Name's Renat</h1>
              <h1>I'm a FullStack Developer</h1>
              <p>Work Smart, Not Hard</p>
            </Col>
          </Row>
        </Container>
      )
    }
}
export default Intro;