export async function MyRequest(URL: string) {
    const response = await fetch(URL);

    if (!response.ok) {
        throw new Error(`Không thể truy cập ${URL}`);
    }

    return response.json();
}