import React from "react";
import Button from "../button/Button";
import "./header.css"

class Header extends React.Component {
    constructor(props) {
        super(props);
        const { showPage, activeButton } = props;
        this.showPage = showPage;
        this.activeButton = activeButton;
    }

    

    render() {
        return (
            <div
                className="header"
            >
                <Button // calculator
                    title = "Calculator"
                    name = "calculator"
                    onClick = {(name) => this.showPage(name)}
                    active = { this.activeButton }
                ></Button>
                <Button // Graph2D
                    title = "Graph2D"
                    name = "graph2D"
                    onClick = {(name) => this.showPage(name)}
                    active = { this.activeButton }
                ></Button>
                <Button // Graph3d
                    title = "Graph3D"
                    name = "graph3D"
                    onClick = {(name) => this.showPage(name)}
                    active = { this.activeButton}
                ></Button>
                <Button // Billiards
                    title = "Game"
                    name = "game"
                    onClick = {(name) => this.showPage(name)}
                    active = { this.activeButton }
                ></Button>
            </div>
        );
    }
}

export default Header;