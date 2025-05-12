import React from "react"
import Link from "next/link";

export default function BackupCameraPackages() {
    return (
        <div className="flex flex-col items-center w-full mx-auto space-y-8">

            <AftermarketRadioPackage/>
            <UniversalPackage/>

        </div>
    )
}

const AftermarketRadioPackage = () => {
    return (
        <div className="bg-grey-400 w-11/12 lg:w-1/3 rounded-xl p-6 mt-4  shadow-md border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Aftermarket Radio Upgrade</h3>

            <ul className="list-disc list-inside mb-4">
                <li>Modern touchscreen head unit with Apple CarPlay/Android Auto</li>
                <li>Direct replacement for factory radio - no bulky add-ons</li>
                <li>Optional backup camera integration</li>
            </ul>

            <p className="mb-4"><span className="font-bold">Installation Cost:</span> $390<br/><span
                className="font-bold">Product Cost:</span> Varies based on your vehicle and screen preference
            </p>
            <div className="flex gap-4">
                <Link href="#information-form">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                        Get a Quote
                    </button>
                </Link>
            </div>
        </div>
    )
}

const UniversalPackage = () => {
    return (

        <div className="bg-grey-400 w-11/12 lg:w-1/3 rounded-xl p-6 shadow-md border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Universal Backup Camera Kit</h3>

            <ul className="list-disc list-inside mb-4">
                <li>Complete package: HD display + backup camera</li>
                <li>Universal compatibility with all vehicles (2000-2025+)</li>
                <li>Built-in parking guidelines for easy parking</li>
            </ul>

            <p className="mb-4"><span className="font-bold">Flat Rate:</span> $450 (includes kit & service)</p>

            <div className="flex gap-4">
                <Link href="#information-form">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                        Book this Package
                    </button>
                </Link>
            </div>
        </div>
    )
}