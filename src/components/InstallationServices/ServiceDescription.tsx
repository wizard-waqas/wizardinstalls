import React, {useState, useEffect} from "react"

export default function ServiceDescription({selectedService}: { selectedService: string }) {
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
