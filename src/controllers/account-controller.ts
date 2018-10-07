/**
 * @name AccountController Contrôleur pour la gestion des comptes SoAppli!
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src/controllers
 * @version 1.0.0
 */

 import * as mongoose from 'mongoose';
 import { AccountSchema } from './../models/account-model';
 import { Request, Response, NextFunction} from 'express';

 const Account = mongoose.model('Account', AccountSchema);

 export class AccountController {

    /**
     * Vérifie l'existence du pseudo au préalable
     * @param request 
     * @param response 
     * @param next 
     */
    public check(request: Request, response: Response, next: NextFunction) {
        console.log('Cherche un compte avec le pseudo : ' + request.params.username);

        Account.find({userName: request.params.username}, (error, account) => {
            if (error) {
                response.status(500).send({
                    message: 'Une erreur est survenue dans la requête'
                });
            } else {
                if (account.length) {
                    response.status(409).send({
                        message: 'Désolé, ce pseudo est déjà utilisé'
                    })
                } else {
                    response.status(200).send({
                        message: 'Ce compte n\'existe pas'
                    })
                }
            }
        });
    }

    /**
     * Création d'un nouveau compte
     * @param request 
     * @param response 
     * @param next 
     */
    public add(request: Request, response: Response, next: NextFunction): void {
        let account = new Account(request.body);

        account.save((error, newAccount) => {
            if (error) {
                response.status(500).send(error);
            }
            response.json(newAccount);
        })
    }
 }