import { CreatePurchaseDto } from '../../dtos';
import { PurchaseEntity } from '../../entities/purchase.entity';
import { PurchaseRepository } from '../../repositories/Purchase.repository';


export interface CreatePurchaseUseCase {
    execute(dto: CreatePurchaseDto): Promise<PurchaseEntity>
}

// ctrl+ shift + l
export class CreatePurchase implements CreatePurchaseUseCase {

    constructor(
        private readonly repository: PurchaseRepository,
    ) { }

    execute(dto: CreatePurchaseDto): Promise<PurchaseEntity> {
        return this.repository.create(dto);
    }

}