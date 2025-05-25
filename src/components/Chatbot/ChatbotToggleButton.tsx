import {FiMessageSquare} from "react-icons/fi";
import {analytics} from "@/firebase";
import {logEvent} from "@firebase/analytics";
import {IoClose} from "react-icons/io5";

interface ChatbotToggleButtonProps {
    isChatOpen: boolean;
    onClick: () => void;
}

export default function ChatbotToggleButton({isChatOpen, onClick}: ChatbotToggleButtonProps) {

    const handleClick = () => {
        onClick()
        if (analytics) {
            logEvent(analytics, "CallButtonClick");
        }
    };

    return (
        <button
            onClick={handleClick}
            className="flex items-center justify-center fixed bottom-6 right-6 bg-blue-600 w-14 h-14 rounded-full shadow-lg z-50"
            aria-label="Chat with us"
        >
            {isChatOpen
                ? <IoClose className="text-white text-2xl "/>
                : <FiMessageSquare className="text-white text-2xl "/>
            }
        </button>
    );
}
