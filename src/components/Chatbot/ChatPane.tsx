import React, {useEffect, useRef, useState} from "react";
import toast from "react-hot-toast";
import {collection, doc, getDoc, setDoc} from "@firebase/firestore";
import {db} from "@/firebase";
import {wizardBotSystemMessage} from "@/utils";
import {marked} from "marked";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import MessagesContainer from "@/components/Chatbot/MessagesContainer";
import InputsContainer from "@/components/Chatbot/InputsContainer";
import ChatHeader from "@/components/Chatbot/ChatHeader";

interface ChatPaneProps {
    onClose: () => void;
}

export default function ChatPane({onClose}: ChatPaneProps) {
    const chatBottomRef = useRef(null);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState(() => {
        const stored = localStorage.getItem("wizardbot-messages");
        return stored ? JSON.parse(stored) : wizardBotSystemMessage;
    });

    useEffect(() => {
        const stored = localStorage.getItem("wizardbot-messages");
        if (stored) setMessages(JSON.parse(stored));
    }, []);

    useEffect(() => {
        const saveMessages = async () => {
            localStorage.setItem("wizardbot-messages", JSON.stringify(messages));
            setIsTyping(true);

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
            } finally {
                setIsTyping(false);
            }
        };

        saveMessages();

        if (chatBottomRef.current) {
            // @ts-ignore
            chatBottomRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [messages]);

    const sendMessage = async (userInput: string) => {
        if (!userInput.trim()) return;

        const userMessage = {role: "user", content: userInput};
        setMessages([...messages, userMessage]);
        setIsTyping(true);
        if (chatBottomRef.current) {
            // @ts-ignore
            chatBottomRef.current.scrollIntoView({behavior: "smooth"});
        }
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
        setIsTyping(false);
    };

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
            <ChatHeader setMessages={setMessages}/>
            <MessagesContainer messages={messages} renderMessage={renderMessage} isTyping={isTyping} chatBottomRef={chatBottomRef}/>
            <InputsContainer sendMessage={sendMessage}/>
        </div>
    );
}
