
import Hero from "@/components/custom-home/Hero"
import Project from "@/components/custom-home/Project"
import Slogan from "@/components/custom-home/Slogan";
import Testimonial from "@/components/custom-home/Testimonial"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Project />
      <Testimonial />
      <Slogan />

    </main>
  );
}
