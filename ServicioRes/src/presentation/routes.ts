import { Router } from 'express';

import { PurchaseRoutes,  } from './Purchase/routes';

import {  ItemRoutes  } from './Item/routes';
import {  PurchaseItemRoutes  } from './PurchaseItem/routes';

import { SupplierRoutes  } from './Supplier/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/purchase', PurchaseRoutes.routes );
    router.use('/api/supplier', SupplierRoutes.routes );
    router.use('/api/item', ItemRoutes.routes );
    router.use('/api/purchaseItem', PurchaseItemRoutes.routes );
  

    return router;
  }


}

