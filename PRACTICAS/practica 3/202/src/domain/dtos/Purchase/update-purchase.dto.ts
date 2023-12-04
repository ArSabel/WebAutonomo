// DTO para actualizar una compra (Purchase)
export class UpdatePurchaseDto {
  private constructor(
    public readonly id: number,
    public readonly date?: Date,
    public readonly supplierId?: number
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.date !== undefined) returnObj.date = this.date;
    if (this.supplierId !== undefined) returnObj.supplierId = this.supplierId;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdatePurchaseDto?] {
    const { id, date, supplierId } = props;

    if (id == null || isNaN(id)) {
      return ['id must be a valid number', undefined];
    }

    return [undefined, new UpdatePurchaseDto(id, date, supplierId)];
  }
}
