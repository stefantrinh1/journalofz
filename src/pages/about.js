import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/seo"
import("./routestyles/about.scss")

const About = () => {
    return (
        <Layout>
            <SEO title="Blog" description="testing" lang="en" meta="what what" />
            <div className="about__container">

                <h1> About Me</h1>
                <hr></hr>

                <img src="http://www.journalofz.com/wp-content/uploads/2019/02/IMG_2077-1020x600.jpg" alt="profile" />

                <p>Hello world! This is Z’s journal of adventures in medicine, food, and travel. And I’m Z!</p>

                <p>Two facts about me as of right now:</p>

                <ul>
                    <li>1) I’ll soon be starting medical school July 2020.</li>
                    <li>2) I recently got engaged! &lt;3 </li>
                </ul>

                <p>In my spare time, I enjoy traveling, eating, knitting, and chilling in front of Netflix. I hope you enjoy reading through my journal.</p>
            </div>
        </Layout>


    )
}

export default About