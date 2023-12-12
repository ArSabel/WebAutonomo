// DDD
import { Request, Response } from 'express';
import { CreatePurchaseDto, UpdatePurchaseDto } from '../../domain/dtos';
import { PurchaseRepository } from '../../domain/repositories/Purchase.repository';


export class PurchaseController {

    //* DI
    constructor(
        private readonly purchaseRepository: PurchaseRepository,
    ) { }


    public getPurchase = async (req: Request, res: Response) => {
        const purchases = await this.purchaseRepository.getAll();
        return res.json(purchases);
    };

    public getPurchaseById = async (req: Request, res: Response) => {
        const id = +req.params.id;

        try {
            const purchase = await this.purchaseRepository.findById(id);
            res.json(purchase);

        } catch (error) {
            res.status(400).json({ error });
        }

    };

    public createPurchase = async (req: Request, res: Response) => {
        const [error, createPurchaseDto] = CreatePurchaseDto.create(req.body);
        if (error) return res.status(400).json({ error });

        const purchase = await this.purchaseRepository.create(createPurchaseDto!);
        res.json(purchase);

    };

    public updatePurchase = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updatePurchaseDto] = UpdatePurchaseDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });

        const updatedPurchase = await this.purchaseRepository.updateById(updatePurchaseDto!);
        return res.json(updatedPurchase);

    };


    public deletePurchase = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const deletedPurchase = await this.purchaseRepository.deleteById(id);
        res.json(deletedPurchase);

    };

}