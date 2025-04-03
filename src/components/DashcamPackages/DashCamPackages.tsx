import React from "react"
import Image from "next/image";
import ServiceDescription from "@/components/DashcamPackages/ServiceDescription";
import {useAtom} from "jotai";
import {selectedServiceAtom} from "@/atoms/dashcamFormAtoms";
import SelectDashcamDropdown from "@/components/DashcamPackages/SelectDashcamDropdown";

export default function DashCamPackages() {
    const [selectedService, setSelectedService] = useAtom(selectedServiceAtom);

    const getImageAlt = (serviceType: string) => {
        switch (serviceType) {
            case "front":
                return "Thinkware F70 Pro Front Dashcam";
            case "frontRear":
                return "RedTiger F7N Pro Front and Rear Dashcam";
            case "frontInterior":
                return "Vantrue N2X Front and Interior Dashcam";
            case "rearviewMirror":
                return "Wolfbox G840S Rearview Mirror Dashcam";
            default:
                return "Thinkware F70 Pro Front Dashcam";
        }
    }

    const handleServiceChange = (service: string) => {
        setSelectedService(service);
    };

    return (
        <div className={"flex flex-col items-center mt-6"}>
            <div className={"flex justify-center w-11/12 lg:w-1/3"}>
                <SelectDashcamDropdown selectedService={selectedService} handleServiceChange={handleServiceChange}/>
            </div>

            <ServiceDescription selectedService={selectedService}/>

            <div className="relative rounded-lg overflow-hidden w-[375px] h-[350px] ">
                <Image
                    src={`/dashcam-packages/${selectedService}.png`}
                    alt={getImageAlt(selectedService)}
                    fill
                    className="object-cover"
                />
            </div>

            <div className={"flex mt-4 mx-4 space-x-4 w-11/12 lg:w-1/3"}>
                <BuyOnAmazonButton selectedService={selectedService}/>
                <SeePricingButton/>
            </div>

        </div>
    )
}

interface BuyOnAmazonButtonProps {
    selectedService: string;
}

const BuyOnAmazonButton = ({selectedService}: BuyOnAmazonButtonProps) => {

    const getAmazonLink = () => {
        if (selectedService === "front") {
            return "https://amzn.to/40Lu4Fm";
        }
        if (selectedService === "frontRear") {
            return "https://amzn.to/4hqrpGl";
        }
        if (selectedService === "frontInterior") {
            return "https://amzn.to/4iIMuwC";
        }
        if (selectedService === "rearviewMirror") {
            return "https://amzn.to/425lhxx";
        }
    }

    return (
        <a
            href={getAmazonLink()}
            target="_blank"
            rel="noreferrer"
            className="w-full flex justify-center items-center space-x-4 px-4 py-2 bg-black text-white rounded-lg"
        >
            <div className={"flex flex-col items-center space-y-2"}>
                <span>Order now on</span>
                <img alt={"Amazon"} className={"w-16 h-6"} src={"/dashcam-packages/whiteamazonlogo.png"}/>
            </div>

        </a>
    )
}

const SeePricingButton = () => {
    return (
        <a href={"#pricing"}
           className={"flex items-center justify-center w-full bg-green-200 text-green-600 px-4 py-2 rounded-lg"}>
            <span>See pricing</span>
        </a>
    )
}