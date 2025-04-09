import React from "react"
import Image from "next/image";
import GreyDivider from "@/components/GreyDivider";

export default function ServicesIncluded() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="mt-6 text-center bg-grey-400 p-4 rounded-lg text-white w-11/12 lg:w-1/3">
                <h4 className="text-2xl font-bold mb-2 text-gray-300">Our service includes:</h4>

                <GreyDivider/>

                <ul className="flex flex-col items-center space-y-4 w-full">
                    <ServiceItem icon={"location"} description={"Mobile installation at your location"}/>
                    <ServiceItem icon={"cable"} description={"Hidden wires for a clean & integrated finish"}/>
                    <ServiceItem icon={"record"} description={"We teach you how to use the dashcam"}/>
                </ul>
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
