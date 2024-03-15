"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const redis_om_1 = require("redis-om");
class User extends redis_om_1.Entity {
}
exports.userSchema = new redis_om_1.Schema(User, {
    password: { type: 'string' },
    email: { type: 'string' },
    score: {
        type: 'number', sortable: true
    }
}, {
    dataStructure: "JSON"
});
