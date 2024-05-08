'use client';

import { useAuth } from '@/features/auth';
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
  Label,
  Switch,
  Textarea,
} from '@repo/ui';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { useBookDispatcher } from '../hooks/useBookDispatcher';
import { bookSelectors } from '../stores/book-atom';
import { DokuhaDeleteButton } from './DokuhaDeleteButton';

const formSchema = z.object({
  title: z.string().min(1, { message: 'one character or more' }),
  currentChapter: z
    .string()
    .refine((val) => Number(val) >= 0, { message: 'input numbers' })
    .optional(),
  score: z
    .string()
    .refine((val) => Number(val) >= 0, { message: 'input numbers' })
    .refine(
      (val) => {
        if (Number(val) < 0 || Number(val) > 5) {
          return false;
        }
        return true;
      },
      { message: 'input numbers between 0 and 5' },
    ),
  completed: z.boolean(),
  review: z.string().optional(),
});

interface DokuhaEditProps {
  id?: string | null;
}

export const DokuhaEdit = ({ id }: DokuhaEditProps) => {
  const router = useRouter();
  const [isNew, setIsNew] = useState<boolean>(false);
  const book = bookSelectors.useGetBook(id ?? '');
  const { createBook, updateBook } = useBookDispatcher();
  const { currentUser } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      currentChapter: undefined,
      score: undefined,
      completed: false,
      review: '',
    },
  });

  useEffect(() => {
    // console.log('current user', currentUser);
    if (id) {
      setIsNew(false);
      form.setValue('title', book.title ?? '');
      form.setValue('currentChapter', String(book.currentChapter));
      form.setValue('score', String(book.score));
      form.setValue('completed', book.completed === 1 ? true : false);
      form.setValue('review', book.review ?? '');
    } else {
      setIsNew(true);
      form.setValue('title', '');
      form.setValue('currentChapter', '');
      form.setValue('score', '');
      form.setValue('completed', false);
      form.setValue('review', '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  /**
   * 保存ボタン押下時の処理。
   * 本データを新規作成、もしくは更新する。
   * @returns
   */
  const handleSaveButtonClick = async () => {
    // console.log('current user => ', currentUser);
    console.log(
      form.getValues('title'),
      form.getValues('currentChapter'),
      form.getValues('score'),
      form.getValues('completed'),
      form.getValues('review'),
    );

    if (!currentUser) {
      return;
    }

    const currentChapterValue = form.getValues('currentChapter');
    const scoreValue = form.getValues('score');
    const dataToSave = {
      title: form.getValues('title'),
      currentChapter: currentChapterValue ? parseFloat(currentChapterValue.toString()) : 0,
      score: scoreValue ? parseFloat(scoreValue.toString()) : 0,
      completed: form.getValues('completed') ? 1 : 0,
      review: form.getValues('review'),
      userId: currentUser?.id,
    };

    try {
      if (isNew) {
        await createBook({
          data: dataToSave,
        });
      } else {
        await updateBook({
          where: {
            id,
          },
          data: dataToSave,
        });
      }
      toast.success('Book saved.', {
        duration: 2000,
        position: 'bottom-center',
      });

      router.push('/dokuha');
      return;
    } catch (err) {
      const errJson = JSON.parse(JSON.stringify(err));
      toast.error(errJson.response.errors[0].message, {
        duration: 2000,
        position: 'bottom-center',
      });
      return;
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSaveButtonClick)}
          className="flex flex-col space-y-4 p-4"
        >
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">{isNew ? 'Register book...' : 'Edit book...'}</h2>
            {isNew ? null : <DokuhaDeleteButton id={id as string} />}
          </div>

          <FormFiledInput form={form} name="title" label="Title" placeHolder="e.g. DRAGON BALL" />
          <FormFiledInput
            form={form}
            name="currentChapter"
            label="Current chapter"
            placeHolder="e.g. 519"
          />
          <FormFiledInput form={form} name="score" label="Score" placeHolder="0.0 - 5.0" />

          <FormField
            control={form.control}
            name="completed"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="airplane-mode"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <Label htmlFor="airplane-mode">Completed</Label>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="review"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Review</FormLabel>
                <FormControl>
                  <Textarea placeholder="Review" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Save
          </Button>
          {isNew ? null : <div className="text-xs">id: {id}</div>}
        </form>
      </Form>
    </>
  );
};

interface FormFieldInputProps {
  form: any;
  name: string;
  label: string;
  placeHolder: string;
}

const FormFiledInput = ({ form, name, label, placeHolder }: FormFieldInputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeHolder} {...field} />
          </FormControl>
          <FormDescription></FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
