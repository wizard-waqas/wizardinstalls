export const capitalize = (str: string) => {
    // loop through every word in the string and capitalize the first letter
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}