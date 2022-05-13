import React from 'react';

import UniversalCalculator from '../../modules/calculator/UniversalCalculator';

import './calculator.css';
import './buttons.css'
import './inputs.css'

class Calculator extends React.Component {

    constructor(props) {
        super(props)
        
        this.calc = new UniversalCalculator;
        this.state = { showRules: false }
    }

    componentDidMount() {
        this.A = document.getElementById('a');
        this.B = document.getElementById('b');
        this.C = document.getElementById('result');
    }

    showValue(name) {
        return this.C.value = this.calc[name](this.calc.toValue(this.A.value), this.calc.toValue(this.B.value))
    }

    showRules() {
        this.setState({ showRules: !this.state.showRules })
    }

    render() {
        return (
            <div className = 'calculator'>
                <div className = 'calcInputs'>
                    <textarea className = "numbers" id = 'a' placeholder = "0"></textarea>
                    <textarea className = "numbers" id = 'b' placeholder = "0"></textarea>
                </div>
                <div className = 'calcInputs'>
                    <textarea className = "result" id = 'result' placeholder = "result" disabled></textarea>
                </div>
                <div className = 'operandsBlock'>
                    <button className = "operandButton" onClick = { () => this.showValue('add') }> Add </button>
                    <button className = "operandButton" onClick = { () => this.showValue('sub') }> Sub </button>
                    <button className = "operandButton" onClick = { () => this.showValue('mult') }> Mult </button>
                </div>
                <div className = 'operandsBlock'>
                    <button className = "operandButton" onClick = { () => this.showValue('div') }> Div </button>
                    <button className = "operandButton" onClick = { () => this.showValue('prod') }> Prod </button>
                    <button className = "operandButton" onClick = { () => this.showValue('pow') }> Pow </button>
                    </div>
                <div className = 'operandsBlock'>
                    <button className = "operandButton" onClick = { () => this.showValue('one') }> One </button>
                    <button className = "operandButton" onClick = { () => this.showValue('zero') }> Zero </button>
                </div>
                <div>
                    <button className = { this.state.showRules ? 'rulesButton act' : 'rulesButton' } onClick = {() => this.showRules() }>Rules</button>
                    <div className = { this.state.showRules ? 'rules act' : 'rules' }>
                        <a>
                            <h4>Text input rules:</h4>
                            Real ( 1 )<br></br>
                            Complex ( 1+/-i*2 )<br></br>
                            Vectors ( (1 2 3) )<br></br>
                            Matrix  ( 1, 2 /n 3, 4 )<br></br>
                            Polynomials ( 1*x^2+/-2*x^3 )
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;