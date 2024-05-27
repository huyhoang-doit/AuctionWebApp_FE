export const numberToVietnameseText = (number: number): string => {
    const units = ['', 'nghìn đồng', 'triệu đồng', 'tỷ'];
    const words = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];

    function convertChunk(chunk: number): string {
        let result = '';
        const hundred = Math.floor(chunk / 100);
        const ten = Math.floor((chunk % 100) / 10);
        const one = chunk % 10;

        if (hundred > 0) {
            result += `${words[hundred]} trăm `;
        }
        if (ten > 1) {
            result += `${words[ten]} mươi `;
        } else if (ten === 1) {
            result += 'mười ';
        }
        if (one > 0) {
            if (ten !== 1 && one === 5) {
                result += 'lăm ';
            } else {
                result += `${words[one]} `;
            }
        }
        return result.trim();
    }

    const chunks = [];
    while (number > 0) {
        chunks.push(number % 1000);
        number = Math.floor(number / 1000);
    }

    let text = '';
    for (let i = chunks.length - 1; i >= 0; i--) {
        const chunk = convertChunk(chunks[i]);
        if (chunk) {
            text += `${chunk} ${units[i]} `;
        }
    }

    return text.trim();
}
