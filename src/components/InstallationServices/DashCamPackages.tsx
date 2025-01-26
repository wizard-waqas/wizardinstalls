import React, {useState, useEffect} from "react"
import Image from "next/image";
import {capitalize} from "@/utils";
import {IoIosArrowForward} from "react-icons/io";

export default function DashCamPackages() {
    const [selectedService, setSelectedService] = useState("front");

    const imageSrc =
        selectedService === "front" ? "/front-dashcam.jpg" : "/front-and-rear-dashcam.png";

    const handleServiceChange = (service: string) => {
        setSelectedService(service);
    };

    return (
        <div className={"flex flex-col items-center"}>
            <div className="flex justify-center mb-8 w-full">
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

            <div className="relative rounded-3xl overflow-hidden w-[375px] h-[300px] ">
                <Image
                    src={imageSrc}
                    alt={`${selectedService} dashcam image`}
                    fill
                />
            </div>

            <div className={"flex mt-4 mx-4 space-x-4"}>
                <BuyOnAmazonButton selectedService={selectedService}/>
                {/*<GetItInstalledButton/>*/}
            {/*    we can make the amazon button white with just the logo and the getitinstalled button black
            we can also use a shopping cart icon for the amazon button
            also put the word OR in between the two buttons
            */}
            </div>

        </div>
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
            className={`w-full mx-4 flex justify-center items-center space-x-2 px-2 py-2 rounded-lg transition-all ${
                selectedService === service
                    ? "bg-red-500 text-white"
                    : "bg-transparent text-white border border-gray-500"
            }`}
        >
            <span>{capitalize(service)}</span>
            {selectedService === service && (
                <div className="bg-white p-1 text-black rounded-full flex items-center justify-center">
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
            className="flex justify-center items-center space-x-4 px-8 py-2 bg-black text-white rounded-full"
        >
            <div className={"flex flex-col  items-center space-y-2"}>
                <span>ORDER NOW ON</span>
                <img className={"w-16  h-6"} src={"/installation-services/whiteamazonlogo.png"}/>
            </div>
            <IoIosArrowForward size={40} className={"text-orange-300"}/>

        </a>
    )
}

const GetItInstalledButton = () => {
    return (
        <button className={"bg-white text-black px-4 py-2 rounded-full"}>
            HAVE US INSTALL
        </button>
    )
}