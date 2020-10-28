import React from 'react'

import './MenuItem.css'

class MenuItem extends React.Component {

    constructor( props ) {
        super( props )
        this.props = props
    }

    onClick( link ) {
        window.location = link
    }

    renderIcon( Icon ) {
        return(
            <Icon size="2em" />
        )
    }

    componentDidMount() {
        if ( window.location.pathname === this.props.link ) {
            document.getElementById("menu-item-" + this.props.id ).classList.add("active")
        }
    }

    render() {
        return (
            <div
             id={"menu-item-" + this.props.id}
             className="menu-item"
             onClick={(e)=>this.onClick(this.props.link)}>
                <div className="menu-item-icon">{this.renderIcon(this.props.icon)}</div>
                <div className="menu-item-text">{this.props.text}</div>
            </div>
        )
    }

}

export default MenuItem
