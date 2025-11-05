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
        component: 'Airline Info Collection',
        trigger: null, 
        content: ['Hover on', 'Click', 'Hover off']
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
            'The clicked thumbnail slides to the center  over 125ms', 
            'The background image fades to bright gray over 50ms, remains bright gray for 25ms, and then fades again to the image in the thumbnail over 50ms', 
            'The location fades to align with the thunmbnail&#39;s content over 125ms'
        ]
    }, 
    {
        component: 'Background Image',
        trigger: 'Hover On', 
        content: [
            'Airline info collection slides in from the right over 125ms', 
            'Price info section slides in from the left over 125ms'
        ]
    }, 
    {
        component: 'Background Image',
        trigger: 'Hover Off', 
        content: [
            'Airline info collection slides out to the right over 125ms', 
            'Price info section slides out to the left over 125ms'
        ]
    }, 
    {
        component: 'Airline Info Collection',
        trigger: 'Hover On', 
        content: [
            'The cursor changes to a pointer', 
            'The collection&#39;s background fades to a solid tint of blue from the half&#45;opaque white over 125ms'
        ]
    }, 
    {
        component: 'Airline Info Collection',
        trigger: 'Click', 
        content: [
            'The cursor changes to an arrow', 
            'The modal fades to the &#34;click&#45;into&#45;collection&#34; state over 125ms'
        ]
    }, 
    {
        component: 'Airline Info Collection',
        trigger: 'Hover Off', 
        content: [
            'Switch back to the &#34;hover&#45;over&#45;background&#34; state over 125ms'
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
            'After opening the airline website, fades to the &#34;hover&#45;over&#45;background&#34; state over 125ms'
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
            'The location&#39;s background fades to 100&#37; transparent', 
            'The collection&#39;s background fades to 100&#37; transparent', 
            'The price&#39;s background fades to yellow', 
            'The airline information slides to the center', 
            'Text prompts fade in', 
            'Background image fades to a solid tint of blue'
        ]
    }, 
    {
        component: 'Modal',
        trigger: 'Hover&#45;over&#45;background', 
        content: [
            'Text prompts fade out', 
            'The airline links slide to the right', 
            'The collection&#39;s background fades to half&#45;transparent white', 
            'The location&#39;s background fades to half&#45;transparent white', 
            'The price&#39;s background fades to a light tint of blue', 
            'Background image fades from a solid tint of blue to the image in the active tumbnail'
        ]
    }
]
