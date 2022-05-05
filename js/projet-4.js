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

            if (innerWidth < 500 && array[i].length > 1) {
                document.querySelector(".content--scan__caption--current").textContent = array[i][1];
            } else {
                document.querySelector(".content--scan__caption--current").textContent = array[i][0];
            }

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
            ["image 02. détail — Bretagne, France."],
            ["image 06 — Bretagne, France."],
            ["image 09. détail — Bretagne, France."],
            ["image 12 — Bretagne, France."],
            ["image 14 — Bretagne, France."]
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
            ["image 04 — Cathédrale de Modène, Modène, Italie.", "image 04 — Modène, Italie."],
            ["image 06 — Piazza del Nettuno, Bologne, Italie.", "image 06 — Bologne, Italie."],
            ["image 12 — Piazza del Duomo, Florence, Italie.", "image 12 — Florence, Italie."],
            ["image 13 — Piazza del Duomo, Florence, Italie.", "image 13 — Florence, Italie."],
            ["image 15 — Florence, Italie."],
            ["image 18 — Piazza di San Lorenzo, Florence, Italie.", "image 18 — Florence, Italie."],
            ["image 20. détail — Italie."],
            ["image 29 — Assise, Italie."],
            ["image 32 — Piazza del Comune, Assise, Italie.", "image 32 — Assise, Italie."],
            ["image 35 — Assise, Italie."],
            ["image 37 — Assise, Italie."]
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
                maps: [1, 2, 5, 6, 7]
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
            ["image 03 — Amour et Psyché, Salle du Gladiateur, Palais Neuf, Rome, Italie.", "image 03 — Rome, Italie."],
            ["image 04. détail — Louve capitoline, Salle de la Louve, Palais des Conservateurs, Rome, Italie.", "image 04. détail — Rome, Italie."],
            ["image 06 — Marchés de Trajan, Rome, Italie.", "image 06 — Rome, Italie."],
            ["image 08 — Porticciolo di Santa Lucia, Naples, italie.", "image 08 — Naples, italie."],
            ["image 10. détail — Baie de Naples, Italie."],
            ["image 25 — Apollon Archer, Temple d'Apollon, Pompéi, Italie.", "image 25 — Pompéi, Italie."],
            ["image 31 — Faune Dansant, Maison du Faune, Pompéi, Italie.", "image 31 — Pompéi, Italie."],
            ["image 32 — Temple de Neptune, Paestum, Italie.", "image 32 — Paestum, Italie."],
            ["image 33 — Temple de Neptune, Paestum, Italie.", "image 33 — Paestum, Italie."],
            ["image 37 — Temple de Cérès, Paestum, Italie.", "image 37 — Paestum, Italie."]
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
                    [2178, 2904]
                ]
            }
        ],
        captions: [
            ["image 02."],
            ["image 03."],
            ["image 05."],
            ["image 06."],
            ["image 16."],
            ["image 24."],
            ["image 29."],
            ["image 30."],
            ["image 34."],
            ["image 37."]
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
            ["image 08."],
            ["image 10."],
            ["image 13."],
            ["image 14."],
            ["image 16."],
            ["image 17."],
            ["image 19."],
            ["image 25."],
            ["image 32 — Cape Point, Péninsule du Cap, Afrique du Sud.", "image 32 — Péninsule du Cap, Afrique du Sud."],
            ["image 35. détail — Cape Point, Péninsule du Cap, Afrique du Sud.", "image 35. détail — Péninsule du Cap, Afrique du Sud."],
            ["image 39 — Main Road, Péninsule du Cap, Afrique du Sud.", "image 39 — Péninsule du Cap, Afrique du Sud."]
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
            ["image 03 — Le Cap, Afrique du Sud."],
            ["image 06 — Heerengracht Street, Le Cap, Afrique du Sud.", "image 06 — Le Cap, Afrique du Sud."],
            ["image 07 — Heerengracht Street, Le Cap, Afrique du Sud.", "image 07 — Le Cap, Afrique du Sud."],
            ["image 11 — Rhodes Memorial, Devil's Peak, Le Cap, Afrique du Sud.", "image 11 — Le Cap, Afrique du Sud."],
            ["image 16 — Adderley Street, Le Cap, Afrique du Sud.", "image 16 — Le Cap, Afrique du Sud."],
            ["image 19 — Saunders Rock's Beach, Le Cap, Afrique du Sud.", "image 19 — Le Cap, Afrique du Sud."],
            ["images 24 & 25 — Montagne de la Table, Le Cap, Afrique du Sud.", "images 24 & 25 — Le Cap, Afrique du Sud."],
            ["images 30 & 31 — Montagne de la Table, Le Cap, Afrique du Sud.", "images 30 & 31 — Le Cap, Afrique du Sud."],
            ["image 38 — Montagne de la Table, Le Cap, Afrique du Sud.", "image 38 — Le Cap, Afrique du Sud."]
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
            ["image 02 — Port, Le Cap, Afrique du Sud.", "image 02 — Le Cap, Afrique du Sud."],
            ["image 07 — Afrique du Sud."],
            ["image 22 — Port, Port Elizabeth, Afrique du Sud.", "image 22 — Port Elizabeth, Afrique du Sud."],
            ["image 26 — The Union's Snake Park, Port Elizabeth, Afrique du Sud.", "image 26 — Port Elizabeth, Afrique du Sud."],
            ["image 28 — Afrique du Sud."],
            ["image 29 — Port, Port Elizabeth, Afrique du Sud.", "image 29 — Port Elizabeth, Afrique du Sud."],
            ["image 30 — Main Library, Port Elizabeth, Afrique du Sud.", "image 30 — Port Elizabeth, Afrique du Sud."],
            ["image 32 — Afrique du Sud."],
            ["image 33 — Afrique du Sud."]
        ]
    },
    {
        file: "8",
        title: "east london – durban – port – cannes à sucre",
        images: "38",
        footer: [
            {
                items: 7,
                height: 704,
                maps: [1, 2, 3, 4, 5, 6]
            },
            {
                number: 1,
                width: 4196,
                areas: [
                    [2742, 3468]
                ]
            },
            {
                number: 2,
                width: 4345,
                areas: [
                    [1, 723],
                    [3624, 4345]
                ]
            },
            {
                number: 3,
                width: 4334,
                areas: [
                    [2172, 2895],
                    [2896, 3619]
                ]
            },
            {
                number: 4,
                width: 4341,
                areas: [
                    [1446, 2168]
                ]
            },
            {
                number: 5,
                width: 4342,
                areas: [
                    [2174, 2896]
                ]
            },
            {
                number: 6,
                width: 4357,
                areas: [
                    [1453, 2178],
                    [2179, 2906]
                ]
            }
        ],
        captions: [
            ["image 03 — East London, Afrique du Sud."],
            ["image 05 — Afrique du Sud."],
            ["image 10 — Boatmans Road, Durban, Afrique du Sud.", "image 10 — Durban, Afrique du Sud."],
            ["image 14 — City Hall, Durban, Afrique du Sud.", "image 14 — Durban, Afrique du Sud."],
            ["image 15. détail — Florence Mkhize Building, Durban, Afrique du Sud.", "image 15. détail — Durban, Afrique du Sud."],
            ["image 19. détail — Bluff Whaling Station, Durban, Afrique du Sud.", "image 19. détail — Durban, Afrique du Sud."],
            ["image 26 — Afrique du Sud."],
            ["image 31 — Afrique du Sud."],
            ["image 32 — Afrique du Sud."]
        ]
    },
    {
        file: "9",
        title: "durban – marche indigène",
        images: "36",
        footer: [
            {
                items: 7,
                height: 697,
                maps: [1, 2, 4, 6, 7]
            },
            {
                number: 1,
                width: 4808,
                areas: [
                    [2639, 3357],
                    [4079, 4808]
                ]
            },
            {
                number: 2,
                width: 4354,
                areas: [
                    [723, 1447],
                    [1448, 2177]
                ]
            },
            {
                number: 4,
                width: 4349,
                areas: [
                    [731, 1454],
                    [3623, 4349]
                ]
            },
            {
                number: 6,
                width: 4361,
                areas: [
                    [1, 725],
                    [1452, 2183],
                    [2184, 2909]
                ]
            },
            {
                number: 7,
                width: 2084,
                areas: [
                    [724, 1442]
                ]
            }
        ],
        captions: [
            ["image 02 — Bertha Mkhize Street, Durban, Afrique du Sud.", "image 02 — Durban, Afrique du Sud."],
            ["image 04 — Durban, Afrique du Sud."],
            ["image 06 — Durban, Afrique du Sud."],
            ["image 07 — Durban, Afrique du Sud."],
            ["image 18 — Durban, Afrique du Sud."],
            ["image 22 — Temple Hindou, Cato Manor, Durban, Afrique du Sud.", "image 22 — Durban, Afrique du Sud."],
            ["image 29 — Village Zoulou, Vallée des Mille Collines, Afrique du Sud.", "image 29 — Village Zoulou, Afrique du Sud."],
            ["image 31 — Village Zoulou, Vallée des Mille Collines, Afrique du Sud.", "image 31 — Village Zoulou, Afrique du Sud."],
            ["image 32 — Village Zoulou, Vallée des Mille Collines, Afrique du Sud.", "image 32 — Village Zoulou, Afrique du Sud."],
            ["image 36 — Village Zoulou, Vallée des Mille Collines, Afrique du Sud.", "image 36 — Village Zoulou, Afrique du Sud."]
        ]
    },
    {
        file: "10",
        title: "ngomas danses",
        images: "38",
        footer: [
            {
                items: 7,
                height: 691,
                maps: [1, 2, 3, 4, 5, 6]
            },
            {
                number: 1,
                width: 4738,
                areas: [
                    [1844, 2669]
                ]
            },
            {
                number: 2,
                width: 4345,
                areas: [
                    [3619, 4345]
                ]
            },
            {
                number: 3,
                width: 4351,
                areas: [
                    [3626, 4351]
                ]
            },
            {
                number: 4,
                width: 4358,
                areas: [
                    [1, 721],
                    [722, 1449],
                    [1450, 2174],
                    [2175, 2898]
                ]
            },
            {
                number: 5,
                width: 4350,
                areas: [
                    [1, 721],
                    [1444, 2164],
                    [3621, 4350]
                ]
            },
            {
                number: 6,
                width: 4350,
                areas: [
                    [722, 1444]
                ]
            }
        ],
        captions: [
            ["image 02 — Kingsmead, Durban, Afrique du Sud.", "image 02 — Durban, Afrique du Sud."],
            ["image 11 — Kingsmead, Durban, Afrique du Sud.", "image 11 — Durban, Afrique du Sud."],
            ["image 17 — Kingsmead, Durban, Afrique du Sud.", "image 17 — Durban, Afrique du Sud."],
            ["image 18 — Kingsmead, Durban, Afrique du Sud.", "image 18 — Durban, Afrique du Sud."],
            ["image 19 — Post Office, Durban, Afrique du Sud.", "image 19 — Durban, Afrique du Sud."],
            ["image 20 — Samara Machel Street, Durban, Afrique du Sud.", "image 20 — Durban, Afrique du Sud."],
            ["image 21 — Durban, Afrique du Sud."],
            ["image 24 — Afrique du Sud."],
            ["image 26 — Howick Falls, Howick, Afrique du Sud.", "image 26 — Howick, Afrique du Sud."],
            ["image 29 — Afrique du Sud."],
            ["images 31 & 32 — Amphithéâtre, Drakensberg, Afrique du Sud.", "images 31 & 32 — Drakensberg, Afrique du Sud."]
        ]
    },
    {
        file: "11",
        title: "drakensberg",
        images: "38",
        footer: [
            {
                items: 7,
                height: 692,
                maps: [5, 6, 7]
            },
            {
                number: 5,
                width: 4344,
                areas: [
                    [728, 1450],
                    [2897, 3623],
                    [3624, 4344]
                ]
            },
            {
                number: 6,
                width: 4350,
                areas: [
                    [1, 724],
                    [2897, 3621]
                ]
            },
            {
                number: 7,
                width: 2312,
                areas: [
                    [724, 1449],
                    [1450, 2167]
                ]
            }
        ],
        captions: [
            ["image 25 — Afrique du Sud."],
            ["image 28 — Afrique du Sud."],
            ["image 29 — Afrique du Sud."],
            ["image 30 — Afrique du Sud."],
            ["image 34 — Afrique du Sud."],
            ["image 37 — Afrique du Sud."],
            ["image 38 — Afrique du Sud."]
        ]
    },
    {
        file: "12",
        title: "sur la route du kruger park",
        images: "39",
        footer: [
            {
                items: 7,
                height: 684,
                maps: [1, 2, 4, 5, 6]
            },
            {
                number: 1,
                width: 4654,
                areas: [
                    [3203, 3930],
                    [3931, 4654]
                ]
            },
            {
                number: 2,
                width: 4345,
                areas: [
                    [2894, 3616]
                ]
            },
            {
                number: 4,
                width: 4324,
                areas: [
                    [1, 728],
                    [2883, 3603]
                ]
            },
            {
                number: 5,
                width: 4316,
                areas: [
                    [1, 719],
                    [720, 1439]
                ]
            },
            {
                number: 6,
                width: 4316,
                areas: [
                    [2160, 2877]
                ]
            }
        ],
        captions: [
            ["image 04 — Afrique du Sud."],
            ["image 05 — Afrique du Sud."],
            ["image 10 — Kruger National Park, Afrique du Sud.", "image 10 — Afrique du Sud."],
            ["image 18 — Kruger National Park, Afrique du Sud.", "image 18 — Afrique du Sud."],
            ["image 22. détail — Kruger National Park, Afrique du Sud.", "image 22. détail — Afrique du Sud."],
            ["image 24. détail — Kruger National Park, Afrique du Sud.", "image 24. détail — Afrique du Sud."],
            ["image 25 — Kruger National Park, Afrique du Sud.", "image 25 — Afrique du Sud."],
            ["image 33 — Kruger National Park, Afrique du Sud.", "image 33 — Afrique du Sud."]
        ]
    },
    {
        file: "13",
        title: "kruger park – retour – danses des mines",
        images: "38",
        footer: [
            {
                items: 7,
                height: 686,
                maps: [4, 5, 6, 7]
            },
            {
                number: 4,
                width: 4354,
                areas: [
                    [725, 1451]
                ]
            },
            {
                number: 5,
                width: 4362,
                areas: [
                    [2180, 2908],
                    [2909, 3636]
                ]
            },
            {
                number: 6,
                width: 4366,
                areas: [
                    [2184, 2915],
                    [2916, 3641],
                    [3642, 4366]
                ]
            },
            {
                number: 7,
                width: 2354,
                areas: [
                    [1, 724],
                    [725, 1450],
                    [1451, 2172]
                ]
            }
        ],
        captions: [
            ["image 19 — Afrique du Sud."],
            ["image 27 — Union Buildings, Jardin Louis Botha, Pretoria, Afrique du Sud.", "image 27 — Pretoria, Afrique du Sud."],
            ["image 28 — Voortrekker Monument, Pretoria, Afrique du Sud.", "image 28 — Pretoria, Afrique du Sud."],
            ["image 33 — Afrique du Sud."],
            ["image 34 — Afrique du Sud."],
            ["image 35 — Afrique du Sud."],
            ["image 36. détail — Afrique du Sud."],
            ["image 37 — Afrique du Sud."],
            ["image 38. détail — Afrique du Sud."]
        ]
    },
    {
        file: "14",
        title: "johannesburg",
        images: "39",
        footer: [
            {
                items: 7,
                height: 687,
                maps: [1, 3, 4, 5, 6]
            },
            {
                number: 1,
                width: 4800,
                areas: [
                    [4069, 4800]
                ]
            },
            {
                number: 3,
                width: 4322,
                areas: [
                    [1, 722],
                    [2174, 2892]
                ]
            },
            {
                number: 4,
                width: 4349,
                areas: [
                    [1, 726],
                    [727, 1452]
                ]
            },
            {
                number: 5,
                width: 4350,
                areas: [
                    [720, 1446]
                ]
            },
            {
                number: 6,
                width: 4338,
                areas: [
                    [2170, 2893]
                ]
            }
        ],
        captions: [
            ["image 05 — Afrique du Sud."],
            ["image 12 — Anstey's Building, Johannesburg, Afrique du Sud.", "image 12 — Johannesburg, Afrique du Sud."],
            ["image 15. détail — Anstey's Building, Johannesburg, Afrique du Sud.", "image 15. détail — Afrique du Sud."],
            ["image 18."],
            ["image 19 — Entebbe, Ouganda."],
            ["image 25 — Aéroport, Khartoum, Soudan.", "image 25 — Khartoum, Soudan."],
            ["image 33 — Sphinx de Gizeh, Gizeh, Egypte.", "image 33 — Gizeh, Egypte."]
        ]
    },
    {
        file: "15",
        title: "le caire – malte – arrivée à luxembourg",
        images: "37",
        footer: [
            {
                items: 6,
                height: 693,
                maps: [1, 2, 3, 4, 5, 6]
            },
            {
                number: 1,
                width: 4345,
                areas: [
                    [733, 1455],
                    [1456, 2181]
                ]
            },
            {
                number: 2,
                width: 4354,
                areas: [
                    [1, 725]
                ]
            },
            {
                number: 3,
                width: 4349,
                areas: [
                    [2177, 2901],
                    [3629, 4349]
                ]
            },
            {
                number: 4,
                width: 4358,
                areas: [
                    [2175, 2902]
                ]
            },
            {
                number: 5,
                width: 4336,
                areas: [
                    [2173, 2891]
                ]
            },
            {
                number: 6,
                width: 4353,
                areas: [
                    [1451, 2172],
                    [3625, 4353]
                ]
            }
        ],
        captions: [
            ["image 02 — Sphinx de Gizeh, Gizeh, Egypte.", "image 02 — Gizeh, Egypte."],
            ["image 03 — Sphinx de Gizeh, Gizeh, Egypte.", "image 03 — Gizeh, Egypte."],
            ["image 07 — Le Caire, Egypte."],
            ["image 16 — La Valette, Malte."],
            ["image 18 — Pjazza tas-Sur, Mdina, Malte.", "image 18 — Mdina, Malte."],
            ["image 22."],
            ["image 28."],
            ["image 33."],
            ["image 36."]
        ]
    },
    {
        file: "16",
        title: "sibérie – japon – hakone",
        images: "22",
        footer: [
            {
                items: 4,
                height: 685,
                maps: [1, 2, 3, 4]
            },
            {
                number: 1,
                width: 4700,
                areas: [
                    [2521, 3248],
                ]
            },
            {
                number: 2,
                width: 4350,
                areas: [
                    [1, 728],
                    [729, 1459]
                ]
            },
            {
                number: 3,
                width: 4354,
                areas: [
                    [729, 1451],
                    [3631, 4354]
                ]
            },
            {
                number: 4,
                width: 4362,
                areas: [
                    [721, 1449],
                    [2170, 2894]
                ]
            }
        ],
        captions: [
            ["image 02 — Sibérie, Russie."],
            ["image 05 — Sibérie, Russie."],
            ["image 06. détail — Sibérie, Russie."],
            ["image 12."],
            ["image 16 — Kamakura Daibutsu, Kōtoku-in, Kamakura, Japon.", "image 16 — Kamakura, Japon."],
            ["image 18 — Kamakura, Japon."],
            ["image 20. détail — Japon."]
        ]
    },
    {
        file: "17",
        title: "kyoto – nara",
        images: "38",
        footer: [
            {
                items: 7,
                height: 691,
                maps: [2, 3, 4, 6, 7]
            },
            {
                number: 2,
                width: 4345,
                areas: [
                    [1448, 2172]
                ]
            },
            {
                number: 3,
                width: 4358,
                areas: [
                    [1452, 2180]
                ]
            },
            {
                number: 4,
                width: 4358,
                areas: [
                    [1, 727],
                    [3639, 4358]
                ]
            },
            {
                number: 6,
                width: 4362,
                areas: [
                    [1453, 2181],
                    [2907, 3634],
                    [3635, 4362]
                ]
            },
            {
                number: 7,
                width: 3675,
                areas: [
                    [1, 727]
                ]
            }
        ],
        captions: [
            ["image 07 — Japon."],
            ["image 13. détail — Japon."],
            ["image 17 — Japon."],
            ["image 22. détail — Kinkaku-ji, Kyoto, Japon.", "image 22. détail — Kyoto, Japon."],
            ["image 31 — Heian-jingū, Kyoto, Japon.", "image 31 — Kyoto, Japon."],
            ["image 33 — Japon."],
            ["image 34. détail — Chū-mon, Tōdai-ji, Nara, Japon.", "image 34. détail — Nara, Japon."],
            ["image 35 — Daibutsu-den, Tōdai-ji, Nara, Japon.", "image 35 — Nara, Japon."]
        ]
    },
    {
        file: "18",
        title: "kyoto – nara – hiroshima",
        images: "38",
        footer: [
            {
                items: 7,
                height: 692,
                maps: [1, 2, 3, 4, 5, 6]
            },
            {
                number: 1,
                width: 4862,
                areas: [
                    [1980, 2699]
                ]
            },
            {
                number: 2,
                width: 4341,
                areas: [
                    [725, 1451]
                ]
            },
            {
                number: 3,
                width: 4346,
                areas: [
                    [720, 1443],
                    [2892, 3621]
                ]
            },
            {
                number: 4,
                width: 4358,
                areas: [
                    [1448, 2178],
                    [2902, 3631],
                    [3632, 4358 ]
                ]
            },
            {
                number: 5,
                width: 4361,
                areas: [
                    [2187, 2918],
                    [2919, 3640]
                ]
            },
            {
                number: 6,
                width: 4375,
                areas: [
                    [727, 1459],
                    [1460, 2193],
                    [3651, 4375]
                ]
            }
        ],
        captions: [
            ["image 01 — Nara, Japon."],
            ["image 06 — Gojū-no-tō, Kōfuku-ji, Nara, Japon.", "image 06 — Nara, Japon."],
            ["image 12 — Hyakutai Jizo-Do, Kiyomizu-dera, Kyoto, Japon.", "image 12 — Kyoto, Japon."],
            ["image 15 — Komainu, Kiyomizu-dera, Kyoto, Japon.", "image 15 — Kyoto, Japon."],
            ["image 19 — Japon."],
            ["image 21 — Japon."],
            ["image 22 — Japon."],
            ["image 26 — Japon."],
            ["image 27 — Dôme de Genbaku, Hiroshima, Japon.", "image 27 — Hiroshima, Japon."],
            ["image 30 — Hiroshima, Japon."],
            ["image 31 — Japon."],
            ["image 34 — Itsukushima-jinja, Miyajima, Japon.", "image 34 — Miyajima, Japon."]
        ]
    },
    {
        file: "19",
        title: "takamatsu",
        images: "22",
        footer: [
            {
                items: 4,
                height: 686,
                maps: [1, 2, 3, 4]
            },
            {
                number: 1,
                width: 4403,
                areas: [
                    [100, 780],
                    [2224, 2953],
                    [2954, 3680],
                    [3681, 4403]
                ]
            },
            {
                number: 2,
                width: 4349,
                areas: [
                    [1, 723]
                ]
            },
            {
                number: 3,
                width: 4356,
                areas: [
                    [1453, 2184],
                    [2185, 2912]
                ]
            },
            {
                number: 4,
                width: 3361,
                areas: [
                    [1, 731],
                    [2184, 2907]
                ]
            }
        ],
        captions: [
            ["image 01 — Japon."],
            ["image 04 — Japon."],
            ["image 05 — Japon."],
            ["image 06 — Japon."],
            ["image 07 — Japon."],
            ["image 15 — Japon."],
            ["image 16 — Japon."],
            ["image 19 — Japon."],
            ["image 22 — Chutes de Kegon, Parc national de Nikkō, Japon.", "image 22 — Parc national de Nikkō, Japon."]
        ]
    },
    {
        file: "20",
        title: "nikko – départ",
        images: "22",
        footer: [
            {
                items: 4,
                height: 686,
                maps: [3, 4]
            },
            {
                number: 3,
                width: 4341,
                areas: [
                    [1443, 2170],
                    [2897, 3622],
                    [3623, 4341]
                ]
            },
            {
                number: 4,
                width: 4362,
                areas: [
                    [1, 716],
                    [1442, 2163],
                    [2885, 3607],
                    [3608, 4333]
                ]
            }
        ],
        captions: [
            ["image 13 — Japon."],
            ["image 15 — Japon."],
            ["image 16. détail — Japon."],
            ["image 17 — Japon."],
            ["image 19 — Japon."],
            ["image 21. détail — Japon."],
            ["image 22."]
        ]
    },
    {
        file: "21",
        title: "khabarovsk – moscou – berlin",
        images: "28",
        footer: [
            {
                items: 7,
                height: 690,
                maps: [2, 3, 4, 5, 7]
            },
            {
                number: 2,
                width: 4348,
                areas: [
                    [1449, 2178],
                    [2179, 2904],
                    [2905, 3625]
                ]
            },
            {
                number: 3,
                width: 4354,
                areas: [
                    [1, 726],
                    [727, 1446],
                    [2186, 2905],
                    [2906, 3628],
                    [3629, 4354]
                ]
            },
            {
                number: 4,
                width: 4341,
                areas: [
                    [1, 723],
                    [2173, 2898],
                    [2899, 3621]
                ]
            },
            {
                number: 5,
                width: 4345,
                areas: [
                    [3623, 4345]
                ]
            },
            {
                number: 7,
                width: 3973,
                areas: [
                    [725, 1449],
                    [1450, 2172]
                ]
            }
        ],
        captions: [
            ["image 06 — Russie."],
            ["image 07 — Russie."],
            ["image 08 — Muravyov Amursky Park, Khabarovsk, Russie.", "image 08 — Khabarovsk, Russie."],
            ["image 10 — Khabarovsk, Russie."],
            ["image 11. détail — Khabarovsk, Russie."],
            ["image 13 — Ivanovskaya Square, Kremlin, Moscou, Russie.", "image 13 — Moscou, Russie."],
            ["image 14 — Cathédrale de la Dormition, Kremlin, Moscou, Russie.", "image 14 — Moscou, Russie."],
            ["image 15 — Tsar Pouchka, Kremlin, Moscou, Russie.", "image 15 — Moscou, Russie."],
            ["image 16 — Russie."],
            ["image 19 — Place du Manège, Moscou, Russie.", "image 19 — Moscou, Russie."],
            ["image 20 — Église de l'Ascension, Kolomenskoye, Moscou, Russie.", "image 20 — Moscou, Russie."],
            ["image 27 — Church of the Kazan Icon of the Mother of God, Kolomenskoye, Moscou, Russie.", "image 27 — Moscou, Russie."],
            ["image 35 — Konzerthaus, Gendarmenmark, Berlin, Allemagne.", "image 35 — Berlin, Allemagne."],
            ["image 36 — Französischer Dom, Gendarmenmark, Berlin, Allemagne.", "image 36 — Berlin, Allemagne."]
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

