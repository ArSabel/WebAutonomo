import { CreatePurchaseDto} from '../dtos/Purchase/create-purchase.dto';
import { UpdatePurchaseDto } from '../dtos/Purchase/update-purchase.dto';
import { PurchaseEntity } from '../entities/purchase.entity';

export abstract class PurchaseDatasource {

  abstract create( createPurchaseDto: CreatePurchaseDto ): Promise<PurchaseEntity>;

  abstract getAll(): Promise<PurchaseEntity[]>;

  abstract findById( id: number ): Promise<PurchaseEntity>;
  abstract updateById( updatePurchaseDto: UpdatePurchaseDto ): Promise<PurchaseEntity>;
  abstract deleteById( id: number ): Promise<PurchaseEntity>;

}