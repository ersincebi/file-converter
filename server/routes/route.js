"use strict";
exports.__esModule = true;
var express_1 = require("express");
var controller_1 = require("../controllers/controller");
var router = (0, express_1.Router)();
router.post('/', controller_1.handleConvert);
exports["default"] = router;
