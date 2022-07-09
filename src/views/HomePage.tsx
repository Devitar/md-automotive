import { Navbar, Page, Text } from "components";
import styled from "styled-components";
import { Container, Grid, Card } from "semantic-ui-react";
import WaitingRoom from "assets/waiting-room.png";
import { useEffect, useRef, useState } from "react";

/** Types */

/** Component */

const HomePage = () => {
  const ServicesRef = useRef<HTMLDivElement | null>(null);
  const [servicesHeight, setServicesHeight] = useState<number>(0);

  const TrustRef = useRef<HTMLDivElement | null>(null);
  const [trustHeight, setTrustHeight] = useState<number>(0);

  const AboutUsRef = useRef<HTMLDivElement | null>(null);
  const [aboutUsHeight, setAboutUsHeight] = useState<number>(0);

  useEffect(() => {
    setServicesHeight(ServicesRef?.current?.clientHeight ?? 0);
  }, [ServicesRef?.current?.clientHeight]);

  useEffect(() => {
    setTrustHeight(TrustRef?.current?.clientHeight ?? 0);
  }, [TrustRef?.current?.clientHeight]);

  useEffect(() => {
    setAboutUsHeight(AboutUsRef?.current?.clientHeight ?? 0);
  }, [AboutUsRef?.current?.clientHeight]);

  return (
    <Page>
      <Navbar />
      <ServicesSection>
        <Container>
          <SectionHeaderText bold>Services</SectionHeaderText>
          <Grid reversed="mobile" stackable>
            <Grid.Column width={8}>
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
                <img src={WaitingRoom} alt="" />
              </ImageContainer>
            </Grid.Column>
          </Grid>
        </Container>
      </ServicesSection>
      <TrustSection>
        <Container>
          <SectionHeaderText bold>Trust</SectionHeaderText>
          <Grid stackable>
            <Grid.Column width={8}>
              <ImageContainer style={{ height: trustHeight }}>
                <img src={WaitingRoom} alt="" />
              </ImageContainer>
            </Grid.Column>
            <Grid.Column width={8}>
              <div ref={TrustRef}>
                <Card color="red" fluid>
                  <Card.Content>
                    <Text>
                      We Listen To Your Needs!
                      <br />
                      <br />
                      This is the most overlooked area with many auto repair
                      companies in the automotive service industry. We explain
                      what we do BEFORE the work is done. Then we will perform
                      the proper type of diagnosis of your problem and call
                      before the work is done. A complete explanation of the
                      problem areas are detailed to you. You will understand
                      what has to be done, why and what the cost will be. You
                      are a part of the repair process and the decisions. With a
                      20+ years experienced mechanic you'll know you're
                      receiving unmatched service compared to others in the
                      area.
                    </Text>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </TrustSection>
      <AboutUsSection>
        <Container>
          <SectionHeaderText bold>About Us</SectionHeaderText>
          <Grid stackable>
            <Grid.Column width={8}>
              <ImageContainer style={{ height: aboutUsHeight }}>
                <img src={WaitingRoom} alt="" />
              </ImageContainer>
            </Grid.Column>
            <Grid.Column width={8}>
              <div ref={AboutUsRef}>
                <Card color="red" fluid>
                  <Card.Content>
                    <Text>
                      We are your expert specialty shop without inflated prices!
                      <br />
                      <br />
                      We have the equipment to do the job RIGHT which will save
                      you time and money. We know what it takes to service all
                      your automotive needs.
                      <br />
                      <br />
                      We also can save you money on maintenance. We provide
                      expert, friendly service at affordable pricing.
                    </Text>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </AboutUsSection>
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
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 16px 16px;
  padding-bottom: 12px;
  padding-top: 12px;
`;

const AboutUsSection = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 16px 16px;
  padding-bottom: 12px;
  padding-top: 12px;
`;

/** Exports */

export default HomePage;
