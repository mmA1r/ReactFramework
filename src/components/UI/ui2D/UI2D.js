import React from "react";
import FuncInputs from "./funcInputs/FuncInputs";

import './ui2D.css'
import './addFunction.css'

class UI2D extends React.Component {
    constructor(props) {
        super(props);
        const { funcs, addFunction, delFunction, run } = props;
        this.funcs = funcs;
        this.addFunction = addFunction;
        this.delFunction = delFunction;
        this.run = run;
    }

    render() {
        return (
            <div className = "ui2D">
                <button
                    className = "addFunctionButton"
                    onClick = {() => this.addFunction()}
                >Add Function</button>
                <div>
                    { this.funcs.map((func, index) =>
                        <FuncInputs 
                            key = { index }
                            func = { func }
                            delFunction = {(index) => this.delFunction(index)}
                            run = {() => this.run()}
                        ></FuncInputs>
                    )}
                </div>
            </div>
        );
    }
}

export default UI2D;