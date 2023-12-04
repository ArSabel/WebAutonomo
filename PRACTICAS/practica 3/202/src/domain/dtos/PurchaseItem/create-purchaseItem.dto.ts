// DTO para crear un elemento de compra (PurchaseItem)
export class CreatePurchaseItemDto {
  private constructor(
    public readonly purchaseId: number,
    public readonly itemId: number,
    public readonly quantity: number
  ) {}

  static create(props: { [key: string]: any }): [string?, CreatePurchaseItemDto?] {
    const { purchaseId, itemId, quantity } = props;

    if (purchaseId == null || isNaN(purchaseId)) {
      return ['purchaseId must be a valid number', undefined];
    }

    if (itemId == null || isNaN(itemId)) {
      return ['itemId must be a valid number', undefined];
    }

    if (quantity == null || isNaN(quantity)) {
      return ['quantity must be a valid number', undefined];
    }

    return [undefined, new CreatePurchaseItemDto(purchaseId, itemId, quantity)];
  }
}
