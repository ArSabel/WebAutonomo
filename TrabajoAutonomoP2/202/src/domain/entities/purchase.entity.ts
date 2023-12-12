export class PurchaseEntity {

    private constructor(
      public id: number,
      public date: Date,
      public readonly supplierId: number,
    ) { }
  
    public static fromObject(object: { [key: string]: any }): PurchaseEntity {
      const {id, date, supplierId } = object;
      if (!date) throw 'date is required';
      if (!supplierId) throw 'supplier is required';
      
      return new PurchaseEntity(id, date, supplierId)
    }
  
  }