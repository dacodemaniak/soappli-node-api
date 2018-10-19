"use strict";
/**
 * @name SoAppliRouter Routes de l'application SoAppli
 * @author IDea Factory (dev-team@ideafactory.fr)
 * @package src/routes
 * @version 1.0.0
 */
exports.__esModule = true;
var express_1 = require("express");
var SoAppliRouter = /** @class */ (function () {
    function SoAppliRouter() {
        this.router = express_1.Router();
        this._init();
    }
    SoAppliRouter.prototype._init = function () {
        this.router.get('/', this._get);
    };
    SoAppliRouter.prototype._get = function (request, response, next) {
        response.status(200).send({ message: 'Requête GET okay' });
    };
    return SoAppliRouter;
}());
exports.SoAppliRouter = SoAppliRouter;
var soAppliRoutes = new SoAppliRouter();
exports["default"] = soAppliRoutes.router;
