export const navigationItems = [
    {
        name: `home`,
        link: "/"
    },
    {
        name: `receive`,
        link: "/profile/:id/receive"
    },
    {
        name: `history`,
        link: "/profile/:id/history"
    }
]

export const AppRoute = {
    MAIN: `/`,
    SIGN_IN: `/sign-in`,
    SIGN_UP: `/sign-up`,
    PROFILE: `/profile/:id`,
    PROFILE_EDIT: `/profile/:id/edit`,
    ADD_CARD: `/profile/:id/card`,
    RECEIVE: `/profile/:id/receive`,
    WITHDRAW: `/profile/:id/withdraw`,
    HISTORY: `/profile/:id/history`,
};

export const VISUALLY_HIDDEN = `
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
`;

export const ActionType = {
    REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`
};

export const HttpCode = {
    UNAUTHORIZED: 401
};

export const AuthorizationStatus = {
    AUTH: true,
    NO_AUTH: false
};

export const ApiInformation = {
    BASE_URL: `https://heroku-hackathon.herokuapp.com/api`,
    TIMEOUT: 5000,
    WITH_CREDENTIALS: true
}

export const ApiRoutes = {
    CARDS: `/cards`,
    TIPS: `/tips`,
    LOGIN: `/user/login`,
    REGISTRATION: `/user/registration`,
    AUTH: `/user/auth`,
    USER: `/user`,
    CLIENT: `/client`,
};

export const NameSpace = {
    DATA: `DATA`,
    STATE: `STATE`,
    USER: `USER`
};