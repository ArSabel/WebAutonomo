import { CreateSupplierDto } from '../../dtos';
import { SupplierEntity } from '../../entities/supplier.entity';
import { SupplierRepository } from '../../repositories/Supplier.repository';


export interface CreateSupplierUseCase {
    execute(dto: CreateSupplierDto): Promise<SupplierEntity>
}

// ctrl+ shift + l
export class CreateSupplier implements CreateSupplierUseCase {

    constructor(
        private readonly repository: SupplierRepository,
    ) { }

    execute(dto: CreateSupplierDto): Promise<SupplierEntity> {
        return this.repository.create(dto);
    }

}