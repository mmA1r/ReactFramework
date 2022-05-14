import './lightSelector.css'

function LightSelector (props) {
    const { selectLight } = props;

    return (
        <div className = "lightSelector">
            <span>Light</span>
            <input
                onChange = {(e) => {selectLight(e.target.value)}}
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