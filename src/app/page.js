import Image from "next/image";
import Navbar from "./components/Navbar"
import Collections from "./components/Collections"

export default function Home() {
  return (
    <main className="pt-44">
      <Navbar/>
      <Collections/>
    </main>
  );
}