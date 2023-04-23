import styled from "styled-components/macro"
import { MaxWidthContainer } from "../containers"

const About = () => (
    <StyledAbout>
        <MaxWidthContainer>
            <h1>О нас</h1>
            <p>
                Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше
                людей заказывают жд билеты через интернет.
            </p>
            <p>
                Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы
                расскажем о преимуществах заказа через интернет.
            </p>
            <p>
                Покупать жд билеты дешево можно за 90 суток до отправления поезда. Благодаря динамическому
                ценообразованию цена на билеты в это время самая низкая.
            </p>
        </MaxWidthContainer>
    </StyledAbout>
)

const StyledAbout = styled.div``

export default About
