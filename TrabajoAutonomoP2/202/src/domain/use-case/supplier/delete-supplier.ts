import { SupplierEntity } from '../../entities/supplier.entity';
import { SupplierRepository } from '../../repositories/Supplier.repository';


export interface DeleteSupplierUseCase {
  execute( id: number ): Promise<SupplierEntity>
}

export class DeleteSupplier implements DeleteSupplierUseCase {
  
  constructor(
    private readonly repository: SupplierRepository,
  ) {}
  
  execute( id: number ): Promise<SupplierEntity> {
    return this.repository.deleteById(id);
  }

}

