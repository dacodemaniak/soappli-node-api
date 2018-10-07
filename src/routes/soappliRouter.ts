/**
 * @name SoAppliRouter Routes de l'application SoAppli
 * @author IDea Factory (dev-team@ideafactory.fr)
 * @package src/routes
 * @version 1.0.0
 */

import { Router, Request, Response, NextFunction } from "express";

export class SoAppliRouter {
    public router: Router;

    constructor() {
        this.router = Router();

        this._init();
    }

    private _init(): void {
        this.router.get(
            '/',
            this._get
        );
    }

    private _get(request: Request, response: Response, next: NextFunction): void {
        response.status(200).send(
            {message: 'Requête GET okay'}
        )
    }
}

const soAppliRoutes = new SoAppliRouter();
export default soAppliRoutes.router;