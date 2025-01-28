'use client'

import React, {useState, useEffect} from "react"

interface AccessoryOptionProps {
    imageSrc: string;
    title: string;
    description: string;
    price: number;
}

export default function AccessoryOption({imageSrc, title, description, price}: AccessoryOptionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative">
            {/* Main Section */}
            <div className="flex mx-4 items-center justify-between space-x-4 my-4">
                <div className="flex-shrink-0">
                    <img
                        src={`/accessory-services/${imageSrc}`}
                        alt={title}
                        className="w-[150px] h-[100px] rounded-lg object-cover cursor-pointer"
                        onClick={handleImageClick}
                    />
                </div>
                <div className="flex flex-col flex-grow">
                    <div className={"flex justify-between items-center"}>
                        <h4 className="text-center text-red-500 font-bold text-md">{title}</h4>
                        <strong className={"bg-white text-black px-2 py-1 rounded-md"}>${price}</strong>
                    </div>
                    <p className="text-left  text-white mt-2">{description}</p>
                </div>
            </div>


            {/* Modal */}
            {/*{isModalOpen && (*/}
            {/*    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">*/}
            {/*        <div className="relative">*/}
            {/*            /!* Close Button (Top) *!/*/}
            {/*            <button*/}
            {/*                className="absolute top-4 right-4 bg-white text-black rounded-full px-4 py-2 font-bold"*/}
            {/*                onClick={handleCloseModal}*/}
            {/*            >*/}
            {/*                Close*/}
            {/*            </button>*/}

            {/*            /!* Modal Image *!/*/}
            {/*            <img*/}
            {/*                src={`/accessory-services/${imageSrc}`}*/}
            {/*                alt={title}*/}
            {/*                className="rounded-lg w-[50vw] h-[50vh] object-contain" // Adjusted size and scaling*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    );
}
