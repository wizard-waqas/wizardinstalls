import React, {useState} from "react";
import {ClientInfo} from "@/types";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import InterestedInHardwireToggle from "@/components/GetInTouchSection/InterestedInHardwireToggle";
import ZipCodeInput from "@/components/GetInTouchSection/ZipCodeInput";

interface MoreDetailsDropdownProps {
    formData: ClientInfo;
    setFormData: (data: ClientInfo) => void;
}

export default function MoreDetailsDropdown({formData, setFormData}: MoreDetailsDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-center items-center focus:outline-none focus:border-red-500"
            >
                <span className={"mr-2 text-gray-300"}>Additional Details</span>
                {isOpen ? <IoIosArrowUp size={18}/> : <IoIosArrowDown size={18}/>}
            </button>


            {isOpen && (
                <div className="mt-4 space-y-4">
                    <ZipCodeInput formData={formData} setFormData={setFormData}/>
                    {/* Dashcam selection */}
                    <label className="block text-white">Do you have a dashcam?</label>
                    <select
                        value={formData.hasDashcam || ""}
                        onChange={(e) => setFormData({...formData, hasDashcam: e.target.value})}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                    >
                        <option value="">Select an option</option>
                        <option value="own">Yes, I already have one</option>
                        <option value="purchase">No, I’ll purchase one from you</option>
                    </select>

                    {formData.hasDashcam === "own" && (
                        <input
                            type="text"
                            value={formData.dashcamDetail || ""}
                            placeholder="Enter dashcam brand/model"
                            onChange={(e) => setFormData({...formData, dashcamDetail: e.target.value})}
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                        />
                    )}

                    {formData.hasDashcam === "purchase" && (
                        <select
                            value={formData.dashcamDetail || ""}
                            onChange={(e) => setFormData({...formData, dashcamDetail: e.target.value})}
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500"
                        >
                            <option value="">Select a package</option>
                            <option value="front">Front Dashcam</option>
                            <option value="front-rear">Front & Rear Dashcam</option>
                            <option value="interior">Interior Dashcam</option>
                            <option value="rearview-mirror">Rearview Mirror Dashcam</option>
                        </select>
                    )}

                    <InterestedInHardwireToggle formData={formData} setFormData={setFormData}/>
                </div>
            )}
        </div>
    );
}
