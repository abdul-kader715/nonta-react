import FeaturesItem from "./FeaturesItem";

import img1 from "../../images/features/1.png";
import img2 from "../../images/features/2.png";
import img3 from "../../images/features/3.png";
const FeaturesData = [
    {
        id: 1,
        icon: img1,
        title: "Medical treatment",
        text: "We poor standard chunk of Denounce righteous",
    
    },
    {
        id: 2,
        icon: img2,
        title: "Team off project",
        text: "We poor standard chunk of Denounce righteous",
    
    },
    {
        id: 3,
        icon: img3,
        title: "Donate to case",
        text: "We poor standard chunk of Denounce righteous",
    
    },
   
]



const FeaturesSection = () => {

    return(
        <section className="features_section">
        <div className="container">
          <div className="row">
            {FeaturesData.map((item,ifeature) => (
                <div className="col col-xl-4 col-lg-6 col-md-6 col-12" key={ifeature}>
                    <FeaturesItem image={item.icon} title={item.title} text={item.text} />
                </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default FeaturesSection;