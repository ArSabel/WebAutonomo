export class SupplierEntity {

    private constructor(
      public id: number,
      public name: string,
      public status: boolean,
    ) { }
  
    public static fromObject(object: { [key: string]: any }): SupplierEntity {
      const {id, name, status} = object;
      if (!name) throw 'name is required';
      if (status===undefined) throw 'status is required';
      
      
  
      return new SupplierEntity(id,name, status)
    }
  
  }