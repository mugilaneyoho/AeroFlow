"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotificationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const CreateNotifyDto_1 = require("./CreateNotifyDto");
class UpdateNotificationDto extends (0, mapped_types_1.PartialType)(CreateNotifyDto_1.CreateNotifyDto) {
    value;
}
exports.UpdateNotificationDto = UpdateNotificationDto;
//# sourceMappingURL=UpdateNotifyDto.js.map