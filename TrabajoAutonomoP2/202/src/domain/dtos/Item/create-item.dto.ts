// DTO de creación (Create DTO) para la entidad Item
export class CreateItemDto {
  private constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly price: number
  ){}

  static create(props: { [key: string]: any }): [string?, CreateItemDto?] {
    const { name, description, price } = props;

    if (!name) {
      return ['name property is required', undefined];
    }

    if (price == null || isNaN(price)) {
      return ['price must be a valid number', undefined];
    }

    return [undefined, new CreateItemDto(name, description || '', price)];
  }
}
