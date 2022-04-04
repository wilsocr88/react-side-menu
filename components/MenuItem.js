import React from 'react';
import './MenuItem.css';

const MenuItem = props => {
    const handleClick = link => {
        window.location = link;
    }

    const renderIcon = Icon => {
        return (
            <Icon size="2em" />
        );
    }

    const getClassName = () => {
        if (window.location.pathname === props.link) {
            return "menu-item active";
        }
        return "menu-item";
    }

    return (
        <div
            id={"menu-item-" + props.id}
            className={getClassName()}
            onClick={e => handleClick(props.link)}>
            <div className="menu-item-icon">{renderIcon(props.icon)}</div>
            <div className="menu-item-text">{props.text}</div>
        </div>
    );
}
export default MenuItem;