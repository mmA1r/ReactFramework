import './funcInputs.css'
import './heart.css'
import './deleteButton.css'

function FuncInputs (props) {
    const { func, delFunction } = props;

    const setFunction = (e) =>  {
        try {
            let f;
            //eslint-disable-next-line
            eval(`f = function (x) {return ${e.target.value};}`);
            func.f = f;
            func.value = e.target.value;
        } catch (e) { }
    }

    const setColor = (e) => { func.color = e.target.value; }

    const setWidth = (e) => { func.width = e.target.value; }

    const sLine = (e) => { func.sLine = e.target.value; }

    const eLine = (e) => { func.eLine = e.target.value; }

    return (
        <div>
            <input // function
                className = "funcInputs"
                onKeyUp = { (e) => setFunction(e) }
                placeholder = "y = f(x)"
                defaultValue = { func.value }
            ></input>
            <input // width
                className = "funcInputs"
                onKeyUp = {(e) => setWidth(e)}
                placeholder = "width"
                defaultValue = { func.width }
            ></input>
            <input //start Line
                className = "funcInputs"
                onKeyUp = {(e) => sLine(e)}
                placeholder = "Start Line"
                defaultValue = { func.sLine }
            ></input>
            <input // end Line
                className = "funcInputs"
                onKeyUp = {(e) => eLine(e)}
                placeholder = "End Line"
                defaultValue = { func.eLine }
            ></input>
            <input // color
                type = 'color'
                className = "colorSelectors"
                onChange = {(e) => setColor(e)} 
                defaultValue = { func.color }
            ></input>
            <button // delete function`s inputs
                className = "deleteButton"
                onClick = {(index) => delFunction(index)}
            >Delete
            </button>
            <input  // checkbox for derevative
                className = "derevateCheck"
                type = 'checkbox'
                onClick = {() => func.isDerivative = ! func.isDerivative}
                defaultChecked = { func.isDerivative ? true : false }
            ></input>
        </div>
    );

}

export default FuncInputs;