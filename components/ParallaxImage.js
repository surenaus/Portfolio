import { Parallax, ParallaxProvider  } from 'react-scroll-parallax';

const ParallaxImageChild = ({image}) => (
  <Parallax
    className="custom-class"
    style={{ margin: 0, padding: 0, width: "100vw", height: "100%" }}
    y={[-20, 20]}
        tagOuter="figure">
        <img src={image} style={{margin: 0, padding: 0, width:"100vw", height:"150vh"}} />
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
