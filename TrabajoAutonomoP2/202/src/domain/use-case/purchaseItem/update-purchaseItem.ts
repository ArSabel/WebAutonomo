import { UpdatePurchaseItemDto } from '../../dtos';
import { PurchaseItemEntity } from '../../entities/purchaseItem.entity';
import { PurchaseItemRepository } from '../../repositories/PurchaseItem.repository';


export interface UpdatePurchaseItemUseCase {
  execute(dto: UpdatePurchaseItemDto): Promise<PurchaseItemEntity>
}


export class UpdatePurchaseItem implements UpdatePurchaseItemUseCase {

  constructor(
    private readonly repository: PurchaseItemRepository,
  ) { }

  execute(dto: UpdatePurchaseItemDto): Promise<PurchaseItemEntity> {
    return this.repository.updateById(dto);
  }

}