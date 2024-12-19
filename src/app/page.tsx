import Image from "next/image";

export default function Home() {
    return (
        <div className="relative min-h-screen w-full">

            <Image
                src="/lambo.jpg"
                alt="Car Background"
                fill
                className="object-cover object-center -z-10"
                priority
            />

            <div className="relative flex flex-col items-center pt-16">
                <p>Website is currently under development.</p>

                <div className="bg-red-500 mx-8 mt-4 p-2 flex rounded-lg items-center justify-center">
                    <h1 className="text-white text-center text-2xl font-bold">
                        Wizard Dashcam Installs
                    </h1>
                </div>

                <h2 className="text-center text-white text-xl mt-8">
                    Dashcam + Installation starting at $150
                </h2>

                <div className={"flex justify-center my-4 w-full"}>
                    <div className={"border-b-2 w-11/12 border-red-300 rounded-full"}/>
                </div>

                <div className={"flex items-center"}>
                    <span className={"text-4xl mr-2"}>📍</span>
                    <p className={"text-xl"}>
                        Mobile service available in
                        <br/>
                        <span className={"text-red-300"}>Jersey City + Woodbridge</span>
                    </p>
                </div>

                <h3 className="text-center text-white text-xl mt-4 ">
                    Contact us at <a className={"underline"} href="tel:+13474335693">+1 (347) 433-5693</a>
                </h3>
            </div>
        </div>
    );
}
