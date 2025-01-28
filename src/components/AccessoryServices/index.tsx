import React, {useState, useEffect} from "react"
import AccessoryOption from "@/components/AccessoryServices/AccessoryOption";

export default function AccessoryServices() {
    return (
        <section id="accessory-services" className="pt-8 flex flex-col items-center">
            <h3 className="text-center text-red-500 font-bold text-2xl">
                ACCESSORY SERVICES
            </h3>
            <h4 className={"mx-4 mt-4 mb-8 font-bold text-gray-200 text-center text-xl"}>Enhance your ride experience with our quality of life add-ons.</h4>

            {/*<AccessoryOption*/}
            {/*    imageSrc={"parked-recording.png"}*/}
            {/*    title={"24/7 Dashcam Recording"}*/}
            {/*    description={"Hardwire your dashcam to the battery for 24/7 surveillance."}*/}
            {/*/>*/}
            {/*<GreyDivider/>*/}
            <AccessoryOption
                imageSrc={"led-strip-lights.png"}
                title={"LED Strip Kit"}
                description={"RGB accent lighting to add a touch of color to your vehicle."}
                price={80}
            />
            <GreyDivider/>
            <AccessoryOption
                imageSrc={"welcome-lights.png"}
                title={"Door Welcome Lights"}
                description={"Light up the ground as you open your door for a stylish, safer exit."}
                price={80}
            />
            <GreyDivider/>
            <AccessoryOption
                imageSrc={"interior-led.png"}
                title={"LED Interior Lights"}
                description={"Brighten your cabin with modern, long-lasting LED bulbs."}
                price={50}
            />
            <GreyDivider/>
            <AccessoryOption
                imageSrc={"gps.png"}
                title={"GPS Tracking"}
                description={"Track and navigate your vehicle’s location with pinpoint accuracy."}
                price={50}
            />
            <GreyDivider/>
            <AccessoryOption
                imageSrc={"blindspot-mirrors.png"}
                title={"Blindspot Mirrors"}
                description={"Gain extra visibility to help prevent unexpected lane-change surprises."}
                price={30}
            />
            <GreyDivider/>


        </section>
    )
}

const GreyDivider = () => {
    return (
        <div className={"w-11/12 rounded-md border-b-2 border-gray-500"}/>
    )
}