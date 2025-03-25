import React from "react";
import { toast } from "react-hot-toast";
import { ClientInfo } from "@/types";

interface ZipCodeInputProps {
    formData: ClientInfo;
    setFormData: any;
}

const serviceAreaCities = [
    "jersey city", "woodbridge", "edison", "fords", "metuchen", "perth amboy", "avenel", "rahway"
];

export default function ZipCodeInput({ formData, setFormData }: ZipCodeInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
        if (value.length <= 5) {
            setFormData({ ...formData, zipCode: value });
        }

        if (value.length === 5) {
            toast.loading("Checking service area...");
            fetch(`https://api.zippopotam.us/us/${value}`)
                .then(response => response.json())
                .then(data => {
                    toast.dismiss();
                    if (data.places) {
                        const city = data.places[0]["place name"].toLowerCase();
                        if (serviceAreaCities.includes(city)) {
                            toast.success("ZIP code in service area!");
                        } else {
                            toast.error("Not in service area. $15 travel fee applies.");
                        }
                    } else {
                        toast.error("Invalid ZIP code.");
                    }
                })
                .catch(() => {
                    toast.dismiss();
                    toast.error("Error checking ZIP code.");
                });
        }
    };

    return (
        <div className="mb-6">
            <label className="block mb-2">
                ZIP Code
            </label>
            <input
                type="text"
                value={formData.zipCode || ""}
                placeholder="e.g. 07030"
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                maxLength={5}
            />
        </div>
    );
}
