import Image from "next/image";
import Navbar from "./components/Navbar"
import Collections from "./components/Collections"
import Campaign from "./components/Campaign"
import Editorial from "./components/Editorial"
import Runway from "./components/Runway"
import Story from "./components/Story"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="pt-44">
      <Navbar/>
      <Collections/>
      <Campaign/>
      <Editorial/>
      <Runway/>
      <Story/>
      <Contact/>
    </main>
  );
}