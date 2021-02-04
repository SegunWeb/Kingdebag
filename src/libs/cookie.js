var config = {
    apiKey: 'df72c8236cf5f0729fc9bbbc067c4ba0b1e6508d',
    product: 'COMMUNITY',
    optionalCookies: [
        {
            name: 'analytics',
            label: 'Analytics',
            description: '',
            cookies: [],
            onAccept : function(){},
            onRevoke: function(){}
        },{
            name: 'marketing',
            label: 'Marketing',
            description: '',
            cookies: [],
            onAccept : function(){},
            onRevoke: function(){}
        },{
            name: 'preferences',
            label: 'Preferences',
            description: '',
            cookies: [],
            onAccept : function(){},
            onRevoke: function(){}
        }
    ],
    position: 'RIGHT',
    theme: 'DARK'
};
CookieControl.load( config ) ;