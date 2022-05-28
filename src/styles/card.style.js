import styled from "styled-components";

const Card = styled.div`
   background-color: ${({ theme }) => theme.backgroundColors.card };
   box-shadow: 0 0 10px #ccc;
   padding: 30px;
   border-radius: 10px;
`

export default Card;