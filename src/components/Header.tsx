import BannerImg from "assets/banner-red.png";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

/** Types */

type Props = {
  /** Shows the banner image behind the text. */
  showBanner?: boolean;
};

/** Component */

const Header = ({ children, showBanner }: React.PropsWithChildren<Props>) => {
  const [textWidth, setTextWidth] = useState<number>(0);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    setTextWidth(textRef?.current?.clientWidth ?? 0);
  }, [textRef?.current?.clientWidth]);

  return showBanner ? (
    <Wrapper>
      <Banner src={BannerImg} style={{ width: textWidth + 100 }} />
      <SectionHeaderText ref={textRef}>{children}</SectionHeaderText>
    </Wrapper>
  ) : (
    <Wrapper>
      <SectionHeaderText
        style={{
          textDecoration: "underline",
          textDecorationColor: "white",
          fontSize: "2rem",
        }}
      >
        {children}
      </SectionHeaderText>
    </Wrapper>
  );
};

/** Styles */

const SectionHeaderText = styled.h2`
  display: inline-block;
  font-family: "Roboto Slab", serif;
  font-size: 2.5rem;
  margin-top: 0px;
  position: relative;
  z-index: 2;
  color: white;

  @supports (-webkit-text-stroke: 1.5px black) {
    -webkit-text-stroke: 1.5px black;
    -webkit-text-fill-color: white;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 8px 0px;
  position: relative;
`;

const Banner = styled.img`
  height: 115%;
  left: 50%;
  position: absolute;
  top: 0;
  transform: translate(-50%, -15%);
  z-index: 1;
`;

/** Exports */

export default Header;
