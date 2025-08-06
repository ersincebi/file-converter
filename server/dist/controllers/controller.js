"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleConvert = void 0;
const service_1 = __importDefault(require("../services/service"));
const handleConvert = async (req, res) => {
    try {
        if (!req.files?.input)
            throw new Error('No file uploaded');
        const file = req.files.input;
        const buffer = await service_1.default.convert(file.tempFilePath, req.body.targetFormat);
        res.set({
            'Content-Disposition': `attachment; filename="${file.name.split('.')[0]}.${req.body.targetFormat}"`,
            'Content-Type': 'application/octet-stream'
        });
        res.send(buffer);
    }
    catch (e) {
        res.status(400).json({ error: e.message });
    }
};
exports.handleConvert = handleConvert;
