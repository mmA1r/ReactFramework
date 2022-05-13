import { useRef } from 'react';
import './lightSelector.css'

function LightSelector (props) {
    const { selectLight } = props;

    const lights = useRef(null);
    const LightOnChange = () => { lights.current.focus() };

    return (
        <div className = "lightSelector">
            <span>Light</span>
            <input
                ref = { lights }
                onChange = {() => {LightOnChange(); selectLight(lights.current.value)}}
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

export default LightSelector;