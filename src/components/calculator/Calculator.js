import UniversalCalculator from '../../modules/calculator/UniversalCalculator';

import './calculator.css';
import './buttons.css'
import './inputs.css'
import { useRef, useState } from 'react';

function Calculator () {

    const calc = new UniversalCalculator;

    const [showRules, setShowRules] = useState(false);

    let A;
    let B;

    const C = useRef(null);
    const onChangeC = () => { C.current.focus() }

    const showValue = (name) => {
        return C.current.value = calc[name](calc.toValue(A), calc.toValue(B))
    }

    return (
        <div className = 'calculator'>
            <div className = 'calcInputs'>
                <textarea 
                    className = "numbers" 
                    placeholder = "0" 
                    onChange = {(e) => A = e.target.value}
                ></textarea>
                <textarea 
                    className = "numbers" 
                    placeholder = "0" 
                    onChange = {(e) => B = e.target.value}
                ></textarea>
            </div>
            <div className = 'calcInputs'>
                <textarea 
                    className = "result" 
                    ref = {C} 
                    placeholder = "result" 
                    disabled 
                    onChange = {onChangeC}
                ></textarea>
            </div>
            <div className = 'operandsBlock'>
                <button className = "operandButton" onClick = { () => showValue('add') }> Add </button>
                <button className = "operandButton" onClick = { () => showValue('sub') }> Sub </button>
                <button className = "operandButton" onClick = { () => showValue('mult') }> Mult </button>
            </div>
            <div className = 'operandsBlock'>
                <button className = "operandButton" onClick = { () => showValue('div') }> Div </button>
                <button className = "operandButton" onClick = { () => showValue('prod') }> Prod </button>
                <button className = "operandButton" onClick = { () => showValue('pow') }> Pow </button>
                </div>
            <div className = 'operandsBlock'>
                <button className = "operandButton" onClick = { () => showValue('one') }> One </button>
                <button className = "operandButton" onClick = { () => showValue('zero') }> Zero </button>
            </div>
            <div>
                <button 
                    className = { showRules ? 'rulesButton act' : 'rulesButton' } 
                    onClick = {() => setShowRules(!showRules) }
                >Rules</button>
                <div className = { showRules ? 'rules act' : 'rules' }>
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

export default Calculator;