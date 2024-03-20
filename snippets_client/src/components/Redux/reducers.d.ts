declare const rootReducer: (state: {
    authStatus: string | boolean;
    csrfToken: any;
    name: string;
    userID: string;
}, action: any) => {
    authStatus: any;
    csrfToken: any;
    name: string;
    userID: string;
} | {
    name: any;
    authStatus: string | boolean;
    csrfToken: any;
    userID: string;
};
export default rootReducer;
