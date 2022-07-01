import React from 'react';
import './ListItem.css';

const ListItem = props => {
    return (
        <li className='list-group-item'>
            {props.lang}
        </li>
    )
}

export default ListItem;