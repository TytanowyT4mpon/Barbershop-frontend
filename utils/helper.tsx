export const getPhotoPath = (url: string | null | undefined): string => {
    if (!url) return '';
    try {
        const pathname = new URL(url).pathname;
        return pathname.replace(/^\/media\//, '/api/media/');
    } catch { return url; }
};