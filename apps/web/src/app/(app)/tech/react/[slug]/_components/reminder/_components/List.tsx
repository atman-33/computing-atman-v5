import { Button } from '@repo/ui';

interface Todo {
  id: number;
  content: string;
}

interface ListProps {
  todos: Todo[];
  // eslint-disable-next-line no-unused-vars
  deleteTodo: (id: number) => void;
}

const List = ({ todos, deleteTodo }: ListProps) => {
  const complete = (id: number) => {
    return () => deleteTodo(id);
  };

  return (
    <>
      <h3>List</h3>
      <div className="rounded-sm border p-4">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="m-2 flex items-center">
              <Button onClick={complete(todo.id)}>Done</Button>
              <span className="ml-2">{todo.content}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { List };
