import { format, parseISO } from 'date-fns';

export const formatDateString = (isoString: string): string => {
    const date = parseISO(isoString);
    return format(date, 'MM/dd/yyyy HH:mm:ss');
};