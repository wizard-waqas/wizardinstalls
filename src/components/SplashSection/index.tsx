import React from "react"
import Image from "next/image";
import {IoIosArrowDown} from "react-icons/io";

export default function SplashSection() {

    return (

        <div className="relative h-screen w-full">
            <Image
                src="/lambo.jpg"
                alt="Wizard Dashcam Installs offers expert, mobile dashcam installation services for cars, trucks, and fleet vehicles. Whether you need front and rear dashcam setups, 24/7 recording, or Apple Carplay installation, we’ve got you covered. Serving Woodbridge, Jersey City, and surrounding areas with fast, reliable, and affordable dashcam installation."
                fill
                className="object-cover -z-10 "
                priority
            />

            <div className="relative flex flex-col items-center text-white pt-8">
                <div className="bg-red-500 mx-8 w-5/6 py-2 flex rounded-lg items-center justify-center">
                    <h1 className={`text-white text-center text-xl font-bold`}>
                        WIZARD DASHCAM INSTALLS
                    </h1>
                </div>
                <h2 className="text-center font-bold text-gray-300 text-4xl mt-8">
                    For when they dash,<br/> you've got the cam.
                </h2>
                {/*📍*/}
                <h3 className={"text-center mt-4 text-gray-400"}>
                    Mobile dashcam installations servicing <br/>Woodbridge, Jersey City, and surrounding areas.
                </h3>

                <h5 className={"hidden md:block mt-8 text-yellow-500 underline text-center"}>
                    Sorry we have not yet made our website responsive for larger displays!
                    <br/>Please view on mobile.
                </h5>

                <a className={"flex flex-col items-center"} href="#installation-services">
                    <span className={" border-2 px-4 py-4 rounded-xl mt-12 text-xl"}>
                        Installations starting at $70
                    </span>
                    <IoIosArrowDown className={"mt-2 animate-bounceFade"} size={32}/>
                </a>

            </div>
        </div>
    )
}
