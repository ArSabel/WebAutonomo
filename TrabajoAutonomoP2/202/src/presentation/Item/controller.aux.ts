// DDD
import { Request, Response } from 'express';
import { CreateItemDto, UpdateItemDto } from '../../domain/dtos';
import { ItemRepository } from '../../domain/repositories/item.repository';


export class ItemController {

    //* DI
    constructor(
        private readonly itemRepository: ItemRepository,
    ) { }


    public getItem = async (req: Request, res: Response) => {
        const items = await this.itemRepository.getAll();
        return res.json(items);
    };

    public getItemById = async (req: Request, res: Response) => {
        const id = +req.params.id;

        try {
            const item = await this.itemRepository.findById(id);
            res.json(item);

        } catch (error) {
            res.status(400).json({ error });
        }

    };

    public createItem = async (req: Request, res: Response) => {
        const [error, createItemDto] = CreateItemDto.create(req.body);
        if (error) return res.status(400).json({ error });

        const item = await this.itemRepository.create(createItemDto!);
        res.json(item);

    };

    public updateItem = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateItemDto] = UpdateItemDto.create({ ...req.body, id });
        if (error) return res.status(400).json({ error });

        const updatedItem = await this.itemRepository.updateById(updateItemDto!);
        return res.json(updatedItem);

    };


    public deleteItem = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const deletedItem = await this.itemRepository.deleteById(id);
        res.json(deletedItem);

    };

}