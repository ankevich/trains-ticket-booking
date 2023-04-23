import styled from "styled-components/macro"
import MaxWidthContainer from "../MaxWidthContainer"
import HorizontalContainer from "../HorizontalContainer"
import Background from "./background.jpg"

const HowItworks = () => (
    <BackgroundContainer>
        <MaxWidthContainer>
            <CustomHorizontalContainer>
                <h1>Как это работает</h1>
                <h1>Как это работает</h1>
            </CustomHorizontalContainer>
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

const CustomHorizontalContainer = styled(HorizontalContainer)`
    justify-content: space-between;
`

const FeaturesContainer = styled(HorizontalContainer)`
    justify-content: center;
    align-items: center;
`

export default HowItworks
