"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error) => {
    console.error(error.message);
    return { error: 'Internal Server Error' };
};
exports.errorHandler = errorHandler;
