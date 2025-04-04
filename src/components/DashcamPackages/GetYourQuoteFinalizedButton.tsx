"use client"

import React from "react";
import { useAtom } from "jotai";
import { selectedServiceAtom } from "@/atoms/dashcamFormAtoms";
import { analytics } from "@/firebase";
import { logEvent } from "@firebase/analytics";

export default function GetYourQuoteFinalizedButton() {
    const [selectedService] = useAtom(selectedServiceAtom);

    const handleClick = () => {
        if (analytics) {
            logEvent(analytics, "GetYourQuoteFinalizedClick", { selectedService });
        }
    };

    return (
        <a href={'#information-form'} className={"block w-full mt-2 rounded-lg py-2 bg-red-500"} onClick={handleClick}>
            Get Your Quote Finalized
        </a>
    );
}