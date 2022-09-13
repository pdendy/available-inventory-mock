export class Country {

    id: number;
    name: string;
    defaultLocale: string;

    constructor(id: number,
                name: string,
                defaultLocale: string) {

        this.id = id;
        this.name = name;
        this.defaultLocale = defaultLocale;
    }
}
