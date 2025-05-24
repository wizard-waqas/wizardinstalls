import type {Metadata} from "next";
import "./globals.css";
import Head from "next/head";
import {Toaster} from "react-hot-toast";
import {rubik} from "@/fonts";
import {Analytics} from "@vercel/analytics/react"

export const metadata: Metadata = {
    title: "Wizard Dashcam Installs",
    description: "Offering mobile dashcam and backup camera installation services in New Jersey. Record your drive and provide evidence in case of incidents.",
    keywords: [
        "dashcams",
        "dashcam installation",
        "dash cam installation near me",
        "dashcam install near me",
        "dashcam installation new jersey",
        "professional dashcam installer",
        "backup camera install",
        "apple carplay install",
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
            <script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5404021000350083"
                    crossOrigin="anonymous"></script>

        </Head>

        <body className={`antialiased ${rubik.className}`}>
        <Toaster
            toastOptions={{
                duration: 5000
            }}
        />
        {children}
        <Analytics/>
        </body>
        </html>
    );
}
