import { Image } from "../models/Image";
import { MyRequest } from "./MyRequest";


async function getImages(URL: string): Promise<Image[]> {
    const result: Image[] = [];

    // request
    const response = await MyRequest(URL);

    for (const key in response) {
        result.push({
            id: response[key].id,
            link: response[key].link,
            data: response[key].data
        })
    }

    return result;
}

export async function getImagesByJewelryId(jewelryId: number): Promise<Image[]> {
    // endpoint
    const URL: string = `http://localhost:8080/api/v1/image/get-by-jewelry/${jewelryId}`;

    return getImages(URL);
}

export async function getIconImageByJewelryId(jewelryId: number): Promise<Image> {
    // endpoint
    const URL: string = `http://localhost:8080/api/v1/image/get-icon-jewelry/${jewelryId}`;

    const response = await MyRequest(URL);

    return {
        id: response.id,
        link: response.link,
        data: response.data
    };
}