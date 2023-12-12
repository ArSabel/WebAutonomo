import { Request, Response } from 'express';
import { CreatePurchaseItemDto, UpdatePurchaseItemDto } from '../../domain/dtos';
import { CreatePurchaseItem, DeletePurchaseItem, GetPurchaseItem, GetPurchaseItems, PurchaseItemRepository, UpdatePurchaseItem } from '../../domain';


export class PurchaseItemController {

  //* DI
  constructor(
    private readonly purchaseItemRepository: PurchaseItemRepository,
  ) { }


  public getPurchaseItems = ( req: Request, res: Response ) => {

    new GetPurchaseItems( this.purchaseItemRepository )
      .execute()
      .then( purchaseItems => res.json( purchaseItems) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getPurchaseItemById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetPurchaseItem( this.purchaseItemRepository )
      .execute( id )
      .then( purchaseItem => res.json( purchaseItem ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createPurchaseItem = ( req: Request, res: Response ) => {
    const [ error, createPurchaseItemDto ] = CreatePurchaseItemDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreatePurchaseItem( this.purchaseItemRepository )
      .execute( createPurchaseItemDto! )
      .then( purchaseItem => res.json( purchaseItem ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updatePurchaseItem = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatePurchaseItemDto ] = UpdatePurchaseItemDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdatePurchaseItem( this.purchaseItemRepository )
      .execute( updatePurchaseItemDto! )
      .then( purchaseItem => res.json( purchaseItem ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deletePurchaseItem = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeletePurchaseItem( this.purchaseItemRepository )
      .execute( id )
      .then( purchaseItem => res.json( purchaseItem ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

} 