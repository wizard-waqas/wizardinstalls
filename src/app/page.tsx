"use client";

import DashcamPackages from "../components/DashcamPackages";
import SplashSection from "@/components/SplashSection";
import {useEffect, useState} from "react";
import {analytics} from "@/firebase";
import {logEvent} from "@firebase/analytics";
import GetInTouchSection from "@/components/GetInTouchSection";
import FAQSection from "@/components/FAQSection";
import SeeMoreSection from "@/components/SeeMoreSection";
import CallButton from "@/components/CallButton";
import ChatPane from "@/components/Chatbot/ChatPane";
import ChatbotToggleButton from "@/components/Chatbot/ChatbotToggleButton";

export default function Home() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const userId = Math.random().toString(36).substring(2, 10);

    useEffect(() => {
        if (analytics) {
            logEvent(analytics, "page_view", {
                page_path: window.location.pathname,
                userId: userId,
            });
        }

    }, []);

    useEffect(() => {
        if (!localStorage.getItem("wizardUserId")) {
            localStorage.setItem("wizardUserId", userId);
        }
    }, []);

    return (
        <div className="relative min-h-screen w-full">
            <SplashSection/>
            <DashcamPackages/>
            <FAQSection/>
            <GetInTouchSection isCarplay={false}/>
            <SeeMoreSection/>

            <CallButton/>
            {isChatOpen && <ChatPane onClose={() => setIsChatOpen(false)}/>}
            <ChatbotToggleButton isChatOpen={isChatOpen} onClick={() => setIsChatOpen(!isChatOpen)}/>
        </div>
    );
}
