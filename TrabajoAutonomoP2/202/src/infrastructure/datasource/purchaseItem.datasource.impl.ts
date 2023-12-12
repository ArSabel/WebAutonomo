import { prisma } from "../../data/postgres";
import { PurchaseItemDatasource, PurchaseItemEntity } from "../../domain";
import {
  CreatePurchaseItemDto,
  UpdatePurchaseItemDto,
} from "../../domain/dtos";

export class PurchaseItemDatasourceImpl implements PurchaseItemDatasource {
  async create(
    createPurchaseItemDto: CreatePurchaseItemDto
  ): Promise<PurchaseItemEntity> {
    const PurchaseItem = await prisma.purchaseItem.create({
      data: createPurchaseItemDto!,
    });

    return PurchaseItemEntity.fromObject(PurchaseItem);
  }

  async getAll(): Promise<PurchaseItemEntity[]> {
    const PurchaseItems = await prisma.purchaseItem.findMany();
    return PurchaseItems.map((user) => PurchaseItemEntity.fromObject(user));
  }

  async findById(id: number): Promise<PurchaseItemEntity> {
    const PurchaseItem = await prisma.purchaseItem.findFirst({
      where: { id },
    });

    if (!PurchaseItem) throw `PurchaseItem with id ${id} not found`;
    return PurchaseItemEntity.fromObject(PurchaseItem);
  }

  async updateById(
    updatePurchaseItemDto: UpdatePurchaseItemDto
  ): Promise<PurchaseItemEntity> {
    await this.findById(updatePurchaseItemDto.id);

    const updatedPurchaseItem = await prisma.purchaseItem.update({
      where: { id: updatePurchaseItemDto.id },
      data: updatePurchaseItemDto!.values,
    });

    return PurchaseItemEntity.fromObject(updatedPurchaseItem);
  }

  async deleteById(id: number): Promise<PurchaseItemEntity> {
    await this.findById(id);
    const deleted = await prisma.purchaseItem.delete({
      where: { id },
    });

    return PurchaseItemEntity.fromObject(deleted);
  }
}
