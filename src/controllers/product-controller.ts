/**
 * @name ProductController Contrôleur pour la gestion des produits SoAppli!
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src/controllers
 * @version 1.0.0
 */

 import * as mongoose from 'mongoose';

 import { model } from 'mongoose';

 import { ProductSchema }  from '../models/product-model';
 
 import { Request, Response, NextFunction} from 'express';

 import { ProductInterface } from './../interfaces/product-interface';

const Product = model('Product', ProductSchema);

 export class ProductController {

    /**
     * Vérifie l'existence du pseudo au préalable
     * @param request 
     * @param response 
     * @param next 
     */
    public get(request: Request, response: Response, next: NextFunction) {
        console.log('Cherche un produit avec le code : ' + request.params.ean);

        Product.findById(request.params.ean, (error: any, product: ProductInterface) => {
            if (error) {
                response.status(500).send( {message: error})
            } else {
                if (product) {
                    // Caster le produit dans un objet spécifique
                    response.status(200).send(product);
                } else {
                    response.status(404).send({message: 'Aucun produit avec le code : ' + request.params.ean})
                }
            }
        });
    }
 }