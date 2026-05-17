import MainViewLayout from "@/components/main-layout/MainViewLayout";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MainViewLayout>{children}</MainViewLayout>;
}
