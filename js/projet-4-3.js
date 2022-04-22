import { projectFour } from "./projet-4.js";

const projectFile = "3";

const footerImageInfo = [
    {
        items: 7,
        height: 688,
        maps: [1, 2, 3, 5, 6, 7]
    },
    {
        number: 1,
        width: 4350,
        areas: [
            [2900, 3626],
            [3627, 4350]
        ]
    },
    {
        number: 2,
        width: 4345,
        areas: [
            [729, 1457],
            [2175, 2899],
            [3625, 4345]
        ]
    },
    {
        number: 3,
        width: 4348,
        areas: [
            [1, 719]
        ]
    },
    {
        number: 5,
        width: 4351,
        areas: [
            [1444, 2169]
        ]
    },
    {
        number: 6,
        width: 4348,
        areas: [
            [1444, 2174],
            [2175, 2902],
            [2903, 3628]
        ]
    },
    {
        number: 7,
        width: 3447,
        areas: [
            [1442, 2173]
        ]
    }
];

const imageCaptions = [
    "image 03 — Amour et Psyché, Salle du Gladiateur, Palais Neuf, Rome, Italie",
    "image 04. détail — Louve capitoline, Salle de la Louve, Palais des Conservateurs, Rome, Italie",
    "image 06 — Marchés de Trajan, Rome, Italie",
    "image 08 — Porticciolo di Santa Lucia, Naples, italie",
    "image 10. détail",
    "image 11. détail",
    "image 25 — Apollon Archer, Temple d'Apollon, Pompéi, Italie",
    "image 31 — Faune Dansant, Maison du Faune, Pompéi, Italie",
    "image 32 — Temple de Neptune, Paestum, Italie",
    "image 33 — Temple de Neptune, Paestum, Italie",
    "image 37 — Temple de Cérès, Paestum, Italie"
];

const containerSelector = ".content--scan__nav--mobile";

projectFour(projectFile, footerImageInfo, imageCaptions, containerSelector);