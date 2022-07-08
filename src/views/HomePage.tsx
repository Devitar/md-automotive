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
      {/* <Carousel /> */}
      <ServicesSection>
        <Container>
          <SectionHeaderText bold>Services</SectionHeaderText>
          <Grid reversed="mobile" stackable>
            <Grid.Column width={8}>
              <Text>
                MD Automotive Repair specializes in all makes and models
                services:
                <br />
                <br />
                All heavy and light work repairs your vehicle could need.
                Including custom fabrication, engine and transmission repair or
                replacement. We perform a full variety of diagnostics services
                to meet your vehicle's drivability issue. We are also hybrid
                friendly. MD Automotive Repair is a licensed and insured shop
                with ASE certification. Here at MD Automotive Repair we strive
                to be educated to the changes in the technology of the
                automotive industry. No job too big or too small, please give us
                a call.
              </Text>
            </Grid.Column>
            <Grid.Column width={8}>
              <Image src={waitingRoom} />
            </Grid.Column>
          </Grid>
        </Container>
      </ServicesSection>
      <TrustSection>
        <Container>
          <SectionHeaderText bold>Trust</SectionHeaderText>
          <Grid stackable>
            <Grid.Column width={8}>
              <Image src={waitingRoom} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Text>
                We Listen To Your Needs!
                <br />
                <br />
                This is the most overlooked area with many auto repair companies
                in the automotive service industry. We explain what we do BEFORE
                the work is done. Then we will perform the proper type of
                diagnosis of your problem and call before the work is done. A
                complete explanation of the problem areas are detailed to you.
                You will understand what has to be done, why and what the cost
                will be. You are a part of the repair process and the decisions.
                With a 20+ years experienced mechanic you'll know you're
                receiving unmatched service compared to others in the area.
              </Text>
            </Grid.Column>
          </Grid>
        </Container>
      </TrustSection>
    </Page>
  );
};

/** Styles */

const SectionHeaderText = styled(Text)`
  justify-content: center;
  font-size: 2.5rem;
  margin: 22px 0px;
  width: 100%;
  height: calc(auto + 44px);
`;

const ServicesSection = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
`;

const TrustSection = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

/** Exports */

export default HomePage;
