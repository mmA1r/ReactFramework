import React from "react";
import UI2D from './ui2D/UI2D';
import UI3D from "./ui3D/UI3D";

import './ui.css';
import './uiButton.css';


class UI extends React.Component {
    constructor(props) {
        super(props);
        const { name, funcs = [], run2D, isPoints, isEdges, isPolygons, isAnimation, isLight, isSideLight, selectFigure, selectColor, selectLight } = props;
        this.name = name;
        //graph2D
        this.funcs = funcs;
        this.state = { showPanel: false, funcsLength: this.funcs.length, options: false};
        this.run2D = run2D;
        //graph3D
        this.isPoints = isPoints;
        this.isEdges = isEdges;
        this.isPolygons = isPolygons;
        this.isAnimation = isAnimation;
        this.isLight = isLight;
        this.isSideLight = isSideLight;
        this.selectFigure = selectFigure;
        this.selectColor = selectColor;
        this.selectLight = selectLight;
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
        this.run2D();
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
                    { this.name === "graph2D" ?          //2D
                        <UI2D
                            key = { this.state.funcsLength }
                            funcs = { this.funcs }
                            addFunction = {() => this.addFunction()}
                            delFunction = {(index) => this.delFunction(index)}
                            run = {() => this.run2D()}
                        ></UI2D>
                    : this.name === "graph3D" ?     //3D
                        <UI3D
                            isPoints = {() => this.isPoints()}
                            isEdges = {() => this.isEdges()}
                            isPolygons = {() => this.isPolygons()}
                            isAnimation = {() => this.isAnimation()}
                            isLight = {() => this.isLight()}
                            isSideLight = {() => this.isSideLight()}
                            selectFigure = {() => this.selectFigure()}
                            selectColor = {() => this.selectColor()}
                            selectLight = {() => this.selectLight()}
                        ></UI3D>
                    : ''
                    }
                </div>
            </div>
        );
    }
}

export default UI;