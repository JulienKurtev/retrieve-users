import React , { useState } from "react";
import Flex from "../../styles/grid/flex.style";
import Col from "../../styles/grid/col.style";
import StyledUsersList from "../../styles/users-list.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserItem from "./user-item";
import { faSort } from "@fortawesome/free-solid-svg-icons";


const UsersList = ({ users , sortHandler }) => {
    const [ sortType , setSortType ] = useState('asc');

    const usersList = users.map((user, index) => <UserItem 
        key={index}
        name={user.name}
        age={user.age}
        id={index}
    />);

    const sortByParam = (param) => {
        if(sortType === 'asc'){
            sortHandler(param, 'asc');
            setSortType('desc');
        }else{
            sortHandler(param, 'desc');
            setSortType('asc');
        }
        
    }
   
    return <StyledUsersList>
        <Flex>
            <Col className='col offset-1'>
                <strong>
                    Name

                    <button className="sort" onClick={() => {sortByParam('name')}}>
                        <FontAwesomeIcon icon={faSort} />
                    </button>
                </strong>
            </Col>
            <Col className='col'>
                <strong>
                    Age

                    <button className="sort" onClick={() => {sortByParam('age')}}>
                        <FontAwesomeIcon icon={faSort} />
                    </button>
                </strong>
            </Col>
        </Flex> 

        {usersList}
    </StyledUsersList>
}

export default UsersList;