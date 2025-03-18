import React from "react"

interface SelectServiceButtonProps {
    selectedService: string;
    handleServiceChange: (service: string) => void;
    serviceText: string;
    serviceType: string;
}
export default function SelectServiceButton({selectedService, handleServiceChange, serviceText, serviceType}: SelectServiceButtonProps) {
    return (
        <button
            onClick={() => handleServiceChange(serviceType)}
            className={`w-full flex justify-center items-center space-x-2 px-2 py-2 m-1 rounded-md transition-all ${
                selectedService === serviceType
                    ? "text-gray-800 bg-red-300"
                    : "text-gray-300"
            }`}
        >
            <span>{serviceText}</span>
        </button>
    )
}
