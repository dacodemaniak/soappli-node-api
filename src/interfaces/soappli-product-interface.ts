
import { Document } from 'mongoose';
import { ProductInterface } from './product-interface';
import { ProductClass } from 'models/product-class';

export interface SoappliProductInterface extends ProductInterface, Document, ProductClass {}
