import React from 'react';
import './NestedList.css'
export const NestedList = ({ list }) => {
    const toggleChildren = (e) => {
        const hasClass = e.target.classList.contains('isActive')
        if(hasClass) {
            e.target.classList.remove('isActive')
        } else {
            e.target.classList.add('isActive')
        }
    };
    return (
        <ul>
            {list.map(({ label, items }, index) => (
                <li key={index}>
                    <p className={!!items.length ? 'hasChildren' : ''} onClick={(event) => items.length > 0 && toggleChildren(event)}>{label}</p>
                    {!!items.length && (
                        <NestedList list={items} />
                    )}
                </li>
            ))}
        </ul>
    );
};
