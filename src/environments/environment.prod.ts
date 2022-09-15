import { TodoService as MockTodoService } from "src/app/services/todo.mock.service";
import { TodoService } from "src/app/services/todo.service";

export const environment = {
  production: true,
  // doug added this
  providers: [
    { provide: MockTodoService, useClass: TodoService }
  ]
};
