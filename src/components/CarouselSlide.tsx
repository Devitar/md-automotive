import styled from "styled-components";

type Props = {
  slideImg: string;
  slideText: string;
};

const CarouselSlide = ({ slideImg, slideText }: Props) => {
  return (
    <SlideWrap>
      <SlideImg src={slideImg} />
      <SlideText>{slideText}</SlideText>
    </SlideWrap>
  );
};

//Styles
const SlideWrap = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 300px;
  min-width: 125px;
  display: flex;
  justify-content: center;
`;

const SlideImg = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    width: auto;
  }
`;

const SlideText = styled.div`
  position: absolute;
  color: red;
  top: 75%;
`;

// Exports
export default CarouselSlide;
