# Beta

## Triggers 

- Thumbnail
    - Hover on
    - Hover off
    - Click
- Background image
    - Hover on
    - Hover off
- Airline info collection
    - Hover on
    - Click
    - Hover off
- Airline info
    - Hover on
    - Hover off
    - Click

## Rules & Feedbacks 

- Thumbnail
    - Hover on
        - The cursor changes to a pointer
    - Hover off
        - The cursor changes to an arrow
    - Click
        - The clicked thumbnail move to the center
        - All other thumbnails move accordingly
        - The background image changes to bright gray for a brief moment, and then again to the image in the thumbnail
        - The location changes to align with the thunmbnail's content
- Background image
    - Hover on
        - Airline info collection and price info sections slide in from the sides
    - Hover off
        - Airline info collection and price info sections slide out towards the sides
- Airline info collection
    - Hover on
        - The cursor changes to a pointer
        - The collection's background changes to a solid tint of blue from the half-opaque white
    - Click
        - The cursor changes to an arrow
        - The location's background is removed
        - The collection's background is removed
        - The price's background becomes yellow
        - The airline information slides to the center
        - Text prompts appears
        - Background image changes to a solid tint of blue
    - Hover off
        - Switch back to the "hover on the background image" state
- Airline info
    - Hover on
        - The cursor changes to a pointer
    - Hover off
        - The cursor changes to an arrow
    - Click
        - The default browser opens the selected airline company's website homepage in a new tab
        - After opening the airline website, switch back to the "hover on the background image" state

## Loops & Modes 

- None
