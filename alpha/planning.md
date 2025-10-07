# Alpha 

URL to the original interface (Web site, Application, Game etc) you wish to improve (If applicable)

[FlyingBlue](https://www.flyingblue.us/en/spend/flights/rewards)

Static images and/or animated gifs that help visualize how the existing "simple" microinteraction works. DO NOT use place holder images!

## Triggers 

Describe in detail what event(s) will start existing microinteraction.

- Hover over the background image;
- Click the background image;
- Click the thumbnails in the carousel.

## Feedback & Rules 

FEEDBACK - Describe in detail what the user will SEE, HEAR or FEEL.

### When hovering over the background image

- Flight availability panel slides in from the right;
- Price panel slides in from the left.

### When clicking the background image

- Opens the airline company's booking website in a new tab;
- The origin and destination automatically apply on the booking site;
- Automatically log into the member account on the booking site.

### When clicking the thumbnails in the carousel

- The clicked thumbnail shifts to the center;
- The opacity of all other components goes down to 0;
- The background image changes to the one in the centered thumbnail;
- Location information updates immediately.

## Other Rules

RULES - Describe in detail all of the rules in existing microinteraction (1-2).

- When clicking the thumbnails in the carousel, light availability and price information updates in the background.

## Loops

LOOPS & MODES - Describe in detail meta-rules of existing microinteraction (repeating objects, additional modules, changes to the microinteraction if conditions change, etc).

- Even if the user takes no action, the carousel will roll as an infinite loop of 12 thunmbnails with a fixed interval.

## Modes 

- According to the price information, the panel may switch prompts among "Ecomony Seats," "Premium Seats," and "Business Seats."
