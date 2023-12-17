import { Request, Response } from 'express'
import { prisma } from '../../data/postgres'
import { CreateFlightDto, UpdateFlightDto } from '../../domain/dtos'

export class FlightController {
  //* DI
  constructor() {}

  //metodo para obtener todo los elementos que estan en deleted=false
  public getActiveFlights = async (req: Request, res: Response) => {
    const activeFlights = await prisma.flight.findMany({
      where: {
        deleted: false,
      },
    })
    return res.json(activeFlights)
  }

  

  //metodo para obtener todo los elementos que estan en deleted=true
  public getDeletedFlight = async (req: Request, res: Response) => {
    const deletedFlights = await prisma.flight.findMany({
      where: {
        deleted: true,
      },
    })

    return res.json(deletedFlights)
  }

  //metodo para convertir deleted=false
  public softActivateFlight = async (req: Request, res: Response) => {
    const id = +req.params.id
    const functio = await prisma.flight.findFirst({
      where: { code: id },
    })

    if (!functio) {
      return res.status(404).json({ error: `Flight with code ${id} not found` })
    }

    const softActivateFlight = await prisma.flight.update({
      where: { id },
      data: {
        deleted: false,
      },
    })

    return res.json(softActivateFlight)
  }

  //metodo para obtener todos
  public getFlights = async (req: Request, res: Response) => {
    const functions = await prisma.flight.findMany()
    return res.json(functions)
  }

  //metodo para obtener uno porId
  public getFlightById = async (req: Request, res: Response) => {
    const id = +req.params.id

    if (isNaN(id)) {
      return res.status(400).json({ error: 'id must be a valid number' })
    }

    const flight = await prisma.flight.findFirst({
      where: { code: id },
    })

    flight
      ? res.json(flight)
      : res.status(404).json({ error: `flight with id ${id} not found` })
  }
////////////////////////////////////////////////////////////////////
///////////////////////////              ///////////////////////////
////////////////////////////////////////////////////////////////////
  //metodo para crear flight
  public createFlight = async (req: Request, res: Response) => {
    const [error, createFlightDto] = CreateFlightDto.create(req.body)
    if (error) return res.status(400).json({ error })

    const flightExists = await prisma.flight.findFirst({
      where: { code: createFlightDto!.code },
    })

    if (flightExists)
      return res.status(400).json({ error: 'Flight already exists' })

    const { ...rest } = createFlightDto!
    const flight = await prisma.flight.create({
      data: rest,
    })

    res.json(flight)
  }
  /////////////////////////////
  ///////////////////////////// 
  public softDeleteFlight = async (req: Request, res: Response) => {
    const id = +req.params.id
    const flight = await prisma.flight.findFirst({
      where: { code: id },
    })

    if (!flight) {
      return res.status(404).json({ error: `Flight with code ${id} not found` })
    }

    const softDeletedFlight = await prisma.flight.update({
      where: { code: id },
      data: {
        reason: req.body.reason,
        deleted: true,
      },
    })
    console.log(req.body)

    return res.json({
      message: 'Flight with code ' + id + ' has been soft deleted',
    })
  }

  //método para actualizar 'flight'
  public updateFlight = async (req: Request, res: Response) => {
    const id = +req.params.id

    const [error, updateFlightDto] = UpdateFlightDto.update({
      ...req.body,
      id,
    })

    if (error) return res.status(400).json({ error })

    const flight = await prisma.flight.findFirst({
      where: { id },
    })

    if (!flight)
      return res.status(404).json({ error: `flight with code ${id} not found` })

    const updatedFlight = await prisma.flight.update({
      where: { id },
      data: updateFlightDto!.values,
    })

    res.json(updatedFlight)
  }

  //metodo para eliminar de la bd
  public deleteFunction = async (req: Request, res: Response) => {
    const id = +req.params.id

    const functio = await prisma.flight.findFirst({
      where: { id },
    })

    if (!functio)
      return res.status(404).json({ error: `function with id ${id} not found` })

    const deleted = await prisma.flight.delete({
      where: { id },
    })

    deleted
      ? res.json(deleted)
      : res.status(400).json({ error: `function with id ${id} not found` })
  }
}
