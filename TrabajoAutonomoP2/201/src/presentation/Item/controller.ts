import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateItemDto, UpdateItemDto } from '../../domain/dtos';


export class ItemsController {
  //* DI
  constructor() { }
  public getItems = async( req: Request, res: Response ) => {
    const Items = await prisma.item.findMany();
    return res.json( Items );
  };
  public getItemById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const Item = await prisma.item.findFirst({
      where: { id }
    });
    
    ( Item )
      ? res.json( Item )
      : res.status( 404 ).json( { error: `Item with id ${ id } not found` } );
  };
  public createItem = async( req: Request, res: Response ) => {
    
    const [error, createItemDto] = CreateItemDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const { ...rest } = createItemDto!;
    const Item = await prisma.item.create({
      data: rest
    });

    res.json( Item );

  };
  public updateItem = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateItemDto] = UpdateItemDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const Item = await prisma.item.findFirst({
      where: { id }
    });

    if ( !Item ) return res.status( 404 ).json( { error: `Item with id ${ id } not found` } );

    const updatedItem = await prisma.item.update({
      where: { id },
      data: updateItemDto!.values
    });
  
    res.json( updatedItem );

  }
  public deleteItem = async(req:Request, res: Response) => {
    const id = +req.params.id;

    const Item = await prisma.item.findFirst({
      where: { id }
    });

    if ( !Item ) return res.status(404).json({ error: `Item with id ${ id } not found` });

    const deleted = await prisma.item.delete({
      where: { id }
    });

    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Item with id ${ id } not found` });
    

  }
}