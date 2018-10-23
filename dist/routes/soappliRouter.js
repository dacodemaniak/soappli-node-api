"use strict";
/**
 * @name SoAppliRouter Routes de l'application SoAppli
 * @author IDea Factory (dev-team@ideafactory.fr)
 * @package src/routes
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class SoAppliRouter {
    constructor() {
        this.router = express_1.Router();
        this._init();
    }
    _init() {
        this.router.get('/', this._get);
    }
    _get(request, response, next) {
        response.status(200).send({ message: 'Requête GET okay' });
    }
}
exports.SoAppliRouter = SoAppliRouter;
const soAppliRoutes = new SoAppliRouter();
exports.default = soAppliRoutes.router;
//# sourceMappingURL=soappliRouter.js.map