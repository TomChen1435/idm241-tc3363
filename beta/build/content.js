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

const locationStringSet = [];

const bbCarousel = document.querySelector('#bb-carousel');
const bbBanner = document.querySelector('#bb-banner');
const bbLocation = document.querySelector('#bb-location');

function makeString(string) {
    const newString = string.toLocaleLowerCase().replace(/\s+/g, '_');
    return newString
}

function imgURLString(string) {
    const newString = `/media/images/avif/${string}.avif`;
    return newString
}

locationSet.forEach((location) => {
    const newImage = document.createElement('img');
    const locationString = makeString(location);
    locationStringSet.push(locationString);
    const imgURL = imgURLString(locationString);
    newImage.setAttribute('src', imgURL);
    newImage.setAttribute('alt', location);
    newImage.setAttribute('id', locationString);
    newImage.classList.add('thumbnail');
    bbCarousel.appendChild(newImage);
});

const idSelector = locationStringSet.map((locationString) => `#${locationString}`).join(', ');

bbCarousel.addEventListener('click', (event) => {
    const target = event.target.closest(idSelector);
    if (!target) return;

    const targetID = target.id;
    if (!targetID) return;

    const idSequence = locationStringSet.indexOf(targetID);

    bbBanner.setAttribute('src', imgURLString(locationStringSet[idSequence]));
    bbLocation.innerHTML = locationSet[idSequence];

    bbCarousel.style.left = `calc(16.5rem - 6rem * ${idSequence})`;
});

const bbHoverBoard = document.querySelector('#bb-hover-board')
const bbCollection = document.querySelector('#bb-collection');
const bbAFLink = document.querySelector('#bb-af-link');
const bbKLMLink = document.querySelector('#bb-klm-link');

bbCollection.addEventListener('click', () => {
    bbHoverBoard.classList.add('l2');
});

function rollBack () {
    bbHoverBoard.classList.remove('l2');
}

bbCollection.addEventListener('mouseleave', rollBack);
bbAFLink.addEventListener('click', rollBack);
bbKLMLink.addEventListener('click', rollBack);
