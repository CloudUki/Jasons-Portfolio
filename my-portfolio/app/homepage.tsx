import Navbar from "@/components/nav";
import bg from "../public/Jason-pic.jpg";

const backgroundImage = bg.src;

export default function HomePage() {
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
        <div>
            <h1 className="absolute top-35 right-15 text-5xl font-bold text-white text-center mt-32">
                Hello! I'm Jason.
            </h1>
            <h2 className="absolute top-55 right-15 text-2xl font-bold text-white text-center mt-32">
                A junior at Alvernia University.
            </h2>
            <a
                href="/Jason_Tavener_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute right-15 px-6 py-2 bg-yellow-100 text-black rounded hover:bg-red-100 transition cursor-pointer">
                Resume
            </a>
        </div>
    </div>
  );
}
