import React from 'react'

import './MenuItem.css'

class MenuItem extends React.Component {

    constructor( props ) {
        super( props )
        this.props = props
        this.state = {
            icon: this.props.icon,
            text: this.props.text,
            link: this.props.link,
            id: this.props.id
        }
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
        if ( window.location.pathname === this.state.link ) {
            document.getElementById("menu-item-" + this.state.id ).classList.add("active")
        }
    }

    render() {
        return (
            <div
             id={"menu-item-" + this.state.id}
             className="menu-item"
             onClick={(e)=>this.onClick(this.state.link)}>
                <div className="menu-item-icon">{this.renderIcon(this.state.icon)}</div>
                <div className="menu-item-text">{this.state.text}</div>
            </div>
        )
    }

}

export default MenuItem
