import styled from "@emotion/styled/macro";
import Skeleton from "./components/Skeleton";
import DummyImage from "./assets/dummy-img.jpg";
import { useEffect, useState } from "react";

const Base = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 12px;
  row-gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
`;
const ImageWrapper = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
`;
const Info = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;
const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 24px;
`;
const Description = styled.p`
  margin: 8px 0 0 0;
  padding: 0;
  font-size: 16px;
`;

const Placeholder: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Skeleton width={420} height={220} />
      </ImageWrapper>
      <Info>
        <Skeleton width={150} height={32} rounded />
        <div style={{ height: "8px" }} />
        <Skeleton width={300} height={22} rounded />
      </Info>
    </Container>
  );
};

const Item: React.FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={DummyImage} />
        {/* Photo by The Lazy Artist Gallery: https://www.pexels.com/photo/man-wearing-pink-suit-jacket-holding-using-tablet-computer-1303862/ */}
      </ImageWrapper>
      <Info>
        <Title>Nulla et magna est nulla.</Title>
        <Description>
          Ad minim enim ex ad ex dolore.Laboris amet laboris elit amet
          incididunt. Excepteur mollit ipsum anim exercitation dolor. Cillum
          magna consequat duis ipsum ex reprehenderit proident minim.
        </Description>
      </Info>
    </Container>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <div className="App">
      <Base>
        {loading
          ? Array.from({ length: 25 }).map((_, idx) => (
              <Placeholder key={idx} />
            ))
          : Array.from({ length: 25 }).map((_, idx) => <Item key={idx} />)}
      </Base>
    </div>
  );
}

export default App;
