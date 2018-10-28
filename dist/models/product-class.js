"use strict";
/**
 * @name ProductClass Classe métier pour les produits
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src\models\
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ProductClass {
    constructor(datas) {
        Object.assign(this, datas);
    }
    get() {
        return {
            ean: this.id,
            title: this.title(),
            categories: this.categories(),
            image: this.image(),
            packaging: this.packaging(),
            stores: this.stores(),
            brands: this.brand(),
            countries: this.countries(),
            keywords: this._keywords,
            quantity: this.serving_quantity
        };
    }
    title() {
        if (this.product_name_fr !== '') {
            return this.product_name_fr;
        }
        else if (this.generic_name_fr !== '') {
            return this.generic_name_fr;
        }
        else if (this.product_name !== '') {
            return this.product_name;
        }
        else if (this.generic_name !== '') {
            return this.generic_name;
        }
        return 'Produit sans nom';
    }
    image() {
        return 'no-image.png';
    }
}
exports.ProductClass = ProductClass;
//# sourceMappingURL=product-class.js.map