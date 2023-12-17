export class FindFlightDto {
  private constructor(public readonly id: number) {
    if (!id || isNaN(Number(id))) {
      throw new Error('id must be a valid number')
    }

    if (!id) {
      throw new Error('id property is required')
    }
  }

  static find(props: { [key: string]: any }): [string?, FindFlightDto?] {
    const { id } = props
    return [undefined, new FindFlightDto(id)]
  }
}
