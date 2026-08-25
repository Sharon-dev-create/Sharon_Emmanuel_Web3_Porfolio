import type { Metadata } from "next";
import Eyebrow from "@/components/ui/Eyebrow";
import Divider from "@/components/ui/Divider";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Sharon Emmanuel",
};

export default function ContactPage() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full px-page-mobile md:px-page-desktop py-section">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="hidden md:block md:col-span-2" />
        <div className="col-span-1 md:col-span-8">
          <Eyebrow className="block mb-8">03/ CONTACT</Eyebrow>
          <h1 className="font-display text-headline-mobile md:text-display mb-8 uppercase">
            LET&apos;S CONNECT
          </h1>
          <Divider className="mb-12" />
          <p className="font-body text-body-lg text-muted-variant max-w-3xl mb-16">
            Open to Web3 development opportunities, protocol engineering work
            and interesting projects.
          </p>
          <ContactForm />
        </div>
        <div className="hidden md:block md:col-span-2" />
      </div>
    </div>
  );
}
