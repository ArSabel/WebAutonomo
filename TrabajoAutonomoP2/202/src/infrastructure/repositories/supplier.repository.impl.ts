import { CreateSupplierDto, SupplierDatasource, SupplierEntity, SupplierRepository, UpdateSupplierDto } from '../../domain';


export class SupplierRepositoryImpl implements SupplierRepository {

  constructor(
    private readonly datasource: SupplierDatasource,
  ) { }


  create(createSupplierDto: CreateSupplierDto): Promise<SupplierEntity> {
    return this.datasource.create(createSupplierDto);
  }

  getAll(): Promise<SupplierEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<SupplierEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateSupplierDto: UpdateSupplierDto): Promise<SupplierEntity> {
    return this.datasource.updateById(updateSupplierDto);
  }

  deleteById(id: number): Promise<SupplierEntity> {
    return this.datasource.deleteById(id);
  }

}