import styled from "styled-components/macro"

const HContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const VContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const MaxWidthContainer = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`

export { HContainer, VContainer, MaxWidthContainer }