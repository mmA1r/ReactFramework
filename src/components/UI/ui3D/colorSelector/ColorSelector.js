import React from "react";

import './color.css'

class ColorSelector extends React.Component {
    constructor(props) {
        super(props);
        const { selectColor } = props;
        this.selectColor = selectColor;
    }

    render() {
        return (
            <div className = "colorSelector">
                <input
                    onChange = {() => this.selectColor()}
                    id = "colorSelector"
                    type = "color"
                    value = "#ff00c8"
                ></input>
            </div>
        );
    }
}

export default ColorSelector;