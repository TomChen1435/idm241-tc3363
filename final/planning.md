# Final

## Triggers

- Thumbnail
    - Hover on
    - Hover off
    - Click
- Banner
    - Hover on
    - Hover off
- Airline Info Collection
    - Hover on
    - Hover off
    - Click
- Airline Link
    - Hover on
    - Hover off
    - Click
- Close Button
    - Hover on
    - Hover off
    - Click

## Rules & Feedbacks

- Thumbnail
    - Hover On
        - The cursor changes to a pointer
    - Hover Off
        - The cursor changes to an arrow
    - Click
        - The banner image fades to solid bright gray color over 250ms, and then fades to the image in the clicked thumbnail over 250ms
        - The location at the top left corner of the banner also changes over 500ms to align with the clicked thumbnail's content
        - The original thumbnail becomes 50% brighter, and the yellow outline fades out over 250ms
        - The clicked thumbnail becomes 50% darker and gets a yellow outline over 250ms
- Banner
    - Hover On
        - Airline info collection section slides in from the right over 250ms
        - Price section slides in from the left over 250ms
    - Hover Off
        - Airline info collection section slides out to the right over 250ms
        - Price section slides out to the left over 250ms
- Airline Info Collection
    - Hover On
        - The cursor changes to a pointer
        - The collection's background fades to a solid bright gray color over 250ms
    - Hover Off
        - The cursor changes to an arrow
        - The collection's background fades to a half-transparent white color over 250ms
    - Click
        - The banner fades to the "Level-2 Menu" mode over 500ms
- Airline Link
    - Hover On
        - The cursor changes to a pointer
    - Hover Off
        - The cursor changes to an arrow
    - Click
        - The default browser opens the selected airline company&#39;s website in a new tab
- Close Button
    - Hover On
        - The cursor changes to a pointer
    - Hover Off
        - The cursor changes to an arrow
    - Click
        - The banner fades to the "Level-1 Hover" mode over 500ms

## Loops

- None

## Modes

- Level-2 Menu
    - The collection section fades to 100% transparent over 250ms
    - The banner image fades to a solid bright gray color over 250ms
    - The location and price sections' backgrounds fade to 100% transparent over 250ms
    - Airline links fades in at the center of the banner over 250ms
    - The price section's background fades to yellow over 250ms
    - The close button fades in at the top right corner of the banner over 250ms
- Level-1 Hover
    - The close button, at the top right corner of the banner, fades out over 250ms
    - Airline links fades, at the center of the banner, fades out over 250ms
    - The price section's background fades to 100% transparent over 250ms
    - The location and price sections' backgrounds fade to a half-transparent white color over 250ms
    - The collection section and the banner image fade in over 250ms
