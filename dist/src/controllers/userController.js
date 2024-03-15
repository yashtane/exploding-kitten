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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = exports.getHighScores = exports.signInUser = exports.updateScores = exports.createUser = void 0;
const redisClient_1 = require("../redisClient");
const userschema_1 = require("../schema/userschema");
// import { v4 as uuidv4 } from 'uuid';
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRepository = redisClient_1.redisClient.fetchRepository(userschema_1.userSchema);
exports.userRepository = userRepository;
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield userRepository.createIndex();
}))();
const createToken = (id) => {
    const token = jsonwebtoken_1.default.sign({ id: id }, "amanandacateatfoodtogether", { expiresIn: '3d' });
    return token;
};
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // const userID = uuidv4()
        let user = userRepository.createEntity({
            // id: userID,
            password: password,
            email: email,
            score: 0,
        });
        const id = yield userRepository.save(user);
        console.log(id);
        // console.log(userO.entityId)
        const token = createToken(id);
        res.status(200).json({
            email: email,
            token: token
        });
    }
    catch (err) {
        res.status(401).json({ err: err.message });
    }
});
exports.createUser = createUser;
const signInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const userSearch = yield userRepository.search().where('email').eq(email)
            .where('password').eq(password)
            .return.first();
        if (!userSearch) {
            return res.status(401).json({
                msg: "invalid email or password"
            });
        }
        const token = createToken(userSearch === null || userSearch === void 0 ? void 0 : userSearch.entityId);
        res.status(200).json({
            email: userSearch.email,
            token: token
        });
    }
    catch (err) {
        res.status(401).json({ err: err.message });
    }
});
exports.signInUser = signInUser;
const updateScores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userRepository.fetch(req.currUserId);
    // const user = await userRepository.search().where('id').eq(id).return.all()
    console.log("user is as follows", user);
    user.score = user.score + 1;
    yield userRepository.save(user);
    res.send(user);
});
exports.updateScores = updateScores;
//exists just for tests
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield userRepository.search().returnAll());
});
const getHighScores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const limit = 3
    const users = yield userRepository.search()
        .sortDescending('score')
        .return.page(0, 10); //page(offset, count) i.e start from 0 and go till 2 i.e returns 2 user highscores
    res.send(users);
});
exports.getHighScores = getHighScores;
