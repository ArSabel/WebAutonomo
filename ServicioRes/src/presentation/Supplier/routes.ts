import { Router } from 'express';
import { SupplierController } from './controller';

export class SupplierRoutes {
  static get routes(): Router {
    const router = Router();
    const supplierController = new SupplierController();
    router.get('/', supplierController.getSupplier);
    router.get('/:id', supplierController.getSupplierById );
    router.post('/', supplierController.createSupplier );
    router.put('/:id', supplierController.updateSupplier);
    router.delete('/:id', supplierController.deleteSupplier );
    return router;
  }
}

