"use strict";
exports.__esModule = true;
var express = require("express");
var fileUpload = require("express-fileupload");
var route_1 = require("./routes/route");
var path_1 = require("path");
var dotenv = require("dotenv");
dotenv.config();
var app = express();
app.use(express.json());
app.use(fileUpload({ useTempFiles: true, tempFileDir: './uploads', limits: { fileSize: 50 * 1024 * 1024 } }));
app.use('/api/convert', route_1["default"]);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path_1["default"].join(__dirname, '../client/dist')));
    app.get('*', function (_req, res) {
        res.sendFile(path_1["default"].resolve(__dirname, '../client/dist/index.html'));
    });
}
var PORT = Number(process.env.PORT) || 5000;
// Start server with error handling for address in use
var serverInstance = app.listen(PORT, function () {
    return console.log("Server running on http://localhost:".concat(PORT));
});
serverInstance.on('error', function (err) {
    if (err.code === 'EADDRINUSE') {
        console.error("Port ".concat(PORT, " in use, please free it or set a different PORT in .env"));
        process.exit(1);
    }
    else {
        console.error('Server error:', err);
    }
});
