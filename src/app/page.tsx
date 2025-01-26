import Image from "next/image";
import InstallationServices from "@/components/InstallationServices";
import AccessoryServices from "@/components/AccessoryServices";
import {IoIosArrowDown} from "react-icons/io";

export default function Home() {
    return (
        <div className="relative min-h-screen w-full">

            <div className="relative h-screen w-full">
                <Image
                    src="/lambo.jpg"
                    alt="Car Background"
                    fill
                    className="object-cover -z-10 "
                    priority
                />

                <div className="relative flex flex-col items-center text-white pt-16">
                    <div className="bg-red-500 mx-8 w-5/6 py-2 flex rounded-lg items-center justify-center">
                        <h1 className="text-white font-beiruti text-center text-xl">
                            WIZARD DASHCAM INSTALLS
                        </h1>
                    </div>
                    <h2 className="text-center font-faculty-glyphic font-bold text-gray-300 text-4xl mt-12">
                        For when they dash,<br/> you've got the cam.
                    </h2>

                    <a className={"flex border-2 px-4 py-4 rounded-xl mt-12 text-xl"} href="#installation-services">
                        Installations starting at $70
                    </a>

                    <IoIosArrowDown className={"mt-2 animate-bounceFade"} size={32}/>
                </div>
            </div>

            <InstallationServices/>
            <AccessoryServices/>
        </div>
    );
}


{/*<h2 className="text-center text-white text-xl mt-8">*/
}
{/*    Dashcam + Installation starting at $150*/
}
{/*</h2>*/
}

{/*<div className={"flex justify-center my-4 w-full"}>*/
}
{/*    <div className={"border-b-2 w-11/12 border-red-300 rounded-full"}/>*/
}
{/*</div>*/
}

{/*<div className={"flex items-center"}>*/
}
{/*    <span className={"text-4xl mr-2"}>📍</span>*/
}
{/*    <p className={"text-xl"}>*/
}
{/*        Mobile service available in*/
}
{/*        <br/>*/
}
{/*        <span className={"text-red-300"}>Jersey City + Woodbridge</span>*/
}
{/*    </p>*/
}
{/*</div>*/
}

{/*<h3 className="text-center text-white text-xl mt-4 ">*/
}
{/*    Contact us at <a className={"underline"} href="tel:+13474335693">+1 (347) 433-5693</a>*/
}
{/*</h3>*/
}
