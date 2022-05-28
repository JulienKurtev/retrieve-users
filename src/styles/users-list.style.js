import styled from "styled-components";

const StyledUsersList = styled.div`
   .sort { margin-left:10px;}
   svg { color: #b7b7b7; }

   .users-list-item {
       padding: 20px 0;
       position: relative;

       label { cursor: pointer; }

       input[type="checkbox"] {
         position: absolute;
         left: -40px;;
       }

       &:after {
        content: '';
        display:inline-block;
        position:absolute;
        bottom: 1px;
        left: -30px;
        width: calc(100% + 60px);
        height: 1px;
        background-color: #ccc;
    }

    @media(max-width: 767px) {
        input[type="checkbox"] {
            position: absolute;
            left: -20px;;
          }
    }
   }
`

export default StyledUsersList;