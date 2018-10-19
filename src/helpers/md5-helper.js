"use strict";
exports.__esModule = true;
/**
 * @name Md5Helper Service d'encodage Md5
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src/helpers
 * @version 1.0.0
 */
var md5_typescript_1 = require("md5-typescript");
var Md5Helper = /** @class */ (function () {
    function Md5Helper() {
    }
    Md5Helper.crypt = function (toCrypted) {
        var salted = Md5Helper.salt + toCrypted + Md5Helper.salt;
        return md5_typescript_1.Md5.init(salted);
    };
    Md5Helper.getSalt = function () {
        return Md5Helper.salt;
    };
    Md5Helper._setSalt = function () {
        return '_' + Math.random().toString(36).substr(2, 5);
    };
    Md5Helper.salt = Md5Helper._setSalt();
    return Md5Helper;
}());
exports.Md5Helper = Md5Helper;
