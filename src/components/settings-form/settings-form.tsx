"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    currentPassword: z.string(),
    newPassword: z.string(),
});

type UserFormValue = z.infer<typeof formSchema>;

export default function SettingsForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [loading, setLoading] = useState(false);
  const defaultValues = {
    currentPassword: "",
    newPassword: "",
  };
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data: UserFormValue) => {
    // Change password logic
  };

  return (
    <Form {...form} data-testid="settings-form" >
    <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 w-1/2"
    >
        <FormField
        control={form.control}
        name="currentPassword"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Current Password</FormLabel>
            <FormControl>
                <Input
                data-testid="current-password-input"
                type="password"
                placeholder=""
                disabled={loading}
                autoComplete="current-password"
                autoCapitalize="none"
                {...field}
                />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />
        <FormField
        control={form.control}
        name="newPassword"
        render={({ field }) => (
            <FormItem>
            <FormLabel>New Password</FormLabel>
            <FormControl>
                <Input
                data-testid="new-password-input"
                type="password"
                placeholder=""
                disabled={loading}
                autoComplete="new-password"
                autoCapitalize="none"
                {...field}
                />
            </FormControl>
            <FormMessage />
            </FormItem>
        )}
        />

        <Button data-testid="login-button" disabled={loading} className="ml-auto" type="submit">
            Change Password
        </Button>
    </form>
    </Form>
  );
}
