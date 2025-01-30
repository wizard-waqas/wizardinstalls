import type {Metadata} from "next";
import "./globals.css";
import Head from "next/head";
import {Toaster} from "react-hot-toast";
import {rubik} from "@/fonts";

export const metadata: Metadata = {
    title: "Wizard Dashcam Installs",
    description: "Offering mobile dashcam installation services",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-icon.png",
    },
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
