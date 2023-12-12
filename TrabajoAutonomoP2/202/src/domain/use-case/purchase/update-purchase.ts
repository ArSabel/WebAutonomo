import { UpdatePurchaseDto } from '../../dtos';
import { PurchaseEntity } from '../../entities/purchase.entity';
import { PurchaseRepository } from '../../repositories/Purchase.repository';


export interface UpdatePurchaseUseCase {
  execute(dto: UpdatePurchaseDto): Promise<PurchaseEntity>
}


export class UpdatePurchase implements UpdatePurchaseUseCase {

  constructor(
    private readonly repository: PurchaseRepository,
  ) { }

  execute(dto: UpdatePurchaseDto): Promise<PurchaseEntity> {
    return this.repository.updateById(dto);
  }

}