import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import AboutPage from "@/app/about/page";
import SkillsPage from "@/app/skills/page";
import FAQPage from "@/app/faq/page";
import ContactPage from "@/app/contact/page";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <div className="max-w-screen-2xl w-full mx-auto">
      <Hero />
      <SelectedWork />
      <SkillsPage />
      <AboutPage />
      <Experience />
      <FAQPage />
      <ContactPage />
    </div>
  );
}
