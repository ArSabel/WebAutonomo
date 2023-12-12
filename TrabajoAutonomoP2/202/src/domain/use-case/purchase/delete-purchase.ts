import { PurchaseEntity } from '../../entities/purchase.entity';
import { PurchaseRepository } from '../../repositories/Purchase.repository';

export interface DeletePurchaseUseCase {
  execute( id: number ): Promise<PurchaseEntity>
}

export class DeletePurchase implements DeletePurchaseUseCase {
  
  constructor(
    private readonly repository: PurchaseRepository,
  ) {}
  
  execute( id: number ): Promise<PurchaseEntity> {
    return this.repository.deleteById(id);
  }

}

