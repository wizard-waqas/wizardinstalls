import React, {useState} from "react"
import {useAtom} from "jotai/index";
import {selectedServiceAtom} from "@/atoms/dashcamFormAtoms";
import GreyDivider from "@/components/GreyDivider";
import {prices} from "@/utils";
import SelectDashcamDropdown from "@/components/DashcamPackages/SelectDashcamDropdown";
import {CloseButton, Popover, PopoverButton, PopoverPanel} from "@headlessui/react";
import {IoClose} from "react-icons/io5";
import ZipCodeButtonInput from "@/components/DashcamPackages/ZipCodeButtonInput";


export default function InstallationQuote() {
    const [selectedService, setSelectedService] = useAtom(selectedServiceAtom);
    const [includeDashcam, setIncludeDashcam] = useState(true);
    const [includeHardwire, setIncludeHardwire] = useState(false);
    const [inServiceArea, setInServiceArea] = useState(true);

    const calculatePrice = (serviceType: string, includeDashcam: boolean, includeHardwire: boolean, inServiceArea: boolean) => {
        let basePrice = includeDashcam ? prices[serviceType].full : prices[serviceType].service;
        if (!inServiceArea) {
            basePrice += 20;
        }
        return includeHardwire ? basePrice + 100 : basePrice;
    };

    const handleServiceChange = (service: string) => {
        setSelectedService(service);
    };


    return (
        <div className="mt-6 bg-grey-400 p-4 rounded-lg shadow-md text-white w-full">
            <h4 className="text-2xl font-bold mb-2 text-green-200">Installation Quote</h4>

            <SelectDashcamDropdown selectedService={selectedService} handleServiceChange={handleServiceChange} useDarkBg={true}/>

            <div className="flex justify-between items-center mb-2">
                <span className="text-lg">Include a dashcam in quote</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={includeDashcam}
                        onChange={() => setIncludeDashcam(!includeDashcam)}
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 rounded-full peer
                            peer-checked:bg-green-500 after:absolute after:top-1 after:left-1 after:bg-white
                            after:border after:rounded-full after:h-4 after:w-4 after:transition-all
                            peer-checked:after:translate-x-5">
                    </div>
                </label>
            </div>

            <div className="flex justify-between items-center">
                <span className="text-lg">Include 24/7 Recording</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={includeHardwire}
                        onChange={() => setIncludeHardwire(!includeHardwire)}
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 rounded-full peer
                            peer-checked:bg-green-500 after:absolute after:top-1 after:left-1 after:bg-white
                            after:border after:rounded-full after:h-4 after:w-4 after:transition-all
                            peer-checked:after:translate-x-5">
                    </div>
                </label>
            </div>

            <GreyDivider/>

            <div className="text-gray-300">
                <div className="flex justify-between">
                    <span>Installation Service</span>
                    <span>${prices[selectedService].service}</span>
                </div>
                <div className="flex justify-between">
                    <span>Dashcam Cost</span>
                    <span>{includeDashcam ? `$${prices[selectedService].dashcam}` : "--"}</span>
                </div>
                <div className="flex justify-between">
                    <span>24/7 Recording</span>
                    <span>{includeHardwire ? `$100` : "--"}</span>
                </div>
                <div className="flex items-center justify-between">
                    <Popover className="relative">
                        <PopoverButton>Travel Cost ⓘ</PopoverButton>
                        <PopoverPanel anchor="bottom" className="flex flex-col">
                            <CloseButton as={undefined}>
                                <IoClose className={"text-2xl absolute top-2 right-10"}/>
                            </CloseButton>
                            <p className={"bg-grey-400 border-2 border-grey-800 mx-8 pt-8 px-4 pb-4 rounded-lg"}>
                                Our mobile dashcam installation service is free for Jersey City and&nbsp;
                                Woodbridge, NJ residents. For other areas, a travel fee may apply.&nbsp;
                                Tap the <i>zipcode</i> button to check the service cost for your location.
                            </p>
                        </PopoverPanel>
                    </Popover>
                    <ZipCodeButtonInput inServiceArea={inServiceArea} setInServiceArea={setInServiceArea}/>
                </div>
            </div>

            <GreyDivider/>

            <div className="flex justify-between text-lg">
                <span>Quoted Price:</span>
                <span>${calculatePrice(selectedService, includeDashcam, includeHardwire, inServiceArea)}</span>
            </div>

            <a href={'#information-form'} className={"block w-full mt-2 rounded-lg py-2 bg-red-500"}>Get Your Quote Finalized</a>
        </div>
    )
}

