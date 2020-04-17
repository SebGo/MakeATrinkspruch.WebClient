interface ITag {
    id: string;
    tagName: string;
}

export class Tag implements ITag {
    public id: string;
    public tagName: string;

    constructor(id: string, tagName: string) {
        this.id = id;
        this.tagName = tagName;
    }
}
