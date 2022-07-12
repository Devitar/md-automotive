import { Divider, Page, Section, Text, Header } from "components";
import { useEffect, useRef, useState } from "react";
import { Card, Container, Grid } from "semantic-ui-react";
import styled from "styled-components";
import aseLogo from "../assets/ASE-logo.png";
import oilIcon from "../assets/oil.png";
import carTransmission from "../assets/car_transmission.png";
import coolingSystem from "../assets/cooling-system.png";
import engineBlock from "../assets/auto-engine-block.jpg";
import autoShopFront from "../assets/md-automotive-front.jpg";
import wallPlaque from "../assets/plaque.jpg";
import aboutUsImg from "../assets/corner.jpg";
import timingBelt from "../assets/timing-belt.png";

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
                      Including:
                    </Text>
                    <div className="ui bulleted list">
                      <div className="item">Custom Fabrication</div>
                      <div className="item">
                        <div>Engine</div>
                        <div className="list">
                          <div className="item">Overhaul</div>
                          <div className="item">Rebuild</div>
                        </div>
                      </div>
                      <div className="item">
                        <div>Transmission</div>
                        <div className="list">
                          <div className="item">Rebuild</div>
                          <div className="item">Repair</div>
                          <div className="item">Replacement</div>
                        </div>
                      </div>
                      <div className="item">Differentials</div>
                      <div className="item">Light Body Work</div>
                      <div className="item">A/C Services</div>
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
              <ImageContainer style={{ height: servicesHeight }}>
                <img src={autoShopFront} alt="Car Engine Block" />
              </ImageContainer>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column width={16}>
              <table className="ui celled table">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Cost</th>
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
                        <div className="content">Oil Change</div>
                      </h4>
                    </td>
                    <td className="positive">$75.00 Full Synthetic</td>
                  </tr>
                  <tr>
                    <td>
                      <h4 className="ui image header">
                        <img
                          src={timingBelt}
                          className="ui mini rounded image"
                          alt=""
                        />
                        <div className="content">Timing Belts</div>
                      </h4>
                    </td>
                    <td className="positive">Starting at $600.00</td>
                  </tr>
                  <tr>
                    <td>
                      <h4 className="ui image header">
                        <img
                          src={coolingSystem}
                          className="ui mini rounded image"
                          alt=""
                        />
                        <div className="content">Cooling Systems / Flushes</div>
                      </h4>
                    </td>
                    <td className="positive">$140.00 Flat Rate</td>
                  </tr>
                  <tr>
                    <td>
                      <h4 className="ui image header">
                        <img
                          src={carTransmission}
                          className="ui mini rounded image"
                          alt=""
                        />
                        <div className="content">Transmission Service</div>
                      </h4>
                    </td>
                    <td className="positive">Starting at $120.00</td>
                  </tr>
                </tbody>
              </table>
            </Grid.Column>
          </Grid>
          <Grid stackable>
            <Grid.Column width={8}>
              <ImageContainer style={{ height: servicesHeight }}>
                <img src={engineBlock} alt="" />
              </ImageContainer>
            </Grid.Column>
            <Grid.Column width={8}>
              <div className="ui centered card">
                <Card>
                  <Card.Content style={{ padding: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        height: servicesHeight,
                      }}
                    >
                      <table
                        className="ui very basic collapsing celled table unstackable"
                        style={{
                          // textAlign: "center",
                          width: "100%",
                        }}
                      >
                        {/* <thead>
                          <tr>
                            <th>Service</th>
                            <th>Approved</th>
                          </tr>
                        </thead> */}
                        <tbody>
                          <tr className="positive">
                            <td
                              style={{ paddingRight: 0, paddingLeft: "10px" }}
                            >
                              <img
                                src={aseLogo}
                                className="ui tiny rounded image"
                                alt="ASE Logo"
                              />
                            </td>
                            <td>
                              <i className="icon checkmark"></i> Certified
                            </td>
                          </tr>
                          <tr className="positive">
                            <td
                              style={{ paddingRight: 0, paddingLeft: "10px" }}
                            >
                              Hybrid Capability
                            </td>
                            <td>
                              <i className="icon checkmark"></i> Capable
                            </td>
                          </tr>
                          <tr className="positive">
                            <td
                              style={{ paddingRight: 0, paddingLeft: "10px" }}
                            >
                              Engine Repair
                            </td>
                            <td>
                              <i className="icon checkmark"></i> Light {"&"}{" "}
                              Heavy
                            </td>
                          </tr>
                          <tr className="positive">
                            <td
                              style={{ paddingRight: 0, paddingLeft: "10px" }}
                            >
                              Check Engine Light?
                            </td>
                            <td>
                              <i className="icon checkmark"></i> Diagnostics
                            </td>
                          </tr>
                          <tr className="positive">
                            <td
                              style={{ paddingRight: 0, paddingLeft: "10px" }}
                            >
                              Big job? Small job?
                            </td>
                            <td>
                              <i className="icon checkmark"></i> No Problem!
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card.Content>
                </Card>
              </div>
            </Grid.Column>
          </Grid>
        </Container>
      </Section>
      <Section background="secondary">
        <Container>
          <Header showBanner>Trust</Header>
          <Grid stackable>
            <Grid.Column width={8}>
              <ImageContainer style={{ height: trustHeight }}>
                <img
                  src={wallPlaque}
                  alt="Wall Plaque"
                  style={{
                    transform: "rotate(-90deg)",
                  }}
                />
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
                    <Text bold fontSize={20}>
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
                    <Text bold fontSize={20}>
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
                    <Text bold fontSize={18}>
                      About Mike:
                    </Text>
                    <br />
                    <Text>
                      Mike started doing mechanic work in 2009!
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
              <ImageContainer style={{ height: aboutUsHeight }}>
                <img src={aboutUsImg} alt="Corner of shop" />
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
                      fontSize={16}
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
              {/* <Grid.Column width={2}>
                <Divider vertical />
              </Grid.Column> */}
              <Grid.Column width={8} style={{ marginTop: 58 }}>
                <CardWrapper>
                  <Card color="red" fluid>
                    <Card.Content>
                      <div style={{ paddingBottom: "8px", paddingTop: "8px" }}>
                        <Text bold fontSize={20}>
                          Phone:{" "}
                        </Text>
                        <Text
                          link="telephone"
                          fontSize={20}
                          textDecoration="underline"
                        >
                          +1 (385) 336 - 3652
                        </Text>
                      </div>
                      <table className="ui celled table unstackable">
                        <thead>
                          <tr>
                            <th style={{ fontSize: "1.5rem" }}>Days</th>
                            <th style={{ fontSize: "1.5rem" }}>Hours</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td data-label="Days">Monday</td>
                            <td data-label="Operational Hours">8AM - 6PM</td>
                          </tr>
                          <tr>
                            <td data-label="Days">Tuesday</td>
                            <td data-label="Operational Hours">8AM - 6PM</td>
                          </tr>
                          <tr>
                            <td data-label="Days">Wednesday</td>
                            <td data-label="Operational Hours">8AM - 6PM</td>
                          </tr>
                          <tr>
                            <td data-label="Days">Thursday</td>
                            <td data-label="Operational Hours">8AM - 6PM</td>
                          </tr>
                          <tr>
                            <td data-label="Days">Friday</td>
                            <td data-label="Operational Hours">8AM - 6PM</td>
                          </tr>
                          <tr>
                            <td data-label="Days">Saturday</td>
                            <td data-label="Operational Hours">
                              8AM - <span style={{ color: "red" }}>4PM</span>
                            </td>
                          </tr>
                          <tr>
                            <td data-label="Days" style={{ color: "red" }}>
                              Sunday
                            </td>
                            <td
                              data-label="Operational Hours"
                              style={{ color: "red" }}
                            >
                              Closed
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
