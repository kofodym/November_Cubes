import { useState } from "react";
import "./SearchBar.css";
// import { images } from "../../component/Gallery/GalleryImages";
// import { IconContext } from 'react-icons';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { TbFilterEdit } from "react-icons/tb";

function SearchBar() {
  // const [value, setValue] = useState("");
  // const [suggestions, setSuggestions] = useState([]);

  // Define your menu items
  // const menuItems = images;

  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter menu items based on search query
  // const filteredMenuItems = menuItems.filter((item) =>
  //   item.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const handleInputChange = (event) => {
    event.preventDefault();
    setSearchQuery(event.target.value);
  };
  return (
    <div className="container mt-5 mb-5" id="searchbar">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 d-flex align-items-center justify-content-center gap-4">
          {/* //searchbar */}
          <div className="search-container position-relative col-md-9">
            <input
              type="text"
              name="search-bar"
              id="search-bar"
              className="search-bar w-100 rounded-2 p-3 border-1 solid-light"
              placeholder="Search your favourite meal"
              value={searchQuery}
              onChange={handleInputChange}
            />
            {/* Import React icons */}
            <IoSearch className="IoSearch position-absolute top-50 translate-middle" />
          </div>
          <div className=" search-icons  d-flex gap-5 ms-2 mt-2 mb-2">
            <div className="icon-cover  position-relative px-1 py-1 rounded-2 bg-blue  p-2">
              <TbFilterEdit className=" position-absolute top-50 start-50 translate-middle" />
            </div>
            <div className="icon-cover position-relative px-1 py-1 rounded-2 bg-#FCF3DF  p-2">
              <FaRegHeart className=" position-absolute top-50 start-50 translate-middle" />
            </div>
            <div className="icon-cover position-relative px-1 py-1 rounded-2 bg-#FFFFFF  p-2">
              <BsCart3 className=" position-absolute top-50 start-50 translate-middle" />
            </div>
          </div>

          {/* Display search suggestions below the input field */}
          {/* <div className="menu-items">
        {filteredMenuItems.map((menuItem) => (
          <div key={menuItem.id} className="menu-item">
            <h3>{menuItem.name}</h3>
            <p>{menuItem.category}</p>
          </div>
        ))}
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
