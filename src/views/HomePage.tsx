import aseLogo from "assets/ASE-logo.webp";
import carTransmission from "assets/car_transmission.png";
import coolingSystem from "assets/cooling-system.png";
import aboutUsImg from "assets/corner.webp";
import Logo from "assets/logo-transparent.webp";
import autoShopFront from "assets/md-automotive-front.webp";
import oilIcon from "assets/oil.webp";
import wallPlaque from "assets/plaque.webp";
import timingBelt from "assets/timing-belt.png";
import WrenchesHero from "assets/wrenches_hero.webp";
import { Divider, Header, Page, Section, Text } from "components";
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
  const [aboutUsWidth, setAboutUsWidth] = useState<number>(0);

  useEffect(() => {
    setServicesHeight(ServicesRef?.current?.clientHeight ?? 0);
  }, [ServicesRef?.current?.clientHeight]);

  useEffect(() => {
    setTrustHeight(TrustRef?.current?.clientHeight ?? 0);
  }, [TrustRef?.current?.clientHeight]);

  useEffect(() => {
    setAboutUsHeight(AboutUsRef?.current?.clientHeight ?? 0);
    setAboutUsWidth(AboutUsRef?.current?.clientWidth ?? 0);
  }, [AboutUsRef?.current?.clientHeight, AboutUsRef?.current?.clientWidth]);

  return (
    <Page>
      <HeroContainer id="Hero">
        <img className="hero-image" src={WrenchesHero} alt="" />
        <div className="hero-content">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <table className="ui very basic collapsing celled table unstackable">
            <tbody>
              <tr className="positive">
                <td>
                  <img
                    src={aseLogo}
                    className="ui tiny rounded image"
                    alt="ASE Logo"
                  />
                </td>
                <td>
                  <i className="icon checkmark"></i> <Text>Certified</Text>
                </td>
              </tr>
              <tr className="positive">
                <td>
                  <Text>Hybrid Capability</Text>
                </td>
                <td>
                  <i className="icon checkmark"></i> <Text>Capable</Text>
                </td>
              </tr>
              <tr className="positive">
                <td>
                  <Text>Engine Repair</Text>
                </td>
                <td>
                  <i className="icon checkmark"></i>{" "}
                  <Text>Light &amp; Heavy</Text>
                </td>
              </tr>
              <tr className="positive">
                <td>
                  <Text>Check Engine Light?</Text>
                </td>
                <td>
                  <i className="icon checkmark"></i> <Text>Diagnostics</Text>
                </td>
              </tr>
              <tr className="positive">
                <td>
                  <Text>Big job? Small job?</Text>
                </td>
                <td>
                  <i className="icon checkmark"></i> <Text>No Problem!</Text>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </HeroContainer>
      <Section id="Services">
        <Container>
          <Header showBanner>Services</Header>
          <Grid reversed="mobile" stackable>
            <Grid.Column width={8}>
              <div ref={ServicesRef}>
                <Card color="red" fluid>
                  <Card.Content>
                    <Text bold fontSize={"1.5rem"} header>
                      MD Automotive Repair specializes in all makes and models
                      services!
                    </Text>
                    <Divider />
                    <Text>
                      All heavy and light work repairs your vehicle could need.
                      Including:
                    </Text>
                    <div className="ui bulleted list">
                      <div className="item">
                        <Text>Custom Fabrication</Text>
                      </div>
                      <div className="item">
                        <div>
                          <Text>Engine</Text>
                        </div>
                        <div className="list">
                          <div className="item">
                            <Text>Overhaul</Text>
                          </div>
                          <div className="item">
                            <Text>Rebuild</Text>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div>
                          <Text>Transmission</Text>
                        </div>
                        <div className="list">
                          <div className="item">
                            <Text>Rebuild</Text>
                          </div>
                          <div className="item">
                            <Text>Repair</Text>
                          </div>
                          <div className="item">
                            <Text>Replacement</Text>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <Text>Differentials</Text>
                      </div>
                      <div className="item">
                        <Text>Light Body Work</Text>
                      </div>
                      <div className="item">
                        <Text>A/C Services</Text>
                      </div>
                    </div>
                    <Text>
                      We perform a full variety of diagnostic services to meet
                      your vehicle's drivability issue supporting suspension
                      work, brake work, and even welding!
                      <br />
                      <br />
                      No job too big or too small, please give us a call!
                    </Text>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <ImageContainer imageHeight={servicesHeight}>
                <img
                  src={autoShopFront}
                  alt="Front entrance of MD Automotive location."
                />
              </ImageContainer>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column width={16}>
              <table className="ui celled table">
                <thead>
                  <tr>
                    <th>
                      <Text>Service</Text>
                    </th>
                    <th>
                      <Text>Cost</Text>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h4 className="ui image header">
                        <img
                          src={oilIcon}
                          className="ui mini rounded image"
                          alt=""
                        />
                        <div className="content">
                          <Text>Oil Change</Text>
                        </div>
                      </h4>
                    </td>
                    <td className="positive">
                      <Text>$75.00 Full Synthetic</Text>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4 className="ui image header">
                        <img
                          src={timingBelt}
                          className="ui mini rounded image"
                          alt=""
                        />
                        <div className="content">
                          <Text>Timing Belts</Text>
                        </div>
                      </h4>
                    </td>
                    <td className="positive">
                      <Text>Starting at $600.00</Text>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4 className="ui image header">
                        <img
                          src={coolingSystem}
                          className="ui mini rounded image"
                          alt=""
                        />
                        <div className="content">
                          <Text>Cooling Systems / Flushes</Text>
                        </div>
                      </h4>
                    </td>
                    <td className="positive">
                      <Text>$140.00 Flat Rate</Text>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h4 className="ui image header">
                        <img
                          src={carTransmission}
                          className="ui mini rounded image"
                          alt=""
                        />
                        <div className="content">
                          <Text>Transmission Service</Text>
                        </div>
                      </h4>
                    </td>
                    <td className="positive">
                      <Text>Starting at $120.00</Text>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Grid.Column>
          </Grid>
        </Container>
      </Section>
      <Section background="secondary">
        <Container>
          <Header showBanner>Trust</Header>
          <Grid stackable>
            <Grid.Column width={8}>
              <ImageContainer imageHeight={trustHeight}>
                <img src={wallPlaque} alt="" />
              </ImageContainer>
            </Grid.Column>
            <Grid.Column width={8}>
              <div
                ref={TrustRef}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Card color="red" fluid>
                  <Card.Content>
                    <Text bold fontSize={"1.5rem"}>
                      We Listen To Your Needs!
                    </Text>
                    <Divider />
                    <Text>
                      This is the most overlooked area with many auto repair
                      companies in the automotive service industry. We explain
                      what we do&nbsp;
                    </Text>
                    <Text bold>before</Text>
                    <Text>
                      &nbsp;the work is done.
                      <br />
                      <br />
                      Then we will perform the proper type of diagnosis of your
                      problem and call before the work is done.
                      <br />
                      <br />
                      A complete explanation of the problem areas are detailed
                      to you. You will understand what has to be done, why and
                      what the cost will be.
                      <br />
                      <br />
                      You are a part of the repair process and the decisions.
                    </Text>
                    <Divider />
                    <Text>
                      With a <strong>20+</strong> years experienced mechanic
                      you'll know you're receiving unmatched service compared to
                      others in the area!
                    </Text>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Section>
      <Section id="AboutUs">
        <Container>
          <Header showBanner>About Us</Header>
          <Grid reversed="mobile" stackable>
            <Grid.Column width={8}>
              <div ref={AboutUsRef}>
                <Card color="red" fluid>
                  <Card.Content>
                    <Text bold fontSize={"1.5rem"}>
                      We are your expert specialty shop without inflated prices!
                    </Text>
                    <Divider />
                    <Text>
                      Been in business since November 2018!
                      <br />
                      <br />
                      We have the equipment to do the job <strong>
                        RIGHT
                      </strong>{" "}
                      which will save you time and money. We know what it takes
                      to service all your automotive needs.
                      <br />
                      <br />
                      We also can save you money on maintenance. We provide
                      expert, friendly service at affordable pricing.
                    </Text>
                    <Divider />
                    <Text bold fontSize={"1.3rem"}>
                      About Us:
                    </Text>
                    <br />
                    <Text>
                      Mike Davis, owner and operator of MD Automotive, has been
                      doing mechanic work since 2009!
                      <br />
                      <br />
                      He loves doing it, and started rebuilding engines as a
                      hobby before becoming a professional mechanic.
                      <br />
                      <br />
                      He is hard driven and always strives to bring the best in
                      the business to the table!
                    </Text>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <ImageContainer imageHeight={aboutUsHeight}>
                <img src={aboutUsImg} alt="" />
              </ImageContainer>
            </Grid.Column>
          </Grid>
        </Container>
      </Section>
      <Section id="ContactUs" background={"secondary"}>
        <Container>
          <Header>Contact Us</Header>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Grid reversed="mobile" stackable container>
              <Grid.Column width={8}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <div style={{ paddingBottom: "8px", paddingTop: "8px" }}>
                    <Text bold color="white">
                      Location:{" "}
                    </Text>
                    <Text
                      link
                      mask={"1274 W 300 S St, Lindon, UT 84042"}
                      fontSize={"1.1rem"}
                      color="white"
                      textDecoration="underline"
                    >
                      {
                        "https://www.google.com/maps?ll=40.33162,-111.745175&z=17&t=m&hl=en&gl=US&mapclient=embed&cid=1072264808114827680"
                      }
                    </Text>
                  </div>
                  <iframe
                    title="mapskis"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2150.6175488091562!2d-111.74628464204534!3d40.33275062721492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee1732970d631a0!2sMD%20automotive%20repair!5e0!3m2!1sen!2sus!4v1657410800816!5m2!1sen!2sus"
                    width={aboutUsWidth - 25}
                    height={aboutUsWidth - 25}
                    style={{
                      border: 0,
                      zIndex: 1,
                    }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Grid.Column>
              <Grid.Column width={8} style={{ marginTop: 58 }}>
                <CardWrapper>
                  <Card color="red" fluid>
                    <Card.Content>
                      <div style={{ paddingBottom: "8px", paddingTop: "8px" }}>
                        <Text bold fontSize={"1.5rem"}>
                          Phone:{" "}
                        </Text>
                        <Text
                          link="telephone"
                          fontSize={"1.5rem"}
                          textDecoration="underline"
                        >
                          +1 (385) 336 - 3652
                        </Text>
                      </div>
                      <table className="ui celled table unstackable">
                        <thead>
                          <tr>
                            <th style={{ fontSize: "1.5rem" }}>
                              <Text bold>Days</Text>
                            </th>
                            <th style={{ fontSize: "1.5rem" }}>
                              <Text bold>Hours</Text>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Days">
                              <Text bold>Monday</Text>
                            </td>
                            <td data-label="Operational Hours">
                              <Text bold>8AM - 6PM</Text>
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Days">
                              <Text bold>Tuesday</Text>
                            </td>
                            <td data-label="Operational Hours">
                              <Text bold>8AM - 6PM</Text>
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Days">
                              <Text bold>Wednesday</Text>
                            </td>
                            <td data-label="Operational Hours">
                              <Text bold>8AM - 6PM</Text>
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Days">
                              <Text bold>Thursday</Text>
                            </td>
                            <td data-label="Operational Hours">
                              <Text bold>8AM - 6PM</Text>
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Days">
                              <Text bold>Friday</Text>
                            </td>
                            <td data-label="Operational Hours">
                              <Text bold>8AM - 6PM</Text>
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Days">
                              <Text bold>Saturday</Text>
                            </td>
                            <td data-label="Operational Hours">
                              <Text bold>
                                8AM - <span style={{ color: "red" }}>4PM</span>
                              </Text>
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Days" style={{ color: "red" }}>
                              <Text bold>Sunday</Text>
                            </td>
                            <td
                              data-label="Operational Hours"
                              style={{ color: "red" }}
                            >
                              <Text bold>Closed</Text>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Card.Content>
                  </Card>
                </CardWrapper>
              </Grid.Column>
            </Grid>
          </div>
        </Container>
      </Section>
    </Page>
  );
};

