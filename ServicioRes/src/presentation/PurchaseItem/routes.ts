import { Router } from 'express';
import { PurchaseItemController } from './controller';

export class PurchaseItemRoutes {
  static get routes(): Router {
    const router = Router();
    const purchaseItemController = new PurchaseItemController();
    router.get('/', purchaseItemController.getPurchaseItem);
    router.get('/:id', purchaseItemController.getPurchaseItemById );
    router.post('/', purchaseItemController.createPurchaseItem );
    router.put('/:id', purchaseItemController.updatePurchaseItem );
    router.delete('/:id', purchaseItemController.deletePurchaseItem );
    return router;
  }
}

