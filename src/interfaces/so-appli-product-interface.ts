import { ProductInterface } from './product-interface';
/**
 * @name SoAppliProductInterface définition des données pour les produits SoAppli
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package interfaces
 * @version 1.0.0
 */
export interface SoAppliProductInterface {
    ean: string;
    title: string;
    categories: string[];
    image: string;
    packaging: string[];
    stores: string[];
    brands: string[];
    countries: string;
    keywords: string[];
    quantity: number;
}
