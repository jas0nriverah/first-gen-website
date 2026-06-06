import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function BienvenidosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col" lang="es">
      <Header locale="es" />
      <main className="flex-1">{children}</main>
      <Footer locale="es" />
    </div>
  );
}
