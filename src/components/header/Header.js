import React from "react";
import Button from "./button/Button";
import "./header.css"

class Header extends React.Component {
    constructor(props) {
        super(props);
        const { activePage, setActiveButton} = props;
        this.state = { activePage }
        this.setActiveButtonCb = setActiveButton;
    }

    setActiveButton(name) {
        this.setState({activePage : name});
        this.setActiveButtonCb(name);
    }

    render() {
        return (
            <div key = { this.state.activePage }
                className = "header"
            >
                <Button // calculator
                    title = "Calculator"
                    name = "calculator"
                    onClick = {(name) => this.setActiveButton(name)}
                    active = { this.state.activePage }
                ></Button>
                <Button // Graph2D
                    title = "Graph2D"
                    name = "graph2D"
                    onClick = {(name) => this.setActiveButton(name)}
                    active = { this.state.activePage }
                ></Button>
                <Button // Graph3d
                    title = "Graph3D"
                    name = "graph3D"
                    onClick = {(name) => this.setActiveButton(name)}
                    active = { this.state.activePage }
                ></Button>
                <Button // Billiards
                    title = "Game"
                    name = "game"
                    onClick = {(name) => this.setActiveButton(name)}
                    active = { this.state.activePage }
                ></Button>
            </div>
        );
    }
}

export default Header;