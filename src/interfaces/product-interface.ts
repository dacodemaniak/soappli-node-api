import { ProductClass } from "models/product-class";

/**
 * @name ProductInterface Définition des propriétés d'un produit
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package src/interfaces
 * @version 1.0.0
 */
export interface ProductInterface extends Document {
    id: string;
    product_name_fr?: string;
    product_name?: string;
    generic_name_fr?: string;
    generic_name?: string;
    categories?: string[];
    categories_tags?: string[];
    packaging_tags?: string[];
    stores_tags?: string[];
    brand_tags?: string[];
    countries?: string;
    _keywords?: string[];
    serving_quantity: number;
}
