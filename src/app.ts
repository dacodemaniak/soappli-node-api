/** 
* @name App Chargement de l'API
* @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
* @version 1.0.0 
*/

import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as mongoose from "mongoose";

import SoAppliRouter from './routes/soappliRouter';
import AccountRouter from './routes/accountRouter';
import ProductRouter from './routes/productRouter';

// Définition des options CORS
const corsOptions: cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: '*',
    preflightContinue: false
}
class App {
    /**
     * @var app express.Application Application node
     */
    public app: express.Application;

    private _mongoUrl: string = 'mongodb://localhost/easystock';

    constructor() {
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
    private _config(): void {
        // Support des données JSON
        this.app.use(bodyParser.json());

        this.app.use(bodyParser.urlencoded({extended: false}));
    }

    private _setRoutes(): void {
        // Routes standard
        SoAppliRouter.use(cors(corsOptions));
        this.app.use('/', SoAppliRouter);
        
        // Routes pour la gestion des comptes
        AccountRouter.use(cors(corsOptions));
        this.app.use('/api/v2/account', AccountRouter);

        // Routes pour les produits
        ProductRouter.use(cors(corsOptions));
        this.app.use('/api/v2/product', ProductRouter);
    }

    private _mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this._mongoUrl, {useNewUrlParser: true});
    }
}

export default new App().app;