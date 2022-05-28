import styled from "styled-components";

const Button = styled.button`
    border-radius: 20px;
    padding: 15px 20px;
    box-shadow: 0 0 3px #ccc;
    font-weight: 700;

    &.btn-primary {
        background-color: ${({ theme }) => theme.backgroundColors.buttons.primary.normal};
        color: ${({ theme }) => theme.textColors.buttons.primary.normal};

        &:hover {
            background-color: ${({ theme }) => theme.backgroundColors.buttons.primary.hover};
            color: ${({ theme }) => theme.textColors.buttons.primary.hover};
        }
    }
    
`

export default Button;