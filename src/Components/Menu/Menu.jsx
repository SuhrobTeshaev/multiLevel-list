 import React from 'react';
 import './Menu.css'
import {NestedList} from "../NestedList/NestedList";

const menuItems = [
    {
        label: "Меню 1",
        items: [
            {
                label: "Меню 1.1",
                items: [],
            },
            {
                label: "Меню 1.2",
                items: [
                    {
                        label: "Подпункт 1.2.1",
                        items: [],
                    },
                    {
                        label: "Подпункт 1.2.2",
                        items: [],
                    },
                    {
                        label: "Подпункт 1.2.3",
                        items: [],
                    },
                ],
            },
            {
                label: "Меню 1.3",
                items: [],
            },
            {
                label: "Меню 1.4",
                items: [],
            },
        ],
    },
    {
        label: "Меню 2",
        items: [
            {
                label: "Подпункт 2.1",
                items: [],
            },
            {
                label: "Подпункт 2.2",
                items: [],
            },
            {
                label: "Подпункт 2.3",
                items: [],
            },
        ],
    },
    {
        label: "Меню 3",
        items: [
            {
                label: "Подпункт 3.1",
                items: [],
            },
        ],
    },
    {
        label: "Меню 4",
        items: [],
    },
];
export const Menu = () => {
    const handleShowJSON = () => {
        console.log(JSON.stringify({ root: menuItems }));
    };

    return (
        <div className="menu">
            <div className="menu__header">
                <h2 className='menu__title'>Меню</h2>
            </div>
            <div className="menu__content">
                {menuItems.length > 0 && <NestedList list={menuItems} />}

                <button className='menu__json-btn' onClick={handleShowJSON}>Show JSON</button>
            </div>
        </div>
    )
}
