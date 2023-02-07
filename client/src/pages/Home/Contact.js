import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Contact ()
{
    // Destructure data.
    const { portfolioData } = useSelector((state) => state.root);
    const { contact } = portfolioData;
    // const user = contacts[0];
    const user = contact;
    console.log(contact);
    // const user = {
    //     name: "Sean Brown",
    //     email: "sean.george.brown@gmail.com",
    //     age: "32",
    //     gender: "Male",
    //     mobile: "9166160102",
    //     country: "USA",
    //     state: "North Carolina",
    //     zipcode: "27332",
    // };
    return (
        <div>
            <SectionTitle title="Say Hello"></SectionTitle>
            <div className="flex sm:flex-col items-center justify-center">
                <div className="flex flex-col gap-1">
                    <h1 className="text-white text-xl">
                        {"{"}
                        { Object.keys( user ).map( ( key ) => (
                            // if ( key != "_id" )
                            key !== "_id" && <p className="ml-5">
                                &emsp;&emsp;&emsp;
                                <span className="text-highlightColor2">
                                    {key}
                                </span>
                                :{" "}
                                <span className="text-white">{user[key]}</span>
                            </p>
                        ))}
                        {"}"}
                    </h1>
                </div>
                <div className="h-[400px]">
                    <lottie-player
                        src="https://assets9.lottiefiles.com/packages/lf20_eroqjb7w.json"
                        background="transparent"
                        speed="1"
                        loop="1"
                        autoplay></lottie-player>
                </div>
            </div>
        </div>
    );
}

export default Contact;
