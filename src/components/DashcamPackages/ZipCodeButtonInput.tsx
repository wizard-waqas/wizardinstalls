import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { IoLocationSharp } from "react-icons/io5";

const serviceAreaCities = [
    "jersey city", "woodbridge", "edison", "fords", "metuchen", "perth amboy", "avenel", "rahway"
];

interface ZipCodeButtonInputProps {
    inServiceArea: boolean;
    setInServiceArea: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ZipCodeButtonInput({ inServiceArea, setInServiceArea }: ZipCodeButtonInputProps) {
    const [zipCode, setZipCode] = useState("");
    const [isButtonVisible, setButtonVisible] = useState(true);  // Controls button visibility
    const [isInputVisible, setInputVisible] = useState(false);  // Controls input visibility
    const [isInvalidZip, setIsInvalidZip] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        if (value.length <= 5) {
            setZipCode(value);
        }

        if (value.length === 5) {
            // toast.loading("Checking service area...");
            fetch(`https://api.zippopotam.us/us/${value}`)
                .then(response => response.json())
                .then(data => {
                    toast.dismiss();
                    if (data.places) {
                        const city = data.places[0]["place name"].toLowerCase();
                        if (serviceAreaCities.includes(city)) {
                            setInServiceArea(true);
                            setIsInvalidZip(false);
                            setInputVisible(false);
                            setButtonVisible(false);
                            toast.success("ZIP code in service area!");
                        } else {
                            setInServiceArea(false);
                            setIsInvalidZip(false);
                            setInputVisible(false);
                            setButtonVisible(false);
                            toast.error("Not in service area. $20 travel fee applies.");
                        }
                    } else {
                        setIsInvalidZip(true);
                        setInServiceArea(false);
                        setInputVisible(true);
                        setButtonVisible(false);
                        toast.error("Invalid ZIP code.");
                    }
                })
                .catch(() => {
                    toast.dismiss();
                    setIsInvalidZip(true);
                    setInServiceArea(false);
                    setInputVisible(true);
                    setButtonVisible(false);
                    toast.error("Error checking ZIP code.");
                });
        }
    };

    const handleBackToInput = () => {
        setZipCode("");
        setInputVisible(true);
        setButtonVisible(false);
    };

    return (
        <>
            {isButtonVisible && (
                <button
                    onClick={() => {
                        setButtonVisible(false); // Hide the button when clicked
                        setInputVisible(true);  // Show the input box
                    }}
                    className={"text-sm bg-grey-800 text-gray-300 rounded-full px-4 py-1"}
                >
                    Zipcode
                </button>
            )}

            {isInputVisible && (
                <input
                    type="text"
                    value={zipCode}
                    placeholder="e.g. 07030"
                    onChange={handleChange}
                    className="w-24 px-2 py-0.5 text-gray-300 bg-grey-800 border-0 rounded-lg text-right"
                    maxLength={5}
                    required
                />
            )}

            {zipCode.length === 5 && !isInvalidZip && (
                <div className="mt-2 text-gray-300 flex items-center space-x-2">
                    <button
                        onClick={handleBackToInput}
                        className="text-gray-300 hover:text-white bg-grey-800 p-0.5 rounded-md"
                    >
                        <IoLocationSharp size={20}/>
                    </button>
                    <span>{inServiceArea ? "Included" : "$20"}</span>
                </div>
            )}
        </>
    );
}
