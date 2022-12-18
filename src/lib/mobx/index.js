import { makeAutoObservable } from 'mobx';
import { AuthStore } from './authStore';
import { CommentsFormStore } from './CommentsFormStore';
import { UiStore } from './UiStore';

export class RootStore {
    commentsFormStore = null;
    authStore = null;
    uiStore = null;

    constructor() {
        makeAutoObservable(this);
        this.commentsFormStore = new CommentsFormStore(this);
        this.authStore = new AuthStore(this);
        this.uiStore = new UiStore(this);
    }
}
