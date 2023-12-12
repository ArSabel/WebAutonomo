import { PurchaseItemEntity } from '../../entities/purchaseItem.entity';
import { PurchaseItemRepository } from '../../repositories/PurchaseItem.repository';


export interface GetPurchaseItemUseCase {
  execute( id: number ): Promise<PurchaseItemEntity>
}


export class GetPurchaseItem implements GetPurchaseItemUseCase {
  
  constructor(
    private readonly repository: PurchaseItemRepository,
  ) {}
  
  execute( id: number ): Promise<PurchaseItemEntity> {
    return this.repository.findById(id);
  }

}

