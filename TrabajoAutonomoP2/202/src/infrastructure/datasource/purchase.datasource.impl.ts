import {prisma} from '../../data/postgres';
import { PurchaseDatasource, PurchaseEntity} from '../../domain';
import {CreatePurchaseDto, UpdatePurchaseDto} from '../../domain/dtos';

export class PurchaseDatasourceImpl implements PurchaseDatasource{
    
    async create( createPurchaseDto: CreatePurchaseDto ): Promise<PurchaseEntity> {
        const Purchase = await prisma.purchase.create({
          data: createPurchaseDto!
        });
    
        return PurchaseEntity.fromObject( Purchase );
      }
    
      async getAll(): Promise<PurchaseEntity[]> {
        const Purchases = await prisma.purchase.findMany();
        return Purchases.map( user => PurchaseEntity.fromObject(user) );
      }
    
      async findById( id: number ): Promise<PurchaseEntity> {
        const Purchase = await prisma.purchase.findFirst({
          where: { id }
        });
    
        if ( !Purchase ) throw `Purchase with id ${ id } not found`;
        return PurchaseEntity.fromObject(Purchase);
      }
    
      async updateById( updatePurchaseDto: UpdatePurchaseDto ): Promise<PurchaseEntity> {
        await this.findById( updatePurchaseDto.id );
        
        const updatedPurchase = await prisma.purchase.update({
          where: { id: updatePurchaseDto.id },
          data: updatePurchaseDto!.values
        });
    
        return PurchaseEntity.fromObject(updatedPurchase);
      }
    
      async deleteById( id: number ): Promise<PurchaseEntity> {
        await this.findById( id );
        const deleted = await prisma.purchase.delete({
          where: { id }
        });
    
        return PurchaseEntity.fromObject( deleted );
      }
    
}