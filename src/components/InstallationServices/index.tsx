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
            <h4 className={"text-center mt-4 font-bold text-xl mx-4 text-gray-200"}>
                Choose your coverage: Front camera or full front + rear dashcam setups
            </h4>

            <DashCamPackages/>
            <ServicesIncluded/>
            <YouShouldKnow/>
        </section>
    );
}
