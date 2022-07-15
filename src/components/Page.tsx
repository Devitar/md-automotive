import Background from "assets/carbon-fiber-woven-texture.webp";
import { Navbar, NavbarMobile } from "components";
import React from "react";
import styled from "styled-components";

/** Component */

const Page = ({ children }: React.PropsWithChildren) => {
  return (
    <Wrapper>
      <Navbar />
      <NavbarMobile />
      {children}
    </Wrapper>
  );
};

/** Styles */

const Wrapper = styled.div`
  background-image: url(${Background});
  background-repeat: repeat;
  background-size: 300px;
  margin-top: 65px;
  min-height: 100vh;
  padding: 4px 0px;
  width: 100%;

  @media only screen and (max-width: 799px) {
    margin-top: 60px;
  }
`;

/** Exports */

export default Page;
