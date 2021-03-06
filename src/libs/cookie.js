/*function RevokeFunctionalityCookieAccess() {
    functionalityCookieAccepted = false;
    AttachPageRefreshToClose();
}


function AttachPageRefreshToClose() {
    $('#ccc-close, #ccc-dismiss-button').click(function () {
        setTimeout(function () {
            location.reload()
        }, 1000);
    });
}


function RevokePersonalisationCookieAccess() {
    personalisationCookieAccepted = false;
    AttachPageRefreshToClose();
}


function RevokeAnalyticalCookieAccess() {
    analyticsCookieAccepted = false;
    googleAnalyticsDisabled = true;
    AttachPageRefreshToClose();
}


function AllowFunctionalityCookieAccess() {
    functionalityCookieAccepted = true;
}


function AllowPersonalisationCookieAccess() {
    personalisationCookieAccepted = true;
}


function AllowAnalyticalCookieAccess() {
    analyticsCookieAccepted = true;
    googleAnalyticsDisabled = false;
}*/


var config = {
    apiKey: '78c77504ffd41df0b4a66e0ac790a4acd3724d55',
    product: 'PRO',
    initialState: 'NOTIFY',
    settingsStyle: 'button',
    closeStyle: 'button',
    setInnerHTML: true,
    text: {
        title: 'This site uses cookies',
        intro: 'We use cookies on our website www.kingspan.com. Some of these cookies are essential while others help us to improve our website and personalise your experience.',
        closeLabel: 'Save Settings',
        necessaryTitle: 'Strictly Necessary Cookies',
        necessaryDescription: 'Strictly Necessary Cookies are used for website security and enabling our website to function. The website cannot function properly without these cookies. If you continue using this website, you consent to the use of these cookies.',
        acceptRecommended: 'Accept Recommended Settings',
        on: 'on',
        off: 'off',

        notifyTitle: '',
        notifyDescription: 'We use cookies on our website www.kingspan.com. Some of these cookies are essential while others help us to improve our website and personalise your experience. Please note, that if you do not accept functional and analytical cookies, some parts of our site may not work. For more information about the cookies we use please view our <a href="https://www.kingspan.com/irl/en-ie/cookie-policy-control">Cookie Policy & Control page</a>. The Cookie Policy & Control and Website Privacy Notice was updated on 16 February 2021.',
        accept: 'Accept',
        reject: 'Ní Glacaim',
        rejectSettings: 'Ní Glacaim',
        settings: 'Settings',

        thirdPartyTitle: 'Warning: Some cookies require your attention',
        thirdPartyDescription: 'Third party cookies may place some cookies on their domain. Consent for these cannot be automatically revoked. Please follow the links below if you want to opt out of them.'
    },
    statement: {
        description: 'For more information about the cookies we use please view our',
        name: 'Cookie Policy & Control page.',
        url: 'https://www.kingspan.com/irl/en-ie/cookie-policy-control',
        updated: '19/12/2018'
    },
    necessaryCookies: ['CMSCookieLevel', 'ASP.NET_SessionId', 'CMSCsrfCookie', 'CookieControl', '__cfduid', 'ks_cp_accept', '.ASPXFORMSAUTH', 'CMSPreferredCulture', 'CMSPreferredUICulture'],
    optionalCookies: [

        {
            name: 'FunctionalityCookies',
            label: 'Functionality Cookies',
            description: 'Functionality Cookies enable services on this website that help the website to function or make your experience easier.',
            cookies: [],
            recommendedState: true,
            lawfulBasis: 'legitimate interest',
            thirdPartyCookies: [{name: 'Disqus', optOutLink: 'https://disqus.com/data-sharing-settings/'},
                {name: 'Google Maps', optOutLink: 'https://policies.google.com/technologies/types'},
                {name: 'Netop Live Guide', optOutLink: 'https://www.netop.com/data-policies/cookies.htm'},
                {name: 'Podbean', optOutLink: 'https://www.podbean.com/privacy'},
                {name: 'Sketchfab', optOutLink: 'https://sketchfab.com/privacy'},
                {name: 'Vimeo', optOutLink: 'https://vimeo.com/cookie_policy'},
                {name: 'You Tube ', optOutLink: 'https://policies.google.com/technologies/types'}],
            onAccept: function () {
                // AllowFunctionalityCookieAccess();
            },
            onRevoke: function () {
                // RevokeFunctionalityCookieAccess();
                var existingCookies = [];
                existingCookies.forEach(function (cookie) {
                    CookieControl.delete(cookie);
                });
            }
        }


        ,
        {
            name: 'AnalyticalCookies',
            label: 'Analytical Cookies',
            description: 'Analytical Cookies are used to improve our website by measuring your interactions with the site.',
            cookies: ['VisitorStatus', 'Campaign', 'TrackedCampaigns', 'UrlReferrer', 'CurrentContact', 'CMSAB*', 'CMSMVT*', 'CMSNoTestMVT*', 'CMSBodyClass', '_ga', '_gid', '_hjid', '_hjIncludedInSample', '_gat', '__utma', '__utmt', '__utmb', '__utmc', '__utmz', '__utmv', 'QSI_HistorySession'],
            recommendedState: true,
            lawfulBasis: 'consent',
            thirdPartyCookies: [{name: 'BIMStore', optOutLink: 'https://www.bimstore.co/privacy-policy'},
                {name: 'NSD National Bim Library', optOutLink: 'https://www.nationalbimlibrary.com/en-gb/cookies/'},
                {name: 'Podbean', optOutLink: 'https://www.podbean.com/privacy'},
                {name: 'Sketchfab', optOutLink: 'https://sketchfab.com/privacy'},
                {name: 'Vimeo', optOutLink: 'https://vimeo.com/cookie_policy'},
                {name: 'You Tube ', optOutLink: 'https://policies.google.com/technologies/types'}],
            onAccept: function () {
                // AllowAnalyticalCookieAccess();
            },
            onRevoke: function () {
                // RevokeAnalyticalCookieAccess();
                window['ga-disable-GTM-WTRM3RH'] = true;
                window['ga-disable-GTM-M7F6CW5'] = true;
                var existingCookies = ['VisitorStatus', 'Campaign', 'TrackedCampaigns', 'UrlReferrer', 'CurrentContact', 'CMSAB*', 'CMSMVT*', 'CMSNoTestMVT*', 'CMSBodyClass', '_ga', '_gid', '_hjid', '_hjIncludedInSample', '_gat', '__utma', '__utmt', '__utmb', '__utmc', '__utmz', '__utmv', 'QSI_HistorySession'];
                existingCookies.forEach(function (cookie) {
                    CookieControl.delete(cookie);
                });
            }
        },
        {
            name: 'PersonalisationCookies',
            label: 'Personalisation Cookies (Analytical)',
            description: 'Personalisation Cookies (Analytical) are used to create personalised experiences and to deliver personalised offers to you based on your site interactions.',
            cookies: [],
            recommendedState: true,
            lawfulBasis: 'consent',

            onAccept: function () {
                // AllowPersonalisationCookieAccess();
            },
            onRevoke: function () {
                // RevokePersonalisationCookieAccess();
                var existingCookies = [];
                existingCookies.forEach(function (cookie) {
                    CookieControl.delete(cookie);
                });
            }
        }

    ],
    position: 'left',
    theme: 'DARK',
    branding: {
        fontColor: '#ffffff',
        backgroundColor: '#3a3a3a',
        acceptBackground: '#ffffff',
        toggleText: '#3a3a3a',
        toggleColor: '#3a3a3a',
        toggleBackground: '#ffffff',
        acceptText: '#3a3a3a',
        removeIcon: true,
        removeAbout: true
    }
};

CookieControl.load(config);
