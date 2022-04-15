import { projectFour } from "./projet-4.js";

const projectFile = "2";

const footerImageInfo = [
    {
        items: 7,
        height: 687,
        maps: [2, 3, 4, 6, 7]
    },
    {
        number: 2,
        width: 4349,
        areas: [
            [1, 722],
            [1448, 2174]
        ]
    },
    {
        number: 3,
        width: 4346,
        areas: [
            [1450, 2174],
            [2175, 2899],
            [3626, 4346]
        ]
    },
    {
        number: 4,
        width: 4358,
        areas: [
            [1452, 2179],
            [2906, 3634]
        ]
    },
    {
        number: 6,
        width: 4356,
        areas: [
            [722, 1449],
            [2899, 3633]
        ]
    },
    {
        number: 7,
        width: 3584,
        areas: [
            [721, 1447],
            [2172, 2897]
        ]
    }
];

const imageCaptions = [
    "image 04 — Cathédrale de Modène, Modène, Italie",
    "image 06 — Piazza del Nettuno, Bologne, Italie",
    "image 12 — Piazza del Duomo, Florence, Italie",
    "image 13 — Piazza del Duomo, Florence, Italie",
    "image 15 — Florence, Italie",
    "image 18 — Piazza di San Lorenzo, Florence, Italie",
    "image 20. détail",
    "image 29 — Assise, Italie",
    "image 32 — Piazza del Comune, Assise, Italie",
    "image 35 — Assise, Italie",
    "image 37 — Assise, Italie"
];

const containerSelector = ".content--scan__nav--mobile";

projectFour(projectFile, footerImageInfo, imageCaptions, containerSelector);