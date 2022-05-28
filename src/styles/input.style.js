import styled from "styled-components";

const Input = styled.input`
   background-color: #fff;
   height: 40px;
   border:2px solid #efecec;
   border-radius:5px;
   width: 100%;
   padding: 0 10px;
   ::placeholder {
    color: #adababtt;
  }

  &[type="checkbox"] {
      height: 15px;
      width: 15px;
  }
`

export default Input;