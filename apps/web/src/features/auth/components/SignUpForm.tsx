'use client';

import { Icons } from '@/components/icons';
import { Link } from '@/components/link';
import { wait } from '@/utils/wait-util';
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
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAuth } from '../hooks/useAuth';

const formSchema = z.object({
  username: z.string().min(4, { message: 'four character or more' }),
  password: z.string().min(4, { message: 'four characters or more' }),
});

export const SignUpForm = () => {
  const router = useRouter();
  const { createUser } = useAuth();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleSignUp = async () => {
    // console.log('sign up');
    const res = await createUser(form.getValues('username'), form.getValues('password'));
    if (res instanceof Error) {
      console.error(res);
      const errJson = JSON.parse(JSON.stringify(res));
      // console.log(errJson.response);
      setError(errJson.response.errors[0].message);
    } else {
      // console.log(res);
      setError('');
      setSuccess(true);
      await wait(1000);
      router.push('/auth/login');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSignUp)}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>Enter your information to create an account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Username" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Create an account
              </Button>
              <div className="text-center font-bold text-red-500">{error}</div>
              {success && (
                <div className="flex text-center font-bold text-blue-500">
                  Create account successfully...
                  <Icons.spinner className="h-6 w-6 animate-spin" />
                </div>
              )}
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link href="/auth/login" className="underline">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};
