declare const store: import("redux").Store<{
    authStatus: any;
    csrfToken: any;
    name: string;
    userID: string;
} | {
    name: any;
    authStatus: string | boolean;
    csrfToken: any;
    userID: string;
}, any, unknown>;
export default store;
