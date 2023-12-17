"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFlightDto = void 0;
class UpdateFlightDto {
    constructor(id, code, from, to, capacity, reason, deleted) {
        this.id = id;
        this.code = code;
        this.from = from;
        this.to = to;
        this.capacity = capacity;
        this.reason = reason;
        this.deleted = deleted;
    }
    get values() {
        const returnObj = {};
        if (this.code)
            returnObj.code = this.code;
        if (this.from)
            returnObj.from = this.from;
        if (this.to)
            returnObj.to = this.to;
        if (this.capacity)
            returnObj.capacity = this.capacity;
        if (this.deleted !== undefined)
            returnObj.deleted = this.deleted;
        if (this.reason)
            returnObj.reason = this.reason;
        return returnObj;
    }
    static update(props) {
        const { id, code, from, to, capacity, reason, deleted } = props;
        if (!id || isNaN(Number(id))) {
            return ['id must be a valid number'];
        }
        if (reason !== null)
            return [
                undefined,
                new UpdateFlightDto(id, code, from, to, capacity, reason, deleted),
            ];
        return [undefined, new UpdateFlightDto(id, code, from, to, capacity)];
    }
}
exports.UpdateFlightDto = UpdateFlightDto;
