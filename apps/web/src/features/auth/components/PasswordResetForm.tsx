'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@repo/ui';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { useAuth } from '../hooks/useAuth';

const formSchema = z.object({
  newPassword: z.string().min(4, { message: 'four characteres or more' }),
  confirmPassword: z.string().min(4, { message: 'four characters or more' }),
});

export const PasswordResetForm = () => {
  const router = useRouter();
  const { redirectPath, changeUserPassword } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  });

  const handleChangePasswordButtonClick = async () => {
    // console.log(form.getValues('newPassword'), form.getValues('confirmPassword'));
    if (form.getValues('newPassword') !== form.getValues('confirmPassword')) {
      toast.error('Passwords do not match', {
        duration: 2000,
        position: 'bottom-center',
      });
      return;
    }

    try {
      await changeUserPassword(form.getValues('newPassword'));
      toast.success('Password changed successfully.', {
        duration: 2000,
        position: 'bottom-center',
      });
      // console.log('redirectPath => ', redirectPath);
      router.push(redirectPath);
    } catch (err) {
      const errJson = JSON.parse(JSON.stringify(err));
      toast.error(errJson.response.errors[0].message, {
        duration: 2000,
        position: 'bottom-center',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleChangePasswordButtonClick)}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Change Password</CardTitle>
            <CardDescription>Enter your new password</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input placeholder="New Password" {...field} type="password" />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Confirm Password" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Change Password
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};
