/**
import { SoappliProductInterface } from "./../interfaces/soappli-product-interface";
 * @name ProductClass Classe métier pour les produits
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src\models\
 * @version 1.0.0
 */

export class ProductClass {
    public _id: String;
    public id: String;
    public product_name_fr?: string;
    public product_name?: string;
    public generic_name_fr?: string;
    public generic_name?: string;
    public categories?: string[];
    public categories_tags?: string[];
    public packaging_tags?: string[];
    public stores_tags?: string[];
    public brand_tags?: string[];
    public countries?: string;
    public _keywords?: string[];
    public serving_quantity: number;

    public constructor(datas: any){
        console.log('Constructeur de la classe Produit');
    }

    public title(): string {
        if (this.product_name_fr !== '') {
            return this.product_name_fr;
        } else if (this.generic_name_fr !== '' ) {
            return this.generic_name_fr;
        } else if (this.product_name !== '') {
            return this.product_name;
        } else if (this.generic_name !== '') {
            return this.generic_name;
        }

        return 'Produit sans nom';
    }

    public image(): string {
        return 'no-image.png';
    }
}
