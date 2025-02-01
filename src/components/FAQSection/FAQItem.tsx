import React from "react";

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem ({question, answer}: FAQItemProps) {
    const renderAnswer = () => {
        const parts = answer.split(/\[([^\]]+)\]\(([^)]+)\)/);
        // this returns an array that looks like this ["", "Dashcam Packages section", "#dashcam-packages", ""]

        return (
            <p className="text-white">
                {parts.map((part, index) => {
                    // Every odd index is the link text, and the next index is the link URL
                    if (index % 3 === 1) {
                        const linkText = part;
                        const linkUrl = parts[index + 1];
                        return (
                            <a key={index} href={linkUrl} className="text-blue-400 underline">
                                {linkText}
                            </a>
                        );
                    }
                    // Even indices are regular text (not part of the link)
                    if (index % 3 === 0) {
                        return part;
                    }
                    return null;
                })}
            </p>
        );
    };

    return (
        <div className="flex flex-col items-start space-y-4 bg-grey-400 rounded-lg mx-4 my-2 p-4">
            <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">Q</span>
                </div>
                <p className="text-white font-bold">{question}</p>
            </div>
            {renderAnswer()}
        </div>
    );
}
