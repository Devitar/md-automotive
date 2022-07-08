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
  border: 1px solid black;
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: 300px;
  min-width: 130px;
  position: relative;
  width: 100%;
`;

const SlideImg = styled.img`
  height: 100%;
  position: absolute;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    width: auto;
  }
`;

const SlideText = styled.div`
  background: linear-gradient(
    to right,
    rgba(181, 14, 14, 0.1),
    rgba(181, 14, 14, 0.4)
  );
  background-position: left bottom;
  background-size: 200% 100%;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid white;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  padding: 6px 15px;
  position: absolute;
  top: 65%;
  transition: all 0.5s ease;

  &:hover {
    background-position: right bottom;
    border: 2px solid white;
    font-size: 20px;
    padding: 7px 16px;
  }
`;

// Exports
export default CarouselSlide;
