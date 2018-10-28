import { ProductInterface } from './../interfaces/product-interface';
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
    public images?: ImageInterface;
    public categories?: string[];
    public categories_tags?: string[];
    public packaging_tags?: string[];
    public stores_tags?: string[];
    public brand_tags?: string[];
    public countries?: string;
    public _keywords?: string[];
    public serving_quantity: number;

    public constructor(datas: any){
        Object.assign(this, datas);
    }

    public get(): ProductInterface {

    }

    private title(): string {
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

    private image(): string {
        return 'no-image.png';
    }
}
