import React, {useState, useEffect} from "react"

export default function InputsContainer({sendMessage}: { sendMessage: (userInput: string) => void }) {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e: any) => {
        sendMessage(userInput)
        setUserInput("");
    }

    return (
        <div className=" p-2 flex items-center bg-gray-800">
            <input
                className="flex-1 text-base px-3 py-1 bg-gray-700 text-white border border-gray-600 rounded mr-2 placeholder-gray-400"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
                placeholder="Type your message..."
            />
            <button
                onClick={handleSubmit}
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
            >
                Send
            </button>
        </div>
    )
}
