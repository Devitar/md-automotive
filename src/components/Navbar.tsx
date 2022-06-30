import styled from "styled-components"
import { Grid } from "semantic-ui-react"

/** Component */

const Navbar = () => {

    return (
        <NavbarSticky>
            <Grid divided only='tablet computer'>
                <Grid.Column floated='left' width={3}>Item 1</Grid.Column>
                <Grid.Column floated='left' width={3}>Item 2</Grid.Column>
                <Grid.Column floated='left' width={3}>Item 3</Grid.Column>
            </Grid>
        </NavbarSticky>
    )
}

/** Styles */

const NavbarSticky = styled.div`
    background-color: ${props => props.theme.colors.background};
    height: 55px;
    position: sticky;
    width: 100%;
`

/** Exports */

export default Navbar