import React, {useState} from "react"
import {useAtom} from "jotai/index";
import {selectedServiceAtom} from "@/atoms/dashcamFormAtoms";
import GreyDivider from "@/components/GreyDivider";
import {prices} from "@/utils";
import SelectDashcamDropdown from "@/components/DashcamPackages/SelectDashcamDropdown";
import {CloseButton, Popover, PopoverButton, PopoverPanel} from "@headlessui/react";
import {IoClose} from "react-icons/io5";
import ZipCodeButtonInput from "@/components/DashcamPackages/ZipCodeButtonInput";
import GetYourQuoteFinalizedButton from "@/components/DashcamPackages/GetYourQuoteFinalizedButton";

export default function InstallationQuote() {
    const [selectedService, setSelectedService] = useAtom(selectedServiceAtom);
    const [includeDashcam, setIncludeDashcam] = useState(true);
    const [includeHardwire, setIncludeHardwire] = useState(false);
    const [includeTravelCharge, setIncludeTravelCharge] = useState(true);

    const calculatePrice = (serviceType: string, includeDashcam: boolean, includeHardwire: boolean, includeTravelCharge: boolean) => {
        let basePrice = includeDashcam ? prices[serviceType].full : prices[serviceType].service;
        if (!includeTravelCharge) {
            basePrice += 20;
        }
        return includeHardwire ? basePrice + prices.hardwiring.service : basePrice;
    };

    const handleServiceChange = (service: string) => {
        setSelectedService(service);
    };


    return (
        <div className="flex flex-col items-center w-full">
            <div className={"mt-6 bg-grey-400 p-4 rounded-lg shadow-md text-white w-11/12 lg:w-1/3"}>
                <h4 className="text-2xl font-bold mb-2 text-white text-center">Installation Quote</h4>

                <SelectDashcamDropdown selectedService={selectedService} handleServiceChange={handleServiceChange}
                                       useDarkBg={true}/>

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
                    <span className="text-lg">Include parking mode Recording</span>
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
                        <span>{includeHardwire ? `$120` : "--"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <Popover className="relative">
                            <PopoverButton>Travel Cost ⓘ</PopoverButton>
                            <PopoverPanel anchor="bottom" className="flex flex-col">
                                <CloseButton as={undefined}>
                                    <IoClose className={"text-2xl absolute top-2 right-10"}/>
                                </CloseButton>
                                <p className={"bg-grey-400 border-2 border-grey-800 mx-8 pt-8 px-4 pb-4 rounded-lg"}>
                                    Travel fee is waived for Jersey City and Woodbridge, NJ residents. For other areas,
                                    a travel fee may apply. Tap the <i>zipcode</i> button to check the service cost for your location.
                                </p>
                            </PopoverPanel>
                        </Popover>
                        <ZipCodeButtonInput includeTravelCharge={includeTravelCharge}
                                            setIncludeTravelCharge={setIncludeTravelCharge}/>
                    </div>
                </div>

                <GreyDivider/>

                <div className="flex justify-between text-lg">
                    <span>Quoted Price:</span>
                    <span>${calculatePrice(selectedService, includeDashcam, includeHardwire, includeTravelCharge)}</span>
                </div>

                <GetYourQuoteFinalizedButton/>
            </div>
        </div>
    )
}

