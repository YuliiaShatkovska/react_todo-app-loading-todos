import { FilterStatus } from '../types/FilterStatus';
import { Todo } from '../types/Todo';

export const getFilteredTodos = (todos: Todo[], filterStatus: FilterStatus) => {
  let visibleTodos = [...todos];

  if (filterStatus !== FilterStatus.ALL) {
    visibleTodos = visibleTodos.filter(todo => {
      switch (filterStatus) {
        case FilterStatus.ACTIVE:
          return !todo.completed;

        case FilterStatus.COMPLETED:
          return todo.completed;

        default:
          return true;
      }
    });
  }

  return visibleTodos;
};
