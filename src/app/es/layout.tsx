import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileStartFab } from "@/components/MobileStartFab";
import { SkipLink } from "@/components/SkipLink";

export default function SpanishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col" lang="es">
      <SkipLink locale="es" />
      <Header locale="es" />
      <main id="main-content" className="flex-1 pb-20 lg:pb-0">
        {children}
      </main>
      <Footer locale="es" />
      <MobileStartFab locale="es" />
    </div>
  );
}
