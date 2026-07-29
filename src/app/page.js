import Image from "next/image";
import Navbar from "./components/Navbar"
import Collections from "./components/Collections"
import Campaign from "./components/Campaign";

export default function Home() {
  return (
    <main className="pt-44">
      <Navbar/>
      <Collections/>
      <Campaign/>
    </main>
  );
}