import Header from "./Component/Header";
import Hero from "./Component/Hero";

export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden px-4">
      <Header/>
      <Hero/>
    </div>
  );
}
