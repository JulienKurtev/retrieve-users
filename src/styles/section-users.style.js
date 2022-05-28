import styled from "styled-components";

const StyledSectionUsers = styled.section`
   h1 {
       margin-bottom: 30px;
   }

   .input-controller {
       position:relative;
       margin-bottom:20px;

       input { padding-left: 50px;}

       span {  
           color: #adabab;
           position:absolute;
           top:50%;
           left:10px;
           transform:translateY(-50%);
        }
   }
    
`

export default StyledSectionUsers;