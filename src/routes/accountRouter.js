"use strict";
/**
 * @name AccountRouter Routes pour la gestion du compte
 * @author IDea Factory (dev-team@ideafactory.fr)
 * @package src/routes
 * @version 1.0.0
 */
exports.__esModule = true;
var express_1 = require("express");
var account_controller_1 = require("./../controllers/account-controller");
var accountController = new account_controller_1.AccountController();
var AccountRouter = /** @class */ (function () {
    /**
     * Instanciation du contrôleur pour les comptes
     */
    function AccountRouter() {
        this.router = express_1.Router();
        this._init();
    }
    AccountRouter.prototype._init = function () {
        // Requête d'authentification
        this.router
            .get('/:username/:secureKey', this._authenticate)
            // Requête de contrôle d'existence
            .get('/:username', this._check)
            .post('/', this._add);
    };
    /**
     * Authentification d'un compte SoAppli!
     * @param request
     * @param response
     * @param next
     */
    AccountRouter.prototype._authenticate = function (request, response, next) {
        if (request.params.username && request.params.secureKey) {
            response.status(200).send({ message: 'Account GET : ' + request.params.username });
        }
        else {
            response.status(400).send({ message: 'Requête incorrecte' });
        }
    };
    /**
     * Contrôle d'existence d'un compte avec ce username
     * @param request
     * @param response
     * @param next
     */
    AccountRouter.prototype._check = function (request, response, next) {
        accountController.check(request, response, next);
    };
    /**
     * Appelle le contrôleur pour l'ajout d'un compte
     * @param request
     * @param response
     * @param next
     */
    AccountRouter.prototype._add = function (request, response, next) {
        accountController.add(request, response, next);
    };
    return AccountRouter;
}());
exports.AccountRouter = AccountRouter;
var accountRoutes = new AccountRouter();
exports["default"] = accountRoutes.router;
