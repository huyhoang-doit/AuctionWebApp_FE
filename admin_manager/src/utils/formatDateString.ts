import { format, parseISO } from 'date-fns';

export const formatDateString = (isoString: string): string => {
    const date = parseISO(isoString);
    return format(date, 'MM/dd/yyyy HH:mm:ss');
};
export const formatDateStringAcceptNull = (isoString: string | undefined): string => {
    if (isoString === undefined) {
        return 'Invalid date';
    }
    try {
        const date = parseISO(isoString);
        return format(date, 'MM/dd/yyyy HH:mm:ss');
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