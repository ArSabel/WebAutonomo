import { CreatePurchaseDto, PurchaseDatasource, PurchaseEntity, PurchaseRepository, UpdatePurchaseDto } from '../../domain';


export class PurchaseRepositoryImpl implements PurchaseRepository {

  constructor(
    private readonly datasource: PurchaseDatasource,
  ) { }


  create(createPurchaseDto: CreatePurchaseDto): Promise<PurchaseEntity> {
    return this.datasource.create(createPurchaseDto);
  }

  getAll(): Promise<PurchaseEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<PurchaseEntity> {
    return this.datasource.findById(id);
  }

  updateById(updatePurchaseDto: UpdatePurchaseDto): Promise<PurchaseEntity> {
    return this.datasource.updateById(updatePurchaseDto);
  }

  deleteById(id: number): Promise<PurchaseEntity> {
    return this.datasource.deleteById(id);
  }

}