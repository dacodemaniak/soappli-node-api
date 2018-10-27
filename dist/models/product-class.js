"use strict";
/**
import { SoappliProductInterface } from "./../interfaces/soappli-product-interface";
 * @name ProductClass Classe métier pour les produits
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src\models\
 * @version 1.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ProductClass {
    constructor(datas) {
        console.log('Constructeur de la classe Produit');
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