import {useState} from "react";

interface ChatPaneProps {
    onClose: () => void;
}
export default function ChatPane({onClose}: ChatPaneProps) {
    const [messages, setMessages] = useState([
        {
            role: "system",
            content: `
You are WizardBot, a helpful assistant for a mobile dashcam installation business. Your job is to help users understand services, pricing, and options. You do not book appointments. Instead, guide users to the contact form: https://wizardinstalls.com/#information-form.

Business Details:
- Service only: 1 channel - $120, 2 channel - $190, Hardwiring +$120
- Packages (install + dashcam):
  • $160: Thinkware F70 Pro (Front, no screen)
  • $190: Vantrue E1 Lite + 64GB SD (Front, with screen)
  • $220: Vantrue E1 Pro + 64GB SD (Front, nightvision, no glare)
  • $300: Vantrue N2X + 128GB SD (Front + Interior)
  • $260: Redtiger F7N Pro (Front + Rear)
  • $450: Vantrue N4 (Front + Interior + Rear)
  • $450: Wolfbox G900 Pro (Rearview mirror + Rear)
  • $220: Apple CarPlay with reverse cam

- We provide clean wire installs, confirm recording, connect to phones, and train users.
- Based in Central Jersey & Jersey City. Travel fee applies for other areas.
- Use a professional, concise tone. Keep answers high-level unless asked for technical details.
- If someone asks for product suggestions, first ask how many channels they need (front, front + rear, etc). Do not list everything at once.
`
        },
        {role: "assistant", content: "Hey, I'm WizardBot. Got any dashcam related questions?"}
    ]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = {role: "user", content: input};
        setMessages([...messages, userMessage]);
        setInput("");

        const res = await fetch("/api/openai/chat", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({messages: [...messages, userMessage]}),
        });
        if (!res.ok) {
            console.error("Error:", res.statusText);
            setMessages((prev) => [...prev, {role: "assistant", content: "Something went wrong."}]);
            return;
        }

        const data = await res.json();
        const botReply = data.reply || "Something went wrong.";
        setMessages((prev) => [...prev, {role: "assistant", content: botReply}]);
    };

    return (
        <div
            className="fixed bottom-20 right-4 w-11/12 max-w-sm bg-gray-900 text-white shadow-lg rounded-lg flex flex-col overflow-hidden z-50">
            <div className="flex-1 p-3 overflow-y-auto space-y-2 max-h-96 text-sm">
                {messages
                    .filter((msg) => msg.role !== "system")
                    .map((msg, idx) => (
                        <div
                            key={idx}
                            className={`p-2 rounded max-w-[80%] ${
                                msg.role === "user"
                                    ? "bg-blue-600 text-white self-end"
                                    : "bg-gray-700 text-white self-start"
                            }`}
                        >
                            {msg.content}
                        </div>
                    ))}
            </div>
            <div className="border-t border-gray-700 p-2 flex items-center bg-gray-800">
                <input
                    className="flex-1 text-sm px-3 py-1 bg-gray-700 text-white border border-gray-600 rounded mr-2 placeholder-gray-400"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Type your message..."
                />
                <button
                    onClick={sendMessage}
                    className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                >
                    Send
                </button>
            </div>
        </div>

    );
}
