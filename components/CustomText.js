import React from 'react';

export default class CustomText extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
          <span>{this.props.text}</span>
        )
    }
}