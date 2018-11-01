/**
 * @name ProductModel Modèle pour les produits OpenFoodFacts SoAppli!
 * @author IDea Factory (dev-team@ideafactory.fr)- Oct. 2018
 * @package src/models
 * @version 1.0.0
 */
import { Schema, Model, model } from 'mongoose';

import { ImageSchema } from './image-model';
import { StringHelper } from './../helpers/string-helper';

export const ProductSchema = new Schema(
    {
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
            type: ImageSchema
        },

        categories: {
            type: Array,
            set: StringHelper.commaToArray
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
        brands: {
            type: String
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

    }
);