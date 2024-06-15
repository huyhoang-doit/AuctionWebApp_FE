import { Image } from './../models/Image';
import { MyRequest } from "./MyRequest";
import { fetchWithToken } from './AuthenticationAPI';
import BASE_URL from '../global_variable/config';


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
    const URL: string = `${BASE_URL}/image/get-by-jewelry/${jewelryId}`;

    return getImages(URL);
}

export async function getIconImageByJewelryId(jewelryId: number): Promise<Image> {
    // endpoint
    const URL: string = `${BASE_URL}/image/get-icon-jewelry/${jewelryId}`;

    const response = await MyRequest(URL);

    return {
        id: response.id,
        link: response.link,
        data: response.data
    };
}
interface ImageRequest {
    data: string;
    jewelryId: number;
}
export const setImageForJewelry = async (imageRequest: ImageRequest, icon: boolean): Promise<boolean> => {
    const accessToken = localStorage.getItem('access_token');
    const isIcon: boolean = icon
    const body = { ...imageRequest, icon: isIcon }
    // end-point
    const URL = `${BASE_URL}/image/add-image`;
    // call api
    try {
        const response = await fetchWithToken(URL, 'POST', accessToken, body);

        console.log(response);

        if (!response.ok) {
            throw new Error(`Không thể truy cập ${URL}`);
        }
        return true;
    } catch (error) {
        console.error("Error: " + error);
        return false;
    }
};

export async function processImages(base64Images: string[], newJewelryId: number) {
    for (const image of base64Images.slice(1)) {
        await setImageForJewelry({ data: image, jewelryId: newJewelryId }, false);
    }
}