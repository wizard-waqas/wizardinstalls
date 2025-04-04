"use client"

import React from "react";
import {prices} from "@/utils";
import {IoIosArrowDown} from "react-icons/io";
import {analytics} from "@/firebase";
import {logEvent} from "@firebase/analytics";

export default function HeroCTAButton() {
    const handleClick = () => {
        if (analytics) {
            logEvent(analytics, "HeroCTAClick");
        }
    };

    return (
        <a className={"flex flex-col items-center"} href="#dashcam-packages" onClick={handleClick}>
            <span className={"bg-red-500 p-4 rounded-lg mt-12 text-xl"}>
                Installations starting at ${prices["front"].service}
            </span>
            <IoIosArrowDown className={"text-red-500 mt-2 animate-bounceFade"} size={32}/>
        </a>
    );
}