/**
 * @name Md5Helper Service d'encodage Md5
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src/helpers
 * @version 1.0.0
 */
import { Md5 } from 'md5-typescript';

export class Md5Helper {
    private static salt: string = Md5Helper._setSalt();

    public static crypt(toCrypted: String): String {
        const salted: string = Md5Helper.salt + toCrypted + Md5Helper.salt;
        return Md5.init(salted);
    }
 
    public static getSalt(): string {
        return Md5Helper.salt;
    }
    private static _setSalt(): string {
        return '_' + Math.random().toString(36).substr(2, 5);
    }
}