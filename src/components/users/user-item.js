import React from "react";
import Flex from "../../styles/grid/flex.style";
import Col from "../../styles/grid/col.style";
import Input from "../../styles/input.style";

const UserItem = ({ name , age , id }) => {
    return  <div className="users-list-item" name={id}>
        <Flex>
            <Col className='col offset-1'>
                <Input type="checkbox" id={id}/>
                <label htmlFor={id}>{name}</label>
            </Col>
            <Col className='col'>
                {age}
            </Col>
        </Flex>
    </div>
}

export default UserItem;