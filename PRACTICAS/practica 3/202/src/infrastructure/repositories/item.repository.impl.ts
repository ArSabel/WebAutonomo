import { CreateItemDto, ItemDatasource, ItemEntity, ItemRepository, UpdateItemDto } from '../../domain';


export class ItemRepositoryImpl implements ItemRepository {

  constructor(
    private readonly datasource: ItemDatasource,
  ) { }


  create(createItemDto: CreateItemDto): Promise<ItemEntity> {
    return this.datasource.create(createItemDto);
  }

  getAll(): Promise<ItemEntity[]> {
    return this.datasource.getAll();
  }

  findById(id: number): Promise<ItemEntity> {
    return this.datasource.findById(id);
  }

  updateById(updateItemDto: UpdateItemDto): Promise<ItemEntity> {
    return this.datasource.updateById(updateItemDto);
  }

  deleteById(id: number): Promise<ItemEntity> {
    return this.datasource.deleteById(id);
  }

}