export const convertFile = async (file: File, format: string): Promise<Blob> => {
    const data = new FormData();
    data.append('input', file);
    data.append('targetFormat', format);
    const resp = await fetch('/api/convert', { method: 'POST', body: data });
    if (!resp.ok) {
        const error = await resp.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(`Conversion failed: ${error.message || resp.statusText}`);
    }
    return await resp.blob();
};
