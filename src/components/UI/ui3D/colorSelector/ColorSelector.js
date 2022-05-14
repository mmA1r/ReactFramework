import './color.css'

function ColorSelector (props) {
    const { selectColor } = props;

    return (
        <div className = "colorSelector">
            <input
                onChange = {(e) => {selectColor(e.target.value)}}
                id = "colorSelector"
                type = "color"
                defaultValue = "#ff00c8"
            ></input>
        </div>
    );

}

export default ColorSelector;