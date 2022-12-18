import { makeAutoObservable } from 'mobx';

export class AuthStore {
    authToken = ''

    constructor() {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
    }

    setToken(newToken) {
        this.authToken = newToken;
    }

    get token() {
        return this.authToken;
    }
}
