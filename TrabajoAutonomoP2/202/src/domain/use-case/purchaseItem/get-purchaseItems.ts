import { PurchaseItemEntity } from '../../entities/purchaseItem.entity';
import { PurchaseItemRepository } from '../../repositories/PurchaseItem.repository';


export interface GetPurchaseItemsUseCase {
  execute(): Promise<PurchaseItemEntity[]>
}


export class GetPurchaseItems implements GetPurchaseItemsUseCase {
  
  constructor(
    private readonly repository: PurchaseItemRepository,
  ) {}
  
  execute(): Promise<PurchaseItemEntity[]> {
    return this.repository.getAll();
  }

}

