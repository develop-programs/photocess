"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters."
  }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
});

export function SignInForm() {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: `${window.location.origin}/`
    })
      .then((res) => {
        toast.success("Successfully Logged In");
      })
      .catch((error) => {
        toast.error("Invalid credentials");
      });
  }

  return (
    <Card className="w-[25rem] select-none">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>
          Provide information to Log In to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
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
                    <div className="relative">
                      <Input
                        id="input-51"
                        className="pe-9"
                        placeholder="Password"
                        type={isVisible ? "text" : "password"}
                        {...field}
                        aria-describedby="password-strength"
                      />
                      <button
                        className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        type="button"
                        onClick={() => setIsVisible(!isVisible)}
                        aria-label={
                          isVisible ? "Hide password" : "Show password"
                        }
                        aria-pressed={isVisible}
                        aria-controls="password"
                      >
                        {isVisible ? (
                          <svg
                            height="24"
                            width="24"
                            fill="none"
                            className="size-5 stroke-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.53 9.47004L9.47001 14.53C8.82001 13.88 8.42001 12.99 8.42001 12C8.42001 10.02 10.02 8.42004 12 8.42004C12.99 8.42004 13.88 8.82004 14.53 9.47004Z"
                              stroke="#04041C"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M5.6 17.76C4.6 16.9 3.69 15.84 2.89 14.59C1.99 13.18 1.99 10.81 2.89 9.4C4.07 7.55 5.51 6.1 7.12 5.13"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M17.82 5.76998C16.07 4.44998 14.07 3.72998 12 3.72998"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M8.42001 19.5301C9.56001 20.0101 10.77 20.2701 12 20.2701C15.53 20.2701 18.82 18.1901 21.11 14.5901C22.01 13.1801 22.01 10.8101 21.11 9.40005C20.78 8.88005 20.42 8.39005 20.05 7.93005"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M15.51 12.7C15.25 14.11 14.1 15.26 12.69 15.52"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M9.47 14.53L2 22"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M22 2L14.53 9.47"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        ) : (
                          <svg
                            height="24"
                            width="24"
                            fill="none"
                            className="size-5 stroke-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.03001 14C8.64001 13.43 8.42001 12.74 8.42001 12C8.42001 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12C15.58 13.98 13.98 15.58 12 15.58"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M17.56 5.57998C15.87 4.37998 13.97 3.72998 12 3.72998C8.47 3.72998 5.18 5.80998 2.89 9.40998C1.99 10.82 1.99 13.19 2.89 14.6C5.18 18.2 8.47 20.28 12 20.28C15.53 20.28 18.82 18.2 21.11 14.6C22.01 13.19 22.01 10.82 21.11 9.40998"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex items-center justify-end">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="linkHover2" className="text-sm">
                    Forget Password ?
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle>Reset Password</DialogTitle>
                  <DialogDescription>
                    Please enter your email address to receive a code to reset
                    your password.
                  </DialogDescription>
                  <div className="flex flex-col justify-end">
                    <div className="flex rounded-lg shadow-sm shadow-black/5">
                      <Input
                        id="input-18"
                        className="-me-px rounded-e-none shadow-none focus-visible:z-10"
                        placeholder="example@domain"
                        type="text"
                      />
                      <div className="relative inline-flex">
                        <select
                          className="peer inline-flex h-full appearance-none items-center rounded-none rounded-e-lg border border-input bg-background pe-8 ps-3 text-sm text-muted-foreground transition-shadow hover:bg-accent hover:text-accent-foreground focus:z-10 focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                          aria-label="Domain suffix"
                        >
                          <option>.com</option>
                          <option>.org</option>
                          <option>.net</option>
                        </select>
                        <span className="pointer-events-none absolute inset-y-0 end-0 z-10 flex h-full w-9 items-center justify-center text-muted-foreground/80 peer-disabled:opacity-50">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.8839 15.5303C12.3957 16.0185 11.6043 16.0185 11.1161 15.5303L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-2">
                      Send Code
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <Button type="submit" className="bg-white hover:bg-white/80">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="grid grid-cols-2 gap-2">
        {[
          {
            title: "Google",
            icon: (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="size-4 fill-current"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.7402 11.07C21.6902 10.56 21.2602 10.18 20.7502 10.18H13.2002C12.6502 10.18 12.2002 10.63 12.2002 11.18V12.89C12.2002 13.44 12.6502 13.89 13.2002 13.89H17.7102C17.6002 14.81 17.0002 16.2 15.6702 17.13C14.8202 17.72 13.6902 18.13 12.2002 18.13C12.1302 18.13 12.0702 18.13 12.0002 18.12C9.4502 18.04 7.2902 16.33 6.5102 13.98C6.3002 13.35 6.1802 12.69 6.1802 12C6.1802 11.31 6.3002 10.64 6.5002 10.02C6.5602 9.83999 6.6302 9.66001 6.7102 9.48001C7.6302 7.41001 9.6402 5.95 12.0002 5.88C12.0602 5.87 12.1302 5.87 12.2002 5.87C13.6302 5.87 14.7002 6.33999 15.4502 6.85999C15.8402 7.12999 16.3602 7.06999 16.7002 6.73999L18.0902 5.38C18.5302 4.95 18.4902 4.21999 17.9902 3.85999C16.4002 2.68999 14.4602 2 12.2002 2C12.1302 2 12.0702 2.00001 12.0002 2.01001C8.1702 2.08001 4.8802 4.30001 3.2702 7.51001C2.5902 8.87001 2.2002 10.39 2.2002 12C2.2002 13.61 2.5902 15.13 3.2702 16.49H3.2802C4.8902 19.7 8.1802 21.92 12.0002 21.99C12.0702 22 12.1302 22 12.2002 22C14.9002 22 17.1702 21.11 18.8202 19.58C20.7102 17.83 21.8002 15.27 21.8002 12.22C21.8002 11.79 21.7802 11.42 21.7402 11.07Z" />
              </svg>
            ),
            func: () =>
              signIn("google", {
                callbackUrl: `${
                  typeof window != undefined ? window.location.origin : "/"
                }`
              })
          },
          {
            title: "Github",
            icon: (
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                className="size-4 stroke-current"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7854_30)">
                  <path
                    d="M18 38C8 41 8 33 4 32M32 44V36.26C32.075 35.3063 31.9462 34.3476 31.622 33.4476C31.2979 32.5476 30.7859 31.7268 30.12 31.04C36.4 30.34 43 27.96 43 17.04C42.9995 14.2477 41.9254 11.5624 40 9.54C40.9117 7.09701 40.8472 4.3967 39.82 2C39.82 2 37.46 1.3 32 4.96C27.416 3.71764 22.584 3.71764 18 4.96C12.54 1.3 10.18 2 10.18 2C9.15275 4.3967 9.08829 7.09701 10 9.54C8.06025 11.5774 6.98505 14.2869 7 17.1C7 27.94 13.6 30.32 19.88 31.1C19.222 31.7799 18.7145 32.5908 18.3906 33.4798C18.0667 34.3689 17.9336 35.3161 18 36.26V44"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            ),
            func: () =>
              signIn("github", {
                callbackUrl: `${
                  typeof window != undefined ? window.location.origin : "/"
                }`
              })
          }
        ].map((item, index) => (
          <Button
            key={index}
            variant="outline"
            onClick={item.func}
            className="gap-2"
          >
            {item.icon}
            {item.title}
          </Button>
        ))}
        <div className="col-span-2 mt-2 flex gap-2 justify-center items-center">
          <span className="text-sm">Don&apos;t have an account</span>
          <Link
            href="/api/auth/signUp"
            className="text-sm hover:underline hover:underline-offset-2"
          >
            SignUp
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
