import { Router } from 'express';

import { ItemRoutes } from './Item/routes';


export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    router.use('/api/item', ItemRoutes.routes );
    
    return router;
  }


}

