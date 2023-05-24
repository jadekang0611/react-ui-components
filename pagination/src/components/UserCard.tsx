import styled from "@emotion/styled/macro";

const UserCardWrapper = styled.div`
  width: 320px;
  background-color: #ff6f00; /* Replace with your desired poppy color */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  align-items: center;
`;

const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
`;

const UserInfoWrapper = styled.div`
  flex-grow: 1;
`;

const UserName = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #fff;
  font-family: "Quicksand", sans-serif;
`;

const UserAirline = styled.p`
  font-size: 14px;
  margin: 8px 0 0;
  color: #fff;
  font-family: "Quicksand", sans-serif;
`;

const UserTrip = styled.p`
  font-size: 12px;
  margin: 8px 0 0;
  color: #fff;
  font-family: "Quicksand", sans-serif;
`;

type UserProps = {
  id?: string;
  name: string;
  trip?: number;
  airline?: string;
};

const UserCard: React.FC<UserProps> = ({ id, name, trip, airline }) => {
  return (
    <UserCardWrapper id={id}>
      <UserInfoWrapper>
        <UserName>Name: {name}</UserName>
        <UserAirline>Airline: {airline}</UserAirline>
        <UserTrip>No. of trips: {trip}</UserTrip>
      </UserInfoWrapper>
    </UserCardWrapper>
  );
};

export default UserCard;
