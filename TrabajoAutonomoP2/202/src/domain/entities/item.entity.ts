export class ItemEntity {

  private constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,

  ) { }

  public static fromObject(object: { [key: string]: any }): ItemEntity {
    const {id, name, description, price } = object;
    if (!name) throw 'email is required';
    if (!description) throw 'password is required';
    if (!price) throw 'name is required';
    
    

    return new ItemEntity(id,name, description, price)
  }

}

