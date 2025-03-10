import React from "react"
import Image from "next/image";
import ServiceDescription from "@/components/DashcamPackages/ServiceDescription";
import SelectServiceButton from "@/components/DashcamPackages/SelectServiceButton";
import {useAtom} from "jotai";
import {selectedServiceAtom} from "@/atoms/selectedServiceAtom";

export default function DashCamPackages() {
    const [selectedService, setSelectedService] = useAtom(selectedServiceAtom);

    const imageSrc =
        selectedService === "front" ? "/dashcam-packages/front-dashcam.jpg" : "/dashcam-packages/front-and-rear-dashcam.png";
    const imageAlt = selectedService === "front"
        ? "Thinkware F70 Pro Front Dashcam"
        : "RedTiger F7N Pro Front and Rear Dashcam";

    const handleServiceChange = (service: string) => {
        setSelectedService(service);
    };

    return (
        <div className={"flex flex-col items-center mt-6"}>
            <div className="flex justify-center w-11/12 lg:w-1/3 rounded-lg overflow-hidden bg-grey-400 ">
                <SelectServiceButton
                    selectedService={selectedService}
                    handleServiceChange={handleServiceChange}
                    service={"front"}
                />
                <SelectServiceButton
                    selectedService={selectedService}
                    handleServiceChange={handleServiceChange}
                    service={"front + rear"}
                />
            </div>

            <ServiceDescription selectedService={selectedService}/>

            <div className="relative rounded-lg overflow-hidden w-[375px] h-[350px] ">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                />
            </div>

            <div className={"flex mt-4 mx-4 space-x-4 w-11/12 lg:w-1/3"}>
                <BuyOnAmazonButton selectedService={selectedService}/>
                <ContactUsButton/>
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
        if (selectedService === "front + rear") {
            return "https://amzn.to/4hqrpGl";
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
                <img alt={"amazon logo"} className={"w-16  h-6"} src={"/dashcam-packages/whiteamazonlogo.png"}/>
            </div>

        </a>
    )
}

const ContactUsButton = () => {
    return (
        <a href={"#information-form"}
           className={"flex items-center justify-center w-full bg-red-500 text-white px-4 py-2 rounded-lg"}>
            <span>Contact us</span>
        </a>
    )
}