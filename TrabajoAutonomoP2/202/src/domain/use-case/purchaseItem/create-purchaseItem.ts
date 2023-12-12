import { CreatePurchaseItemDto } from '../../dtos';
import { PurchaseItemEntity } from '../../entities/purchaseItem.entity';
import { PurchaseItemRepository } from '../../repositories/PurchaseItem.repository';


export interface CreatePurchaseItemUseCase {
    execute(dto: CreatePurchaseItemDto): Promise<PurchaseItemEntity>
}

// ctrl+ shift + l
export class CreatePurchaseItem implements CreatePurchaseItemUseCase {

    constructor(
        private readonly repository: PurchaseItemRepository,
    ) { }

    execute(dto: CreatePurchaseItemDto): Promise<PurchaseItemEntity> {
        return this.repository.create(dto);
    }

}