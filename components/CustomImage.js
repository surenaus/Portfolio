import React from 'react';

export default class CustomImage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <img src={this.props.image} className={this.props.styling} title={this.props.alt} aria-label={this.props.alt}/>
        )
    }
}
