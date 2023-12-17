export class CreateFlightDto {
  private constructor(
    public readonly code: number,
    public readonly from: string,
    public readonly to: string,
    public readonly capacity: number,
    public readonly reason?:string, // public readonly transactions: any[], // public readonly transactions: createTransactionDto[],
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateFlightDto?] {
    const { code, from, to, capacity,reason } = props
    if (!code) return ['code property is required', undefined]
    if (!from) return ['from property is required', undefined]
    if (!to) return ['to property is required', undefined]
    if (!capacity) return ['capacity property is required', undefined]

    if (isNaN(Number(capacity))) {
      return ['capacity must be a valid number', undefined]
    }

    return [undefined, new CreateFlightDto(code, from, to, capacity,reason)]
  }
}
