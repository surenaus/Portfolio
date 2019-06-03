import { Parallax, ParallaxProvider  } from 'react-scroll-parallax';

const ParallaxImageChild = ({image}) => (
  <Parallax
    className="custom-class"
    style={{ minHeight: "100%" }}
    y={[-20, 20]}
        tagOuter="figure">
        <img src={image} style={{minHeight:"100%"}} />
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
