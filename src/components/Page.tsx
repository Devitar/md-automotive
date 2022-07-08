import React from "react"
import styled from "styled-components"

/** Component */

const Page = ({ children }: React.PropsWithChildren) => {

    return (<Wrapper>{children}</Wrapper>)
}

/** Styles */

const Wrapper = styled.div`
    margin-top: 41px;
    padding: 12px 24px;
`

/** Exports */

export default Page