import React from 'react'

import MenuItem from './components/MenuItem'

import { MdMenu } from 'react-icons/md'

import './SideMenu.css'

class SideMenu extends React.Component {

    constructor( props ) {
        super( props )
        this.props = props
        this.state = {
            isHidden: true,
            breakPoint: 768,
            whiteSpaceTargetStyle: {
                zIndex: 0,
                backgroundColor: "rgba(0,0,0,0)"
            }
        }
    }

    resize = () => {
        this.setState({
            isHidden: window.innerWidth <= this.state.breakPoint ? true : false
        })
    }

    toggleMenu = () => {
        if ( this.state.isHidden ) {
            this.showMenu()
        } else {
            this.hideMenu()
        }
    }

    showMenu = () => {
        if ( this.state.isHidden ) {
            this.setState({
                isHidden: false,
                whiteSpaceTargetStyle: {
                    zIndex: 990,
                    backgroundColor: "rgba(100,100,100,0.3)"
                }
            })
        }
    }

    hideMenu = () => {
        if ( !this.state.isHidden ) {
            this.setState({
                isHidden: true,
                whiteSpaceTargetStyle: {
                    zIndex: 0,
                    backgroundColor: "rgba(0,0,0,0)"
                }
            })
        }
    }

    componentDidMount() {
        window.addEventListener( "resize", this.resize )

        var isHidden = window.innerWidth <= this.state.breakPoint
        this.setState({
            isHidden: isHidden,
            whiteSpaceTargetStyle: {
                zIndex: isHidden ? 0 : 990,
                backgroundColor: isHidden ? "rgba(0,0,0,0)" : "rgba(100,100,100,0.3)"
            }
        })
    }

    render() {
        var i = 0
        var classList = this.state.isHidden ? "menu hidden" : "menu"
        return (
            <>
                <div className="menu-button" onClick={this.toggleMenu}>
                    <MdMenu size="2em" />
                </div>
                <div className={classList} id="menu">
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
                <div id="menu-whitespace-target" hidden={this.state.isHidden} onClick={this.hideMenu} style={this.state.whiteSpaceTargetStyle}></div>
            </>
        )
    }

}

export default SideMenu
