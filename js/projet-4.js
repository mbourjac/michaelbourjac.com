import { dynamicImageMaps } from "./utils/dynamic-image-maps.js";
import { expandableMenu } from "./utils/expandable-menu.js";

function footerLayout(path, dataArray, viewportHeight) {
    for (let i = 1; i < dataArray[0].items + 1; i++) {
        const footerContainer = ".content--scan__footer";
        const footerImage = document.createElement("img");
        footerImage.src = `${path}${i}.jpg`;
        footerImage.style.height = `${viewportHeight}vh`;

        if (i === 1) {
            footerImage.style.paddingLeft = "10px";
        } else if (i === dataArray[0].items) {
            footerImage.style.paddingRight = "10px";
        }

        if (dataArray[0].maps.includes(i)) {
            dynamicImageMaps(footerImage, i, dataArray, viewportHeight, footerContainer);
        }
        document.querySelector(footerContainer).appendChild(footerImage);
    }
}

function dynamicContent(array, path) {
    for (let i = 0; i < array.length; i ++) {
        document.querySelector(`.area-${i + 1}`).addEventListener("click", function(e) {
            e.preventDefault();
            const contentImage = document.querySelector(".content--scan__image");

            if (innerHeight < 500 || innerWidth < 500) {
                contentImage.src = `${path[0]}${i + 1}.jpg`;
            } else if (innerHeight < 900 || innerWidth < 1025) {
                contentImage.src = `${path[1]}${i + 1}.jpg`;
            } else {
                contentImage.src = `${path[2]}${i + 1}.jpg`;
            }

            document.querySelector(".content--scan__caption--current").textContent = array[i];
        });
    }
}

function projectFour(file, footerImageInfo, imageCaptions) {
    const footerImagePath = `/img/scan/${file}/negatives/`;
    const contentImagePath = [
        `/img/scan/${file}/small/`,
        `/img/scan/${file}/medium/`,
        `/img/scan/${file}/large/`
    ];
    const footerImageVhHeight = 10;
    
    footerLayout(footerImagePath, footerImageInfo, footerImageVhHeight);
    dynamicContent(imageCaptions, contentImagePath);
}

const containerSelector = ".content--scan__nav--mobile";
const menuItemsNumber = 4;

expandableMenu(containerSelector, menuItemsNumber);

