import { Request, Response } from "express";
import { CreateSupplierDto, UpdateSupplierDto } from "../../domain/dtos";
import {
  CreateSupplier,
  DeleteSupplier,
  GetSupplier,
  GetSuppliers,
  SupplierRepository,
  UpdateSupplier,
} from "../../domain";

export class SupplierController {
  //* DI
  constructor(private readonly supplierRepository: SupplierRepository) {}

  public getSuppliers = (req: Request, res: Response) => {
    new GetSuppliers(this.supplierRepository)
      .execute()
      .then((Suppliers) => res.json(Suppliers))
      .catch((error) => res.status(400).json({ error }));
  };

  public getSupplierById = (req: Request, res: Response) => {
    const id = +req.params.id;

    new GetSupplier(this.supplierRepository)
      .execute(id)
      .then((Supplier) => res.json(Supplier))
      .catch((error) => res.status(400).json({ error }));
  };

  public createSupplier = (req: Request, res: Response) => {
    const [error, createSupplierDto] = CreateSupplierDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateSupplier(this.supplierRepository)
      .execute(createSupplierDto!)
      .then((Supplier) => res.json(Supplier))
      .catch((error) => res.status(400).json({ error }));
  };

  public updateSupplier = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateSupplierDto] = UpdateSupplierDto.create({
      ...req.body,
      id,
    });
    if (error) return res.status(400).json({ error });

    new UpdateSupplier(this.supplierRepository)
      .execute(updateSupplierDto!)
      .then((Supplier) => res.json(Supplier))
      .catch((error) => res.status(400).json({ error }));
  };

  public deleteSupplier = (req: Request, res: Response) => {
    const id = +req.params.id;

    new DeleteSupplier(this.supplierRepository)
      .execute(id)
      .then((Supplier) => res.json(Supplier))
      .catch((error) => res.status(400).json({ error }));
  };
}
