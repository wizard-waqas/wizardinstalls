import React, {useState, useEffect} from "react"
import {FaAt, FaPhone} from "react-icons/fa";
import {ClientInfo} from "@/types";

interface ContactInputProps {
    formData: ClientInfo
    setFormData: any
}
export default function ContactInput({formData, setFormData}: ContactInputProps) {
    const [contactInputType, setContactInputType] = useState('text');
    const [icon, setIcon] = useState(<FaPhone/>);

    const handleContactInfoChange = (e: any) => {
        const value = e.target.value;
        setFormData({...formData, contactInfo: value});

        if (/^\d/.test(value)) {
            setContactInputType('tel');
            setIcon(<FaPhone/>); // Set phone icon
        } else if (/^[a-zA-Z]/.test(value)) {
            setContactInputType('email');
            setIcon(<FaAt/>);
        } else {
            setContactInputType('text');
            setIcon(<FaPhone/>);
        }
    };

    return (
        <div className="mb-6">
            <label className="block mb-2">
                Phone or Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
                {/* Icon */}
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    {icon}
                </div>
                {/* Input */}
                <input
                    type={contactInputType}
                    value={formData.contactInfo}
                    onChange={handleContactInfoChange}
                    placeholder="Phone or Email"
                    className="w-full pl-10 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                    required
                />
            </div>
        </div>
    )
}
