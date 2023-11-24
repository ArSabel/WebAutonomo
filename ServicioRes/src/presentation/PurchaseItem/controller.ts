import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePurchaseItemDto, UpdatePurchaseItemDto } from '../../domain/dtos';


export class PurchaseItemController {
  //* DI
  constructor() { }
  public getPurchaseItem = async( req: Request, res: Response ) => {
    const purchaseItems = await prisma.purchaseItem.findMany();
    return res.json( purchaseItems );
  };




  public getPurchaseItemById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const purchaseItem = await prisma.purchaseItem.findFirst({
      where: { id }
    });
    
    ( purchaseItem)
      ? res.json( purchaseItem )
      : res.status( 404 ).json( { error: `PurchaseItem with id ${ id } not found` } );
  };




  public createPurchaseItem = async( req: Request, res: Response ) => {
    
    const [error, createPurchaseItemDto] = CreatePurchaseItemDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const purchaseItem = await prisma.purchaseItem.create({
      data: createPurchaseItemDto!
    });

    res.json( purchaseItem );

  };



  public updatePurchaseItem = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updatePurchaseItemDto] = UpdatePurchaseItemDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const purchaseItem = await prisma.purchaseItem.findFirst({
      where: { id }
    });
    if ( !purchaseItem) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedPurchaseItem = await prisma.purchaseItem.update({
      where: { id },
      data: updatePurchaseItemDto!.values
    });
    res.json( updatedPurchaseItem );
  }


  public deletePurchaseItem = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const purchaseItem = await prisma.purchaseItem.findFirst({
      where: { id }
    });

    if ( !purchaseItem ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.purchaseItem.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `PurchaseItem with id ${ id } not found` });
  }
}