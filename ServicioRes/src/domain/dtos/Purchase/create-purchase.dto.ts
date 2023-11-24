export class CreatePurchaseDto {
  private constructor(
    public readonly date: Date,
    public readonly supplierId: number // Reemplaza userId con supplierId
  ) { }

  static create(props: { [key: string]: any }): [string?, CreatePurchaseDto?] {
    const { date, supplierId } = props;

    if (supplierId == null || isNaN(supplierId)) {
      return ['supplierId must be a valid number', undefined];
    }

    if (date == null || !date) {
      return ['date property is required', undefined];
    }

    return [undefined, new CreatePurchaseDto(date, supplierId)];
  }
}
