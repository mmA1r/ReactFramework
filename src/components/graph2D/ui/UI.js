import React from "react";
import FuncInputs from "../funcInputs/FuncInputs";

class UI extends React.Component {
    constructor(props) {
        super(props);
        const { funcs, addFunction, run } = props;
        this.addFunction = addFunction;
        this.funcs = funcs;
        this.run = run;
    }

    render() {
        return (
            <div>
                <button onClick={() => this.addFunction()}>Добавить</button>
                <div>
                    {this.funcs.map((func, index) => 
                        <FuncInputs 
                            key={index}
                            func={func}
                            run={() => this.run()}
                        ></FuncInputs>
                    )}
                </div>
            </div>
        );
    }
}

export default UI;