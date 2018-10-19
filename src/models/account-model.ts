/**
 * @name AccountModel Modèle pour la gestion des comptes SoAppli!
 * @author IDea Factory (dev-team@ideafactory.fr)- Oct. 2018
 * @package src/models
 * @version 1.0.0
 * @todo Ajouter une collection de comptes associés
 */
import * as mongoose from 'mongoose';
import { Md5Helper } from './../helpers/md5-helper';

const schema = mongoose.Schema;

export const AccountSchema = new schema(
    {
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
            default: Md5Helper.getSalt
        },
        password: {
            type: String,
            required: 'Le mot de passe est obligatoire',
            set: Md5Helper.crypt
        },
        token: {
            type: String
        }
    }
);