import styled from 'styled-components';

const StyledHeader = styled.header`
   background-color: ${({ theme }) => theme.backgroundColors.header };
   display: flex;
   align-items: center;

   strong { margin-left: 20px; }
   
`;

export default StyledHeader;