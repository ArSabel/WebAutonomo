import { Router } from 'express';
import { ItemsController } from './controller';


export class ItemRoutes {


  static get routes(): Router {

    const router = Router();

    const itemController = new ItemsController();

    router.get('/', itemController.getItems );
    router.get('/:id', itemController.getItemById );
    
    router.post('/', itemController.createItem );
    router.put('/:id', itemController.updateItem );
    router.delete('/:id', itemController.deleteItem );


    return router;
  }


}

