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
        service: 80,
        dashcam: 70,
        full: 150
    },
    frontRear: {
        service: 120,
        dashcam: 130,
        full: 250
    },
    frontInterior: {
        service: 100,
        dashcam: 200,
        full: 300
    },
    rearviewMirror: {
        service: 120,
        dashcam: 120,
        full: 240
    }
};

export const getServiceText = (serviceType: string) => {
    switch (serviceType) {
        case "front":
            return "Front";
        case "frontRear":
            return "Front + Rear";
        case "frontInterior":
            return "Front + Interior";
        case "rearviewMirror":
            return "Rearview Mirror";
        default:
            return "Front";
    }
};

