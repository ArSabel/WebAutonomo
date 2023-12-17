export class DeleteFlightDto {
  private constructor(
    public readonly id: number,
    public readonly deleted?: boolean,
    public readonly reason?: string,
  ) {
    if (!id || isNaN(Number(id))) {
      throw new Error('id must be a valid number')
    }

    if (!id && !deleted && !reason) {
      throw new Error('id or deleted or reason property is required')
    }
  }

  static delete(props: { [key: string]: any }): [string?, DeleteFlightDto?] {
    const { id } = props
    return [undefined, new DeleteFlightDto(id)]
  }
}
