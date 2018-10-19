"use strict";
/**
* @name App Chargement de l'API
* @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
* @version 1.0.0
*/
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var soappliRouter_1 = require("./routes/soappliRouter");
var accountRouter_1 = require("./routes/accountRouter");
// Définition des options CORS
var corsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: '*',
    preflightContinue: false
};
var App = /** @class */ (function () {
    function App() {
        this._mongoUrl = 'mongodb://localhost/easystock';
        this.app = express();
        // Configure l'application
        this._config();
        // Connexion au serveur MongoDB
        this._mongoSetup();
        // Définit les routes standard
        this._setRoutes();
    }
    /**
     * Configuration de l'application
     */
    App.prototype._config = function () {
        // Support des données JSON
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype._setRoutes = function () {
        // Routes standard
        soappliRouter_1["default"].use(cors(corsOptions));
        this.app.use('/', soappliRouter_1["default"]);
        accountRouter_1["default"].use(cors(corsOptions));
        this.app.use('/api/v2/account', accountRouter_1["default"]);
    };
    App.prototype._mongoSetup = function () {
        mongoose.Promise = global.Promise;
        mongoose.connect(this._mongoUrl, { useNewUrlParser: true });
    };
    return App;
}());
exports["default"] = new App().app;
