import express, { Application, Request, Response } from 'express';
import fileUpload from 'express-fileupload';
import route from './routes/route';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();
const app: Application = express();
app.use(express.json());
app.use(
    fileUpload({ useTempFiles: true, tempFileDir: './uploads', limits: { fileSize: 50 * 1024 * 1024 } })
);

app.use('/api/convert', route);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (_req: Request, res: Response) => {
        res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
    });
}

const PORT = Number(process.env.PORT) || 5000;

// Start server with error handling for address in use
const serverInstance = app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);

serverInstance.on('error', (err: NodeJS.ErrnoException) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} in use, please free it or set a different PORT in .env`);
        process.exit(1);
    } else {
        console.error('Server error:', err);
    }
});
