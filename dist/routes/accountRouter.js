"use strict";
/**
 * @name AccountRouter Routes pour la gestion du compte
 * @author IDea Factory (dev-team@ideafactory.fr)
 * @package src/routes
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const account_controller_1 = require("./../controllers/account-controller");
const accountController = new account_controller_1.AccountController();
class AccountRouter {
    /**
     * Instanciation du contrôleur pour les comptes
     */
    constructor() {
        this.router = express_1.Router();
        this._init();
    }
    _init() {
        // Requête d'authentification
        this.router
            .get('/:username/:secureKey', this._authenticate)
            // Requête de contrôle d'existence
            .get('/:username', this._check)
            // Ajout d'un compte
            .post('/', this._add)
            // Mise à jour d'un compte
            .put('/:mongoId', this._update);
    }
    /**
     * Authentification d'un compte SoAppli!
     * @param request
     * @param response
     * @param next
     */
    _authenticate(request, response, next) {
        if (request.params.username && request.params.secureKey) {
            response.status(200).send({ message: 'Account GET : ' + request.params.username });
        }
        else {
            response.status(400).send({ message: 'Requête incorrecte' });
        }
    }
    /**
     * Contrôle d'existence d'un compte avec ce username
     * @param request
     * @param response
     * @param next
     */
    _check(request, response, next) {
        accountController.check(request, response, next);
    }
    /**
     * Appelle le contrôleur pour l'ajout d'un compte
     * @param request
     * @param response
     * @param next
     */
    _add(request, response, next) {
        accountController.add(request, response, next);
    }
    _update(request, response, next) {
        accountController.update(request, response, next);
    }
}
exports.AccountRouter = AccountRouter;
const accountRoutes = new AccountRouter();
exports.default = accountRoutes.router;
//# sourceMappingURL=accountRouter.js.map