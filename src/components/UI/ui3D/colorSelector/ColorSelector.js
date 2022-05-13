import { useRef } from 'react';
import './color.css'

function ColorSelector (props) {
    const { selectColor } = props;

    const color = useRef(null);
    const ColorOnChange = () => {color.current.focus()}

    return (
        <div className = "colorSelector">
            <input
                ref = { color }
                onChange = {() => {ColorOnChange(); selectColor(color.current.value)}}
                id = "colorSelector"
                type = "color"
                defaultValue = "#ff00c8"
            ></input>
        </div>
    );

}

export default ColorSelector;