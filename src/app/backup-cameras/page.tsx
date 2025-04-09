"use client";

import React, {useEffect} from "react";
import GetInTouchSection from "@/components/GetInTouchSection";
import SplashSection from "@/components/BackupCameras/SplashSection";
import SeeMoreSection from "@/components/SeeMoreSection";
import {analytics} from "@/firebase";
import {logEvent} from "@firebase/analytics";

export default function BackupCamerasPage() {

    useEffect(() => {
        if (analytics) {
            logEvent(analytics, "page_carplay_view", {
                page_path: window.location.pathname,
            });
        }
    }, []);

    return (
        <div id="dashcam-packages" className="bg-black">
            <SplashSection/>
            <GetInTouchSection isCarplay={true}/>
            <SeeMoreSection/>
        </div>
    );
}