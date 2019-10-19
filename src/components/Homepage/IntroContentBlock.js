// import { Link } from "gatsby";
import React from "react";
import MedicalIcon from '../../images/doctor.png';
import FoodIcon from '../../images/food.png';
import TravelIcon from '../../images/travel.png';
import Img from "gatsby-image";
import Styles from "./IntroContentBlock.module.scss";
import SectionTitle from "./SectionTitle";

const IntroContentBlock = () => (

<section className={Styles.intro}>
    <SectionTitle title='What Should We Talk About?' textAlign='center' />
    <div className={Styles.introBlocks}>
    <div>
        <img className={Styles.introContentImage} src={MedicalIcon} />
        <h2>Medical School</h2>
        <p>
        I am currently training to be a doctor and hopefully on track to achiving my dream career
        </p>
    </div>
    <div>
        <img className={Styles.introContentImage} src={FoodIcon} />
        <h2>Foodie!!</h2>
        <p>
            Healthy and Colourful food has always been a passion of mine and discover the world of food with me. 
        </p>
    </div>

    <div>
        <img className={Styles.introContentImage} src={TravelIcon} />
        <h2>Travel</h2>
        <p>
            Explore the world from the Taj mahal to the Golden gate bridge to the most unexplored places. Get out and go see the world.
        </p>
    </div>
    </div>
</section>

)

export default IntroContentBlock