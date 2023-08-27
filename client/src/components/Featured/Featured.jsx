import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Featured.css";

const Featured = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search) {
      // navigate(`/gigs?search=${search}`);
      navigate(`/gigs?category=${search}`);
    }
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left" >
          <p>GigFindr</p>
          <h2 className="neonText">
          Where the world meets startups. Millions of small businesses use
Freelancer to turn their ideas into reality
          </h2>
          <div className="search">
            <div className="searchInput">
              <img src="./media/search.png" alt="search" />
              <input
                type="search"
                placeholder='Try "website"'
                onChange={({ target: { value } }) => setSearch(value)}
              />
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Website Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>

        <div className="right">
       
        </div>
      </div>
    </div>
  );
};

export default Featured;
