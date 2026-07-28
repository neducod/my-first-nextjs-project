import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Imageslide from "./components/Imageslide";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <About/>
      {/* <Imageslide/> */}
    </main>
  );
}