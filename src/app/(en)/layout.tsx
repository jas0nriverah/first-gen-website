import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header locale="en" />
      <main className="flex-1">{children}</main>
      <Footer locale="en" />
    </div>
  );
}
