import { Request, Response } from 'express';
import { CreatePurchaseDto, UpdatePurchaseDto } from '../../domain/dtos';
import { CreatePurchase, DeletePurchase, GetPurchase, GetPurchases, PurchaseRepository, UpdatePurchase } from '../../domain';


export class PurchaseController {

  //* DI
  constructor(
    private readonly purchaseRepository: PurchaseRepository,
  ) { }


  public getPurchases = ( req: Request, res: Response ) => {

    new GetPurchases( this.purchaseRepository )
      .execute()
      .then( purchases => res.json( purchases) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public getPurchaseById = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new GetPurchase( this.purchaseRepository )
      .execute( id )
      .then( purchase => res.json( purchase ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

  public createPurchase = ( req: Request, res: Response ) => {
    const [ error, createPurchaseDto ] = CreatePurchaseDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    new CreatePurchase( this.purchaseRepository )
      .execute( createPurchaseDto! )
      .then( purchase => res.json( purchase ) )
      .catch( error => res.status( 400 ).json( { error } ) );


  };

  public updatePurchase = ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updatePurchaseDto ] = UpdatePurchaseDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    new UpdatePurchase( this.purchaseRepository )
      .execute( updatePurchaseDto! )
      .then( purchase => res.json( purchase ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };


  public deletePurchase = ( req: Request, res: Response ) => {
    const id = +req.params.id;

    new DeletePurchase( this.purchaseRepository )
      .execute( id )
      .then( purchase => res.json( purchase ) )
      .catch( error => res.status( 400 ).json( { error } ) );

  };

} 