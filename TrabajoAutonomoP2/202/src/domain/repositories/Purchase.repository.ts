import { CreatePurchaseDto, UpdatePurchaseDto } from "../dtos";
import { PurchaseEntity } from "../entities/purchase.entity";

export abstract class PurchaseRepository {
    abstract create(createPurchaseDto: CreatePurchaseDto): Promise<PurchaseEntity>;
    abstract getAll(): Promise<PurchaseEntity[]>;

    abstract findById(id: number): Promise<PurchaseEntity>;
    abstract updateById(updatePurchaseDto: UpdatePurchaseDto): Promise<PurchaseEntity>;
    abstract deleteById(id: number): Promise<PurchaseEntity>;

}