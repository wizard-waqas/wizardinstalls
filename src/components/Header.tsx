import React from "react"

export default function Header() {
    return (
        <a className={"flex items-center justify-center"} href="/">
            <img className={"w-16 mr-4"} src={'/logo.png'} alt={"We install dashcams and backup cameras"}/>
            <h1 className={"text-beige text-xl lg:text-2xl font-bold"}>WIZARD DASHCAM INSTALLS</h1>
        </a>
    )
}
