import './Header.css';
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>
          A World of Flavors <br /> at Your Fingertips!
        </h2>
        <p className="explore">
          Explore endless culinary delights and order from your new favorite
          spot
        </p>

        {/* link to menu products page */}
        <Link to="menu">
          <button class="menu">View Menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
