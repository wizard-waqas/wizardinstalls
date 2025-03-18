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
};