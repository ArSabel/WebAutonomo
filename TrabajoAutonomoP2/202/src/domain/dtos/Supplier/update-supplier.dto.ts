// DTO de actualización (Update DTO) para la entidad Supplier
export class UpdateSupplierDto {
  private constructor(
    public readonly id: number,
    public readonly name?: string,
    public readonly status?: boolean
  ){}

  get values() {
    const returnObj: { [key: string]: any } = {};

    if (this.name !== undefined) returnObj.name = this.name;
    if (this.status !== undefined) returnObj.status = this.status;

    return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateSupplierDto?] {
    const { id, name, status } = props;

    if (id == null || isNaN(id)) {
      return ['id must be a valid number', undefined];
    }

    if (name === undefined && status === undefined) {
      return ['At least one property must be provided for update', undefined];
    }

    return [undefined, new UpdateSupplierDto(id, name, status)];
  }
}

