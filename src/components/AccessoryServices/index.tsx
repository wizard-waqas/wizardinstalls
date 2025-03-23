import React from "react"
import AccessoryOption from "@/components/AccessoryServices/AccessoryOption";
import GreyDivider from "@/components/GreyDivider";

export default function AccessoryServices() {
    return (
        <section id="accessory-services" className="pt-8 flex flex-col items-center">
            <h3 className="text-center text-red-500 font-bold text-2xl">
                ACCESSORY SERVICES
            </h3>
            <h4 className={"mx-4 mt-4 mb-8 text-gray-400 text-center text-wrap w-11/12 lg:w-1/3"}>
                Enhance your ride experience with our quality of life add-ons. Prices shown are for service.
            </h4>

            <div className={"flex flex-col items-center w-11/12 lg:w-1/3"}>
                {/*<AccessoryOption*/}
                {/*    imageSrc={"led-strip-lights.png"}*/}
                {/*    title={"LED Strip Kit"}*/}
                {/*    description={"RGB accent lighting to add a touch of color to your vehicle."}*/}
                {/*    price={80}*/}
                {/*/>*/}
                {/*<GreyDivider/>*/}
                <AccessoryOption
                    imageSrc={"welcome-lights.png"}
                    title={"Door Welcome Lights"}
                    description={"Light up the ground as you open your door for a stylish exit."}
                    price={30}
                />
                <GreyDivider/>
                <AccessoryOption
                    imageSrc={"interior-led.png"}
                    title={"LED Interior Lights"}
                    description={"Brighten your cabin with modern, long-lasting LED bulbs."}
                    price={30}
                />
                <GreyDivider/>
                <AccessoryOption
                    imageSrc={"blindspot-mirrors.png"}
                    title={"Blindspot Mirrors"}
                    description={"Gain extra visibility to help prevent unexpected lane-change surprises."}
                    price={20}
                />
                <GreyDivider/>
                <AccessoryOption
                    imageSrc={"carbonfiber.png"}
                    title={"License Plate Frames"}
                    description={"Add a sleek, sporty touch with a lightweight carbon fiber frame."}
                    price={20}
                />
                <GreyDivider/>
            </div>
        </section>
    )
}
