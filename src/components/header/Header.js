import Button from "./button/Button";
import "./header.css"

function Header(props) {
    const { activePage, setActiveButton } = props;

    return (
        <div
            key={activePage}
            className="header"
        >
            <Button // calculator
                title="Calculator"
                name="calculator"
                onClick={(name) => setActiveButton(name)}
                active={activePage}
            ></Button>
            <Button // Graph2D
                title="Graph2D"
                name="graph2D"
                onClick={(name) => setActiveButton(name)}
                active={activePage}
            ></Button>
            <Button // Graph3d
                title="Graph3D"
                name="graph3D"
                onClick={(name) => setActiveButton(name)}
                active={activePage}
            ></Button>
            {/* <Button // Billiards
                title = "Game"
                name = "game"
                onClick = {(name) => this.setActiveButton(name)}
                active = { this.state.activePage }
            ></Button> */}
        </div>
    );
}

export default Header;