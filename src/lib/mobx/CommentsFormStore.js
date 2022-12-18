import { makeAutoObservable } from 'mobx';

export class CommentsFormStore {
    constructor() {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
    }

    id = '';


    setSelectedComment(hash) {
        // eslint-disable-next-line no-unused-expressions
        this.id = this.id === hash ? '' : hash;
    }

    get selectedComment() {
        return this.id;
    }
}
