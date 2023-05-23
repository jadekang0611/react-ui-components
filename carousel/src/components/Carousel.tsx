import { useState } from "react";
import styled from "@emotion/styled/macro";
import { css } from "@emotion/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CarouselImg1 from "../assets/1.png";
import CarouselImg2 from "../assets/2.png";
import CarouselImg3 from "../assets/3.png";
import CarouselImg4 from "../assets/4.png";

const Base = styled.div`
  padding: 2rem;
`;

const Container = styled.div`
  position: relative;
  border-radius: 12px;
`;

/**
 * This component represents a styled button with an arrow icon. It accepts a position prop
 * to determine whether the button is positioned on the left or right side.
 * @component
 * @param {("left" | "right")} pos - The position of the button. Must be either "left" or "right".
 * @example
 // Usage example
 * <ArrowButton pos="left"/>
 * @returns {JSX.Element} A React element representing the styled arrow button.
 */

const ArrowButton = styled.button<{ pos: "left" | "right" }>`
  position: absolute;
  top: 50%;
  z-index: 1;
  padding: 8px 12px;
  font-size: 64px;
  font-weight: bold;
  background-color: transparent;
  color: #fff;
  border: none;
  margin: 0;
  cursor: pointer;
  ${({ pos }) =>
    pos === "left"
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};
`;

const CarouselList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
  border-radius: 12px;
`;

/**
* This component represents an item within a carousel/slider. It accepts the active slider's index as a prop.
*@component
*@param {number} activeIndex - The index of the currently active slider.
*@throws {TypeError} The activeIndex must be a number.
*@example
// Usage example
*<CarouselListItem activeIndex={2} />
*@returns {JSX.Element} A React element representing the carousel list item.
*/

const CarouselListItem = styled.li<{ activeIndex: number }>`
  width: 100%;
  flex: 1 0 100%;
  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
  transition: 300ms ease;
  border-radius: 12px;
  border: none;
  > img {
    max-width: 100%;
    height: fit-content;
    border-radius: 12px;
  }
`;

/**
 * This component represents a button within a carousel/slider. It accepts the isActive as a prop.
 * @component
 * @param {boolean} isActive - The boolean value of the currently active button.
 *@throws {TypeError} The isActive must be boolean.
 *@example
// Usage example
*<NavButton isActive={isActive} />
*@returns {JSX.Element} A React element representing the carousel nav button.
*/

const NavButton = styled.button<{ isActive?: boolean }>`
  width: 44px;
  height: 24px;
  border: none;
  border-radius: 2px;
  background-color: #8d7055;
  opacity: ${({ isActive }) => (isActive ? 0.6 : 0.2)};
  cursor: pointer;
`;

const NavItem = styled.li`
  display: inline-block;
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  ${NavItem} + ${NavItem} {
    margin-left: 8px;
  }
`;

// Use the banners array to test the Carousel UI
const banners = [CarouselImg1, CarouselImg2, CarouselImg3, CarouselImg4];

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleNext = () => {
    // % banners. length is necessary to set activeIndex to the 0 once activeIndex hits the last one.
    setActiveIndex((prev) => (prev + 1) % banners.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleGoTo = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <Base>
      <Container>
        {banners.length && (
          <ArrowButton pos="left" onClick={handlePrev}>
            <IoIosArrowBack />
          </ArrowButton>
        )}
        <CarouselList>
          {banners.map((url, index) => (
            <CarouselListItem activeIndex={activeIndex} key={index}>
              <img src={url} alt={`carousel demo img ${index}`} />
            </CarouselListItem>
          ))}
        </CarouselList>
        {banners.length && (
          <ArrowButton pos="right" onClick={handleNext}>
            <IoIosArrowForward />
          </ArrowButton>
        )}
      </Container>
      {banners.length && (
        <Nav>
          {Array.from({ length: banners.length }).map((_, index) => (
            <NavItem key={index}>
              <NavButton
                isActive={activeIndex === index}
                onClick={() => handleGoTo(index)}
              />
            </NavItem>
          ))}
        </Nav>
      )}
    </Base>
  );
};

export default Carousel;
