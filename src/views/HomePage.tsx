import { Carousel, Navbar, Page, Text } from "components";
import styled from "styled-components";
import { Container, Grid, Card } from "semantic-ui-react";
import waitingRoom from "assets/waiting-room.png";
import { useEffect, useRef, useState } from "react";

/** Types */

/** Component */

const HomePage = () => {
  const ServicesRef = useRef<HTMLDivElement | null>(null);
  const [servicesHeight, setServicesHeight] = useState<number>(0);

  useEffect(() => {
    setServicesHeight(ServicesRef?.current?.clientHeight ?? 0);
  }, [ServicesRef?.current?.clientHeight]);

  return (
    <Page>
      <Navbar />
      <ServicesSection>
        <Container>
          <SectionHeaderText bold>Services</SectionHeaderText>
          <Grid reversed="mobile" stackable>
            <Grid.Column width={8} verticalAlign="middle">
              <div ref={ServicesRef}>
                <Card color="red" fluid>
                  <Card.Content>
                    <Text>
                      MD Automotive Repair specializes in all makes and models
                      services:
                      <br />
                      <br />
                      All heavy and light work repairs your vehicle could need.
                      Including custom fabrication, engine and transmission
                      repair or replacement. We perform a full variety of
                      diagnostics services to meet your vehicle's drivability
                      issue. We are also hybrid friendly. MD Automotive Repair
                      is a licensed and insured shop with ASE certification.
                      Here at MD Automotive Repair we strive to be educated to
                      the changes in the technology of the automotive industry.
                      No job too big or too small, please give us a call.
                    </Text>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <ImageContainer style={{ height: servicesHeight }}>
                <img src={waitingRoom} alt="" />
              </ImageContainer>
            </Grid.Column>
          </Grid>
        </Container>
      </ServicesSection>
    </Page>
  );
};

/** Styles */

const SectionHeaderText = styled(Text)`
  font-size: 2.5rem !important;
  height: calc(auto + 44px);
  justify-content: center;
  margin-top: 8px;
  margin-bottom: 22px;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;

  img {
    object-fit: cover;
    height: 100% !important;
    width: 100% !important;
  }
`;

const ServicesSection = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 16px 16px;
  padding-bottom: 12px;
  padding-top: 12px;
`;

const TrustSection = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

/** Exports */

export default HomePage;
