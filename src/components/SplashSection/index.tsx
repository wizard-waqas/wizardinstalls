import React from "react"
import Image from "next/image";
import {IoIosArrowDown} from "react-icons/io";
import {prices} from "@/utils";

export default function SplashSection() {

    return (

        <div className="relative h-screen w-full">
            <Image
                src="/lambo.jpg"
                alt="Wizard Dashcam Installs offers expert, mobile dashcam installation services for cars, trucks, and fleet vehicles. Whether you need front and rear dashcam setups, 24/7 recording, or Apple Carplay installation, we’ve got you covered. Serving Woodbridge, Jersey City, and surrounding areas with fast, reliable, and affordable dashcam installation."
                fill
                className="object-cover -z-10"
                priority
            />

            <div className="relative flex flex-col items-center text-white pt-8">
                <div className="border-2 mx-8 w-5/6 lg:w-1/3 py-2 flex rounded-lg items-center justify-center">
                    <h1 className={`text-red-300 text-center text-xl font-bold lg:text-3xl`}>
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

                <a className={"flex flex-col items-center"} href="#dashcam-packages">
                    <span className={"bg-red-500 p-4 rounded-lg mt-12 text-xl"}>
                        Installations starting at ${prices["front"].service}
                    </span>
                    <IoIosArrowDown className={"text-red-500 mt-2 animate-bounceFade"} size={32}/>
                </a>

            </div>
        </div>
    )
}
