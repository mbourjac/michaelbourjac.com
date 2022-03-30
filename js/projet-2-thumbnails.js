for (let i = 1; i < 103; i++) {
    const img = document.createElement("img");
    img.src = `/img/sud/thumbnails/${i}.jpg`;
    img.addEventListener("click", function() {
        document.querySelector(".thumbnails__image").src = `/img/sud/nolayout/${i}.jpg`;
    });
    document.querySelector(".thumbnails__overview").appendChild(img);
}

const thumbnailsImage = document.querySelector(".thumbnails__image");

const switchOne = ["25", "25-2"];
const switchTwo = ["40", "40-2"];
const switchThree = ["79", "79-2", "79-3", "79-4", "79-5", "79-6", "79-7", "79-8", "79-9", "79-10", "79-11", "79-12", "79-13", "79-14", "79-15", "79-16"];

let index = 0;

function switchImage(array) {
    thumbnailsImage.addEventListener("click", function () {
        const regex = new RegExp("\/img\/sud\/nolayout\/" + array[0]);

        const source = thumbnailsImage.getAttribute('src');

        if (thumbnailsImage.getAttribute('src') === "/img/sud/nolayout/" + array[0] + ".jpg") {
            index = 0;
        }

        if (regex.test(source)) {
            if (index >= array.length - 1) {
                index = -1;
            }
            index++;
            thumbnailsImage.src = "/img/sud/nolayout/" + array[index] + ".jpg";
        }
    });
}

switchImage(switchOne);
switchImage(switchTwo);
switchImage(switchThree);