"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteFlightDto = void 0;
class DeleteFlightDto {
    constructor(id, deleted, reason) {
        this.id = id;
        this.deleted = deleted;
        this.reason = reason;
        if (!id || isNaN(Number(id))) {
            throw new Error('id must be a valid number');
        }
        if (!id && !deleted && !reason) {
            throw new Error('id or deleted or reason property is required');
        }
    }
    static delete(props) {
        const { id } = props;
        return [undefined, new DeleteFlightDto(id)];
    }
}
exports.DeleteFlightDto = DeleteFlightDto;
