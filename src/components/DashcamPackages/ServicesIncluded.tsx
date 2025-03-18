import React from "react"
import Image from "next/image";
import GreyDivider from "@/components/GreyDivider";
import YouShouldKnow from "@/components/DashcamPackages/YouShouldKnow";
import InstallationQuote from "@/components/DashcamPackages/InstallationQuote";

export default function ServicesIncluded() {
    return (
        <div className="flex flex-col items-center">
            <div className="mt-6 max-w-xl text-center text-white w-11/12 lg:w-full">
                <h4 className="text-2xl font-bold mb-2 text-gray-300">Our service includes:</h4>

                <ul className="flex flex-col items-center p-4 space-y-4 w-full bg-grey-400 rounded-lg">
                    <ServiceItem icon={"location"} description={"Mobile installation at your location"}/>
                    <GreyDivider/>
                    <ServiceItem icon={"cable"} description={"Hidden wires for a clean & integrated finish"}/>
                    <GreyDivider/>
                    <ServiceItem icon={"record"} description={"Ensure the dashcam records and saves footage"}/>
                </ul>

                <YouShouldKnow/>
                <InstallationQuote/>
            </div>
        </div>
    )
}

interface ServiceItemProps {
    icon: string;
    description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({icon, description}) => {
    return (
        <li className={"flex items-center w-full"}>
            <Image src={`/dashcam-packages/${icon}.png`} width={44} height={44} alt={icon}/>
            <span className={"ml-4 text-left"}>{description}</span>
        </li>
    );
};
