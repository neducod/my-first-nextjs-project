import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="flex h-screen items-center flex-col justify-center bg-black">
      <Hero/>
    </main>
  );
}