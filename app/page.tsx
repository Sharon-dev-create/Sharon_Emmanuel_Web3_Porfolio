import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import AboutPage from "@/app/about/page";
import SkillsPage from "@/app/skills/page";
import FAQPage from "@/app/faq/page";
import ContactPage from "@/app/contact/page";

export default function Home() {
  return (
    <div className="max-w-screen-2xl w-full mx-auto">
      <Hero />
      <SelectedWork />
      <AboutPage />
      <SkillsPage />
      <FAQPage />
      <ContactPage />
    </div>
  );
}
