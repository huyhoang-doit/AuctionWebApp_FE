export class Image {
    id: number;
    link?: string;
    data: string;


	constructor(id: number, link: string, data: string) {
        this.id = id;
        this.link = link;
        this.data = data;
	}
    
}