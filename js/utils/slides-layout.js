export function slidesLayout(numberOfSlides, selector, pageLayout) {
    for (let i = 1; i < numberOfSlides + 1; i++) {
        const slide = document.createElement("div");
        const previousSlide = document.createElement("a");
        const nextSlide = document.createElement("a");
        const j = i * 2 - 1;
        const k = i * 2;

        slide.classList.add("slide");
        slide.id = `slide-${i}`;

        previousSlide.classList.add("slide__button", "slide__button--prev");
        previousSlide.id = `prev-${i}`;

        if (i === 1) {
            previousSlide.href = `#slide-${numberOfSlides}`;
        } else {
            previousSlide.href = `#slide-${i - 1}`;
        }

        nextSlide.classList.add("slide__button", "slide__button--next");
        nextSlide.id = `next-${i}`;

        if (i === numberOfSlides) {
            nextSlide.href = "#slide-1";
        } else {
            nextSlide.href = `#slide-${i + 1}`;
        }

        slide.appendChild(previousSlide);
        slide.appendChild(nextSlide);

        pageLayout(previousSlide, j);
        pageLayout(nextSlide, k);

        document.querySelector(selector).appendChild(slide);
    }
}
