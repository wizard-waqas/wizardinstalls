import {useEffect, useRef, useState} from "react";
import toast from "react-hot-toast";
import {collection, doc, getDoc, setDoc} from "@firebase/firestore";
import {db} from "@/firebase";
import {wizardBotSystemMessage} from "@/utils";
import {RiResetRightLine} from "react-icons/ri";
import {marked} from "marked";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

interface ChatPaneProps {
    onClose: () => void;
}

export default function ChatPane({onClose}: ChatPaneProps) {
    const chatBottomRef = useRef(null);
    const [messages, setMessages] = useState(() => {
        const stored = localStorage.getItem("wizardbot-messages");
        console.log("Stored messages:", stored);
        return stored ? JSON.parse(stored) : wizardBotSystemMessage;
    });
    const [input, setInput] = useState("");

    useEffect(() => {
        const stored = localStorage.getItem("wizardbot-messages");
        if (stored) setMessages(JSON.parse(stored));
    }, []);

    useEffect(() => {
        const saveMessages = async () => {
            localStorage.setItem("wizardbot-messages", JSON.stringify(messages));

            try {
                let userId = localStorage.getItem("wizardUserId");
                if (!userId) {
                    userId = Math.random().toString(36).substring(2, 10);
                    localStorage.setItem("wizardUserId", userId);
                }

                const date = new Date();
                const formattedDate = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${date.getFullYear()}`;
                const docId = `${formattedDate}-${userId}`;
                const collectionName = process.env.NEXT_PUBLIC_ENVIRONMENT === "production" ? "chats" : "test-chats";
                const docRef = doc(collection(db, collectionName), docId);
                const docSnapshot = await getDoc(docRef);
                if (docSnapshot.exists()) {
                    await setDoc(docRef, {messages}, {merge: true});
                } else {
                    await setDoc(docRef, {
                        id: docId,
                        submitDate: date.toDateString(),
                        messages,
                    });
                }
            } catch (error) {
                toast.error('Failed to submit your details. Please try again later.');
                console.error('Error submitting form:', error);
            }
        };

        saveMessages();

        if (chatBottomRef.current) {
            // @ts-ignore
            chatBottomRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [messages]);

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
            setMessages((prev: any) => [...prev, {role: "assistant", content: "Something went wrong."}]);
            return;
        }

        const data = await res.json();
        const botReply = data.reply || "Something went wrong.";
        setMessages((prev: any) => [...prev, {role: "assistant", content: botReply}]);
    };

    const handleReset = () => {
        setMessages(wizardBotSystemMessage);
        localStorage.setItem("wizardbot-messages", JSON.stringify(wizardBotSystemMessage));
    }

    const renderMessage = (content: string) => {
        if (!content) return null;
        const html = marked.parse(content);
        // @ts-ignore
        const clean = DOMPurify.sanitize(html);
        return parse(clean);
    };


    return (
        <div
            className="fixed bottom-24 right-4 w-11/12 max-w-sm bg-gray-900 text-white shadow-lg rounded-lg flex flex-col overflow-hidden z-50">
            <div className="flex items-center justify-between bg-gray-800 px-4 py-3">
                <h2 className="text-lg font-semibold">WizardBot</h2>
                <button
                    onClick={handleReset}
                    className="text-gray-400 hover:text-gray-200"
                >
                    <RiResetRightLine className={"text-xl"}/>
                </button>
            </div>
            <div className="flex flex-col p-3 overflow-y-auto space-y-2 max-h-96 text-sm">
                {messages
                    .filter((msg: any) => msg.role !== "system")
                    .map((msg: any, idx: number) => (
                        <div
                            key={idx}
                            className={`prose prose-sm prose-invert p-2 rounded min-w-[80%] max-w-[80%] ${
                                msg.role === "user"
                                    ? "bg-blue-600 text-white self-end"
                                    : "bg-gray-700 text-white self-start"
                            }`}
                        >
                            {renderMessage(msg.content)}
                        </div>
                    ))}
                <div ref={chatBottomRef}/>
            </div>
            <div className=" p-2 flex items-center bg-gray-800">
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
