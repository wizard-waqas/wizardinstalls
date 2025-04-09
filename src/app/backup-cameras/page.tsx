"use client";

import React from "react";
import GetInTouchSection from "@/components/GetInTouchSection";
import SplashSection from "@/components/BackupCameras/SplashSection";
import SeeMoreSection from "@/components/SeeMoreSection";

export default function BackupCamerasPage() {

    return (
        <div id="dashcam-packages" className="bg-black">
            <SplashSection/>
            <GetInTouchSection isCarplay={true}/>
            <SeeMoreSection/>
        </div>
    );
}