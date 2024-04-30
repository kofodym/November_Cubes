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
      <div className="products-display">
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
