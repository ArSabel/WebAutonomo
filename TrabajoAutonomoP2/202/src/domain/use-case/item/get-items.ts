import { ItemEntity } from '../../entities/item.entity';
import { ItemRepository } from '../../repositories/item.repository';


export interface GetItemsUseCase {
  execute(): Promise<ItemEntity[]>
}


export class GetItems implements GetItemsUseCase {
  
  constructor(
    private readonly repository: ItemRepository,
  ) {}
  
  execute(): Promise<ItemEntity[]> {
    return this.repository.getAll();
  }

}

