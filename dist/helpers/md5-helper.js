"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name Md5Helper Service d'encodage Md5
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src/helpers
 * @version 1.0.0
 */
const md5_typescript_1 = require("md5-typescript");
class Md5Helper {
    static crypt(toCrypted) {
        const salted = Md5Helper.salt + toCrypted + Md5Helper.salt;
        return md5_typescript_1.Md5.init(salted);
    }
    static getSalt() {
        return Md5Helper.salt;
    }
    static _setSalt() {
        return '_' + Math.random().toString(36).substr(2, 5);
    }
}
Md5Helper.salt = Md5Helper._setSalt();
exports.Md5Helper = Md5Helper;
//# sourceMappingURL=md5-helper.js.map