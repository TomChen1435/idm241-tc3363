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
const fbDiv = document.querySelector('#fb');
const fbBanner = document.querySelector('#fb-banner > img');
const fbHoverBoard = document.querySelector('#fb-hover-board')
const fbLocation = document.querySelector('#fb-location');
const closeBtn = document.querySelector('#fb-close-btn');
const fbCollectionRt = document.querySelector('#fb-collection-right');
const fbCollectionCtr = document.querySelector('#fb-collection-center');
const fbAFLink = document.querySelector('#fb-af-link');
const fbKLLink = document.querySelector('#fb-kl-link');
const fbPrice = document.querySelector('#fb-price');

// Hover board actions

// Set up a global variable for storage
let fbHoverBoardWidths = {
    collection: 0,
    price: 0,
};

// Find the movable elements' widths
function l1ElementWidths() {
    // Get the elements' widths
    fbHoverBoardWidths.collection = fbCollectionRt.offsetWidth + 8;
    fbHoverBoardWidths.price = fbPrice.offsetWidth + 8;

    // Set original positions
    fbCollectionRt.style.right = `-${fbHoverBoardWidths.collection}px`;
    fbPrice.style.left = `-${fbHoverBoardWidths.price}px`;
};

l1ElementWidths();

// When resizing, update the widths
fbHoverBoard.addEventListener('resize', l1ElementWidths);

fbHoverBoard.addEventListener('mouseenter', () => {
    fbCollectionRt.style.transform = `translateX(-${fbHoverBoardWidths.collection}px)`;
    fbPrice.style.transform = `translateX(${fbHoverBoardWidths.price}px)`
});

fbHoverBoard.addEventListener('mouseleave', () => {
    fbCollectionRt.style.transform = `translateX(${fbHoverBoardWidths.collection}px)`;
    fbPrice.style.transform = `translateX(-${fbHoverBoardWidths.price}px)`
});

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
    newImage.style.gridArea = locationString;

    // Add thumbnails to the carousel section 
    fbDiv.appendChild(newImage);
});

// Initially selected thumbnail
const atlThumbnail = document.querySelector('#atlanta.thumbnail');
atlThumbnail.classList.add('selected');

// Rules for clicking the thumbnails 

// Compress the snake case location string array into a single string, with the items separated by commas, for later use 
const idSelectorSet = locationStringSet.map((locationString) => `#${locationString}`).join(', ');

// Instead of monitoring each thumbnail, monitor the parent element instead 

// "event" is a parameter that contains information about the clicking action 
fbDiv.addEventListener('click', (event) => {

    // "event.target" is what's actually clicked 
    // ".closest(selector)" walks along the DOM tree's flow and find the closest element that matches the selector, in this case, finding the closest one that's inside the selector set created earlier 

    const cTarget = event.target.closest(idSelectorSet);

    if (cTarget.classList.contains('thumbnail')) {
        // Fetch the clicked item's ID 
        const cTargetID = cTarget.id;

        // Find the sequence of the clicked thumbnail in the arrays 
        const idSequence = locationStringSet.indexOf(cTargetID);

        // Remove style from the current one
        document.querySelectorAll('.selected').forEach(element => {element.classList.remove('selected')});

        // Apply designs to the clicked thumbnail
        cTarget.classList.add('selected');

        // Change the background image and update the location text at the top left corner to align with the clicked thumbnail 

        // Make the elements transparent first 
        fbBanner.style.opacity = 0;
        fbLocation.style.opacity = 0;

        // Then update the elements before making them opaque again 
        fbLocation.addEventListener('transitionend', () => {
            fbBanner.setAttribute('src', imgURLString(locationStringSet[idSequence], 'avif'));
            fbLocation.innerHTML = locationSet[idSequence];
            fbBanner.style.opacity = 1;
            fbLocation.style.opacity = 1;
        });
    }

});

// Switching between "click-into-collection" (L2) state and normal state 

// Turn into a dedicated function because used repeatedly 
function rolling(direction) {
    if (direction === "remove") {
        fbCollectionCtr.style.opacity = 0;
        fbCollectionCtr.addEventListener('transitionend', () => {
            fbHoverBoard.classList.remove('l2');
            fbCollectionRt.style.opacity = 1;
        });
    } else if (direction === "add") {
        fbCollectionRt.style.opacity = 0;
        fbCollectionRt.addEventListener('transitionend', () => {
            fbHoverBoard.classList.add('l2');
            fbCollectionCtr.style.opacity = 1;
        });
    }     
}

// When clicking the background image, switch to L2 
fbCollectionRt.addEventListener('click', () => {rolling("add")});

// When no longer hovering above the collection section or after clicking the airline links, switch back to the "L1 hover" state 

closeBtn.addEventListener('click', () => {rolling("remove")});
fbAFLink.addEventListener('click', () => {rolling("remove")});
fbKLLink.addEventListener('click', () => {rolling("remove")});
