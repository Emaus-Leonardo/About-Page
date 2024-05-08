import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-colorFooter py-20 text-white">
      <div className="container mx-auto flex items-center justify-center">
        <p>&copy; 2024 Emaús Leonardo</p>
        <nav className="ml-4">
          <Link to="/" className="px-2 text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="px-2 text-gray-300 hover:text-white">
            Sobre
          </Link>
          <Link to="/contact" className="px-2 text-gray-300 hover:text-white">
            Contato
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
