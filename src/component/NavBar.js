function NavBar() {
  return (
    <nav className="flex items-center justify-center gap-8 py-3 bg-blue-50 text-gray-700 text-sm">
      <a href="#">Medicines</a>
      <a href="#">Personal Care</a>
      <a href="#">Baby Care</a>
      <a href="#">Offers</a>
      <a href="#" className="text-orange-500 font-medium">
        ⚡ Super Saver
      </a>
    </nav>
  );
}

export default NavBar;