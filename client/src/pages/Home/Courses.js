import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";
// import { courses } from "../../resources/courses";

function Courses() {
    // Destructure data.
    const { portfolioData } = useSelector((state) => state.root);
    const { educations } = portfolioData;

    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    return (
        <div>
            <SectionTitle title="Education"></SectionTitle>

            <div className="flex sm:flex-col py-10 gap-10">
                <div className="flex flex-col gap-5 border-l-2 border-[#bdacac] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
                    {educations.map((degree, index) => (
                        <div
                            className="cursor-pointer"
                            onClick={() => {
                                setSelectedItemIndex(index);
                            }}>
                            <h1
                                className={`text-xl px-5 py-3 sm:w-40 ${
                                    selectedItemIndex === index
                                        ? "text-highlightColor2 border-highlightColor2 border-l-4 -ml-[2px] bg-[#3f5e809b] "
                                        : "text-white "
                                }`}>
                                {degree.location}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-10 sm:flex-col">
                    <div className="flex flex-col gap-5">
                        <h1 className="text-highlightColor text-xl">
                            {educations[selectedItemIndex].location}
                        </h1>
                        <p className="text-highlightColor2">
                            {educations[selectedItemIndex].degree}
                        </p>
                    </div>
                    <img
                        src={educations[selectedItemIndex].image}
                        alt=""
                        className="w-80"
                    />
                </div>
            </div>
        </div>
    );
}

export default Courses;
