import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileStartFab } from "@/components/MobileStartFab";
import { SkipLink } from "@/components/SkipLink";

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <SkipLink locale="en" />
      <Header locale="en" />
      <main id="main-content" className="flex-1 pb-20 lg:pb-0">
        {children}
      </main>
      <Footer locale="en" />
      <MobileStartFab locale="en" />
    </div>
  );
}
