"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const convert_1 = __importDefault(require("../utils/convert"));
const convert = (path, ext) => {
    return (0, convert_1.default)(path, ext);
};
exports.default = { convert };
