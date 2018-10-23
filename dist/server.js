"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name server.ts Serveur HTTP
 * @author IDea Factory (dev-team@ideafactory.fr)
 * @version 1.0.0
*/
const app_1 = require("./app");
const PORT = 3000;
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
//# sourceMappingURL=server.js.map