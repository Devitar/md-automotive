import { Button } from 'semantic-ui-react'
import { Navbar } from 'components'
import styled from 'styled-components'
import { Carousel } from "../components"

/** Types */

/** Component */

const HomePage = () => {

    return (
        <Page>
            <Navbar />
            Home Page
            <Button>Click Me</Button>
            <Carousel />
        </Page>
    )
}

/** Styles */

const Page = styled.div`

`

/** Exports */

export default HomePage
