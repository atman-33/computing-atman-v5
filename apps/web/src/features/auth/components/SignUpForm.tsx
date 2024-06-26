'use client';

import { Link } from '@/components/link';
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
  username: z.string().min(4, { message: 'four character or more' }),
  password: z.string().min(4, { message: 'four characters or more' }),
});

export const SignUpForm = () => {
  const router = useRouter();
  const { createUser } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleSignUpButtonClick = async () => {
    // console.log('sign up');
    try {
      await createUser(form.getValues('username'), form.getValues('password'));
      // console.log(res);
      toast.success('Account created successfully.', {
        duration: 2000,
        position: 'bottom-center',
      });
      router.push('/auth/login');
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
      <form onSubmit={form.handleSubmit(handleSignUpButtonClick)}>
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
