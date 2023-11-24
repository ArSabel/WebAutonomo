export class CreateSupplierDto {
  private constructor(
    public readonly name: string,
    public readonly status: boolean
  ) { }

  static create(props: { [key: string]: any }): [string?, CreateSupplierDto?] {
    const { name, status } = props;

    if (!name) {
      return ['name property is required', undefined];
    }

    if (status == null) {
      return ['status property is required', undefined];
    }

    return [undefined, new CreateSupplierDto(name, status)];
  }
}
