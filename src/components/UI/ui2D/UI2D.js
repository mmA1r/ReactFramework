import { useState } from "react";

import FuncInputs from "./funcInputs/FuncInputs";

import './ui2D.css'
import './addFunction.css'

function UI2D(props) {
    const { funcs, addFunction, delFunction } = props;
    const [funcsLength, setFuncsLength] = useState(funcs.length);

    const addFunctionClick = () => {
        addFunction();
        setFuncsLength(funcs.length);
    };

    const delFunctionClick = index => {
        delFunction(index);
        setFuncsLength(funcs.length);
    };

    return (
        <div className="ui2D" key={funcsLength}>
            <button
                className="addFunctionButton"
                onClick={addFunctionClick}
            >Add Function</button>
            <div>
                {funcs.map((func, index) =>
                    <FuncInputs
                        key={index}
                        index={index}
                        func={func}
                        delFunction={delFunctionClick}
                    ></FuncInputs>
                )}
            </div>
        </div>
    );
}

export default UI2D;