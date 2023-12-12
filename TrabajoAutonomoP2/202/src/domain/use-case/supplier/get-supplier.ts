import { SupplierEntity } from '../../entities/supplier.entity';
import { SupplierRepository } from '../../repositories/Supplier.repository';


export interface GetSupplierUseCase {
  execute( id: number ): Promise<SupplierEntity>
}


export class GetSupplier implements GetSupplierUseCase {
  
  constructor(
    private readonly repository: SupplierRepository,
  ) {}
  
  execute( id: number ): Promise<SupplierEntity> {
    return this.repository.findById(id);
  }

}

