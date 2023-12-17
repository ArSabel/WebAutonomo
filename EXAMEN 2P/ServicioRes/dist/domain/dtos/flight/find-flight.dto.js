"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFlightDto = void 0;
class FindFlightDto {
    constructor(id) {
        this.id = id;
        if (!id || isNaN(Number(id))) {
            throw new Error('id must be a valid number');
        }
        if (!id) {
            throw new Error('id property is required');
        }
    }
    static find(props) {
        const { id } = props;
        return [undefined, new FindFlightDto(id)];
    }
}
exports.FindFlightDto = FindFlightDto;
