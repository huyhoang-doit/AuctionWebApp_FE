import { format, parseISO } from 'date-fns';

export const formatDateString = (isoString: string): string => {
    const date = parseISO(isoString);
    return format(date, 'dd/MM/yyyy HH:mm:ss');
};
export const formatDateStringAcceptNull = (isoString: string | undefined): string => {
    if (isoString === undefined) {
        return 'Invalid date';
    }
    try {
        const date = parseISO(isoString);
        return format(date, 'dd/MM/yyyy HH:mm:ss');
    } catch (error) {
        return 'Invalid date';
    }
};
export const formatDateTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    };
    const dateString = date.toLocaleDateString('vi-VN', options);

    const dayOfWeek = date.toLocaleDateString('vi-VN', { weekday: 'long' });

    return `${dayOfWeek}, ${dateString}`;
};

export const formatTime = (date: Date) => {
    return date.toLocaleTimeString();
};

export const formatDateTimeBox = (datetimeString: string | undefined): string => {
    if (datetimeString === undefined || datetimeString === null) {
        return 'Invalid date';
    }
    const [datePart, timePart] = datetimeString.split('T');
    const date = datePart;
    const time = timePart.substring(0, 5); // Get HH:MM
    return `${date}T${time}`;
}
