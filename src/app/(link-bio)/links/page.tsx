import type { Metadata } from "next";
import { LinksPageContent } from "@/components/LinksPageContent";
import { linkInBioContent } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Links",
  description: linkInBioContent.en.metaDescription,
};

export default function LinksPage() {
  return <LinksPageContent locale="en" />;
}
