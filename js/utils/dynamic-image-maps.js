export let areaIndex = 1;

export function imageMapsLayout(object, height, array) {

    for (let i = 0; i < object.length; i++) {

        const footerImage = document.createElement("img");
        footerImage.src = `/img/scan/1/negatives/${object[i].number}.jpg`;
        footerImage.style.height = `${height}vh`;

        if (object[i].hasOwnProperty("areas")) {

            footerImage.setAttribute("usemap", `#map-${object[i].number}`);

            const imageMap = document.createElement("map");
            imageMap.setAttribute("name", `map-${object[i].number}`)

            const coordinateArray = object[i].areas;
            const footerImageRatio = object[i].width / object[i].height;
            const footerImageVhWidth = height * footerImageRatio;
            const footerImagePxWidth = (footerImageVhWidth * innerHeight) / 100;

            for (let j = 0; j < coordinateArray.length; j++) {
                const leftCoordinateX = Math.floor((footerImagePxWidth * coordinateArray[j][0]) / object[i].width);
                const rightCoordinateX = Math.floor((footerImagePxWidth * coordinateArray[j][1]) / object[i].width);
                const footerImagePxHeight = (height * innerHeight) / 100;

                const imageArea = document.createElement("area");
                imageArea.setAttribute("shape", "rect");
                imageArea.setAttribute("coords", `${leftCoordinateX}, 0, ${rightCoordinateX}, ${footerImagePxHeight}`);
                imageArea.setAttribute("alt", "");
                imageArea.setAttribute("href", "#");
                imageArea.setAttribute("class", `area-${areaIndex}`)
                areaIndex++;

                imageMap.appendChild(imageArea);
            }
            document.querySelector(".content--scan__footer").appendChild(imageMap);
        }
        document.querySelector(".content--scan__footer").appendChild(footerImage);
    }

    for (let i = 0; i < array.length; i ++) {
        document.querySelector(`.area-${i + 1}`).addEventListener("click", function(e) {
            e.preventDefault();

            if (innerHeight < 500 || innerWidth < 500) {
                document.querySelector(".content--scan__image").src = `/img/scan/1/small/${i + 1}.jpg`;
            } else if (innerHeight < 900 || innerWidth < 1025) {
                document.querySelector(".content--scan__image").src = `/img/scan/1/medium/${i + 1}.jpg`;
            } else {
                document.querySelector(".content--scan__image").src = `/img/scan/1/large/${i + 1}.jpg`;
            }

            document.querySelector(".content--scan__caption--current").textContent = array[i];
        });
    }
}