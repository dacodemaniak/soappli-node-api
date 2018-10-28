import { StringHelper } from './../helpers/string-helper';

/**
 * @name ProductClass Classe métier pour les produits
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src\models\
 * @version 1.0.0
 */

import { SoAppliProductInterface } from './../interfaces/so-appli-product-interface';
import { UrlHelper } from './../helpers/url-helper';

export class ProductClass {
    public _id: String;
    public id: String;
    public product_name_fr?: string;
    public product_name?: string;
    public generic_name_fr?: string;
    public generic_name?: string;
    public images: any;
    public categories?: String;
    public categories_tags?: string[];
    public packaging_tags?: string[];
    public stores_tags?: string[];
    public brand_tags?: string[];
    public countries?: string;
    public _keywords?: string[];
    public serving_quantity: number;

    public constructor(datas: any){
        console.log('Images : ' + JSON.stringify(datas.images));
        Object.assign(this, datas);
    }

    public get(): SoAppliProductInterface {
        return {
            ean: this.id,
            title: this.title(),
            categories: this.getCategories(),
            image: this.image(),
            packaging: this.packaging_tags,
            stores: this.stores_tags,
            brands: this.brand_tags,
            countries: this.countries,
            keywords: this._keywords,
            quantity: this.serving_quantity           
        }
    }

    private title(): String {
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

    private getCategories(): String[] {
        if (this.categories && (this.categories !== '' || this.categories !== 'undefined')) {
            return StringHelper.commaToArray(this.categories);
        }
        return this.categories_tags;
    }

    /**
    * Retourne l'URL de l'image associée au produit
    */
    private image(): string {
        let url: string = 'https://static.openfoodfacts.org/images/products/';
    
        let useFr: boolean = true;

        console.log('Images : ' + JSON.stringify(this.images));

        let image: any = this.images.front_fr;
    
        if (!image) {
            image = this.images.front;
            useFr = false;
        }
    
        // Découpe les parties du code EAN en fonction du type de codage
        if (this.id.length === 13) {
            url += this.id.substring(0, 3) + '/' +
                this.id.substring(3, 3) + '/' +
                this.id.substring(6, 3) + '/' +
                this.id.substring(9, 4) + '/';
        
        }
    
        url += 'front';

        if (useFr) {
            url += '_fr';
        }

        url += '.' + image.rev + '.200.jpg';
    
        // Teste l'existence de l'image sur le repo distant
        if (UrlHelper.urlExists(url)) {
            return url;
        }

        return 'no-image.png';
    }
}
