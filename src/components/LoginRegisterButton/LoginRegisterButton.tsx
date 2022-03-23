import styled from "styled-components";
import { ButtonInterface } from "../../types/Interfaces";

const Button = styled.button`
  border-radius: 20px;
  border-color: rgba(156, 166, 255, 1);
  color: white;
  height: 45px;
  font-size: 18px;
  width: 100%;
`;

const LoginRegisterButton = ({
  actionOnClick,
  text,
  className,
  disabled,
}: ButtonInterface): JSX.Element => {
  return (
    <Button className={className} onClick={actionOnClick} disabled={disabled}>
      {text}
    </Button>
  );
};

export default LoginRegisterButton;
