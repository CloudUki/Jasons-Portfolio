import Image from "next/image";
import Navbar from "@/components/nav";
import bg from "../public/Jason-pic.jpg";


const backgroundImage = bg.src;

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center font-sans">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-white">
        <Navbar />
      </div>
    </div>
  );
}