/** Styles */

const HeroContainer = styled.div`
  height: 500px;
  overflow: hidden;
  position: relative;
  width: 100vw;

  .hero-image {
    height: auto;
    object-fit: cover;
    width: 100%;
  }

  .hero-content {
    align-items: center;
    display: flex;
    gap: 10rem;
    height: 100%;
    justify-content: center;
    padding-top: 8px;
    position: absolute;
    top: 0;
    width: 100%;
  }

  table {
    background-color: transparent;
    box-sizing: border-box;
    height: 80%;
    margin-top: 0px !important;

    td {
      padding: 8px 12px !important;
      white-space: nowrap;
    }
  }

  .logo {
    max-width: 325px;
    width: 30%;

    img {
      height: auto;
      object-fit: contain;
      width: 100%;
    }
  }

  @media only screen and (max-width: 799px) {
    box-sizing: border-box;
    max-height: 310px;
    margin-top: -5px;

    .hero-image {
      display: none;
    }

    .hero-content {
      padding-top: 0px;
    }

    table {
      height: 100%;
      width: 100% !important;
    }

    .logo {
      display: none;
    }
  }
`;

const ImageContainer = styled.div<{ imageHeight: number }>`
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: ${({ imageHeight }) => `${imageHeight}px`};

  img {
    height: auto;
    object-fit: cover;
    width: 100% !important;
  }

  @media only screen and (max-width: 799px) {
    height: ${({ imageHeight }) => `${imageHeight / 2}px`};
  }
`;

const CardWrapper = styled.div`
  display: "flex";
  flex-direction: column;
  height: 100%;

  @media only screen and (max-width: 799px) {
    .card {
      margin-top: 0px !important;
    }
  }
`;

/** Exports */

export default HomePage;
