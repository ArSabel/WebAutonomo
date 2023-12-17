import { Router } from 'express'

import { FunctionRoutes } from './flight/routes'

export class AppRoutes {
  static get routes(): Router {
    const router = Router()

    router.use('/api/flight', FunctionRoutes.routes)

    return router
  }
}
