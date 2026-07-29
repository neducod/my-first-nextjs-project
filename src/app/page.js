import Image from "next/image";
import Navbar from "./components/Navbar"
import Collections from "./components/Collections"
import Campaign from "./components/Campaign"
import Editorial from "./components/Editorial"
import Runway from "./components/Runway"

export default function Home() {
  return (
    <main className="pt-44">
      <Navbar/>
      <Collections/>
      <Campaign/>
      <Editorial/>
      <Runway/>
    </main>
  );
}