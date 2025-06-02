const menuOpenIcon = document.querySelector("img[alt='hamburger-menu icon']");
const menuCloseIcon = document.querySelector("img[alt='menu-close icon']");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileOverlay = document.querySelector(".mobile-overlay");
const mobileHeader = document.querySelector(".mobile-header");
const [mobilePreviousButton, mobileNextButton] = Array.from(
    document.querySelectorAll(".mobile-header .angle__container > *")
);
const [desktopPreviousButton, desktopNextButton] = Array.from(
    document.querySelectorAll(".container__component .angle__container > *")
);
const heroBackground = document.querySelector(".container__component");
const titleHeading = document.querySelector(".container__component > h1");
const titleContent = document.querySelector(".container__component > p");
const shopButton = document.querySelector("span");
const arrowIcon = document.querySelector("img[alt='arrow icon']");

let contentIndex = 0;

// This array-object holds the source mobile images used by the "photoPicker" function.
const mobilePhotosArray = [
    "images/mobile-image-hero-1.jpg",
    "images/mobile-image-hero-2.jpg",
    "images/mobile-image-hero-3.jpg"
];

// This array-object holds the source desktop images used by the "photoPicker" function.
const desktopPhotosArray = [
    "images/desktop-image-hero-1.jpg",
    "images/desktop-image-hero-2.jpg",
    "images/desktop-image-hero-3.jpg"
];

// This array-object holds the main title headings used by the "photoPicker" function.
const headingsArray = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials"
];

// This array-object holds the main paragraph texts used by the "photoPicker" function.
const textContentArray = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
];

const backgroundChanger = () => {
    contentIndex++;
    if (contentIndex > 2) contentIndex = 0;
    if (window.innerWidth < 1150) {
        mobileHeader.style.backgroundImage = `url(${mobilePhotosArray[contentIndex]})`;
        titleHeading.textContent = headingsArray[contentIndex];
        titleContent.textContent = textContentArray[contentIndex];
    } else {
        heroBackground.style.backgroundImage = `url(${desktopPhotosArray[contentIndex]})`;
        titleHeading.textContent = headingsArray[contentIndex];
        titleContent.textContent = textContentArray[contentIndex];
    }
};

// This function uses the arrow buttons to switch the main background images on both the mobile and desktop display.
const photoPicker = (button, display) => {
    if (display == "mobile") {
        if (button == "next") {
            contentIndex++;
            if (contentIndex > mobilePhotosArray.length - 1) contentIndex = 0;
            mobileHeader.style.backgroundImage = `url(${mobilePhotosArray[contentIndex]})`;
            titleHeading.textContent = headingsArray[contentIndex];
            titleContent.textContent = textContentArray[contentIndex];
        } else if (button == "previous") {
            contentIndex--;
            if (contentIndex < 0) contentIndex = mobilePhotosArray.length - 1;
            mobileHeader.style.backgroundImage = `url(${mobilePhotosArray[contentIndex]})`;
            titleHeading.textContent = headingsArray[contentIndex];
            titleContent.textContent = textContentArray[contentIndex];
        }
    } else if (display == "desktop") {
        if (button == "next") {
            contentIndex++;
            if (contentIndex > desktopPhotosArray.length - 1) contentIndex = 0;
            heroBackground.style.backgroundImage = `url(${desktopPhotosArray[contentIndex]})`;
            titleHeading.textContent = headingsArray[contentIndex];
            titleContent.textContent = textContentArray[contentIndex];
        } else if (button == "previous") {
            contentIndex--;
            if (contentIndex < 0) contentIndex = desktopPhotosArray.length - 1;
            heroBackground.style.backgroundImage = `url(${desktopPhotosArray[contentIndex]})`;
            titleHeading.textContent = headingsArray[contentIndex];
            titleContent.textContent = textContentArray[contentIndex];
        }
    }
};

// This function opens the mobile navigation menu.
const openMenu = () => {
    mobileOverlay.style.display = "block";
    mobileMenu.style.display = "flex";
};

// This function closes the mobile navigation menu.
const closeMenu = () => {
    mobileOverlay.style.display = "none";
    mobileMenu.style.display = "none";
};

// This function highlights the "SHOP NOW" button when the mouse is over it.
const shopMouseOver = (e) => {
    e.currentTarget.style.cursor = "pointer";
    e.currentTarget.style.color = "hsl(0, 0%, 63%)";
    arrowIcon.src = "images/icon-arrow-hover.svg";
};

// This function unhighlights the "SHOP NOW" button when the mouse is out of it.
const shopMouseOut = (e) => {
    e.currentTarget.style.cursor = "default";
    e.currentTarget.style.color = "hsl(0, 0%, 0%)";
    arrowIcon.src = "images/icon-arrow.svg";
};

/* Event Listeners */

menuOpenIcon.addEventListener("click", openMenu);

menuCloseIcon.addEventListener("click", closeMenu);

mobilePreviousButton.addEventListener("click", () => photoPicker("previous", "mobile"));

mobileNextButton.addEventListener("click", () => photoPicker("next", "mobile"));

desktopPreviousButton.addEventListener("click", () => photoPicker("previous", "desktop"));

desktopNextButton.addEventListener("click", () => photoPicker("next", "desktop"));

shopButton.addEventListener("mouseover", shopMouseOver);

shopButton.addEventListener("mouseout", shopMouseOut);

document.addEventListener("DOMContentLoaded", () => setInterval(backgroundChanger, 5000));
