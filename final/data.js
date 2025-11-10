// Data adapted from the planning document 

const triggersData = [
    {
        component: 'Thumbnail',
        trigger: null, 
        content: ['Hover on', 'Hover off', 'Click']
    }, 
    {
        component: 'Banner',
        trigger: null, 
        content: ['Hover on', 'Hover off']
    }, 
    {
        component: 'Airline Info Collection',
        trigger: null, 
        content: ['Hover on', 'Click', 'Hover off']
    }, 
    {
        component: 'Airline Link',
        trigger: null, 
        content: ['Hover on', 'Hover off', 'Click']
    },
    {
        component: 'Close Button',
        trigger: null, 
        content: ['Hover on', 'Hover off', 'Click']
    }
];

const rfData = [
    {
        component: 'Thumbnail',
        trigger: 'Hover On', 
        content: ['The cursor changes to a pointer']
    }, 
    {
        component: 'Thumbnail',
        trigger: 'Hover Off', 
        content: ['The cursor changes to an arrow']
    }, 
    {
        component: 'Thumbnail',
        trigger: 'Click', 
        content: [
            'The banner image fades to solid bright gray color over 250ms&#44; and then fades to the image in the clicked thumbnail over 250ms',
            'The location at the top left corner of the banner also changes over 500ms to align with the clicked thumbnail&#39;s content',
            'The original thumbnail becomes 50&#37; brighter&#44; and the yellow outline fades out over 250ms',
            'The clicked thumbnail becomes 50&#37; darker and gets a yellow outline over 250ms'
        ]
    }, 
    {
        component: 'Banner',
        trigger: 'Hover On', 
        content: [
            'Airline info collection section slides in from the right over 250ms',
            'Price section slides in from the left over 250ms'
        ]
    }, 
    {
        component: 'Banner',
        trigger: 'Hover Off', 
        content: [
            'Airline info collection section slides out to the right over 250ms', 
            'Price section slides out to the left over 250ms'
        ]
    }, 
    {
        component: 'Airline Info Collection',
        trigger: 'Hover On', 
        content: [
            'The cursor changes to a pointer', 
            'The collection&#39;s background fades to a solid bright gray color over 250ms'
        ]
    }, 
    {
        component: 'Airline Info Collection',
        trigger: 'Hover Off', 
        content: [
            'The cursor changes to an arrow', 
            'The collection&#39;s background fades to a half&#45;transparent white color over 250ms'
        ]
    }, 
    {
        component: 'Airline Info Collection',
        trigger: 'Click', 
        content: [
            'The banner fades to the &#34;Level&#45;2 Menu&#34; mode over 500ms'
        ]
    }, 
    {
        component: 'Airline Link',
        trigger: 'Hover On', 
        content: ['The cursor changes to a pointer']
    }, 
    {
        component: 'Airline Link',
        trigger: 'Hover Off', 
        content: ['The cursor changes to an arrow']
    }, 
    {
        component: 'Airline Link',
        trigger: 'Click', 
        content: [
            'The default browser opens the selected airline company&#39;s website in a new tab'
        ]
    }
];

const loopsData = [
    {
        component: 'Modal',
        trigger: null, 
        content: ['None']
    }
];

const modesData = [
    {
        component: 'Modal',
        trigger: 'Level&#45;2 Menu', 
        content: [
            'The collection section fades to 100&#37; transparent over 250ms',
            'The banner image fades to a solid bright gray color over 250ms',
            'The location and price sections&#39; backgrounds fade to 100&#37; transparent over 250ms',
            'Airline links fades in at the center of the banner over 250ms',
            'The price section&#39;s background fades to yellow over 250ms',
            'The close button fades in at the top right corner of the banner over 250ms'
        ]
    }, 
    {
        component: 'Modal',
        trigger: 'Level&#45;1 Hover', 
        content: [
            'The close button&#44; at the top right corner of the banner&#44; fades out over 250ms',
            'Airline links fades&#44; at the center of the banner&#44; fades out over 250ms',
            'The price section&#39;s background fades to 100&#37; transparent over 250ms',
            'The location and price sections&#39; backgrounds fade to a half&#45;transparent white color over 250ms',
            'The collection section and the banner image fade in over 250ms'
        ]
    }
]
