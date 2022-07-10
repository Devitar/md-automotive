import BannerImg from "assets/banner-red.png";
import styled from "styled-components";
import { Text } from "components";

/** Types */

type Props = {
  /** Shows the banner image behind the text. */
  showBanner?: boolean;
};

/** Component */

const Header = ({ children, showBanner }: React.PropsWithChildren<Props>) => {
  return showBanner ? (
    <Wrapper>
      <Banner src={BannerImg} />
      <SectionHeaderText bold>{children}</SectionHeaderText>
    </Wrapper>
  ) : (
    <SectionHeaderText bold>{children}</SectionHeaderText>
  );
};

/** Styles */

const SectionHeaderText = styled(Text)`
  display: flex;
  font-family: "Roboto Slab", serif;
  font-size: 2.5rem !important;
  justify-content: center;
  margin-bottom: 22px;
  margin-top: 8px;
  width: 100%;
  /* z-index: 2; */
`;

const Wrapper = styled.div`
  position: relative;
  /* display: flex; */
  /* justify-content: center; */
`;

const Banner = styled.img`
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
`;

/** Exports */

export default Header;
