import { Link } from "react-router-dom";
import "../css/logo.scss";

const Logo = (props) => (
  <Link to="/" className="logo-link">
    <div className="logo-wrapper">
      <img
        src="https://fontmeme.com/permalink/210824/a6ff30815a8bcf3d9892f1bb9c243b7b.png"
        alt="calligraphy-fonts"
        border="0"
      />
    </div>
  </Link>
);

export default Logo;
