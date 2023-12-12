import { PurchaseItemEntity } from '../../entities/purchaseItem.entity';
import { PurchaseItemRepository } from '../../repositories/PurchaseItem.repository';

export interface DeletePurchaseItemUseCase {
  execute( id: number ): Promise<PurchaseItemEntity>
}

export class DeletePurchaseItem implements DeletePurchaseItemUseCase {
  
  constructor(
    private readonly repository: PurchaseItemRepository,
  ) {}
  
  execute( id: number ): Promise<PurchaseItemEntity> {
    return this.repository.deleteById(id);
  }

}

