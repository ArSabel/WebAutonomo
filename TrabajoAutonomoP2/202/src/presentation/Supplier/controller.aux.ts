// DDD
import { Request, Response } from 'express';
import { CreateSupplierDto, UpdateSupplierDto } from '../../domain/dtos';
import { SupplierRepository } from '../../domain/repositories/Supplier.repository';


export class SupplierController {

    //* DI
    constructor(
        private readonly SupplierRepository: SupplierRepository,
    ) { }


    public getSupplier = async (req: Request, res: Response) => {
        const Suppliers = await this.SupplierRepository.getAll();
        return res.json(Suppliers);
    };

    public getSupplierById = async (req: Request, res: Response) => {
        const id = +req.params.id;

        try {
            const Supplier = await this.SupplierRepository.findById(id);
            res.json(Supplier);

        } catch (error) {
            res.status(400).json({ error });
        }

    };

    public createSupplier = async (req: Request, res: Response) => {
        const [error, createSupplierDto] = CreateSupplierDto.create(req.body);
        if (error) return res.status(400).json({ error });

        const Supplier = await this.SupplierRepository.create(createSupplierDto!);
        res.json(Supplier);

    };

    public updateSupplier = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateSupplierDto] = UpdateSupplierDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });

        const updatedSupplier = await this.SupplierRepository.updateById(updateSupplierDto!);
        return res.json(updatedSupplier);

    };


    public deleteSupplier = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const deletedSupplier = await this.SupplierRepository.deleteById(id);
        res.json(deletedSupplier);

    };

}