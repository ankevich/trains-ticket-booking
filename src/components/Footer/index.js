import styled from "styled-components/macro"
import { MaxWidthContainer, HContainer, VContainer } from "../containers"

const Footer = () => (
    <Background>
        <UpperHContainer>
            <VContainer>
                <h1>Свяжитесь с нами</h1>
                <p>Телефон: +7 (999) 999-99-99</p>
                <p>Почта: inbox@mail.ru</p>
            </VContainer>
            <VContainer>
                <h1>Не связывайтесь с нами</h1>
                <p>Будьте в курсе событий</p>
            </VContainer>
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
