import React, {useState, useEffect} from "react"
import {capitalize} from "@/utils";

interface SelectServiceButtonProps {
    selectedService: string;
    handleServiceChange: (service: string) => void;
    service: string;
    price: number;
}
export default function SelectServiceButton({selectedService, handleServiceChange, service, price}: SelectServiceButtonProps) {
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
