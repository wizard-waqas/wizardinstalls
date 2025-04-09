import React from "react"
import Carousel from "@/components/BackupCameras/Carousel";
import ServicesIncluded from "@/components/DashcamPackages/ServicesIncluded";
import BackupCameraPackages from "@/components/BackupCameras/BackupCameraPackages";

export default function SplashSection() {
    return (
        <section className={"py-8 bg-grey-800"}>
            <a className={"flex items-center justify-center"} href="/">
                <img className={"w-16 mr-4"} src={'/logo.png'} alt={"We install dashcams and backup cameras"}/>
                <h1 className={"text-2xl font-bold"}>Wizard Dashcam Installs</h1>
            </a>

            <h3 className="text-center text-red-500 font-bold text-2xl mt-4">
                Backup Camera Packages
            </h3>
            <div className={"flex justify-center"}>
                <p className={"w-11/12 text-center mt-2"}>
                    We offer backup camera installation services complete with Apple CarPlay & Android Auto head
                    units.
                </p>
            </div>

            <div className={"flex justify-center"}>
                <Carousel/>
            </div>

            <ServicesIncluded/>
            <BackupCameraPackages/>
        </section>
    )
}
