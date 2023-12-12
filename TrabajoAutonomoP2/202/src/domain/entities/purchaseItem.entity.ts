export class PurchaseItemEntity {

    private constructor(
      public id: number,
      public readonly purchaseId: number,
      public readonly itemId: number,
      public readonly quantity: number
    ) { }
  
    public static fromObject(object: { [key: string]: any }): PurchaseItemEntity {
      const {id, purchaseId, itemId, quantity } = object;
      if (!purchaseId) throw 'purchaseId is required';
      if (!itemId) throw 'itemId is required';
      if (!quantity) throw 'quantity is required';
  
      return new PurchaseItemEntity(id, purchaseId, itemId, quantity)
    }
  
  }