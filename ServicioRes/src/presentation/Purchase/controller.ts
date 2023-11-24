import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreatePurchaseDto, UpdatePurchaseDto } from '../../domain/dtos';


export class PurchaseController {

  //* DI
  constructor() { }


  public getPurchases = async( req: Request, res: Response ) => {
    const purchases = await prisma.purchase.findMany();
    return res.json( purchases );
  };

  public getPurchaseById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const purchase = await prisma.purchase.findFirst({
      where: { id }
    });
    
    ( purchase )
      ? res.json( purchase )
      : res.status( 404 ).json( { error: `Purchase with id ${ id } not found` } );
  };

  public createPurchase = async( req: Request, res: Response ) => {
    
    const [error, createPurchaseDto] = CreatePurchaseDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const purchase = await prisma.purchase.create({
      data: createPurchaseDto!
    });

    res.json( purchase );

  };

  public updatePurchase = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updatePurchaseDto] = UpdatePurchaseDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const purchase = await prisma.purchase.findFirst({
      where: { id }
    });

    if ( !purchase ) return res.status( 404 ).json( { error: `Purchase with id ${ id } not found` } );

    const updatedPurchase = await prisma.purchase.update({
      where: { id },
      data: updatePurchaseDto!.values
    });
  
    res.json( updatedPurchase );

  }


  public deletePurchase = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const purchase = await prisma.purchase.findFirst({
      where: { id }
    });

    if ( !purchase ) return res.status(404).json({ error: `Purchase with id ${ id } not found` });

    const deleted = await prisma.purchase.delete({
      where: { id }
    });

    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Purchase with id ${ id } not found` });
    

  }
  
}