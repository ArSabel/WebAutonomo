import { Router } from 'express';
import { PurchaseItemController } from './controller';
import { PurchaseItemDatasourceImpl } from '../../infrastructure/datasource/purchaseItem.datasource.impl';
import { PurchaseItemRepositoryImpl } from '../../infrastructure/repositories/purchaseItem.repository.impl';


export class PurchaseItemRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new PurchaseItemDatasourceImpl();
    const purchaseItemRepository = new PurchaseItemRepositoryImpl( datasource );
    const purchaseItemController = new PurchaseItemController(purchaseItemRepository);

    router.get('/', purchaseItemController.getPurchaseItems );
    router.get('/:id', purchaseItemController.getPurchaseItemById );
    
    router.post('/', purchaseItemController.createPurchaseItem );
    router.put('/:id', purchaseItemController.updatePurchaseItem );
    router.delete('/:id', purchaseItemController.deletePurchaseItem );


    return router;
  }


}

