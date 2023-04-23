import styled from "styled-components/macro"
import { MaxWidthContainer, HContainer } from "../containers"

const Footer = () => (
    <Background>
        <UpperHContainer>
            <h1>Свяжитесь с нами</h1>
            <h1>Не связывайтесь с нами</h1>
        </UpperHContainer>
        <MaxWidthContainer>
            <BottomHContainer>
                <h1>Лого</h1>
                <p>(^)</p>
                <p>2023</p>
            </BottomHContainer>
        </MaxWidthContainer>
    </Background>
)

const Background = styled.div`
    background-color: #2d2b2f;
`

const UpperHContainer = styled(HContainer)`
    justify-content: space-around;
`

const BottomHContainer = styled(HContainer)`
    justify-content: space-between;
`

export default Footer
