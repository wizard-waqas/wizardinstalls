import React from 'react';
import { MdLocalPhone } from "react-icons/md";
const CallButton = () => {
  const phoneNumber = '+1234567890'; // Replace with your actual number

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <a
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center w-14 h-14 bg-red-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300"
        aria-label="Call us"
      >
        <MdLocalPhone className="text-3xl" />
      </a>
    </div>
  );
};

export default CallButton;