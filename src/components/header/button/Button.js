import React from "react";
import "./button.css"

class Button extends React.Component {
    constructor(props) {
        super(props);
        const { title, name, onClick, active } = props;
        this.title = title;
        this.name = name;
        this.onClick = onClick;
        this.isActive = active === name;
    }

    setActive() {
        return `headerButton ${this.isActive ? 'active' : ''}`;
    }

    render() {
        return (
            <div
                className = { this.setActive() }
                onClick = {() => this.onClick(this.name)}
            >{ this.title }</div>
        );
    }
}

export default Button;