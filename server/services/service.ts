import libreConvert from '../utils/convert';

const convert = (path: string, ext: string) => {
    return libreConvert(path, ext);
};
export default { convert };
