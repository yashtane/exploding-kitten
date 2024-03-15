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
exports.redisClient = void 0;
const redis_om_1 = require("redis-om");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const redisClient = new redis_om_1.Client();
exports.redisClient = redisClient;
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`redis://${process.env.USER}:${process.env.PASS}@${process.env.URL}`);
    yield redisClient.open(`redis://${process.env.USER}:${process.env.PASS}@${process.env.URL}`);
    // await redisClient.open(`redis://default:ISY0MrAriQLscasi8RbXUlCFRzggQdiy@redis-15407.c74.us-east-1-4.ec2.cloud.redislabs.com:15407`)
}))();
