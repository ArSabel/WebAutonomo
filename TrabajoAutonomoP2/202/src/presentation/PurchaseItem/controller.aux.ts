// DDD
import { Request, Response } from 'express';
import { CreatePurchaseItemDto, UpdatePurchaseItemDto } from '../../domain/dtos';
import { PurchaseItemRepository } from '../../domain/repositories/PurchaseItem.repository';


export class PurchaseItemController {

    //* DI
    constructor(
        private readonly purchaseItemRepository: PurchaseItemRepository,
    ) { }


    public getPurchaseItem = async (req: Request, res: Response) => {
        const purchaseItems = await this.purchaseItemRepository.getAll();
        return res.json(purchaseItems);
    };

    public getPurchaseItemById = async (req: Request, res: Response) => {
        const id = +req.params.id;

        try {
            const purchaseItem = await this.purchaseItemRepository.findById(id);
            res.json(purchaseItem);

        } catch (error) {
            res.status(400).json({ error });
        }

    };

    public createPurchaseItem = async (req: Request, res: Response) => {
        const [error, createPurchaseItemDto] = CreatePurchaseItemDto.create(req.body);
        if (error) return res.status(400).json({ error });

        const purchaseItem = await this.purchaseItemRepository.create(createPurchaseItemDto!);
        res.json(purchaseItem);

    };

    public updatePurchaseItem = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updatePurchaseItemDto] = UpdatePurchaseItemDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });

        const updatedPurchaseItem = await this.purchaseItemRepository.updateById(updatePurchaseItemDto!);
        return res.json(updatedPurchaseItem);

    };


    public deletePurchaseItem = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const deletedPurchaseItem = await this.purchaseItemRepository.deleteById(id);
        res.json(deletedPurchaseItem);

    };

}