"use client";

import DashCamPackages from "@/components/InstallationServices/DashCamPackages";
import ServicesIncluded from "@/components/InstallationServices/ServicesIncluded";
import YouShouldKnow from "@/components/InstallationServices/YouShouldKnow";

export default function InstallationServices() {

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
