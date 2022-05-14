import './funcInputs.css'
import './heart.css'
import './deleteButton.css'

function FuncInputs(props) {
    const { func, delFunction, index } = props;

    const setFunction = (e) => {
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
                className="funcInputs"
                onKeyUp={setFunction}
                placeholder="y = f(x)"
                defaultValue={func.value}
            ></input>
            <input // width
                className="funcInputs"
                onKeyUp={setWidth}
                placeholder="width"
                defaultValue={func.width}
            ></input>
            <input //start Line
                className="funcInputs"
                onKeyUp={sLine}
                placeholder="Start Line"
                defaultValue={func.sLine}
            ></input>
            <input // end Line
                className="funcInputs"
                onKeyUp={eLine}
                placeholder="End Line"
                defaultValue={func.eLine}
            ></input>
            <input // color
                type='color'
                className="colorSelectors"
                onChange={setColor}
                defaultValue={func.color}
            ></input>
            <button // delete function`s inputs
                className="deleteButton"
                onClick={() => delFunction(index)}
            >Delete
            </button>
            <input  // checkbox for derevative
                className="derevateCheck"
                type='checkbox'
                onClick={() => func.isDerivative = !func.isDerivative}
                defaultChecked={func.isDerivative}
            ></input>
        </div>
    );

}

export default FuncInputs;