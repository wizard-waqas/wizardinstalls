'use client';

import React, { useState, useEffect } from 'react';

export default function SubmitButton({ handleSubmit }: any) {
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

    return (
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
    );
}
