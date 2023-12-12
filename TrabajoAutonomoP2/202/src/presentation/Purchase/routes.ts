import { Router } from 'express';
import { PurchaseController } from './controller';
import { PurchaseDatasourceImpl } from '../../infrastructure/datasource/purchase.datasource.impl';
import { PurchaseRepositoryImpl } from '../../infrastructure/repositories/purchase.repository.impl';


export class PurchaseRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new PurchaseDatasourceImpl();
    const purchaseRepository = new PurchaseRepositoryImpl( datasource );
    const purchaseController = new PurchaseController(purchaseRepository);

    router.get('/', purchaseController.getPurchases );
    router.get('/:id', purchaseController.getPurchaseById );
    
    router.post('/', purchaseController.createPurchase );
    router.put('/:id', purchaseController.updatePurchase );
    router.delete('/:id', purchaseController.deletePurchase );


    return router;
  }


}

