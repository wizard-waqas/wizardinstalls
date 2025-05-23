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
    [key: string]: ServiceType;
};

export const prices: Pricing = {
    front: {
        service: 120,
        dashcam: 70,
        full: 190
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

