import { CreatePurchaseItemDto, UpdatePurchaseItemDto } from "../dtos";
import { PurchaseItemEntity } from "../entities/purchaseItem.entity";

export abstract class PurchaseItemRepository {
    abstract create(createPurchaseItemDto: CreatePurchaseItemDto): Promise<PurchaseItemEntity>;
    abstract getAll(): Promise<PurchaseItemEntity[]>;

    abstract findById(id: number): Promise<PurchaseItemEntity>;
    abstract updateById(updatePurchaseDto: UpdatePurchaseItemDto): Promise<PurchaseItemEntity>;
    abstract deleteById(id: number): Promise<PurchaseItemEntity>;

}