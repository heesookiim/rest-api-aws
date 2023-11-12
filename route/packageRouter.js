"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// packageRouter.ts
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packageData = req.body;
        // Perform actions with packageData
        res.status(201).json({
            message: 'Package created successfully',
            package: packageData
        });
    }
    catch (_a) {
        res.status(500).json({ message: "An error occurred", });
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Implement the logic to retrieve packages
    res.status(200).json({
        message: 'Packages retrieved successfully',
        // packages: [...] // the actual packages
    });
}));
exports.default = router;
