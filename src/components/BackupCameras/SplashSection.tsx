import React from "react"
import Carousel from "@/components/BackupCameras/Carousel";
import Link from "next/link";

export default function SplashSection() {
    return (
        <section className={"py-8 bg-grey-800"}>
            <a className={"flex items-center justify-center"} href="/">
                <img className={"w-16 mr-4"} src={'/logo.png'} alt={"We install dashcams and backup cameras"}/>
                <h1 className={"text-2xl font-bold"}>Wizard Dashcam Installs</h1>
            </a>

            <h3 className="text-center text-red-500 font-bold text-2xl mt-4">
                Backup Camera Packages
            </h3>

            <div className={"flex justify-center"}>
                <Carousel/>
            </div>

            {/* Package Details */}
            <div className="max-w-5xl mx-auto px-4 space-y-8">

                {/* Basic Package */}
                <div className="bg-grey-400 rounded-xl p-6 mt-4 shadow-md border border-white/10">
                    <h3 className="text-xl font-semibold mb-2">Universal Backup Camera Kit with Display</h3>
                    <p className="mb-4">
                        Transform your driving experience with our universal Apple CarPlay/Android Auto compatible
                        backup camera system. Perfect for vehicles without built-in screens, this complete kit includes
                        a high-resolution display and waterproof rearview camera that works with any car, truck, or SUV
                        - regardless of make, model, or year. Professional installation ensures seamless operation and a
                        clutter-free interior.
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Complete package: HD display + night vision backup camera</li>
                        <li>Universal compatibility with all vehicles (2000-2024+)</li>
                        <li>Instant activation when shifting into reverse</li>
                        <li>Professional hidden wiring for clean installation</li>
                        <li>Upgrade-ready for future Apple CarPlay/Android Auto integration</li>
                    </ul>
                    <p className="mb-4"><span className="font-bold">Flat Rate:</span> $380 (includes service & kit)</p>

                    <div className="flex gap-4">
                        <Link href="#information-form">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                                Get a Quote
                            </button>
                        </Link>
                        {/*<Link href="#information-form">*/}
                        {/*    <button*/}
                        {/*        className="bg-grey-800 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-grey-800 transition">*/}
                        {/*        Learn More*/}
                        {/*    </button>*/}
                        {/*</Link>*/}
                    </div>
                </div>

                {/* Full Kit Package */}
                <div className="bg-grey-400 rounded-xl p-6 shadow-md border border-white/10">
                    <h3 className="text-xl font-semibold mb-2">OEM-Style Touchscreen Replacement with Apple CarPlay &
                        Android Auto</h3>
                    <p className="mb-4">
                        Upgrade to a smarter dash with our premium touchscreen radio replacement featuring built-in
                        Apple CarPlay and Android Auto. This factory-style installation replaces your outdated stereo
                        with a cutting-edge multimedia system, complete with optional backup camera integration. Enjoy
                        wireless smartphone connectivity, crystal-clear navigation, and seamless control while
                        maintaining your vehicle's original aesthetic.
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Modern touchscreen head unit with wireless Apple CarPlay/Android Auto</li>
                        <li>Direct replacement for factory radio - no bulky add-ons</li>
                        <li>Optional high-definition backup camera integration</li>
                        <li>OEM-matched finish for seamless dashboard integration</li>
                        <li>Enhanced features: Bluetooth, voice control, and app integration</li>
                    </ul>
                    <p className="mb-4"><span className="font-bold">Installation Cost:</span> $300<br/><span
                        className="font-bold">Product Cost:</span> Varies based on your vehicle and screen preference
                    </p>
                    <div className="flex gap-4">
                        <Link href="#information-form">
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                                Book This Package
                            </button>
                        </Link>
                        {/*<Link href="#information-form">*/}
                        {/*    <button*/}
                        {/*        className="bg-grey-800 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-grey-800 transition">*/}
                        {/*        Learn More*/}
                        {/*    </button>*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </div>

        </section>
    )
}
