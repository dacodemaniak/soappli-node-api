"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name ProductModel Modèle pour les produits OpenFoodFacts SoAppli!
 * @author IDea Factory (dev-team@ideafactory.fr)- Oct. 2018
 * @package src/models
 * @version 1.0.0
 */
const mongoose_1 = require("mongoose");
const image_model_1 = require("./image-model");
const string_helper_1 = require("./../helpers/string-helper");
const product_class_1 = require("./product-class");
var productSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: 'L\'id du produit est obligatoire'
    },
    // Identifiant du produit ( => code EAN)
    id: {
        type: String,
        required: 'Le code EAN est obligatoire'
    },
    product_name: {
        type: String
    },
    // Nom du produit en Français
    generic_name_fr: {
        type: String
    },
    product_name_fr: {
        type: String
    },
    generic_name: {
        type: String
    },
    images: {
        type: image_model_1.ImageSchema
    },
    categories: {
        type: Array,
        set: string_helper_1.StringHelper.commaToArray
    },
    categories_tags: {
        type: Array
    },
    packaging_tags: {
        type: Array
    },
    // Magasins fournisseurs
    stores_tag: {
        type: Array
    },
    // Marque
    brand_tags: {
        type: Array
    },
    countries: {
        type: String
    },
    // Mots-clés
    _keywords: {
        type: Array
    },
    serving_quantity: {
        type: Number
    }
});
// Définit les méthodes pour le schéma
productSchema.method('title', product_class_1.ProductClass.prototype.title);
productSchema.method('image', product_class_1.ProductClass.prototype.image);
exports.Products = mongoose_1.model('ProductClass', productSchema);
//# sourceMappingURL=product-model.js.map