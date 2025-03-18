import React from "react"
import {ClientInfo} from "@/types";

interface InterestedInHardwireToggleProps {
    formData: ClientInfo;
    setFormData: any;
}
export default function InterestedInHardwireToggle({formData, setFormData}: InterestedInHardwireToggleProps) {


    const handleToggle = () => {
        setFormData({...formData, recordingInterest: !formData.recordingInterest});
    };

    return (
        <div className="flex items-center gap-4 mb-8">
            <button
                type="button"
                onClick={handleToggle}
                className={`w-12 h-6 rounded-full p-1 relative transition-colors ${
                    formData.recordingInterest ? 'bg-green-500' : 'bg-gray-700'
                }`}
            >
                <div // This is the circle in the radio button that moves
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                        formData.recordingInterest ? 'translate-x-5' : 'translate-x-0'
                    }`}
                />
            </button>
            <span>Interested in 24/7 dashcam recording? (optional)</span>
        </div>
    )
}
