import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
// import { projects } from "../../resources/projects";

function Projects() {
    const { portfolioData } = useSelector((state) => state.root);
    // Destructure data.
    const { projects } = portfolioData;
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div>
            <SectionTitle title="Projects"></SectionTitle>

            <div className="flex sm:flex-col py-10 gap-10">
                <div className="flex flex-col gap-5 border-l-2 border-[#bdacac] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
                    {projects.map((project, index) => (
                        <div
                            className="cursor-pointer"
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }}>
                            <h1
                                className={`text-xl px-5 py-3 sm:w-40 ${
                                    selectedItemIndex === index
                                        ? "text-highlightColor2 border-highlightColor2 border-l-4 -ml-[2px] bg-[#3f5e809b]"
                                        : "text-white"
                                }`}>
                                {project.title}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-10 sm:flex-col">
                    <img
                        src={projects[selectedItemIndex].image}
                        alt=""
                        className="h-60 w-72"
                    />
                    <div className="flex flex-col gap-5">
                        <h1 className="text-highlightColor text-xl">
                            {projects[selectedItemIndex].title}
                        </h1>
                        <p className="text-highlightColor2">
                            {projects[selectedItemIndex].description}
                        </p>
                        <p className="text-white">
                            {projects[selectedItemIndex].context}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
