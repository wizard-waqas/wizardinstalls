import React, {useState, useEffect} from "react"

export default function YouShouldKnow() {
    return (
        <div className="flex flex-col items-center">
            <div className="mt-6 max-w-xl text-center text-white">
                <h4 className="text-2xl font-bold mb-2">You should know:</h4>

                <ul className="space-y-4">
                    <li className={"bg-grey-400  p-4 mx-4 rounded-lg flex justify-center items-center"}>
                        <span>To record while parked we will need to hardwire the dashcam to the battery <strong>+$100</strong></span>
                    </li>
                    <li className={"bg-grey-400 p-4 mx-4 rounded-lg flex justify-center items-center"}>
                        <span>Not sure what dashcam to get?<br/>We can source it for you.</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
