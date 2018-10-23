"use strict";
/**
 * @name AccountController Contrôleur pour la gestion des comptes SoAppli!
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src/controllers
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const account_model_1 = require("./../models/account-model");
const Account = mongoose.model('Account', account_model_1.AccountSchema);
class AccountController {
    /**
     * Vérifie l'existence du pseudo au préalable
     * @param request
     * @param response
     * @param next
     */
    check(request, response, next) {
        console.log('Cherche un compte avec le pseudo : ' + request.params.username);
        Account.find({ userName: request.params.username }, (error, account) => {
            if (error) {
                response.status(500).send({
                    status: 500,
                    message: 'Une erreur est survenue dans la requête'
                });
            }
            else {
                if (account.length) {
                    response.status(409).send({
                        status: 409,
                        message: 'Désolé, ce pseudo est déjà utilisé'
                    });
                }
                else {
                    response.status(200).send({
                        status: 200,
                        message: 'Ce compte n\'existe pas'
                    });
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
    add(request, response, next) {
        let account = new Account(request.body);
        account.save((error, newAccount) => {
            if (error) {
                response.status(500).send(error);
            }
            response.json(newAccount);
        });
    }
    update(request, response, next) {
        Account.findOneAndUpdate({ _id: request.params.mongoId }, request.body, { new: true }, (error, account) => {
            if (error) {
                response.status(500).send(error);
            }
            response.status(200).json(account);
        });
    }
}
exports.AccountController = AccountController;
//# sourceMappingURL=account-controller.js.map