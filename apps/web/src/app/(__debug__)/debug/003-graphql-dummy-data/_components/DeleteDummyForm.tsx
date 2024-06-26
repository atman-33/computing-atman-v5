'use client';

import { useDummyDispatcher } from '@/features/dummy';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@repo/ui';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

/**
 * フォームのスキーマ。validation もここで定義する。
 */
const formSchema = z.object({
  id: z.string().min(1, { message: '1文字以上入力して下さい' }),
});

const DeleteDummyForm = () => {
  const dummyDispatcher = useDummyDispatcher();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: '',
    },
  });

  const deleteDummy = () => {
    dummyDispatcher.deleteDummy({ where: { id: form.getValues('id') } });
    form.reset();
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(deleteDummy)}>
          <FormLabel className="text-base font-bold underline">データ削除</FormLabel>
          <div className="ml-4 flex items-start space-x-2">
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem className="flex items-baseline space-x-2">
                  <FormLabel className="w-[50px]">ID</FormLabel>
                  <FormControl className="w-[210px]">
                    <Input placeholder="ID" {...field} />
                  </FormControl>
                  <FormMessage />
                  <Button type="submit">削除</Button>
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </>
  );
};

export default DeleteDummyForm;
