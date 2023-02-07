import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Courses from "./Courses";
import Contact from "./Contact";
import Footer from "./Footer";
import SocialIcons from "./SocialIcons";
import { useSelector } from "react-redux";

function Home() {
    const { portfolioData } = useSelector((state) => state.root);
    return (
        <div className="bg-secondary">
            <Header></Header>
            {portfolioData && (
                <div className="px-40 sm:px-5 ">
                    <Intro></Intro>
                    <About></About>
                    <Experiences></Experiences>
                    <Projects></Projects>
                    <Courses></Courses>
                    <Contact></Contact>
                    <Footer></Footer>
                    <SocialIcons></SocialIcons>
                </div>
            )}
        </div>
    );
}

export default Home;
