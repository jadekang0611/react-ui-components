import styled from "@emotion/styled/macro";
import { User } from "../interface/Api";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin: 12px 0;
  font-family: "Quicksand", sans-serif;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const NameWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 16px 0;
`;

const Name = styled.h3`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  margin: auto;
`;

const Space = styled.div`
  margin: 0 2px;
`;

const Title = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: #888888;
  margin: auto;
`;

const EmployeeCard: React.FC<User> = ({
  id,
  firstName,
  lastName,
  title,
  picture,
}) => {
  return (
    <CardContainer key={id}>
      <Avatar src={picture} alt={firstName + lastName + "photo"} />
      <NameWrapper>
        <Title>{title.toUpperCase() + "."}</Title>
        <Space />
        <Name>{firstName + lastName}</Name>
      </NameWrapper>
    </CardContainer>
  );
};

export default EmployeeCard;
