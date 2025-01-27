import React, {useEffect} from "react"
import Image from "next/image";
import {IoIosArrowDown} from "react-icons/io";
import {useRouter} from "next/router";
import {analytics} from "@/firebase";
import {logEvent} from "@firebase/analytics";

export default function SplashSection() {

    return (

        <div className="relative h-screen w-full">
            <Image
                src="/lambo.jpg"
                alt="Car Background"
                fill
                className="object-cover -z-10 "
                priority
            />

            <div className="relative flex flex-col items-center text-white pt-8">
                <div className="bg-red-500 mx-8 w-5/6 py-2 flex rounded-lg items-center justify-center">
                    <h1 className="text-white font-beiruti text-center text-xl">
                        WIZARD DASHCAM INSTALLS
                    </h1>
                </div>
                <h2 className="text-center font-faculty-glyphic font-bold text-gray-300 text-4xl mt-12">
                    For when they dash,<br/> you've got the cam.
                </h2>

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
