import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Loader from "../../components/Loader/Loader";
import { RootState } from "../../redux/store";
import { loadCurrentMessageThunk } from "../../redux/thunks/messagesThunks/messagesThunks";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;

  @media (min-width: 600px) {
    padding-top: 95px;
  }

  h3 {
    color: white;
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const Text = styled.section`
  background-color: rgba(237, 1, 127, 1);
  border: none;
  color: white;
  padding: 10px;
  font-size: px;
  border-radius: 20px;
  height: 300px;
  margin-bottom: 30px;
  width: 80vw;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }

  @media (min-width: 600px) {
    width: 300px;
  }

  span {
    font-weight: bold;
    text-decoration: underline;
  }

  p {
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  width: 80px;
  background: rgba(94, 100, 255, 1);
  border-radius: 15.5px;
  border: none;
  color: white;
  width: 100px;
  height: 50px;
  font-size: 18px;
`;

const MessageDetailsPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentMessage = useSelector((state: RootState) => state.message);

  useEffect(() => {
    dispatch(loadCurrentMessageThunk(id as string));
  }, [dispatch, id]);

  console.log(currentMessage);

  const goToConversationsPage = () => {
    navigate("/conversations");
  };

  return (
    <PageContainer>
      <h3>Message details</h3>
      {currentMessage.text === "" ? (
        <Loader />
      ) : (
        <Text>
          <p>
            <span>Date:</span> {currentMessage.date}
          </p>
          <p>
            <span>Sender:</span> {currentMessage.sender}
          </p>
          <p>
            <span>Recipient:</span> {currentMessage.recipient}
          </p>
          <p>
            <span>Message text:</span> {currentMessage.text}
          </p>
        </Text>
      )}
      <Button onClick={() => goToConversationsPage()}>Go back</Button>
    </PageContainer>
  );
};

export default MessageDetailsPage;
