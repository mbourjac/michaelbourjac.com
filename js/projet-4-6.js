import { projectFour } from "./projet-4.js";

const projectFile = "6";

const footerImageInfo = [
    {
        items: 7,
        height: 684,
        maps: [2, 3, 4, 5, 6, 7]
    },
    {
        number: 2,
        width: 4341,
        areas: [
            [1, 723],
            [2170, 2894],
            [2895, 3620]
        ]
    },
    {
        number: 3,
        width: 4351,
        areas: [
            [1452, 2176]
        ]
    },
    {
        number: 4,
        width: 4339,
        areas: [
            [732, 1452],
            [2897, 3618]
        ]
    },
    {
        number: 5,
        width: 4338,
        areas: [
            [2172, 2897]
        ]
    },
    {
        number: 6,
        width: 4339,
        areas: [
            [2169, 2896]
        ]
    },
    {
        number: 7,
        width: 4499,
        areas: [
            [3604, 4327]
        ]
    }
];

const imageCaptions = [
    "image 03 — Le Cap, Afrique du Sud.",
    "image 06 — Heerengracht Street, Le Cap, Afrique du Sud.",
    "image 07 — Heerengracht Street, Le Cap, Afrique du Sud.",
    "image 11 — Rhodes Memorial, Devil's Peak, Le Cap, Afrique du Sud.",
    "image 16 — Adderley Street, Le Cap, Afrique du Sud.",
    "image 19 — Saunders Rock's Beach, Le Cap, Afrique du Sud.",
    "images 24 & 25 — Montagne de la Table, Le Cap, Afrique du Sud.",
    "images 30 & 31 — Montagne de la Table, Le Cap, Afrique du Sud.",
    "image 38 — Montagne de la Table, Le Cap, Afrique du Sud."
];

const containerSelector = ".content--scan__nav--mobile";

projectFour(projectFile, footerImageInfo, imageCaptions, containerSelector);