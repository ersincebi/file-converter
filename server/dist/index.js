"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const route_1 = __importDefault(require("./routes/route"));
const path_1 = __importDefault(require("path"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, express_fileupload_1.default)({ useTempFiles: true, tempFileDir: './uploads', limits: { fileSize: 50 * 1024 * 1024 } }));
app.use('/api/convert', route_1.default);
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '../client/dist')));
    app.get('*', (_req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, '../client/dist/index.html'));
    });
}
const PORT = Number(process.env.PORT) || 5000;
// Start server with error handling for address in use
const serverInstance = app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
serverInstance.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} in use, please free it or set a different PORT in .env`);
        process.exit(1);
    }
    else {
        console.error('Server error:', err);
    }
});
