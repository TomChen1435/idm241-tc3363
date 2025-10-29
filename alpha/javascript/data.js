// Data adapted from the planning document 

const triggersData = [
    {
        component: 'Product Card',
        content: ['Hover on', 'Hover off']
    }
];

const rulesData = [
    {
        component: 'Product Card',
        content: [
            [
                'Hover On', 
                [
                    'The cursor changes to a pointer', 
                    'The image zooms in slightly', 
                    'All texts become underlined'
                ]
            ],
            [
                'Hover Off', 
                [
                    'The cursor changes to an arrow', 
                    'The image zooms out slightly', 
                    'All text decorations are removed'
                ]
            ]
        ]
    }
]
