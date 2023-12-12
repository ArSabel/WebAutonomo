import { PurchaseEntity } from '../../entities/purchase.entity';
import { PurchaseRepository } from '../../repositories/Purchase.repository';


export interface GetPurchasesUseCase {
  execute(): Promise<PurchaseEntity[]>
}


export class GetPurchases implements GetPurchasesUseCase {
  
  constructor(
    private readonly repository: PurchaseRepository,
  ) {}
  
  execute(): Promise<PurchaseEntity[]> {
    return this.repository.getAll();
  }

}

