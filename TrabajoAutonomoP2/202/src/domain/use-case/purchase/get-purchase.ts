import { PurchaseEntity } from '../../entities/purchase.entity';
import { PurchaseRepository } from '../../repositories/Purchase.repository';


export interface GetPurchaseUseCase {
  execute( id: number ): Promise<PurchaseEntity>
}


export class GetPurchase implements GetPurchaseUseCase {
  
  constructor(
    private readonly repository: PurchaseRepository,
  ) {}
  
  execute( id: number ): Promise<PurchaseEntity> {
    return this.repository.findById(id);
  }

}

