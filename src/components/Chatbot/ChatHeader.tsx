import React from "react"
import {wizardBotSystemMessage} from "@/utils";
import {RiResetRightLine} from "react-icons/ri";

export default function ChatHeader({setMessages}: { setMessages: React.Dispatch<React.SetStateAction<any[]>> }) {

    const handleReset = () => {
        setMessages(wizardBotSystemMessage);
        localStorage.setItem("wizardbot-messages", JSON.stringify(wizardBotSystemMessage));
    }

    return (
        <div className="flex items-center justify-between bg-gray-800 px-4 py-3">
            <h2 className="text-lg font-semibold">WizardBot</h2>
            <button
                onClick={handleReset}
                className="text-gray-400 hover:text-gray-200"
            >
                <RiResetRightLine className={"text-xl"}/>
            </button>
        </div>
    )
}
