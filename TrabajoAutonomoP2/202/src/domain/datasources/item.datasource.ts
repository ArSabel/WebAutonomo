import { CreateItemDto} from '../dtos/Item/create-item.dto';
import { UpdateItemDto } from '../dtos/Item/update-item.dto';
import { ItemEntity } from '../entities/item.entity';

export abstract class ItemDatasource {

  abstract create( createItemDto: CreateItemDto ): Promise<ItemEntity>;

  abstract getAll(): Promise<ItemEntity[]>;

  abstract findById( id: number ): Promise<ItemEntity>;
  abstract updateById( updateItemDto: UpdateItemDto ): Promise<ItemEntity>;
  abstract deleteById( id: number ): Promise<ItemEntity>;

}