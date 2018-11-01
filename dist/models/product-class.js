"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_helper_1 = require("./../helpers/string-helper");
const url_helper_1 = require("./../helpers/url-helper");
class ProductClass {
    constructor(datas) {
        this.id = datas.id;
        this._id = datas._id;
        this.product_name_fr = datas.product_name_fr;
        this.product_name = datas.product_name;
        this.generic_name_fr = datas.generic_name_fr;
        this.generic_name = datas.generic_name;
        this.images = datas.images;
        this.categories = datas.categories;
        this.categories_tags = datas.categories_tags;
        this.packaging_tags = datas.packaging_tags;
        this.stores_tags = datas.stores_tags;
        this.brand_tags = datas.brand_tags;
        this.brands = datas.brands;
        this.countries = datas.countries;
        this._keywords = datas._keywords;
        this.serving_quantity = datas.serving_quantity;
    }
    get() {
        return new Promise((resolve) => {
            this.getImage().then((image) => {
                let soAppliProduct = {
                    ean: this.id,
                    title: this.title(),
                    categories: this.getCategories(),
                    image: image,
                    packaging: this.packaging_tags,
                    stores: this.stores_tags,
                    brands: this.getBrands(),
                    countries: this.countries,
                    keywords: this._keywords,
                    quantity: this.serving_quantity
                };
                resolve(soAppliProduct);
            });
        });
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
        if (this.categories && this.categories !== '') {
            return string_helper_1.StringHelper.commaToArray(this.categories);
        }
        return this.categories_tags;
    }
    getBrands() {
        if (this.brands && this.brands !== '') {
            return string_helper_1.StringHelper.commaToArray(this.brands);
        }
        return this.brand_tags;
    }
    /**
    * Retourne l'URL de l'image associée au produit
    */
    getImage() {
        return new Promise((resolve) => {
            let url = 'https://static.openfoodfacts.org/images/products/';
            let useFr = true;
            let image = this.images.front_fr;
            if (!image) {
                image = this.images.front;
                useFr = false;
            }
            // Découpe les parties du code EAN en fonction du type de codage
            if (this.id.length === 13) {
                url += this.id.substring(0, 3) + '/' +
                    this.id.substring(3, 6) + '/' +
                    this.id.substring(6, 9) + '/' +
                    this.id.substring(9, 13) + '/';
                url += 'front';
                if (useFr) {
                    url += '_fr';
                }
                url += '.' + image.rev + '.200.jpg';
                // Teste l'existence de l'image sur le repo distant
                url_helper_1.UrlHelper.urlExists(url).then((result) => {
                    if (result) {
                        resolve(url);
                    }
                    else {
                        resolve('no-image.png');
                    }
                });
            }
            else {
                resolve('no-image.png');
            }
        });
    }
}
exports.ProductClass = ProductClass;
//# sourceMappingURL=product-class.js.map