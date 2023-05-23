import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import CarouselImg1 from "../assets/1.jpg";
import CarouselImg2 from "../assets/2.jpg";
import CarouselImg3 from "../assets/3.jpg";
import CarouselImg4 from "../assets/4.jpg";

const Base = styled.div``;

const Container = styled.div`
  position: relative;
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
  font-size: 48px;
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
        `}
`;

const CarouselList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
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
  transition: 200ms ease;
  > img {
    width: 100%;
    height: fit-content;
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
  width: 4px;
  height: 4px;
  background-color: #000;
  opacity: ${({ isActive }) => (isActive ? 0.3 : 0.1)};
`;

const NavItem = styled.li`
  display: inline-block;
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  ${NavItem} + ${NavItem} {
    margin-left: 4px;
  }
`;

// Use the banners array to test the Carousel UI
const banners = [CarouselImg1, CarouselImg2, CarouselImg3, CarouselImg4];

const Carousel: React.FC = () => {
  return (
    <Base>
      <Container>
        <ArrowButton pos="left">
          <RiArrowDropLeftLine />
        </ArrowButton>
        <ArrowButton pos="right">
          <RiArrowDropRightLine />
        </ArrowButton>
        <CarouselList>
          {banners.map((banner, idx) => (
            <CarouselListItem key={idx}>
              <img src={banner} alt={"banner" + idx} />
            </CarouselListItem>
          ))}
        </CarouselList>
      </Container>
      <Nav>
        {Array.from({ length: banners.length }).map((_, idx) => (
          <NavItem key={idx}>
            <NavButton />
          </NavItem>
        ))}
      </Nav>
    </Base>
  );
};

export default Carousel;
