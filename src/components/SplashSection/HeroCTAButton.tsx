"use client"

import React from "react";
import {analytics} from "@/firebase";
import {logEvent} from "@firebase/analytics";

interface HeroCTAButtonProps {
    type: "dashcam" | "backup";
}
export default function HeroCTAButton({type}: HeroCTAButtonProps) {
    const getEventName = () => {
        switch (type) {
            case "dashcam":
                return "HeroCTADashcamClick";
            case "backup":
                return "HeroCTABackupClick";
            default:
                return "HeroCTADashcamClick";
        }
    }

    const getText = () => {
        switch (type) {
            case "dashcam":
                return "Explore Dashcam Packages";
            case "backup":
                return "Explore Backup Cameras";
            default:
                return "Explore Dashcam Packages";
        }
    }

    const getLink = () => {
        switch (type) {
            case "dashcam":
                return "#dashcam-packages";
            case "backup":
                return "/backup-cameras";
            default:
                return "#dashcam-packages";
        }
    }

    const handleClick = () => {
        if (analytics) {
            logEvent(analytics, getEventName());
        }
    };

    return (
        <a href={getLink()} onClick={handleClick}>
            <span className={`${type === "dashcam" ? "bg-red-500 text-white" : "text-red-400"} block border-2 w-full border-red-500 p-4 rounded-full`}>
                {getText()}
            </span>
        </a>
    );
}