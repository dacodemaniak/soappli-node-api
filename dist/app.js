"use strict";
/**
* @name App Chargement de l'API
* @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
* @version 1.0.0
*/
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const soappliRouter_1 = require("./routes/soappliRouter");
const accountRouter_1 = require("./routes/accountRouter");
// Définition des options CORS
const corsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: '*',
    preflightContinue: false
};
class App {
    constructor() {
        this._mongoUrl = 'mongodb://localhost/easystock';
        this.app = express();
        // Configure l'application
        this._config();
        // Connexion au serveur MongoDB
        this._mongoSetup();
        // Définit les routes
        this._setRoutes();
    }
    /**
     * Configuration de l'application
     */
    _config() {
        // Support des données JSON
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    _setRoutes() {
        // Routes standard
        soappliRouter_1.default.use(cors(corsOptions));
        this.app.use('/', soappliRouter_1.default);
        // Routes pour la gestion des comptes
        accountRouter_1.default.use(cors(corsOptions));
        this.app.use('/api/v2/account', accountRouter_1.default);
    }
    _mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this._mongoUrl, { useNewUrlParser: true });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map