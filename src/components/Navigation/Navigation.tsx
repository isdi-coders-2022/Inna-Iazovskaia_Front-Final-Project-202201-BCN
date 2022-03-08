import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navigation = (): JSX.Element => {
  return (
    <nav className="navigation">
      <ul className="navigation_list">
        <li className="navigation_item home">
          <Link to="/profile">
            <FontAwesomeIcon className="navigation__icon" icon={faUser} />
            <span className="navigation__text">Profile</span>
          </Link>
        </li>
        <li className="navigation_item home">
          <Link to="/home">
            <FontAwesomeIcon className="navigation__icon" icon={faHeart} />
            <span className="navigation__text">Home</span>
          </Link>
        </li>
        <li className="navigation_item home">
          <Link to="/conversations">
            <FontAwesomeIcon className="navigation__icon" icon={faComments} />
            <span className="navigation__text">Conversations</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
