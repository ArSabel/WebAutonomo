import { CreateSupplierDto, UpdateSupplierDto } from "../dtos";
import { SupplierEntity } from "../entities/supplier.entity";

export abstract class SupplierRepository {
    abstract create(createSupplierDto: CreateSupplierDto): Promise<SupplierEntity>;
    abstract getAll(): Promise<SupplierEntity[]>;

    abstract findById(id: number): Promise<SupplierEntity>;
    abstract updateById(updateSupplierDto: UpdateSupplierDto): Promise<SupplierEntity>;
    abstract deleteById(id: number): Promise<SupplierEntity>;

}