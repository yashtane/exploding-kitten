"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
// import { checkAuth } from '../middleware/checkAuth.js';
const userController_1 = require("../controllers/userController");
const checkAuth_1 = require("../middleware/checkAuth");
const authRouter = express_1.default.Router();
exports.authRouter = authRouter;
authRouter.post('/signup', userController_1.createUser);
authRouter.post('/login', userController_1.signInUser);
authRouter.use(checkAuth_1.checkAuth);
authRouter.get('/updatescore', userController_1.updateScores);
// authRouter.get('/', getAllUsers);
authRouter.get('/highest', userController_1.getHighScores);
