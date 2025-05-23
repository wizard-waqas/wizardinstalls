'use client';

import React, {useState, useEffect} from 'react';
import {RxReset} from "react-icons/rx";

interface SubmitButtonProps {
    handleSubmit: (e: any) => Promise<boolean>;
}
export default function SubmitButton({handleSubmit}: SubmitButtonProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const submitted = localStorage.getItem('submitted-interest-form');
        setIsSubmitted(submitted === 'true');
    }, []);

    const handleClick = async (e: any) => {
        const didSubmit = await handleSubmit(e);
        if (!didSubmit) return;

        localStorage.setItem('submitted-interest-form', 'true');
        setIsSubmitted(true);
    };

    const handleReset = () => {
        localStorage.removeItem('submitted-interest-form');
        setIsSubmitted(false);
    }

    return (
        <div className={"flex"}>
            <button
                type="button"
                onClick={handleClick}
                disabled={isSubmitted}
                className={`w-full py-3 rounded-lg transition-colors ${
                    isSubmitted
                        ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                        : 'bg-red-500 text-white hover:bg-red-600'
                }`}
            >
                {isSubmitted ? 'Already Submitted' : 'Contact us now'}
            </button>
            {isSubmitted && (
                <button onClick={handleReset} className={"ml-2 p-3 bg-gray-500 rounded-lg"}>
                    <RxReset size={24}/>
                </button>
            )}
        </div>
    );
}
