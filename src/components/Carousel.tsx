import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import frontView from "../assets/front-view.png";
import waitingRoomDesk from "../assets/waiting-room.png";
import waitingRoom from "../assets/waiting-room2.png";

const CarouselWrapper = () => {
  return (
    <CarouselWrap>
      <Carousel>
        <ImageWrap>
          <img src={frontView} alt="Front of store" />
          <p className="legend">Legend 1</p>
        </ImageWrap>
        <ImageWrap>
          <img src={waitingRoomDesk} alt="Waiting room - Desk" />
          <p className="legend">Legend 2</p>
        </ImageWrap>
        <ImageWrap>
          <img src={waitingRoom} alt="Waiting room" />
          <p className="legend">Legend 3</p>
        </ImageWrap>
      </Carousel>
    </CarouselWrap>
  );
};

/** Styles */
const CarouselWrap = styled.div`
  display: flex;
  justify-content: center;

  .carousel-root {
    max-width: 800px;
  }
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;

  img {
    height: 100%;
    width: auto;
    object-fit: cover;
  }
`;

/** Exports */
export default CarouselWrapper;
