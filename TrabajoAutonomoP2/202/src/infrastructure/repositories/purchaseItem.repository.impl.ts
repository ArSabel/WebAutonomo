import { CreatePurchaseItemDto, PurchaseItemDatasource, PurchaseItemEntity, PurchaseItemRepository, UpdatePurchaseItemDto } from '../../domain';


export class PurchaseItemRepositoryImpl implements PurchaseItemRepository {

  constructor(
    private readonly datasource: PurchaseItemDatasource,
  ) { }


  create(createPurchaseItemDto: CreatePurchaseItemDto): Promise<PurchaseItemEntity> {
    return this.datasource.create(createPurchaseItemDto);
  }

  getAll(): Promise<PurchaseItemEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<PurchaseItemEntity> {
    return this.datasource.findById(id);
  }

  updateById(updatePurchaseItemDto: UpdatePurchaseItemDto): Promise<PurchaseItemEntity> {
    return this.datasource.updateById(updatePurchaseItemDto);
  }

  deleteById(id: number): Promise<PurchaseItemEntity> {
    return this.datasource.deleteById(id);
  }

}