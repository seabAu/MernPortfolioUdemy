import React from "react";

function Footer() {
    return (
        <div>
            <div className="h-[1px] w-full bg-gray-700"></div>
            <div className=''></div>
            <div className="flex flex-col items-center justify-center py-10 opacity-70">
                    
                <h1 className="text-white">Designed by <span className="text-highlightColor2"> Sean G Brown</span></h1>
                <h1 className="text-white">
                    Original by 
                    <span className="text-highlightColor2"> K.Sathyaprakash Reddy</span>
                </h1>
                <h1 className="text-white"></h1>
            </div>
        </div>
    );
}

export default Footer;
