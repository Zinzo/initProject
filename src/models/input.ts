export class InputResponse {
    public formId: number;
    public title: string;
    public items: InputItems[];

    constructor(data: any) {
        this.formId = data.id || 1;
        this.title = data.title || '';
        this.items = InputItems.fromJson(data.items);
    }
}

export class InputOptions {
    public static fromJson(data: InputOptions[]) {
        let result: InputOptions[];
        result = data.map((val) => new InputOptions(val));

        return result;
    }

    public id: number;
    public text: string;

    constructor(data: any) {
        this.id = data.id || 0;
        this.text = data.text || '';
    }
}

export class InputItems {
    public static fromJson(data: InputItems[]) {
        let result: InputItems[];
        result = data.map((val) => new InputItems(val));

        return result;
    }

    public itemId: number;
    public title: string;
    public formType: number;
    public options: InputOptions[];

    constructor(data: any) {
        this.itemId = data.itemId || 0;
        this.title = data.title || '';
        this.formType = data.formType || 0;
        this.options = InputOptions.fromJson(data.options);
    }
}
