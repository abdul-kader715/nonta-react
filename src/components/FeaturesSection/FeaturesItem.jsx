
import Shape1 from '../../images/features/shape.png'
import ShapeActive from '../../images/features/active-shape.png'

const FeaturesItem = ({text, title, image}) => {

    return (

        <div className="item">
                <div className="icon">
                  <img src={image} alt="" />
                </div>
                <div className="content">
                  <h2>{title}</h2>
                  <span>{text}</span>
                </div>
                <div className="shape">
                  <img src={Shape1} alt="" />
                </div>
                <div className="shape-active">
                  <img src={ShapeActive} alt="" />
                </div>
              </div>
    )
}
export default  FeaturesItem