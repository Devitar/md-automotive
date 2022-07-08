import { Carousel, Navbar, Page, Text } from "components";
import styled from "styled-components";
import { Container, Grid, Image } from "semantic-ui-react";
import waitingRoom from "assets/waiting-room.png";

/** Types */

/** Component */

const HomePage = () => {
  return (
    <Page>
      <Navbar />
      <Carousel />
      <ServicesSection>
        <Container></Container>
      </ServicesSection>
      <TrustSection>
        <Container>
          <Grid divided columns={2}>
            <Grid.Row centered>
              <Grid.Column width={16}>
                <Text bold fontSize={32}>
                  Trust
                </Text>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Image src={waitingRoom} />
              </Grid.Column>
              <Grid.Column>
                <Text>
                  We List To Your Needs!
                  <br />
                  This is the most overlooked area with many auto repair
                  companies in the automotive service industry.
                </Text>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </TrustSection>
    </Page>
  );
};

/** Styles */

const ServicesSection = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
`;

const TrustSection = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
`;

/** Exports */

export default HomePage;
