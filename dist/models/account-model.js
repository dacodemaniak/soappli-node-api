"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name AccountModel Modèle pour la gestion des comptes SoAppli!
 * @author IDea Factory (dev-team@ideafactory.fr)- Oct. 2018
 * @package src/models
 * @version 1.0.0
 * @todo Ajouter une collection de comptes associés
 */
const mongoose = require("mongoose");
const md5_helper_1 = require("./../helpers/md5-helper");
const settings_model_1 = require("./settings-model");
const schema = mongoose.Schema;
exports.AccountSchema = new schema({
    userName: {
        type: String,
        required: 'Le pseudo est obligatoire'
    },
    name: {
        type: String,
        required: 'Le nom est obligatoire'
    },
    forname: {
        type: String
    },
    email: {
        type: String,
        required: 'Une adresse e-mail est obligatoire'
    },
    phone: {
        type: String
    },
    gender: {
        type: Number
    },
    birthDate: {
        type: Date
    },
    salt: {
        type: String,
        default: md5_helper_1.Md5Helper.getSalt
    },
    password: {
        type: String,
        required: 'Le mot de passe est obligatoire',
        set: md5_helper_1.Md5Helper.crypt
    },
    token: {
        type: String
    },
    settings: {
        type: settings_model_1.SettingsSchema
    }
});
//# sourceMappingURL=account-model.js.map