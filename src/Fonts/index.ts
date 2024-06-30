import localFont from "next/font/local";

//local Fonts
export const macan = localFont({
    src: [
        {
            path: "./file/macan-light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "./file/macan-regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./file/macan-semibold.woff2",
            weight: "600",
            style: "normal",
        },
        {
            path: "./file/macan-bold.woff2",
            weight: "700",
            style: "normal",
        }
    ]
})

//Domaine
export const domaine = localFont({
    src: [
        {
            path: "./domaine/domaine-medium.woff2",
            weight: "500",
            style: "italic",
        }
    ],
    variable: "--font-domaine"
})