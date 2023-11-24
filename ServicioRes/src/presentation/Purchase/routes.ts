import { Router } from 'express';
import { PurchaseController } from './controller';


export class PurchaseRoutes {


  static get routes(): Router {

    const router = Router();

    const purchaseController = new PurchaseController();

    router.get('/', purchaseController.getPurchases );
    router.get('/:id', purchaseController.getPurchaseById );
    
    router.post('/', purchaseController.createPurchase );
    router.put('/:id', purchaseController.updatePurchase );
    router.delete('/:id', purchaseController.deletePurchase );


    return router;
  }


}

