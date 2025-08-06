"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const libreoffice_convert_1 = __importDefault(require("libreoffice-convert"));
const libreConvert = (srcPath, ext) => {
    const input = fs_1.default.readFileSync(srcPath);
    return new Promise((res, rej) => {
        libreoffice_convert_1.default.convert(input, `.${ext}`, undefined, (err, done) => {
            if (err)
                return rej(err);
            res(done);
        });
    });
};
exports.default = libreConvert;
