"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = require("./src/routes/userRoutes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;
app.listen(port, () => {
    console.log(`Server running on: http://localhost:${port}`);
});
app.use('/users', userRoutes_1.authRouter);
