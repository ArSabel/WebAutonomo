import { CreateItemDto, UpdateItemDto } from "../dtos";
import { ItemEntity } from "../entities/item.entity";

export abstract class ItemRepository {
    abstract create(createItemDto: CreateItemDto): Promise<ItemEntity>;
    abstract getAll(): Promise<ItemEntity[]>;

    abstract findById(id: number): Promise<ItemEntity>;
    abstract updateById(updateItemDto: UpdateItemDto): Promise<ItemEntity>;
    abstract deleteById(id: number): Promise<ItemEntity>;

}