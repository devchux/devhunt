import { GitHub } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "../css/logo.scss";

const Logo = (props) => (
  <Link to="/" className='logo-link'>
    <div className="logo-wrapper">
      <div className="less-than">&lt;</div>
      <GitHub />
      <div className="greater-than">&gt;</div>
    </div>
  </Link>
);

export default Logo;
