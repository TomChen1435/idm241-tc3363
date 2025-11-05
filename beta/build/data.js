// Data adapted from the planning document 

const triggersData = [
    {
        component: 'Thumbnail',
        trigger: null, 
        content: ['Hover on', 'Hover off', 'Click']
    }, 
    {
        component: 'Background Image',
        trigger: null, 
        content: ['Hover on', 'Hover off']
    }, 
    {
        component: 'Close Button',
        trigger: null, 
        content: ['Hover on', 'Hover off', 'Click']
    }, 
    {
        component: 'Airline Info Collection',
        trigger: null, 
        content: ['Hover on', 'Hover off', 'Click']
    }, 
    {
        component: 'Airline Link',
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
            'The clicked thumbnail slides to the center over 250ms', 
            'The background image and location text fade to 100&#37; transparent over 250ms', 
            'The updated background image and location text fade in over 250ms, aligning with the thunmbnail&#39;s content'
        ]
    }, 
    {
        component: 'Background Image',
        trigger: 'Hover On', 
        content: [
            'Airline info collection slides in from the right over 250ms', 
            'Price info section slides in from the left over 250ms'
        ]
    }, 
    {
        component: 'Background Image',
        trigger: 'Hover Off', 
        content: [
            'Airline info collection slides out to the right over 250ms', 
            'Price info section slides out to the left over 250ms'
        ]
    }, 
    {
        component: 'Close Button',
        trigger: 'Hover On', 
        content: ['The cursor changes to a pointer']
    }, 
    {
        component: 'Close Button',
        trigger: 'Hover Off', 
        content: ['The cursor changes to an arrow']
    }, 
    {
        component: 'Close Button',
        trigger: 'Click', 
        content: [
            'The modal fades back to the &#34;hover&#45;over&#45;background&#34; state over 500ms'
        ]
    }, 
    {
        component: 'Airline Info Collection',
        trigger: 'Hover On', 
        content: [
            'The cursor changes to a pointer', 
            'The collection&#39;s background fades to a solid tint of blue from the half&#45;opaque white over 250ms'
        ]
    }, 
    {
        component: 'Airline Info Collection',
        trigger: 'Hover Off', 
        content: [
            'The cursor changes to an arrow', 
            'The collection&#39;s background fades to a solid tint of blue from the half&#45;opaque white over 250ms'
        ]
    }, 
    {
        component: 'Airline Info Collection',
        trigger: 'Click', 
        content: [
            'The cursor changes to an arrow', 
            'The modal fades to the &#34;click&#45;into&#45;collection&#34; state over 500ms'
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
            'The default browser opens the selected airline company&#39;s website homepage in a new tab', 
            'After opening the airline website, fades to the &#34;hover&#45;over&#45;background&#34; state over 250ms'
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
        trigger: 'Click&#45;into&#45;collection', 
        content: [
            'The location text&#39;s background fades to 100&#37; transparent', 
            'The close button fades in', 
            'The collection section fades to 100&#37; transparent', 
            'The price section&#39;s background fades to yellow', 
            'Text prompts and airline links fade in at the center', 
            'Background image fades to a solid tint of blue'
        ]
    }, 
    {
        component: 'Modal',
        trigger: 'Hover&#45;over&#45;background', 
        content: [
            'Text prompts, airline links, and the close button fade out', 
            'The collection section fades in on the right with a half&#45;transparent white background', 
            'The location text&#39;s background fades to half&#45;transparent white', 
            'The price section&#39;s background fades to a light tint of blue', 
            'Background image fades from a solid tint of blue to the image in the active tumbnail'
        ]
    }
]
