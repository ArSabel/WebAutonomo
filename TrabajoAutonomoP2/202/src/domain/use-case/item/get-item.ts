import { ItemEntity } from '../../entities/item.entity';
import { ItemRepository } from '../../repositories/item.repository';


export interface GetItemUseCase {
  execute( id: number ): Promise<ItemEntity>
}


export class GetItem implements GetItemUseCase {
  
  constructor(
    private readonly repository: ItemRepository,
  ) {}
  
  execute( id: number ): Promise<ItemEntity> {
    return this.repository.findById(id);
  }

}

