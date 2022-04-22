import { projectFour } from "./projet-4.js";

const projectFile = "5";

const footerImageInfo = [
    {
        items: 7,
        height: 695,
        maps: [2, 3, 4, 5, 6, 7]
    },
    {
        number: 2,
        width: 4362,
        areas: [
            [2902, 3635]
        ]
    },
    {
        number: 3,
        width: 4361,
        areas: [
            [1, 723],
            [2180, 2903],
            [2904, 3632]
        ]
    },
    {
        number: 4,
        width: 4397,
        areas: [
            [1, 729],
            [730, 1463],
            [2199, 2934]
        ]
    },
    {
        number: 5,
        width: 4375,
        areas: [
            [2190, 2918]
        ]
    },
    {
        number: 6,
        width: 4400,
        areas: [
            [2938, 3669]
        ]
    },
    {
        number: 7,
        width: 4449,
        areas: [
            [734, 1476],
            [3685, 4429]
        ]
    }
];

const imageCaptions = [
    "image 08.",
    "image 10.",
    "image 13.",
    "image 14.",
    "image 16.",
    "image 17.",
    "image 19.",
    "image 25.",
    "image 32 — Cape Point, Péninsule du Cap, Afrique du Sud.",
    "image 35. détail — Cape Point, Péninsule du Cap, Afrique du Sud.",
    "image 39."
];

const containerSelector = ".content--scan__nav--mobile";

projectFour(projectFile, footerImageInfo, imageCaptions, containerSelector);