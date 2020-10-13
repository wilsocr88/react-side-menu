import React from 'react'

import MenuItem from './components/MenuItem'

import { MdMenu } from 'react-icons/md'

import './SideMenu.css'

class SideMenu extends React.Component {

    constructor( props ) {
        super( props )
        this.props = props
        this.toggleMenu = this.toggleMenu.bind(this)
        this.resize = this.resize.bind(this)
        this.breakPoint = 768

        window.addEventListener("resize", this.resize)
    }

    shouldComponentUpdate() {
        return false
    }

    resize() {
        if ( window.innerWidth <= this.breakPoint ) {
            this.MENU.classList.add("hidden")
            this.WHITESPACE_TARGET.style.zIndex = 0
            this.WHITESPACE_TARGET.style.backgroundColor = "rgba(0,0,0,0)"
        } else {
            this.MENU.classList.remove("hidden")
            this.WHITESPACE_TARGET.style.zIndex = 990
            this.WHITESPACE_TARGET.style.backgroundColor = "rgba(100,100,100,0.3)"
        }
    }

    toggleMenu() {
        if ( this.MENU.classList.contains("hidden") ) {
            this.MENU.classList.remove("hidden")
            this.WHITESPACE_TARGET.style.zIndex = 990
            this.WHITESPACE_TARGET.style.backgroundColor = "rgba(100,100,100,0.3)"
        } else {
            this.MENU.classList.add("hidden")
            this.WHITESPACE_TARGET.style.zIndex = 0
            this.WHITESPACE_TARGET.style.backgroundColor = "rgba(0,0,0,0)"
        }
    }

    componentDidMount() {
        if ( window.innerWidth <= this.breakPoint ) {
            this.MENU.classList.add("hidden")
            this.WHITESPACE_TARGET.style.zIndex = 0
            this.WHITESPACE_TARGET.style.backgroundColor = "rgba(0,0,0,0)"
        } else {
            this.MENU.classList.remove("hidden")
            this.WHITESPACE_TARGET.style.zIndex = 990
            this.WHITESPACE_TARGET.style.backgroundColor = "rgba(100,100,100,0.3)"
        }
    }

    closeMenu() {
        if ( !this.MENU.classList.contains("hidden") ) {
            this.MENU.classList.add("hidden")
            this.WHITESPACE_TARGET.style.zIndex = 0
            this.WHITESPACE_TARGET.style.backgroundColor = "rgba(0,0,0,0)"
        }
    }

    componentDidMount() {
        this.MENU = document.getElementById("menu")
        this.WHITESPACE_TARGET = document.getElementById("menu-whitespace-target")
    }

    render() {
        var i = 0
        return (
            <>
                <div className="menu-button" onClick={this.toggleMenu}>
                    <MdMenu size="2em" />
                </div>
                <div className="menu" id="menu">
                    {this.props.menu.map(( item ) => {
                        i++
                        if ( typeof item.hr === "undefined" ) {
                            return(
                                <MenuItem key={i} id={i} icon={item.icon} text={item.text} link={item.link} />
                            )
                        } else {
                            return(
                                <hr key={i} />
                            )
                        }
                    })}
                    <br />
                </div>
                <div id="menu-whitespace-target" onClick={this.closeMenu}></div>
            </>
        )
    }

}

export default SideMenu
