import styled from "styled-components/macro"
import MaxWidthContainer from "../MaxWidthContainer"
import HorizontalContainer from "../HorizontalContainer"

const Reviews = () => (
    <MaxWidthContainer>
        <h1>Отзывы</h1>
        <HorizontalContainer>
            <p>Отзыв 1</p>
            <p>Отзыв 2</p>
        </HorizontalContainer>
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
        background-color: #E5E5E5;
        margin: 5px;
        display: inline-block;

    }
    span.current {
        background-color: #C4C4C4;
    }
`

export default Reviews
