"use strict";
exports.__esModule = true;
/**
 * @name server.ts Serveur HTTP
 * @author IDea Factory (dev-team@ideafactory.fr)
 * @version 1.0.0
*/
var app_1 = require("./app");
var _PORT = 3000;
app_1["default"].listen(_PORT, function () {
    console.log('Serveur Express à l\'écoute sur le port : ' + _PORT);
});
