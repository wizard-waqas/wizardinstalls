import React from "react"

export default function ServiceDescription({selectedService}: { selectedService: string }) {
    return (
        <h5 className={"text-center text-md mx-4 text-gray-300 my-4 text-wrap w-11/12 lg:w-1/3"}>
            {selectedService === "front"
                ? "Capture every detail of your journey with a front-facing dashcam. " +
                    "Perfect for recording your drive and providing evidence in case of incidents."
                : "Get complete coverage with high-quality front and rear dashcams. " +
                    "Monitor both ends of your vehicle for maximum accident protection and peace of mind on the road."
            }
        </h5>
    )
}
