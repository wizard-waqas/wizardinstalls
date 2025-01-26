import React, {useState, useEffect} from "react"
import AccessoryOption from "@/components/AccessoryServices/AccessoryOption";

export default function AccessoryServices() {
    return (
        <section id="accessory-services" className="pt-8 flex flex-col items-center">
            <h3 className="text-center text-red-500 font-bold text-2xl mb-10">
                ACCESSORY SERVICES
            </h3>

            <AccessoryOption
                imageSrc={"parked-recording.png"}
                title={"Dashcam Parked Recording"}
                description={"Hardwire your dashcam to the battery for 24/7 surveillance."}
            />
            <GreyDivider/>
            <AccessoryOption
                imageSrc={"interior-led.png"}
                title={"LED Interior Lights"}
                description={"Brighten your cabin with modern, long-lasting LED bulbs."}
            />
            <GreyDivider/>
            <AccessoryOption
                imageSrc={"led-strip-lights.png"}
                title={"LED Strip Kit"}
                description={"RGB accent lighting to add a touch of color to your vehicle."}
            />
            <GreyDivider/>
            <AccessoryOption
                imageSrc={"welcome-lights.png"}
                title={"Door Welcome Lights"}
                description={"Light up the ground as you open your door for a stylish, safer exit."}
            />
            <GreyDivider/>
            <AccessoryOption
                imageSrc={"blindspot-mirrors.png"}
                title={"Blindspot Mirrors"}
                description={"Light up the ground as you open your door for a stylish, safer exit."}
            />
            <GreyDivider/>
            <AccessoryOption
                imageSrc={"gps.png"}
                title={"GPS Tracking"}
                description={"Track and navigate your vehicle’s location with pinpoint accuracy."}
            />


        </section>
    )
}

const GreyDivider = () => {
    return (
        <div className={"w-11/12 rounded-md border-b-2 border-gray-500"}/>
    )
}