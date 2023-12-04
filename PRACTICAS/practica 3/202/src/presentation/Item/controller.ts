import { Request, Response } from 'express';
import { CreateItemDto, UpdateItemDto } from '../../domain/dtos';
import { CreateItem, DeleteItem, GetItem, GetItems, ItemRepository, UpdateItem } from '../../domain';


export class ItemController {

  //* DI
  constructor(
    private readonly itemRepository: ItemRepository,
  ) { }


  public getItems = ( req: Request, res: Response ) => {

    new GetItems( this.itemRepository )
      .execute()
      .then( items => res.json( items) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getItemById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetItem( this.itemRepository )
      .execute( id )
      .then( item => res.json( item ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createItem = ( req: Request, res: Response ) => {
    const [ error, createItemDto ] = CreateItemDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreateItem( this.itemRepository )
      .execute( createItemDto! )
      .then( item => res.json( item ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updateItem = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateItemDto ] = UpdateItemDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdateItem( this.itemRepository )
      .execute( updateItemDto! )
      .then( item => res.json( item ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deleteItem = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeleteItem( this.itemRepository )
      .execute( id )
      .then( item => res.json( item ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };



} 