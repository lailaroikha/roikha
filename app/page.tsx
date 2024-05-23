
import Hero from "@/components/custom-home/Hero";
import Product from "@/components/custom-home/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Product />
    </main>
  );
}
