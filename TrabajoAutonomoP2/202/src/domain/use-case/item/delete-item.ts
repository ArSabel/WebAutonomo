import { ItemEntity } from '../../entities/item.entity';
import { ItemRepository } from '../../repositories/item.repository';


export interface DeleteItemUseCase {
  execute( id: number ): Promise<ItemEntity>
}

export class DeleteItem implements DeleteItemUseCase {
  
  constructor(
    private readonly repository: ItemRepository,
  ) {}
  
  execute( id: number ): Promise<ItemEntity> {
    return this.repository.deleteById(id);
  }

}

