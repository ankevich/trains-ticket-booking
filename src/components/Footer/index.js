import styled from "styled-components/macro"
import MaxWidthContainer from "../MaxWidthContainer"
import HorizontalContainer from "../HorizontalContainer"

const Footer = () => (
    <Background>
        <UpperHorizontalContainer>
            <h1>Свяжитесь с нами</h1>
            <h1>Не связывайтесь с нами</h1>
        </UpperHorizontalContainer>
        <MaxWidthContainer>
            <BottomHorizontalContainer>
                <h1>Лого</h1>
                <p>(^)</p>
                <p>2023</p>
            </BottomHorizontalContainer>
        </MaxWidthContainer>
    </Background>
)

const Background = styled.div`
    background-color: #2d2b2f;
`

const UpperHorizontalContainer = styled(HorizontalContainer)`
    justify-content: space-around;
`

const BottomHorizontalContainer = styled(HorizontalContainer)`
    justify-content: space-between;
`

export default Footer