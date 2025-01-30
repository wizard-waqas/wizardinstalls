import React from "react"
import Image from "next/image";

export default function ServicesIncluded() {
    return (
        <div className="flex flex-col items-center">
            <div className="mt-6 max-w-xl text-center text-white">
                <h4 className="text-2xl font-bold mb-2 text-gray-300">Our service includes:</h4>

                <ul className="space-y-4">
                    <ServiceItem icon={"location"} description={"Mobile installation at your location"}/>
                    <ServiceItem icon={"cable"} description={"Hidden wires for a clean & integrated finish"}/>
                    <ServiceItem icon={"record"} description={"Ensuring the dashcam records and saves footage"}/>
                </ul>
            </div>
        </div>
    )
}

interface ServiceItemProps {
    icon: string;
    description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, description }) => {
    return (
        <li className={"bg-grey-400 p-4 mx-4 rounded-lg flex items-center"}>
            <Image src={`/installation-services/${icon}.png`} width={44} height={44} alt={icon}/>
            <span className={"ml-4 text-left"}>{description}</span>
        </li>
    );
};