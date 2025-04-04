import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { MdEdit } from "react-icons/md";

const serviceAreaCities = [
    "jersey city", "woodbridge", "edison", "fords", "metuchen", "perth amboy", "avenel", "rahway"
];

interface ZipCodeButtonInputProps {
    includeTravelCharge: boolean;
    setIncludeTravelCharge: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ZipCodeButtonInput({ includeTravelCharge, setIncludeTravelCharge }: ZipCodeButtonInputProps) {
    const [zipCode, setZipCode] = useState("");
    const [isButtonVisible, setButtonVisible] = useState(true);
    const [isInputVisible, setInputVisible] = useState(false);
    const [isInvalidZip, setIsInvalidZip] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");
        if (value.length <= 5) {
            setZipCode(value);
        }

        if (value.length === 5) {
            setLoading(true);  // Set loading to true when starting the fetch
            // toast.loading("Checking service area...");
            fetch(`https://api.zippopotam.us/us/${value}`)
                .then(response => response.json())
                .then(data => {
                    toast.dismiss();
                    if (data.places) {
                        const city = data.places[0]["place name"].toLowerCase();
                        if (serviceAreaCities.includes(city)) {
                            setIncludeTravelCharge(true);
                            setIsInvalidZip(false);
                            setInputVisible(false);
                            setButtonVisible(false);
                            toast.success("ZIP code in service area!");
                        } else {
                            setIncludeTravelCharge(false);
                            setIsInvalidZip(false);
                            setInputVisible(false);
                            setButtonVisible(false);
                            toast.error("Not in service area. $20 travel fee applies.");
                        }
                    } else {
                        setIsInvalidZip(true);
                        setIncludeTravelCharge(false);
                        setInputVisible(true);
                        setButtonVisible(false);
                        toast.error("Invalid ZIP code.");
                    }
                })
                .catch(() => {
                    toast.dismiss();
                    setIsInvalidZip(true);
                    setIncludeTravelCharge(false);
                    setInputVisible(true);
                    setButtonVisible(false);
                    toast.error("Error checking ZIP code.");
                })
                .finally(() => {
                    setLoading(false);  // Set loading to false when done
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
            {loading && (
                <div className="flex items-center space-x-2">
                    <span className="text-gray-300">Checking...</span>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-300"></div>
                </div>
                )}

            {/* Zipcode entry button */}
            {isButtonVisible && !loading && (
                <button
                    onClick={() => {
                        setButtonVisible(false);
                        setInputVisible(true);
                    }}
                    className={"text-sm bg-grey-800 text-gray-300 rounded-full px-4 py-1"}
                >
                    Zipcode
                </button>
            )}

            {/* zipcode input box*/}
            {isInputVisible && !loading && (
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

            {/*Edit zip code button*/}
            {zipCode.length === 5 && !isInvalidZip && !loading && (
                <div className="mt-2 text-gray-300 flex items-center space-x-2">
                    <button
                        onClick={handleBackToInput}
                        className="flex items-center border-dotted border-b-2 text-sm text-gray-300 italic hover:text-white px-1"
                    >
                        <span>{zipCode}&nbsp;</span>
                        <MdEdit size={16}/>
                    </button>
                    <span>{includeTravelCharge ? "Included" : "$20"}</span>
                </div>
            )}
        </>
    );
}
