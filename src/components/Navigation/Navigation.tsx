import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100vw;
  padding-bottom: 15px;
  background: black;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .profile {
      @media (min-width: 600px) {
        order: 1;
      }
    }
  }

  @media (min-width: 600px) {
    position: fixed;
    top: 0;
    padding-top: 15px;
    padding-right: 10px;
    height: 80px;
  }

  .logo {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const NavigationItem = styled.li`
  width: 60px;
  height: 60px;
  background: linear-gradient(#eb3a67, #822f8b);
  border-radius: 16.8%;
  display: flex;
  align-items: center;
  justify-content: center;

  .navigation-text-container {
    display: flex;
    align-items: center;
  }

  span {
    color: rgba(237, 1, 127, 1);
    font-size: 15px;
    font-weight: bold;
    padding-left: 5px;

    @media (max-width: 600px) {
      display: none;
    }
  }

  .navigation__icon {
    color: #ffffff;
    width: 40px;
    height: 40px;

    @media (min-width: 600px) {
      color: rgba(237, 1, 127, 1);
      width: 30px;
      height: 30px;
    }
  }

  @media (min-width: 600px) {
    background: none;
  }
`;

const Navigation = (): JSX.Element => {
  return (
    <NavigationBar className="navigation">
      <ul className="navigation_list">
        <NavigationItem className="navigation_item logo">
          <Link className="navigation-text-container" to="/home">
            <img src="logo.svg" alt="fimd-me logo" />
            <span className="navigation__text">Find me</span>
          </Link>
        </NavigationItem>
        <NavigationItem className="navigation_item profile">
          <Link className="navigation-text-container" to="/profile">
            <FontAwesomeIcon className="navigation__icon" icon={faUser} />
            <span className="navigation__text">Profile</span>
          </Link>
        </NavigationItem>
        <NavigationItem className="navigation_item home">
          <Link className="navigation-text-container" to="/home">
            <FontAwesomeIcon className="navigation__icon" icon={faHeart} />
            <span className="navigation__text">Home</span>
          </Link>
        </NavigationItem>
        <NavigationItem className="navigation_item conversations">
          <Link className="navigation-text-container" to="/conversations">
            <FontAwesomeIcon className="navigation__icon" icon={faComments} />
            <span className="navigation__text">Conversations</span>
          </Link>
        </NavigationItem>
      </ul>
    </NavigationBar>
  );
};

export default Navigation;
