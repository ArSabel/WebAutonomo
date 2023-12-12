import { CreateItemDto } from '../../dtos';
import { ItemEntity } from '../../entities/item.entity';
import { ItemRepository } from '../../repositories/item.repository';


export interface CreateItemUseCase {
    execute(dto: CreateItemDto): Promise<ItemEntity>
}

// ctrl+ shift + l
export class CreateItem implements CreateItemUseCase {

    constructor(
        private readonly repository: ItemRepository,
    ) { }

    execute(dto: CreateItemDto): Promise<ItemEntity> {
        return this.repository.create(dto);
    }

}