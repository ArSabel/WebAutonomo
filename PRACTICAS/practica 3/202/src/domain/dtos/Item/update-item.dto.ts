// DTO de actualización (Update DTO) para la entidad Item
export class UpdateItemDto {
  private constructor(
    public readonly id: number,
    public readonly name?: string,
    public readonly description?: string,
    public readonly price?: number
  ){}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.name !== undefined) returnObj.name = this.name;
    if (this.description !== undefined) returnObj.description = this.description;
    if (this.price !== undefined) returnObj.price = this.price;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateItemDto?] {
    const { id, name, description, price } = props;

    if (id == null || isNaN(id)) {
      return ['id must be a valid number', undefined];
    }

    return [undefined, new UpdateItemDto(id, name, description, price)];
  }
}
