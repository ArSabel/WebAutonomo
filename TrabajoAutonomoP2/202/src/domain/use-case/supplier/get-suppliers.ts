import { SupplierEntity } from '../../entities/supplier.entity';
import { SupplierRepository } from '../../repositories/Supplier.repository';


export interface GetSuppliersUseCase {
  execute(): Promise<SupplierEntity[]>
}


export class GetSuppliers implements GetSuppliersUseCase {
  
  constructor(
    private readonly repository: SupplierRepository,
  ) {}
  
  execute(): Promise<SupplierEntity[]> {
    return this.repository.getAll();
  }

}

