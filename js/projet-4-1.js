import { projectFour } from "./projet-4.js";

const projectFile = "1";

const footerImageInfo = [
    {
        items: 4,
        height: 684,
        maps: [1, 2, 3]
    },
    {
        number: 1,
        width: 5043,
        areas: [
            [2871, 3599]
        ]
    },
    {
        number: 2,
        width: 4359,
        areas: [
            [723, 1451],
            [2904, 3633]
        ]
    },
    {
        number: 3,
        width: 4355,
        areas: [
            [724, 1453],
            [2178, 2914]
        ]
    }
];

const imageCaptions = [
    "image 02. détail.",
    "image 06. détails.",
    "image 09. détails.",
    "image 12.",
    "image 14."
];

const containerSelector = ".content--scan__nav--mobile";

projectFour(projectFile, footerImageInfo, imageCaptions, containerSelector);