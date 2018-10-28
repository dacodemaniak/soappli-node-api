/**
 * @name SoAppliProductInterface définition des données pour les produits SoAppli
 * @author IDea Factory (dev-team@ideafactory.fr) - Oct. 2018
 * @package interfaces
 * @version 1.0.0
 */
export interface SoAppliProductInterface {
    ean: String;
    title: String;
    categories: String[];
    image: String;
    packaging: String[];
    stores: String[];
    brands: String[];
    countries: String;
    keywords: String[];
    quantity: number;
}
