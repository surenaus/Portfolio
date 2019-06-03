import React from 'react';

const footerstyle = {
  width: '100%',
  height: '60px',
  lineHeight: '60px',
  backgroundColor: '#f7f7f7',
  textAlign: 'center',
  color: 'black',
  fontWeight: 'bold',
  letterSpacing: '0.4vw'
} 

class Footer extends React.Component {

  render() {
      return (
        <footer style={footerstyle}>
          Can be yours since july of 2019.
        </footer>
      )
  }
}
export default Footer;