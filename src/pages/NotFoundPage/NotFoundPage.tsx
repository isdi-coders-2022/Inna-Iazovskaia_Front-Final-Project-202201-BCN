import { faHeartCrack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Navigation from "../../components/Navigation/Navigation";

const H2 = styled.h2`
  color: rgba(237, 1, 127, 1);
  text-align: center;
  margin-top: 100px;
`;

const P = styled.p`
  margin-top: 20px;
  color: rgba(237, 1, 127, 1);
  text-align: center;

  .page_icon {
    font-size: 100px;
  }
`;

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <H2>Page not found</H2>
      <P>
        <FontAwesomeIcon className="page_icon" icon={faHeartCrack} />
      </P>
      <P>Sorry, this page does not exist</P>
      <Navigation />
    </>
  );
};

export default NotFoundPage;
