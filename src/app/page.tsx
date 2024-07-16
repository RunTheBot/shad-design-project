import Hero from "@/components/Hero";
import MainNavBar from "@/components/MainNavBar";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <MainNavBar/>
      <Hero/>
    </div>
  );
}
