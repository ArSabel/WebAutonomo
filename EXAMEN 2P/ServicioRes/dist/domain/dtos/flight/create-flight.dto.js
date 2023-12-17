"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFlightDto = void 0;
class CreateFlightDto {
    constructor(code, from, to, capacity) {
        this.code = code;
        this.from = from;
        this.to = to;
        this.capacity = capacity;
    }
    static create(props) {
        const { code, from, to, capacity } = props;
        if (!code)
            return ['code property is required', undefined];
        if (!from)
            return ['from property is required', undefined];
        if (!to)
            return ['to property is required', undefined];
        if (!capacity)
            return ['capacity property is required', undefined];
        if (isNaN(Number(capacity))) {
            return ['capacity must be a valid number', undefined];
        }
        return [undefined, new CreateFlightDto(code, from, to, capacity)];
    }
}
exports.CreateFlightDto = CreateFlightDto;
