import fs from 'fs';
import libre from 'libreoffice-convert';

const libreConvert = (srcPath: string, ext: string): Promise<Buffer> => {
    const input = fs.readFileSync(srcPath);
    return new Promise((res, rej) => {
        libre.convert(input, `.${ext}`, undefined, (err, done) => {
            if (err) return rej(err);
            res(done);
        });
    });
};
export default libreConvert;
