import React, {useState, useEffect} from "react"
import {ClientInfo} from "@/types";

interface CarInfoInputProps {
    formData: ClientInfo;
    setFormData: any;
}
export default function CarInfoInput({formData, setFormData}: CarInfoInputProps) {
    return (
        <div className="mb-6">
            <label className="block mb-2">
                Year, Make & Model (optional)
            </label>
            <input
                type="text"
                value={formData.vehicleInfo}
                placeholder={'e.g. 2024 Subaru Outback'}
                onChange={(e) => setFormData({...formData, vehicleInfo: e.target.value})}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
            />
        </div>
    )
}
