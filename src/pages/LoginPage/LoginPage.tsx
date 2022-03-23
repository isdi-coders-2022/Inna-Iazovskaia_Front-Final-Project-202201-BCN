import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginRegisterButton from "../../components/LoginRegisterButton/LoginRegisterButton";
import UserLoginForm from "../../components/UserLoginForm/UserLoginForm";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
    text-align: center;
    font-size: 40px;
    margin-bottom: 30px;
  }

  .button-register {
    width: 100%;
  }
`;

const PageBody = styled.div`
  height: calc(100vh - 156px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 45px 25px 30px 25px;
  margin-top: 0;

  @media (min-width: 600px) {
    justify-content: space-between;
  }

  h1 {
    color: rgba(237, 1, 127, 1);
    font-size: 30px;
    font-weight: bold;
    padding-left: 5px;
  }

  span {
    color: rgba(237, 1, 127, 1);
    font-size: 35px;
    font-family: "Dynalight", cursive;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();
  const goToRegisterPage = () => {
    navigate("/register-page");
  };

  return (
    <PageContainer>
      <PageHeader>
        <LogoContainer>
          <img src="/logo.svg" alt="fimd-me logo" />
          <h1 className="navigation__text">Find me</h1>
        </LogoContainer>
        <span>Love is just a click away</span>
      </PageHeader>
      <PageBody>
        <h2>Log in</h2>
        <UserLoginForm />
        <LoginRegisterButton
          className="button-register"
          text="Don’t have an account yet? Sign in"
          actionOnClick={() => goToRegisterPage()}
        />
      </PageBody>
    </PageContainer>
  );
};

export default LoginPage;
