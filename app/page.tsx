import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";

export default function Home() {
  return (
    <div className="max-w-screen-2xl w-full mx-auto">
      <Hero />
      <SelectedWork />
    </div>
  );
}
