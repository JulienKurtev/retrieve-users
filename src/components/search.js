import React from "react";
import styled from "styled-components";
import Input from "../styles/input.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const StyledSearch = styled.div`
    position: relative;
    margin-bottom: 60px;
    
    &:after {
        content: '';
        display:inline-block;
        position:absolute;
        bottom:-30px;
        left: -30px;
        width: calc(100% + 60px);
        height: 1px;
        background-color: #ccc;
    }
    

    svg {
        position:absolute;
        top:50%;
        left:14px;
        transform: translateY(-50%);
        color: #ccc;
    }

    input { padding-left: 40px;}
`

const Search = ({ search }) => {
    const handleInputChange = e => {
        search(e.target.value.toLowerCase());
    }

    return <StyledSearch>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <Input 
            type="text"
            placeholder="Search Users"
            onChange={handleInputChange}
        />
    </StyledSearch>
}

export default Search;