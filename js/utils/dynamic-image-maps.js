export function dynamicImageMaps(image, index, dataArray, viewportHeight, selector) {
    image.setAttribute("usemap", `#map-${index}`);

    const imageMap = document.createElement("map");
    imageMap.setAttribute("name", `map-${index}`)

    const imageInfo = dataArray.find(element => element.number === index);

    const coordinateArray = imageInfo.areas;
    const imageRatio = imageInfo.width / dataArray[0].height;
    const imageVhWidth = viewportHeight * imageRatio;
    const imagePxWidth = (imageVhWidth * innerHeight) / 100;

    for (let j = 0; j < coordinateArray.length; j++) {
        const leftCoordinateX = Math.floor((imagePxWidth * coordinateArray[j][0]) / imageInfo.width);
        const rightCoordinateX = Math.floor((imagePxWidth * coordinateArray[j][1]) / imageInfo.width);
        const imagePxHeight = (viewportHeight * innerHeight) / 100;

        const imageArea = document.createElement("area");
        imageArea.setAttribute("shape", "rect");
        imageArea.setAttribute("coords", `${leftCoordinateX}, 0, ${rightCoordinateX}, ${imagePxHeight}`);
        imageArea.setAttribute("alt", "");
        imageArea.setAttribute("href", "#");

        imageMap.appendChild(imageArea);
    }

    document.querySelector(selector).appendChild(imageMap);

    let areas = document.querySelectorAll("area");
    for (let i = 0; i < areas.length; i++) {
        areas[i].setAttribute("class", `area-${i + 1}`);
    }
}

