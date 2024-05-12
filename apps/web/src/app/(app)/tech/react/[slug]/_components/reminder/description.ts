const description = `
### 説明

リマインダーのサンプルコード

### 利用するshadcn/uiコンポーネント

- button
- input
- form

### コンポーネント構成

~~~txt
+ Example
|  + Todo
|     + List
|     + InputForm
~~~

### サンプルコード

#### Example.tsx

~~~typescript
import { Todo } from './_components/Todo';

const Example = () => {
  return (
    <>
      <h2 className="text-center">Reminder</h2>
      <Todo />
    </>
  );
};

export { Example };
~~~

#### Todo.tsx

~~~typescript
'use client';

import { useState } from 'react';
import { InputForm } from './InputForm';
import { List } from './List';

const Todo = () => {
  const todoList = [
    {
      id: 1,
      content: 'book store',
    },
    {
      id: 2,
      content: 'movie',
    },
    {
      id: 3,
      content: 'shopping',
    },
  ];

  const [todos, setTodos] = useState(todoList);

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const createTodo = (todo: { id: number; content: string }) => {
    setTodos([...todos, todo]);
  };

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      <InputForm createTodo={createTodo} />
    </>
  );
};

export { Todo };
~~~

#### List.tsx

~~~typescript
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
~~~

#### InputForm.tsx

~~~typescript
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@repo/ui';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  content: z.string().min(1).max(50),
});

interface InputFormProps {
  // eslint-disable-next-line no-unused-vars
  createTodo: ({ id, content }: { id: number; content: string }) => void;
}

const InputForm = ({ createTodo }: InputFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: '',
    },
  });

  const addTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: form.getValues('content'),
    };

    createTodo(newTodo);
    form.setValue('content', '');
  };

  return (
    <>
      <h3>InputForm</h3>
      <div className="rounded-sm border p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(addTodo)} className="space-y-8">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add new todo</FormLabel>
                  <FormControl>
                    <Input placeholder="todo name" {...field} />
                  </FormControl>
                  <FormDescription>This is your new todo.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Add</Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export { InputForm };
~~~


`;

export { description as ReminderDescription };
