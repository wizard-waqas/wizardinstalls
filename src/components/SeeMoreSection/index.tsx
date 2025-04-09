import React from "react"

export default function SeeMoreSection() {
    return (
        <div className={"py-8"}>
            <h3 className="text-center text-red-500 font-bold text-3xl">
                See More
            </h3>

            <a href={'https://www.instagram.com/wizard.dashcam.installs/'} className={"flex justify-center mt-4"}>
                <div className={"flex items-center bg-white w-11/12 lg:w-1/3 rounded-xl p-2"}>
                    <img className={"w-16 mr-2"} src={'/see-more/ig.png'} alt="Instagram -"/>
                    <div className={"flex flex-col text-black w-full"}>
                        {/*<span className={"text-xl text-center"}>Follow us</span>*/}
                        <p className={" font-bold text-lg text-center"}>@Wizard.Dashcam.Installs</p>
                    </div>
                </div>
            </a>

            <a href={"https://www.google.com/search?q=wizard+dashcam+installs"} className={"flex justify-center mt-4"}>
                <div className={"flex items-center bg-white w-11/12 lg:w-1/3 rounded-xl p-2"}>
                    <img className={"w-16 mr-2"} src={'/see-more/google-business.png'} alt="Google Review"/>
                    <div className={"flex flex-col text-black w-full"}>
                        <p className={" font-bold text-lg text-center"}>See our reviews on Google</p>
                    </div>
                </div>
            </a>


        </div>
    )
}
