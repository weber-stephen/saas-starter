"use client";
import React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import ThemeProvider from "./ThemeToggle/theme-provider";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
export default function Providers({
  session,
  children,
}: {
  session: SessionProviderProps["session"];
  children: React.ReactNode;
}) {
  // Create a client
  const queryClient = new QueryClient()

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <QueryClientProvider client={queryClient}>
          <SessionProvider session={session}>{children}</SessionProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
