import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateSupplierDto, UpdateSupplierDto } from '../../domain/dtos';


export class SupplierController {
  //* DI
  constructor() { }
  public getSupplier = async( req: Request, res: Response ) => {
    const suppliers = await prisma.supplier.findMany();
    return res.json( suppliers );
  };




  public getSupplierById = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    //    localhost:3000/movies/1
    if ( isNaN( id ) ) return res.status( 400 ).json( { error: 'ID argument is not a number' } );

    const supplier = await prisma.supplier.findFirst({
      where: { id }
    });
    
    ( supplier )
      ? res.json( supplier )
      : res.status( 404 ).json( { error: `Supplier with id ${ id } not found` } );
  };




  public createSupplier = async( req: Request, res: Response ) => {
    
    const [error, createSupplierDto] = CreateSupplierDto.create(req.body);
    if ( error ) return res.status(400).json({ error });

    const supplier = await prisma.supplier.create({
      data: createSupplierDto!
    });

    res.json( supplier );

  };



  public updateSupplier = async( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [error, updateSupplierDto] = UpdateSupplierDto.create({...req.body, id});
    if ( error ) return res.status(400).json({ error });
    
    const supplier = await prisma.supplier.findFirst({
      where: { id }
    });
    if ( !supplier ) return res.status( 404 ).json( { error: `Movie with id ${ id } not found` } );
    const updatedSupplier = await prisma.supplier.update({
      where: { id },
      data: updateSupplierDto!.values
    });
    res.json( updatedSupplier );
  }


  public deleteSupplier = async(req:Request, res: Response) => {
    const id = +req.params.id;
    const supplier = await prisma.supplier.findFirst({
      where: { id }
    });

    if ( !supplier ) return res.status(404).json({ error: `Movie with id ${ id } not found` });
    const deleted = await prisma.supplier.delete({
      where: { id }
    });
    ( deleted ) 
      ? res.json( deleted )
      : res.status(400).json({ error: `Supplier with id ${ id } not found` });
  }
}