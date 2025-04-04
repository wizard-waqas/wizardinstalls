"use client"

import React from "react"
import {analytics} from "@/firebase";
import {logEvent} from "@firebase/analytics";

export default function GetAQuoteButton() {

    const handleClick = () => {
        if (analytics) {
            logEvent(analytics, "GetAQuoteClick");
        }
    };

    return (
        <a href={"#pricing"} onClick={handleClick}
           className={"flex items-center justify-center w-full bg-red-500 text-white text-lg px-4 py-2 rounded-lg"}>
            <span>Get a Quote</span>
        </a>
    )
}
