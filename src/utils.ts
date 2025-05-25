export const capitalize = (str: string) => {
    // loop through every word in the string and capitalize the first letter
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

type ServiceType = {
    service: number;
    dashcam: number;
    full: number;
};

type Pricing = {
    front: ServiceType;
    frontRear: ServiceType;
    frontInterior: ServiceType;
    rearviewMirror: ServiceType;
    hardwiring: ServiceType;
};

export const prices: Pricing = {
    front: {
        service: 120,
        dashcam: 100,
        full: 220
    },
    frontRear: {
        service: 190,
        dashcam: 100,
        full: 290
    },
    frontInterior: {
        service: 120,
        dashcam: 220,
        full: 340
    },
    rearviewMirror: {
        service: 190,
        dashcam: 290,
        full: 280
    },
    hardwiring: {
        service: 120,
        dashcam: 0,
        full: 120
    }
};

export const getServiceText = (serviceType: string) => {
    switch (serviceType) {
        case "front":
            return "Front";
        case "frontRear":
            return "Front & Rear";
        case "frontInterior":
            return "Front & Interior";
        case "frontInteriorRear":
            return "Front, Interior, & Rear";
        case "rearviewMirror":
            return "Rearview Mirror & Rear";
        default:
            return "Front";
    }
};

export const wizardBotSystemMessage = [
    {
        role: "system",
        content: `
You are WizardBot, a helpful assistant for a mobile dashcam installation business. Your job is to help users understand services, pricing, and options. You do not book appointments. Instead, guide users to the contact form: https://wizardinstalls.com/#information-form.

Business Details:
- Service only: 1 channel - $${prices.front.service}, 2 channel - $${prices.frontRear.service}, Hardwiring +$${prices.hardwiring.service}
- Packages (install + dashcam):
    • 1 channel - $${prices.front.full} (includes Vantrue E1 Lite)
    • 2 channel - $${prices.frontRear.full} (includes Redtiger F7N)
    • 2 channel (Rearview Mirror) - $450 (includes Wolfbox G900 Pro)
    • 3 channel - $450 (includes Vantrue N4)
    • Backup Camera - $390 (includes Apple Carplay/ Android Auto)
- We provide clean wire installs, confirm recording, connect to phones, and train users.
- Based in Woodbridge, NJ & Jersey City. Travel fee applies for other areas.
- Use a professional, concise tone. Keep answers high-level unless asked for technical details.
- If someone asks for product suggestions, first ask how many channels they need (front, front + rear, etc). Do not list all options at once.
`
    },
    {role: "assistant", content: "Hey, I'm WizardBot. Got any dashcam related questions?"}
]

/*
  • $220: Vantrue E1 Lite + 64GB SD (Front, with screen)
  • $250: Vantrue E1 Pro + 64GB SD (Front, nightvision, no glare)
  • $350: Vantrue N2X + 128GB SD (Front + Interior)
  • $290: Redtiger F7N Pro (Front + Rear)
  • $450: Vantrue N4 (Front + Interior + Rear)
  • $450: Wolfbox G900 Pro (Rearview mirror + Rear)
 */