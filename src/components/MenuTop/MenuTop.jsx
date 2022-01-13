import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import {MenuOutlined} from '@ant-design/icons';

import './MenuTop.scss';

const MenuTop = () => {
    return (  
        <div className="menu-top-mobile">
            <button className="menu-top-mobile-button">
                {<MenuOutlined className="icon" />}
            </button>
            <Menu left>
                <a  id="portfolio" className="menu-item" href="/" >Portafolio</a>
            </Menu>
        </div>
    );
}
 
export default MenuTop;