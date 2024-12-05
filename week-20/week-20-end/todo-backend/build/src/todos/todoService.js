"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "mock todo",
            description: "mock description",
            done: false
        };
    }
    create(todoCreationParams) {
        console.log("mock db call.");
        return {
            id: "1",
            title: "mock todo",
            description: "mock description",
            done: false
        };
    }
}
exports.TodoService = TodoService;
