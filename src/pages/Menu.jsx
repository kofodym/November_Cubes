import SearchBar from "../component/SearchBar/SearchBar";
import ProductsDisplay from "../component/ViewMenu/ProductsDisplay";

// import SideCartEmpty from "../component/ViewMenu/SideCartEmpty";
// import SideCartFilled from "../component/ViewMenu/SideCartFilled";

import "../pages/Menu.css";

function Menu() {
  return (
    <div className="product">
      {/* <NavBar /> */}
      <SearchBar />
      <div className="product-container">
        <div className="category-list">
          <ul>
            <li>All</li>
            <li>Food</li>
            <li>Drinks</li>
            <li>Pastries</li>
          </ul>
        </div>
        <ProductsDisplay />
        {/* <div className="side-cart">
          <SideCartEmpty />
          <SideCartFilled />
        </div> */}
      </div>
    </div>
  );
}

export default Menu;
