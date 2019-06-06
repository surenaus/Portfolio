import { Parallax, ParallaxProvider  } from 'react-scroll-parallax';

const ParallaxImageChild = ({image}) => (
  <Parallax
    className="custom-class min-height-fill" y={[-20, 20]} tagOuter="figure">
        <img src={image} className="min-height-fill" alt="back-image"/>
    </Parallax>
);

export default class ParallaxImage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ParallaxProvider><ParallaxImageChild image={this.props.image}/></ParallaxProvider>
        );
    }
}
