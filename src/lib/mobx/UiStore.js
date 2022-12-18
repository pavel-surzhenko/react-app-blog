import { makeAutoObservable } from 'mobx';

export class UiStore {
    message = ''

    constructor() {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
    }

    resetError() {
        this.message = '';
    }

    get errorMessage() {
        return this.message;
    }

    setError(newErrorMEssage) {
        this.message = newErrorMEssage;
    }
}
