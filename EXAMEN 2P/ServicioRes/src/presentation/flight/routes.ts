import { Router } from 'express'
import { FlightController } from './controller'

export class FunctionRoutes {
  static get routes(): Router {
    const router = Router()

    const flightsController = new FlightController()
    //ruta para mostrar los elementos deleted=false
    router.get('/false', flightsController.getActiveFlights)

    //ruta que convierte los elementos en true
    router.patch('/true/:id', flightsController.softDeleteFlight)

    //ruta para mostrar los elementos deleted=true
    router.get('/true', flightsController.getDeletedFlight)

    //ruta que convierte los elementos en false
    router.patch('/false/:id', flightsController.softActivateFlight)

    //obtener todo
    router.get('/', flightsController.getFlights)

    //buscar por id
    router.get('/:id', flightsController.getFlightById)

    //crear
    router.post('/', flightsController.createFlight)

    //actualizacion de todo
    router.patch('/:id', flightsController.updateFlight)

    //eliminacion fisica
    router.delete('/:id', flightsController.deleteFunction)

    return router
  }
}
