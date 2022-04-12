import { areaIndex, imageMapsLayout } from "./utils/dynamic-image-maps.js";

const footerImageInfo = [
    {
        number: 1,
        height: 711,
        width: 5074,
        areas: [
            [2905, 3633]
        ]
    },
    {
        number: 2,
        height: 711,
        width: 4361,
        areas: [
            [727, 1454],
            [2907, 3634]
        ]
    },
    {
        number: 3,
        height: 711,
        width: 4360,
        areas: [
            [724, 1452],
            [2180, 2911]
        ]
    },
    {
        number: 4,
        height: 711,
        width: 5074,
    },
];

const footerImageVhHeight = 12;

const imageCaptions = [
    "image 02. détail.",
    "image 06. détails.",
    "image 09. détails.",
    "image 12.",
    "image 14."
];

imageMapsLayout(footerImageInfo, footerImageVhHeight, imageCaptions);

const expandElements = [];

for (let i = 1; i < 5; i++) {
    expandElements.push(".content--scan__nav--mobile > li:nth-child(" + i + ") > ul");
}

for (let i = 0; i < 4; i++) {
    document.querySelector(".content--scan__nav--mobile > li:nth-child(" + (i + 1) + ")").addEventListener("click", function() {
        const ulElement = document.querySelector(expandElements[i]);

        if (ulElement.style.display === "none" || ulElement.style.display === "") {
            const closeElements = expandElements.filter(item => item !== expandElements[i]);
            for (let element of closeElements) {
                document.querySelector(element).style.display = "none"
            }
            ulElement.style.display = "block";
        } else {
            ulElement.style.display = "none";
        }
    });
}