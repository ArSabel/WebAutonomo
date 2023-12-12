import { Router } from 'express';

import { ItemRoutes } from './Item/routes';
import { SupplierRoutes } from './Supplier/routes';
import { PurchaseRoutes } from './Purchase/routes';
import { PurchaseItemRoutes } from './PurchaseItem/routes';



export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/item', ItemRoutes.routes );
    router.use('/api/supplier', SupplierRoutes.routes );
    router.use('/api/purchase', PurchaseRoutes.routes );
    router.use('/api/purchaseItem', PurchaseItemRoutes.routes );


    return router;
  }


}

