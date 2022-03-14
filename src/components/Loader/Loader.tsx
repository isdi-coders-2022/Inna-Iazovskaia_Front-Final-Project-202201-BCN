import { ClipLoader } from "react-spinners";
import styled from "styled-components";

const LoaderContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  align-items: center;

  p {
    color: rgba(237, 1, 127, 1);
    font-size: 30px;
    text-align: center;
  }
`;

const Loader = (): JSX.Element => {
  return (
    <LoaderContainer>
      <p>Loading...</p>
      <ClipLoader color={"rgba(237, 1, 127, 1)"} size={80} />
    </LoaderContainer>
  );
};

export default Loader;
