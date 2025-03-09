import React, {useState} from "react"
import Image from "next/image";
import GreyDivider from "@/components/GreyDivider";
import {useAtom} from "jotai";
import {selectedServiceAtom} from "@/atoms/selectedServiceAtom";

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

                <PriceItem/>

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

const PriceItem = () => {
    const [selectedService, _] = useAtom(selectedServiceAtom);
    const [includeDashcam, setIncludeDashcam] = useState(true);

    const prices = {
        front: {service: 70, full: 150},
        frontRear: {service: 120, full: 240},
    };

    const selectedPrice = selectedService === "front"
        ? includeDashcam ? prices.front.full : prices.front.service
        : includeDashcam ? prices.frontRear.full : prices.frontRear.service;

    return (
        <div className="mt-6 bg-grey-400 p-4 rounded-lg shadow-md text-white w-full">
            <h4 className="text-2xl font-bold mb-2 text-green-200">Pricing</h4>

            <div className="flex justify-between items-center">
                <span className="text-lg">Dashcam Included</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={includeDashcam}
                        onChange={() => setIncludeDashcam(!includeDashcam)}
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 rounded-full peer
                            peer-checked:bg-green-500 after:absolute after:top-1 after:left-1 after:bg-white
                            after:border after:rounded-full after:h-4 after:w-4 after:transition-all
                            peer-checked:after:translate-x-5">
                    </div>
                </label>
            </div>

            <GreyDivider/>

            <div className="text-gray-300">
                <div className="flex justify-between">
                    <span>Installation Service</span>
                    <span>${selectedService === "front" ? prices.front.service : prices.frontRear.service}</span>
                </div>
                <div className="flex justify-between">
                    <span>Dashcam</span>
                    <span>{includeDashcam ? `$${selectedService === "front" ? 80 : 120}` : "--"}</span>
                </div>
                <div className="flex justify-between">
                    <span>On-Site Installation</span>
                    <span>Included</span>
                </div>
            </div>
            <GreyDivider/>
            <div className="flex justify-between text-lg">
                <span>Final Price:</span>
                <span>${selectedPrice}</span>
            </div>
        </div>
    )
}
