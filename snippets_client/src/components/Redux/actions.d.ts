export declare const SET_AUTH_STATUS = "SET_AUTH_STATUS";
export declare const SET_CSRF_TOKEN = "SET_CSRF_TOKEN";
export declare const SET_NAME = "SET_NAME";
export declare const SET_USERID = "SET_USERID";
export declare const setAuthStatus: (status: boolean) => {
    type: string;
    payload: boolean;
};
export declare const setCsrfToken: (token: string) => {
    type: string;
    payload: string;
};
export declare const setUsername: (name: string) => {
    type: string;
    payload: string;
};
export declare const setUserID: (id: number) => {
    type: string;
    payload: number;
};
