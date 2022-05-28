import React from 'react';
import Flex from '../styles/grid/flex.style';
import Col from '../styles/grid/col.style';
import Button from '../styles/button.style';
import Card from '../styles/card.style';
import Search from '../components/search';
import Input from '../styles/input.style';
import UsersList from '../components/users/users-list';
import StyledSectionUsers from '../styles/section-users.style';
import { useState } from 'react';

const SectionUsers = ({ users , fetchUsers, search, sortByParam }) => {
    const [minAge, setMinAge] = useState(0);
    const [maxAge, setMaxAge] = useState(100);

    const handleInputChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value < 0 ? 0 : e.target.value;
        
        switch (inputName) {
            case 'minAge':
                setMinAge(inputValue)
                break;
            case 'maxAge':
                setMaxAge(inputValue)
                break;
        
            default:
                break;
        }
      };
    
    const retrieveUsers = () => {
        fetchUsers(+minAge, +maxAge);
    }

    const sortHandler = (param, sortType) => {
        sortByParam(param , sortType);
    }


    let usersListView = <UsersList users={users} sortHandler={sortHandler}/>;

    //Check if ueres were retrieved or if there are no results on the search
    if(users === null){
        usersListView = <p className="text-center">No users yet, please click retrieve users!</p>
    }else if (users.length === 0){
        usersListView = <p className="text-center">User not found!</p>;
    }

    return  <StyledSectionUsers>
        <h1>Users</h1>

        <Flex>
            <Col className="col-4">
                <Card>
                    <div className='input-controller'>
                        <span>min:</span>
                        <Input name="minAge" value={minAge} type="number" min="0"  onChange={handleInputChange}/>
                    </div>
                    <div className='input-controller'>
                        <span>max:</span>
                        <Input name="maxAge" value={maxAge} type="number"  onChange={handleInputChange}/>
                    </div>

                    <Button className="btn-primary" onClick={retrieveUsers}>Retrieve Users</Button>
                </Card>
            </Col>
            <Col className="col-7 offset-1">
                <Card>
                    {users !== null && <Search search={search}/>}
                    {usersListView}
                </Card>
            </Col>
        </Flex> 
    </StyledSectionUsers>
}

export default SectionUsers;