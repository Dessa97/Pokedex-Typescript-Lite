"use strict";
//# Classes de Exceções Customizadas que estendem Error (ex: APIError, LocalBoxError).
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalBoxError = exports.APIError = void 0;
class APIError extends Error {
    constructor(message) {
        super(message);
        this.name = "APIError";
    }
}
exports.APIError = APIError;
class LocalBoxError extends Error {
    constructor(message) {
        super(message);
        this.name = "LocalBoxError";
    }
}
exports.LocalBoxError = LocalBoxError;
//# sourceMappingURL=CustomErrors.js.map