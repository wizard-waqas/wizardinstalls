import React from "react"
import GreyDivider from "@/components/GreyDivider";

export default function YouShouldKnow() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="mt-4 flex flex-col items-center text-center text-white">
                {/* the id for pricing is on here so its more natural when the pricing section is navigated to */}
                <h4 id={"pricing"}  className="text-2xl font-bold mb-2 text-gray-300">You should know:</h4>

                <ul className="flex flex-col rounded-lg p-4 bg-grey-400 ">
                    <li className={"flex justify-center items-center leading-[1.75]"}>
                        <span>
                            <strong className={"text-red-300"}>For 24/7 recording</strong> - we will need to hardwire the dashcam to the battery&nbsp;
                        </span>
                    </li>
                    <GreyDivider/>
                    <li className={"flex justify-center items-center"}>
                        <span>Not sure what dashcam to get?<br/><strong className={"text-red-300"}>We can source it for you.</strong></span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
