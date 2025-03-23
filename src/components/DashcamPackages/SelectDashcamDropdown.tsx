import React from "react"
import {BiSolidCameraHome} from "react-icons/bi";
import {Menu, MenuButton, MenuItems} from "@headlessui/react";
import {getServiceText} from "@/utils";
import {MenuItem} from "@headlessui/react";
import { IoIosArrowDown, IoMdArrowRoundForward } from "react-icons/io";

interface SelectDashcamDropdownProps {
    selectedService: string,
    handleServiceChange: (service: string) => void,
    useDarkBg?: boolean
}
export default function SelectDashcamDropdown({selectedService, handleServiceChange, useDarkBg}: SelectDashcamDropdownProps) {

    const bgClass = useDarkBg ? "bg-grey-800" : "bg-grey-400";

    return (
        <div className={`flex items-center justify-between w-full overflow-hidden mb-4 ${bgClass} rounded-full`}>
            <div className={`flex w-fit text-nowrap mr-4 p-4`}>
                <BiSolidCameraHome className={"text-2xl text-gray-300 rotate-180 mr-2"}/>
                Dashcam
            </div>

            <div className={"w-full "}>
                <Menu>
                    <MenuButton
                        className={"w-full p-4 rounded-lg flex justify-end text-right text-nowrap"}>
                        <div>{getServiceText(selectedService)}</div>
                        <IoIosArrowDown className={"text-2xl ml-2 text-red-500"}/>
                    </MenuButton>
                    <MenuItems className={`w-52 ${bgClass} mt-2 rounded-lg p-2`} anchor="bottom end">
                        <SelectDashcamMenuItem serviceType={"front"} handleServiceChange={handleServiceChange} useDarkBg={useDarkBg}/>
                        <SelectDashcamMenuItem serviceType={"frontRear"} handleServiceChange={handleServiceChange} useDarkBg={useDarkBg}/>
                        <SelectDashcamMenuItem serviceType={"frontInterior"} handleServiceChange={handleServiceChange} useDarkBg={useDarkBg}/>
                        <SelectDashcamMenuItem serviceType={"rearviewMirror"}
                                               handleServiceChange={handleServiceChange} useDarkBg={useDarkBg}/>
                    </MenuItems>
                </Menu>
            </div>
        </div>
    )
}

interface SelectDashcamMenuItemProps {
    serviceType: string,
    handleServiceChange: (service: string) => void,
    useDarkBg?: boolean
}

function SelectDashcamMenuItem({serviceType, handleServiceChange, useDarkBg}: SelectDashcamMenuItemProps){
    const bgClass = useDarkBg ? "data-[focus]:bg-grey-400" : "data-[focus]:bg-grey-800";

    return (
        <MenuItem>
            <div onClick={() => handleServiceChange(serviceType)}
                 className={`block text-gray-300 ${bgClass} data-[focus]:text-white cursor-pointer rounded-md p-2`}>
                {getServiceText(serviceType)}
            </div>
        </MenuItem>
    )
}
