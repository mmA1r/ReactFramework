import React from "react";

import './lightSelector.css'

class LightSelector extends React.Component {
    constructor(props) {
        super(props);
        const { selectLight } = props;
        this.selectLight = selectLight;
    }

    render() {
        return (
            <div className = "lightSelector">
                <span>Light</span>
                <input
                    onChange = {() => this.selectLight()}
                    id = "powerOfLight"
                    type = "range"
                    min = "10000"
                    max = "400000"
                    step = "4000"
                    defaultValue = "300000"
                ></input>
            </div>
        );
    }
}

export default LightSelector;