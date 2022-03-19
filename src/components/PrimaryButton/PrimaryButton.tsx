import styled from "styled-components";
import { ButtonInterface } from "../../types/Message";

const Button = styled.button`
  background: rgba(94, 100, 255, 1);
  border-radius: 15.5px;
  border: none;
  color: white;
  width: 100px;
  height: 50px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    width: 110px;
    height: 60px;
  }
`;

const PrimaryButton = ({
  actionOnClick,
  text,
  className,
}: ButtonInterface): JSX.Element => {
  return (
    <Button className={className} onClick={actionOnClick}>
      {text}
    </Button>
  );
};

export default PrimaryButton;
