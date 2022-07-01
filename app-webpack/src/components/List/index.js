import React from 'react';
import ListItem from '../ListItem';
import './List.css';

const List = (props) => {
    return (
        <ul className='list-group'>
            {
                props.languages.map((lang, index) => {
                    return (
                        <ListItem lang={lang} key={index} />
                    )
                })
            }
        </ul>
    )
}

export default List;