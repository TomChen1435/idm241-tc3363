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

// "event" is a parameter that contains information about the clicking action 
bbCarousel.addEventListener('click', (event) => {

    // "event.target" is what's actually clicked 
    // ".closest(selector)" walks along the DOM tree's flow and find the closest element that matches the selector, in this case, finding the closest one that's inside the selector set created earlier 
    const cTarget = event.target.closest(idSelectorSet);

    // Fetch the clicked item's ID 
    const cTargetID = cTarget.id;

    // Find the sequence of the clicked thumbnail in the arrays 
    const idSequence = locationStringSet.indexOf(cTargetID);

    // Change the background image to align with the clicked thumbnail 
    bbBanner.setAttribute('src', imgURLString(locationStringSet[idSequence], 'avif'));

    // Update the location text at the top left corner to align with the clicked thumbnail 
    bbLocation.innerHTML = locationSet[idSequence];

    // Move the clicked thumbnail to the center 
    bbCarousel.style.left = `calc(16.5rem - 6rem * ${idSequence})`;
});

// Switching between "click-into-collection" (L2) state and normal state 

// When clicking the background image, switch to L2 
bbCollection.addEventListener('click', () => {
    bbHoverBoard.classList.add('l2');
});

// When no longer hovering above the collection section or after clicking the airline links, switch back to the "hover-over-background" state 

// Turn into a dedicated function because used repeatedly 
function rollBack () {
    bbHoverBoard.classList.remove('l2');
}

bbCollection.addEventListener('mouseleave', rollBack);
bbAFLink.addEventListener('click', rollBack);
bbKLMLink.addEventListener('click', rollBack);
