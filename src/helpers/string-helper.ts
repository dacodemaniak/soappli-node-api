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
     public static commaToArray(source: string): Array<string> {
         let data = new String(source);
        let parsed: string[] = data.split(',');
        return parsed;
    }
 }