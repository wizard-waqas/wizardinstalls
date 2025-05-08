"use client";

import DashcamPackages from "../components/DashcamPackages";
import SplashSection from "@/components/SplashSection";
import {useEffect} from "react";
import {analytics} from "@/firebase";
import {logEvent} from "@firebase/analytics";
import GetInTouchSection from "@/components/GetInTouchSection";
import FAQSection from "@/components/FAQSection";
import SeeMoreSection from "@/components/SeeMoreSection";
import CallButton from "@/components/CallButton";

export default function Home() {

    useEffect(() => {
        if (analytics) {
            logEvent(analytics, "page_view", {
                page_path: window.location.pathname,
            });
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
        </div>
    );
}
