import React from "react";

function SocialIcons() {
    return (
        <div className="fixed left-0 bottom-0 px-10 sm:static">
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-3 sm:flex-row">
                    <a href="https://www.google.com/">
                        {" "}
                        <i class="social-icon ri-facebook-circle-line text-gray-400 text-2xl"></i>
                    </a>
                    <a href="https://www.google.com/">
                        {" "}
                        <i class="social-icon ri-mail-line text-gray-400 text-2xl"></i>
                    </a>
                    <a href="https://www.google.com/">
                        {" "}
                        <i class="social-icon ri-instagram-line text-gray-400 text-2xl"></i>
                    </a>
                    <a href="https://www.google.com/">
                        {" "}
                        <i class="social-icon ri-linkedin-box-line text-gray-400 text-2xl"></i>
                    </a>
                    <a href="https://www.google.com/">
                        {" "}
                        <i class="social-icon ri-github-line text-gray-400 text-2xl"></i>
                    </a>
                </div>
                <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
            </div>
        </div>
    );
}

export default SocialIcons;
