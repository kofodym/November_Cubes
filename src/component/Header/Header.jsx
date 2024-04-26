import './Header.css';
const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-contents">
        <h2>
          A World of Flavors <br /> at Your Fingertips!
        </h2>
        <p className="explore">
          Explore endless culinary delights and order from your new favorite
          spot
        </p>
        <button class="view-menu">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
