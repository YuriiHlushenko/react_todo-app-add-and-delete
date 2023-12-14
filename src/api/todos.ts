import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const addTodo = ({ userId, title, completed }: Omit<Todo, 'id'>) => {
  return client.post<Todo>(`/todos?userId=${userId}`, { userId, title, completed });
};

export const deleteTodo = (postId: number) => {
  return client.delete(`/todos/${postId}`);
};
