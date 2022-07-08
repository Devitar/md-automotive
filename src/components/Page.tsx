import Background from "assets/carbon-fiber-woven-texture.jpg";
import React from "react";
import styled from "styled-components";

/** Component */

const Page = ({ children }: React.PropsWithChildren) => {
  return <Wrapper>{children}</Wrapper>;
};

/** Styles */

const Wrapper = styled.div`
  background-image: url(${Background});
  background-repeat: repeat;
  background-size: 300px;
  margin-top: 41px;
  min-height: 100vh;
  padding: 4px 0px;
  width: 100%;
`;

/** Exports */

export default Page;
