import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function About() {
    const { loading, portfolioData } = useSelector((state) => state.root);
    // Destructure data.
    const { about } = portfolioData;
    const { skills, lottieURL, description1, description2 } = about; // = abouts[0];

    return (
        <div>
            <SectionTitle title="About"></SectionTitle>
            <div className="flex w-full items-center justify-between sm:flex-col ">
                <div className="h-[70vh] w-1/2 sm:w-full">
                    <lottie-player
                        src={lottieURL || ""}
                        background="transparent"
                        speed="1"
                        loop
                        autoplay></lottie-player>
                </div>
                <div className="flex flex-col gap-5 w-1/2 sm:w-full px-10">
                    <p className="text-white">{description1 || ""}</p>
                    <p className="">{description2 || ""}</p>
                </div>
            </div>

            <div className="py-5">
                <h1 className="text-highlightColor text-2xl">
                    Here are a few of my skills and the technologies i've been
                    working with:
                </h1>
                <div className="about-skill-container flex flex-wrap gap-5 mt-5">
                    {skills.map((skill, index) => (
                        <div className="about-skill-cell border border-tertiary">
                            <h1 className="about-skill-text text-white">
                                {skill}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;
