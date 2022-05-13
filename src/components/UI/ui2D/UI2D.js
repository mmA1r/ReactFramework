import FuncInputs from "./funcInputs/FuncInputs";

import './ui2D.css'
import './addFunction.css'

function UI2D (props) {
    const { funcs, addFunction, delFunction } = props;

    return (
        <div className = "ui2D">
            <button
                className = "addFunctionButton"
                onClick = { () => addFunction() }
            >Add Function</button>
            <div>
                { funcs.map((func, index) =>
                    <FuncInputs 
                        key = { index }
                        func = { func }
                        delFunction = {(index) => delFunction(index)}
                    ></FuncInputs>
                )}
            </div>
        </div>
    );
}

export default UI2D;