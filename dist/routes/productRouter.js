"use strict";
/**
 * @name ProductRouter Routes pour la récupération des produits
 * @author IDea Factory (dev-team@ideafactory.fr)
 * @package src/routes
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product-controller");
const productController = new product_controller_1.ProductController();
class ProductRouter {
    /**
     * Instanciation du contrôleur pour les comptes
     */
    constructor() {
        this.router = express_1.Router();
        this._init();
    }
    _init() {
        // Lecture d'un produit
        this.router
            .get('/:ean', this._get);
    }
    /**
     * Récupération d'un produit de la base OpenFoodFacts
     * @param request
     * @param response
     * @param next
     */
    _get(request, response, next) {
        productController.get(request, response, next);
    }
}
exports.ProductRouter = ProductRouter;
const productRoutes = new ProductRouter();
exports.default = productRoutes.router;
//# sourceMappingURL=productRouter.js.map