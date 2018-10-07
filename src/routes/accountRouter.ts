/**
 * @name AccountRouter Routes pour la gestion du compte
 * @author IDea Factory (dev-team@ideafactory.fr)
 * @package src/routes
 * @version 1.0.0
 */

import { Router, Request, Response, NextFunction } from "express";
import { AccountController } from './../controllers/account-controller';

const accountController: AccountController = new AccountController();

export class AccountRouter {
    public router: Router;

    /**
     * Instanciation du contrôleur pour les comptes
     */
    constructor() {
        this.router = Router();

        this._init();
    }

    private _init(): void {

        // Requête d'authentification
        this.router
            .get(
                '/:username/:secureKey',
                this._authenticate
            )

            // Requête de contrôle d'existence
            .get(
                '/:username',
                this._check
            )

            .post(
                '/',
                this._add
            );
    }

    /**
     * Authentification d'un compte SoAppli!
     * @param request 
     * @param response 
     * @param next 
     */
    private _authenticate(request: Request, response: Response, next: NextFunction): void {
        if (request.params.username && request.params.secureKey) {
            response.status(200).send(
                {message: 'Account GET : ' + request.params.username}
            )
        } else {
            response.status(400).send(
                {message: 'Requête incorrecte'}
            )
        }
    }

    /**
     * Contrôle d'existence d'un compte avec ce username
     * @param request 
     * @param response 
     * @param next 
     */
    private _check(request: Request, response: Response, next: NextFunction) {
        accountController.check(request, response, next);
    }

    /**
     * Appelle le contrôleur pour l'ajout d'un compte
     * @param request 
     * @param response 
     * @param next 
     */
    private _add(request: Request, response: Response, next: NextFunction) {
        
        accountController.add(request, response, next);
    }
}

const accountRoutes = new AccountRouter();
export default accountRoutes.router;