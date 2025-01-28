import React, {useState, useEffect} from "react"
import {GetInTouchFormData} from "@/types";

interface FullNameInputProps {
    formData: GetInTouchFormData;
    setFormData: any;
    errors: any;
}
export default function FullNameInput({formData, setFormData, errors}: FullNameInputProps) {
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
            {errors.fullName && (
                <span className="text-red-500 text-sm">This field is required</span>
            )}
        </div>
    )
}
