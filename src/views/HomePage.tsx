import { Button } from "semantic-ui-react";
import { Navbar, Carousel, Page, TrustSection } from "components";
// import styled from 'styled-components'

/** Types */

/** Component */

const HomePage = () => {
  return (
    <Page>
      <Navbar />
      Home Page
      <Button>Click Me</Button>
      <Carousel />
      <TrustSection />
    </Page>
  );
};

/** Styles */

/** Exports */

export default HomePage;
