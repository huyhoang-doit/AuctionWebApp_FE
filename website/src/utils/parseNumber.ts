export const parseId = (id: string | undefined): number => {
    if (!id) return 0;
    const categoryId = parseInt(id, 10);
    return isNaN(categoryId) ? 0 : categoryId;
};