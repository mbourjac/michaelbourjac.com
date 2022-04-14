import { projectFour } from "./projet-4.js";

const footerImageInfo = [
    {
        number: 1,
        height: 684,
        width: 5043,
        areas: [
            [2871, 3599]
        ]
    },
    {
        number: 2,
        height: 684,
        width: 4359,
        areas: [
            [723, 1451],
            [2904, 3633]
        ]
    },
    {
        number: 3,
        height: 684,
        width: 4355,
        areas: [
            [724, 1453],
            [2178, 2914]
        ]
    },
    {
        number: 4,
        height: 684,
        width: 4999,
    },
];

const imageCaptions = [
    "image 02. détail.",
    "image 06. détails.",
    "image 09. détails.",
    "image 12.",
    "image 14."
];

const containerSelector = ".content--scan__nav--mobile";

projectFour(footerImageInfo, imageCaptions, containerSelector);