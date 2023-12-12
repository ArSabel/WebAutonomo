import { Router } from 'express';
import { SupplierController } from './controller';
import { SupplierDatasourceImpl } from '../../infrastructure/datasource/supplier.datasource.impl';
import { SupplierRepositoryImpl } from '../../infrastructure/repositories/supplier.repository.impl';


export class SupplierRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new SupplierDatasourceImpl();
    const supplierRepository = new SupplierRepositoryImpl( datasource );
    const supplierController = new SupplierController(supplierRepository);

    router.get('/', supplierController.getSuppliers );
    router.get('/:id', supplierController.getSupplierById );
    
    router.post('/', supplierController.createSupplier );
    router.put('/:id', supplierController.updateSupplier );
    router.delete('/:id', supplierController.deleteSupplier );


    return router;
  }


}

