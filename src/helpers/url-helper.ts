/**
 * @name UrlHelper Services de gestion des urls
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package helpers
 * @version 1.0.0
 */

import * as urlexists from 'url-exists';

export class UrlHelper {

   /**
    * Teste l'existence d'une URL
    * @param url 
    */
   public static urlExists(url: string): Promise<boolean> {
       return new Promise((resolve) => {
           urlexists(url, (err, exists) => {
               if (exists) {
                   resolve(true);
               } else {
                resolve(false);
               }
           });
        });
   }
}