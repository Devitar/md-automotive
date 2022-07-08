import { Carousel, Navbar, Page } from 'components'
import styled from 'styled-components'
import { Container } from 'semantic-ui-react'

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
        </Page>
    )
}

/** Styles */

const ServicesSection = styled.div``


/** Exports */

export default HomePage
