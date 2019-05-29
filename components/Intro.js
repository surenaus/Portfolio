import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../static/stylus/components/intro.css';

const BorderR = {
  border: '1px solid red',
  margin: '-70px 0',
  //padding: '-40px 0',
};
const BorderY = {
  border: '1px solid yellow',
};
class Intro extends React.Component {
    render() {
      return (
        <Container>
          <Row className="main">
            <Col sm={12} className="center-col">
              <Row><Col><h1>My Name's Renat</h1></Col></Row>
              <Row className="row-text"><Col><h1>I'm FullStack Developer</h1></Col></Row>
              <Row><Col><p>Work Smart, Not Hard</p></Col></Row>
            </Col>
          </Row>
        </Container>
      )
    }
}
export default Intro;