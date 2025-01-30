import React from "react"
import {ClientInfo} from "@/types";

interface FullNameInputProps {
    formData: ClientInfo;
    setFormData: any;
}
export default function FullNameInput({formData, setFormData}: FullNameInputProps) {
    return (
        <div className="mb-6">
            <label className="block mb-2">
                Full Name <span className="text-red-500">*</span>
            </label>
            <input
                type="text"
                value={formData.fullName}
                placeholder={'e.g. Mason Agueda'}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                required
            />
        </div>
    )
}
