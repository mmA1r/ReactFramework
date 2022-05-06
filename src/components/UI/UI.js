import React from "react";
import UI2D from './ui2D/UI2D';
import UI3D from './ui3D/UI3D';

import './ui.css';
import './uiButton.css';


class UI extends React.Component {
    constructor(props) {
        super(props);
        const { name, funcs, run } = props;
        //graph2D
        this.name = name;
        this.funcs = funcs;
        this.state = { showPanel: false, funcsLength: this.funcs.length};
        this.run = run;
    }

    addFunction() {
        this.funcs.push({
            f: () => null,
            color: '#ff0000',
            width: 1,
            sLine: null,
            eLine: null,
            isDerivative: false
        });
        this.setState({ funcsLength: this.funcs.length });
    }

    delFunction(index) {
        //console.log(index)
        this.funcs.splice(index, 1);
        this.setState({ funcsLength: this.funcs.length });
        this.run();
    }

    togglePanel() {
        this.setState({ showPanel: !this.state.showPanel});
    }

    setActive() {
        return `uiButton ${this.state.showPanel ? 'activeState' : ''}`;
    }

    setVisible() {
        return `isVisible ${this.state.showPanel ? 'visible' : ''}`;
    }

    render() {
        return (
            <div className = {this.state.showPanel ? 'uiVisible' : 'ui'}>
                <button 
                    className = { this.setActive() }
                    onClick = {() => {this.togglePanel();}}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <div className = { this.setVisible() }>
                    {this.name === "graph2D" ? 
                        <UI2D
                            key = { this.state.funcsLength }
                            funcs = { this.funcs }
                            addFunction = {() => this.addFunction()}
                            delFunction = {(index) => this.delFunction(index)}
                            run = {() => this.run()}
                        ></UI2D>
                        : 
                        <UI3D></UI3D>
                    }
                </div>
            </div>
        );
    }
}

export default UI;