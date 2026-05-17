import CustomCursor from "@/components/ui/CustomCursor";

export default function MainViewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="paper-background min-h-screen text-foreground">
      <CustomCursor />
      {children}
    </div>
  );
}