const projectData = [
    {
        file: "1",
        title: "bretagne – départ italie (1957)",
        images: "22",
        footer: [
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
        ],
        captions: [
            "image 02. détail.",
            "image 06. détails.",
            "image 09. détails.",
            "image 12.",
            "image 14."
        ]
    },
    {
        file: "2",
        title: "milan – florence",
        images: "37",
        footer: [
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
        ],
        captions: [
            "image 04 — Cathédrale de Modène, Modène, Italie.",
            "image 06 — Piazza del Nettuno, Bologne, Italie.",
            "image 12 — Piazza del Duomo, Florence, Italie.",
            "image 13 — Piazza del Duomo, Florence, Italie.",
            "image 15 — Florence, Italie.",
            "image 18 — Piazza di San Lorenzo, Florence, Italie.",
            "image 20. détail.",
            "image 29 — Assise, Italie.",
            "image 32 — Piazza del Comune, Assise, Italie.",
            "image 35 — Assise, Italie.",
            "image 37 — Assise, Italie."
        ]
    },
    {
        file: "3",
        title: "naples – capri – paestum",
        images: "38",
        footer: [
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
        ],
        captions: [
            "image 03 — Amour et Psyché, Salle du Gladiateur, Palais Neuf, Rome, Italie.",
            "image 04. détail — Louve capitoline, Salle de la Louve, Palais des Conservateurs, Rome, Italie.",
            "image 06 — Marchés de Trajan, Rome, Italie.",
            "image 08 — Porticciolo di Santa Lucia, Naples, italie.",
            "image 10. détail.",
            "image 11. détail.",
            "image 25 — Apollon Archer, Temple d'Apollon, Pompéi, Italie.",
            "image 31 — Faune Dansant, Maison du Faune, Pompéi, Italie.",
            "image 32 — Temple de Neptune, Paestum, Italie.",
            "image 33 — Temple de Neptune, Paestum, Italie.",
            "image 37 — Temple de Cérès, Paestum, Italie."
        ]
    },
    {
        file: "4",
        title: "kraemer",
        images: "38",
        footer: [
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
        ],
        captions: [
            "image 02.",
            "image 03.",
            "image 05.",
            "image 06.",
            "image 16.",
            "image 24.",
            "image 29.",
            "image 30.",
            "image 34.",
            "image 37.",
            "image 38."
        ]
    },
    {
        file: "5",
        title: "sur le bateau",
        images: "39",
        footer: [
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
        ],
        captions: [
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
        ]
    },
    {
        file: "6",
        title: "le cap",
        images: "38",
        footer: [
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
        ],
        captions: [
            "image 03 — Le Cap, Afrique du Sud.",
            "image 06 — Heerengracht Street, Le Cap, Afrique du Sud.",
            "image 07 — Heerengracht Street, Le Cap, Afrique du Sud.",
            "image 11 — Rhodes Memorial, Devil's Peak, Le Cap, Afrique du Sud.",
            "image 16 — Adderley Street, Le Cap, Afrique du Sud.",
            "image 19 — Saunders Rock's Beach, Le Cap, Afrique du Sud.",
            "images 24 & 25 — Montagne de la Table, Le Cap, Afrique du Sud.",
            "images 30 & 31 — Montagne de la Table, Le Cap, Afrique du Sud.",
            "image 38 — Montagne de la Table, Le Cap, Afrique du Sud."
        ]
    },
    {
        file: "7",
        title: "port elizabeth – east london",
        images: "39",
        footer: [
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
        ],
        captions: [
            "image 02 — Port, Le Cap, Afrique du Sud.",
            "image 07.",
            "image 22 — Port, Port Elizabeth, Afrique du Sud.",
            "image 26 — The Union's Snake Park, Port Elizabeth, Afrique du Sud.",
            "image 28.",
            "image 29 — Port, Port Elizabeth, Afrique du Sud.",
            "image 30 — Main Library, Port Elizabeth, Afrique du Sud.",
            "image 32.",
            "image 33."
        ]
    }
];

let projectFile = projectData[0].file;
let footerImageInfo = projectData[0].footer;
let imageCaptions = projectData[0].captions;

projectFour(projectFile, footerImageInfo, imageCaptions);

function pageReset(selector, i) {
    for (let j = 1; j < projectData.length + 1; j++) {
        document.querySelector(selector + j).classList.add("content--scan__nav__on");
    }
    document.querySelector(selector + (i + 1)).classList.remove("content--scan__nav__on");
    document.querySelector(".content--scan__footer").innerHTML = "";
    document.querySelector(".content--scan__image").src = "";

    document.querySelector(".content--scan__caption--folder").textContent = projectData[i].title;
    document.querySelector(".content--scan__caption--current").textContent = projectData[i].images + " images.";

    let projectFile = projectData[i].file;
    let footerImageInfo = projectData[i].footer;
    let imageCaptions = projectData[i].captions;

    projectFour(projectFile, footerImageInfo, imageCaptions);
}

const desktopNavSelector = ".content--scan__nav--";
const mobileNavSelector = ".content--scan__nav--mobile--";

for (let i = 0; i < projectData.length; i++) {
    document.querySelector(desktopNavSelector + (i + 1)).addEventListener("click", function(e) {
        e.preventDefault();

        pageReset(desktopNavSelector, i);
    });

    document.querySelector(mobileNavSelector + (i + 1)).addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();

        pageReset(mobileNavSelector, i);
    });
}

