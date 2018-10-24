/**
 * @name ProductRouter Routes pour la récupération des produits
 * @author IDea Factory (dev-team@ideafactory.fr)
 * @package src/routes
 * @version 1.0.0
 */

import { Router, Request, Response, NextFunction } from "express";
import { ProductController } from '../controllers/product-controller';

const productController: ProductController = new ProductController();

export class ProductRouter {
    public router: Router;

    /**
     * Instanciation du contrôleur pour les comptes
     */
    constructor() {
        this.router = Router();
        
        this._init();
    }

    private _init(): void {

        // Lecture d'un produit
        this.router
            .get(
                '/:ean',
                this._get
            )
    }

    /**
     * Récupération d'un produit de la base OpenFoodFacts
     * @param request 
     * @param response 
     * @param next 
     */
    private _get(request: Request, response: Response, next: NextFunction): void {
        productController.get(request, response, next);
    }

}

const productRoutes = new ProductRouter();
export default productRoutes.router;