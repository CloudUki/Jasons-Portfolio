export default function Navbar() {
    return (
      <nav className="w-full bg-neutral-100 border-b border-neutral-300 py-4 fixed top-0 left-0">
        <ul className="flex justify-center gap-16 text-xl font-serif text-black">
          <li>
            <a href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#about">
              About
            </a>
          </li>
          <li>
            <a href="#experiences">
              Experiences
            </a>
          </li>
          <li>
            <a href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  