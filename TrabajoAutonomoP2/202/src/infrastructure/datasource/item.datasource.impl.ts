import {prisma} from '../../data/postgres';
import { ItemDatasource, ItemEntity} from '../../domain';
import {CreateItemDto, UpdateItemDto} from '../../domain/dtos';

export class ItemDatasourceImpl implements ItemDatasource{
    
    async create( createItemDto: CreateItemDto ): Promise<ItemEntity> {
        const item = await prisma.item.create({
          data: createItemDto!
        });
    
        return ItemEntity.fromObject( item );
      }
    
      async getAll(): Promise<ItemEntity[]> {
        const items = await prisma.item.findMany();
        return items.map( user => ItemEntity.fromObject(user) );
      }
    
      async findById( id: number ): Promise<ItemEntity> {
        const item = await prisma.item.findFirst({
          where: { id }
        });
    
        if ( !item ) throw `Item with id ${ id } not found`;
        return ItemEntity.fromObject(item);
      }
    
      async updateById( updateItemDto: UpdateItemDto ): Promise<ItemEntity> {
        await this.findById( updateItemDto.id );
        
        const updatedItem = await prisma.item.update({
          where: { id: updateItemDto.id },
          data: updateItemDto!.values
        });
    
        return ItemEntity.fromObject(updatedItem);
      }
    
      async deleteById( id: number ): Promise<ItemEntity> {
        await this.findById( id );
        const deleted = await prisma.item.delete({
          where: { id }
        });
    
        return ItemEntity.fromObject( deleted );
      }
    
}