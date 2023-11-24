import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateItemDto, UpdateItemDto } from '../../domain/dtos';


export class ItemController {
  //* DI
  constructor() { }
  public getItem = async( req: Request, res: Response ) => {
    const items = await prisma.item.findMany();
    return res.json( items );
  };




  public getItemById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const item = await prisma.item.findFirst({
      where: { id }
    });
    
    ( item )
      ? res.json( item )
      : res.status( 404 ).json( { error: `Item with id ${ id } not found` } );
  };




  public createItem = async( req: Request, res: Response ) => {
    
    const [error, createItemDto] = CreateItemDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const item = await prisma.item.create({
      data: createItemDto!
    });

    res.json( item );

  };



  public updateItem = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateItemDto] = UpdateItemDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const item = await prisma.item.findFirst({
      where: { id }
    });
    if ( !item ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedItem = await prisma.item.update({
      where: { id },
      data: updateItemDto!.values
    });
    res.json( updatedItem );
  }


  public deleteItem = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const item = await prisma.item.findFirst({
      where: { id }
    });

    if ( !item ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.item.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `item with id ${ id } not found` });
  }
}