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
        - The banner image fades to solid bright gray color over 250ms&#44; and then fades to the image in the clicked thumbnail over 250ms
        - The location at the top left corner of the banner also changes over 500ms to align with the clicked thumbnail&#39;s content
        - The original thumbnail becomes 50&#37; brighter&#44; and the yellow outline fades out over 250ms as the image enlarges to take all available space of the grid cell
        - The clicked thumbnail becomes 50&#37; darker&#44; gets a yellow outline&#44; and shrinks a little to accomodate the added outline over 250ms
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
        - The collection&#39;s background fades to a solid bright gray color over 250ms
    - Hover Off
        - The cursor changes to an arrow
        - The collection&#39;s background fades to a half&#45;transparent white color over 250ms
    - Click
        - The banner fades to the &#34;Level&#45;2 Menu&#34; mode over 500ms
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
        - The banner fades to the &#34;Level&#45;1 Hover&#34; mode over 500ms

## Loops

- None

## Modes

- Level&#45;2 Menu
    - The collection section fades to 100&#37; transparent over 250ms
    - The banner image fades to a solid bright gray color over 250ms
    - The location and price sections&#39; backgrounds fade to 100&#37; transparent over 250ms
    - Airline links fades in at the center of the banner over 250ms
    - The price section&#39;s background fades to yellow over 250ms
    - The close button fades in at the top right corner of the banner over 250ms
- Level&#45;1 Hover
    - The close button&#44; at the top right corner of the banner&#44; fades out over 250ms
    - Airline links fades&#44; at the center of the banner&#44; fades out over 250ms
    - The price section&#39;s background fades to 100&#37; transparent over 250ms
    - The location and price sections&#39; backgrounds fade to a half&#45;transparent white color over 250ms
    - The collection section and the banner image fade in over 250ms
