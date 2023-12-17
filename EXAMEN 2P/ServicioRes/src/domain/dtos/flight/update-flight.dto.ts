export class UpdateFlightDto {
  private constructor(
    public readonly id: number,
    public readonly code: number,
    public readonly from: string,
    public readonly to: string,
    public readonly capacity: number,
    public readonly reason?: string,
    public readonly deleted?: boolean,
  ) {}

  get values() {
    const returnObj: { [key: string]: any } = {}

    if (this.code) returnObj.code = this.code
    if (this.from) returnObj.from = this.from
    if (this.to) returnObj.to = this.to
    if (this.capacity) returnObj.capacity = this.capacity
    if (this.deleted !== undefined) returnObj.deleted = this.deleted
    if (this.reason) returnObj.reason = this.reason

    return returnObj
  }

  static update(props: { [key: string]: any }): [string?, UpdateFlightDto?] {
    const { id, code, from, to, capacity, reason, deleted } = props

    if (!id || isNaN(Number(id))) {
      return ['id must be a valid number']
    }

    if (reason !== null)
      return [
        undefined,
        new UpdateFlightDto(id, code, from, to, capacity, reason, deleted),
      ]
    return [undefined, new UpdateFlightDto(id, code, from, to, capacity)]
  }
}
