import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Movie Finder</h1>
      <div className="search__box">
        <form>
          <input
            type="text"
            className="input"
            placeholder="Search for a movie..."
          />
        </form>
      </div>
    </div>
  );
}

export default Navbar;
