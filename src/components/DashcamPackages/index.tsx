"use client";

import DashCamPackages from "@/components/DashcamPackages/DashCamPackages";
import ServicesIncluded from "@/components/DashcamPackages/ServicesIncluded";
import YouShouldKnow from "@/components/DashcamPackages/YouShouldKnow";

export default function DashcamPackages() {

    return (
        <section id="installation-services" className="py-8 bg-grey-800">
            <h3 className="text-center text-red-500 font-bold text-2xl">
                Dashcam Packages
            </h3>

            <DashCamPackages/>
            <ServicesIncluded/>
            <YouShouldKnow/>
        </section>
    );
}
