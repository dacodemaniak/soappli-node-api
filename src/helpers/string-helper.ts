/**
 * @name StringHelper Services de gestion de chaînes de caractères
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src/helpers
 * @version 1.0.0
 */

 export class StringHelper {
     /**
      * Découpe une chaîne séparée par des virgules
      * @param source 
      * @return Array<String>
      */
     public static commaToArray(source: String): Array<String> {
         console.log('Split : ' + source);
        let parsed: String[] = source.split(',');
        return parsed;
    }
 }