import React from "react"
import Image from "next/image";
import {IoIosArrowDown} from "react-icons/io";
import HeroCTAButton from "@/components/SplashSection/HeroCTAButton";

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

            <div className="flex flex-col items-center text-white pt-8">
                <div className="mx-8 w-5/6 lg:w-1/3 py-2 flex rounded-lg items-center justify-center">
                    <h1 className={`text-red-300 text-center text-2xl font-bold lg:text-4xl`}>
                        WIZARD DASHCAM INSTALLS
                    </h1>
                </div>
                <h2 className="text-center font-bold text-gray-300 text-4xl mt-8">
                    For when they dash,<br/> you've got the cam.
                </h2>

                <h3 className={"text-center mt-4 text-gray-400"}>
                    📍Mobile dashcam installations servicing <br/>Woodbridge, Jersey City, and surrounding areas.
                </h3>

                <div className={"flex flex-col items-center "}>
                    <div className={"flex flex-col items-center w-full h-full mt-4 space-y-2 lg:space-y-0 lg:space-x-2 lg:flex-row"}>
                        <HeroCTAButton type={"dashcam"}/>
                        <HeroCTAButton type={"backup"}/>
                    </div>
                    <IoIosArrowDown className={"text-red-500 mt-2 animate-bounceFade"} size={32}/>
                </div>
            </div>
        </div>
    )
}
