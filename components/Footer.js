import React from 'react';
import '../static/stylus/components/footer.css';

const footerstyle = {
  width: '100%',
  height: '60px',
  lineHeight: '60px',
  backgroundColor: '#f7f7f7',
  textAlign: 'center'
} 

class Footer extends React.Component {

  render() {
      return (
        <footer style={footerstyle}>
          Can be yours since july of 2019.
          <span className="message" style={{display: 'none'}}>AHAHAH my life's become better!!!</span>
        </footer>
      )
  }
}
export default Footer;