import styled from "styled-components/macro"
import { MaxWidthContainer, HContainer } from "../containers"
import Background from "./background.jpg"

const HowItworks = () => (
    <BackgroundContainer>
        <MaxWidthContainer>
            <CustomHContainer>
                <h1>Как это работает</h1>
                <h1>Как это работает</h1>
            </CustomHContainer>
        </MaxWidthContainer>
        <FeaturesContainer>
            <p>Удобный заказ на сайте</p>
            <p>Удобный заказ на сайте</p>
            <p>Удобный заказ на сайте</p>
        </FeaturesContainer>
    </BackgroundContainer>
)

const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;

    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 400px;
`

const CustomHContainer = styled(HContainer)`
    justify-content: space-between;
`

const FeaturesContainer = styled(HContainer)`
    justify-content: center;
    align-items: center;
`

export default HowItworks
