import Image from "next/image";
import Navbar from "./components/Navbar";
import Romance from "./components/Romance";
import Action from "./components/Action";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Romance />
      <Action />
      <Footer />
    </div>
  );
}
