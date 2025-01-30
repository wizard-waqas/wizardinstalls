import type {Metadata} from "next";
import "./globals.css";
import Head from "next/head";
import {Toaster} from "react-hot-toast";
import {rubik} from "@/fonts";

export const metadata: Metadata = {
    title: "Wizard Dashcam Installs",
    description: "Offering mobile dashcam installation services",
    keywords: [
        "dashcam installation",
        "car camera installation",
        "dashcam setup near me",
        "dashcam installation for uber and lyft drivers",
        "mobile dashcam installation",
        "dashcam installation in Woodbridge NJ",
        "dashcam installation in Jersey City",
        "hardwired dashcam installation",
        "professional dashcam installers",
        "dashcam installation with parking mode",
        "dashcam installation for trucks",
        "dashcam installation for fleet vehicles",
    ],
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-icon.png",
    },
    openGraph: {
        title: "Wizard Dashcam Installs | Professional Dashcam Installation Services",
        description: "Capture every detail of your journey with a dashcam. Wizard Dashcam Installs offers mobile dashcam installation services near you. Perfect for recording your drive and providing evidence in case of incidents. Serving Woodbridge, Jersey City, and surrounding areas in NJ.",
        url: "https://www.wizardinstalls.com",
        siteName: "Wizard Dashcam Installs",
        // images: [
        //     {
        //         url: "https://www.yourwebsite.com/og-image.jpg",
        //         width: 1200,
        //         height: 630,
        //         alt: "Wizard Dashcam Installs - Professional Dashcam Installation",
        //     },
        // ],
        locale: "en_US",
        type: "website",
    },
    // twitter: {
    //     card: "summary_large_image",
    //     title: "Wizard Dashcam Installs | Professional Dashcam Installation Services",
    //     description: "Capture every detail of your journey with an affordable front-facing dashcam. Wizard Dashcam Installs offers professional, mobile dashcam installation services near you. Perfect for recording your drive and providing evidence in case of incidents. Serving [Your City/Region].",
    //     images: ["https://www.yourwebsite.com/twitter-image.jpg"], // Replace with your Twitter image URL
    // },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Head>
            <meta name="theme-color" content="#000000"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""}/>
            <link
                href="https://fonts.googleapis.com/css2?family=Anton+SC&family=Arsenal+SC:ital,wght@0,400;0,700;1,400;1,700&family=Beiruti:wght@200..900&family=Faculty+Glyphic&display=swap"
                rel="stylesheet"/>

        </Head>

        <body className={`antialiased ${rubik.className}`}>
        <Toaster/>
        {children}
        </body>
        </html>
    );
}
