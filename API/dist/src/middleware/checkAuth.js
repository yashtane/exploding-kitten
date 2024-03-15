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
exports.checkAuth = void 0;
const checkAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    if (!authorization) {
        console.log("no authorization header");
        return res.status(401).json({ error: "Authorization token not present" });
    }
    const token = authorization.split(' ')[1];
    try {
        // const { id } = jwt.verify(token, process.env.SECRET as string) as JwtPayload
        // console.log(`user id is -> ${id}`)
        // req.currUser = await userRepository.search().where('id').eq(id).return.all()
        req.currUserId = 3; // settting currUserId inorder for fetching the user from redis using entityId
        console.log("curr user is - ", req.currUserId);
        next();
    }
    catch (err) {
        res.status(401).json({ error: "Token not verified" });
    }
});
exports.checkAuth = checkAuth;
