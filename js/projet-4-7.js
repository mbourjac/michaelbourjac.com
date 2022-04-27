import { projectFour } from "./projet-4.js";

const projectFile = "7";

const footerImageInfo = [
    {
        items: 7,
        height: 691,
        maps: [1, 2, 4, 5, 6]
    },
    {
        number: 1,
        width: 3454,
        areas: [
            [573, 1291]
        ]
    },
    {
        number: 2,
        width: 4337,
        areas: [
            [723, 1441]
        ]
    },
    {
        number: 4,
        width: 4359,
        areas: [
            [2909, 3633]
        ]
    },
    {
        number: 5,
        width: 4354,
        areas: [
            [1446, 2170],
            [2908, 3632],
            [3633, 4353]
        ]
    },
    {
        number: 6,
        width: 4358,
        areas: [
            [1, 726],
            [1454, 2184],
            [2185, 2908]
        ]
    }
];

const imageCaptions = [
    "image 02 — Port, Le Cap, Afrique du Sud.",
    "image 07.",
    "image 22 — Port, Port Elizabeth, Afrique du Sud.",
    "image 26 — The Union's Snake Park, Port Elizabeth, Afrique du Sud.",
    "image 28.",
    "image 29 — Port, Port Elizabeth, Afrique du Sud.",
    "image 30 — Main Library, Port Elizabeth, Afrique du Sud.",
    "image 32.",
    "image 33."
];

const containerSelector = ".content--scan__nav--mobile";

projectFour(projectFile, footerImageInfo, imageCaptions, containerSelector);