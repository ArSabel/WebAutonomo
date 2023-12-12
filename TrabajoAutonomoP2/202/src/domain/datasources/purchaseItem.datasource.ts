import { CreatePurchaseItemDto} from '../dtos/PurchaseItem/create-purchaseItem.dto';
import { UpdatePurchaseItemDto } from '../dtos/PurchaseItem/update-purchaseItem.dto';
import { PurchaseItemEntity } from '../entities/purchaseItem.entity';

export abstract class PurchaseItemDatasource {

  abstract create( createPurchaseItemDto: CreatePurchaseItemDto ): Promise<PurchaseItemEntity>;

  abstract getAll(): Promise<PurchaseItemEntity[]>;

  abstract findById( id: number ): Promise<PurchaseItemEntity>;
  abstract updateById( updatePurchaseItemDto: UpdatePurchaseItemDto ): Promise<PurchaseItemEntity>;
  abstract deleteById( id: number ): Promise<PurchaseItemEntity>;

}