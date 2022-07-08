import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import CarouselSlide from "./CarouselSlide";
import frontView from "../assets/front-view.png";
import waitingRoomDesk from "../assets/waiting-room.png";
import waitingRoom from "../assets/waiting-room2.png";

const CarouselWrapper = () => {
  return (
    <CarouselWrap>
      <Carousel showThumbs={false} showStatus={false}>
        <CarouselSlide slideImg={frontView} slideText={"Come see us!"} />
        <CarouselSlide
          slideImg={waitingRoomDesk}
          slideText={"Schedule an appointment!"}
        />
        <CarouselSlide slideImg={waitingRoom} slideText={"Text3"} />
      </Carousel>
    </CarouselWrap>
  );
};

/** Styles */
const CarouselWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  border-top: 1px solid black;

  .carousel-root {
    max-width: 800px;
  }
`;

/** Exports */
export default CarouselWrapper;
