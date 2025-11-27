export default function Navbar() {
  return (
    <nav className="w-full bg-yellow-100 border-b border-yellow-100 py-4 fixed top-0 left-0">
      <ul className="flex justify-center gap-16 text-xl font-serif text-black">
        <li>
          <a href="#home" className="hover:text-red-600 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-red-600 transition">
            About
          </a>
        </li>
        <li>
          <a href="#experiences" className="hover:text-red-600 transition">
            Experiences
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-red-600 transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-red-600 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}