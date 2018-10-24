/**
 * @name ProductController Contrôleur pour la gestion des produits SoAppli!
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src/controllers
 * @version 1.0.0
 */

 import * as mongoose from 'mongoose';

 import { Products }  from '../models/product-model';
 import { SoappliProductInterface } from './../interfaces/soappli-product-interface';
 
 import { Request, Response, NextFunction} from 'express';


 export class ProductController {

    /**
     * Vérifie l'existence du pseudo au préalable
     * @param request 
     * @param response 
     * @param next 
     */
    public get(request: Request, response: Response, next: NextFunction) {
        console.log('Cherche un produit avec le code : ' + request.params.ean);

        Products.findById(request.params.ean, (error: any, product: SoappliProductInterface) => {
            if (error) {
                response.status(500).send( {message: error})
            } else {
                console.log('Produit : ' + JSON.stringify(product));
                if (product) {
                    console.log('Produit : ' + product.title);
                    response.status(200).send(product);
                } else {
                    response.status(404).send({message: 'Aucun produit avec le code : ' + request.params.ean})
                }
            }
        });
    }
 }