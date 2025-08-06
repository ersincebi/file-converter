"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var libreoffice_convert_1 = require("libreoffice-convert");
var libreConvert = function (srcPath, ext) {
    var input = fs_1["default"].readFileSync(srcPath);
    return new Promise(function (res, rej) {
        libreoffice_convert_1["default"].convert(input, ".".concat(ext), undefined, function (err, done) {
            if (err)
                return rej(err);
            res(done);
        });
    });
};
exports["default"] = libreConvert;
