import { UpdateItemDto } from '../../dtos';
import { ItemEntity } from '../../entities/item.entity';
import { ItemRepository } from '../../repositories/item.repository';


export interface UpdateItemUseCase {
  execute(dto: UpdateItemDto): Promise<ItemEntity>
}


export class UpdateItem implements UpdateItemUseCase {

  constructor(
    private readonly repository: ItemRepository,
  ) { }

  execute(dto: UpdateItemDto): Promise<ItemEntity> {
    return this.repository.updateById(dto);
  }

}