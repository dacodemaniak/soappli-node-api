"use strict";
/**
 * @name UrlHelper Services de gestion des urls
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package helpers
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const urlexists = require("url-exists");
class UrlHelper {
    /**
     * Teste l'existence d'une URL
     * @param url
     */
    static urlExists(url) {
        return urlexists(url, (err, exists) => {
            if (exists) {
                return true;
            }
            return false;
        });
    }
}
exports.UrlHelper = UrlHelper;
//# sourceMappingURL=url-helper.js.map