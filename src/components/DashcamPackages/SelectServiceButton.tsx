import React from "react"
import {capitalize} from "@/utils";

interface SelectServiceButtonProps {
    selectedService: string;
    handleServiceChange: (service: string) => void;
    service: string;
}
export default function SelectServiceButton({selectedService, handleServiceChange, service}: SelectServiceButtonProps) {
    return (
        <button
            onClick={() => handleServiceChange(service)}
            className={`w-full flex justify-center items-center space-x-2 px-2 py-2 m-1 rounded-md transition-all ${
                selectedService === service
                    ? "text-gray-200 bg-grey-800"
                    : "text-gray-300"
            }`}
        >
            <span>{capitalize(service)}</span>
        </button>
    )
}
