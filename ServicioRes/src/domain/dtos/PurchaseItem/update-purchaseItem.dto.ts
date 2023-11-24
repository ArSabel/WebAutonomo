// DTO para actualizar un elemento de compra (PurchaseItem)
export class UpdatePurchaseItemDto {
  private constructor(
    public readonly id: number,
    public readonly purchaseId?: number,
    public readonly itemId?: number,
    public readonly quantity?: number
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.purchaseId !== undefined) returnObj.purchaseId = this.purchaseId;
    if (this.itemId !== undefined) returnObj.itemId = this.itemId;
    if (this.quantity !== undefined) returnObj.quantity = this.quantity;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdatePurchaseItemDto?] {
    const { id, purchaseId, itemId, quantity } = props;

    if (id == null || isNaN(id)) {
      return ['id must be a valid number', undefined];
    }

    return [undefined, new UpdatePurchaseItemDto(id, purchaseId, itemId, quantity)];
  }
}
