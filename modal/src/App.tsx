import styled from "@emotion/styled/macro";
import { useState } from "react";
import Modal from "./components/Modal";
import { IoIosClose } from "react-icons/io";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Button = styled.button`
  width: 280px;
  height: 60px;
  border-radius: 12px;
  color: #fff;
  background-color: #e91e63;
  margin: 0;
  border: none;
  font-size: 24px;
  cursor: pointer;
  &:active {
    opacity: 0.8;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  margin: 2px;
  padding: 2px;
  top: 0;
  right: 0;
  font-size: 24px;
  cursor: pointer;
  color: #e91e63;
`;

const ModalBody = styled.div`
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-height: calc(100vh - 16px);
  overflow: hidden auto;
  position: relative;
  padding-block: 12px;
  padding-inline: 24px;
  font-family: "Quicksand", sans-serif;
`;

const HorizontalLine = styled.div`
  position: relative;
  width: calc(100% + 48px);
  border: none;
  border-top: 1px solid #e91e63;
  /* left: -50; */
  margin: 10px -24px;
`;

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const TITLE = "The Misadventures of Mr. Wiggles: A Tale of Silly Antics";

  const DESCRIPTION =
    "Join Mr. Wiggles, the mischievous and whimsical character, on a hilarious adventure filled with nonsensical situations and unexpected surprises. From wearing mismatched socks to attempting to fly with a cardboard cape, Mr. Wiggles will keep you laughing with his comical antics. This light-hearted tale is guaranteed to bring a smile to your face and brighten your day. Get ready to giggle your way through the pages as Mr. Wiggles takes you on a journey of pure silliness!";

  return (
    <Container>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalBody>
          <CloseButton onClick={handleClose}>
            <IoIosClose />
          </CloseButton>
          <h2>{TITLE}</h2>
          <HorizontalLine />
          <p>{DESCRIPTION}</p>
        </ModalBody>
      </Modal>
    </Container>
  );
}

export default App;
