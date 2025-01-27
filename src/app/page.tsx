"use client"; // Required for client-side hooks

import InstallationServices from "@/components/InstallationServices";
import AccessoryServices from "@/components/AccessoryServices";
import SplashSection from "@/components/SplashSection";
import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Use next/navigation for App Router
import { analytics } from "@/firebase";
import { logEvent } from "@firebase/analytics";

export default function Home() {
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_path: window.location.pathname,
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      <SplashSection />
      <InstallationServices />
      <AccessoryServices />
    </div>
  );
}


{/*<h2 className="text-center text-white text-xl mt-8">*/
}
{/*    Dashcam + Installation starting at $150*/
}
{/*</h2>*/
}

{/*<div className={"flex justify-center my-4 w-full"}>*/
}
{/*    <div className={"border-b-2 w-11/12 border-red-300 rounded-full"}/>*/
}
{/*</div>*/
}

{/*<div className={"flex items-center"}>*/
}
{/*    <span className={"text-4xl mr-2"}>📍</span>*/
}
{/*    <p className={"text-xl"}>*/
}
{/*        Mobile service available in*/
}
{/*        <br/>*/
}
{/*        <span className={"text-red-300"}>Jersey City + Woodbridge</span>*/
}
{/*    </p>*/
}
{/*</div>*/
}

{/*<h3 className="text-center text-white text-xl mt-4 ">*/
}
{/*    Contact us at <a className={"underline"} href="tel:+13474335693">+1 (347) 433-5693</a>*/
}
{/*</h3>*/
}
