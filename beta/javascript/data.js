// Data adapted from the planning document 

const triggersData = [
    {
        component: 'Thumbnail',
        content: ['Hover on', 'Hover off', 'Click']
    }, 
    {
        component: 'Background Image',
        content: ['Hover on', 'Hover off']
    }, 
    {
        component: 'Airline Info Collection',
        content: ['Hover on', 'Click', 'Hover off']
    }, 
    {
        component: 'Airline Link',
        content: ['Hover on', 'Hover off', 'Click']
    }
];

const rulesData = [
    {
        component: 'Thumbnail',
        content: [
            [
                'Hover On', 
                [
                    'The cursor changes to a pointer'
                ]
            ],
            [
                'Hover Off', 
                [
                    'The cursor changes to an arrow'
                ]
            ],
            [
                'Click', 
                [
                    'The clicked thumbnail slides to the center', 
                    'The background image fades to bright gray over 50ms, remains bright gray for 75ms, and then fades again to the image in the thumbnail over 50ms', 
                    'The location fades to align with the thunmbnail&#39;s content over 50ms'
                ]
            ]
        ]
    }, 
    {
        component: 'Background Image',
        content: [
            [
                'Hover On', 
                [
                    'Airline info collection slides in from the right over 125ms', 
                    'Price info section slides in from the left over 125ms'
                ]
            ],
            [
                'Hover Off', 
                [
                    'Airline info collection slides out to the right over 125ms', 
                    'Price info section slides out to the left over 125ms'
                ]
            ]
        ]
    }, 
    {
        component: 'Airline Info Collection',
        content: [
            [
                'Hover On', 
                [
                    'The cursor changes to a pointer', 
                    'The collection&#39;s background fades to a solid tint of blue from the half-opaque white over 125ms'
                ]
            ],
            [
                'Click', 
                [
                    'The cursor changes to an arrow', 
                    'The modal fades to the "click-into-collection" state over 125ms'
                ]
            ],
            [
                'Hover Off', 
                [
                    'Switch back to the "hover-over-background" state over 125ms'
                ]
            ]
        ]
    }, 
    {
        component: 'Airline Link',
        content: [
            [
                'Hover On', 
                [
                    'The cursor changes to a pointer'
                ]
            ],
            [
                'Hover Off', 
                [
                    'The cursor changes to an arrow'
                ]
            ],
            [
                'Click', 
                [
                    'The default browser opens the selected airline company&#39;s website homepage in a new tab', 
                    'After opening the airline website, fades to the "hover-over-background" state over 125ms'
                ]
            ]
        ]
    }
]

const modesData = [
    {
        component: 'Click-into-collection State',
        content: [
            'The location&#39;s background fades to 100% transparent', 
            'The collection&#39;s background fades to 100% transparent', 
            'The price&#39;s background fades to yellow', 
            'The airline information slides to the center', 
            'Text prompts fades in', 
            'Background image fades to a solid tint of blue'
        ]
    }, 
    {
        component: 'Hover-over-background State',
        content: [
            'Text prompts fades out', 
            'The airline links slides to the right', 
            'The collection&#39;s background fades to half-transparent white', 
            'The location&#39;s background fades to half-transparent white', 
            'The price&#39;s background fades to a light tint of blue', 
            'Background image fades from a solid tint of blue to the image in the active tumbnail'
        ]
    }
]
