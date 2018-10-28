"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_class_1 = require("./../models/product-class");
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
                if (product) {
                    // Caster le produit dans un objet spécifique
                    let soAppliProduct = new product_class_1.ProductClass(product);
                    response.status(200).send(soAppliProduct.get());
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