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
        <CarouselSlide slideImg={frontView} slideText={"Text1"} />
        <CarouselSlide slideImg={waitingRoomDesk} slideText={"Text2"} />
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

  .carousel-root {
    max-width: 800px;
  }
`;

/** Exports */
export default CarouselWrapper;
