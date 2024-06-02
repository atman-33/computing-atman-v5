'use client';

import { useAuth } from '@/features/auth';
import { VideoCreateInput } from '@/gql/graphql';
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
  RadioGroup,
  RadioGroupItem,
  Switch,
  Textarea,
} from '@repo/ui';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { useVideoDispatcher } from '../hooks/useVideoDispatcher';
import { videoSelectors } from '../stores/video-atom';
import { videoTypeSelectors } from '../stores/video-type-atom';
import { KanshoDeleteButton } from './KanshoDeleteButton';

const formSchema = z.object({
  title: z.string().min(1, { message: 'one character or more' }),
  type: z.string(),
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

interface KanshoEditProps {
  id?: string | null;
}

export const KanshoEdit = ({ id }: KanshoEditProps) => {
  const router = useRouter();
  const [isNew, setIsNew] = useState<boolean>(false);
  const video = videoSelectors.useGetVideo(id ?? '');
  const videoTypes = videoTypeSelectors.useGetVideoTypes();
  const { createVideo, updateVideo } = useVideoDispatcher();
  const { currentUser } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      type: videoTypes[0]?.id,
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
      form.setValue('title', video.title ?? '');
      form.setValue('type', video.videoTypeId ?? '');
      form.setValue('currentChapter', String(video.currentChapter));
      form.setValue('score', String(video.score));
      form.setValue('completed', video.completed === 1 ? true : false);
      form.setValue('review', video.review ?? '');
    } else {
      setIsNew(true);
      // form.setValue('title', '');
      // form.setValue('currentChapter', '');
      // form.setValue('score', '');
      // form.setValue('completed', false);
      // form.setValue('review', '');
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
      form.getValues('type'),
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
    const dataToSave: VideoCreateInput = {
      title: form.getValues('title'),
      currentChapter: currentChapterValue ? parseFloat(currentChapterValue.toString()) : 0,
      score: scoreValue ? parseFloat(scoreValue.toString()) : 0,
      completed: form.getValues('completed') ? 1 : 0,
      review: form.getValues('review'),
      userId: currentUser?.id,
      videoType: {
        connect: {
          id: form.getValues('type'),
        },
      },
    };

    try {
      if (isNew) {
        await createVideo({
          data: dataToSave,
        });
      } else {
        await updateVideo({
          where: {
            id,
          },
          data: dataToSave,
        });
      }
      toast.success('Video saved.', {
        duration: 2000,
        position: 'bottom-center',
      });

      router.push('/kansho');
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
            <h2 className="text-xl font-bold">{isNew ? 'Register video...' : 'Edit video...'}</h2>
            {isNew ? null : <KanshoDeleteButton id={id as string} />}
          </div>

          <FormFiledInput form={form} name="title" label="Title" placeHolder="e.g. Star Wars" />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <RadioGroup
                defaultValue={video?.videoTypeId ?? videoTypes[0]?.id}
                onValueChange={(value) => {
                  console.log(value);
                  console.log(JSON.stringify(videoTypes));
                  field.onChange(value);
                }}
                className="flex gap-8"
              >
                {videoTypes.map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <RadioGroupItem value={item.id} id={item.id} />
                    <Label htmlFor={item.id}>{item.name}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          />
          <FormFiledInput
            form={form}
            name="currentChapter"
            label="Current chapter"
            placeHolder="e.g. 1"
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
