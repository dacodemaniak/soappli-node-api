"use strict";
/**
 * @name StringHelper Services de gestion de chaînes de caractères
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src/helpers
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
class StringHelper {
    /**
     * Découpe une chaîne séparée par des virgules
     * @param source
     * @return Array<String>
     */
    static commaToArray(source) {
        console.log('Split : ' + source);
        let parsed = source.split(',');
        return parsed;
    }
}
exports.StringHelper = StringHelper;
//# sourceMappingURL=string-helper.js.map