import React from "react";

class FuncInputs extends React.Component {
    constructor(props) {
        super(props);
        const { func, delFunction, run } = props;
        this.func = func;
        this.delFunction = delFunction;
        this.run = run;
    }

    setFunction(e) {
        try{
            let f;
            //eslint-disable-next-line
            eval(`f = function (x) {return ${e.target.value};}`);
            this.func.f = f;
            this.func.value = e.target.value;
            this.run();
        } catch (e) {
            //console.log(e);
        }
    }

    setColor(e) {
        this.func.color = e.target.value;
        this.run();        
    }

    setWidth(e) {
        this.func.width = e.target.value;
        this.run();
    }

    sLine(e) {
        this.func.sLine = e.target.value;
        this.run();
    }

    eLine(e) {
        this.func.eLine = e.target.value;
        this.run();
    }

    render() {
        return (
            <div>
                <input // function
                    onKeyUp = {(e) => this.setFunction(e)}
                    placeholder = "y = f(x)"
                    defaultValue = { this.func.value }
                ></input>
                <input // color
                    onKeyUp = {(e) => this.setColor(e)} 
                    placeholder = "color"
                    defaultValue = { this.func.color }
                ></input>
                <input // width
                    onKeyUp = {(e) => this.setWidth(e)}
                    placeholder = "width"
                    defaultValue = { this.func.width }
                ></input>
                <input //start Line
                    onKeyUp = {(e) => this.sLine(e)}
                    placeholder = "Start Line"
                    defaultValue = { this.func.sLine }
                ></input>
                <input // end Line
                    onKeyUp = {(e) => this.eLine(e)}
                    placeholder = "End Line"
                    defaultValue = { this.func.eLine }
                ></input>
                <button // delete function`s inputs
                    onClick = {(index) => this.delFunction(index)}
                >Delete</button>
                <input className = "derevateCheck" // checkbox for derevative
                    type = 'checkbox'
                    onClick = {() => this.func.isDerivative = !this.func.isDerivative}
                    defaultChecked = { this.func.isDerivative ? true : false }
                ></input>
            </div>
        );
    }
}

export default FuncInputs;