import WaitingRoom from "assets/waiting-room.png";
import { Divider, Page, Section, Text, Header } from "components";
import { useEffect, useRef, useState } from "react";
import { Card, Container, Grid } from "semantic-ui-react";
import styled from "styled-components";

/** Types */

/** Component */

const HomePage = () => {
  const ServicesRef = useRef<HTMLDivElement | null>(null);
  const [servicesHeight, setServicesHeight] = useState<number>(0);

  const TrustRef = useRef<HTMLDivElement | null>(null);
  const [trustHeight, setTrustHeight] = useState<number>(0);

  const AboutUsRef = useRef<HTMLDivElement | null>(null);
  const [aboutUsHeight, setAboutUsHeight] = useState<number>(0);

  const CardRef = useRef<HTMLDivElement | null>(null);
  const [cardWidth, setCardWidth] = useState<number>(0);

  useEffect(() => {
    setServicesHeight(ServicesRef?.current?.clientHeight ?? 0);
  }, [ServicesRef?.current?.clientHeight]);

  useEffect(() => {
    setTrustHeight(TrustRef?.current?.clientHeight ?? 0);
  }, [TrustRef?.current?.clientHeight]);

  useEffect(() => {
    setAboutUsHeight(AboutUsRef?.current?.clientHeight ?? 0);
  }, [AboutUsRef?.current?.clientHeight]);

  useEffect(() => {
    setCardWidth(CardRef?.current?.clientWidth ?? 0);
  }, [CardRef?.current?.clientWidth]);

  return (
    <Page>
      <Section id="Services">
        <Container>
          <Header showBanner>Services</Header>
          <Grid reversed="mobile" stackable>
            <Grid.Column width={8}>
              <div ref={ServicesRef}>
                <Card color="red" fluid>
                  <Card.Content>
                    <Text bold fontSize={20}>
                      MD Automotive Repair specializes in all makes and models
                      services!
                    </Text>
                    <Divider />
                    <Text>
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
      </Section>
      <Section id="Trust" background="secondary">
        <Container>
          <Header showBanner>Trust</Header>
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
                      what we do&nbsp;
                    </Text>
                    <Text bold>before</Text>
                    <Text>
                      &nbsp;the work is done. Then we will perform the proper
                      type of diagnosis of your problem and call before the work
                      is done. A complete explanation of the problem areas are
                      detailed to you. You will understand what has to be done,
                      why and what the cost will be. You are a part of the
                      repair process and the decisions. With a 20+ years
                      experienced mechanic you'll know you're receiving
                      unmatched service compared to others in the area.
                    </Text>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Section>
      <Section>
        <Container>
          <Header showBanner>About Us</Header>
          <Grid reversed="mobile" stackable>
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
            <Grid.Column width={8}>
              <ImageContainer style={{ height: aboutUsHeight }}>
                <img src={WaitingRoom} alt="" />
              </ImageContainer>
            </Grid.Column>
          </Grid>
        </Container>
      </Section>
      <Section background={"secondary"}>
        <Container>
          <Header>Contact Us</Header>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div style={{ paddingBottom: "8px", paddingTop: "8px" }}>
                <Text bold>Location: </Text>
                <Text
                  link
                  mask={"1274 W 300 S St, Lindon, UT 84042"}
                  fontSize={16}
                >
                  {
                    "https://www.google.com/maps?ll=40.33162,-111.745175&z=17&t=m&hl=en&gl=US&mapclient=embed&cid=1072264808114827680"
                  }
                </Text>
              </div>
              <iframe
                title="mapskis"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2150.6175488091562!2d-111.74628464204534!3d40.33275062721492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee1732970d631a0!2sMD%20automotive%20repair!5e0!3m2!1sen!2sus!4v1657410800816!5m2!1sen!2sus"
                width={cardWidth > 400 ? 400 : cardWidth}
                height={cardWidth > 400 ? 400 : cardWidth}
                style={{
                  border: 0,
                  zIndex: 1,
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div ref={CardRef}>
              <Card color="red" fluid>
                <Card.Content>
                  <table className="ui celled table unstackable">
                    <thead>
                      <tr>
                        <th>Location</th>
                        <th>Contact Number</th>
                        <th>Hours</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Location">
                          852 north 1430 west Orem 84057
                        </td>
                        <td data-label="Contact Number">(801) 687-0721</td>
                        <td data-label="Hours">Monday - Saturday 8am to 6pm</td>
                      </tr>
                    </tbody>
                  </table>
                </Card.Content>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
};

/** Styles */

const ImageContainer = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  justify-content: center;
  overflow: hidden;

  img {
    object-fit: cover;
    height: 100% !important;
    width: 100% !important;
  }
`;

/** Exports */

export default HomePage;
