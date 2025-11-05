const locationSet = [
    "Atlanta", 
    "Boston", 
    "Los Angeles", 
    "Miami", 
    "New York", 
    "Phoenix", 
    "Portland", 
    "Raleigh-Durham", 
    "San Diego", 
    "San Francisco", 
    "Seattle", 
    "Washington DC"
];

// Use loop to create an array of snake case location strings 
const locationStringSet = [];

// Elements of the DOM tree 
const bbCarousel = document.querySelector('#bb-carousel');
const bbBanner = document.querySelector('#bb-banner');
const bbHoverBoard = document.querySelector('#bb-hover-board')
const bbLocation = document.querySelector('#bb-location');
const closeBtn = document.querySelector('#bb-close-btn');
const bbCollection = document.querySelector('#bb-collection');
const bbAFLink = document.querySelector('#bb-af-link');
const bbKLMLink = document.querySelector('#bb-klm-link');

// Turn locations into snake case, matching the id and file name styles 
function makeString(string) {
    const newString = string.toLocaleLowerCase().replace(/\s+/g, '_');
    return newString
}

// Create URLs for images with the snake case strings 
function imgURLString(string, imgType) {
    const newString = `/media/images/${imgType}/${string}.${imgType}`;
    return newString
}

// Loop through all location names 

locationSet.forEach((location) => {
    // Turn locations into snake case 
    const locationString = makeString(location);

    // Add the location strings into a dedicated array 
    locationStringSet.push(locationString);

    // Create URLs for .avif files 
    const imgURL = imgURLString(locationString, 'avif');

    // Create image elements for thumbnails 
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgURL);
    newImage.setAttribute('alt', location);
    newImage.setAttribute('id', locationString);
    newImage.classList.add('thumbnail');

    // Add thumbnails to the carousel section 
    bbCarousel.appendChild(newImage);
});

// Rules for clicking the thumbnails 

// Compress the snake case location string array into a single string, with the items separated by commas, for later use 
const idSelectorSet = locationStringSet.map((locationString) => `#${locationString}`).join(', ');

// Instead of monitoring each thumbnail, monitor the parent element instead 

// Create a modifiable variable for the currently active thumbnail's sequence 
let currentSequence = 0;

// "event" is a parameter that contains information about the clicking action 
bbCarousel.addEventListener('click', (event) => {

    // "event.target" is what's actually clicked 
    // ".closest(selector)" walks along the DOM tree's flow and find the closest element that matches the selector, in this case, finding the closest one that's inside the selector set created earlier 
    const cTarget = event.target.closest(idSelectorSet);

    // Fetch the clicked item's ID 
    const cTargetID = cTarget.id;

    // Find the sequence of the clicked thumbnail in the arrays and the displacement 
    const idSequence = locationStringSet.indexOf(cTargetID);
    const differenceSequence = idSequence - currentSequence;
    const xShift = -6 * differenceSequence;

    // Move the clicked thumbnail to the center 
    bbCarousel.style.transform = `translateX(${xShift}rem)`;

    // Change the background image and update the location text at the top left corner to align with the clicked thumbnail 

    // Make the elements transparent first 
    bbBanner.style.opacity = 0;
    bbLocation.style.opacity = 0;

    // Then update the elements before making them opaque again 
    setTimeout(() => {
        bbBanner.setAttribute('src', imgURLString(locationStringSet[idSequence], 'avif'));
        bbLocation.innerHTML = locationSet[idSequence];
        bbBanner.style.opacity = 1;
        bbLocation.style.opacity = 1;
    }, 250);

});

// Switching between "click-into-collection" (L2) state and normal state 

// Turn into a dedicated function because used repeatedly 
function rolling(direction) {
    bbCollection.style.opacity = 0;

    setTimeout(() => {
        if (direction === "remove") {
            bbHoverBoard.classList.remove('l2');
        } else if (direction === "add") {
            bbHoverBoard.classList.add('l2');
        } 

        bbCollection.style.opacity = 1;
    }, 250);
}

// When clicking the background image, switch to L2 
bbCollection.addEventListener('click', () => {rolling("add")});

// When no longer hovering above the collection section or after clicking the airline links, switch back to the "hover-over-background" state 

// bbCollection.addEventListener('mouseleave', () => {rolling("remove")});
closeBtn.addEventListener('click', () => {rolling("remove")});
bbAFLink.addEventListener('click', () => {rolling("remove")});
bbKLMLink.addEventListener('click', () => {rolling("remove")});
