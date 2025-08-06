import { Request, Response } from 'express';
import { UploadedFile } from 'express-fileupload';
import convertService from '../services/service';

export const handleConvert = async (req: Request, res: Response) => {
    try {
        if (!req.files?.input) throw new Error('No file uploaded');
        const file = req.files.input as UploadedFile;
        const buffer = await convertService.convert(file.tempFilePath, req.body.targetFormat);
        res.set({
            'Content-Disposition': `attachment; filename="${file.name.split('.')[0]}.${req.body.targetFormat}"`,
            'Content-Type': 'application/octet-stream'
        });
        res.send(buffer);
    } catch (e) {
        res.status(400).json({ error: (e as Error).message });
    }
};
