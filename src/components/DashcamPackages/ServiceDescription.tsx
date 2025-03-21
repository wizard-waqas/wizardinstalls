import React from "react"

export default function ServiceDescription({selectedService}: { selectedService: string }) {

    const getServiceText = (service: string) => {
        switch (service) {
            case "front":
                return "Capture every detail of your journey with a front-facing dashcam. " +
                    "Perfect for recording your drive and providing evidence in case of incidents."
            case "frontRear":
                return "Get complete coverage with high-quality front and rear dashcams. " +
                    "Monitor both ends of your vehicle for maximum accident protection and peace of mind on the road."
            case "frontInterior":
                return "Stay protected inside and out with a front and interior dashcam. Ideal for rideshare drivers," +
                    " it records both the road ahead and in-cabin activity for safety and security.";
            case "rearviewMirror":
                return "A sleek, all-in-one design that replaces your rear-view mirror for a discreet look. " +
                    "Enjoy high quality footage in a design that blends seamlessly with your vehicle.";
            default:
                return "Capture every detail of your journey with a front-facing dashcam. " +
                    "Perfect for recording your drive and providing evidence in case of incidents.";
        }
    }

    return (
        <h5 className={"text-center text-md mx-4 text-gray-300 mb-4 h-28 text-wrap w-11/12 lg:w-1/3"}>
            {getServiceText(selectedService)}&nbsp;<br/>(Note: the products shown are not sponsored.)
        </h5>
    )
}
