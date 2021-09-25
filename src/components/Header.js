import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/stream/new" className="item">
        <i className="headphones icon large"></i>
      </Link>
      <div className="right menu">
        <Link to="/" className="item active">
          Home
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};
//any component that is not a child a BrowserRouter cannot contain link
export default Header;
