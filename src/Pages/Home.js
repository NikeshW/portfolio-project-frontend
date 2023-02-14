import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <div className="welcome-message">
        <h1>Welcome to Buy Nothing App</h1>
        <div className="see-details-button">
          <Link to={"/items"}>
            <button className="home-page-button">Visit Items</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
