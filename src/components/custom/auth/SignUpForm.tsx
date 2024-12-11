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
import axios from "axios";
import { toast } from "sonner";

const formSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address." }),
  security: z
    .object({
      password: z.string().min(1, { message: "Password is required" }),
      confirmPassword: z
        .string()
        .min(1, { message: "Confirm Password is required" })
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"]
    })
});

export function SignUpForm() {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    React.useState<boolean>(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      security: {
        password: "",
        confirmPassword: ""
      }
    }
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await axios
      .post(`${window.location.origin}/api/auth`, values)
      .then((res) => {
        toast.success("Account created successfully");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }
  return (
    <Card className="w-[30rem] select-none">
      <CardHeader>
        <CardTitle className="text-2xl">SignUp Form</CardTitle>
        <CardDescription>Provide information to create account</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-3"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="security.password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
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
                            width="24"
                            height="24"
                            className="size-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.9074 15.3487L4.55466 14.9698L4.55466 14.9698L3.9074 15.3487ZM3.9074 8.65133L4.55466 9.03021L4.55466 9.03021L3.9074 8.65133ZM13.9162 9.96831C14.216 10.2542 14.6907 10.2429 14.9766 9.94318C15.2624 9.64343 15.2512 9.16869 14.9514 8.88282L13.9162 9.96831ZM8.7432 14.9157C9.01234 15.2305 9.48577 15.2676 9.80062 14.9985C10.1155 14.7293 10.1525 14.2559 9.8834 13.941L8.7432 14.9157ZM20.4095 4.52614C20.7001 4.23095 20.6963 3.75609 20.4011 3.46551C20.1059 3.17493 19.6311 3.17867 19.3405 3.47386L20.4095 4.52614ZM4.15301 18.9024C3.86243 19.1976 3.86617 19.6725 4.16136 19.9631C4.45655 20.2536 4.93141 20.2499 5.22199 19.9547L4.15301 18.9024ZM4.55466 14.9698C3.48178 13.1369 3.48178 10.8631 4.55466 9.03021L3.26013 8.27246C1.91329 10.5734 1.91329 13.4266 3.26013 15.7275L4.55466 14.9698ZM6.45255 17.2388C5.72734 16.6258 5.08181 15.8704 4.55466 14.9698L3.26013 15.7275C3.87315 16.7748 4.62893 17.6614 5.48415 18.3843L6.45255 17.2388ZM4.55466 9.03021C7.26824 4.3944 13.2017 3.51996 17.1232 6.42527L18.0162 5.22C13.4173 1.81293 6.44922 2.8243 3.26013 8.27246L4.55466 9.03021ZM9.19331 12.0607C9.19331 10.467 10.4606 9.19699 11.9994 9.19699V7.69699C9.60973 7.69699 7.69331 9.66125 7.69331 12.0607H9.19331ZM11.9994 9.19699C12.7392 9.19699 13.4126 9.48802 13.9162 9.96831L14.9514 8.88282C14.1822 8.14925 13.1429 7.69699 11.9994 7.69699V9.19699ZM9.8834 13.941C9.45402 13.4387 9.19331 12.7825 9.19331 12.0607H7.69331C7.69331 13.1505 8.08864 14.15 8.7432 14.9157L9.8834 13.941ZM19.3405 3.47386L4.15301 18.9024L5.22199 19.9547L20.4095 4.52614L19.3405 3.47386Z"
                              fill="#363853"
                            />
                            <path
                              d="M20.0925 8.65137C21.3023 10.7183 21.3023 13.2818 20.0925 15.3487C17.6744 19.4797 12.9072 20.859 8.92041 19.4868M15.5566 12.0607C15.5566 14.0562 13.9636 15.6733 11.9993 15.6733"
                              stroke="#0095FF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="24"
                            height="24"
                            className="size-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.9074 8.65134C7.53762 2.44955 16.4624 2.44955 20.0926 8.65134C21.3025 10.7182 21.3025 13.2818 20.0926 15.3487C16.4624 21.5504 7.53762 21.5504 3.9074 15.3487C2.69753 13.2818 2.69753 10.7182 3.9074 8.65134Z"
                              stroke="#363853"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.5567 12.0607C15.5567 14.0562 13.9637 15.6733 11.9995 15.6733C10.0352 15.6733 8.44336 14.0562 8.44336 12.0607C8.44336 10.0642 10.0352 8.44702 11.9995 8.44702C13.9637 8.44702 15.5567 10.0642 15.5567 12.0607Z"
                              stroke="#0095FF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="security.confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ConfirmPassword</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        className="pe-9"
                        placeholder="Password"
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        {...field}
                        aria-describedby="password-strength"
                      />
                      <button
                        className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 transition-shadow hover:text-foreground focus-visible:border focus-visible:border-ring focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        type="button"
                        onClick={() =>
                          setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                        }
                        aria-label={
                          isConfirmPasswordVisible
                            ? "Hide password"
                            : "Show password"
                        }
                        aria-pressed={isConfirmPasswordVisible}
                        aria-controls="password"
                      >
                        {isConfirmPasswordVisible ? (
                          <svg
                            width="24"
                            height="24"
                            className="size-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.9074 15.3487L4.55466 14.9698L4.55466 14.9698L3.9074 15.3487ZM3.9074 8.65133L4.55466 9.03021L4.55466 9.03021L3.9074 8.65133ZM13.9162 9.96831C14.216 10.2542 14.6907 10.2429 14.9766 9.94318C15.2624 9.64343 15.2512 9.16869 14.9514 8.88282L13.9162 9.96831ZM8.7432 14.9157C9.01234 15.2305 9.48577 15.2676 9.80062 14.9985C10.1155 14.7293 10.1525 14.2559 9.8834 13.941L8.7432 14.9157ZM20.4095 4.52614C20.7001 4.23095 20.6963 3.75609 20.4011 3.46551C20.1059 3.17493 19.6311 3.17867 19.3405 3.47386L20.4095 4.52614ZM4.15301 18.9024C3.86243 19.1976 3.86617 19.6725 4.16136 19.9631C4.45655 20.2536 4.93141 20.2499 5.22199 19.9547L4.15301 18.9024ZM4.55466 14.9698C3.48178 13.1369 3.48178 10.8631 4.55466 9.03021L3.26013 8.27246C1.91329 10.5734 1.91329 13.4266 3.26013 15.7275L4.55466 14.9698ZM6.45255 17.2388C5.72734 16.6258 5.08181 15.8704 4.55466 14.9698L3.26013 15.7275C3.87315 16.7748 4.62893 17.6614 5.48415 18.3843L6.45255 17.2388ZM4.55466 9.03021C7.26824 4.3944 13.2017 3.51996 17.1232 6.42527L18.0162 5.22C13.4173 1.81293 6.44922 2.8243 3.26013 8.27246L4.55466 9.03021ZM9.19331 12.0607C9.19331 10.467 10.4606 9.19699 11.9994 9.19699V7.69699C9.60973 7.69699 7.69331 9.66125 7.69331 12.0607H9.19331ZM11.9994 9.19699C12.7392 9.19699 13.4126 9.48802 13.9162 9.96831L14.9514 8.88282C14.1822 8.14925 13.1429 7.69699 11.9994 7.69699V9.19699ZM9.8834 13.941C9.45402 13.4387 9.19331 12.7825 9.19331 12.0607H7.69331C7.69331 13.1505 8.08864 14.15 8.7432 14.9157L9.8834 13.941ZM19.3405 3.47386L4.15301 18.9024L5.22199 19.9547L20.4095 4.52614L19.3405 3.47386Z"
                              fill="#363853"
                            />
                            <path
                              d="M20.0925 8.65137C21.3023 10.7183 21.3023 13.2818 20.0925 15.3487C17.6744 19.4797 12.9072 20.859 8.92041 19.4868M15.5566 12.0607C15.5566 14.0562 13.9636 15.6733 11.9993 15.6733"
                              stroke="#0095FF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="24"
                            height="24"
                            className="size-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.9074 8.65134C7.53762 2.44955 16.4624 2.44955 20.0926 8.65134C21.3025 10.7182 21.3025 13.2818 20.0926 15.3487C16.4624 21.5504 7.53762 21.5504 3.9074 15.3487C2.69753 13.2818 2.69753 10.7182 3.9074 8.65134Z"
                              stroke="#363853"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M15.5567 12.0607C15.5567 14.0562 13.9637 15.6733 11.9995 15.6733C10.0352 15.6733 8.44336 14.0562 8.44336 12.0607C8.44336 10.0642 10.0352 8.44702 11.9995 8.44702C13.9637 8.44702 15.5567 10.0642 15.5567 12.0607Z"
                              stroke="#0095FF"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="secondary"
              className="mt-2 col-span-2"
            >
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center items-center space-y-4">
        Already have an account?
        <Button
          variant="link"
          size="lg"
          onClick={() => {
            signIn();
          }}
          className="w-12"
        >
          Sign In
        </Button>
      </CardFooter>
    </Card>
  );
}
