import { Tag } from './tag.model';

interface IToast {
    id: string;
    toastText: string;
    reviewed: boolean;
    tags: Tag[];
}

export class Toast implements IToast {
    public id: string;
    public toastText: string;
    public reviewed: boolean;
    public tags: Tag[];

    constructor(id: string, toastText: string, reviewed: boolean, tags: Tag[]) {
        this.id = id;
        this.toastText = toastText;
        this.reviewed = reviewed;
        this.tags = tags;
    }
}
