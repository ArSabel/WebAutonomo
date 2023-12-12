import { CreateSupplierDto} from '../dtos/Supplier/create-supplier.dto';
import { UpdateSupplierDto } from '../dtos/Supplier/update-supplier.dto';
import { SupplierEntity } from '../entities/supplier.entity';

export abstract class SupplierDatasource {

  abstract create( createSupplierDto: CreateSupplierDto ): Promise<SupplierEntity>;

  abstract getAll(): Promise<SupplierEntity[]>;

  abstract findById( id: number ): Promise<SupplierEntity>;
  abstract updateById( updateSupplierDto: UpdateSupplierDto ): Promise<SupplierEntity>;
  abstract deleteById( id: number ): Promise<SupplierEntity>;

}