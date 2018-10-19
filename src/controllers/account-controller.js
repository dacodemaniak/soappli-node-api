"use strict";
/**
 * @name AccountController Contrôleur pour la gestion des comptes SoAppli!
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src/controllers
 * @version 1.0.0
 */
exports.__esModule = true;
var mongoose = require("mongoose");
var account_model_1 = require("./../models/account-model");
var Account = mongoose.model('Account', account_model_1.AccountSchema);
var AccountController = /** @class */ (function () {
    function AccountController() {
    }
    /**
     * Vérifie l'existence du pseudo au préalable
     * @param request
     * @param response
     * @param next
     */
    AccountController.prototype.check = function (request, response, next) {
        console.log('Cherche un compte avec le pseudo : ' + request.params.username);
        Account.find({ userName: request.params.username }, function (error, account) {
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
    };
    /**
     * Création d'un nouveau compte
     * @param request
     * @param response
     * @param next
     */
    AccountController.prototype.add = function (request, response, next) {
        var account = new Account(request.body);
        account.save(function (error, newAccount) {
            if (error) {
                response.status(500).send(error);
            }
            response.json(newAccount);
        });
    };
    return AccountController;
}());
exports.AccountController = AccountController;
