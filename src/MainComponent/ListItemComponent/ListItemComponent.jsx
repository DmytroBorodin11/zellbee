import React from "react";
import './ListItem.css';

const ListItem = (props) => {
    return (
        <div className='list__item'>
            <div className={'icon' + ' ' + props.className}>
                <span className={`icon-${props.className}` + ' ' + 'icon'}></span>
            </div>
            <p className="list__item_text">
                {props.iconText}
            </p>
        </div>
    )
}

export default ListItem;