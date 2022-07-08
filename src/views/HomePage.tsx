import { Carousel, Navbar, Page, Text } from 'components'
import styled from 'styled-components'
import { Container, Grid, Image } from 'semantic-ui-react'
import WaitingRoom from "assets/waiting-room.png"

/** Types */

/** Component */

const HomePage = () => {

    return (
        <Page>
            <Navbar />
            <Carousel />
            <ServicesSection>
                <Container>
                    <Grid divided>
                        <Grid.Row centered>
                            <Grid.Column width={16}>
                                <SectionHeaderText bold>Services</SectionHeaderText>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Text>
                                    MD Automotive Repair specializes in all makes and models services:
                                    <br /><br />
                                    All heavy and light work repairs your vehicle could need. Including custom fabrication, engine and transmission repair or replacement. We perform a full variety of diagnostics services to meet your vehicles drivability issue. We are also hybrid friendly. MD automotive repair is a license and insured shop with ASE certification. Here at MD automotive repair we strive to be constantly educated to the changes in the technology of the automotive industry. No job too big or too small, please give us a call.
                                </Text>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Image src={WaitingRoom} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </ServicesSection>
        </Page>
    )
}

/** Styles */

const SectionHeaderText = styled(Text)`
    justify-content: center;
    font-size: 2.5rem;
`

const ServicesSection = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
`


/** Exports */

export default HomePage
