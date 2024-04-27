import AppLayout from "@/app/app-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppLayout>{children}</AppLayout>
  );
}
