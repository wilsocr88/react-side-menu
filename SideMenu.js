import React, { useEffect, useState } from 'react';
import MenuItem from './components/MenuItem';
import { MdMenu } from 'react-icons/md';
import './SideMenu.css';

const SideMenu = props => {
    const [isHidden, setIsHidden] = useState(true);
    const [whiteSpaceTargetStyle, setWhiteSpaceTargetStyle] = useState({
        zIndex: 0,
        backgroundColor: "rgba(0,0,0,0)"
    });

    const resize = () => {
        setIsHidden(window.innerWidth <= 768 ? true : false);
    }

    const toggleMenu = () => {
        if (isHidden) {
            showMenu();
        } else {
            hideMenu();
        }
    }

    const showMenu = () => {
        if (isHidden) {
            setIsHidden(false);
            setWhiteSpaceTargetStyle({
                zIndex: 990,
                backgroundColor: "rgba(100,100,100,0.3)"
            });
        }
    }

    const hideMenu = () => {
        if (!isHidden) {
            setIsHidden(true);
            setWhiteSpaceTargetStyle({
                zIndex: 0,
                backgroundColor: "rgba(0,0,0,0)"
            });
        }
    }

    const classList = () => {
        if (isHidden) {
            return "menu hidden";
        }
        return "menu";
    }

    useEffect(() => {
        window.addEventListener("resize", resize);
        setIsHidden(window.innerWidth <= 768);
        setWhiteSpaceTargetStyle({
            zIndex: isHidden ? 0 : 990,
            backgroundColor: isHidden ? "rgba(0,0,0,0)" : "rgba(100,100,100,0.3)"
        });
    }, []);

    return (
        <>
            <div className="menu-button" onClick={toggleMenu}>
                <MdMenu size="2em" />
            </div>
            <div className={classList()} id="menu">
                {props.menu.map((item, index) => {
                    if (typeof item.hr === "undefined") {
                        return (
                            <MenuItem
                                key={index}
                                id={index}
                                icon={item.icon}
                                text={item.text}
                                link={item.link}
                            />
                        );
                    } else {
                        return (
                            <hr key={index} />
                        );
                    }
                })}
                <br />
            </div>
            <div id="menu-whitespace-target" hidden={isHidden} onClick={hideMenu} style={whiteSpaceTargetStyle}></div>
        </>
    );
}
export default SideMenu;