"use strict";
/**
 * @name ProductController Contrôleur pour la gestion des produits SoAppli!
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src/controllers
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const product_model_1 = require("../models/product-model");
const Product = mongoose_1.model('Product', product_model_1.ProductSchema);
class ProductController {
    /**
     * Vérifie l'existence du pseudo au préalable
     * @param request
     * @param response
     * @param next
     */
    get(request, response, next) {
        console.log('Cherche un produit avec le code : ' + request.params.ean);
        Product.findById(request.params.ean, (error, product) => {
            if (error) {
                response.status(500).send({ message: error });
            }
            else {
                console.log('Produit : ' + JSON.stringify(product));
                if (product) {
                    console.log('Produit : ' + product.title);
                    response.status(200).send(product);
                }
                else {
                    response.status(404).send({ message: 'Aucun produit avec le code : ' + request.params.ean });
                }
            }
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product-controller.js.map