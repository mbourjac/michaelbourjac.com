import { projectFour } from "./projet-4.js";

const projectFile = "4";

const footerImageInfo = [
    {
        items: 7,
        height: 687,
        maps: [1, 2, 4, 5, 6, 7]
    },
    {
        number: 1,
        width: 4565,
        areas: [
            [3111, 3837],
            [3838, 4565]
        ]
    },
    {
        number: 2,
        width: 4346,
        areas: [
            [725, 1449],
            [1450, 2173]
        ]
    },
    {
        number: 4,
        width: 4354,
        areas: [
            [1, 724]
        ]
    },
    {
        number: 5,
        width: 4347,
        areas: [
            [1442, 2173]
        ]
    },
    {
        number: 6,
        width: 4346,
        areas: [
            [724, 1444],
            [1445, 2173]
        ]
    },
    {
        number: 7,
        width: 4108,
        areas: [
            [1, 727],
            [2178, 2904],
            [2905, 3829]
        ]
    }
];

const imageCaptions = [
    "image 02",
    "image 03",
    "image 05",
    "image 06",
    "image 16",
    "image 24",
    "image 29",
    "image 30",
    "image 34",
    "image 37",
    "image 38"
];

const containerSelector = ".content--scan__nav--mobile";

projectFour(projectFile, footerImageInfo, imageCaptions, containerSelector);