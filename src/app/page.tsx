"use client"; // Required for client-side hooks

import InstallationServices from "@/components/InstallationServices";
import AccessoryServices from "@/components/AccessoryServices";
import SplashSection from "@/components/SplashSection";
import {useEffect} from "react";
import {usePathname} from "next/navigation"; // Use next/navigation for App Router
import {analytics} from "@/firebase";
import {logEvent} from "@firebase/analytics";
import GetInTouchSection from "@/components/GetInTouchSection";

export default function Home() {
    const pathname = usePathname(); // Get current path

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
            <InstallationServices/>
            <AccessoryServices/>
            <GetInTouchSection/>
        </div>
    );
}
