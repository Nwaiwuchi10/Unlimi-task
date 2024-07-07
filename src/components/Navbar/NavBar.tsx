import React, { useEffect, useState } from "react";
import img from "../../Assets/Group 1000004245.png";
import imgProfile from "../../Assets/div.png";
import "./Navbar.css";
import { ApiUrl } from "../../ApiData/Api";
type SearchProps = {
  onSearch: (result: any) => void;
};

const NavBar: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchquery, setSearchquery] = useState<string>("");
  const [result, setResult] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (searchquery.trim() !== "") {
        try {
          const response = await fetch(
            `${ApiUrl}catalog?supplier=${searchquery}`
          );
          if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
          const data = await response.json();
          setResult(data);
          onSearch(data);
          setError(null);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [searchquery, onSearch]);
  const handleInput = (e: any) => {
    setSearchquery(e.target.value);
  };
  return (
    <div className="navBar-section">
      <div className="Navbar-div">
        <div className="Navbar-img-search">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              className="search-input"
              type="text"
              value={searchquery}
              onChange={handleInput}
              placeholder="Search by patient..."
            />
            {error && <div style={{ color: "red" }}>{error}</div>}
          </div>
        </div>

        <div className="profile-div">
          <img src={imgProfile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
