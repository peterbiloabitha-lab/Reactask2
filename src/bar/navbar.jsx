import "./navbar.css";

function Navbar({
  search = "",
  setSearch,
  category = "All",
  setCategory,
  categories = []
}) {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <h2>
          NIHA SHOPPING<span></span>
        </h2>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item === "All" ? "All Categories" : item}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </nav>
  );
}

export default Navbar;
