import styled from "styled-components/macro"
import { MaxWidthContainer, HContainer } from "../containers"

const Reviews = () => (
    <MaxWidthContainer>
        <h1>Отзывы</h1>
        <HContainer>
            <p>Отзыв 1</p>
            <p>Отзыв 2</p>
        </HContainer>
        <Pagination>
            <span className="current"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </Pagination>
    </MaxWidthContainer>
)

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        cursor: pointer;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: #e5e5e5;
        margin: 5px;
        display: inline-block;
    }
    span.current {
        background-color: #c4c4c4;
    }
`

export default Reviews
