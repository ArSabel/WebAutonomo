import {prisma} from '../../data/postgres';
import { SupplierDatasource, SupplierEntity} from '../../domain';
import {CreateSupplierDto, UpdateSupplierDto} from '../../domain/dtos';

export class SupplierDatasourceImpl implements SupplierDatasource{
    
    async create( createSupplierDto: CreateSupplierDto ): Promise<SupplierEntity> {
        const Supplier = await prisma.supplier.create({
          data: createSupplierDto!
        });
    
        return SupplierEntity.fromObject( Supplier );
      }
    
      async getAll(): Promise<SupplierEntity[]> {
        const Suppliers = await prisma.supplier.findMany();
        return Suppliers.map( user => SupplierEntity.fromObject(user) );
      }
    
      async findById( id: number ): Promise<SupplierEntity> {
        const Supplier = await prisma.supplier.findFirst({
          where: { id }
        });
    
        if ( !Supplier ) throw `Supplier with id ${ id } not found`;
        return SupplierEntity.fromObject(Supplier);
      }
    
      async updateById( updateSupplierDto: UpdateSupplierDto ): Promise<SupplierEntity> {
        await this.findById( updateSupplierDto.id );
        
        const updatedSupplier = await prisma.supplier.update({
          where: { id: updateSupplierDto.id },
          data: updateSupplierDto!.values
        });
    
        return SupplierEntity.fromObject(updatedSupplier);
      }
    
      async deleteById( id: number ): Promise<SupplierEntity> {
        await this.findById( id );
        const deleted = await prisma.supplier.delete({
          where: { id }
        });
    
        return SupplierEntity.fromObject( deleted );
      }
    
}