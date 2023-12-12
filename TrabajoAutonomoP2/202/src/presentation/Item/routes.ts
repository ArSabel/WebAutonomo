import { Router } from 'express';
import { ItemController } from './controller';
import { ItemDatasourceImpl } from '../../infrastructure/datasource/item.datasource.impl';
import { ItemRepositoryImpl } from '../../infrastructure/repositories/item.repository.impl';


export class ItemRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new ItemDatasourceImpl();
    const itemRepository = new ItemRepositoryImpl( datasource );
    const itemController = new ItemController(itemRepository);

    router.get('/', itemController.getItems );
    router.get('/:id', itemController.getItemById );
    
    router.post('/', itemController.createItem );
    router.put('/:id', itemController.updateItem );
    router.delete('/:id', itemController.deleteItem );


    return router;
  }


}

