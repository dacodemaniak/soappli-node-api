"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_helper_1 = require("./../helpers/string-helper");
const url_helper_1 = require("./../helpers/url-helper");
class ProductClass {
    constructor(datas) {
        console.log('Images : ' + JSON.stringify(datas.images));
        Object.assign(this, datas);
    }
    get() {
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
    getCategories() {
        if (this.categories && (this.categories !== '' || this.categories !== 'undefined')) {
            return string_helper_1.StringHelper.commaToArray(this.categories);
        }
        return this.categories_tags;
    }
    /**
    * Retourne l'URL de l'image associée au produit
    */
    image() {
        let url = 'https://static.openfoodfacts.org/images/products/';
        let useFr = true;
        console.log('Images : ' + JSON.stringify(this.images));
        let image = this.images.front_fr;
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
        if (url_helper_1.UrlHelper.urlExists(url)) {
            return url;
        }
        return 'no-image.png';
    }
}
exports.ProductClass = ProductClass;
//# sourceMappingURL=product-class.js.map