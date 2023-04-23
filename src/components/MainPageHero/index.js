import styled from "styled-components/macro"
import { MaxWidthContainer, HContainer } from "../containers"
import Background from "./images/HeroBackground.jpg"

const Hero = () => {
    return (
        <BackgroundContainer>
            <MaxWidthContainer>
                <h1>Лого</h1>
            </MaxWidthContainer>
            <GrayMenuContainer>
                <MaxWidthContainer>
                    <MenuItems>
                        <a href="#">О нас</a>
                        <a href="#">Как это работает</a>
                        <a href="#">Отзывы</a>
                        <a href="#">Контакты</a>
                    </MenuItems>
                </MaxWidthContainer>
            </GrayMenuContainer>
            <MaxWidthContainer>
                <HContainer>
                    <h1>Вся жизнь - путешествие!</h1>
                    <div>
                        <p>Мы рады видеть вас!</p>
                    </div>
                </HContainer>
            </MaxWidthContainer>
        </BackgroundContainer>
    )
}

const BackgroundContainer = styled.div`
    width: 100%;
    height: 100%;

    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 700px;
`

const GrayMenuContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #292929;
`

const MenuItems = styled.div`
    display: flex;
    flex-direction: row;
`

export default Hero
