import React, {useState} from "react"
import Image from "next/image";
import {capitalize} from "@/utils";

export default function DashCamPackages() {
    const [selectedService, setSelectedService] = useState("front");

    const imageSrc =
        selectedService === "front" ? "/installation-services/front-dashcam.jpg" : "/installation-services/front-and-rear-dashcam.png";

    const handleServiceChange = (service: string) => {
        setSelectedService(service);
    };

    return (
        <div className={"flex flex-col items-center mt-6"}>
            <div className="flex justify-center w-11/12 rounded-lg overflow-hidden">
                <SelectServiceButton
                    selectedService={selectedService}
                    handleServiceChange={handleServiceChange}
                    service={"front"}
                    price={70}
                />
                <SelectServiceButton
                    selectedService={selectedService}
                    handleServiceChange={handleServiceChange}
                    service={"front + rear"}
                    price={120}
                />
            </div>

            <ServiceDescription selectedService={selectedService}/>

            <div className="relative rounded-3xl overflow-hidden w-[375px] h-[300px] ">
                <Image
                    src={imageSrc}
                    alt={`${selectedService} dashcam image`}
                    fill
                />
            </div>

            <div className={"flex mt-4 mx-4 space-x-4 w-11/12"}>
                <BuyOnAmazonButton selectedService={selectedService}/>
                <ContactUsButton/>
            </div>

        </div>
    )
}

const ServiceDescription = ({selectedService}: { selectedService: string }) => {
    return (
        <>
            {selectedService === "front"
                ? (
                    <h4 className={"text-center text-md mx-4 text-gray-200 my-4"}>
                        Capture every detail of your journey with a front-facing dashcam.&nbsp;
                        Perfect for recording your drive and providing evidence in case of incidents.
                    </h4>
                ) : (
                    <h4 className={"text-center text-md mx-4 text-gray-200 my-4"}>
                        Get complete coverage with high-quality front and rear dashcams.&nbsp;
                        Monitor both ends of your vehicle for maximum accident protection and peace of mind on the road.
                    </h4>
                )
            }
            </>
    )
}

interface SelectServiceButtonProps {
    selectedService: string;
    handleServiceChange: (service: string) => void;
    service: string;
    price: number;
}

const SelectServiceButton = ({selectedService, handleServiceChange, service, price}: SelectServiceButtonProps) => {

    return (
        <button
            onClick={() => handleServiceChange(service)}
            className={`w-full flex justify-center items-center space-x-2 px-2 py-2 transition-all ${
                selectedService === service
                    ? "bg-gray-800 text-white"
                    : " text-gray-200 bg-gray-600"
            }`}
        >
            <span>{capitalize(service)}</span>
            {selectedService === service && (
                <div className="bg-white px-2  py-1 text-black rounded-full flex items-center justify-center">
                    ${price}
                </div>
            )}
        </button>
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
            <div className={"flex flex-col  items-center space-y-2"}>
                <span>Order now on</span>
                <img alt={"amazon logo"} className={"w-16  h-6"} src={"/installation-services/whiteamazonlogo.png"}/>
            </div>

        </a>
    )
}

const ContactUsButton = () => {
    return (
        <a href={"#information-form"} className={"flex items-center justify-center w-full bg-red-500 text-white px-4 py-2 rounded-lg"}>
            <span>Contact us</span>
        </a>
    )
}