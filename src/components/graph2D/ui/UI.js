import React from "react";
import FuncInputs from "../funcInputs/FuncInputs";

class UI extends React.Component {
    constructor(props) {
        super(props);
        const { funcs, addFunction, delFunction, run } = props;
        this.addFunction = addFunction;
        this.delFunction = delFunction;
        this.funcs = funcs;
        this.run = run;
    }

    render() {
        return (
            <div>
                <button onClick = {() => this.addFunction()}>Add Function</button>
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

export default UI;