import type { Metadata } from "next";
import { LinksPageContent } from "@/components/LinksPageContent";
import { linkInBioContent } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Enlaces",
  description: linkInBioContent.es.metaDescription,
};

export default function EnlacesPage() {
  return <LinksPageContent locale="es" />;
}
